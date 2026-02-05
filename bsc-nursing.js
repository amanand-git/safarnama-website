// ============================================
// BSC NURSING COLLEGES DATA (Top 100)
// ============================================

const nursingColleges = [
    {
        rank: 1,
        name: "AIIMS New Delhi",
        location: "New Delhi, Delhi",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "aiims-delhi"
    },
    {
        rank: 2,
        name: "CMC Vellore",
        location: "Vellore, Tamil Nadu",
        entrance: "CMC Entrance",
        fees: "₹1,40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "cmc-vellore"
    },
    {
        rank: 3,
        name: "PGIMER Chandigarh",
        location: "Chandigarh",
        entrance: "PGIMER Entrance",
        fees: "₹25,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "pgimer"
    },
    {
        rank: 4,
        name: "JIPMER Puducherry",
        location: "Puducherry",
        entrance: "NEET UG",
        fees: "₹15,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "jipmer"
    },
    {
        rank: 5,
        name: "Manipal College of Nursing",
        location: "Manipal, Karnataka",
        entrance: "MET",
        fees: "₹5,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "manipal-nursing"
    },
    {
        rank: 6,
        name: "College of Nursing, BHU",
        location: "Varanasi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹40,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "bhu-nursing"
    },
    {
        rank: 7,
        name: "Amrita College of Nursing",
        location: "Kochi, Kerala",
        entrance: "Amrita Entrance",
        fees: "₹4,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "amrita-nursing"
    },
    {
        rank: 8,
        name: "St. John's College of Nursing",
        location: "Bengaluru, Karnataka",
        entrance: "KCET / Interview",
        fees: "₹3,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "st-johns"
    },
    {
        rank: 9,
        name: "Sri Ramachandra Institute",
        location: "Chennai, Tamil Nadu",
        entrance: "Entrance Exam",
        fees: "₹5,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sriher-nursing"
    },
    {
        rank: 10,
        name: "College of Nursing, CMC Ludhiana",
        location: "Ludhiana, Punjab",
        entrance: "Entrance Test",
        fees: "₹3,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "cmc-ludhiana"
    },
    {
        rank: 11,
        name: "AIIMS Jodhpur",
        location: "Jodhpur, Rajasthan",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "aiims-jodhpur"
    },
    {
        rank: 12,
        name: "AIIMS Bhubaneswar",
        location: "Bhubaneswar, Odisha",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹7.80 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "aiims-bbsr"
    },
    {
        rank: 13,
        name: "Siksha 'O' Anusandhan",
        location: "Bhubaneswar, Odisha",
        entrance: "SAAT",
        fees: "₹4,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "soa-nursing"
    },
    {
        rank: 14,
        name: "AIIMS Rishikesh",
        location: "Rishikesh, Uttarakhand",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Govt",
        siteLink: "aiims-rishikesh"
    },
    {
        rank: 15,
        name: "KGMU Lucknow",
        location: "Lucknow, Uttar Pradesh",
        entrance: "KGMU Entrance",
        fees: "₹48,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "kgmu-nursing"
    },
    {
        rank: 16,
        name: "Rajkumari Amrit Kaur (RAKCON)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹35,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "rakcon"
    },
    {
        rank: 17,
        name: "Ahilya Bai College of Nursing",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "ahilyabai"
    },
    {
        rank: 18,
        name: "Dr. D.Y. Patil College of Nursing",
        location: "Pune, Maharashtra",
        entrance: "AIAHCET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "dpu-nursing"
    },
    {
        rank: 19,
        name: "Saveetha College of Nursing",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "saveetha"
    },
    {
        rank: 20,
        name: "Jamia Hamdard (Faculty of Nursing)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹4,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "jamia-hamdard"
    },
    {
        rank: 21,
        name: "Apollo College of Nursing",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "apollo-nursing"
    },
    {
        rank: 22,
        name: "AIIMS Raipur",
        location: "Raipur, Chhattisgarh",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "aiims-raipur"
    },
    {
        rank: 23,
        name: "Madras Medical College (Nursing)",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "mmc-nursing"
    },
    {
        rank: 24,
        name: "SRM College of Nursing",
        location: "Chennai, Tamil Nadu",
        entrance: "SRMJEEE",
        fees: "₹4,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "srm-nursing"
    },
    {
        rank: 25,
        name: "Army Institute of Nursing (AIN)",
        location: "Guwahati, Assam",
        entrance: "AIN WAT",
        fees: "₹2,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "ain-guwahati"
    },
    {
        rank: 26,
        name: "Armed Forces Medical College (Nursing)",
        location: "Pune, Maharashtra",
        entrance: "NEET + ToELR",
        fees: "₹20,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "afmc-nursing"
    },
    {
        rank: 27,
        name: "AIIMS Bhopal",
        location: "Bhopal, Madhya Pradesh",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Govt",
        siteLink: "aiims-bhopal"
    },
    {
        rank: 28,
        name: "AIIMS Patna",
        location: "Patna, Bihar",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "aiims-patna"
    },
    {
        rank: 29,
        name: "KLE Institute of Nursing",
        location: "Belagavi, Karnataka",
        entrance: "KAHER Entrance",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "kle-nursing"
    },
    {
        rank: 30,
        name: "Nitte Usha Institute of Nursing",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "nitte-nursing"
    },
    {
        rank: 31,
        name: "Hinduja College of Nursing",
        location: "Mumbai, Maharashtra",
        entrance: "MH-CET",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "hinduja-nursing"
    },
    {
        rank: 32,
        name: "Lady Hardinge Medical College (Nursing)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹12,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "lhmc-nursing"
    },
    {
        rank: 33,
        name: "IPGMER Kolkata",
        location: "Kolkata, West Bengal",
        entrance: "JENPAS UG",
        fees: "₹15,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "ipgmer-nursing"
    },
    {
        rank: 34,
        name: "College of Nursing, GMC Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "MH-CET",
        fees: "₹40,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "jj-nursing"
    },
    {
        rank: 35,
        name: "Holy Family College of Nursing",
        location: "New Delhi, Delhi",
        entrance: "Entrance Exam",
        fees: "₹3,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "holy-family"
    },
    {
        rank: 36,
        name: "MGM College of Nursing",
        location: "Navi Mumbai, Maharashtra",
        entrance: "MGM CET",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "mgm-nursing"
    },
    {
        rank: 37,
        name: "Symbiosis College of Nursing",
        location: "Pune, Maharashtra",
        entrance: "SET",
        fees: "₹4,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "scon"
    },
    {
        rank: 38,
        name: "Bharati Vidyapeeth Nursing College",
        location: "Pune, Maharashtra",
        entrance: "BVP CET",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "bvp-nursing"
    },
    {
        rank: 39,
        name: "Ramaiah Institute of Nursing",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "ramaiah-nursing"
    },
    {
        rank: 40,
        name: "Father Muller College of Nursing",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "father-muller"
    },
    {
        rank: 41,
        name: "B.M. Birla College of Nursing",
        location: "Kolkata, West Bengal",
        entrance: "JENPAS UG",
        fees: "₹3,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "bm-birla"
    },
    {
        rank: 42,
        name: "College of Nursing, NRS Medical College",
        location: "Kolkata, West Bengal",
        entrance: "JENPAS UG",
        fees: "₹12,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "nrs-nursing"
    },
    {
        rank: 43,
        name: "AIIMS Nagpur",
        location: "Nagpur, Maharashtra",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "aiims-nagpur"
    },
    {
        rank: 44,
        name: "Apollo School of Nursing",
        location: "New Delhi, Delhi",
        entrance: "Entrance Test",
        fees: "₹3,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "apollo-delhi"
    },
    {
        rank: 45,
        name: "Govt College of Nursing, Kottayam",
        location: "Kottayam, Kerala",
        entrance: "LBS Kerala",
        fees: "₹20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "gcn-kottayam"
    },
    {
        rank: 46,
        name: "Govt College of Nursing, Kozhikode",
        location: "Kozhikode, Kerala",
        entrance: "LBS Kerala",
        fees: "₹20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "gcn-calicut"
    },
    {
        rank: 47,
        name: "Govt College of Nursing, Trivandrum",
        location: "Thiruvananthapuram, Kerala",
        entrance: "LBS Kerala",
        fees: "₹22,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "gcn-tvm"
    },
    {
        rank: 48,
        name: "Krishna Institute of Nursing",
        location: "Karad, Maharashtra",
        entrance: "KIMSDU CET",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "kims-nursing"
    },
    {
        rank: 49,
        name: "Datta Meghe College of Nursing",
        location: "Wardha, Maharashtra",
        entrance: "AIAHCET",
        fees: "₹4,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "dmims-nursing"
    },
    {
        rank: 50,
        name: "Dayanand Medical College (Nursing)",
        location: "Ludhiana, Punjab",
        entrance: "PPMET",
        fees: "₹2,80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "dmc-nursing"
    },
    {
        rank: 51,
        name: "AIIMS Bathinda",
        location: "Bathinda, Punjab",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "aiims-bathinda"
    },
    {
        rank: 52,
        name: "AIIMS Deoghar",
        location: "Deoghar, Jharkhand",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "aiims-deoghar"
    },
    {
        rank: 53,
        name: "AIIMS Gorakhpur",
        location: "Gorakhpur, Uttar Pradesh",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.20 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "aiims-gorakhpur"
    },
    {
        rank: 54,
        name: "AIIMS Kalyani",
        location: "Kalyani, West Bengal",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "aiims-kalyani"
    },
    {
        rank: 55,
        name: "Sharda School of Nursing",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sharda-nursing"
    },
    {
        rank: 56,
        name: "Galgotias University (Nursing)",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "galgotias-nursing"
    },
    {
        rank: 57,
        name: "Lovely Professional Univ (Nursing)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹6,40,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "lpu-nursing"
    },
    {
        rank: 58,
        name: "Chandigarh University (Nursing)",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹5,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "cu-nursing"
    },
    {
        rank: 59,
        name: "NIMS Nursing College",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "nims-jaipur"
    },
    {
        rank: 60,
        name: "Mahatma Gandhi Nursing College",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "mgumst-nursing"
    },
    {
        rank: 61,
        name: "Geetanjali College of Nursing",
        location: "Udaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "geetanjali"
    },
    {
        rank: 62,
        name: "Kalinga Institute (Nursing)",
        location: "Bhubaneswar, Odisha",
        entrance: "KIITEE",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "kims-nursing"
    },
    {
        rank: 63,
        name: "Sum Nursing College (SOA)",
        location: "Bhubaneswar, Odisha",
        entrance: "SAAT",
        fees: "₹4,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sum-nursing"
    },
    {
        rank: 64,
        name: "Sri Venkateswara (SVIMS)",
        location: "Tirupati, Andhra Pradesh",
        entrance: "AP EAMCET",
        fees: "₹1,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "svims-nursing"
    },
    {
        rank: 65,
        name: "Narayana College of Nursing",
        location: "Nellore, Andhra Pradesh",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "narayana-nursing"
    },
    {
        rank: 66,
        name: "GITAM School of Nursing",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "GAT",
        fees: "₹3,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gitam-nursing"
    },
    {
        rank: 67,
        name: "Yenepoya Nursing College",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "yenepoya-nursing"
    },
    {
        rank: 68,
        name: "JSS College of Nursing",
        location: "Mysuru, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "jss-nursing"
    },
    {
        rank: 69,
        name: "KS Hegde Medical Academy (Nursing)",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹3,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kshema-nursing"
    },
    {
        rank: 70,
        name: "Kasturba Nursing College",
        location: "Wardha, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "mgims-nursing"
    },
    {
        rank: 71,
        name: "AIIMS Mangalagiri",
        location: "Mangalagiri, Andhra Pradesh",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "aiims-mangalagiri"
    },
    {
        rank: 72,
        name: "AIIMS Bibinagar",
        location: "Bibinagar, Telangana",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "aiims-bibinagar"
    },
    {
        rank: 73,
        name: "AIIMS Raebareli",
        location: "Raebareli, Uttar Pradesh",
        entrance: "AIIMS Entrance",
        fees: "₹6,500",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "aiims-raebareli"
    },
    {
        rank: 74,
        name: "College of Nursing, AFMC",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹20,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "afmc-nursing"
    },
    {
        rank: 75,
        name: "Teerthanker Mahaveer University",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "tmu-nursing"
    },
    {
        rank: 76,
        name: "Era College of Nursing",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "era-nursing"
    },
    {
        rank: 77,
        name: "Swami Rama Himalayan Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "CEE",
        fees: "₹4,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "srhu-nursing"
    },
    {
        rank: 78,
        name: "Graphic Era (Nursing)",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "graphic-era-nursing"
    },
    {
        rank: 79,
        name: "Chitkara School of Health Sciences",
        location: "Rajpura, Punjab",
        entrance: "Merit Based",
        fees: "₹3,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "chitkara-nursing"
    },
    {
        rank: 80,
        name: "Rayat Bahra College of Nursing",
        location: "Mohali, Punjab",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "rayat-bahra-nursing"
    },
    {
        rank: 81,
        name: "Maharishi Markandeshwar (Nursing)",
        location: "Ambala, Haryana",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mm-nursing"
    },
    {
        rank: 82,
        name: "SGT University (Nursing)",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sgt-nursing"
    },
    {
        rank: 83,
        name: "PDM University (Nursing)",
        location: "Bahadurgarh, Haryana",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "pdm-nursing"
    },
    {
        rank: 84,
        name: "Parul University (Nursing)",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "parul-nursing"
    },
    {
        rank: 85,
        name: "Sumandeep Vidyapeeth",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sumandeep"
    },
    {
        rank: 86,
        name: "Charusat (Nursing)",
        location: "Anand, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "charusat-nursing"
    },
    {
        rank: 87,
        name: "Ganpat University (Nursing)",
        location: "Mehsana, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "ganpat-nursing"
    },
    {
        rank: 88,
        name: "RK University (Nursing)",
        location: "Rajkot, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rk-nursing"
    },
    {
        rank: 89,
        name: "Assam Down Town University",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "adtu-nursing"
    },
    {
        rank: 90,
        name: "Royal Global University",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "rgu-nursing"
    },
    {
        rank: 91,
        name: "Kaziranga University",
        location: "Jorhat, Assam",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "kaziranga-nursing"
    },
    {
        rank: 92,
        name: "NEIGRIHMS",
        location: "Shillong, Meghalaya",
        entrance: "Entrance Exam",
        fees: "₹25,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "neigrihms"
    },
    {
        rank: 93,
        name: "RIMS Imphal (Nursing)",
        location: "Imphal, Manipur",
        entrance: "Entrance Exam",
        fees: "₹30,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "rims-nursing"
    },
    {
        rank: 94,
        name: "Tripura College of Nursing",
        location: "Agartala, Tripura",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "tripura-nursing"
    },
    {
        rank: 95,
        name: "Sikkim Manipal College of Nursing",
        location: "Gangtok, Sikkim",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "smu-nursing"
    },
    {
        rank: 96,
        name: "Himalayan Institute of Nursing",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "himalayan-nursing"
    },
    {
        rank: 97,
        name: "Uttaranchal College of Nursing",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "uttaranchal-nursing"
    },
    {
        rank: 98,
        name: "Desh Bhagat University (Nursing)",
        location: "Gobindgarh, Punjab",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "desh-bhagat"
    },
    {
        rank: 99,
        name: "CT University (Nursing)",
        location: "Ludhiana, Punjab",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "ct-nursing"
    },
    {
        rank: 100,
        name: "Adesh University (Nursing)",
        location: "Bathinda, Punjab",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "adesh-nursing"
    }
];

// Function to populate Nursing table
function populateNursingTable() {
    const tbody = document.getElementById('nursingCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    nursingColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#ec4899' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#fdf2f8' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #ec4899; color: #db2777; background: #fdf2f8;">${college.rank}</div>
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
                <a href="college-site.html?id=Nursing-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #ec4899 0%, #db2777 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ Nursing Colleges table populated with', nursingColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateNursingTable();
});