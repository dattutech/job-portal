/* ==========================================================================
   partials.js — shared header & footer markup
   JobUpdatesByKiran
   ========================================================================== */

const HEADER_HTML = `
<header class="site-header">
  <div class="container nav">

    <!-- BRAND -->
    <a href="index.html" class="brand">
      <span class="brand-mark">JK</span>

      <span class="brand-text">
        JobUpdatesByKiran
        <br>
        <small>I am a Software Developer</small>
      </span>
    </a>

    <!-- DESKTOP NAVIGATION -->
    <nav class="nav-links" id="nav-links">
      <a href="index.html">Home</a>
      <a href="jobs.html">Jobs</a>
      <a href="companies.html">Companies</a>
      <a href="categories.html">Categories</a>
      <a href="about.html">About</a>
      <a href="contact.html">Contact</a>
    </nav>

    <!-- HEADER ACTIONS -->
    <div class="nav-actions">

      <!-- SEARCH BUTTON -->
      <button
        class="nav-search-toggle"
        id="nav-search-toggle"
        aria-label="Toggle search"
        type="button"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <circle cx="11" cy="11" r="7"/>
          <path d="m21 21-4.3-4.3"/>
        </svg>
      </button>

      <!-- BROWSE JOBS -->
      <a href="jobs.html" class="btn btn-primary btn-sm">
        Browse Jobs
      </a>

      <!-- MOBILE MENU -->
      <button
        class="nav-toggle"
        id="nav-toggle"
        aria-label="Toggle menu"
        type="button"
      >
        <span></span>
      </button>

    </div>
  </div>

  <!-- HEADER SEARCH -->
  <div class="header-search" id="header-search">
    <div class="container header-search-inner">

      <form
        id="header-search-form"
        style="display:flex; gap:10px; width:100%;"
      >

        <input
          type="text"
          id="header-search-input"
          placeholder="Search job title, company, or location…"
        >

        <button
          class="btn btn-primary btn-sm"
          type="submit"
        >
          Search
        </button>

      </form>

    </div>
  </div>

</header>
`;


/* ==========================================================================
   FOOTER
   ========================================================================== */

const FOOTER_HTML = `
<footer class="site-footer">

  <div class="container">

    <div class="footer-grid">

      <!-- FOOTER BRAND -->
      <div class="footer-brand">

        <a href="index.html" class="brand">

          <span class="brand-mark">JK</span>

          <span class="brand-text">
            JobUpdatesByKiran
          </span>

        </a>

        <p>
          JobUpdatesByKiran is not responsible for the accuracy, selection process, or outcomes of any job listing. Please verify all job details and apply only through the official company website.


        </p>

        <!-- SOCIAL LINKS -->
        <div class="footer-social">

          <!-- LinkedIn -->
          <a href="#" aria-label="LinkedIn">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="color:#fff"
            >
              <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.7c0-1.36-.03-3.1-1.9-3.1-1.9 0-2.2 1.48-2.2 3v5.8h-4V9Z"/>
            </svg>
          </a>

              <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.8 11.6 11.6 0 0 1-8.5-4.4 4.2 4.2 0 0 0 1.3 5.6c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2 2.9 3.8 2.9A8.3 8.3 0 0 1 2 19.4a11.6 11.6 0 0 0 6.3 1.9c7.5 0 11.7-6.4 11.7-12v-.5c.8-.6 1.5-1.3 2-2Z"/>
            </svg>
          </a>

          <!-- Instagram -->
          <a href="#" aria-label="Instagram">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
              style="color:#fff"
            >
              <path d="M12 2c2.7 0 3.1 0 4.1.06 1.1.05 1.8.2 2.5.5.7.3 1.2.6 1.8 1.2.6.6.9 1.1 1.2 1.8.3.7.4 1.4.5 2.5.05 1 .06 1.4.06 4.1s0 3.1-.06 4.1c-.05 1.1-.2 1.8-.5 2.5-.3.7-.6 1.2-1.2 1.8-.6.6-1.1.9-1.8 1.2-.7.3-1.4.4-2.5.5-1 .05-1.4.06-4.1.06s-3.1 0-4.1-.06c-1.1-.05-1.8-.2-2.5-.5-.7-.3-1.2-.6-1.8-1.2-.6-.6-.9-1.1-1.2-1.8-.3-.7-.4-1.4-.5-2.5C2 15.1 2 14.7 2 12s0-3.1.06-4.1c.05-1.1.2-1.8.5-2.5.3-.7.6-1.2 1.2-1.8.6-.6 1.1-.9 1.8-1.2.7-.3 1.4-.4 2.5-.5C8.9 2 9.3 2 12 2Zm0 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm0 8.2a3.2 3.2 0 1 1 0-6.4 3.2 3.2 0 0 1 0 6.4ZM17.4 6.6a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0Z"/>
            </svg>
          </a>

        </div>

      </div>


      <!-- QUICK LINKS -->
      <div class="footer-col">

        <h4>Quick Links</h4>

        <a href="index.html">Home</a>
        <a href="jobs.html">Browse Jobs</a>
        <a href="companies.html">Companies</a>
        <a href="about.html">About Us</a>
        <a href="contact.html">Contact</a>

      </div>


      <!-- CATEGORIES -->
      <div class="footer-col">

        <h4>Categories</h4>

        <a href="jobs.html?category=Software">
          Software Jobs
        </a>

        <a href="jobs.html?category=Internship">
          Internships
        </a>

        <a href="jobs.html?category=Government">
          Government Jobs
        </a>

        <a href="jobs.html?category=Work%20From%20Home">
          Work From Home
        </a>

        <a href="jobs.html?category=BPO">
          BPO Jobs
        </a>

      </div>


      <!-- CONTACT -->
      <div class="footer-col">

        <h4>Contact</h4>

        <li>Do follow my Instagram</li>
        <li>the_kiran_verse</li>
        <li>I am a Software Developer</li>

      </div>

    </div>


    <!-- FOOTER BOTTOM -->
    <div class="footer-bottom">

      <span>
        © <span id="footer-year"></span>
        JobUpdatesByKiran. All rights reserved.
      </span>

      <span>
        A product by Techxelon.
      </span>

    </div>

  </div>

</footer>
`;


/* ==========================================================================
   RENDER HEADER & FOOTER
   ========================================================================== */

function renderPartials() {

  const headerSlot =
    document.getElementById("site-header-slot");

  const footerSlot =
    document.getElementById("site-footer-slot");

  if (headerSlot) {
    headerSlot.innerHTML = HEADER_HTML;
  }

  if (footerSlot) {
    footerSlot.innerHTML = FOOTER_HTML;
  }
}