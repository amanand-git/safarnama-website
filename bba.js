// ============================================
// BBA / IPM COLLEGES DATA (Top 100)
// ============================================

const bbaColleges = [
    {
        rank: 1,
        name: "IIM Indore (IPM)",
        location: "Indore, Madhya Pradesh",
        entrance: "IPMAT",
        fees: "₹32,00,000",
        avgPlacement: "₹25.01 LPA",
        highestPlacement: "₹1.14 Cr PA",
        specialization: "General Management",
        siteLink: "iim-indore"
    },
    {
        rank: 2,
        name: "Shaheed Sukhdev (SSCBS)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹75,000",
        avgPlacement: "₹11.50 LPA",
        highestPlacement: "₹44.00 LPA",
        specialization: "BMS / BBA (FIA)",
        siteLink: "sscbs"
    },
    {
        rank: 3,
        name: "SVKM’s NMIMS (ASMSOC)",
        location: "Mumbai, Maharashtra",
        entrance: "NPAT",
        fees: "₹14,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹18.00 LPA",
        specialization: "Marketing, Finance",
        siteLink: "nmims"
    },
    {
        rank: 4,
        name: "IIM Rohtak (IPM)",
        location: "Rohtak, Haryana",
        entrance: "IPMAT Rohtak",
        fees: "₹30,00,000",
        avgPlacement: "₹18.73 LPA",
        highestPlacement: "₹36.00 LPA",
        specialization: "General Management",
        siteLink: "iim-rohtak"
    },
    {
        rank: 5,
        name: "Christ University (Central)",
        location: "Bengaluru, Karnataka",
        entrance: "Christ Entrance",
        fees: "₹6,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹21.00 LPA",
        specialization: "BBA (Hons), Finance",
        siteLink: "christ"
    },
    {
        rank: 6,
        name: "Symbiosis (SCMS)",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹11,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹19.00 LPA",
        specialization: "Intl. Business",
        siteLink: "scms-pune"
    },
    {
        rank: 7,
        name: "St. Xavier’s College",
        location: "Mumbai, Maharashtra",
        entrance: "XET",
        fees: "₹1,20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BMS",
        siteLink: "xaviers-mum"
    },
    {
        rank: 8,
        name: "Loyola College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "loyola"
    },
    {
        rank: 9,
        name: "Madras Christian College (MCC)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "mcc"
    },
    {
        rank: 10,
        name: "IIM Ranchi (IPM)",
        location: "Ranchi, Jharkhand",
        entrance: "IPMAT (Indore)",
        fees: "₹31,00,000",
        avgPlacement: "₹17.30 LPA",
        highestPlacement: "₹35.50 LPA",
        specialization: "General Management",
        siteLink: "iim-ranchi"
    },
    {
        rank: 11,
        name: "Keshav Mahavidyalaya",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹60,000",
        avgPlacement: "₹6.20 LPA",
        highestPlacement: "₹21.50 LPA",
        specialization: "BMS",
        siteLink: "keshav"
    },
    {
        rank: 12,
        name: "Deen Dayal Upadhyaya College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹70,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹18.00 LPA",
        specialization: "BMS",
        siteLink: "ddu"
    },
    {
        rank: 13,
        name: "St. Xavier’s College",
        location: "Kolkata, West Bengal",
        entrance: "XAT (College)",
        fees: "₹5,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹20.00 LPA",
        specialization: "BMS (Hons)",
        siteLink: "xaviers-kol"
    },
    {
        rank: 14,
        name: "Mount Carmel College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹4,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BBA (Branding)",
        siteLink: "mount-carmel"
    },
    {
        rank: 15,
        name: "Symbiosis (SCMS)",
        location: "Noida, Uttar Pradesh",
        entrance: "SET",
        fees: "₹10,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "Marketing",
        siteLink: "scms-noida"
    },
    {
        rank: 16,
        name: "IIM Bodh Gaya (IPM)",
        location: "Bodh Gaya, Bihar",
        entrance: "JIPMAT",
        fees: "₹28,50,000",
        avgPlacement: "₹16.00 LPA",
        highestPlacement: "₹48.00 LPA",
        specialization: "Management",
        siteLink: "iim-bg"
    },
    {
        rank: 17,
        name: "IIM Jammu (IPM)",
        location: "Jammu, J&K",
        entrance: "JIPMAT",
        fees: "₹29,00,000",
        avgPlacement: "₹16.50 LPA",
        highestPlacement: "₹64.00 LPA",
        specialization: "Management",
        siteLink: "iim-jammu"
    },
    {
        rank: 18,
        name: "Maharaja Surajmal Institute",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA (Gen/Banking)",
        siteLink: "msi"
    },
    {
        rank: 19,
        name: "J.D. Birla Institute",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "jdbi"
    },
    {
        rank: 20,
        name: "St. Joseph’s College of Commerce",
        location: "Bengaluru, Karnataka",
        entrance: "SMAT",
        fees: "₹3,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA (Entrepreneurship)",
        siteLink: "sjcc"
    },
    {
        rank: 21,
        name: "Mithibai College",
        location: "Mumbai, Maharashtra",
        entrance: "CUET / Merit",
        fees: "₹60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BMS",
        siteLink: "mithibai"
    },
    {
        rank: 22,
        name: "Ness Wadia College",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "ness-wadia"
    },
    {
        rank: 23,
        name: "Maharaja Agrasen (MAIMS)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "maims"
    },
    {
        rank: 24,
        name: "VIPS",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "vips"
    },
    {
        rank: 25,
        name: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA",
        siteLink: "jmi"
    },
    {
        rank: 26,
        name: "JIMS Rohini",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "BBA",
        siteLink: "jims-rohini"
    },
    {
        rank: 27,
        name: "Kristu Jayanti College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Interview",
        fees: "₹3,00,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA (Aviation)",
        siteLink: "kristu"
    },
    {
        rank: 28,
        name: "IIFT (Kakinada - IPM)",
        location: "Kakinada, Andhra Pradesh",
        entrance: "IPMAT",
        fees: "₹20,00,000",
        avgPlacement: "₹29.10 LPA",
        highestPlacement: "₹85.00 LPA",
        specialization: "Intl. Business",
        siteLink: "iift"
    },
    {
        rank: 29,
        name: "Jai Hind College",
        location: "Mumbai, Maharashtra",
        entrance: "Common Entrance",
        fees: "₹80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹13.00 LPA",
        specialization: "BMS",
        siteLink: "jai-hind"
    },
    {
        rank: 30,
        name: "H.R. College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹75,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "BMS",
        siteLink: "hr-college"
    },
    {
        rank: 31,
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        entrance: "Amity Test",
        fees: "₹12,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹20.00 LPA",
        specialization: "BBA (General)",
        siteLink: "amity-noida"
    },
    {
        rank: 32,
        name: "Manipal University (MAHE)",
        location: "Manipal, Karnataka",
        entrance: "MET",
        fees: "₹9,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA",
        siteLink: "manipal"
    },
    {
        rank: 33,
        name: "CMS (Jain University)",
        location: "Bengaluru, Karnataka",
        entrance: "JET",
        fees: "₹8,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹18.00 LPA",
        specialization: "Corporate BBA",
        siteLink: "cms-jain"
    },
    {
        rank: 34,
        name: "SRM IST",
        location: "Chennai, Tamil Nadu",
        entrance: "SRMJEEE (BBA)",
        fees: "₹4,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "srm"
    },
    {
        rank: 35,
        name: "K.J. Somaiya (Arts & Commerce)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BMS",
        siteLink: "somaiya"
    },
    {
        rank: 36,
        name: "Ethiraj College for Women",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "ethiraj"
    },
    {
        rank: 37,
        name: "Prestige Institute (PIMR)",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "Foreign Trade",
        siteLink: "pimr"
    },
    {
        rank: 38,
        name: "Ramanujan College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BMS",
        siteLink: "ramanujan"
    },
    {
        rank: 39,
        name: "Aryabhatta College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹75,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BMS",
        siteLink: "aryabhatta"
    },
    {
        rank: 40,
        name: "Shivaji College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹70,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBE",
        siteLink: "shivaji"
    },
    {
        rank: 41,
        name: "College of Vocational Studies",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹65,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹12.50 LPA",
        specialization: "BMS / Marketing",
        siteLink: "cvs"
    },
    {
        rank: 42,
        name: "BMCC",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "bmcc"
    },
    {
        rank: 43,
        name: "Women’s Christian College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "wcc"
    },
    {
        rank: 44,
        name: "PSGR Krishnammal",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA (BPM)",
        siteLink: "psgr"
    },
    {
        rank: 45,
        name: "PSG College of Arts & Science",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA (Retail)",
        siteLink: "psg"
    },
    {
        rank: 46,
        name: "KIIT School of Management",
        location: "Bhubaneswar, Odisha",
        entrance: "KIITEE",
        fees: "₹10,50,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹18.00 LPA",
        specialization: "BBA",
        siteLink: "kiit"
    },
    {
        rank: 47,
        name: "Nirma University (IMNU)",
        location: "Ahmedabad, Gujarat",
        entrance: "IPMAT",
        fees: "₹18,00,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹30.00 LPA",
        specialization: "IPM (BBA+MBA)",
        siteLink: "nirma"
    },
    {
        rank: 48,
        name: "Symbiosis (SICSR)",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹9,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA (IT)",
        siteLink: "sicsr"
    },
    {
        rank: 49,
        name: "UPES (School of Business)",
        location: "Dehradun, Uttarakhand",
        entrance: "UPESMET-UG",
        fees: "₹12,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹29.00 LPA",
        specialization: "Oil & Gas / Digital",
        siteLink: "upes"
    },
    {
        rank: 50,
        name: "ICFAI Business School (IBS)",
        location: "Hyderabad, Telangana",
        entrance: "IBSAT / Merit",
        fees: "₹8,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA",
        siteLink: "ibs-hyd"
    },
    {
        rank: 51,
        name: "Goswami Ganesh Dutta S.D.",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "ggdsd"
    },
    {
        rank: 52,
        name: "DAV College",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "dav-chd"
    },
    {
        rank: 53,
        name: "Bhavan’s Vivekananda College",
        location: "Hyderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "BBA",
        siteLink: "bhavans"
    },
    {
        rank: 54,
        name: "St. Francis College",
        location: "Hyderabad, Telangana",
        entrance: "Merit/Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BMS",
        siteLink: "st-francis"
    },
    {
        rank: 55,
        name: "Badruka College",
        location: "Hyderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "badruka"
    },
    {
        rank: 56,
        name: "Indraprastha College (Women)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹85,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BMM",
        siteLink: "ipcw"
    },
    {
        rank: 57,
        name: "Laxmibai College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹65,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBE",
        siteLink: "laxmibai"
    },
    {
        rank: 58,
        name: "Sydenham College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BMS",
        siteLink: "sydenham"
    },
    {
        rank: 59,
        name: "R.A. Podar College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BMS",
        siteLink: "podar"
    },
    {
        rank: 60,
        name: "Usha Pravin Gandhi (UPG)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹70,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BMS",
        siteLink: "upg"
    },
    {
        rank: 61,
        name: "IMS Ghaziabad",
        location: "Ghaziabad, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹4,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA",
        siteLink: "ims-gzb"
    },
    {
        rank: 62,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "galgotias"
    },
    {
        rank: 63,
        name: "Amity University Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "Amity Test",
        fees: "₹9,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "BBA",
        siteLink: "amity-mum"
    },
    {
        rank: 64,
        name: "Bennett University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SAT / CUET",
        fees: "₹15,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹21.00 LPA",
        specialization: "BBA (Entrepreneurship)",
        siteLink: "bennett"
    },
    {
        rank: 65,
        name: "BML Munjal University",
        location: "Gurugram, Haryana",
        entrance: "BMU-SAT",
        fees: "₹11,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹25.00 LPA",
        specialization: "Family Business",
        siteLink: "bml-munjal"
    },
    {
        rank: 66,
        name: "TAPMI (Manipal Bangalore)",
        location: "Bengaluru, Karnataka",
        entrance: "IPMAT / MET",
        fees: "₹16,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹22.00 LPA",
        specialization: "BBA (Hons)",
        siteLink: "tapmi"
    },
    {
        rank: 67,
        name: "Graphic Era University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹16.00 LPA",
        specialization: "BBA",
        siteLink: "graphic-era"
    },
    {
        rank: 68,
        name: "Sharda University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA (IB)",
        siteLink: "sharda"
    },
    {
        rank: 69,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹6,40,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹24.00 LPA",
        specialization: "BBA",
        siteLink: "lpu"
    },
    {
        rank: 70,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹5,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹28.00 LPA",
        specialization: "BBA (Forex)",
        siteLink: "cu"
    },
    {
        rank: 71,
        name: "JIMS Kalkaji",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "jims-kalkaji"
    },
    {
        rank: 72,
        name: "NDIM",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "ndim"
    },
    {
        rank: 73,
        name: "St. Aloysius College",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "st-aloysius"
    },
    {
        rank: 74,
        name: "Sacred Heart College",
        location: "Kochi, Kerala",
        entrance: "Merit Based",
        fees: "₹50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "sacred-heart"
    },
    {
        rank: 75,
        name: "Rajagiri College",
        location: "Kochi, Kerala",
        entrance: "Merit/Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "rajagiri"
    },
    {
        rank: 76,
        name: "Mar Ivanios College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "Merit Based",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "BBA",
        siteLink: "mar-ivanios"
    },
    {
        rank: 77,
        name: "St. Albert’s College",
        location: "Kochi, Kerala",
        entrance: "Merit Based",
        fees: "₹60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "st-alberts"
    },
    {
        rank: 78,
        name: "Goenka College",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA (Hons)",
        siteLink: "goenka"
    },
    {
        rank: 79,
        name: "Bhawanipur Education Society",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "besc"
    },
    {
        rank: 80,
        name: "Techno India University",
        location: "Kolkata, West Bengal",
        entrance: "Merit/Test",
        fees: "₹4,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "techno-india"
    },
    {
        rank: 81,
        name: "Sathyabama Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "SAEEE",
        fees: "₹3,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "sathyabama"
    },
    {
        rank: 82,
        name: "Hindustan Institute (HITS)",
        location: "Chennai, Tamil Nadu",
        entrance: "HITSEEE",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Aviation Mgmt",
        siteLink: "hindustan"
    },
    {
        rank: 83,
        name: "Vels Institute (VISTAS)",
        location: "Chennai, Tamil Nadu",
        entrance: "VEE",
        fees: "₹2,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "vels"
    },
    {
        rank: 84,
        name: "MIT-WPU",
        location: "Pune, Maharashtra",
        entrance: "MIT-WPU UGPET",
        fees: "₹8,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA (Global)",
        siteLink: "mit-wpu"
    },
    {
        rank: 85,
        name: "Indira Institute (IIMP)",
        location: "Pune, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹4,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "indira"
    },
    {
        rank: 86,
        name: "AIMS Institutes",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "aims"
    },
    {
        rank: 87,
        name: "ABBS",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "BBA",
        siteLink: "abbs"
    },
    {
        rank: 88,
        name: "Alliance University",
        location: "Bengaluru, Karnataka",
        entrance: "AUEET",
        fees: "₹9,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹18.00 LPA",
        specialization: "BBA",
        siteLink: "alliance"
    },
    {
        rank: 89,
        name: "PES University",
        location: "Bengaluru, Karnataka",
        entrance: "PESSAT",
        fees: "₹8,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA (Hospitality)",
        siteLink: "pes"
    },
    {
        rank: 90,
        name: "Presidency College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "presidency"
    },
    {
        rank: 91,
        name: "IFIM College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹5,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA (CFA)",
        siteLink: "ifim"
    },
    {
        rank: 92,
        name: "Woxsen University",
        location: "Hyderabad, Telangana",
        entrance: "Woxsen Aptitude",
        fees: "₹12,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹20.00 LPA",
        specialization: "BBA (E-Com)",
        siteLink: "woxsen"
    },
    {
        rank: 93,
        name: "GITAM University",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "GAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "BBA",
        siteLink: "gitam"
    },
    {
        rank: 94,
        name: "St. Xavier’s College",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA-BPM",
        siteLink: "xaviers-ahd"
    },
    {
        rank: 95,
        name: "GLS University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "gls"
    },
    {
        rank: 96,
        name: "PDEU",
        location: "Gandhinagar, Gujarat",
        entrance: "SAT / IPMAT",
        fees: "₹10,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "BBA (Hons)",
        siteLink: "pdeu"
    },
    {
        rank: 97,
        name: "S.S. Jain Subodh P.G.",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "BBA",
        siteLink: "subodh"
    },
    {
        rank: 98,
        name: "ICG (IIS)",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "BBA",
        siteLink: "icg"
    },
    {
        rank: 99,
        name: "Manipal University Jaipur",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "BBA",
        siteLink: "muj"
    },
    {
        rank: 100,
        name: "JK Lakshmipat University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit/Interview",
        fees: "₹6,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "BBA",
        siteLink: "jklu"
    }
];

// Function to populate BBA table
function populateBBATable() {
    const tbody = document.getElementById('bbaCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bbaColleges.forEach(college => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #d97706; color: #b45309; background: #fef3c7;">${college.rank}</div>
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
            <td style="font-size: 13px; color: #4b5563;">${college.specialization}</td>
            <td style="text-align: center;">
                <a href="college-site.html?id=BBA-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ BBA Colleges table populated with', bbaColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBBATable();
});