// ============================================
// ANIMATION & DESIGN COLLEGES DATA (Top 100)
// ============================================

const animationColleges = [
    {
        rank: 1,
        name: "NID Ahmedabad",
        location: "Ahmedabad, Gujarat",
        entrance: "NID DAT",
        fees: "₹10,50,000",
        avgPlacement: "₹18.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "nid-ahmedabad"
    },
    {
        rank: 2,
        name: "IDC School of Design, IIT Bombay",
        location: "Mumbai, Maharashtra",
        entrance: "UCEED / CEED",
        fees: "₹8,50,000",
        avgPlacement: "₹16.50 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Govt",
        siteLink: "idc-iitb"
    },
    {
        rank: 3,
        name: "Satyajit Ray Film & TV Institute",
        location: "Kolkata, West Bengal",
        entrance: "JET",
        fees: "₹1,80,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "srfti"
    },
    {
        rank: 4,
        name: "FTII Pune",
        location: "Pune, Maharashtra",
        entrance: "JET",
        fees: "₹1,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "ftii"
    },
    {
        rank: 5,
        name: "NID Bengaluru",
        location: "Bengaluru, Karnataka",
        entrance: "NID DAT",
        fees: "₹9,50,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Govt",
        siteLink: "nid-blr"
    },
    {
        rank: 6,
        name: "NID Gandhinagar",
        location: "Gandhinagar, Gujarat",
        entrance: "NID DAT",
        fees: "₹9,50,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹25.00 LPA",
        type: "Govt",
        siteLink: "nid-gandhinagar"
    },
    {
        rank: 7,
        name: "IIT Guwahati (Dept of Design)",
        location: "Guwahati, Assam",
        entrance: "UCEED",
        fees: "₹8,50,000",
        avgPlacement: "₹15.00 LPA",
        highestPlacement: "₹36.00 LPA",
        type: "Govt",
        siteLink: "iitg-design"
    },
    {
        rank: 8,
        name: "Whistling Woods International",
        location: "Mumbai, Maharashtra",
        entrance: "WWI Entrance",
        fees: "₹21,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "whistling-woods"
    },
    {
        rank: 9,
        name: "Srishti Manipal Institute",
        location: "Bengaluru, Karnataka",
        entrance: "SMEAT",
        fees: "₹24,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "srishti"
    },
    {
        rank: 10,
        name: "MIT Institute of Design",
        location: "Pune, Maharashtra",
        entrance: "MIT DAT",
        fees: "₹18,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹22.00 LPA",
        type: "Private",
        siteLink: "mit-id"
    },
    {
        rank: 11,
        name: "IIITDM Jabalpur",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "UCEED",
        fees: "₹5,50,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹25.00 LPA",
        type: "Govt",
        siteLink: "iiitdmj"
    },
    {
        rank: 12,
        name: "Pearl Academy",
        location: "New Delhi, Delhi",
        entrance: "PAF Entrance",
        fees: "₹22,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "pearl-delhi"
    },
    {
        rank: 13,
        name: "IIT Hyderabad (Dept of Design)",
        location: "Hyderabad, Telangana",
        entrance: "UCEED",
        fees: "₹8,00,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "iith-design"
    },
    {
        rank: 14,
        name: "World University of Design",
        location: "Sonipat, Haryana",
        entrance: "WUDAT",
        fees: "₹12,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "wud"
    },
    {
        rank: 15,
        name: "UPES School of Design",
        location: "Dehradun, Uttarakhand",
        entrance: "UPES DAT",
        fees: "₹16,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "upes-design"
    },
    {
        rank: 16,
        name: "Vellore Institute (V-SIGN)",
        location: "Vellore, Tamil Nadu",
        entrance: "VITDAT",
        fees: "₹9,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "vit-design"
    },
    {
        rank: 17,
        name: "Loyola College (Viscom)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/Test",
        fees: "₹1,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "loyola"
    },
    {
        rank: 18,
        name: "St. Xavier's College",
        location: "Kolkata, West Bengal",
        entrance: "Entrance Test",
        fees: "₹2,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "xaviers-kol"
    },
    {
        rank: 19,
        name: "Symbiosis Institute of Design",
        location: "Pune, Maharashtra",
        entrance: "SEED",
        fees: "₹16,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "sid-pune"
    },
    {
        rank: 20,
        name: "UID (Karnavati University)",
        location: "Gandhinagar, Gujarat",
        entrance: "UID DAT",
        fees: "₹20,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "uid"
    },
    {
        rank: 21,
        name: "Amity School of Fine Arts",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹7,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "amity-arts"
    },
    {
        rank: 22,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹6,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "cu-animation"
    },
    {
        rank: 23,
        name: "Lovely Professional University",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹6,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "lpu-design"
    },
    {
        rank: 24,
        name: "AJK Mass Communication Research",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹1,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "ajk-mcrc"
    },
    {
        rank: 25,
        name: "ICAT Design & Media College",
        location: "Chennai, Tamil Nadu",
        entrance: "Aptitude Test",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "icat"
    },
    {
        rank: 26,
        name: "Asian Academy of Film & TV",
        location: "Noida, Uttar Pradesh",
        entrance: "AAFT GEE",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "aaft"
    },
    {
        rank: 27,
        name: "Frameboxx 2.0",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "frameboxx"
    },
    {
        rank: 28,
        name: "MAAC (Maya Academy)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "maac"
    },
    {
        rank: 29,
        name: "Arena Animation",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "arena"
    },
    {
        rank: 30,
        name: "Vogue Institute of Art",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹6,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "vogue"
    },
    {
        rank: 31,
        name: "Chitkara School of Art",
        location: "Rajpura, Punjab",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "chitkara-design"
    },
    {
        rank: 32,
        name: "Jain University (Design)",
        location: "Bengaluru, Karnataka",
        entrance: "JET",
        fees: "₹9,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "jain-design"
    },
    {
        rank: 33,
        name: "PES University (Design)",
        location: "Bengaluru, Karnataka",
        entrance: "PESSAT",
        fees: "₹12,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "pes-design"
    },
    {
        rank: 34,
        name: "SRM School of Design",
        location: "Chennai, Tamil Nadu",
        entrance: "SRMJEEE",
        fees: "₹6,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "srm-design"
    },
    {
        rank: 35,
        name: "Manipal University Jaipur",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹6,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "muj-design"
    },
    {
        rank: 36,
        name: "College of Art",
        location: "New Delhi, Delhi",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "college-of-art"
    },
    {
        rank: 37,
        name: "Sir J.J. Institute of Applied Art",
        location: "Mumbai, Maharashtra",
        entrance: "MH-AAC-CET",
        fees: "₹25,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "jj-applied-art"
    },
    {
        rank: 38,
        name: "Banaras Hindu University (Visual Arts)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "bhu-arts"
    },
    {
        rank: 39,
        name: "Jamia Millia Islamia (Fine Arts)",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "jmi-arts"
    },
    {
        rank: 40,
        name: "Pearl Academy (Mumbai)",
        location: "Mumbai, Maharashtra",
        entrance: "PAF Entrance",
        fees: "₹22,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "pearl-mumbai"
    },
    {
        rank: 41,
        name: "Pearl Academy (Bangalore)",
        location: "Bengaluru, Karnataka",
        entrance: "PAF Entrance",
        fees: "₹22,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "pearl-blr"
    },
    {
        rank: 42,
        name: "Pearl Academy (Jaipur)",
        location: "Jaipur, Rajasthan",
        entrance: "PAF Entrance",
        fees: "₹18,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "pearl-jaipur"
    },
    {
        rank: 43,
        name: "LISAA School of Design",
        location: "Bengaluru, Karnataka",
        entrance: "LISAA CAT",
        fees: "₹10,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "lisaa"
    },
    {
        rank: 44,
        name: "JD Institute of Fashion Tech",
        location: "Bengaluru, Karnataka",
        entrance: "GAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "jd-institute"
    },
    {
        rank: 45,
        name: "Arch College of Design",
        location: "Jaipur, Rajasthan",
        entrance: "AIEED",
        fees: "₹12,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "arch-jaipur"
    },
    {
        rank: 46,
        name: "IMS Design & Innovation",
        location: "Noida, Uttar Pradesh",
        entrance: "DIET",
        fees: "₹8,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "ims-dia"
    },
    {
        rank: 47,
        name: "Anant National University",
        location: "Ahmedabad, Gujarat",
        entrance: "Anant DAT",
        fees: "₹14,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "anant-u"
    },
    {
        rank: 48,
        name: "GLS Institute of Design",
        location: "Ahmedabad, Gujarat",
        entrance: "GLS DAT",
        fees: "₹10,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "gls-design"
    },
    {
        rank: 49,
        name: "Parul University (Design)",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "parul-design"
    },
    {
        rank: 50,
        name: "ITM Institute of Design",
        location: "Mumbai, Maharashtra",
        entrance: "ITM IDM",
        fees: "₹12,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "itm-design"
    },
    {
        rank: 51,
        name: "Raffles Design International",
        location: "Mumbai, Maharashtra",
        entrance: "Portfolio",
        fees: "₹20,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "raffles"
    },
    {
        rank: 52,
        name: "Sharda University (Design)",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹7,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sharda-design"
    },
    {
        rank: 53,
        name: "Galgotias University (Design)",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "galgotias-design"
    },
    {
        rank: 54,
        name: "Symbiosis Centre for Media",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹12,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "scmc"
    },
    {
        rank: 55,
        name: "M.O.P. Vaishnav College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mop-vaishnav"
    },
    {
        rank: 56,
        name: "Women's Christian College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "wcc-viscom"
    },
    {
        rank: 57,
        name: "DG Vaishnav College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "dg-vaishnav"
    },
    {
        rank: 58,
        name: "Hindustan Institute (HITS)",
        location: "Chennai, Tamil Nadu",
        entrance: "HITSEEE",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "hits-design"
    },
    {
        rank: 59,
        name: "Vels Institute (VISTAS)",
        location: "Chennai, Tamil Nadu",
        entrance: "VEE",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "vels-design"
    },
    {
        rank: 60,
        name: "Sathyabama Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "SAEEE",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sathyabama-viscom"
    },
    {
        rank: 61,
        name: "St. Thomas College",
        location: "Thrissur, Kerala",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "st-thomas"
    },
    {
        rank: 62,
        name: "Sacred Heart College",
        location: "Kochi, Kerala",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sh-college"
    },
    {
        rank: 63,
        name: "Rajagiri College",
        location: "Kochi, Kerala",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "rajagiri"
    },
    {
        rank: 64,
        name: "Christ Nagar College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "christ-nagar"
    },
    {
        rank: 65,
        name: "St. Joseph’s College",
        location: "Devagiri, Kerala",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "devagiri"
    },
    {
        rank: 66,
        name: "Suryadatta Institute",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "suryadatta"
    },
    {
        rank: 67,
        name: "Vishwakarma University",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "vu-design"
    },
    {
        rank: 68,
        name: "DY Patil International Univ",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "dy-patil-design"
    },
    {
        rank: 69,
        name: "Sandip University",
        location: "Nashik, Maharashtra",
        entrance: "SU JEE",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sandip-design"
    },
    {
        rank: 70,
        name: "Navrachana University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "navrachana"
    },
    {
        rank: 71,
        name: "P.P. Savani University",
        location: "Surat, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "pp-savani"
    },
    {
        rank: 72,
        name: "Auro University",
        location: "Surat, Gujarat",
        entrance: "Merit Based",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "auro-design"
    },
    {
        rank: 73,
        name: "Marwadi University",
        location: "Rajkot, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "marwadi"
    },
    {
        rank: 74,
        name: "RK University",
        location: "Rajkot, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rk-univ"
    },
    {
        rank: 75,
        name: "Silver Oak University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "silver-oak"
    },
    {
        rank: 76,
        name: "Swarrnim Startup University",
        location: "Gandhinagar, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "swarrnim"
    },
    {
        rank: 77,
        name: "ITM University",
        location: "Gwalior, Madhya Pradesh",
        entrance: "ITM NEST",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "itm-gwalior"
    },
    {
        rank: 78,
        name: "Sage University",
        location: "Indore, Madhya Pradesh",
        entrance: "SEE",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sage-design"
    },
    {
        rank: 79,
        name: "Renaissance University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "renaissance"
    },
    {
        rank: 80,
        name: "Medi-Caps University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "medicaps"
    },
    {
        rank: 81,
        name: "Jagran Lakecity University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "JLUET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "jlu-design"
    },
    {
        rank: 82,
        name: "Manipal University Jaipur (Arts)",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "muj-arts"
    },
    {
        rank: 83,
        name: "Poornima University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "poornima"
    },
    {
        rank: 84,
        name: "JECRC University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jecrc-design"
    },
    {
        rank: 85,
        name: "Vivekananda Global University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "vgu-design"
    },
    {
        rank: 86,
        name: "Apex University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "apex-design"
    },
    {
        rank: 87,
        name: "NIMS University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "nims-design"
    },
    {
        rank: 88,
        name: "Graphic Era Hill University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "gehu-design"
    },
    {
        rank: 89,
        name: "DIT University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "dit-design"
    },
    {
        rank: 90,
        name: "Uttaranchal University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "uu-design"
    },
    {
        rank: 91,
        name: "Dev Bhoomi Uttarakhand Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "dbuu-design"
    },
    {
        rank: 92,
        name: "Quantum University",
        location: "Roorkee, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "quantum"
    },
    {
        rank: 93,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "invertis-design"
    },
    {
        rank: 94,
        name: "Teerthanker Mahaveer Univ",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "tmu-finearts"
    },
    {
        rank: 95,
        name: "Swami Vivekanand Subharti",
        location: "Meerut, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "subharti"
    },
    {
        rank: 96,
        name: "IILM University",
        location: "Gurugram, Haryana",
        entrance: "Merit/Interview",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "iilm-design"
    },
    {
        rank: 97,
        name: "KR Mangalam University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "krm-design"
    },
    {
        rank: 98,
        name: "Starex University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "starex"
    },
    {
        rank: 99,
        name: "Geeta University",
        location: "Panipat, Haryana",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "geeta-design"
    },
    {
        rank: 100,
        name: "Om Sterling Global University",
        location: "Hisar, Haryana",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "osgu"
    }
];

// Function to populate Animation table
function populateAnimationTable() {
    const tbody = document.getElementById('animationCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    animationColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#f43f5e' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#fff1f2' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #f43f5e; color: #be123c; background: #fff1f2;">${college.rank}</div>
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
                <a href="college-site.html?id=Anim-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #f43f5e 0%, #e11d48 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ Animation Colleges table populated with', animationColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateAnimationTable();
});