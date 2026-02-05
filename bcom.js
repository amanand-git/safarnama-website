// ============================================
// B.COM COLLEGES DATA (Top 17)
// ============================================

const bcomColleges = [
    {
        rank: 1,
        name: "Shri Ram College of Commerce (SRCC)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹30,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹35.00 LPA",
        specialization: "Commerce, Economics",
        siteLink: "srcc"
    },
    {
        rank: 2,
        name: "Hindu College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹26,000",
        avgPlacement: "₹8.40 LPA",
        highestPlacement: "₹29.00 LPA",
        specialization: "Commerce, General",
        siteLink: "hindu"
    },
    {
        rank: 3,
        name: "Lady Shri Ram College (LSR)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹24,000",
        avgPlacement: "₹9.80 LPA",
        highestPlacement: "₹40.00 LPA",
        specialization: "Commerce, General",
        siteLink: "lsr"
    },
    {
        rank: 4,
        name: "Hansraj College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹25,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹22.00 LPA",
        specialization: "Commerce, General",
        siteLink: "hansraj"
    },
    {
        rank: 5,
        name: "Loyola College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/Test",
        fees: "₹15,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, Accounting",
        siteLink: "loyola"
    },
    {
        rank: 6,
        name: "Kirori Mal College (KMC)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹18,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹19.00 LPA",
        specialization: "Commerce, General",
        siteLink: "kmc"
    },
    {
        rank: 7,
        name: "Madras Christian College (MCC)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/Test",
        fees: "₹32,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "mcc"
    },
    {
        rank: 8,
        name: "Christ University",
        location: "Bengaluru, Karnataka",
        entrance: "Christ Test",
        fees: "₹1,45,000",
        avgPlacement: "₹6.80 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "Commerce, Finance",
        siteLink: "christ"
    },
    {
        rank: 9,
        name: "Narsee Monjee College (NM)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹35,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, Accounting",
        siteLink: "nm"
    },
    {
        rank: 10,
        name: "Ramjas College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹16,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "Commerce, General",
        siteLink: "ramjas"
    },
    {
        rank: 11,
        name: "St. Joseph's College of Commerce",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹95,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, Prof.",
        siteLink: "sjcc"
    },
    {
        rank: 12,
        name: "Mithibai College of Arts",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/Test",
        fees: "₹30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "mithibai"
    },
    {
        rank: 13,
        name: "Atma Ram Sanatan Dharma (ARSD)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹14,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "arsd"
    },
    {
        rank: 14,
        name: "Sri Venkateswara College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "svc"
    },
    {
        rank: 15,
        name: "St. Xavier's College",
        location: "Kolkata, West Bengal",
        entrance: "College Test",
        fees: "₹45,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        specialization: "Commerce, General",
        siteLink: "sxck"
    },
    {
        rank: 16,
        name: "St. Xavier's College",
        location: "Mumbai, Maharashtra",
        entrance: "College Test",
        fees: "₹7,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹13.00 LPA",
        specialization: "Commerce, Mgmt",
        siteLink: "sxcm"
    },
    {
        rank: 17,
        name: "Daulat Ram College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹18,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "drc"
    },
    {
        rank: 18,
        name: "Gargi College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹16,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "gargi"
    },
    {
        rank: 19,
        name: "Stella Maris College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/College Test",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "stella"
    },
    {
        rank: 20,
        name: "Deen Dayal Upadhyaya College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "ddu"
    },
    {
        rank: 21,
        name: "Indraprastha College for Women (IPCW)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹24,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "ipcw"
    },
    {
        rank: 22,
        name: "Mount Carmel College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/College Test",
        fees: "₹65,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, General",
        siteLink: "mcc-blr"
    },
    {
        rank: 23,
        name: "R.A. Podar College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹6,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.50 LPA",
        specialization: "Commerce, Accounting",
        siteLink: "podar"
    },
    {
        rank: 24,
        name: "Women's Christian College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/College Test",
        fees: "₹35,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Commerce, General",
        siteLink: "wcc"
    },
    {
        rank: 25,
        name: "Symbiosis College of Arts & Commerce",
        location: "Pune, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹28,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "symbiosis-ac"
    },
    {
        rank: 26,
        name: "K.J. Somaiya College of Arts & Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹12,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "somaiya"
    },
    {
        rank: 27,
        name: "Sri Guru Gobind Singh College of Commerce",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹26,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, General",
        siteLink: "sggscc"
    },
    {
        rank: 28,
        name: "H.R. College of Commerce & Economics",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹7,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹13.00 LPA",
        specialization: "Commerce, Economics",
        siteLink: "hr-college"
    },
    {
        rank: 29,
        name: "Kristu Jayanti College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/College Test",
        fees: "₹70,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "kristu"
    },
    {
        rank: 30,
        name: "Jesus and Mary College (JMC)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹18,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        specialization: "Commerce, General",
        siteLink: "jmc"
    },
    {
        rank: 31,
        name: "Goenka College of Commerce",
        location: "Kolkata, West Bengal",
        entrance: "College Test",
        fees: "₹4,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "goenka"
    },
    {
        rank: 32,
        name: "Delhi College of Arts & Commerce (DCAC)",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹12,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "dcac"
    },
    {
        rank: 33,
        name: "Shaheed Bhagat Singh College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹14,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "sbsc"
    },
    {
        rank: 34,
        name: "Sacred Heart College",
        location: "Kochi, Kerala",
        entrance: "Merit/College Test",
        fees: "₹8,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Commerce, General",
        siteLink: "sacred-heart"
    },
    {
        rank: 35,
        name: "Ethiraj College for Women",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/College Test",
        fees: "₹22,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Commerce, General",
        siteLink: "ethiraj"
    },
    {
        rank: 36,
        name: "Sydenham College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹5,500",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "sydenham"
    },
    {
        rank: 38,
        name: "Keshav Mahavidyalaya",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹16,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "keshav"
    },
    {
        rank: 39,
        name: "Jai Hind College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹8,500",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, General",
        siteLink: "jai-hind"
    },
    {
        rank: 40,
        name: "Kamala Nehru College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.60 LPA",
        highestPlacement: "₹9.50 LPA",
        specialization: "Commerce, General",
        siteLink: "kamala-nehru"
    },
    {
        rank: 41,
        name: "Brihan Maharashtra College (BMCC)",
        location: "Pune, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹12,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "bmcc"
    },
    {
        rank: 42,
        name: "J.D. Birla Institute",
        location: "Kolkata, West Bengal",
        entrance: "Merit/Interview",
        fees: "₹1,10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, Finance",
        siteLink: "42"
    },
    {
        rank: 43,
        name: "Ness Wadia College of Commerce",
        location: "Pune, Maharashtra",
        entrance: "Merit/College Test",
        fees: "₹22,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Costing, Banking",
        siteLink: "43"
    },
    {
        rank: 44,
        name: "Guru Nanak College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Commerce, General",
        siteLink: "44"
    },
    {
        rank: 45,
        name: "Motilal Nehru College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹12,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "45"
    },
    {
        rank: 46,
        name: "Shivaji College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹18,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, Finance",
        siteLink: "46"
    },
    {
        rank: 47,
        name: "S.P. Jain School of Global Management",
        location: "Mumbai, Maharashtra",
        entrance: "SPJET / SAT",
        fees: "₹12,00,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹30.00 LPA",
        specialization: "Global Business",
        siteLink: "47"
    },
    {
        rank: 48,
        name: "PSGR Krishnammal College for Women",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Commerce, CA Aid",
        siteLink: "48"
    },
    {
        rank: 49,
        name: "Rajagiri College of Social Sciences",
        location: "Kochi, Kerala",
        entrance: "Merit/Interview",
        fees: "₹45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Finance & Taxation",
        siteLink: "49"
    },
    {
        rank: 50,
        name: "Dyal Singh College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹14,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        specialization: "Commerce, General",
        siteLink: "50"
    },
    {
        rank: 51,
        name: "Osmania University College for Women",
        location: "Hyderabad, Telangana",
        entrance: "Merit/TS DOST",
        fees: "₹25,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Commerce, Computers",
        siteLink: "51"
    },
    {
        rank: 52,
        name: "KC College (Kishinchand Chellaram)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Accounting, Finance",
        siteLink: "52"
    },
    {
        rank: 53,
        name: "Shri Shikshayatan College",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹42,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Marketing, Finance",
        siteLink: "53"
    },
    {
        rank: 54,
        name: "DG Vaishnav College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹22,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Corporate Secretaryship",
        siteLink: "54"
    },
    {
        rank: 55,
        name: "Badruka College of Commerce",
        location: "Hyderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹28,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Commerce, General",
        siteLink: "55"
    },
    {
        rank: 56,
        name: "Bhavan’s Vivekananda College",
        location: "Secunderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, Computers",
        siteLink: "56"
    },
    {
        rank: 57,
        name: "St. Francis College for Women",
        location: "Hyderabad, Telangana",
        entrance: "Merit/Interview",
        fees: "₹40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Intl. Business",
        siteLink: "57"
    },
    {
        rank: 58,
        name: "Goswami Ganesh Dutta S.D. College",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹26,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "58"
    },
    {
        rank: 59,
        name: "DAV College",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹25,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, Finance",
        siteLink: "59"
    },
    {
        rank: 60,
        name: "Acharya Narendra Dev College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.50 LPA",
        specialization: "Commerce, General",
        siteLink: "60"
    },
    {
        rank: 61,
        name: "Ramanujan College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹22,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹11.00 LPA",
        specialization: "Commerce, Marketing",
        siteLink: "61"
    },
    {
        rank: 62,
        name: "Lakshmibai College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "62"
    },
    {
        rank: 63,
        name: "College of Vocational Studies",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.50 LPA",
        specialization: "Vocational Commerce",
        siteLink: "63"
    },
    {
        rank: 64,
        name: "Satyawati College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹12,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "64"
    },
    {
        rank: 65,
        name: "Vivekananda Education Society (VES)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Commerce, Accounting",
        siteLink: "65"
    },
    {
        rank: 66,
        name: "Mulund College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Financial Markets",
        siteLink: "66"
    },
    {
        rank: 67,
        name: "B.K. Birla College",
        location: "Kalyan, Maharashtra",
        entrance: "Merit Based",
        fees: "₹20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Banking & Insurance",
        siteLink: "67"
    },
    {
        rank: 68,
        name: "Kelkar Trust's V.G. Vaze College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹18,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "68"
    },
    {
        rank: 69,
        name: "Mar Ivanios College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "Merit Based",
        fees: "₹10,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Commerce, Tourism",
        siteLink: "69"
    },
    {
        rank: 70,
        name: "St. Albert’s College",
        location: "Kochi, Kerala",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Taxation, Finance",
        siteLink: "70"
    },
    {
        rank: 71,
        name: "The Bhawanipur Education Society",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹48,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, Accounting",
        siteLink: "71"
    },
    {
        rank: 72,
        name: "Heramba Chandra College",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹10,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        specialization: "Commerce, General",
        siteLink: "72"
    },
    {
        rank: 73,
        name: "Nizam College",
        location: "Hyderabad, Telangana",
        entrance: "Merit/TS DOST",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "E-Commerce",
        siteLink: "73"
    },
    {
        rank: 74,
        name: "Loyola Academy",
        location: "Secunderabad, Telangana",
        entrance: "Loyola Entrance",
        fees: "₹38,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Strategic Finance",
        siteLink: "74"
    },
    {
        rank: 75,
        name: "Avinashilingam Institute",
        location: "Coimbatore, Tamil Nadu",
        entrance: "CUET / Merit",
        fees: "₹25,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Professional Accounting",
        siteLink: "75"
    },
    {
        rank: 76,
        name: "PSG College of Arts and Science",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Corporate Secretaryship",
        siteLink: "76"
    },
    {
        rank: 77,
        name: "Sri Krishna Arts and Science College",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, IT",
        siteLink: "77"
    },
    {
        rank: 78,
        name: "St. Aloysius College",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹30,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "78"
    },
    {
        rank: 79,
        name: "Maharani Lakshmi Ammanni College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹32,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Commerce, General",
        siteLink: "79"
    },
    {
        rank: 80,
        name: "Jyoti Nivas College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, Tourism",
        siteLink: "80"
    },
    {
        rank: 81,
        name: "Seshadripuram College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "81"
    },
    {
        rank: 82,
        name: "Jain University (CMS)",
        location: "Bengaluru, Karnataka",
        entrance: "JET",
        fees: "₹1,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹15.00 LPA",
        specialization: "Corporate BBA/BCom",
        siteLink: "82"
    },
    {
        rank: 83,
        name: "St. Mira’s College for Girls",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹30,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        specialization: "Commerce, General",
        siteLink: "83"
    },
    {
        rank: 84,
        name: "Modern College of Arts & Commerce",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹25,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Banking, Costing",
        siteLink: "84"
    },
    {
        rank: 85,
        name: "S.S. Jain Subodh P.G. College",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹22,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "E-Commerce",
        siteLink: "85"
    },
    {
        rank: 86,
        name: "International College for Girls (IIS)",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹65,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Prof. Accounting",
        siteLink: "86"
    },
    {
        rank: 87,
        name: "Kanoria PG Mahila Mahavidyalaya",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        specialization: "Commerce, General",
        siteLink: "87"
    },
    {
        rank: 88,
        name: "DAV College",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹22,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Commerce, General",
        siteLink: "88"
    },
    {
        rank: 89,
        name: "Lucknow Christian Degree College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        specialization: "Commerce, General",
        siteLink: "89"
    },
    {
        rank: 90,
        name: "National P.G. College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "LUACMAT",
        fees: "₹35,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Commerce, General",
        siteLink: "90"
    },
    {
        rank: 91,
        name: "Isabella Thoburn College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        specialization: "Commerce, General",
        siteLink: "91"
    },
    {
        rank: 92,
        name: "St. Xavier’s College",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        specialization: "Commerce, BPM",
        siteLink: "92"
    },
    {
        rank: 93,
        name: "H.L. College of Commerce",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Advanced Accounting",
        siteLink: "93"
    },
    {
        rank: 94,
        name: "Narayanaguru College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.50 LPA",
        specialization: "Banking & Insurance",
        siteLink: "94"
    },
    {
        rank: 95,
        name: "Thakur College of Science & Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹38,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        specialization: "Investment Mgmt",
        siteLink: "95"
    },
    {
        rank: 96,
        name: "S.I.E.S. College of Commerce",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹22,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "96"
    },
    {
        rank: 97,
        name: "Aryabhatta College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹16,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "97"
    },
    {
        rank: 98,
        name: "Kalindi College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹12,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "98"
    },
    {
        rank: 99,
        name: "Shyam Lal College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        specialization: "Commerce, General",
        siteLink: "99"
    },
    {
        rank: 100,
        name: "Zakir Husain Delhi College",
        location: "New Delhi, Delhi",
        entrance: "CUET",
        fees: "₹12,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        specialization: "Commerce, General",
        siteLink: "100"
    }
];

// Function to populate B.Com table
function populateBComTable() {
    const tbody = document.getElementById('bcomCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bcomColleges.forEach(college => {
        const row = document.createElement('tr');
        
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
            <td style="font-size: 13px; color: #4b5563;">${college.specialization}</td>
            <td style="text-align: center;">
                <a href="college-site.html?id=BCom-${college.rank}" class="site-btn">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ B.Com Colleges table populated with', bcomColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBComTable();
});