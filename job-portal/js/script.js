/* ==========================================================================
   script.js — UI wiring + per-page initializers
   Every page includes this file plus jobs.js, search.js, jobs-fallback.js.
   The page's <body data-page="..."> attribute decides what to initialize.
   ========================================================================== */

// Category metadata shared by the home page, categories page, and filter
// dropdowns. `key` must match the "category" field used in jobs.json.
const CATEGORY_META = [
  { key: "Software", label: "Software Jobs", desc: "Development & engineering roles", icon: "code" },
  { key: "IT", label: "IT Jobs", desc: "Support, cloud & infrastructure", icon: "server" },
  { key: "Internship", label: "Internships", desc: "Early-career training programs", icon: "graduation" },
  { key: "Government", label: "Government Jobs", desc: "Public sector recruitment", icon: "building" },
  { key: "Work From Home", label: "Work From Home", desc: "Fully remote positions", icon: "home" },
  { key: "BPO", label: "BPO Jobs", desc: "Voice & customer support", icon: "headset" },
  { key: "Marketing", label: "Marketing", desc: "Growth, SEO & brand roles", icon: "megaphone" },
  { key: "Finance", label: "Finance", desc: "Banking & financial analysis", icon: "chart" },
];

const CATEGORY_ICONS = {
  code: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
  server: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="3" width="20" height="7" rx="1.5"/><rect x="2" y="14" width="20" height="7" rx="1.5"/><path d="M6 7h.01M6 18h.01"/></svg>`,
  graduation: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10 12 5 2 10l10 5 10-5Z"/><path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5"/></svg>`,
  building: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="1"/><path d="M9 22v-4h6v4M9 9h1M14 9h1M9 13h1M14 13h1"/></svg>`,
  home: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 10 9-7 9 7"/><path d="M5 9v11h14V9"/></svg>`,
  headset: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 14a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2ZM3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2Z"/></svg>`,
  megaphone: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m3 11 18-5v12L3 13v-2Z"/><path d="M7 13v5a2 2 0 0 0 2 2h1v-6"/></svg>`,
  chart: `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M7 14l4-4 3 3 5-6"/></svg>`,
};

document.addEventListener("DOMContentLoaded", async () => {
  renderPartials();
  wireHeader();
  wireFooterYear();
  await JobsData.load();

  const page = document.body.dataset.page;
  if (page === "home") initHomePage();
  if (page === "jobs") initJobsPage();
  if (page === "job-details") initJobDetailsPage();
  if (page === "categories") initCategoriesPage();
  if (page === "companies") initCompaniesPage();
  if (page === "contact") initContactPage();

  revealOnScroll();
});

/* -------------------- Header (nav toggle + search toggle) -------------------- */
function wireHeader() {
  const navToggle = document.getElementById("nav-toggle");
  const navLinks = document.getElementById("nav-links");
  navToggle?.addEventListener("click", () => navLinks.classList.toggle("mobile-open"));

  const searchToggle = document.getElementById("nav-search-toggle");
  const headerSearch = document.getElementById("header-search");
  searchToggle?.addEventListener("click", () => {
    headerSearch.classList.toggle("is-open");
    if (headerSearch.classList.contains("is-open")) headerSearch.querySelector("input")?.focus();
  });

  const headerSearchForm = document.getElementById("header-search-form");
  headerSearchForm?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("header-search-input").value.trim();
    window.location.href = "jobs.html" + (q ? "?q=" + encodeURIComponent(q) : "");
  });

  // Highlight the current page in the nav
  const current = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".nav-links a").forEach((a) => {
    if (a.getAttribute("href") === current) a.classList.add("active");
  });
}

function wireFooterYear() {
  const el = document.getElementById("footer-year");
  if (el) el.textContent = new Date().getFullYear();
}

/* -------------------- Scroll reveal -------------------- */
function revealOnScroll() {
  const items = document.querySelectorAll(".reveal");
  if (!items.length || !("IntersectionObserver" in window)) {
    items.forEach((i) => i.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((i) => io.observe(i));
}

/* ==========================================================================
   HOME PAGE
   ========================================================================== */
async function initHomePage() {
  const jobs = await JobsData.load();

  // Featured jobs (flagged featured:true), fall back to latest if none
  const featured = jobs.filter((j) => j.featured);
  renderJobList("#featured-jobs-grid", (featured.length ? featured : JobsData.sortByLatest(jobs)).slice(0, 3));

  // Latest 10 jobs, newest first
  renderJobList("#latest-jobs-grid", JobsData.sortByLatest(jobs).slice(0, 10));

  renderCategoryGrid("#home-category-grid", jobs);
  renderCompanyGrid("#home-company-grid", jobs, 8);
  renderMarquee("#marquee-track", jobs);

  document.getElementById("stat-total-jobs").textContent = jobs.length + "+";
  document.getElementById("stat-companies").textContent = uniqueCompanies(jobs).length + "+";

  wireHomeSearch();
}

function renderMarquee(selector, jobs) {
  const el = document.querySelector(selector);
  if (!el) return;
  const names = uniqueCompanies(jobs);
  const doubled = [...names, ...names]; // duplicate for seamless CSS loop
  el.innerHTML = doubled.map((n) => `<span>${escapeHtml(n)}</span>`).join("");
}

function uniqueCompanies(jobs) {
  return [...new Set(jobs.map((j) => j.company))];
}

/* ==========================================================================
   JOBS PAGE (full listings + filters)
   ========================================================================== */
async function initJobsPage() {
  const jobs = await JobsData.load();
  const grid = document.getElementById("jobs-grid");
  const resultCount = document.getElementById("jobs-result-count");
  const categorySelect = document.getElementById("jobs-category-select");

  // populate category dropdown
  if (categorySelect) {
    categorySelect.innerHTML =
      `<option value="">All Categories</option>` +
      CATEGORY_META.map((c) => `<option value="${c.key}">${c.label}</option>`).join("");
  }

  // pre-fill from query params (?q=, ?loc=, ?category=)
  const { q, loc, category } = getQueryParams();
  if (q) document.getElementById("jobs-search-input").value = q;
  if (loc) document.getElementById("jobs-location-input").value = loc;
  if (category && categorySelect) categorySelect.value = category;

  function paint(list) {
    renderJobList(grid, list);
    resultCount.innerHTML = `<b>${list.length}</b> job${list.length === 1 ? "" : "s"} found`;
  }

  const apply = wireJobsPageControls({ jobs, onChange: paint });
  apply();

  // view toggle: grid vs list
  const viewButtons = document.querySelectorAll(".view-toggle button");
  viewButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      viewButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      grid.classList.toggle("list-view", btn.dataset.view === "list");
    });
  });
}

/* ==========================================================================
   JOB DETAILS PAGE
   ========================================================================== */
async function initJobDetailsPage() {
  const jobs = await JobsData.load();
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const job = jobs.find((j) => String(j.id) === String(id)) || jobs[0];

  if (!job) {
    document.getElementById("job-details-root").innerHTML = `<div class="empty-state"><h3>Job not found</h3><p>It may have been closed or removed.</p></div>`;
    return;
  }

  document.title = job.title + " | JobLane";

  document.getElementById("dd-logo").src = job.logo;
  document.getElementById("dd-logo").alt = job.company + " logo";
  document.getElementById("dd-title").textContent = job.title;
  document.getElementById("dd-company").textContent = job.company;
  document.getElementById("dd-posted").textContent = "Posted " + JobsData.timeAgo(job.date);
  document.getElementById("dd-location").textContent = job.location;
  document.getElementById("dd-salary").textContent = job.salary;
  document.getElementById("dd-experience").textContent = job.experience;
  document.getElementById("dd-qualification").textContent = job.qualification;
  document.getElementById("dd-description").textContent = job.description;
  document.getElementById("dd-apply").href = job.apply;
  document.getElementById("dd-apply-sidebar").href = job.apply;
  document.getElementById("dd-salary-big").textContent = job.salary;

  const respList = document.getElementById("dd-responsibilities");
  respList.innerHTML = (job.responsibilities || []).map((r) => `<li>${escapeHtml(r)}</li>`).join("") || `<li>Details available on the official application page.</li>`;

  const skillsWrap = document.getElementById("dd-skills");
  skillsWrap.innerHTML = (job.skills || []).map((s) => `<span>${escapeHtml(s)}</span>`).join("");

  const shareUrl = window.location.href;
  document.getElementById("share-copy")?.addEventListener("click", async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      const btn = document.getElementById("share-copy");
      btn.dataset.original = btn.dataset.original || btn.innerHTML;
      btn.textContent = "Copied!";
      setTimeout(() => (btn.innerHTML = btn.dataset.original), 1600);
    } catch {
      alert(shareUrl);
    }
  });
  const waShare = document.getElementById("share-whatsapp");
  if (waShare) waShare.href = "https://wa.me/?text=" + encodeURIComponent(job.title + " at " + job.company + " — " + shareUrl);
  const liShare = document.getElementById("share-linkedin");
  if (liShare) liShare.href = "https://www.linkedin.com/sharing/share-offsite/?url=" + encodeURIComponent(shareUrl);

  renderJobList("#related-jobs-grid", JobsData.relatedJobs(job, 3));
}

/* ==========================================================================
   CATEGORIES PAGE
   ========================================================================== */
async function initCategoriesPage() {
  const jobs = await JobsData.load();
  renderCategoryGrid("#categories-full-grid", jobs, true);
}

function renderCategoryGrid(selector, jobs, big = false) {
  const el = document.querySelector(selector);
  if (!el) return;
  el.innerHTML = CATEGORY_META.map((cat) => {
    const count = jobs.filter((j) => j.category === cat.key).length;
    return `
    <a class="cat-card reveal" href="jobs.html?category=${encodeURIComponent(cat.key)}">
      <div class="cat-icon">${CATEGORY_ICONS[cat.icon]}</div>
      <h3>${cat.label}</h3>
      <p>${cat.desc}</p>
      <span class="cat-count">${count} open role${count === 1 ? "" : "s"}</span>
    </a>`;
  }).join("");
  revealOnScroll();
}

/* ==========================================================================
   COMPANIES PAGE
   ========================================================================== */
async function initCompaniesPage() {
  const jobs = await JobsData.load();
  renderCompanyGrid("#companies-full-grid", jobs);
}

function renderCompanyGrid(selector, jobs, limit) {
  const el = document.querySelector(selector);
  if (!el) return;

  const byCompany = {};
  jobs.forEach((j) => {
    if (!byCompany[j.company]) byCompany[j.company] = { logo: j.logo, count: 0, location: j.location };
    byCompany[j.company].count += 1;
  });

  let entries = Object.entries(byCompany).sort((a, b) => b[1].count - a[1].count);
  if (limit) entries = entries.slice(0, limit);

  el.innerHTML = entries
    .map(
      ([name, info]) => `
    <a class="company-card reveal" href="jobs.html?q=${encodeURIComponent(name)}">
      <img src="${info.logo}" alt="${escapeHtml(name)} logo">
      <h3>${escapeHtml(name)}</h3>
      <p>${escapeHtml(info.location)}</p>
      <span class="open-count">${info.count} open job${info.count === 1 ? "" : "s"}</span>
    </a>`
    )
    .join("");
  revealOnScroll();
}

/* ==========================================================================
   CONTACT PAGE
   ========================================================================== */
function initContactPage() {
  const form = document.getElementById("contact-form");
  const success = document.getElementById("contact-success");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    // Front-end only demo: no backend wired up, so we just confirm receipt.
    success.classList.add("show");
    form.reset();
    success.scrollIntoView({ behavior: "smooth", block: "center" });
  });
}
