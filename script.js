


const buttons = document.querySelectorAll(".menu-btn");
const megaMenu = document.getElementById("megaMenu");
const megaContent = document.getElementById("megaContent");

const menus = {

  mba: `
    <div class="mega-col">
      <h4>Explore</h4>
      <a href="top-mba-colleges.html">Top MBA Colleges</a>
      <a href="mba-popular-courses.html">Popular Courses</a>
      <a href="mba-specializations.html">Specializations</a>
      <a href="exams.html">Exams</a>
    </div>

    <div class="mega-col">
      <h4>By Location</h4>
      <a href="mba-colleges-india.html">MBA Colleges in India</a>
      <a href="mba-colleges-delhi.html">MBA Colleges in Delhi</a>
      <a href="mba-colleges-mumbai.html">MBA Colleges in Mumbai</a>
      <a href="mba-colleges-bangalore.html">MBA Colleges in Bangalore</a>
    </div>

    <div class="mega-col">
      <h4>Featured</h4>
      <a href="iims-pune.html">IIMS Pune</a>
      <a href="iebm.html">IEBM</a>
      <a href="cgc-university.html">CGC University</a>
    </div>
  `,

  engineering: `
    <div class="mega-col">
      <h4>Explore</h4>
      <a href="top-engineering-colleges.html">Top Engineering Colleges</a>
      <a href="btech-courses.html">B.Tech Courses</a>
      <a href="engineering-specializations.html">Specializations</a>
      <a href="exams.html">Entrance Exams</a>
    </div>

    <div class="mega-col">
      <h4>By Location</h4>
      <a href="engineering-india.html">Engineering in India</a>
      <a href="engineering-delhi.html">Engineering in Delhi</a>
      <a href="engineering-mumbai.html">Engineering in Mumbai</a>
      <a href="engineering-bangalore.html">Engineering in Bangalore</a>
    </div>

    <div class="mega-col">
      <h4>Top Institutes</h4>
      <a href="iit-bombay.html">IIT Bombay</a>
      <a href="iit-delhi.html">IIT Delhi</a>
      <a href="nit-trichy.html">NIT Trichy</a>
    </div>
  `,

  medical: `
    <div class="mega-col">
      <h4>Explore</h4>
      <a href="top-medical-colleges.html">Top Medical Colleges</a>
      <a href="mbbs-course.html">MBBS</a>
      <a href="medical-specializations.html">Specializations</a>
      <a href="exams.html">Entrance Exams</a>
    </div>

    <div class="mega-col">
      <h4>By Location</h4>
      <a href="medical-india.html">Medical in India</a>
      <a href="medical-delhi.html">Medical in Delhi</a>
      <a href="medical-mumbai.html">Medical in Mumbai</a>
      <a href="medical-bangalore.html">Medical in Bangalore</a>
    </div>

    <div class="mega-col">
      <h4>Popular Institutes</h4>
      <a href="aiims-delhi.html">AIIMS Delhi</a>
      <a href="cmc-vellore.html">CMC Vellore</a>
      <a href="jipmer.html">JIPMER</a>
    </div>
  `,

  design: `
    <div class="mega-col">
      <h4>Explore</h4>
      <a href="top-design-colleges.html">Top Design Colleges</a>
      <a href="fashion-design.html">Fashion Design</a>
      <a href="interior-design.html">Interior Design</a>
      <a href="exams.html">Entrance Exams</a>
    </div>

    <div class="mega-col">
      <h4>By Location</h4>
      <a href="design-india.html">Design in India</a>
      <a href="design-delhi.html">Design in Delhi</a>
      <a href="design-mumbai.html">Design in Mumbai</a>
      <a href="design-bangalore.html">Design in Bangalore</a>
    </div>

    <div class="mega-col">
      <h4>Institutes</h4>
      <a href="nift.html">NIFT</a>
      <a href="nid.html">NID</a>
      <a href="pearl-academy.html">Pearl Academy</a>
    </div>
  `,

  abroad: `
    <div class="mega-col">
      <h4>Countries</h4>
      <a href="study-in-usa.html">Study in USA</a>
      <a href="study-in-uk.html">Study in UK</a>
      <a href="study-in-canada.html">Study in Canada</a>
      <a href="study-in-australia.html">Study in Australia</a>
    </div>

    <div class="mega-col">
      <h4>Programs</h4>
      <a href="ug-abroad.html">UG Abroad</a>
      <a href="pg-abroad.html">PG Abroad</a>
      <a href="mba-abroad.html">MBA Abroad</a>
      <a href="ms-abroad.html">MS Abroad</a>
    </div>

    <div class="mega-col">
      <h4>Exams & Help</h4>
      <a href="ielts.html">IELTS</a>
      <a href="toefl.html">TOEFL</a>
      <a href="student-visa.html">Student Visa</a>
    </div>
  `,

  agriculture: `
    <div class="mega-col">
      <h4>Explore</h4>
      <a href="top-agriculture-colleges.html">Top Agriculture Colleges</a>
      <a href="agriculture-courses.html">Popular Courses</a>
      <a href="agriculture-specializations.html">Specializations</a>
      <a href="exams.html">Entrance Exams</a>
    </div>

    <div class="mega-col">
      <h4>By Location</h4>
      <a href="agriculture-india.html">Agriculture in India</a>
      <a href="agriculture-punjab.html">Agriculture in Punjab</a>
      <a href="agriculture-up.html">Agriculture in UP</a>
      <a href="agriculture-maharashtra.html">Agriculture in Maharashtra</a>
    </div>

    <div class="mega-col">
      <h4>Institutes</h4>
      <a href="iari.html">IARI</a>
      <a href="pau.html">PAU</a>
      <a href="tnau.html">TNAU</a>
    </div>
  `,

  online: `
    <div class="mega-col">
      <h4>Online Degrees</h4>
      <a href="online-mba.html">Online MBA</a>
      <a href="online-bba.html">Online BBA</a>
      <a href="online-bca.html">Online BCA</a>
      <a href="online-bcom.html">Online B.Com</a>
    </div>

    <div class="mega-col">
      <h4>Certifications</h4>
      <a href="data-science-cert.html">Data Science</a>
      <a href="ai-ml-cert.html">AI & ML</a>
      <a href="digital-marketing-cert.html">Digital Marketing</a>
      <a href="cyber-security-cert.html">Cyber Security</a>
    </div>

    <div class="mega-col">
      <h4>Platforms</h4>
      <a href="coursera-courses.html">Coursera</a>
      <a href="edx-courses.html">edX</a>
      <a href="upgrad-courses.html">UpGrad</a>
    </div>
  `
};

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const key = btn.dataset.menu;

    megaContent.innerHTML = menus[key];
    megaMenu.classList.add("active");
  });
});

document.addEventListener("click", e => {
  if (!e.target.classList.contains("menu-btn") &&
      !megaMenu.contains(e.target)) {
    megaMenu.classList.remove("active");
  }
});










const tabs = document.querySelectorAll(".tab");
const collegeList = document.getElementById("collegeList");

/* DATA */
const colleges = {
  management: [
    { name: "IIM Ahmedabad", city: "📍Ahmedabad", link: "https://www.iima.ac.in" },
    { name: "IIM Bangalore", city: "📍Bangalore", link: "https://www.iimb.ac.in" },
    { name: "IIM Calcutta", city: "📍Kolkata", link: "https://www.iimcal.ac.in" },
    { name: "Symbiosis (SIBM) Pune", city: "📍Pune", link: "https://www.sibmpune.edu.in" },
    { name: "Christ University", city: "📍Bangalore", link: "https://christuniversity.in" },
    { name: "IIFT Delhi", city: "📍Delhi", link: "https://www.iift.ac.in" },
    { name: "IIM Bodh Gaya", city: "📍Bihar", link: "https://iimbg.ac.in" },
    { name: "ICFAI Business School (IBS)", city: "📍Hyderabad", link: "https://www.ibsindia.org" },
    { name: "IIM Kozhikode", city: "📍Kozhikode", link: "https://www.iimk.ac.in" }
  ],

  engineering: [
    { name: "IIT Bombay", city: "📍Mumbai", link: "https://www.iitb.ac.in" },
    { name: "IIT Delhi", city: "📍Delhi", link: "https://home.iitd.ac.in" },
    { name: "IIT Madras", city: "📍Chennai", link: "https://www.iitm.ac.in" },
    { name: "IIT Kanpur", city: "📍Kanpur", link: "https://www.iitk.ac.in" },
    { name: "IIT Kharagpur", city: "📍Kharagpur", link: "http://www.iitkgp.ac.in" },
    { name: "IIT Roorkee", city: "📍Roorkee", link: "https://www.iitr.ac.in" },
    { name: "IIT Hyderabad", city: "📍Hyderabad", link: "https://www.iith.ac.in" },
    { name: "IIT Guwahati", city: "📍Guwahati", link: "https://www.iitg.ac.in" },
    { name: "NIT Trichy", city: "📍Tiruchirappalli", link: "https://www.nitt.edu" }
  ],

  science: [
    { name: "IISc Bangalore", city: "📍Bangalore", link: "https://iisc.ac.in" },
    { name: "IISER Pune", city: "📍Pune", link: "http://www.iiserpune.ac.in" },
    { name: "Hindu College", city: "📍Delhi", link: "https://hinducollege.ac.in" },
    { name: "Miranda House", city: "📍Delhi", link: "https://www.mirandahouse.ac.in" },
    { name: "Hansraj College", city: "📍Delhi", link: "https://www.hansrajcollege.ac.in" },
    { name: "Madras Christian College", city: "📍Chennai", link: "https://mcc.edu.in" },
    { name: "Kirori Mal College", city: "📍Delhi", link: "http://www.kmcollege.ac.in" },
    { name: "Loyola College", city: "📍Chennai", link: "https://www.loyolacollege.edu" },
    { name: "Stella Maris College", city: "📍Chennai", link: "https://stellamariscollege.edu.in" }
  ],

  architecture: [
    { name: "IIT Kharagpur (Arch)", city: "📍Kharagpur", link: "http://www.iitkgp.ac.in" },
    { name: "NIT Calicut", city: "📍Calicut", link: "http://www.nitc.ac.in" },
    { name: "CEPT University", city: "📍Ahmedabad", link: "https://cept.ac.in" },
    { name: "SPA Delhi", city: "📍Delhi", link: "http://spa.ac.in" },
    { name: "SJB School of Arch", city: "📍Bangalore", link: "https://sjbsap.edu.in" },
    { name: "Jamia Millia Islamia", city: "📍Delhi", link: "https://www.jmi.ac.in" },
    { name: "NIT Trichy (Arch)", city: "📍Tiruchirappalli", link: "https://www.nitt.edu" },
    { name: "NIT Rourkela", city: "📍Rourkela", link: "https://www.nitrkl.ac.in" }
  ],

  medical: [
    { name: "AIIMS Delhi", city: "📍Delhi", link: "https://www.aiims.edu" },
    { name: "CMC Vellore", city: "📍Vellore", link: "https://www.cmch-vellore.edu" },
    { name: "NIMHANS", city: "📍Bangalore", link: "https://nimhans.ac.in" },
    { name: "JIPMER", city: "📍Pondicherry", link: "https://jipmer.edu.in" },
    { name: "SGPGIMS", city: "📍Lucknow", link: "https://sgpgi.ac.in" },
    { name: "BHU (IMS)", city: "📍Varanasi", link: "https://www.bhu.ac.in/ims" },
    { name: "Amrita Vishwa Vidyapeetham", city: "📍Coimbatore", link: "https://www.amrita.edu" },
    { name: "KMC Manipal", city: "📍Manipal", link: "https://manipal.edu/kmc-manipal.html" },
    { name: "AIIMS Nagpur", city: "📍Nagpur", link: "https://aiimsnagpur.edu.in" }
  ],

  commerce: [
    { name: "SRCC", city: "📍Delhi", link: "https://www.srcc.edu" },
    { name: "Loyola College", city: "📍Chennai", link: "https://www.loyolacollege.edu" },
    { name: "Lady Shri Ram (LSR)", city: "📍Delhi", link: "https://lsr.edu.in" },
    { name: "Hansraj College", city: "📍Delhi", link: "https://www.hansrajcollege.ac.in" },
    { name: "Christ University", city: "📍Bangalore", link: "https://christuniversity.in" },
    { name: "Hindu College", city: "📍Delhi", link: "https://hinducollege.ac.in" },
    { name: "Stella Maris College", city: "📍Chennai", link: "https://stellamariscollege.edu.in" },
    { name: "Mount Carmel College", city: "📍Bangalore", link: "https://mccblr.edu.in" },
    { name: "Kristu Jayanti College", city: "📍Bangalore", link: "https://kristujayanti.edu.in" }
  ]
};

/* Render function */
function loadColleges(course) {
  collegeList.innerHTML = "";

  colleges[course].forEach(college => {
    collegeList.innerHTML += `
      <div class="college-card">
        <div class="college-info">
          <h3>${college.name}</h3>
          <p>${college.city}</p>
        </div>
        <a href="${college.link}" target="_blank">View Website</a>
      </div>
    `;
  });
}

/* Default load */
// loadColleges("management"); // REMOVED: Now handled by handleRoute

/* handleRoute: Parse URL hash/search to show correct tab/content */
function handleRoute() {
  const hash = window.location.hash;
  const params = new URLSearchParams(window.location.search);
  const searchTerm = params.get('search');

  // Map hashes to tab data-course values
  const hashToTab = {
    '#mbaSection': 'management',
    '#bbaSection': 'management',
    '#engineeringSection': 'engineering',
    '#btechSection': 'engineering',
    '#mtechSection': 'engineering',
    '#mbbsSection': 'medical',
    '#bdsSection': 'medical',
    '#bscNursingSection': 'medical',
    '#bamsSection': 'medical',
    '#bpharmaSection': 'medical',
    '#scienceSection': 'science',
    '#architectureSection': 'architecture',
    '#commerceSection': 'commerce',
    '#llbSection': 'commerce', // Law usually under commerce/arts in this structure
    '#llmSection': 'commerce',
    '#bcaSection': 'engineering', // Computer Applications often grouped with Eng/Tech
    '#animationSection': 'design', // Need to check if Design tab exists
    '#hmSection': 'management'
  };

  // 1. Handle Search Param
  if (searchTerm) {
    let allMatches = [];
    const term = searchTerm.toLowerCase();

    // Helper to search an array
    const searchArray = (arr, cat) => {
      if (!arr) return;
      arr.forEach(c => {
        if (c.name.toLowerCase().includes(term) || (c.location && (c.location.toLowerCase().startsWith(term) || c.location.toLowerCase().includes(' ' + term)))) {
          allMatches.push({ ...c, category: cat });
        }
      });
    };

    // Search Global Data Variables (if loaded)
    searchArray(typeof mbaColleges !== 'undefined' ? mbaColleges : [], 'MBA');
    searchArray(typeof btechColleges !== 'undefined' ? btechColleges : [], 'B.Tech');
    searchArray(typeof bbaColleges !== 'undefined' ? bbaColleges : [], 'BBA');
    searchArray(typeof mbbsColleges !== 'undefined' ? mbbsColleges : [], 'MBBS');
    searchArray(typeof mtechColleges !== 'undefined' ? mtechColleges : [], 'M.Tech');
    searchArray(typeof llbColleges !== 'undefined' ? llbColleges : [], 'LLB');
    searchArray(typeof bpharmaColleges !== 'undefined' ? bpharmaColleges : [], 'B.Pharma');
    searchArray(typeof bcaColleges !== 'undefined' ? bcaColleges : [], 'BCA');
    
    // Also search the local 'colleges' const as fallback/supplement
    Object.keys(colleges).forEach(cat => {
      colleges[cat].forEach(c => {
        // Check location strictness: startsWith or word boundary
        const cityLower = c.city.toLowerCase();
        const matchesCity = cityLower.startsWith(term) || cityLower.includes(' ' + term);
        
        if (c.name.toLowerCase().includes(term) || matchesCity) {
           // Avoid duplicates by name
           if (!allMatches.some(m => m.name === c.name)) {
             allMatches.push({ ...c, category: cat, location: c.city });
           }
        }
      });
    });

    collegeList.innerHTML = "";
    if (allMatches.length > 0) {
      collegeList.innerHTML = `<h3 class="search-results-title">Found ${allMatches.length} results for "${searchTerm}"</h3>`;
       allMatches.forEach(college => {
        // Handle different data structures (link property vs generated link)
        // Handle different data structures (link property vs generated link)
        const link = college.link || `colleges.html?search=${encodeURIComponent(college.name)}`;
        const isExternal = link.startsWith('http');
        collegeList.innerHTML += `
          <div class="college-card">
            <div class="college-info">
              <h3>${college.name}</h3>
              <p>${college.location || college.city}</p>
              ${college.category ? `<small>${college.category}</small>` : ''}
            </div>
            <a href="${link}" ${isExternal ? 'target="_blank"' : ''}>${isExternal ? 'Visit Website' : 'View Details'}</a>
          </div>
        `;
      });
      tabs.forEach(t => t.classList.remove("active"));
    } else {
      collegeList.innerHTML = `<div class="no-results">No colleges found for "${searchTerm}"</div>`;
    }
    return; // Exit if search mode
  }

  // 2. Handle Hash (Tab Switching)
  let targetTab = 'management'; // Default
  if (hash && hashToTab[hash]) {
    targetTab = hashToTab[hash];
  } else if (hash && hash === '#designSection') { 
     // Special case if we add Design tab later
  }

  // Activate Tab
  tabs.forEach(t => {
    t.classList.remove("active");
    if (t.dataset.course === targetTab) {
      t.classList.add("active");
    }
  });

  loadColleges(targetTab);
}

// Run on load and hash change
document.addEventListener("DOMContentLoaded", handleRoute);
window.addEventListener("hashchange", handleRoute);


/* Tab click */
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    loadColleges(tab.dataset.course);
  });
});






document.getElementById("newsletterForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const email = this.querySelector("input").value;

    // For now: just confirmation
    alert("Subscribed successfully: " + email);

    // FUTURE:
    // yahan email backend / API / Google Sheet / Mailchimp ko bheja ja sakta hai
    this.reset();
  });


/* ================= FILTER SCROLL LOGIC ================= */
const scrollRightBtn = document.getElementById("scrollRightBtn");
const filterScroll = document.querySelector(".filter-scroll");

if (scrollRightBtn && filterScroll) {
  scrollRightBtn.addEventListener("click", () => {
    // Scroll right by 300px for better visibility
    filterScroll.scrollBy({ left: 300, behavior: "smooth" });
  });
}

/* ================= STREAM DROPDOWN ================= */
const streamFilterBtn = document.getElementById("streamFilterBtn");
const streamDropdown = document.getElementById("streamDropdown");
const streamWrap = document.querySelector(".stream-dropdown-wrap");

if (streamFilterBtn && streamDropdown && streamWrap) {
  streamFilterBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    streamWrap.classList.toggle("active");
    const isOpen = streamWrap.classList.contains("active");
    streamFilterBtn.setAttribute("aria-expanded", isOpen);
    streamDropdown.setAttribute("aria-hidden", !isOpen);
  });

  document.addEventListener("click", () => {
    streamWrap.classList.remove("active");
    streamFilterBtn.setAttribute("aria-expanded", "false");
    streamDropdown.setAttribute("aria-hidden", "true");
  });

  streamDropdown.addEventListener("click", (e) => {
    e.stopPropagation();
    if (e.target.classList.contains("stream-option")) {
      streamWrap.classList.remove("active");
      streamFilterBtn.setAttribute("aria-expanded", "false");
      streamDropdown.setAttribute("aria-hidden", "true");
    }
  });
}






































// ✨ Try Safarnama AI Button - Sticky Scroll Behavior (Bottom Right)
document.addEventListener('DOMContentLoaded', function() {
    const aiButton = document.getElementById('tryAiBtn');
    const heroSection = document.querySelector('.hero');
    
    if (!aiButton || !heroSection) {
        console.warn('AI Button or Hero section not found');
        return;
    }
    
    let heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    
    // Update hero bottom position on window resize
    window.addEventListener('resize', function() {
        heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    });
    
    // Handle scroll event with smooth behavior
    let ticking = false;
    
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });
    
    function handleScroll() {
        const scrollPosition = window.scrollY + (window.innerHeight / 3);
        
        if (scrollPosition > heroBottom) {
            aiButton.classList.add('sticky');
        } else {
            aiButton.classList.remove('sticky');
        }
    }
    
    // Initial check in case page loads scrolled
    handleScroll();
});

// Add any other existing JavaScript below this line
// ===================================================