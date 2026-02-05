// ============================================
// B.PHARMA COLLEGES DATA (Top 50)
// ============================================

const bpharmaColleges = [
    {
        rank: 1,
        name: "Jamia Hamdard",
        location: "New Delhi, Delhi",
        entrance: "NEET / JEE",
        fees: "₹5,80,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Deemed Govt",
        siteLink: "jamia-hamdard"
    },
    {
        rank: 2,
        name: "Panjab University",
        location: "Chandigarh",
        entrance: "PU-CET",
        fees: "₹60,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "pu-pharmacy"
    },
    {
        rank: 3,
        name: "BITS Pilani",
        location: "Pilani, Rajasthan",
        entrance: "BITSAT",
        fees: "₹19,50,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹28.00 LPA",
        type: "Private",
        siteLink: "bits-pilani"
    },
    {
        rank: 4,
        name: "Institute of Chemical Technology (ICT)",
        location: "Mumbai, Maharashtra",
        entrance: "MHT-CET / JEE",
        fees: "₹3,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "ict-mumbai"
    },
    {
        rank: 5,
        name: "JSS College of Pharmacy",
        location: "Ooty, Tamil Nadu",
        entrance: "JSS Entrance",
        fees: "₹8,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "jss-ooty"
    },
    {
        rank: 6,
        name: "Manipal College of Pharm. Sciences",
        location: "Manipal, Karnataka",
        entrance: "MET",
        fees: "₹12,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "manipal-pharma"
    },
    {
        rank: 7,
        name: "JSS College of Pharmacy",
        location: "Mysuru, Karnataka",
        entrance: "JSS Entrance",
        fees: "₹8,50,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "jss-mysore"
    },
    {
        rank: 8,
        name: "Annamalai University",
        location: "Chidambaram, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "annamalai"
    },
    {
        rank: 9,
        name: "Amrita School of Pharmacy",
        location: "Kochi, Kerala",
        entrance: "Amrita Entrance",
        fees: "₹4,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "amrita-pharma"
    },
    {
        rank: 10,
        name: "SRM College of Pharmacy",
        location: "Chennai, Tamil Nadu",
        entrance: "SRMJEEE",
        fees: "₹7,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "srm-pharma"
    },
    {
        rank: 11,
        name: "SVKM's NMIMS (SPPSPTM)",
        location: "Mumbai, Maharashtra",
        entrance: "NMIMS-CET",
        fees: "₹11,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Private",
        siteLink: "nmims-pharma"
    },
    {
        rank: 12,
        name: "Poona College of Pharmacy",
        location: "Pune, Maharashtra",
        entrance: "BVP CET",
        fees: "₹4,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "poona-pharma"
    },
    {
        rank: 13,
        name: "Nirma University",
        location: "Ahmedabad, Gujarat",
        entrance: "GUJCET / JEE",
        fees: "₹8,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "nirma-pharma"
    },
    {
        rank: 14,
        name: "Bombay College of Pharmacy",
        location: "Mumbai, Maharashtra",
        entrance: "MHT-CET",
        fees: "₹1,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private (Aided)",
        siteLink: "bcp-mumbai"
    },
    {
        rank: 15,
        name: "Delhi Institute (DIPSAR)",
        location: "New Delhi, Delhi",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "dipsar"
    },
    {
        rank: 16,
        name: "Birla Institute of Technology (Mesra)",
        location: "Ranchi, Jharkhand",
        entrance: "JEE Main / NEET",
        fees: "₹10,50,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "Private",
        siteLink: "bit-mesra"
    },
    {
        rank: 17,
        name: "L.M. College of Pharmacy",
        location: "Ahmedabad, Gujarat",
        entrance: "GUJCET",
        fees: "₹40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt Aided",
        siteLink: "lmcp"
    },
    {
        rank: 18,
        name: "KLE College of Pharmacy",
        location: "Belagavi, Karnataka",
        entrance: "KCET",
        fees: "₹4,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "kle-pharma"
    },
    {
        rank: 19,
        name: "Chitkara College of Pharmacy",
        location: "Rajpura, Punjab",
        entrance: "Merit Based",
        fees: "₹6,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "chitkara-pharma"
    },
    {
        rank: 20,
        name: "Maharaja Sayajirao Univ (MSU)",
        location: "Vadodara, Gujarat",
        entrance: "GUJCET",
        fees: "₹30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "msu-baroda"
    },
    {
        rank: 21,
        name: "Sri Ramachandra Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "Entrance Test",
        fees: "₹5,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sriher-pharma"
    },
    {
        rank: 22,
        name: "Lovely Professional Univ (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹6,40,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "lpu-pharma"
    },
    {
        rank: 23,
        name: "Amity Institute of Pharmacy",
        location: "Noida, Uttar Pradesh",
        entrance: "Amity Test",
        fees: "₹8,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-pharma"
    },
    {
        rank: 24,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹6,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "cu-pharma"
    },
    {
        rank: 25,
        name: "ISF College of Pharmacy",
        location: "Moga, Punjab",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "isfcp"
    },
    {
        rank: 26,
        name: "Vels Institute (VISTAS)",
        location: "Chennai, Tamil Nadu",
        entrance: "VEE",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "vels-pharma"
    },
    {
        rank: 27,
        name: "Nitte Gulabi Shetty",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "nitte-pharma"
    },
    {
        rank: 28,
        name: "PSG College of Pharmacy",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "psg-pharma"
    },
    {
        rank: 29,
        name: "UPES School of Health Sciences",
        location: "Dehradun, Uttarakhand",
        entrance: "UPES PAT",
        fees: "₹7,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "upes-pharma"
    },
    {
        rank: 30,
        name: "Dibrugarh University",
        location: "Dibrugarh, Assam",
        entrance: "Entrance Test",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "dibrugarh-pharma"
    },
    {
        rank: 31,
        name: "Guru Ghasidas Vishwavidyalaya",
        location: "Bilaspur, Chhattisgarh",
        entrance: "CUET",
        fees: "₹1,10,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Central Govt",
        siteLink: "ggv-pharma"
    },
    {
        rank: 32,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "IUET",
        fees: "₹5,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "integral-pharma"
    },
    {
        rank: 33,
        name: "Graphic Era Hill University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "graphic-era-pharma"
    },
    {
        rank: 34,
        name: "Shoolini University",
        location: "Solan, Himachal Pradesh",
        entrance: "SU SAT",
        fees: "₹5,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "shoolini-pharma"
    },
    {
        rank: 35,
        name: "GLA University",
        location: "Mathura, Uttar Pradesh",
        entrance: "GLAET",
        fees: "₹5,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gla-pharma"
    },
    {
        rank: 36,
        name: "Banasthali Vidyapith",
        location: "Banasthali, Rajasthan",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "banasthali-pharma"
    },
    {
        rank: 37,
        name: "Kurukshetra University",
        location: "Kurukshetra, Haryana",
        entrance: "Entrance Exam",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "kuk-pharma"
    },
    {
        rank: 38,
        name: "Maharshi Dayanand University",
        location: "Rohtak, Haryana",
        entrance: "Entrance Exam",
        fees: "₹1,60,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "mdu-pharma"
    },
    {
        rank: 39,
        name: "Punjabi University",
        location: "Patiala, Punjab",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "punjabi-univ"
    },
    {
        rank: 40,
        name: "SGT University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹6,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sgt-pharma"
    },
    {
        rank: 41,
        name: "Teerthanker Mahaveer Univ",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "tmu-pharma"
    },
    {
        rank: 42,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "parul-pharma"
    },
    {
        rank: 43,
        name: "Goa College of Pharmacy",
        location: "Panaji, Goa",
        entrance: "GCET",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "goa-pharma"
    },
    {
        rank: 44,
        name: "Al-Ameen College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "KCET",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "al-ameen"
    },
    {
        rank: 45,
        name: "KLE University College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kle-bangalore"
    },
    {
        rank: 46,
        name: "Y.B. Chavan College of Pharmacy",
        location: "Aurangabad, Maharashtra",
        entrance: "MHT-CET",
        fees: "₹3,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "yb-chavan"
    },
    {
        rank: 47,
        name: "RC Patel Institute",
        location: "Shirpur, Maharashtra",
        entrance: "MHT-CET",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "rc-patel"
    },
    {
        rank: 48,
        name: "Sinhgad College of Pharmacy",
        location: "Pune, Maharashtra",
        entrance: "MHT-CET",
        fees: "₹4,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sinhgad"
    },
    {
        rank: 49,
        name: "Dr. D.Y. Patil Institute",
        location: "Pune, Maharashtra",
        entrance: "MHT-CET",
        fees: "₹5,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "dpu-pharma"
    },
    {
        rank: 50,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE",
        fees: "₹5,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "galgotias-pharma"
    },
    // --- Added Rank 51-100 ---
    {
        rank: 51,
        name: "Acharya & BM Reddy College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "KCET / Merit",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "acharya-pharma"
    },
    {
        rank: 52,
        name: "Sri Adichunchanagiri College",
        location: "Mandya, Karnataka",
        entrance: "KCET",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sacp"
    },
    {
        rank: 53,
        name: "NGSM Institute of Pharm. Sciences",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "ngsm-pharma"
    },
    {
        rank: 54,
        name: "Krupanidhi College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "krupanidhi"
    },
    {
        rank: 55,
        name: "The Oxford College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "KCET",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "oxford-pharma"
    },
    {
        rank: 56,
        name: "East West College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "KCET",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "east-west-pharma"
    },
    {
        rank: 57,
        name: "PES College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "PESSAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "pes-pharma"
    },
    {
        rank: 58,
        name: "Dayananda Sagar College of Pharmacy",
        location: "Bengaluru, Karnataka",
        entrance: "DSAT",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "dsc-pharma"
    },
    {
        rank: 59,
        name: "M.S. Ramaiah Univ of Applied Sciences",
        location: "Bengaluru, Karnataka",
        entrance: "RUAS AT",
        fees: "₹6,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "msr-pharma"
    },
    {
        rank: 60,
        name: "C.L. Baid Metha College",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "cl-baid"
    },
    {
        rank: 61,
        name: "KMCH College of Pharmacy",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kmch-pharma"
    },
    {
        rank: 62,
        name: "Swamy Vivekanandha College",
        location: "Namakkal, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "swamy-vivekanandha"
    },
    {
        rank: 63,
        name: "RVS College of Pharmaceutical Sciences",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rvs-pharma"
    },
    {
        rank: 64,
        name: "Nandha College of Pharmacy",
        location: "Erode, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "nandha-pharma"
    },
    {
        rank: 65,
        name: "G. Pulla Reddy College of Pharmacy",
        location: "Hyderabad, Telangana",
        entrance: "TS EAMCET",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "gprcp"
    },
    {
        rank: 66,
        name: "Sultan-Ul-Uloom College",
        location: "Hyderabad, Telangana",
        entrance: "TS EAMCET",
        fees: "₹3,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "sultan-ul-uloom"
    },
    {
        rank: 67,
        name: "Malla Reddy College of Pharmacy",
        location: "Hyderabad, Telangana",
        entrance: "TS EAMCET",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "malla-reddy-pharma"
    },
    {
        rank: 68,
        name: "Anurag University",
        location: "Hyderabad, Telangana",
        entrance: "Anurag CET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "anurag-pharma"
    },
    {
        rank: 69,
        name: "Vikas Institute of Pharmaceutical",
        location: "Rajahmundry, Andhra Pradesh",
        entrance: "AP EAMCET",
        fees: "₹2,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "vikas-pharma"
    },
    {
        rank: 70,
        name: "Shri Vishnu College of Pharmacy",
        location: "Bhimavaram, Andhra Pradesh",
        entrance: "AP EAMCET",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "shri-vishnu"
    },
    {
        rank: 71,
        name: "Roland Institute of Pharm. Sciences",
        location: "Berhampur, Odisha",
        entrance: "OJEE / NEET",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "roland-pharma"
    },
    {
        rank: 72,
        name: "Dadhichi College of Pharmacy",
        location: "Cuttack, Odisha",
        entrance: "OJEE",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "dadhichi"
    },
    {
        rank: 73,
        name: "Gayatri College of Pharmacy",
        location: "Sambalpur, Odisha",
        entrance: "OJEE",
        fees: "₹2,60,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "gayatri-pharma"
    },
    {
        rank: 74,
        name: "Centurion University",
        location: "Paralakhemundi, Odisha",
        entrance: "CUEE",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "centurion-pharma"
    },
    {
        rank: 75,
        name: "Indira Gandhi Institute of Pharm. Sciences",
        location: "Bhubaneswar, Odisha",
        entrance: "OJEE",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "igips"
    },
    {
        rank: 76,
        name: "Guru Nanak Institute of Pharm. Science",
        location: "Kolkata, West Bengal",
        entrance: "WBJEE",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gnipst"
    },
    {
        rank: 77,
        name: "NSHM Knowledge Campus",
        location: "Kolkata, West Bengal",
        entrance: "WBJEE / JEE Main",
        fees: "₹4,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "nshm-pharma"
    },
    {
        rank: 78,
        name: "Bengal School of Technology",
        location: "Hooghly, West Bengal",
        entrance: "WBJEE",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "bst-pharma"
    },
    {
        rank: 79,
        name: "Gupta College of Technological Sciences",
        location: "Asansol, West Bengal",
        entrance: "WBJEE",
        fees: "₹3,60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "gcts-asansol"
    },
    {
        rank: 80,
        name: "Dr. B.C. Roy College of Pharmacy",
        location: "Durgapur, West Bengal",
        entrance: "WBJEE",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "bcrec-pharma"
    },
    {
        rank: 81,
        name: "Adamas University",
        location: "Kolkata, West Bengal",
        entrance: "AUAT",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "adamas-pharma"
    },
    {
        rank: 82,
        name: "JIS University",
        location: "Kolkata, West Bengal",
        entrance: "JISUEE",
        fees: "₹4,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "jis-pharma"
    },
    {
        rank: 83,
        name: "Brainware University",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "brainware-pharma"
    },
    {
        rank: 84,
        name: "Sister Nivedita University",
        location: "Kolkata, West Bengal",
        entrance: "SNUET",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "snu-pharma"
    },
    {
        rank: 85,
        name: "Techno India University",
        location: "Kolkata, West Bengal",
        entrance: "TNJEE",
        fees: "₹5,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "techno-pharma"
    },
    {
        rank: 86,
        name: "Assam Down Town University",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "adtu-pharma"
    },
    {
        rank: 87,
        name: "Girijananda Chowdhury Institute",
        location: "Guwahati, Assam",
        entrance: "CEE / Merit",
        fees: "₹3,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "gips-guwahati"
    },
    {
        rank: 88,
        name: "Himalayan Pharmacy Institute",
        location: "Majhitar, Sikkim",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "hpi-sikkim"
    },
    {
        rank: 89,
        name: "Columbia Institute of Pharmacy",
        location: "Raipur, Chhattisgarh",
        entrance: "PPHT",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "columbia-pharma"
    },
    {
        rank: 90,
        name: "Rungta College of Pharm. Sciences",
        location: "Bhilai, Chhattisgarh",
        entrance: "PPHT",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "rungta-pharma"
    },
    {
        rank: 91,
        name: "KIET Group of Institutions",
        location: "Ghaziabad, Uttar Pradesh",
        entrance: "UPSEE",
        fees: "₹5,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kiet-pharma"
    },
    {
        rank: 92,
        name: "Lloyd Institute of Mgmt & Tech",
        location: "Greater Noida, UP",
        entrance: "Merit Based",
        fees: "₹4,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "lloyd-pharma"
    },
    {
        rank: 93,
        name: "Pranveer Singh Institute (PSIT)",
        location: "Kanpur, Uttar Pradesh",
        entrance: "UPSEE",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "psit-pharma"
    },
    {
        rank: 94,
        name: "Meerut Institute of Engg (MIET)",
        location: "Meerut, Uttar Pradesh",
        entrance: "UPSEE",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "miet-pharma"
    },
    {
        rank: 95,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "invertis-pharma"
    },
    {
        rank: 96,
        name: "GLA University",
        location: "Mathura, Uttar Pradesh",
        entrance: "GLAET",
        fees: "₹5,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "gla-pharma"
    },
    {
        rank: 97,
        name: "IFTM University",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "iftm-pharma"
    },
    {
        rank: 98,
        name: "Shri Ramswaroop Memorial Univ",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "srmu-pharma"
    },
    {
        rank: 99,
        name: "Hygia Institute of Pharm. Education",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "hygia-pharma"
    },
    {
        rank: 100,
        name: "Rameshwaram Institute of Tech",
        location: "Lucknow, Uttar Pradesh",
        entrance: "UPSEE",
        fees: "₹3,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "ritm-pharma"
    }
];

// Function to populate B.Pharma table
function populateBPharmaTable() {
    const tbody = document.getElementById('bpharmaCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bpharmaColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = (college.type === 'Govt' || college.type === 'Deemed Govt' || college.type === 'Central Govt' || college.type === 'Govt Aided') ? '#14b8a6' : '#d97706';
        const typeBgColor = (college.type === 'Govt' || college.type === 'Deemed Govt' || college.type === 'Central Govt' || college.type === 'Govt Aided') ? '#f0fdfa' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #14b8a6; color: #0f766e; background: #ccfbf1;">${college.rank}</div>
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
                <a href="college-site.html?id=BPharma-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #14b8a6 0%, #0d9488 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ B.Pharma Colleges table populated with', bpharmaColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBPharmaTable();
});