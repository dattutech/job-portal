/* ==========================================================================
   search.js — filtering, sorting, and search-form wiring
   ========================================================================== */

// Filters a jobs array against a query string (title/company/location),
// a category, and a location — all optional.
function filterJobs(jobs, { query = "", category = "", location = "" } = {}) {
  const q = query.trim().toLowerCase();
  const loc = location.trim().toLowerCase();

  return jobs.filter((job) => {
    const matchesQuery =
      !q ||
      job.title.toLowerCase().includes(q) ||
      job.company.toLowerCase().includes(q) ||
      job.location.toLowerCase().includes(q) ||
      (job.skills || []).join(" ").toLowerCase().includes(q);

    const matchesCategory = !category || category === "All" || job.category === category;
    const matchesLocation = !loc || job.location.toLowerCase().includes(loc);

    return matchesQuery && matchesCategory && matchesLocation;
  });
}

function sortJobs(jobs, sortBy = "latest") {
  const list = [...jobs];
  if (sortBy === "latest") return list.sort((a, b) => new Date(b.date) - new Date(a.date));
  if (sortBy === "oldest") return list.sort((a, b) => new Date(a.date) - new Date(b.date));
  if (sortBy === "salary") return list.sort((a, b) => extractSalaryNumber(b.salary) - extractSalaryNumber(a.salary));
  if (sortBy === "az") return list.sort((a, b) => a.title.localeCompare(b.title));
  return list;
}

function extractSalaryNumber(salaryStr) {
  const match = String(salaryStr).match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

/* -------------------- Wiring: Home hero search -------------------- */
// The home page hero search simply redirects to jobs.html with the query
// pre-filled, so results always land on the full listings page.
function wireHomeSearch() {
  const form = document.getElementById("hero-search-form");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("hero-search-input").value.trim();
    const loc = document.getElementById("hero-search-location").value.trim();
    const params = new URLSearchParams();
    if (q) params.set("q", q);
    if (loc) params.set("loc", loc);
    window.location.href = "jobs.html" + (params.toString() ? "?" + params.toString() : "");
  });
}

/* -------------------- Wiring: Jobs listing page -------------------- */
function wireJobsPageControls({ jobs, onChange }) {
  const searchInput = document.getElementById("jobs-search-input");
  const categorySelect = document.getElementById("jobs-category-select");
  const locationInput = document.getElementById("jobs-location-input");
  const sortSelect = document.getElementById("jobs-sort-select");

  function apply() {
    const state = {
      query: searchInput ? searchInput.value : "",
      category: categorySelect ? categorySelect.value : "",
      location: locationInput ? locationInput.value : "",
      sort: sortSelect ? sortSelect.value : "latest",
    };
    let result = filterJobs(jobs, state);
    result = sortJobs(result, state.sort);
    onChange(result);
  }

  [searchInput, categorySelect, locationInput, sortSelect].forEach((el) => {
    if (!el) return;
    el.addEventListener("input", debounce(apply, 180));
    el.addEventListener("change", apply);
  });

  return apply;
}

function debounce(fn, delay) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(...args), delay);
  };
}

// Reads ?q= and ?loc= from the URL so links from the home page / category
// cards can pre-fill the jobs page search.
function getQueryParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    q: params.get("q") || "",
    loc: params.get("loc") || "",
    category: params.get("category") || "",
  };
}
