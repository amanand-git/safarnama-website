// ============================================
// BCA COLLEGES DATA (Top 150)
// ============================================

const bcaColleges = [
    {
        rank: 1,
        name: "Christ University",
        location: "Bengaluru, Karnataka",
        entrance: "CUET",
        fees: "₹5,80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹21.00 LPA",
        type: "Private",
        siteLink: "christ-bca"
    },
    {
        rank: 2,
        name: "Symbiosis Institute (SICSR)",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹5,20,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹21.00 LPA",
        type: "Private",
        siteLink: "sicsr"
    },
    {
        rank: 3,
        name: "Loyola College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit/Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "loyola-bca"
    },
    {
        rank: 4,
        name: "Maharaja Surajmal Institute (MSI)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,60,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "msi-delhi"
    },
    {
        rank: 5,
        name: "Kristu Jayanti College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Interview",
        fees: "₹2,70,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "kristu-jayanti"
    },
    {
        rank: 6,
        name: "St. Joseph's University",
        location: "Bengaluru, Karnataka",
        entrance: "SJU Entrance",
        fees: "₹3,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "sju-blr"
    },
    {
        rank: 7,
        name: "Madras Christian College (MCC)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mcc-chennai"
    },
    {
        rank: 8,
        name: "VIPS (Vivekananda Institute)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,85,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "vips-delhi"
    },
    {
        rank: 9,
        name: "Stella Maris College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,95,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "stella-maris"
    },
    {
        rank: 10,
        name: "Women's Christian College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹2,30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "wcc-chennai"
    },
    {
        rank: 11,
        name: "JIMS Rohini",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹3,10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "jims-rohini"
    },
    {
        rank: 12,
        name: "SRM Institute (SRMIST)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "srm-bca"
    },
    {
        rank: 13,
        name: "Vellore Institute of Tech (VIT)",
        location: "Vellore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,70,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "vit-bca"
    },
    {
        rank: 14,
        name: "Presidency College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,30,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "presidency-blr"
    },
    {
        rank: 15,
        name: "Mount Carmel College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Test",
        fees: "₹2,80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "mcc-blr"
    },
    {
        rank: 16,
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "amity-noida"
    },
    {
        rank: 17,
        name: "St. Xavier's College",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "xaviers-ahd"
    },
    {
        rank: 18,
        name: "IIMT (GGSIPU)",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "iimt-delhi"
    },
    {
        rank: 19,
        name: "MS Ramaiah College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ms-ramaiah"
    },
    {
        rank: 20,
        name: "St. Xavier's College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "xaviers-mum"
    },
    {
        rank: 21,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹4,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "lpu-bca"
    },
    {
        rank: 22,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹4,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Private",
        siteLink: "cu-bca"
    },
    {
        rank: 23,
        name: "IMS Noida",
        location: "Noida, Uttar Pradesh",
        entrance: "JET",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "ims-noida"
    },
    {
        rank: 24,
        name: "JIMS Vasant Kunj",
        location: "New Delhi, Delhi",
        entrance: "IPU CET",
        fees: "₹2,90,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "jims-vk"
    },
    {
        rank: 25,
        name: "Dav College",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "dav-chd"
    },
    {
        rank: 26,
        name: "KLE Society's Degree College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kle-bca"
    },
    {
        rank: 27,
        name: "Goswami Ganesh Dutta S.D.",
        location: "Chandigarh",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ggsd-chd"
    },
    {
        rank: 28,
        name: "Xavier's Institute (XICA)",
        location: "Ahmedabad, Gujarat",
        entrance: "Entrance Test",
        fees: "₹1,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "xica"
    },
    {
        rank: 29,
        name: "GLS Institute of Computer App",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "gls-bca"
    },
    {
        rank: 30,
        name: "Asian School of Business",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹4,45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "asb-noida"
    },
    {
        rank: 31,
        name: "Jaipur National University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "jnu-jaipur"
    },
    {
        rank: 32,
        name: "Manipal University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹4,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Private",
        siteLink: "muj-bca"
    },
    {
        rank: 33,
        name: "Birla Institute (BIT Mesra)",
        location: "Ranchi, Jharkhand",
        entrance: "Merit Based",
        fees: "₹6,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "bit-mesra"
    },
    {
        rank: 34,
        name: "Poornima University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "poornima"
    },
    {
        rank: 35,
        name: "JECRC University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "jecrc"
    },
    {
        rank: 36,
        name: "Vivekananda Global Univ",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "vgu"
    },
    {
        rank: 37,
        name: "Apex University",
        location: "Jaipur, Rajasthan",
        entrance: "ACET",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "apex"
    },
    {
        rank: 38,
        name: "Suresh Gyan Vihar Univ",
        location: "Jaipur, Rajasthan",
        entrance: "SGVUEE",
        fees: "₹3,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sgvu"
    },
    {
        rank: 39,
        name: "NIMS University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "nims"
    },
    {
        rank: 40,
        name: "The Oxford College of Science",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "oxford-science"
    },
    {
        rank: 41,
        name: "Tula's Institute",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "tulas"
    },
    {
        rank: 42,
        name: "Graphic Era Hill University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "graphic-era"
    },
    {
        rank: 43,
        name: "Uttaranchal University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "uu-bca"
    },
    {
        rank: 44,
        name: "DIT University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "dit"
    },
    {
        rank: 45,
        name: "Dev Bhoomi Uttarakhand Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "dbuu"
    },
    {
        rank: 46,
        name: "Quantum University",
        location: "Roorkee, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "quantum"
    },
    {
        rank: 47,
        name: "Teerthanker Mahaveer Univ",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "tmu"
    },
    {
        rank: 48,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "invertis"
    },
    {
        rank: 49,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "IUET",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "integral"
    },
    {
        rank: 50,
        name: "Babu Banarasi Das Univ",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "bbdu"
    },
    {
        rank: 51,
        name: "Amity University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-lko"
    },
    {
        rank: 52,
        name: "Sharda University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "sharda"
    },
    {
        rank: 53,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "galgotias"
    },
    {
        rank: 54,
        name: "Noida International Univ",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "niu"
    },
    {
        rank: 55,
        name: "Mangalmay Institute",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mangalmay"
    },
    {
        rank: 56,
        name: "IIMT Group of Colleges",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "iimt-gn"
    },
    {
        rank: 57,
        name: "GL Bajaj Institute",
        location: "Mathura, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "gl-bajaj"
    },
    {
        rank: 58,
        name: "Sanskriti University",
        location: "Mathura, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "sanskriti"
    },
    {
        rank: 59,
        name: "Maharishi Markandeshwar",
        location: "Ambala, Haryana",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mm-ambala"
    },
    {
        rank: 60,
        name: "Manav Rachna International",
        location: "Faridabad, Haryana",
        entrance: "MRNAT",
        fees: "₹5,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "manav-rachna"
    },
    {
        rank: 61,
        name: "Lingaya's Vidyapeeth",
        location: "Faridabad, Haryana",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "lingayas"
    },
    {
        rank: 62,
        name: "SGT University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sgt"
    },
    {
        rank: 63,
        name: "NorthCap University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "ncu"
    },
    {
        rank: 64,
        name: "KR Mangalam University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "krm"
    },
    {
        rank: 65,
        name: "GD Goenka University",
        location: "Gurugram, Haryana",
        entrance: "GATA",
        fees: "₹4,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "gd-goenka"
    },
    {
        rank: 66,
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
        rank: 67,
        name: "Geeta University",
        location: "Panipat, Haryana",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "geeta"
    },
    {
        rank: 68,
        name: "Om Sterling Global Univ",
        location: "Hisar, Haryana",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "osgu"
    },
    {
        rank: 69,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "parul"
    },
    {
        rank: 70,
        name: "Navrachana University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "navrachana"
    },
    {
        rank: 71,
        name: "ITM Vocational University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "itm-vadodara"
    },
    {
        rank: 72,
        name: "Ganpat University",
        location: "Mehsana, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "ganpat"
    },
    {
        rank: 73,
        name: "Indus University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "indus"
    },
    {
        rank: 74,
        name: "Silver Oak University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "silver-oak"
    },
    {
        rank: 75,
        name: "Marwadi University",
        location: "Rajkot, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "marwadi"
    },
    {
        rank: 76,
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
        rank: 77,
        name: "Sage University",
        location: "Indore, Madhya Pradesh",
        entrance: "SEE",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "sage"
    },
    {
        rank: 78,
        name: "Medi-Caps University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "medicaps"
    },
    {
        rank: 79,
        name: "Renaissance University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "renaissance"
    },
    {
        rank: 80,
        name: "Oriental University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "oriental"
    },
    {
        rank: 81,
        name: "Malwanchal University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "malwanchal"
    },
    {
        rank: 82,
        name: "Jagran Lakecity University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "JLUET",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jlu"
    },
    {
        rank: 83,
        name: "LNCT University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "lnct"
    },
    {
        rank: 84,
        name: "RKDF University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "rkdf"
    },
    {
        rank: 85,
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
        rank: 86,
        name: "Amity University",
        location: "Gwalior, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "amity-gwalior"
    },
    {
        rank: 87,
        name: "Assam Down Town Univ",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "adtu"
    },
    {
        rank: 88,
        name: "Kaziranga University",
        location: "Jorhat, Assam",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "kaziranga"
    },
    {
        rank: 89,
        name: "Royal Global University",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "rgu"
    },
    {
        rank: 90,
        name: "ICFAI University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "icfai-ddn"
    },
    {
        rank: 91,
        name: "Sikkim Manipal University",
        location: "Gangtok, Sikkim",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "smu"
    },
    {
        rank: 92,
        name: "Swami Rama Himalayan Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "srhu"
    },
    {
        rank: 93,
        name: "Rayat Bahra University",
        location: "Mohali, Punjab",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rayat-bahra"
    },
    {
        rank: 94,
        name: "CT University",
        location: "Ludhiana, Punjab",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "ct-univ"
    },
    {
        rank: 95,
        name: "GNA University",
        location: "Phagwara, Punjab",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "gna"
    },
    {
        rank: 96,
        name: "Adesh University",
        location: "Bathinda, Punjab",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "adesh"
    },
    {
        rank: 97,
        name: "Guru Kashi University",
        location: "Bathinda, Punjab",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹2.50 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "gku"
    },
    {
        rank: 98,
        name: "Sant Baba Bhag Singh Univ",
        location: "Jalandhar, Punjab",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹2.50 LPA",
        highestPlacement: "₹4.50 LPA",
        type: "Private",
        siteLink: "sbbsu"
    },
    {
        rank: 99,
        name: "DAV University",
        location: "Jalandhar, Punjab",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "dav-univ"
    },
    {
        rank: 100,
        name: "RIMT University",
        location: "Gobindgarh, Punjab",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "rimt"
    },
    {
        rank: 101,
        name: "Nizam College",
        location: "Hyderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Govt",
        siteLink: "nizam-college"
    },
    {
        rank: 102,
        name: "St. Francis College",
        location: "Hyderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "st-francis"
    },
    {
        rank: 103,
        name: "Bhavan's Vivekananda",
        location: "Secunderabad, Telangana",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "bhavans"
    },
    {
        rank: 104,
        name: "Loyola Academy",
        location: "Secunderabad, Telangana",
        entrance: "Entrance Test",
        fees: "₹1,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "loyola-academy"
    },
    {
        rank: 105,
        name: "Ethiraj College for Women",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ethiraj"
    },
    {
        rank: 106,
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
        rank: 107,
        name: "Guru Nanak College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "guru-nanak"
    },
    {
        rank: 108,
        name: "Patna Women's College",
        location: "Patna, Bihar",
        entrance: "Entrance Test",
        fees: "₹1,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "pwc"
    },
    {
        rank: 109,
        name: "Arcade Business College",
        location: "Patna, Bihar",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "abc-patna"
    },
    {
        rank: 110,
        name: "CIMAGE College",
        location: "Patna, Bihar",
        entrance: "Entrance Test",
        fees: "₹1,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "cimage"
    },
    {
        rank: 111,
        name: "St. Xavier's College",
        location: "Ranchi, Jharkhand",
        entrance: "Entrance Test",
        fees: "₹1,60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "xaviers-ranchi"
    },
    {
        rank: 112,
        name: "Gossner College",
        location: "Ranchi, Jharkhand",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹2.50 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "gossner"
    },
    {
        rank: 113,
        name: "Marwari College",
        location: "Ranchi, Jharkhand",
        entrance: "Merit Based",
        fees: "₹70,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Govt",
        siteLink: "marwari"
    },
    {
        rank: 114,
        name: "Dr. Shyama Prasad Mukherjee Univ",
        location: "Ranchi, Jharkhand",
        entrance: "Merit Based",
        fees: "₹60,000",
        avgPlacement: "₹2.50 LPA",
        highestPlacement: "₹4.50 LPA",
        type: "Govt",
        siteLink: "dspmu"
    },
    {
        rank: 115,
        name: "Techno India University",
        location: "Kolkata, West Bengal",
        entrance: "Entrance Test",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "techno-india"
    },
    {
        rank: 116,
        name: "Institute of Engg & Mgmt (IEM)",
        location: "Kolkata, West Bengal",
        entrance: "CET",
        fees: "₹3,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "iem-kolkata"
    },
    {
        rank: 117,
        name: "George College",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "george-college"
    },
    {
        rank: 118,
        name: "Heritage Academy",
        location: "Kolkata, West Bengal",
        entrance: "CET",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "heritage"
    },
    {
        rank: 119,
        name: "NSHM Knowledge Campus",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "nshm"
    },
    {
        rank: 120,
        name: "Adamas University",
        location: "Kolkata, West Bengal",
        entrance: "AUAT",
        fees: "₹3,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "adamas"
    },
    {
        rank: 121,
        name: "Brainware University",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "brainware"
    },
    {
        rank: 122,
        name: "JIS University",
        location: "Kolkata, West Bengal",
        entrance: "JISUEE",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "jis-univ"
    },
    {
        rank: 123,
        name: "Swami Vivekananda University",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "svu-kolkata"
    },
    {
        rank: 124,
        name: "Sister Nivedita University",
        location: "Kolkata, West Bengal",
        entrance: "SNUET",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "snu-kolkata"
    },
    {
        rank: 125,
        name: "Tilak Maharashtra Vidyapeeth",
        location: "Pune, Maharashtra",
        entrance: "Entrance Test",
        fees: "₹1,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "tmv-pune"
    },
    {
        rank: 126,
        name: "Ness Wadia College",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "ness-wadia"
    },
    {
        rank: 127,
        name: "Modern College (Ganeshkhind)",
        location: "Pune, Maharashtra",
        entrance: "Entrance Test",
        fees: "₹1,60,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "modern-college"
    },
    {
        rank: 128,
        name: "Indira College of Commerce",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "indira-college"
    },
    {
        rank: 129,
        name: "MIT-WPU",
        location: "Pune, Maharashtra",
        entrance: "MIT-WPU CET",
        fees: "₹4,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "mit-wpu"
    },
    {
        rank: 130,
        name: "DY Patil International Univ",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "dypiu"
    },
    {
        rank: 131,
        name: "Vishwakarma University",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "vu-pune"
    },
    {
        rank: 132,
        name: "ASM's College of Commerce",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "asm-college"
    },
    {
        rank: 133,
        name: "Suryadatta College",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "suryadatta"
    },
    {
        rank: 134,
        name: "PCCOE Pune",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "pccoe"
    },
    {
        rank: 135,
        name: "Thakur College of Science",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "thakur-college"
    },
    {
        rank: 136,
        name: "Kishinchand Chellaram (KC)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "kc-college"
    },
    {
        rank: 137,
        name: "Jai Hind College",
        location: "Mumbai, Maharashtra",
        entrance: "Entrance Exam",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "jai-hind"
    },
    {
        rank: 138,
        name: "Sophia College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sophia"
    },
    {
        rank: 139,
        name: "SIES College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sies"
    },
    {
        rank: 140,
        name: "Somaiya Vidyavihar",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "somaiya"
    },
    {
        rank: 141,
        name: "Nagindas Khandwala College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,30,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "nk-college"
    },
    {
        rank: 142,
        name: "Usha Pravin Gandhi College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "upg-college"
    },
    {
        rank: 143,
        name: "Wilson College",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "wilson"
    },
    {
        rank: 144,
        name: "B.K. Birla College",
        location: "Kalyan, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "bk-birla"
    },
    {
        rank: 145,
        name: "St. Aloysius College",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "st-aloysius"
    },
    {
        rank: 146,
        name: "SDM College",
        location: "Ujire, Karnataka",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "sdm-ujire"
    },
    {
        rank: 147,
        name: "Alva's College",
        location: "Moodbidri, Karnataka",
        entrance: "Merit Based",
        fees: "₹1,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "alvas"
    },
    {
        rank: 148,
        name: "Yenepoya University",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "yenepoya"
    },
    {
        rank: 149,
        name: "Nitte University",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "nitte"
    },
    {
        rank: 150,
        name: "Srinivas University",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "srinivas"
    }
];

// Function to populate BCA table
function populateBCATable() {
    const tbody = document.getElementById('bcaCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bcaColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#3b82f6' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#eff6ff' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #3b82f6; color: #1d4ed8; background: #eff6ff;">${college.rank}</div>
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
                <a href="college-site.html?id=BCA-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ BCA Colleges table populated with', bcaColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBCATable();
});