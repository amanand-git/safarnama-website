// ============================================
// STATE COLLEGES PAGE - JavaScript
// ============================================

console.log('🗺️ State Colleges page loading...');

// State to City mapping
const stateCityMap = {
    'Delhi': ['New Delhi', 'Delhi'],
    'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Thane', 'Nashik'],
    'Karnataka': ['Bangalore', 'Bengaluru', 'Mangalore', 'Mysore'],
    'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Salem'],
    'Telangana': ['Hyderabad', 'Secunderabad', 'Warangal'],
    'West Bengal': ['Kolkata', 'Howrah', 'Durgapur'],
    'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot'],
    'Rajasthan': ['Jaipur', 'Jodhpur', 'Udaipur', 'Kota'],
    'Uttar Pradesh': ['Lucknow', 'Noida', 'Greater Noida', 'Ghaziabad', 'Kanpur', 'Agra', 'Varanasi', 'Allahabad'],
    'Madhya Pradesh': ['Indore', 'Bhopal', 'Jabalpur', 'Gwalior'],
    'Haryana': ['Gurgaon', 'Gurugram', 'Faridabad', 'Sonipat', 'Rohtak'],
    'Punjab': ['Chandigarh', 'Ludhiana', 'Amritsar', 'Jalandhar'],
    'Kerala': ['Kochi', 'Thiruvananthapuram', 'Kozhikode', 'Thrissur'],
    'Andhra Pradesh': ['Visakhapatnam', 'Vijayawada', 'Guntur', 'Tirupati'],
    'Bihar': ['Patna', 'Gaya', 'Muzaffarpur'],
    'Odisha': ['Bhubaneswar', 'Cuttack'],
    'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad'],
    'Uttarakhand': ['Dehradun', 'Haridwar', 'Roorkee'],
    'Himachal Pradesh': ['Shimla', 'Solan', 'Dharamshala'],
    'Goa': ['Goa', 'Panaji'],
    'Assam': ['Guwahati', 'Dibrugarh'],
    'Chhattisgarh': ['Raipur', 'Bilaspur']
};

const allStates = Object.keys(stateCityMap).sort();

// Get all colleges with course info combined
function getAllCollegesWithCourses() {
    const collegeMap = new Map();
    
    const addColleges = (colleges, courseName) => {
        if (!colleges) return;
        colleges.forEach(college => {
            const key = college.name.toLowerCase().trim();
            if (collegeMap.has(key)) {
                const existing = collegeMap.get(key);
                if (!existing.courses.includes(courseName)) {
                    existing.courses.push(courseName);
                }
                // Update with more details if available
                if (college.fee && !existing.fee) existing.fee = college.fee;
                if (college.placement && !existing.placement) existing.placement = college.placement;
                if (college.entrance && !existing.entrance) existing.entrance = college.entrance;
            } else {
                collegeMap.set(key, {
                    name: college.name,
                    location: college.location || '',
                    courses: [courseName],
                    fee: college.fee || college.totalFee || '',
                    placement: college.placement || college.avgPlacement || '',
                    highestPlacement: college.highestPlacement || '',
                    entrance: college.entrance || college.entranceExam || '',
                    established: college.established || college.estd || '',
                    type: college.type || '',
                    rating: college.rating || '',
                    ranking: college.ranking || ''
                });
            }
        });
    };
    
    // Add colleges from all data sources
    if (typeof mbaColleges !== 'undefined') addColleges(mbaColleges, 'MBA');
    if (typeof btechColleges !== 'undefined') addColleges(btechColleges, 'B.Tech');
    if (typeof bbaColleges !== 'undefined') addColleges(bbaColleges, 'BBA');
    if (typeof mbbsColleges !== 'undefined') addColleges(mbbsColleges, 'MBBS');
    if (typeof mtechColleges !== 'undefined') addColleges(mtechColleges, 'M.Tech');
    if (typeof llbColleges !== 'undefined') addColleges(llbColleges, 'LLB');
    if (typeof bpharmaColleges !== 'undefined') addColleges(bpharmaColleges, 'B.Pharma');
    if (typeof bcaColleges !== 'undefined') addColleges(bcaColleges, 'BCA');
    
    return Array.from(collegeMap.values());
}

// Extract state from location
function extractState(location) {
    if (!location) return '';
    const parts = location.split(',').map(p => p.trim());
    return parts[parts.length - 1] || '';
}

// Extract city from location
function extractCity(location) {
    if (!location) return '';
    const parts = location.split(',').map(p => p.trim());
    return parts[0] || '';
}

// Group colleges by state
function groupByState(colleges) {
    const grouped = {};
    colleges.forEach(college => {
        const state = extractState(college.location);
        if (state) {
            if (!grouped[state]) grouped[state] = [];
            grouped[state].push(college);
        }
    });
    return grouped;
}

// Filter colleges by state, city, and course
function filterColleges(colleges, selectedState, selectedCity, selectedCourse) {
    return colleges.filter(college => {
        // Use full location string for robust matching (e.g. "Powai, Mumbai")
        const locationStr = (college.location || '').toLowerCase();
        
        // Location filter
        let locationMatch = true;
        if (selectedState && selectedCity) {
            locationMatch = locationStr.includes(selectedState.toLowerCase()) &&
                   locationStr.includes(selectedCity.toLowerCase());
        } else if (selectedState) {
            locationMatch = locationStr.includes(selectedState.toLowerCase());
        } else if (selectedCity) {
            locationMatch = locationStr.includes(selectedCity.toLowerCase());
        }
        
        // Course filter
        let courseMatch = true;
        if (selectedCourse) {
            courseMatch = college.courses.includes(selectedCourse);
        }
        
        return locationMatch && courseMatch;
    });
}

// Render college cards
function renderColleges(colleges) {
    const grid = document.getElementById('collegesGrid');
    const noResults = document.getElementById('noResults');
    
    if (!grid) return;
    
    if (colleges.length === 0) {
        grid.innerHTML = '';
        if (noResults) noResults.style.display = 'block';
        return;
    }
    
    if (noResults) noResults.style.display = 'none';
    
    grid.innerHTML = colleges.map(college => `
        <div class="state-college-card" data-college='${JSON.stringify(college).replace(/'/g, "\\'")}'>
            <div class="card-header">
                <h3 class="college-name">${college.name}</h3>
                ${college.type ? `<span class="college-type ${college.type.toLowerCase()}">${college.type}</span>` : ''}
            </div>
            
            <div class="college-location">
                <span class="location-icon">📍</span>
                ${college.location}
            </div>
            
            <div class="college-courses">
                ${college.courses.map(c => `<span class="course-tag">${c}</span>`).join('')}
            </div>
            
            <div class="college-stats">
                ${college.fee ? `
                <div class="stat">
                    <span class="stat-label">Fee</span>
                    <span class="stat-value">${college.fee}</span>
                </div>` : ''}
                ${college.placement ? `
                <div class="stat">
                    <span class="stat-label">Avg. Placement</span>
                    <span class="stat-value">${college.placement}</span>
                </div>` : ''}
                ${college.entrance ? `
                <div class="stat">
                    <span class="stat-label">Entrance</span>
                    <span class="stat-value">${college.entrance}</span>
                </div>` : ''}
            </div>
            
            <button class="view-details-btn">View Details</button>
        </div>
    `).join('');
    
    // Add click handlers
    grid.querySelectorAll('.state-college-card').forEach(card => {
        card.querySelector('.view-details-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            const collegeData = JSON.parse(card.dataset.college);
            showCollegeModal(collegeData);
        });
    });
}

// Show college detail modal
function showCollegeModal(college) {
    const modal = document.getElementById('collegeModal');
    const content = document.getElementById('modalContent');
    
    if (!modal || !content) return;
    
    content.innerHTML = `
        <div class="modal-header">
            <h2>${college.name}</h2>
            ${college.type ? `<span class="modal-type ${college.type.toLowerCase()}">${college.type}</span>` : ''}
        </div>
        
        <div class="modal-location">
            <span class="icon">📍</span>
            ${college.location}
        </div>
        
        <div class="modal-section">
            <h4>Courses Offered</h4>
            <div class="modal-courses">
                ${college.courses.map(c => `<span class="modal-course-tag">${c}</span>`).join('')}
            </div>
        </div>
        
        <div class="modal-details-grid">
            ${college.established ? `
            <div class="detail-box">
                <span class="detail-icon">🏛️</span>
                <div>
                    <span class="detail-label">Established</span>
                    <span class="detail-value">${college.established}</span>
                </div>
            </div>` : ''}
            
            ${college.fee ? `
            <div class="detail-box">
                <span class="detail-icon">💰</span>
                <div>
                    <span class="detail-label">Course Fee</span>
                    <span class="detail-value">${college.fee}</span>
                </div>
            </div>` : ''}
            
            ${college.placement ? `
            <div class="detail-box">
                <span class="detail-icon">📈</span>
                <div>
                    <span class="detail-label">Avg. Placement</span>
                    <span class="detail-value">${college.placement}</span>
                </div>
            </div>` : ''}
            
            ${college.highestPlacement ? `
            <div class="detail-box">
                <span class="detail-icon">🏆</span>
                <div>
                    <span class="detail-label">Highest Placement</span>
                    <span class="detail-value">${college.highestPlacement}</span>
                </div>
            </div>` : ''}
            
            ${college.entrance ? `
            <div class="detail-box">
                <span class="detail-icon">📝</span>
                <div>
                    <span class="detail-label">Entrance Exam</span>
                    <span class="detail-value">${college.entrance}</span>
                </div>
            </div>` : ''}
            
            ${college.ranking ? `
            <div class="detail-box">
                <span class="detail-icon">🏅</span>
                <div>
                    <span class="detail-label">Ranking</span>
                    <span class="detail-value">${college.ranking}</span>
                </div>
            </div>` : ''}
        </div>
        
        <div class="modal-actions">
            <a href="colleges.html?search=${encodeURIComponent(college.name)}" class="modal-btn primary">View in Colleges</a>
        </div>
    `;
    
    modal.classList.add('active');
}

// Close modal
function closeModal() {
    const modal = document.getElementById('collegeModal');
    if (modal) modal.classList.remove('active');
}

// Populate state dropdown
function populateStates() {
    const select = document.getElementById('stateSelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">All States</option>';
    allStates.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        select.appendChild(option);
    });
}

// Populate city dropdown based on state
function populateCities(state) {
    const select = document.getElementById('citySelect');
    if (!select) return;
    
    select.innerHTML = '<option value="">All Cities</option>';
    
    if (state && stateCityMap[state]) {
        stateCityMap[state].forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            select.appendChild(option);
        });
    }
}

// Update page title
function updatePageTitle(state, city) {
    const title = document.getElementById('pageTitle');
    const subtitle = document.getElementById('pageSubtitle');
    
    if (city) {
        title.textContent = `Colleges in ${city}`;
        subtitle.textContent = `Browse top colleges and universities in ${city}`;
    } else if (state) {
        title.textContent = `Colleges in ${state}`;
        subtitle.textContent = `Browse top colleges and universities in ${state}`;
    } else {
        title.textContent = 'Colleges by Location';
        subtitle.textContent = 'Find the best colleges in your preferred state or city';
    }
}

// Initialize page
function initPage() {
    const allColleges = getAllCollegesWithCourses();
    
    // Populate dropdowns
    populateStates();
    
    // Check for URL parameters
    const params = new URLSearchParams(window.location.search);
    const stateParam = params.get('state');
    const cityParam = params.get('city');
    const searchParam = params.get('search');
    
    const stateSelect = document.getElementById('stateSelect');
    const citySelect = document.getElementById('citySelect');
    
    // Handle pre-selected filters from URL
    if (stateParam) {
        if (stateSelect) stateSelect.value = stateParam;
        populateCities(stateParam);
        updatePageTitle(stateParam, null);
        renderColleges(filterColleges(allColleges, stateParam, null));
    } else if (cityParam) {
        // Find state for city
        for (const [state, cities] of Object.entries(stateCityMap)) {
            if (cities.some(c => c.toLowerCase() === cityParam.toLowerCase())) {
                if (stateSelect) stateSelect.value = state;
                populateCities(state);
                if (citySelect) citySelect.value = cityParam;
                break;
            }
        }
        updatePageTitle(null, cityParam);
        renderColleges(filterColleges(allColleges, null, cityParam));
    } else if (searchParam) {
        // Search across all colleges
        const filtered = allColleges.filter(c => 
            c.location.toLowerCase().includes(searchParam.toLowerCase()) ||
            c.name.toLowerCase().includes(searchParam.toLowerCase())
        );
        document.getElementById('pageTitle').textContent = `Search: "${searchParam}"`;
        renderColleges(filtered);
    } else {
        // Show all colleges
        renderColleges(allColleges);
    }
    
    // State change handler
    if (stateSelect) {
        stateSelect.addEventListener('change', function() {
            populateCities(this.value);
        });
    }
    
    // Course select
    const courseSelect = document.getElementById('courseSelect');
    
    // Filter button
    const filterBtn = document.getElementById('filterBtn');
    if (filterBtn) {
        filterBtn.addEventListener('click', function() {
            const selectedState = stateSelect ? stateSelect.value : '';
            const selectedCity = citySelect ? citySelect.value : '';
            const selectedCourse = courseSelect ? courseSelect.value : '';
            updatePageTitle(selectedState, selectedCity);
            renderColleges(filterColleges(allColleges, selectedState, selectedCity, selectedCourse));
        });
    }
    
    // Clear button
    const clearBtn = document.getElementById('clearBtn');
    if (clearBtn) {
        clearBtn.addEventListener('click', function() {
            if (stateSelect) stateSelect.value = '';
            if (citySelect) {
                citySelect.innerHTML = '<option value="">All Cities</option>';
            }
            if (courseSelect) courseSelect.value = '';
            updatePageTitle(null, null);
            renderColleges(allColleges);
        });
    }
    
    // Close modal
    const closeModalBtn = document.getElementById('closeModalBtn');
    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', closeModal);
    }
    
    // Close modal on backdrop click
    const modal = document.getElementById('collegeModal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });
    }
    
    console.log('✅ State colleges page initialized with', allColleges.length, 'colleges');
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', initPage);
