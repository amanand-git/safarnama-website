// ============================================
// INDEX PAGE SEARCH FUNCTIONALITY
// ============================================

console.log('🔍 Index search loading...');

// Featured Colleges with External Links (Synced with script.js)
// Featured Colleges (Fixed Links and TLDs)
const featuredColleges = [
    // Management
    { name: "IIM Ahmedabad", city: "Ahmedabad", link: "https://www.iima.ac.in", course: "MBA" },
    { name: "IIM Bangalore", city: "Bangalore", link: "https://www.iimb.ac.in", course: "MBA" },
    { name: "IIM Calcutta", city: "Kolkata", link: "https://www.iimcal.ac.in", course: "MBA" },
    { name: "Symbiosis (SIBM) Pune", city: "Pune", link: "https://www.sibmpune.edu.in", course: "MBA" },
    { name: "Christ University", city: "Bangalore", link: "https://christuniversity.in", course: "MBA" },
    { name: "IIFT Delhi", city: "Delhi", link: "https://www.iift.ac.in", course: "MBA" },
    { name: "IIM Bodh Gaya", city: "Bihar", link: "https://iimbg.ac.in", course: "MBA" },
    { name: "IBS Hyderabad", city: "Hyderabad", link: "https://www.ibsindia.org", course: "MBA" },
    { name: "IIM Kozhikode", city: "Kozhikode", link: "https://www.iimk.ac.in", course: "MBA" },

    // Engineering
    { name: "IIT Bombay", city: "Mumbai", link: "https://www.iitb.ac.in", course: "B.Tech" },
    { name: "IIT Delhi", city: "Delhi", link: "https://home.iitd.ac.in", course: "B.Tech" },
    { name: "IIT Madras", city: "Chennai", link: "https://www.iitm.ac.in", course: "B.Tech" },
    { name: "IIT Kanpur", city: "Kanpur", link: "https://www.iitk.ac.in", course: "B.Tech" },
    { name: "IIT Kharagpur", city: "Kharagpur", link: "http://www.iitkgp.ac.in", course: "B.Tech" },
    { name: "IIT Roorkee", city: "Roorkee", link: "https://www.iitr.ac.in", course: "B.Tech" },
    { name: "IIT Hyderabad", city: "Hyderabad", link: "https://www.iith.ac.in", course: "B.Tech" },
    { name: "IIT Guwahati", city: "Guwahati", link: "https://www.iitg.ac.in", course: "B.Tech" },
    { name: "NIT Trichy", city: "Tiruchirappalli", link: "https://www.nitt.edu", course: "B.Tech" },

    // Medical
    { name: "AIIMS Delhi", city: "Delhi", link: "https://www.aiims.edu", course: "MBBS" }, // AIIMS Official is aiims.edu
    { name: "CMC Vellore", city: "Vellore", link: "https://www.cmch-vellore.edu", course: "MBBS" },
    { name: "NIMHANS", city: "Bangalore", link: "https://nimhans.ac.in", course: "MBBS" },
    { name: "JIPMER", city: "Pondicherry", link: "https://jipmer.edu.in", course: "MBBS" },
    { name: "SGPGIMS", city: "Lucknow", link: "https://sgpgi.ac.in", course: "MBBS" },
    { name: "BHU (IMS)", city: "Varanasi", link: "https://www.bhu.ac.in/ims", course: "MBBS" },
    { name: "Amrita Vishwa Vidyapeetham", city: "Coimbatore", link: "https://www.amrita.edu", course: "MBBS" },
    { name: "KMC Manipal", city: "Manipal", link: "https://manipal.edu/kmc-manipal.html", course: "MBBS" },
    { name: "AIIMS Nagpur", city: "Nagpur", link: "https://aiimsnagpur.edu.in", course: "MBBS" },

    // Science / Commerce
    { name: "IISc Bangalore", city: "Bangalore", link: "https://iisc.ac.in", course: "Science" },
    { name: "IISER Pune", city: "Pune", link: "http://www.iiserpune.ac.in", course: "Science" },
    { name: "Hindu College", city: "Delhi", link: "https://hinducollege.ac.in", course: "Science" },
    { name: "Miranda House", city: "Delhi", link: "https://www.mirandahouse.ac.in", course: "Science" },
    { name: "Hansraj College", city: "Delhi", link: "https://www.hansrajcollege.ac.in", course: "Science" },
    { name: "Madras Christian College", city: "Chennai", link: "https://mcc.edu.in", course: "Science" },
    { name: "Loyola College", city: "Chennai", link: "https://www.loyolacollege.edu", course: "Science" },
    { name: "SRCC", city: "Delhi", link: "https://www.srcc.edu", course: "Commerce" },
    { name: "Lady Shri Ram (LSR)", city: "Delhi", link: "https://lsr.edu.in", course: "Commerce" }
];

// Course data for search
const indexCourseData = [
    { name: 'MBA', fullName: 'Master of Business Administration', url: 'mba-course.html' },
    { name: 'BBA', fullName: 'Bachelor of Business Administration', url: 'bba.html' },
    { name: 'B.Tech', fullName: 'Bachelor of Technology', url: 'btech-course.html' },
    { name: 'M.Tech', fullName: 'Master of Technology', url: 'mtech-course.html' },
    { name: 'MBBS', fullName: 'Bachelor of Medicine and Surgery', url: 'mbbs-course.html' },
    { name: 'B.Pharma', fullName: 'Bachelor of Pharmacy', url: 'bpharma-course.html' },
    { name: 'BCA', fullName: 'Bachelor of Computer Applications', url: 'bca-course.html' },
    { name: 'LLB', fullName: 'Bachelor of Laws', url: 'llb-course.html' },
    { name: 'LLM', fullName: 'Master of Laws', url: 'llm-course.html' },
    { name: 'BDS', fullName: 'Bachelor of Dental Surgery', url: 'bds-course.html' },
    { name: 'B.Sc Nursing', fullName: 'Bachelor of Science in Nursing', url: 'bsc-nursing-course.html' },
    { name: 'BAMS', fullName: 'Bachelor of Ayurveda Medicine', url: 'bams-course.html' },
    { name: 'Animation', fullName: 'Animation & Design', url: 'animation.html' },
    { name: 'Hotel Management', fullName: 'Hotel Management', url: 'hotel-management.html' }
];

// Location data for search
const locationData = [
    { name: 'Mumbai', state: 'Maharashtra' },
    { name: 'Delhi', state: 'Delhi' },
    { name: 'New Delhi', state: 'Delhi' },
    { name: 'Bangalore', state: 'Karnataka' },
    { name: 'Chennai', state: 'Tamil Nadu' },
    { name: 'Hyderabad', state: 'Telangana' },
    { name: 'Kolkata', state: 'West Bengal' },
    { name: 'Pune', state: 'Maharashtra' },
    { name: 'Jaipur', state: 'Rajasthan' },
    { name: 'Ahmedabad', state: 'Gujarat' },
    { name: 'Lucknow', state: 'Uttar Pradesh' },
    { name: 'Indore', state: 'Madhya Pradesh' },
    { name: 'Noida', state: 'Uttar Pradesh' },
    { name: 'Patna', state: 'Bihar' }
];

// All states
const stateData = [
    'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
    'Delhi', 'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh',
    'Jharkhand', 'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra',
    'Manipur', 'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha',
    'Punjab', 'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana',
    'Tripura', 'Uttar Pradesh', 'Uttarakhand', 'West Bengal'
];

// Get all colleges from data files (Globals + Featured)
function getIndexColleges() {
    const allColleges = [...featuredColleges]; // Start with featured (high priority)
    
    // Add global data if exists, avoiding duplicates
    const addFromGlobal = (arr, course) => {
        if (arr && Array.isArray(arr)) {
            arr.forEach(c => {
                // Only add if not already in featured list (by name)
                if (!allColleges.some(fc => fc.name === c.name)) {
                    allColleges.push({ ...c, course: course });
                }
            });
        }
    };

    addFromGlobal(typeof mbaColleges !== 'undefined' ? mbaColleges : [], 'MBA');
    addFromGlobal(typeof btechColleges !== 'undefined' ? btechColleges : [], 'B.Tech');
    addFromGlobal(typeof bbaColleges !== 'undefined' ? bbaColleges : [], 'BBA');
    addFromGlobal(typeof mbbsColleges !== 'undefined' ? mbbsColleges : [], 'MBBS');
    addFromGlobal(typeof mtechColleges !== 'undefined' ? mtechColleges : [], 'M.Tech');
    addFromGlobal(typeof llbColleges !== 'undefined' ? llbColleges : [], 'LLB');
    addFromGlobal(typeof bpharmaColleges !== 'undefined' ? bpharmaColleges : [], 'B.Pharma');
    addFromGlobal(typeof bcaColleges !== 'undefined' ? bcaColleges : [], 'BCA');
    
    return allColleges;
}

// Search function
function indexSearch(query) {
    if (!query || query.length < 2) return { courses: [], colleges: [], locations: [] };
    
    const lowerQuery = query.toLowerCase();
    
    // Search courses
    const matchingCourses = indexCourseData.filter(c => 
        c.name.toLowerCase().includes(lowerQuery) ||
        c.fullName.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);
    
    // Search colleges
    const allColleges = getIndexColleges();
    const matchingColleges = allColleges.filter(c =>
        c.name.toLowerCase().includes(lowerQuery) ||
        (c.location && c.location.toLowerCase().includes(lowerQuery)) ||
        (c.city && c.city.toLowerCase().includes(lowerQuery))
    ).slice(0, 8); // Slightly more results
    
    // Search locations
    const matchingLocations = locationData.filter(l =>
        l.name.toLowerCase().includes(lowerQuery) ||
        l.state.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);
    
    return { courses: matchingCourses, colleges: matchingColleges, locations: matchingLocations };
}

// Location search function
function locationSearch(query) {
    if (!query || query.length < 2) return { cities: [], states: [] };
    
    const lowerQuery = query.toLowerCase();
    
    const matchingCities = locationData.filter(l =>
        l.name.toLowerCase().includes(lowerQuery)
    ).slice(0, 6);
    
    const matchingStates = stateData.filter(s =>
        s.toLowerCase().includes(lowerQuery)
    ).slice(0, 4);
    
    return { cities: matchingCities, states: matchingStates };
}

// Display hero search suggestions
function displayHeroSuggestions(results, container) {
    container.innerHTML = '';
    const { courses, colleges, locations } = results;
    
    if (courses.length === 0 && colleges.length === 0 && locations.length === 0) {
        container.innerHTML = '<div class="search-no-results">No results found</div>';
        container.classList.add('active');
        return;
    }
    
    // Courses
    if (courses.length > 0) {
        const cat = document.createElement('div');
        cat.className = 'suggestion-category';
        cat.textContent = 'Courses';
        container.appendChild(cat);

        courses.forEach(course => {
            const item = document.createElement('div');
            item.className = 'suggestion-item course-item';
            item.innerHTML = `
                <div class="suggestion-icon">📚</div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${course.name}</div>
                    <div class="suggestion-meta">${course.fullName}</div>
                </div>
                <span class="suggestion-arrow">→</span>
            `;
            item.addEventListener('click', () => {
                window.location.href = course.url;
            });
            container.appendChild(item);
        });
    }
    
    // Colleges
    if (colleges.length > 0) {
        const cat = document.createElement('div');
        cat.className = 'suggestion-category';
        cat.textContent = 'Colleges';
        container.appendChild(cat); // Append header safely

        colleges.forEach(college => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <div class="suggestion-icon">🏛️</div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${college.name}</div>
                    <div class="suggestion-meta">${college.city || college.location || ''} • ${college.course}</div>
                </div>
                <span class="suggestion-arrow">→</span>
            `;
            item.addEventListener('click', () => {
                if (college.link && college.link.startsWith('http')) {
                    window.open(college.link, '_blank');
                } else {
                    window.location.href = `colleges.html?search=${encodeURIComponent(college.name)}`;
                }
            });
            container.appendChild(item);
        });
    }
    
    // Locations
    if (locations.length > 0) {
        const cat = document.createElement('div');
        cat.className = 'suggestion-category';
        cat.textContent = 'Locations';
        container.appendChild(cat);

        locations.forEach(loc => {
            const item = document.createElement('div');
            item.className = 'suggestion-item location-item';
            item.innerHTML = `
                <div class="suggestion-icon">📍</div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${loc.name}</div>
                    <div class="suggestion-meta">${loc.state}</div>
                </div>
                <span class="suggestion-arrow">→</span>
            `;
            item.addEventListener('click', () => {
                window.location.href = `state-colleges.html?city=${encodeURIComponent(loc.name)}`;
            });
            container.appendChild(item);
        });
    }
    
    container.classList.add('active');
}

// Display location search suggestions
function displayLocationSuggestions(results, container) {
    container.innerHTML = '';
    const { cities, states } = results;
    
    if (cities.length === 0 && states.length === 0) {
        container.innerHTML = '<div class="search-no-results">No locations found</div>';
        container.classList.add('active');
        return;
    }
    
    // Cities
    if (cities.length > 0) {
        const cat = document.createElement('div');
        cat.className = 'suggestion-category';
        cat.textContent = 'Cities';
        container.appendChild(cat);

        cities.forEach(city => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <div class="suggestion-icon">🏙️</div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${city.name}</div>
                    <div class="suggestion-meta">${city.state}</div>
                </div>
                <span class="suggestion-arrow">→</span>
            `;
            item.addEventListener('click', () => {
                window.location.href = `state-colleges.html?city=${encodeURIComponent(city.name)}`;
            });
            container.appendChild(item);
        });
    }
    
    // States
    if (states.length > 0) {
        const cat = document.createElement('div');
        cat.className = 'suggestion-category';
        cat.textContent = 'States';
        container.appendChild(cat);

        states.forEach(state => {
            const item = document.createElement('div');
            item.className = 'suggestion-item';
            item.innerHTML = `
                <div class="suggestion-icon">🗺️</div>
                <div class="suggestion-info">
                    <div class="suggestion-name">${state}</div>
                    <div class="suggestion-meta">View all colleges</div>
                </div>
                <span class="suggestion-arrow">→</span>
            `;
            item.addEventListener('click', () => {
                window.location.href = `state-colleges.html?state=${encodeURIComponent(state)}`;
            });
            container.appendChild(item);
        });
    }
    
    container.classList.add('active');
}

// Initialize hero search
function initHeroSearch() {
    const input = document.getElementById('heroSearchInput');
    const suggestions = document.getElementById('heroSearchSuggestions');
    const searchBtn = document.getElementById('heroSearchBtn');
    
    if (!input || !suggestions) return;
    
    input.addEventListener('input', function() {
        const query = this.value;
        if (query.length < 2) {
            suggestions.classList.remove('active');
            return;
        }
        const results = indexSearch(query);
        displayHeroSuggestions(results, suggestions);
    });
    
    input.addEventListener('focus', function() {
        if (this.value.length >= 2) {
            const results = indexSearch(this.value);
            displayHeroSuggestions(results, suggestions);
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = input.value;
            if (query.length > 0) {
                window.location.href = `colleges.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value;
            if (query.length > 0) {
                window.location.href = `colleges.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
    
    console.log('✅ Hero search initialized');
}

// Initialize location search
function initLocationSearch() {
    const input = document.getElementById('locationSearchInput');
    const suggestions = document.getElementById('locationSearchSuggestions');
    const searchBtn = document.getElementById('locationSearchBtn');
    
    if (!input || !suggestions) return;
    
    input.addEventListener('input', function() {
        const query = this.value;
        if (query.length < 2) {
            suggestions.classList.remove('active');
            return;
        }
        const results = locationSearch(query);
        displayLocationSuggestions(results, suggestions);
    });
    
    input.addEventListener('focus', function() {
        if (this.value.length >= 2) {
            const results = locationSearch(this.value);
            displayLocationSuggestions(results, suggestions);
        }
    });
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            const query = input.value;
            if (query.length > 0) {
                window.location.href = `state-colleges.html?search=${encodeURIComponent(query)}`;
            }
        });
    }
    
    input.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            const query = this.value;
            if (query.length > 0) {
                window.location.href = `state-colleges.html?search=${encodeURIComponent(query)}`;
            }
        }
    });
    
    console.log('✅ Location search initialized');
}

// Close suggestions when clicking outside
document.addEventListener('click', function(e) {
    const heroSuggestions = document.getElementById('heroSearchSuggestions');
    const locationSuggestions = document.getElementById('locationSearchSuggestions');
    
    if (heroSuggestions && !e.target.closest('.hero-search-box') && !e.target.closest('.hero-search-suggestions')) {
        heroSuggestions.classList.remove('active');
    }
    
    if (locationSuggestions && !e.target.closest('.location-search-container')) {
        locationSuggestions.classList.remove('active');
    }
});

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    initHeroSearch();
    initLocationSearch();
});

console.log('✅ Index search loaded');
