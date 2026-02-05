// ============================================
// BDS COLLEGES DATA (Top 100)
// ============================================

const bdsColleges = [
    {
        rank: 1,
        name: "Saveetha Institute of Medical Sciences",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹42,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "saveetha-dental"
    },
    {
        rank: 2,
        name: "Manipal College of Dental Sciences",
        location: "Manipal, Karnataka",
        entrance: "NEET UG",
        fees: "₹28,50,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "manipal-dental"
    },
    {
        rank: 3,
        name: "Dr. D.Y. Patil Vidyapeeth",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹25,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "dpu-dental"
    },
    {
        rank: 4,
        name: "Maulana Azad Institute (MAIDS)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹16,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "maids"
    },
    {
        rank: 5,
        name: "AB Shetty Memorial Institute",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹22,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "ab-shetty"
    },
    {
        rank: 6,
        name: "SRM Kattankulathur Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "srm-dental"
    },
    {
        rank: 7,
        name: "Sri Ramachandra Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹25,00,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "sriher-dental"
    },
    {
        rank: 8,
        name: "Manipal College of Dental Sciences",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹26,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "manipal-mlr"
    },
    {
        rank: 9,
        name: "Siksha 'O' Anusandhan (SOA)",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹22,00,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "soa-dental"
    },
    {
        rank: 10,
        name: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹1,55,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "jmi-dental"
    },
    {
        rank: 11,
        name: "JSS Dental College",
        location: "Mysuru, Karnataka",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "jss-dental"
    },
    {
        rank: 12,
        name: "Amrita School of Dentistry",
        location: "Kochi, Kerala",
        entrance: "NEET UG",
        fees: "₹24,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amrita-dental"
    },
    {
        rank: 13,
        name: "Kalinga Institute (KIMS)",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹22,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "kims-dental"
    },
    {
        rank: 14,
        name: "Govt Dental College (GDC)",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "gdc-mumbai"
    },
    {
        rank: 15,
        name: "Faculty of Dental Sciences, IMS BHU",
        location: "Varanasi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "bhu-dental"
    },
    {
        rank: 16,
        name: "Datta Meghe Institute",
        location: "Wardha, Maharashtra",
        entrance: "NEET UG",
        fees: "₹21,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "dmims-dental"
    },
    {
        rank: 17,
        name: "Nair Hospital Dental College",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹2,80,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "nair-dental"
    },
    {
        rank: 18,
        name: "PG Institute of Dental Sciences",
        location: "Rohtak, Haryana",
        entrance: "NEET UG",
        fees: "₹2,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "pgids-rohtak"
    },
    {
        rank: 19,
        name: "Govt Dental College",
        location: "Nagpur, Maharashtra",
        entrance: "NEET UG",
        fees: "₹2,40,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "gdc-nagpur"
    },
    {
        rank: 20,
        name: "King George's Medical Univ (KGMU)",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹2,20,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "kgmu-dental"
    },
    {
        rank: 21,
        name: "Bapuji Dental College",
        location: "Davangere, Karnataka",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "bapuji-dental"
    },
    {
        rank: 22,
        name: "Yenepoya Dental College",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "yenepoya-dental"
    },
    {
        rank: 23,
        name: "KLE Society's Institute",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹19,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "kle-dental"
    },
    {
        rank: 24,
        name: "Govt Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,20,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "gdc-chennai"
    },
    {
        rank: 25,
        name: "S.D.M. College of Dental Sciences",
        location: "Dharwad, Karnataka",
        entrance: "NEET UG",
        fees: "₹18,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "sdm-dental"
    },
    {
        rank: 26,
        name: "Govt Dental College",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "gdc-indore"
    },
    {
        rank: 27,
        name: "Govt Dental College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹1,80,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "gdc-bangalore"
    },
    {
        rank: 28,
        name: "Dr. R. Ahmed Dental College",
        location: "Kolkata, West Bengal",
        entrance: "NEET UG",
        fees: "₹80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "rahmed-dental"
    },
    {
        rank: 29,
        name: "Govt Dental College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "NEET UG",
        fees: "₹1,40,000",
        avgPlacement: "₹6.80 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "Govt",
        siteLink: "gdc-trivandrum"
    },
    {
        rank: 30,
        name: "Govt Dental College",
        location: "Kozhikode, Kerala",
        entrance: "NEET UG",
        fees: "₹1,40,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "gdc-calicut"
    },
    {
        rank: 31,
        name: "Army College of Dental Sciences",
        location: "Secunderabad, Telangana",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "acds"
    },
    {
        rank: 32,
        name: "Chettinad Dental College",
        location: "Kelambakkam, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "chettinad-dental"
    },
    {
        rank: 33,
        name: "Meenakshi Ammal Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "meenakshi-dental"
    },
    {
        rank: 34,
        name: "Vishnu Dental College",
        location: "Bhimavaram, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹16,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "vishnu-dental"
    },
    {
        rank: 35,
        name: "Christian Dental College",
        location: "Ludhiana, Punjab",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "cdc-ludhiana"
    },
    {
        rank: 36,
        name: "Govt Dental College",
        location: "Shimla, Himachal Pradesh",
        entrance: "NEET UG",
        fees: "₹1,60,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "gdc-shimla"
    },
    {
        rank: 37,
        name: "Govt Dental College",
        location: "Ahmedabad, Gujarat",
        entrance: "NEET UG",
        fees: "₹1,20,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Govt",
        siteLink: "gdc-ahmedabad"
    },
    {
        rank: 38,
        name: "Govt Dental College",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹1,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "gdc-jaipur"
    },
    {
        rank: 39,
        name: "Punjab Govt Dental College",
        location: "Amritsar, Punjab",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "gdc-amritsar"
    },
    {
        rank: 40,
        name: "Goa Dental College",
        location: "Bambolim, Goa",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "goa-dental"
    },
    {
        rank: 41,
        name: "Bharati Vidyapeeth Dental College",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹22,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "bvp-dental"
    },
    {
        rank: 42,
        name: "M.G.M. Dental College",
        location: "Navi Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹24,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "mgm-dental"
    },
    {
        rank: 43,
        name: "Sinhgad Dental College",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹18,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sinhgad-dental"
    },
    {
        rank: 44,
        name: "Vokkaligara Sangha Dental College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹19,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "vsdc"
    },
    {
        rank: 45,
        name: "M.S. Ramaiah Dental College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹25,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "ms-ramaiah-dental"
    },
    {
        rank: 46,
        name: "Dayanand Sagar College of Dental",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "dayanand-sagar-dental"
    },
    {
        rank: 47,
        name: "Rajarajeswari Dental College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "rrdc"
    },
    {
        rank: 48,
        name: "Saveetha Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹40,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "saveetha-dental"
    },
    {
        rank: 49,
        name: "Thai Moogambigai Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "tmdc"
    },
    {
        rank: 50,
        name: "Satyabama Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sathyabama-dental"
    },
    {
        rank: 51,
        name: "Sree Balaji Dental College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹16,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sree-balaji"
    },
    {
        rank: 52,
        name: "Vinayaka Mission's Dental College",
        location: "Salem, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹15,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "vmsdc"
    },
    {
        rank: 53,
        name: "GITAM Dental College",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gitam-dental"
    },
    {
        rank: 54,
        name: "Narayana Dental College",
        location: "Nellore, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "narayana-dental"
    },
    {
        rank: 55,
        name: "Sibar Institute of Dental Sciences",
        location: "Guntur, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹12,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sibar-dental"
    },
    {
        rank: 56,
        name: "Panineeya Institute of Dental",
        location: "Hyderabad, Telangana",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "panineeya"
    },
    {
        rank: 57,
        name: "Malla Reddy Dental College",
        location: "Hyderabad, Telangana",
        entrance: "NEET UG",
        fees: "₹13,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "malla-reddy-dental"
    },
    {
        rank: 58,
        name: "KMCT Dental College",
        location: "Kozhikode, Kerala",
        entrance: "NEET UG",
        fees: "₹16,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "kmct-dental"
    },
    {
        rank: 59,
        name: "PMS College of Dental Science",
        location: "Thiruvananthapuram, Kerala",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "pms-dental"
    },
    {
        rank: 60,
        name: "Pushpagiri College of Dental",
        location: "Tiruvalla, Kerala",
        entrance: "NEET UG",
        fees: "₹14,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "pushpagiri-dental"
    },
    {
        rank: 61,
        name: "College of Dental Sciences",
        location: "Davangere, Karnataka",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "cods-davangere"
    },
    {
        rank: 62,
        name: "Bhojia Dental College",
        location: "Baddi, Himachal Pradesh",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "bhojia-dental"
    },
    {
        rank: 63,
        name: "Himachal Dental College",
        location: "Sundernagar, HP",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "himachal-dental"
    },
    {
        rank: 64,
        name: "Sudha Rustagi College",
        location: "Faridabad, Haryana",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sudha-rustagi"
    },
    {
        rank: 65,
        name: "Manav Rachna Dental College",
        location: "Faridabad, Haryana",
        entrance: "NEET UG",
        fees: "₹16,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "manav-rachna-dental"
    },
    {
        rank: 66,
        name: "SGT Dental College",
        location: "Gurugram, Haryana",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sgt-dental"
    },
    {
        rank: 67,
        name: "PDM Dental College",
        location: "Bahadurgarh, Haryana",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "pdm-dental"
    },
    {
        rank: 68,
        name: "Swami Devi Dyal Hospital",
        location: "Panchkula, Haryana",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sdd-dental"
    },
    {
        rank: 69,
        name: "Luxmi Bai Institute",
        location: "Patiala, Punjab",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "luxmi-bai-dental"
    },
    {
        rank: 70,
        name: "Genesis Institute",
        location: "Ferozepur, Punjab",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "genesis-dental"
    },
    {
        rank: 71,
        name: "National Dental College",
        location: "Mohali, Punjab",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "national-dental"
    },
    {
        rank: 72,
        name: "Sri Guru Ram Das Institute",
        location: "Amritsar, Punjab",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sgrd-dental"
    },
    {
        rank: 73,
        name: "Surendera Dental College",
        location: "Sri Ganganagar, Rajasthan",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "surendera-dental"
    },
    {
        rank: 74,
        name: "Mahatma Gandhi Dental College",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mgumst-dental"
    },
    {
        rank: 75,
        name: "NIMS Dental College",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "nims-dental"
    },
    {
        rank: 76,
        name: "Pacific Dental College",
        location: "Udaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "pacific-dental"
    },
    {
        rank: 77,
        name: "Darshan Dental College",
        location: "Udaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "darshan-dental"
    },
    {
        rank: 78,
        name: "ITS Dental College",
        location: "Greater Noida, UP",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "its-dental"
    },
    {
        rank: 79,
        name: "Sharda School of Dental",
        location: "Greater Noida, UP",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sharda-dental"
    },
    {
        rank: 80,
        name: "Saraswati Dental College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "saraswati-dental"
    },
    {
        rank: 81,
        name: "Sardar Patel Institute",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹11,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "spid-dental"
    },
    {
        rank: 82,
        name: "Babu Banarasi Das College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹13,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "bbd-dental"
    },
    {
        rank: 83,
        name: "Rama Dental College",
        location: "Kanpur, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹12,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "rama-dental"
    },
    {
        rank: 84,
        name: "Institute of Dental Sciences",
        location: "Bareilly, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "ids-bareilly"
    },
    {
        rank: 85,
        name: "Teerthanker Mahaveer Dental",
        location: "Moradabad, UP",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "tmu-dental"
    },
    {
        rank: 86,
        name: "Subharti Dental College",
        location: "Meerut, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹13,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "subharti-dental"
    },
    {
        rank: 87,
        name: "People's College of Dental",
        location: "Bhopal, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "peoples-dental"
    },
    {
        rank: 88,
        name: "Rishiraj College of Dental",
        location: "Bhopal, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹9,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "rishiraj-dental"
    },
    {
        rank: 89,
        name: "Modern Dental College",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "modern-dental"
    },
    {
        rank: 90,
        name: "Sri Aurobindo College",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "aurobindo-dental"
    },
    {
        rank: 91,
        name: "Index Institute of Dental",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "index-dental"
    },
    {
        rank: 92,
        name: "Hitkarini Dental College",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹9,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "hitkarini-dental"
    },
    {
        rank: 93,
        name: "Karnavati School of Dentistry",
        location: "Gandhinagar, Gujarat",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "karnavati-dental"
    },
    {
        rank: 94,
        name: "Dharmsinh Desai University",
        location: "Nadiad, Gujarat",
        entrance: "NEET UG",
        fees: "₹13,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ddu-dental"
    },
    {
        rank: 95,
        name: "Ahmedabad Dental College",
        location: "Ahmedabad, Gujarat",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "adc-dental"
    },
    {
        rank: 96,
        name: "Hi-Tech Dental College",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "hitech-dental"
    },
    {
        rank: 97,
        name: "Guru Nanak Institute",
        location: "Kolkata, West Bengal",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gnid"
    },
    {
        rank: 98,
        name: "Haldia Institute of Dental",
        location: "Haldia, West Bengal",
        entrance: "NEET UG",
        fees: "₹11,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "haldia-dental"
    },
    {
        rank: 99,
        name: "Maitri College of Dentistry",
        location: "Durg, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹9,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "maitri-dental"
    },
    {
        rank: 100,
        name: "New Horizon Dental College",
        location: "Bilaspur, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹8,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "new-horizon-dental"
    }
];

// Function to populate BDS table
function populateBDSTable() {
    const tbody = document.getElementById('bdsCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bdsColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = (college.type === 'Govt' || college.type === 'Central Govt') ? '#0891b2' : '#d97706';
        const typeBgColor = (college.type === 'Govt' || college.type === 'Central Govt') ? '#cffafe' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #0891b2; color: #0e7490; background: #ecfeff;">${college.rank}</div>
            </td>
            <td>
                <div class="college-name">${college.name}</div>
            </td>
            <td>
                <div class="college-location">${college.location}</div>
            </td>
            <td style="font-weight: 600; color: #db2777; font-size: 13px;">${college.entrance}</td>
            <td class="fee-cell">${college.fees}</td>
            <td class="placement-cell">${college.avgPlacement}</td>
            <td class="highest-placement-cell">${college.highestPlacement}</td>
            <td>
                <span style="background: ${typeBgColor}; color: ${typeBadgeColor}; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: 600;">
                    ${college.type}
                </span>
            </td>
            <td style="text-align: center;">
                <a href="college-site.html?id=BDS-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #0891b2 0%, #0e7490 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ BDS Colleges table populated with', bdsColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBDSTable();
});