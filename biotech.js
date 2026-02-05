// ============================================
// BIOTECHNOLOGY COLLEGES DATA (Top 100)
// ============================================

const biotechColleges = [
    {
        rank: 1,
        name: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,50,000",
        avgPlacement: "₹16.00 LPA",
        highestPlacement: "₹64.00 LPA",
        siteLink: "iit-madras"
    },
    {
        rank: 2,
        name: "IIT Delhi",
        location: "New Delhi, Delhi",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,60,000",
        avgPlacement: "₹18.50 LPA",
        highestPlacement: "₹2.00 Cr PA",
        siteLink: "iit-delhi"
    },
    {
        rank: 3,
        name: "IIT Kharagpur",
        location: "Kharagpur, West Bengal",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,40,000",
        avgPlacement: "₹15.00 LPA",
        highestPlacement: "₹2.40 Cr PA",
        siteLink: "iit-kgp"
    },
    {
        rank: 4,
        name: "IIT Roorkee",
        location: "Roorkee, Uttarakhand",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,50,000",
        avgPlacement: "₹16.80 LPA",
        highestPlacement: "₹1.30 Cr PA",
        siteLink: "iit-roorkee"
    },
    {
        rank: 5,
        name: "IIT Guwahati",
        location: "Guwahati, Assam",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,60,000",
        avgPlacement: "₹17.00 LPA",
        highestPlacement: "₹2.40 Cr PA",
        siteLink: "iit-guwahati"
    },
    {
        rank: 6,
        name: "IIT Hyderabad",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "JEE Advanced",
        fees: "₹8,80,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹60.00 LPA",
        siteLink: "iit-hyd"
    },
    {
        rank: 7,
        name: "NIT Rourkela",
        location: "Rourkela, Odisha",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹6,25,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹42.00 LPA",
        siteLink: "nit-rourkela"
    },
    {
        rank: 8,
        name: "Vellore Institute of Technology (VIT)",
        location: "Vellore, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "VITEEE",
        fees: "₹7,80,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹1.02 Cr PA",
        siteLink: "vit-vellore"
    },
    {
        rank: 9,
        name: "NIT Warangal",
        location: "Warangal, Telangana",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,50,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹44.00 LPA",
        siteLink: "nit-warangal"
    },
    {
        rank: 10,
        name: "Institute of Chemical Technology (ICT)",
        location: "Mumbai, Maharashtra",
        course: "B.Tech Food/Biotech",
        entrance: "MHT CET / JEE",
        fees: "₹3,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹18.00 LPA",
        siteLink: "ict-mumbai"
    },
    {
        rank: 11,
        name: "Thapar Institute (TIET)",
        location: "Patiala, Punjab",
        course: "B.Tech Biotech",
        entrance: "JEE Main / Merit",
        fees: "₹14,50,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹40.00 LPA",
        siteLink: "thapar"
    },
    {
        rank: 12,
        name: "NIT Calicut",
        location: "Kozhikode, Kerala",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,50,000",
        avgPlacement: "₹9.20 LPA",
        highestPlacement: "₹36.00 LPA",
        siteLink: "nit-calicut"
    },
    {
        rank: 13,
        name: "Manipal Institute of Technology (MIT)",
        location: "Manipal, Karnataka",
        course: "B.Tech Biotech",
        entrance: "MET",
        fees: "₹13,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹45.00 LPA",
        siteLink: "manipal-mit"
    },
    {
        rank: 14,
        name: "Amity University (Noida)",
        location: "Noida, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "Amity JEE",
        fees: "₹12,80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹30.00 LPA",
        siteLink: "amity-noida"
    },
    {
        rank: 15,
        name: "SRM Institute (SRMIST)",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "SRMJEEE",
        fees: "₹10,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹25.00 LPA",
        siteLink: "srm-chennai"
    },
    {
        rank: 16,
        name: "NIT Durgapur",
        location: "Durgapur, West Bengal",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹32.00 LPA",
        siteLink: "nit-durgapur"
    },
    {
        rank: 17,
        name: "DTU (Delhi Tech University)",
        location: "New Delhi, Delhi",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹6,00,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹35.00 LPA",
        siteLink: "dtu"
    },
    {
        rank: 18,
        name: "MNNIT Allahabad",
        location: "Prayagraj, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹6,50,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹38.00 LPA",
        siteLink: "mnnit"
    },
    {
        rank: 19,
        name: "SASTRA University",
        location: "Thanjavur, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "JEE Main / Merit",
        fees: "₹6,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹27.00 LPA",
        siteLink: "sastra"
    },
    {
        rank: 20,
        name: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        course: "B.Sc Biotechnology",
        entrance: "JMI Entrance",
        fees: "₹45,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "jmi"
    },
    {
        rank: 21,
        name: "NIT Jalandhar",
        location: "Jalandhar, Punjab",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,20,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹22.00 LPA",
        siteLink: "nit-jalandhar"
    },
    {
        rank: 22,
        name: "NIT Raipur",
        location: "Raipur, Chhattisgarh",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,50,000",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹20.00 LPA",
        siteLink: "nit-raipur"
    },
    {
        rank: 23,
        name: "Jaypee Institute (JIIT)",
        location: "Noida, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹10,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹28.00 LPA",
        siteLink: "jiit"
    },
    {
        rank: 24,
        name: "BITS Pilani (Dubai/Goa/Hyd)",
        location: "Pilani, Rajasthan",
        course: "B.E. Biotech",
        entrance: "BITSAT",
        fees: "₹19,00,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹35.00 LPA",
        siteLink: "bits-pilani"
    },
    {
        rank: 25,
        name: "NSUT Delhi",
        location: "New Delhi, Delhi",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹7,00,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹30.00 LPA",
        siteLink: "nsut"
    },
    {
        rank: 26,
        name: "Fergusson College",
        location: "Pune, Maharashtra",
        course: "B.Sc Biotechnology",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "fergusson"
    },
    {
        rank: 27,
        name: "St. Xavier's College",
        location: "Mumbai, Maharashtra",
        course: "B.Sc Biotechnology",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "xaviers-mum"
    },
    {
        rank: 28,
        name: "Christ University",
        location: "Bengaluru, Karnataka",
        course: "B.Sc Biotechnology",
        entrance: "Christ Entrance",
        fees: "₹3,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        siteLink: "christ"
    },
    {
        rank: 29,
        name: "Mount Carmel College",
        location: "Bengaluru, Karnataka",
        course: "B.Sc Biotechnology",
        entrance: "Merit/Test",
        fees: "₹2,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "mcc-bangalore"
    },
    {
        rank: 30,
        name: "Loyola College",
        location: "Chennai, Tamil Nadu",
        course: "B.Sc Biotechnology",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        siteLink: "loyola"
    },
    {
        rank: 31,
        name: "PSG College of Technology",
        location: "Coimbatore, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "TNEA",
        fees: "₹2,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹22.00 LPA",
        siteLink: "psg-tech"
    },
    {
        rank: 32,
        name: "Kumaraguru College",
        location: "Coimbatore, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "TNEA",
        fees: "₹2,20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "kumaraguru"
    },
    {
        rank: 33,
        name: "Kalinga Institute (KIIT)",
        location: "Bhubaneswar, Odisha",
        course: "B.Tech Biotech",
        entrance: "KIITEE",
        fees: "₹14,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹18.00 LPA",
        siteLink: "kiit"
    },
    {
        rank: 34,
        name: "Siksha 'O' Anusandhan",
        location: "Bhubaneswar, Odisha",
        course: "B.Tech Biotech",
        entrance: "SAAT",
        fees: "₹9,50,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "soa"
    },
    {
        rank: 35,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        course: "B.Sc/B.Tech Biotech",
        entrance: "CUCET",
        fees: "₹6,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹20.00 LPA",
        siteLink: "chandigarh-univ"
    },
    {
        rank: 36,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        course: "B.Tech Biotech",
        entrance: "LPUNEST",
        fees: "₹7,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹18.00 LPA",
        siteLink: "lpu"
    },
    {
        rank: 37,
        name: "UPES Dehradun",
        location: "Dehradun, Uttarakhand",
        course: "B.Sc/B.Tech Biotech",
        entrance: "UPES Exam",
        fees: "₹8,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹16.00 LPA",
        siteLink: "upes"
    },
    {
        rank: 38,
        name: "Graphic Era University",
        location: "Dehradun, Uttarakhand",
        course: "B.Tech Biotech",
        entrance: "JEE Main / Merit",
        fees: "₹7,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "graphic-era"
    },
    {
        rank: 39,
        name: "NIT Andhra Pradesh",
        location: "Tadepalligudem, AP",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "nit-ap"
    },
    {
        rank: 40,
        name: "NIT Arunachal Pradesh",
        location: "Itanagar, Arunachal",
        course: "B.Tech Biotech",
        entrance: "JEE Main",
        fees: "₹5,30,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        siteLink: "nit-arunachal"
    },
    {
        rank: 41,
        name: "Banasthali Vidyapith",
        location: "Banasthali, Rajasthan",
        course: "B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹14.00 LPA",
        siteLink: "banasthali"
    },
    {
        rank: 42,
        name: "Mody University",
        location: "Sikar, Rajasthan",
        course: "B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹6,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "mody"
    },
    {
        rank: 43,
        name: "PES University",
        location: "Bengaluru, Karnataka",
        course: "B.Tech Biotech",
        entrance: "PESSAT",
        fees: "₹12,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹20.00 LPA",
        siteLink: "pes"
    },
    {
        rank: 44,
        name: "RV College of Engineering",
        location: "Bengaluru, Karnataka",
        course: "B.E. Biotech",
        entrance: "KCET / COMEDK",
        fees: "₹10,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹25.00 LPA",
        siteLink: "rvce"
    },
    {
        rank: 45,
        name: "BMS College of Engineering",
        location: "Bengaluru, Karnataka",
        course: "B.E. Biotech",
        entrance: "KCET / COMEDK",
        fees: "₹9,50,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹22.00 LPA",
        siteLink: "bmsce"
    },
    {
        rank: 46,
        name: "MS Ramaiah Institute (MSRIT)",
        location: "Bengaluru, Karnataka",
        course: "B.E. Biotech",
        entrance: "KCET / COMEDK",
        fees: "₹9,80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹20.00 LPA",
        siteLink: "msrit"
    },
    {
        rank: 47,
        name: "Rajalakshmi Engineering College",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "TNEA",
        fees: "₹2,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "rajalakshmi"
    },
    {
        rank: 48,
        name: "Sri Venkateswara College of Engg",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "TNEA",
        fees: "₹2,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹14.00 LPA",
        siteLink: "svce"
    },
    {
        rank: 49,
        name: "St. Joseph's College of Engg",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "TNEA",
        fees: "₹2,40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "st-josephs"
    },
    {
        rank: 50,
        name: "Vel Tech Rangarajan",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "VTUEEE",
        fees: "₹7,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹11.00 LPA",
        siteLink: "vel-tech"
    },
    {
        rank: 51,
        name: "Sathyabama Institute",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "SAEEE",
        fees: "₹8,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "sathyabama"
    },
    {
        rank: 52,
        name: "Hindustan Institute (HITS)",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "HITSEEE",
        fees: "₹8,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "hindustan"
    },
    {
        rank: 53,
        name: "BS Abdur Rahman Crescent",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "CIEAT",
        fees: "₹7,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "crescent"
    },
    {
        rank: 54,
        name: "Karunya Institute",
        location: "Coimbatore, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "KEE",
        fees: "₹9,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "karunya"
    },
    {
        rank: 55,
        name: "Kalasalingam Academy",
        location: "Srivilliputhur, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "KALSEE",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "kalasalingam"
    },
    {
        rank: 56,
        name: "Periyar Maniammai Institute",
        location: "Thanjavur, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "pmu"
    },
    {
        rank: 57,
        name: "Vels Institute (VISTAS)",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "VEE",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "vels"
    },
    {
        rank: 58,
        name: "Dr. MGR Educational Institute",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "MGREEE",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        siteLink: "mgr-univ"
    },
    {
        rank: 59,
        name: "Bharath Institute (BIHER)",
        location: "Chennai, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "BEEE",
        fees: "₹6,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "bharath"
    },
    {
        rank: 60,
        name: "Noorul Islam Centre",
        location: "Kanyakumari, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "NIUEE",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        siteLink: "noorul"
    },
    {
        rank: 61,
        name: "Vinayaka Mission's",
        location: "Salem, Tamil Nadu",
        course: "B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        siteLink: "vinayaka"
    },
    {
        rank: 62,
        name: "Anurag University",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "TS EAMCET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "anurag"
    },
    {
        rank: 63,
        name: "Gokaraju Rangaraju (GRIET)",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "TS EAMCET",
        fees: "₹5,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "griet"
    },
    {
        rank: 64,
        name: "CBIT Hyderabad",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "TS EAMCET",
        fees: "₹5,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "cbit"
    },
    {
        rank: 65,
        name: "Sreenidhi Institute (SNIST)",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "TS EAMCET",
        fees: "₹5,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹11.00 LPA",
        siteLink: "snist"
    },
    {
        rank: 66,
        name: "Vignan University",
        location: "Guntur, Andhra Pradesh",
        course: "B.Tech Biotech",
        entrance: "VSAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "vignan"
    },
    {
        rank: 67,
        name: "GITAM University",
        location: "Visakhapatnam, Andhra Pradesh",
        course: "B.Tech Biotech",
        entrance: "GAT",
        fees: "₹9,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹14.00 LPA",
        siteLink: "gitam"
    },
    {
        rank: 68,
        name: "KL University",
        location: "Guntur, Andhra Pradesh",
        course: "B.Tech Biotech",
        entrance: "KLEEE",
        fees: "₹9,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "klu"
    },
    {
        rank: 69,
        name: "Andhra University",
        location: "Visakhapatnam, Andhra Pradesh",
        course: "B.Tech Biotech",
        entrance: "AP EAMCET",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "andhra-univ"
    },
    {
        rank: 70,
        name: "Sri Venkateswara University",
        location: "Tirupati, Andhra Pradesh",
        course: "B.Tech Chemical/Bio",
        entrance: "AP EAMCET",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        siteLink: "sv-univ"
    },
    {
        rank: 71,
        name: "JNTU Hyderabad",
        location: "Hyderabad, Telangana",
        course: "B.Tech Biotech",
        entrance: "TS EAMCET",
        fees: "₹1,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "jntuh"
    },
    {
        rank: 72,
        name: "MIT-WPU Pune",
        location: "Pune, Maharashtra",
        course: "B.Tech Bioengineering",
        entrance: "MHT CET / JEE",
        fees: "₹12,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "mit-wpu"
    },
    {
        rank: 73,
        name: "DY Patil Vidyapeeth",
        location: "Pune, Maharashtra",
        course: "B.Tech Biotech",
        entrance: "AIBTCET",
        fees: "₹8,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "dpu-pune"
    },
    {
        rank: 74,
        name: "Bharati Vidyapeeth",
        location: "Pune, Maharashtra",
        course: "B.Tech Biotech",
        entrance: "BVP CET",
        fees: "₹5,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "bharati-vidyapeeth"
    },
    {
        rank: 75,
        name: "Shiv Nadar University",
        location: "Greater Noida, Uttar Pradesh",
        course: "B.Sc/B.Tech Research",
        entrance: "SNUSAT",
        fees: "₹14,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹20.00 LPA",
        siteLink: "snu"
    },
    {
        rank: 76,
        name: "Sharda University",
        location: "Greater Noida, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "SUAT",
        fees: "₹7,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "sharda"
    },
    {
        rank: 77,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "GUEE",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "galgotias"
    },
    {
        rank: 78,
        name: "Noida Institute of Engg (NIET)",
        location: "Greater Noida, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "UPSEE",
        fees: "₹5,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        siteLink: "niet"
    },
    {
        rank: 79,
        name: "Graphic Era University",
        location: "Dehradun, Uttarakhand",
        course: "B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹9,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        siteLink: "graphic-era"
    },
    {
        rank: 80,
        name: "Uttaranchal University",
        location: "Dehradun, Uttarakhand",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        siteLink: "uttaranchal"
    },
    {
        rank: 81,
        name: "DIT University",
        location: "Dehradun, Uttarakhand",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        siteLink: "dit"
    },
    {
        rank: 82,
        name: "Chitkara University",
        location: "Rajpura, Punjab",
        course: "B.Sc Allied Healthcare",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "chitkara"
    },
    {
        rank: 83,
        name: "Rayat Bahra University",
        location: "Mohali, Punjab",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        siteLink: "rayat-bahra"
    },
    {
        rank: 84,
        name: "GNA University",
        location: "Phagwara, Punjab",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        siteLink: "gna"
    },
    {
        rank: 85,
        name: "CT University",
        location: "Ludhiana, Punjab",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        siteLink: "ct-univ"
    },
    {
        rank: 86,
        name: "Maharishi Markandeshwar",
        location: "Ambala, Haryana",
        course: "B.Tech/B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "mm-ambala"
    },
    {
        rank: 87,
        name: "SGT University",
        location: "Gurugram, Haryana",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "sgt"
    },
    {
        rank: 88,
        name: "PDM University",
        location: "Bahadurgarh, Haryana",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        siteLink: "pdm"
    },
    {
        rank: 89,
        name: "Manav Rachna International",
        location: "Faridabad, Haryana",
        course: "B.Tech Biotech",
        entrance: "MRNAT",
        fees: "₹6,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        siteLink: "manav-rachna"
    },
    {
        rank: 90,
        name: "Nirma University",
        location: "Ahmedabad, Gujarat",
        course: "M.Sc Biotech",
        entrance: "Entrance Test",
        fees: "₹4,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        siteLink: "nirma"
    },
    {
        rank: 91,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        course: "B.Sc/B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "parul"
    },
    {
        rank: 92,
        name: "Ganpat University",
        location: "Mehsana, Gujarat",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        siteLink: "ganpat"
    },
    {
        rank: 93,
        name: "Charusat University",
        location: "Anand, Gujarat",
        course: "B.Tech Biotech",
        entrance: "GUJCET",
        fees: "₹5,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        siteLink: "charusat"
    },
    {
        rank: 94,
        name: "Navrachana University",
        location: "Vadodara, Gujarat",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        siteLink: "navrachana"
    },
    {
        rank: 95,
        name: "Teerthanker Mahaveer",
        location: "Moradabad, Uttar Pradesh",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        siteLink: "tmu"
    },
    {
        rank: 96,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        course: "B.Tech/B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        siteLink: "invertis"
    },
    {
        rank: 97,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        course: "B.Tech Biotech",
        entrance: "IUET",
        fees: "₹5,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        siteLink: "integral"
    },
    {
        rank: 98,
        name: "AKS University",
        location: "Satna, Madhya Pradesh",
        course: "B.Sc/B.Tech Biotech",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        siteLink: "aks"
    },
    {
        rank: 99,
        name: "Oriental University",
        location: "Indore, Madhya Pradesh",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        siteLink: "oriental"
    },
    {
        rank: 100,
        name: "Medi-Caps University",
        location: "Indore, Madhya Pradesh",
        course: "B.Sc Biotech",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        siteLink: "medicaps"
    }
];

// Function to populate Biotech table
function populateBiotechTable() {
    const tbody = document.getElementById('biotechCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    biotechColleges.forEach(college => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #10b981; color: #047857; background: #ecfdf5;">${college.rank}</div>
            </td>
            <td>
                <div class="college-name">${college.name}</div>
            </td>
            <td>
                <div class="college-location">${college.location}</div>
            </td>
            <td style="font-size: 13px; font-weight: 500;">${college.course}</td>
            <td style="font-weight: 600; color: #db2777; font-size: 13px;">${college.entrance}</td>
            <td class="fee-cell">${college.fees}</td>
            <td class="placement-cell">${college.avgPlacement}</td>
            <td class="highest-placement-cell">${college.highestPlacement}</td>
            <td style="text-align: center;">
                <a href="college-site.html?id=Biotech-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #10b981 0%, #059669 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ Biotech Colleges table populated with', biotechColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBiotechTable();
});