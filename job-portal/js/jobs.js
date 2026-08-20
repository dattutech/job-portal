/* ==========================================================================
   jobs.js — data layer
   Responsible for: fetching jobs.json, caching it in memory, and rendering
   the "ticket" job card markup used across every page.
   ========================================================================== */

const JobsData = (() => {
  let cache = null;

  // Fetch jobs.json (relative to the page). Falls back to an embedded
  // dataset (jobs-fallback.js) if fetch fails — e.g. when the site is
  // opened directly from disk without a local server.
  async function load() {
    if (cache) return cache;
    try {
      const res = await fetch("jobs.json", { cache: "no-store" });
      if (!res.ok) throw new Error("jobs.json request failed: " + res.status);
      cache = await res.json();
    } catch (err) {
      console.warn("Falling back to embedded job data:", err.message);
      cache = typeof JOBS_FALLBACK !== "undefined" ? JOBS_FALLBACK : [];
    }
    return cache;
  }

  function getById(id) {
    return cache ? cache.find((j) => String(j.id) === String(id)) : null;
  }

  function sortByLatest(jobs) {
    return [...jobs].sort((a, b) => new Date(b.date) - new Date(a.date));
  }

  function relatedJobs(job, limit = 3) {
    if (!cache) return [];
    return cache
      .filter((j) => j.id !== job.id && (j.category === job.category || j.company === job.company))
      .slice(0, limit);
  }

  function timeAgo(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    if (diff <= 0) return "Today";
    if (diff === 1) return "1 day ago";
    if (diff < 30) return diff + " days ago";
    return new Date(dateStr).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" });
  }

  function isNew(dateStr) {
    const diff = Math.floor((Date.now() - new Date(dateStr).getTime()) / 86400000);
    return diff <= 3;
  }

  return { load, getById, sortByLatest, relatedJobs, timeAgo, isNew };
})();

/* -------------------- Rendering -------------------- */

// Builds the signature "boarding pass" job ticket card as an HTML string.
function jobTicketTemplate(job, index = 0) {
  const delay = Math.min(index * 0.06, 0.4).toFixed(2);
  return `
  <article class="ticket" style="animation-delay:${delay}s" data-id="${job.id}" data-category="${escapeAttr(job.category)}">
    <div class="ticket-main">
      <div class="ticket-top">
        <img class="ticket-logo" src="${job.logo}" alt="${escapeAttr(job.company)} logo" loading="lazy">
        <div class="ticket-title">
          <span class="job-title">${escapeHtml(job.title)}</span>
          <span class="job-company">${escapeHtml(job.company)} • ${escapeHtml(job.location)}</span>
        </div>
      </div>
      <div class="ticket-meta">
        <span title="Experience">${iconBriefcase()} ${escapeHtml(job.experience)}</span>
        <span title="Salary">${iconWallet()} ${escapeHtml(job.salary)}</span>
        <span title="Posted">${iconClock()} ${JobsData.timeAgo(job.date)}</span>
      </div>
      <p class="ticket-desc">${escapeHtml(job.description)}</p>
      <div class="ticket-actions">
        <a class="btn btn-primary btn-sm" href="${job.apply}" target="_blank" rel="noopener">Apply Now</a>
        <a class="btn btn-outline btn-sm" href="job-details.html?id=${job.id}">Read More</a>
      </div>
    </div>
    <div class="ticket-stub">
      <span class="stub-label ${job.featured ? "featured" : ""}">${job.featured ? "Featured" : job.category}</span>
      <span class="stub-date">${JobsData.isNew(job.date) ? '<span class="badge-new">New</span><br>' : ""}${formatDateShort(job.date)}</span>
      <div class="stub-barcode" aria-hidden="true"></div>
    </div>
  </article>`;
}

function renderJobList(target, jobs) {
  const el = typeof target === "string" ? document.querySelector(target) : target;
  if (!el) return;
  if (!jobs.length) {
    el.innerHTML = `<div class="empty-state">
        <h3>No jobs match that search</h3>
        <p>Try a different keyword, location, or category.</p>
      </div>`;
    return;
  }
  el.innerHTML = jobs.map((j, i) => jobTicketTemplate(j, i)).join("");
}

function formatDateShort(dateStr) {
  return new Date(dateStr).toLocaleDateString("en-IN", { day: "2-digit", month: "short" });
}

function escapeHtml(str = "") {
  return String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}
function escapeAttr(str = "") { return escapeHtml(str); }

/* Small inline icon set (stroke-based, currentColor) kept local to avoid
   pulling in an icon font/library. */
function iconBriefcase() { return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`; }
function iconWallet() { return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12h.01"/></svg>`; }
function iconClock() { return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>`; }
function iconMapPin() { return `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>`; }
