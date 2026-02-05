// ============================================
// MASS COMMUNICATION COLLEGES DATA (Top 100)
// ============================================

const massCommColleges = [
    {
        rank: 1,
        name: "Indian Institute of Mass Comm (IIMC)",
        location: "New Delhi, Delhi",
        entrance: "CUET PG / IIMC",
        fees: "₹1,85,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "iimc-delhi"
    },
    {
        rank: 2,
        name: "AJK Mass Comm Research Centre (Jamia)",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹1,60,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "ajk-mcrc"
    },
    {
        rank: 3,
        name: "Symbiosis Institute of Media (SIMC)",
        location: "Pune, Maharashtra",
        entrance: "SIMC MA Exam",
        fees: "₹10,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Private",
        siteLink: "simc-pune"
    },
    {
        rank: 4,
        name: "Xavier Institute of Communications (XIC)",
        location: "Mumbai, Maharashtra",
        entrance: "XIC OET",
        fees: "₹3,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "xic-mumbai"
    },
    {
        rank: 5,
        name: "Asian College of Journalism (ACJ)",
        location: "Chennai, Tamil Nadu",
        entrance: "ACJ Entrance",
        fees: "₹7,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "acj-chennai"
    },
    {
        rank: 6,
        name: "Manipal Institute of Communication",
        location: "Manipal, Karnataka",
        entrance: "MET",
        fees: "₹4,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "manipal-mic"
    },
    {
        rank: 7,
        name: "Indian Institute of Journalism & New Media",
        location: "Bengaluru, Karnataka",
        entrance: "IIJNM Test",
        fees: "₹4,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "iijnm"
    },
    {
        rank: 8,
        name: "Department of Media Studies, Christ Univ",
        location: "Bengaluru, Karnataka",
        entrance: "Christ Entrance",
        fees: "₹4,20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "christ-media"
    },
    {
        rank: 9,
        name: "Sophia Smt. Manorama Devi Somani College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹2,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sophia-media"
    },
    {
        rank: 10,
        name: "Delhi College of Arts & Commerce (DCAC)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "dcac"
    },
    {
        rank: 11,
        name: "Lady Shri Ram College (LSR)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "lsr-media"
    },
    {
        rank: 12,
        name: "Indraprastha College for Women",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹1,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "ip-college"
    },
    {
        rank: 13,
        name: "Kamala Nehru College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "knc-delhi"
    },
    {
        rank: 14,
        name: "Madras Christian College (MCC)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "mcc-media"
    },
    {
        rank: 15,
        name: "Kishinchand Chellaram (KC) College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kc-college"
    },
    {
        rank: 16,
        name: "University of Hyderabad (Dept of Comm)",
        location: "Hyderabad, Telangana",
        entrance: "CUET PG",
        fees: "₹35,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "uoh-comm"
    },
    {
        rank: 17,
        name: "Makhanlal Chaturvedi National Univ",
        location: "Bhopal, Madhya Pradesh",
        entrance: "Entrance Test",
        fees: "₹60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "mcu-bhopal"
    },
    {
        rank: 18,
        name: "School of Communication, Manipal",
        location: "Manipal, Karnataka",
        entrance: "MET",
        fees: "₹6,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "soc-manipal"
    },
    {
        rank: 19,
        name: "Whistling Woods International",
        location: "Mumbai, Maharashtra",
        entrance: "WWI Entrance",
        fees: "₹18,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "whistling-woods"
    },
    {
        rank: 20,
        name: "FTII Pune",
        location: "Pune, Maharashtra",
        entrance: "JET",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "ftii"
    },
    {
        rank: 21,
        name: "Amity School of Communication",
        location: "Noida, Uttar Pradesh",
        entrance: "Amity Test",
        fees: "₹9,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "amity-comm"
    },
    {
        rank: 22,
        name: "Guru Gobind Singh IP Univ (USMC)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "ipu-usmc"
    },
    {
        rank: 23,
        name: "VIPS (Vivekananda Institute)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "vips-media"
    },
    {
        rank: 24,
        name: "Symbiosis Centre for Media (SCMC)",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹11,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "scmc-pune"
    },
    {
        rank: 25,
        name: "Jai Hind College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹1,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "jai-hind"
    },
    {
        rank: 26,
        name: "Mithibai College",
        location: "Mumbai, Maharashtra",
        entrance: "CUET / Merit",
        fees: "₹1,40,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mithibai"
    },
    {
        rank: 27,
        name: "St. Xavier's College",
        location: "Mumbai, Maharashtra",
        entrance: "XET",
        fees: "₹1,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "xaviers-mum"
    },
    {
        rank: 28,
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
        rank: 29,
        name: "Institute of Mass Comm & Media Tech",
        location: "Kurukshetra, Haryana",
        entrance: "Merit Based",
        fees: "₹80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "imcmt-kuk"
    },
    {
        rank: 30,
        name: "Panjab University (School of Comm)",
        location: "Chandigarh",
        entrance: "PU-CET",
        fees: "₹50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "pu-comm"
    },
    {
        rank: 31,
        name: "Savitribai Phule Pune Univ (Dept of Media)",
        location: "Pune, Maharashtra",
        entrance: "OEE",
        fees: "₹60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "unipune-media"
    },
    {
        rank: 32,
        name: "Calcutta University (Dept of Journalism)",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "cu-journalism"
    },
    {
        rank: 33,
        name: "Jadavpur University (Dept of Media)",
        location: "Kolkata, West Bengal",
        entrance: "Merit/Test",
        fees: "₹10,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "ju-media"
    },
    {
        rank: 34,
        name: "Aligarh Muslim University (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "AMU Entrance",
        fees: "₹45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "amu-media"
    },
    {
        rank: 35,
        name: "Banaras Hindu University (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "CUET",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "bhu-media"
    },
    {
        rank: 36,
        name: "Anna University (Dept of Media)",
        location: "Chennai, Tamil Nadu",
        entrance: "TANCET / Merit",
        fees: "₹80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "anna-media"
    },
    {
        rank: 37,
        name: "Bangalore University",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹30,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "bu-media"
    },
    {
        rank: 38,
        name: "Osmania University",
        location: "Hyderabad, Telangana",
        entrance: "OUCET",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "ou-media"
    },
    {
        rank: 39,
        name: "Maharaja Agrasen College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹65,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "mac-delhi"
    },
    {
        rank: 40,
        name: "Institute of Home Economics",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹85,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "ihe-delhi"
    },
    {
        rank: 41,
        name: "Jagran Institute of Mgmt & Mass Comm",
        location: "Noida, Uttar Pradesh",
        entrance: "Entrance Test",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "jim-noida"
    },
    {
        rank: 42,
        name: "Apeejay Institute of Mass Comm",
        location: "New Delhi, Delhi",
        entrance: "Entrance Test",
        fees: "₹2,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "apeejay-media"
    },
    {
        rank: 43,
        name: "Bennett University",
        location: "Greater Noida, UP",
        entrance: "Merit/Interview",
        fees: "₹9,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "bennett-media"
    },
    {
        rank: 44,
        name: "Sharda University",
        location: "Greater Noida, UP",
        entrance: "SUAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sharda-media"
    },
    {
        rank: 45,
        name: "Galgotias University",
        location: "Greater Noida, UP",
        entrance: "GUEE",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "galgotias-media"
    },
    {
        rank: 46,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹5,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "cu-media"
    },
    {
        rank: 47,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹6,40,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "lpu-media"
    },
    {
        rank: 48,
        name: "Chitkara School of Mass Comm",
        location: "Rajpura, Punjab",
        entrance: "Merit Based",
        fees: "₹4,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "chitkara-media"
    },
    {
        rank: 49,
        name: "Manav Rachna International",
        location: "Faridabad, Haryana",
        entrance: "MRNAT",
        fees: "₹5,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "manav-rachna"
    },
    {
        rank: 50,
        name: "GD Goenka University",
        location: "Gurugram, Haryana",
        entrance: "GATA",
        fees: "₹6,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "gd-goenka"
    },
    {
        rank: 51,
        name: "KR Mangalam University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "krm-media"
    },
    {
        rank: 52,
        name: "SGT University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sgt-media"
    },
    {
        rank: 53,
        name: "St. Joseph's University",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹3,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sju-blr"
    },
    {
        rank: 54,
        name: "Kristu Jayanti College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Interview",
        fees: "₹3,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "kristu-jayanti"
    },
    {
        rank: 55,
        name: "Mount Carmel College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹3,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mcc-blr"
    },
    {
        rank: 56,
        name: "Commits (Institute of Journalism)",
        location: "Bengaluru, Karnataka",
        entrance: "Entrance Exam",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "commits"
    },
    {
        rank: 57,
        name: "Presidency College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "presidency-blr"
    },
    {
        rank: 58,
        name: "Reva University",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "reva-media"
    },
    {
        rank: 59,
        name: "Loyola College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "loyola-media"
    },
    {
        rank: 60,
        name: "Stella Maris College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "stella-media"
    },
    {
        rank: 61,
        name: "Ethiraj College for Women",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ethiraj-media"
    },
    {
        rank: 62,
        name: "Women's Christian College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "wcc-media"
    },
    {
        rank: 63,
        name: "M.O.P. Vaishnav College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mop-media"
    },
    {
        rank: 64,
        name: "DG Vaishnav College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "dg-vaishnav"
    },
    {
        rank: 65,
        name: "SRM Institute (SRMIST)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "srm-media"
    },
    {
        rank: 66,
        name: "Hindustan Institute (HITS)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "hits-media"
    },
    {
        rank: 67,
        name: "Vels University (VISTAS)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "vels-media"
    },
    {
        rank: 68,
        name: "Sathyabama Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sathyabama-media"
    },
    {
        rank: 69,
        name: "Kalinga Institute (KIIT)",
        location: "Bhubaneswar, Odisha",
        entrance: "KIITEE",
        fees: "₹6,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "kiit-media"
    },
    {
        rank: 70,
        name: "Siksha 'O' Anusandhan",
        location: "Bhubaneswar, Odisha",
        entrance: "SAAT",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "soa-media"
    },
    {
        rank: 71,
        name: "Centurion University",
        location: "Bhubaneswar, Odisha",
        entrance: "CUEE",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "centurion-media"
    },
    {
        rank: 72,
        name: "Nirma University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "nirma-media"
    },
    {
        rank: 73,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "parul-media"
    },
    {
        rank: 74,
        name: "Navrachana University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "navrachana-media"
    },
    {
        rank: 75,
        name: "GLS University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "gls-media"
    },
    {
        rank: 76,
        name: "Karnavati University (UID)",
        location: "Gandhinagar, Gujarat",
        entrance: "UID DAT",
        fees: "₹8,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "karnavati-media"
    },
    {
        rank: 77,
        name: "Manipal University Jaipur",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹5,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "muj-media"
    },
    {
        rank: 78,
        name: "Banasthali Vidyapith",
        location: "Banasthali, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "banasthali-media"
    },
    {
        rank: 79,
        name: "Jaipur National University",
        location: "Jaipur, Rajasthan",
        entrance: "Entrance Test",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "jnu-jaipur"
    },
    {
        rank: 80,
        name: "NIMS University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "nims-media"
    },
    {
        rank: 81,
        name: "Vivekananda Global Univ",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "vgu-media"
    },
    {
        rank: 82,
        name: "Poornima University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "poornima-media"
    },
    {
        rank: 83,
        name: "UPES School of Design/Media",
        location: "Dehradun, Uttarakhand",
        entrance: "Entrance Test",
        fees: "₹8,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "upes-media"
    },
    {
        rank: 84,
        name: "Graphic Era Hill University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gehu-media"
    },
    {
        rank: 85,
        name: "DIT University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "dit-media"
    },
    {
        rank: 86,
        name: "Uttaranchal University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "uu-media"
    },
    {
        rank: 87,
        name: "Jagran Lakecity University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "JLUET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "jlu-media"
    },
    {
        rank: 88,
        name: "Sage University",
        location: "Indore, Madhya Pradesh",
        entrance: "SEE",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sage-media"
    },
    {
        rank: 89,
        name: "Renaissance University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "renaissance-media"
    },
    {
        rank: 90,
        name: "Teerthanker Mahaveer Univ",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "tmu-media"
    },
    {
        rank: 91,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "invertis-media"
    },
    {
        rank: 92,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "IUET",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "integral-media"
    },
    {
        rank: 93,
        name: "Babu Banarasi Das Univ",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "bbdu-media"
    },
    {
        rank: 94,
        name: "Amity University Lucknow",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "amity-lko-media"
    },
    {
        rank: 95,
        name: "Royal Global University",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "rgu-media"
    },
    {
        rank: 96,
        name: "Assam Down Town Univ",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "adtu-media"
    },
    {
        rank: 97,
        name: "Kaziranga University",
        location: "Jorhat, Assam",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "kaziranga-media"
    },
    {
        rank: 98,
        name: "Quantum University",
        location: "Roorkee, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "quantum-media"
    },
    {
        rank: 99,
        name: "Dev Bhoomi Uttarakhand Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "dbuu-media"
    },
    {
        rank: 100,
        name: "Himalayan University",
        location: "Itanagar, Arunachal",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "himalayan-media"
    }
];

// Function to populate Mass Comm table
function populateMassCommTable() {
    const tbody = document.getElementById('massCommCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    massCommColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#db2777' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#fdf2f8' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #db2777; color: #be185d; background: #fce7f3;">${college.rank}</div>
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
                <a href="college-site.html?id=MassComm-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #db2777 0%, #be185d 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ Mass Comm Colleges table populated with', massCommColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateMassCommTable();
});