// ============================================
// M.TECH COLLEGES DATA (Top 100)
// ============================================

const mtechColleges = [
    {
        rank: 1,
        name: "IIT Madras",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹21.50 LPA",
        highestPlacement: "₹54.21 LPA",
        type: "Govt",
        siteLink: "iit-madras"
    },
    {
        rank: 2,
        name: "IIT Delhi",
        location: "New Delhi, Delhi",
        entrance: "GATE",
        fees: "₹3,80,000",
        avgPlacement: "₹20.00 LPA",
        highestPlacement: "₹2.00 Cr PA",
        type: "Govt",
        siteLink: "iit-delhi"
    },
    {
        rank: 3,
        name: "IIT Bombay",
        location: "Mumbai, Maharashtra",
        entrance: "GATE",
        fees: "₹1,30,000",
        avgPlacement: "₹22.00 LPA",
        highestPlacement: "₹1.00 Cr PA",
        type: "Govt",
        siteLink: "iit-bombay"
    },
    {
        rank: 4,
        name: "IIT Kanpur",
        location: "Kanpur, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹1,20,000",
        avgPlacement: "₹24.70 LPA",
        highestPlacement: "₹1.90 Cr PA",
        type: "Govt",
        siteLink: "iit-kanpur"
    },
    {
        rank: 5,
        name: "IIT Kharagpur",
        location: "Kharagpur, West Bengal",
        entrance: "GATE",
        fees: "₹70,000",
        avgPlacement: "₹18.00 LPA",
        highestPlacement: "₹2.60 Cr PA",
        type: "Govt",
        siteLink: "iit-kgp"
    },
    {
        rank: 6,
        name: "IIT Roorkee",
        location: "Roorkee, Uttarakhand",
        entrance: "GATE",
        fees: "₹70,000",
        avgPlacement: "₹17.00 LPA",
        highestPlacement: "₹1.30 Cr PA",
        type: "Govt",
        siteLink: "iit-roorkee"
    },
    {
        rank: 7,
        name: "IIT Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "GATE",
        fees: "₹95,000",
        avgPlacement: "₹20.00 LPA",
        highestPlacement: "₹63.00 LPA",
        type: "Govt",
        siteLink: "iit-hyd"
    },
    {
        rank: 8,
        name: "IIT Guwahati",
        location: "Guwahati, Assam",
        entrance: "GATE",
        fees: "₹1,25,000",
        avgPlacement: "₹15.00 LPA",
        highestPlacement: "₹65.70 LPA",
        type: "Govt",
        siteLink: "iit-guwahati"
    },
    {
        rank: 9,
        name: "NIT Trichy",
        location: "Tiruchirappalli, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,30,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹42.00 LPA",
        type: "Govt",
        siteLink: "nit-trichy"
    },
    {
        rank: 10,
        name: "IIT BHU (Varanasi)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹65,000",
        avgPlacement: "₹15.00 LPA",
        highestPlacement: "₹39.00 LPA",
        type: "Govt",
        siteLink: "iit-bhu"
    },
    {
        rank: 11,
        name: "Vellore Institute of Technology (VIT)",
        location: "Vellore, Tamil Nadu",
        entrance: "VITMEE / GATE",
        fees: "₹3,80,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹1.02 Cr PA",
        type: "Private",
        siteLink: "vit-vellore"
    },
    {
        rank: 12,
        name: "IIT Indore",
        location: "Indore, Madhya Pradesh",
        entrance: "GATE",
        fees: "₹1,40,000",
        avgPlacement: "₹13.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "iit-indore"
    },
    {
        rank: 13,
        name: "NIT Rourkela",
        location: "Rourkela, Odisha",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹12.50 LPA",
        highestPlacement: "₹52.00 LPA",
        type: "Govt",
        siteLink: "nit-rourkela"
    },
    {
        rank: 14,
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        entrance: "BITS HD / GATE",
        fees: "₹11,50,000",
        avgPlacement: "₹18.00 LPA",
        highestPlacement: "₹60.00 LPA",
        type: "Private",
        siteLink: "bits-pilani"
    },
    {
        rank: 15,
        name: "IIT (ISM) Dhanbad",
        location: "Dhanbad, Jharkhand",
        entrance: "GATE",
        fees: "₹1,00,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "iit-ism"
    },
    {
        rank: 16,
        name: "SRM Institute (SRMIST)",
        location: "Chennai, Tamil Nadu",
        entrance: "SRMJEEE (PG)",
        fees: "₹3,20,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Private",
        siteLink: "srm-chennai"
    },
    {
        rank: 17,
        name: "NIT Surathkal (NITK)",
        location: "Mangalore, Karnataka",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹13.00 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Govt",
        siteLink: "nit-surathkal"
    },
    {
        rank: 18,
        name: "Jadavpur University",
        location: "Kolkata, West Bengal",
        entrance: "GATE",
        fees: "₹10,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹58.00 LPA",
        type: "Govt",
        siteLink: "jadavpur"
    },
    {
        rank: 19,
        name: "Anna University",
        location: "Chennai, Tamil Nadu",
        entrance: "TANCET / GATE",
        fees: "₹1,10,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹36.00 LPA",
        type: "Govt",
        siteLink: "anna-univ"
    },
    {
        rank: 20,
        name: "NIT Warangal",
        location: "Warangal, Telangana",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹13.50 LPA",
        highestPlacement: "₹52.00 LPA",
        type: "Govt",
        siteLink: "nit-warangal"
    },
    {
        rank: 21,
        name: "NIT Calicut",
        location: "Kozhikode, Kerala",
        entrance: "GATE",
        fees: "₹1,65,000",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹47.00 LPA",
        type: "Govt",
        siteLink: "nit-calicut"
    },
    {
        rank: 22,
        name: "IIT Patna",
        location: "Patna, Bihar",
        entrance: "GATE",
        fees: "₹1,10,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹82.00 LPA",
        type: "Govt",
        siteLink: "iit-patna"
    },
    {
        rank: 23,
        name: "Amrita Vishwa Vidyapeetham",
        location: "Coimbatore, Tamil Nadu",
        entrance: "GATE / Amrita Entrance",
        fees: "₹3,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹56.00 LPA",
        type: "Private",
        siteLink: "amrita"
    },
    {
        rank: 24,
        name: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        entrance: "GATE / JMI Entrance",
        fees: "₹35,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹25.00 LPA",
        type: "Govt",
        siteLink: "jmi"
    },
    {
        rank: 25,
        name: "IIT Gandhinagar",
        location: "Gandhinagar, Gujarat",
        entrance: "GATE",
        fees: "₹1,50,000",
        avgPlacement: "₹11.50 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "iit-gandhinagar"
    },
    {
        rank: 26,
        name: "IIT Mandi",
        location: "Mandi, Himachal Pradesh",
        entrance: "GATE",
        fees: "₹85,000",
        avgPlacement: "₹13.00 LPA",
        highestPlacement: "₹60.00 LPA",
        type: "Govt",
        siteLink: "iit-mandi"
    },
    {
        rank: 27,
        name: "Thapar Institute (TIET)",
        location: "Patiala, Punjab",
        entrance: "GATE",
        fees: "₹3,80,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Private",
        siteLink: "thapar"
    },
    {
        rank: 28,
        name: "DTU (Delhi Tech University)",
        location: "New Delhi, Delhi",
        entrance: "GATE",
        fees: "₹3,00,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹80.00 LPA",
        type: "Govt",
        siteLink: "dtu"
    },
    {
        rank: 29,
        name: "IIIT Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "PGEE",
        fees: "₹5,00,000",
        avgPlacement: "₹25.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Private",
        siteLink: "iiit-hyd"
    },
    {
        rank: 30,
        name: "MNIT Jaipur",
        location: "Jaipur, Rajasthan",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹64.00 LPA",
        type: "Govt",
        siteLink: "mnit-jaipur"
    },
    {
        rank: 31,
        name: "VNIT Nagpur",
        location: "Nagpur, Maharashtra",
        entrance: "GATE",
        fees: "₹1,75,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹35.00 LPA",
        type: "Govt",
        siteLink: "vnit-nagpur"
    },
    {
        rank: 32,
        name: "IIT Ropar",
        location: "Rupnagar, Punjab",
        entrance: "GATE",
        fees: "₹1,20,000",
        avgPlacement: "₹12.50 LPA",
        highestPlacement: "₹55.00 LPA",
        type: "Govt",
        siteLink: "iit-ropar"
    },
    {
        rank: 33,
        name: "IIIT Bangalore",
        location: "Bengaluru, Karnataka",
        entrance: "GATE",
        fees: "₹6,50,000",
        avgPlacement: "₹21.80 LPA",
        highestPlacement: "₹65.00 LPA",
        type: "Private",
        siteLink: "iiit-bangalore"
    },
    {
        rank: 34,
        name: "Aligarh Muslim University (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹30,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "amu"
    },
    {
        rank: 35,
        name: "NIT Durgapur",
        location: "Durgapur, West Bengal",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "nit-durgapur"
    },
    {
        rank: 36,
        name: "NIT Silchar",
        location: "Silchar, Assam",
        entrance: "GATE",
        fees: "₹1,50,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹44.00 LPA",
        type: "Govt",
        siteLink: "nit-silchar"
    },
    {
        rank: 37,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "GATE / CUCET",
        fees: "₹2,40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Private",
        siteLink: "chandigarh-univ"
    },
    {
        rank: 38,
        name: "Siksha 'O' Anusandhan",
        location: "Bhubaneswar, Odisha",
        entrance: "GATE / SAAT",
        fees: "₹3,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹42.00 LPA",
        type: "Private",
        siteLink: "soa"
    },
    {
        rank: 39,
        name: "Kalasalingam Academy",
        location: "Srivilliputhur, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Private",
        siteLink: "kalasalingam"
    },
    {
        rank: 40,
        name: "IIT Jodhpur",
        location: "Jodhpur, Rajasthan",
        entrance: "GATE",
        fees: "₹1,10,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹55.00 LPA",
        type: "Govt",
        siteLink: "iit-jodhpur"
    },
    {
        rank: 41,
        name: "SASTRA University",
        location: "Thanjavur, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹27.00 LPA",
        type: "Private",
        siteLink: "sastra"
    },
    {
        rank: 42,
        name: "NIT Kurukshetra",
        location: "Kurukshetra, Haryana",
        entrance: "GATE",
        fees: "₹1,90,000",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "nit-kurukshetra"
    },
    {
        rank: 43,
        name: "Manipal Institute (MIT)",
        location: "Manipal, Karnataka",
        entrance: "GATE / MET",
        fees: "₹4,50,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹54.00 LPA",
        type: "Private",
        siteLink: "manipal-mit"
    },
    {
        rank: 44,
        name: "IIEST Shibpur",
        location: "Howrah, West Bengal",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Govt",
        siteLink: "iiest"
    },
    {
        rank: 45,
        name: "IIT Bhubaneswar",
        location: "Bhubaneswar, Odisha",
        entrance: "GATE",
        fees: "₹1,20,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹55.00 LPA",
        type: "Govt",
        siteLink: "iit-bbsr"
    },
    {
        rank: 46,
        name: "NIT Allahabad (MNNIT)",
        location: "Prayagraj, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹49.00 LPA",
        type: "Govt",
        siteLink: "mnnit"
    },
    {
        rank: 47,
        name: "IIIT Allahabad",
        location: "Prayagraj, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹2,50,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹1.21 Cr PA",
        type: "Govt",
        siteLink: "iiit-allahabad"
    },
    {
        rank: 48,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        entrance: "GATE / LPUNEST",
        fees: "₹2,40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹54.00 LPA",
        type: "Private",
        siteLink: "lpu"
    },
    {
        rank: 49,
        name: "NIT Hamirpur",
        location: "Hamirpur, Himachal Pradesh",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹35.00 LPA",
        type: "Govt",
        siteLink: "nit-hamirpur"
    },
    {
        rank: 50,
        name: "NIT Raipur",
        location: "Raipur, Chhattisgarh",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹55.00 LPA",
        type: "Govt",
        siteLink: "nit-raipur"
    },
    {
        rank: 51,
        name: "ICT Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "GATE",
        fees: "₹1,42,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "ict-mumbai"
    },
    {
        rank: 52,
        name: "NIT Jalandhar",
        location: "Jalandhar, Punjab",
        entrance: "GATE",
        fees: "₹1,75,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "nit-jalandhar"
    },
    {
        rank: 53,
        name: "NIT Patna",
        location: "Patna, Bihar",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹8.80 LPA",
        highestPlacement: "₹52.00 LPA",
        type: "Govt",
        siteLink: "nit-patna"
    },
    {
        rank: 54,
        name: "NIT Meghalaya",
        location: "Shillong, Meghalaya",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Govt",
        siteLink: "nit-meghalaya"
    },
    {
        rank: 55,
        name: "IIIT Delhi",
        location: "New Delhi, Delhi",
        entrance: "GATE",
        fees: "₹3,50,000",
        avgPlacement: "₹18.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "iiit-delhi"
    },
    {
        rank: 56,
        name: "PSG College of Technology",
        location: "Coimbatore, Tamil Nadu",
        entrance: "GATE / TANCET",
        fees: "₹1,20,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Private",
        siteLink: "psg-tech"
    },
    {
        rank: 57,
        name: "COEP Tech University",
        location: "Pune, Maharashtra",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "coep"
    },
    {
        rank: 58,
        name: "VJTI Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹44.00 LPA",
        type: "Govt",
        siteLink: "vjti"
    },
    {
        rank: 59,
        name: "NIT Agartala",
        location: "Agartala, Tripura",
        entrance: "GATE",
        fees: "₹1,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹35.00 LPA",
        type: "Govt",
        siteLink: "nit-agartala"
    },
    {
        rank: 60,
        name: "NIT Delhi",
        location: "New Delhi, Delhi",
        entrance: "GATE",
        fees: "₹1,90,000",
        avgPlacement: "₹13.00 LPA",
        highestPlacement: "₹82.00 LPA",
        type: "Govt",
        siteLink: "nit-delhi"
    },
    {
        rank: 61,
        name: "NIT Goa",
        location: "Ponda, Goa",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "nit-goa"
    },
    {
        rank: 62,
        name: "Kalinga Institute (KIIT)",
        location: "Bhubaneswar, Odisha",
        entrance: "GATE / KIITEE",
        fees: "₹4,20,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹63.00 LPA",
        type: "Private",
        siteLink: "kiit"
    },
    {
        rank: 63,
        name: "NIT Jamshedpur",
        location: "Jamshedpur, Jharkhand",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Govt",
        siteLink: "nit-jamshedpur"
    },
    {
        rank: 64,
        name: "NIT Bhopal (MANIT)",
        location: "Bhopal, Madhya Pradesh",
        entrance: "GATE",
        fees: "₹1,85,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "manit"
    },
    {
        rank: 65,
        name: "DIAT Pune",
        location: "Pune, Maharashtra",
        entrance: "GATE",
        fees: "₹2,20,000",
        avgPlacement: "₹20.00 LPA",
        highestPlacement: "₹35.00 LPA",
        type: "Govt",
        siteLink: "diat"
    },
    {
        rank: 66,
        name: "Punjab Engineering College",
        location: "Chandigarh",
        entrance: "GATE",
        fees: "₹1,90,000",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Govt",
        siteLink: "pec"
    },
    {
        rank: 67,
        name: "BIT Mesra",
        location: "Ranchi, Jharkhand",
        entrance: "GATE",
        fees: "₹4,50,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹51.00 LPA",
        type: "Private",
        siteLink: "bit-mesra"
    },
    {
        rank: 68,
        name: "IIITDM Kancheepuram",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,00,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Govt",
        siteLink: "iiitdm-kancheepuram"
    },
    {
        rank: 69,
        name: "IIITDM Jabalpur",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "GATE",
        fees: "₹2,10,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹45.00 LPA",
        type: "Govt",
        siteLink: "iiitdm-jabalpur"
    },
    {
        rank: 70,
        name: "NIT Srinagar",
        location: "Srinagar, J&K",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "nit-srinagar"
    },
    {
        rank: 71,
        name: "NIT Manipur",
        location: "Imphal, Manipur",
        entrance: "GATE",
        fees: "₹1,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Govt",
        siteLink: "nit-manipur"
    },
    {
        rank: 72,
        name: "NIT Puducherry",
        location: "Karaikal, Puducherry",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "nit-puducherry"
    },
    {
        rank: 73,
        name: "NIT Uttarakhand",
        location: "Srinagar, Uttarakhand",
        entrance: "GATE",
        fees: "₹1,70,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "nit-uk"
    },
    {
        rank: 74,
        name: "NIT Mizoram",
        location: "Aizawl, Mizoram",
        entrance: "GATE",
        fees: "₹1,60,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "nit-mizoram"
    },
    {
        rank: 75,
        name: "Thiagarajar College of Engg",
        location: "Madurai, Tamil Nadu",
        entrance: "GATE / TANCET",
        fees: "₹1,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹21.00 LPA",
        type: "Private",
        siteLink: "tce"
    },
    {
        rank: 76,
        name: "R.V. College of Engineering",
        location: "Bengaluru, Karnataka",
        entrance: "GATE / PGCET",
        fees: "₹2,50,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹48.00 LPA",
        type: "Private",
        siteLink: "rvce"
    },
    {
        rank: 77,
        name: "MS Ramaiah Institute (MSRIT)",
        location: "Bengaluru, Karnataka",
        entrance: "GATE / PGCET",
        fees: "₹2,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Private",
        siteLink: "msrit"
    },
    {
        rank: 78,
        name: "BMS College of Engineering",
        location: "Bengaluru, Karnataka",
        entrance: "GATE / PGCET",
        fees: "₹1,80,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹48.00 LPA",
        type: "Private",
        siteLink: "bmsce"
    },
    {
        rank: 79,
        name: "PES University",
        location: "Bengaluru, Karnataka",
        entrance: "PESSAT / GATE",
        fees: "₹3,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Private",
        siteLink: "pes"
    },
    {
        rank: 80,
        name: "University of Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "GATE",
        fees: "₹80,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹23.00 LPA",
        type: "Govt",
        siteLink: "uoh"
    },
    {
        rank: 81,
        name: "JNTU Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "GATE / TS PGECET",
        fees: "₹60,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Govt",
        siteLink: "jntuh"
    },
    {
        rank: 82,
        name: "Andhra University",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "GATE / AP PGECET",
        fees: "₹50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "andhra-univ"
    },
    {
        rank: 83,
        name: "Sathyabama Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE / SAEEE",
        fees: "₹2,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹53.00 LPA",
        type: "Private",
        siteLink: "sathyabama"
    },
    {
        rank: 84,
        name: "Hindustan Institute (HITS)",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "hits"
    },
    {
        rank: 85,
        name: "Graphic Era University",
        location: "Dehradun, Uttarakhand",
        entrance: "GATE",
        fees: "₹2,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹48.00 LPA",
        type: "Private",
        siteLink: "graphic-era"
    },
    {
        rank: 86,
        name: "UPES Dehradun",
        location: "Dehradun, Uttarakhand",
        entrance: "GATE / UPES Exam",
        fees: "₹3,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹50.00 LPA",
        type: "Private",
        siteLink: "upes"
    },
    {
        rank: 87,
        name: "Nirma University",
        location: "Ahmedabad, Gujarat",
        entrance: "GATE",
        fees: "₹4,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹30.00 LPA",
        type: "Private",
        siteLink: "nirma"
    },
    {
        rank: 88,
        name: "Dhirubhai Ambani Institute (DA-IICT)",
        location: "Gandhinagar, Gujarat",
        entrance: "GATE",
        fees: "₹3,00,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Private",
        siteLink: "daiict"
    },
    {
        rank: 89,
        name: "Pandit Deendayal Energy Univ (PDEU)",
        location: "Gandhinagar, Gujarat",
        entrance: "GATE",
        fees: "₹2,80,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Private",
        siteLink: "pdeu"
    },
    {
        rank: 90,
        name: "Jaypee Institute (JIIT)",
        location: "Noida, Uttar Pradesh",
        entrance: "GATE",
        fees: "₹2,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹40.00 LPA",
        type: "Private",
        siteLink: "jiit"
    },
    {
        rank: 91,
        name: "Kumaraguru College",
        location: "Coimbatore, Tamil Nadu",
        entrance: "GATE / TANCET",
        fees: "₹1,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "kumaraguru"
    },
    {
        rank: 92,
        name: "Rajalakshmi Engineering College",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE / TANCET",
        fees: "₹1,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "rajalakshmi"
    },
    {
        rank: 93,
        name: "Sri Krishna College",
        location: "Coimbatore, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,30,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "skcet"
    },
    {
        rank: 94,
        name: "Kongu Engineering College",
        location: "Erode, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "kongu"
    },
    {
        rank: 95,
        name: "Sona College of Technology",
        location: "Salem, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "sona"
    },
    {
        rank: 96,
        name: "Mepco Schlenk Engineering College",
        location: "Sivakasi, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "mepco"
    },
    {
        rank: 97,
        name: "Bannari Amman Institute",
        location: "Sathyamangalam, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "bannari"
    },
    {
        rank: 98,
        name: "Vel Tech Rangarajan",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "veltech"
    },
    {
        rank: 99,
        name: "BS Abdur Rahman Crescent",
        location: "Chennai, Tamil Nadu",
        entrance: "GATE",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Private",
        siteLink: "crescent"
    },
    {
        rank: 100,
        name: "Karunya Institute",
        location: "Coimbatore, Tamil Nadu",
        entrance: "GATE",
        fees: "₹2,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "karunya"
    }
];

// Function to populate M.Tech table
function populateMTechTable() {
    const tbody = document.getElementById('mtechCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    mtechColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#7c3aed' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#f3e8ff' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #7c3aed; color: #6d28d9; background: #f3e8ff;">${college.rank}</div>
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
                <a href="college-site.html?id=MTech-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #7c3aed 0%, #6d28d9 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ M.Tech Colleges table populated with', mtechColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateMTechTable();
});