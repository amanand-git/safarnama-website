// ================= HERO SEARCH SUGGESTIONS & LOGIC =================
function setupHeroSearch() {
  const searchInput = document.getElementById("heroSearchInput");
  const suggestionsBox = document.getElementById("heroSearchSuggestions");
  const searchBtn = document.getElementById("heroSearchBtn");

  if (!searchInput || !suggestionsBox) return;

  const handleSearch = (query) => {
    if (!query) {
      suggestionsBox.style.display = "none";
      return;
    }

    const term = query.toLowerCase();
    let matches = {
      courses: [],
      colleges: [],
      locations: []
    };

    // 1. Search Courses
    const courses = [
      { name: "MBA", link: "mba-course.html" },
      { name: "B.Tech", link: "btech-courses.html" },    
      { name: "MBBS", link: "mbbs-course.html" },
      { name: "BBA", link: "bba-courses.html" }, 
      { name: "BCA", link: "bca-course.html" },
      { name: "M.Tech", link: "mtech-courses.html" },
      { name: "Design", link: "career.html" },
      { name: "Study Abroad", link: "study-abroad.html" }
    ];

    courses.forEach(c => {
      if (c.name.toLowerCase().includes(term)) {
        matches.courses.push(c);
      }
    });

    // 2. Search Colleges
    if (typeof colleges !== 'undefined') {
      Object.keys(colleges).forEach(cat => {
        colleges[cat].forEach(c => {
          if (c.name.toLowerCase().includes(term)) {
            matches.colleges.push({ ...c, category: cat });
          }
        });
      });
    }

    // 3. Search Locations
    const locations = new Set();
    if (typeof colleges !== 'undefined') {
      Object.keys(colleges).forEach(cat => {
        colleges[cat].forEach(c => {
          if (c.city && c.city.toLowerCase().includes(term)) {
            const cleanCity = c.city.replace("📍", "").trim();
            if (cleanCity.toLowerCase().startsWith(term) || cleanCity.toLowerCase().includes(' ' + term)) {
                 locations.add(cleanCity);
            }
          }
        });
      });
    }
    matches.locations = Array.from(locations).map(l => ({ name: l }));

    // RENDER SUGGESTIONS
    if (matches.courses.length === 0 && matches.colleges.length === 0 && matches.locations.length === 0) {
      suggestionsBox.style.display = "none";
      return;
    }

    let html = "";

    // COURSES SECTION
    if (matches.courses.length > 0) {
      html += `<div class="suggestion-group">
                 <div class="suggestion-heading">Courses</div>
                 ${matches.courses.slice(0, 3).map(c => 
                   `<a href="${c.link}" class="suggestion-item">${c.name}</a>`
                 ).join('')}
               </div>`;
    }

    // COLLEGES SECTION
    if (matches.colleges.length > 0) {
      html += `<div class="suggestion-group">
                 <div class="suggestion-heading">Colleges</div>
                 ${matches.colleges.slice(0, 3).map(c => 
                   `<a href="${c.link}" class="suggestion-item">
                      ${c.name}
                      <small>${c.city} • ${c.category}</small>
                    </a>`
                 ).join('')}
               </div>`;
    }

    // LOCATIONS SECTION
    if (matches.locations.length > 0) {
      html += `<div class="suggestion-group">
                 <div class="suggestion-heading">Location</div>
                 ${matches.locations.slice(0, 3).map(l => 
                   `<div class="suggestion-item" onclick="window.location.href='colleges.html?search=${l.name}'">
                      📍 ${l.name}
                    </div>`
                 ).join('')}
               </div>`;
    }

    suggestionsBox.innerHTML = html;
    suggestionsBox.style.display = "block";
  };

  // Event Listeners
  searchInput.addEventListener("input", (e) => handleSearch(e.target.value));

  document.addEventListener("click", (e) => {
    if (!searchInput.contains(e.target) && !suggestionsBox.contains(e.target)) {
      suggestionsBox.style.display = "none";
    }
  });

  if (searchBtn) {
      searchBtn.addEventListener("click", () => {
          const val = searchInput.value;
          if(val) window.location.href = `colleges.html?search=${val}`;
      });
  }
}

document.addEventListener("DOMContentLoaded", setupHeroSearch);
