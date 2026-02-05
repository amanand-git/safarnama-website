// ============================================
// MBBS COLLEGES DATA (Top 100)
// ============================================

const mbbsColleges = [
    {
        rank: 1,
        name: "AIIMS New Delhi",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹24.00 LPA",
        type: "Govt",
        siteLink: "aiims-delhi"
    },
    {
        rank: 2,
        name: "Christian Medical College (CMC)",
        location: "Vellore, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "cmc-vellore"
    },
    {
        rank: 3,
        name: "JIPMER Puducherry",
        location: "Puducherry",
        entrance: "NEET UG",
        fees: "₹35,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "jipmer"
    },
    {
        rank: 4,
        name: "Amrita Vishwa Vidyapeetham",
        location: "Kochi, Kerala",
        entrance: "NEET UG",
        fees: "₹95,00,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Private",
        siteLink: "amrita-medical"
    },
    {
        rank: 5,
        name: "Kasturba Medical College (KMC)",
        location: "Manipal, Karnataka",
        entrance: "NEET UG",
        fees: "₹70,00,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "kmc-manipal"
    },
    {
        rank: 6,
        name: "MAMC (Maulana Azad Medical College)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹15,000",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹22.00 LPA",
        type: "Govt",
        siteLink: "mamc"
    },
    {
        rank: 7,
        name: "King George's Medical University (KGMU)",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "kgmu"
    },
    {
        rank: 8,
        name: "Madras Medical College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹90,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "mmc-chennai"
    },
    {
        rank: 9,
        name: "Institute of Medical Sciences (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "ims-bhu"
    },
    {
        rank: 10,
        name: "St. John's Medical College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹30,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "st-johns"
    },
    {
        rank: 11,
        name: "Sri Ramachandra Institute (SRIHER)",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,10,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Private",
        siteLink: "sriher"
    },
    {
        rank: 12,
        name: "Vardhman Mahavir Medical College (VMMC)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹2,00,000",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹23.00 LPA",
        type: "Govt",
        siteLink: "vmmc"
    },
    {
        rank: 13,
        name: "Dr. D.Y. Patil Vidyapeeth",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,15,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "dpu-pune"
    },
    {
        rank: 14,
        name: "AIIMS Jodhpur",
        location: "Jodhpur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹11.00 LPA",
        highestPlacement: "₹22.00 LPA",
        type: "Govt",
        siteLink: "aiims-jodhpur"
    },
    {
        rank: 15,
        name: "AIIMS Bhubaneswar",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹11.50 LPA",
        highestPlacement: "₹21.00 LPA",
        type: "Govt",
        siteLink: "aiims-bbsr"
    },
    {
        rank: 16,
        name: "Siksha 'O' Anusandhan (IMS)",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹85,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "soa-ims"
    },
    {
        rank: 17,
        name: "AIIMS Rishikesh",
        location: "Rishikesh, Uttarakhand",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "aiims-rishikesh"
    },
    {
        rank: 18,
        name: "Lady Hardinge Medical College (LHMC)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹10,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹19.00 LPA",
        type: "Govt",
        siteLink: "lhmc"
    },
    {
        rank: 19,
        name: "University College of Medical Sciences (UCMS)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹25,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "ucms"
    },
    {
        rank: 20,
        name: "Kasturba Medical College (KMC)",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹68,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Private",
        siteLink: "kmc-mangalore"
    },
    {
        rank: 21,
        name: "Saveetha Medical College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,20,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹17.00 LPA",
        type: "Private",
        siteLink: "saveetha"
    },
    {
        rank: 22,
        name: "AIIMS Raipur",
        location: "Raipur, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "aiims-raipur"
    },
    {
        rank: 23,
        name: "AIIMS Bhopal",
        location: "Bhopal, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹19.00 LPA",
        type: "Govt",
        siteLink: "aiims-bhopal"
    },
    {
        rank: 24,
        name: "SRM Medical College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,15,00,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "srm-medical"
    },
    {
        rank: 25,
        name: "Govt Medical College & Hospital (GMCH)",
        location: "Chandigarh",
        entrance: "NEET UG",
        fees: "₹1,25,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "gmch-32"
    },
    {
        rank: 26,
        name: "Dayanand Medical College (DMC)",
        location: "Ludhiana, Punjab",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "dmc-ludhiana"
    },
    {
        rank: 27,
        name: "Seth GS Medical College (KEM)",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹6,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "kem-mumbai"
    },
    {
        rank: 28,
        name: "AIIMS Patna",
        location: "Patna, Bihar",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "aiims-patna"
    },
    {
        rank: 29,
        name: "JSS Medical College",
        location: "Mysuru, Karnataka",
        entrance: "NEET UG",
        fees: "₹85,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "jss-mysore"
    },
    {
        rank: 30,
        name: "Jamia Hamdard (HIMSR)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹72,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "jamia-hamdard"
    },
    {
        rank: 31,
        name: "Armed Forces Medical College (AFMC)",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹3,00,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹25.00 LPA",
        type: "Govt",
        siteLink: "afmc"
    },
    {
        rank: 32,
        name: "Kalinga Institute (KIMS)",
        location: "Bhubaneswar, Odisha",
        entrance: "NEET UG",
        fees: "₹80,00,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Private",
        siteLink: "kims-kiit"
    },
    {
        rank: 33,
        name: "Datta Meghe Institute (JNMC)",
        location: "Wardha, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,05,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "datta-meghe"
    },
    {
        rank: 34,
        name: "Sawai Man Singh Medical College (SMS)",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹17.00 LPA",
        type: "Govt",
        siteLink: "sms-jaipur"
    },
    {
        rank: 35,
        name: "PSG Institute of Medical Sciences",
        location: "Coimbatore, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹30,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "psg-medical"
    },
    {
        rank: 36,
        name: "MS Ramaiah Medical College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹65,00,000",
        avgPlacement: "₹7.80 LPA",
        highestPlacement: "₹14.50 LPA",
        type: "Private",
        siteLink: "ramaiah"
    },
    {
        rank: 37,
        name: "Christian Medical College (CMC)",
        location: "Ludhiana, Punjab",
        entrance: "NEET UG",
        fees: "₹33,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "cmc-ludhiana"
    },
    {
        rank: 38,
        name: "Grant Medical College (JJ Hospital)",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹6,50,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "grant-medical"
    },
    {
        rank: 39,
        name: "Bangalore Medical College (BMCRI)",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹3,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "bmcri"
    },
    {
        rank: 40,
        name: "Aligarh Muslim University (JNMCH)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "amu-medical"
    },
    {
        rank: 41,
        name: "Maharishi Markandeshwar (MMU)",
        location: "Ambala, Haryana",
        entrance: "NEET UG",
        fees: "₹75,00,000",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "mmu-ambala"
    },
    {
        rank: 42,
        name: "Stanley Medical College",
        location: "Chennai, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "stanley"
    },
    {
        rank: 43,
        name: "B.J. Medical College",
        location: "Ahmedabad, Gujarat",
        entrance: "NEET UG",
        fees: "₹1,25,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "bjmc-ahmedabad"
    },
    {
        rank: 44,
        name: "KLE University (J.N. Medical College)",
        location: "Belagavi, Karnataka",
        entrance: "NEET UG",
        fees: "₹82,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "kle-belgaum"
    },
    {
        rank: 45,
        name: "Medical College Kolkata",
        location: "Kolkata, West Bengal",
        entrance: "NEET UG",
        fees: "₹45,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "mck-kolkata"
    },
    {
        rank: 46,
        name: "Mahatma Gandhi Medical College (MGMCRI)",
        location: "Puducherry",
        entrance: "NEET UG",
        fees: "₹95,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "mgmcri"
    },
    {
        rank: 47,
        name: "Dr. RML Hospital (PGIMER)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "rml-delhi"
    },
    {
        rank: 48,
        name: "Osmania Medical College",
        location: "Hyderabad, Telangana",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "osmania"
    },
    {
        rank: 49,
        name: "AIIMS Nagpur",
        location: "Nagpur, Maharashtra",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "aiims-nagpur"
    },
    {
        rank: 50,
        name: "Chettinad Hospital & Research",
        location: "Kelambakkam, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,10,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "chettinad"
    },
    {
        rank: 51,
        name: "Lokmanya Tilak Municipal Medical College",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹6,20,000",
        avgPlacement: "₹8.80 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "ltmmc"
    },
    {
        rank: 52,
        name: "AIIMS Bathinda",
        location: "Bathinda, Punjab",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹17.00 LPA",
        type: "Govt",
        siteLink: "aiims-bathinda"
    },
    {
        rank: 53,
        name: "Govt Medical College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "NEET UG",
        fees: "₹1,30,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "gmc-trivandrum"
    },
    {
        rank: 54,
        name: "Manipal Tata Medical College",
        location: "Jamshedpur, Jharkhand",
        entrance: "NEET UG",
        fees: "₹65,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "mtmc"
    },
    {
        rank: 55,
        name: "Sri Venkateswara Institute (SVIMS)",
        location: "Tirupati, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹4,00,000",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹13.50 LPA",
        type: "Govt",
        siteLink: "svims"
    },
    {
        rank: 56,
        name: "KS Hegde Medical Academy",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹78,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "Private",
        siteLink: "kshema"
    },
    {
        rank: 57,
        name: "IPGMER Kolkata",
        location: "Kolkata, West Bengal",
        entrance: "NEET UG",
        fees: "₹50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "ipgmer"
    },
    {
        rank: 58,
        name: "AIIMS Kalyani",
        location: "Kalyani, West Bengal",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.20 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "aiims-kalyani"
    },
    {
        rank: 59,
        name: "Jawaharlal Nehru Medical College",
        location: "Wardha, Maharashtra",
        entrance: "NEET UG",
        fees: "₹95,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "jnmc-wardha"
    },
    {
        rank: 60,
        name: "Era's Lucknow Medical College",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹80,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "eras-lucknow"
    },
    {
        rank: 61,
        name: "Sri Devaraj Urs Medical College",
        location: "Kolar, Karnataka",
        entrance: "NEET UG",
        fees: "₹75,00,000",
        avgPlacement: "₹6.80 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "sdumc"
    },
    {
        rank: 62,
        name: "MGM Medical College",
        location: "Navi Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹90,00,000",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹13.50 LPA",
        type: "Private",
        siteLink: "mgm-mumbai"
    },
    {
        rank: 63,
        name: "Yenepoya Medical College",
        location: "Mangalore, Karnataka",
        entrance: "NEET UG",
        fees: "₹85,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "Private",
        siteLink: "yenepoya"
    },
    {
        rank: 64,
        name: "Hamdard Institute (HIMSR)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹70,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Private",
        siteLink: "himsr"
    },
    {
        rank: 65,
        name: "AIIMS Gorakhpur",
        location: "Gorakhpur, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.50 LPA",
        type: "Govt",
        siteLink: "aiims-gorakhpur"
    },
    {
        rank: 66,
        name: "AIIMS Raebareli",
        location: "Raebareli, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "aiims-raebareli"
    },
    {
        rank: 67,
        name: "Krishna Institute (KIMS)",
        location: "Karad, Maharashtra",
        entrance: "NEET UG",
        fees: "₹88,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "kims-karad"
    },
    {
        rank: 68,
        name: "BVDU Medical College",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹95,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "bharati-vidyapeeth"
    },
    {
        rank: 69,
        name: "Mahatma Gandhi Mission (MGM)",
        location: "Aurangabad, Maharashtra",
        entrance: "NEET UG",
        fees: "₹90,00,000",
        avgPlacement: "₹6.80 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "Private",
        siteLink: "mgm-aurangabad"
    },
    {
        rank: 70,
        name: "Sri Siddhartha Medical College",
        location: "Tumkur, Karnataka",
        entrance: "NEET UG",
        fees: "₹75,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "ssmc-tumkur"
    },
    {
        rank: 71,
        name: "GITAM Institute of Medical Sciences",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹1,15,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "gitam-medical"
    },
    {
        rank: 72,
        name: "Santosh Medical College",
        location: "Ghaziabad, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹1,05,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.50 LPA",
        type: "Private",
        siteLink: "santosh"
    },
    {
        rank: 73,
        name: "AIIMS Deoghar",
        location: "Deoghar, Jharkhand",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "aiims-deoghar"
    },
    {
        rank: 74,
        name: "AIIMS Mangalagiri",
        location: "Mangalagiri, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "aiims-mangalagiri"
    },
    {
        rank: 75,
        name: "AIIMS Bibinagar",
        location: "Bibinagar, Telangana",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "Govt",
        siteLink: "aiims-bibinagar"
    },
    {
        rank: 76,
        name: "Narayana Medical College",
        location: "Nellore, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹60,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "narayana-medical"
    },
    {
        rank: 77,
        name: "Regional Institute (RIMS)",
        location: "Imphal, Manipur",
        entrance: "NEET UG",
        fees: "₹50,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "rims-imphal"
    },
    {
        rank: 78,
        name: "Shri B.M. Patil Medical College",
        location: "Vijayapura, Karnataka",
        entrance: "NEET UG",
        fees: "₹78,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹11.50 LPA",
        type: "Private",
        siteLink: "bldedu"
    },
    {
        rank: 79,
        name: "Rural Medical College (PIMS)",
        location: "Loni, Maharashtra",
        entrance: "NEET UG",
        fees: "₹72,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "pravara"
    },
    {
        rank: 80,
        name: "MGM Medical College",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹5,50,000",
        avgPlacement: "₹6.80 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "mgm-indore"
    },
    {
        rank: 81,
        name: "Topiwala National Medical College",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹6,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "nair-hospital"
    },
    {
        rank: 82,
        name: "Government Medical College",
        location: "Nagpur, Maharashtra",
        entrance: "NEET UG",
        fees: "₹5,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "gmc-nagpur"
    },
    {
        rank: 83,
        name: "SCB Medical College",
        location: "Cuttack, Odisha",
        entrance: "NEET UG",
        fees: "₹2,00,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.50 LPA",
        type: "Govt",
        siteLink: "scb-cuttack"
    },
    {
        rank: 84,
        name: "Andhra Medical College",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹1,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "amc-vizag"
    },
    {
        rank: 85,
        name: "Government Medical College",
        location: "Kozhikode, Kerala",
        entrance: "NEET UG",
        fees: "₹1,40,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹13.50 LPA",
        type: "Govt",
        siteLink: "gmc-calicut"
    },
    {
        rank: 86,
        name: "Gandhi Medical College",
        location: "Hyderabad, Telangana",
        entrance: "NEET UG",
        fees: "₹1,20,000",
        avgPlacement: "₹7.80 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "gandhi-hyd"
    },
    {
        rank: 87,
        name: "AIIMS Guwahati",
        location: "Guwahati, Assam",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "aiims-guwahati"
    },
    {
        rank: 88,
        name: "AIIMS Vijaypur",
        location: "Jammu, J&K",
        entrance: "NEET UG",
        fees: "₹6,875",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "aiims-jammu"
    },
    {
        rank: 89,
        name: "Meenakshi Medical College",
        location: "Kanchipuram, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,05,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "meenakshi"
    },
    {
        rank: 90,
        name: "Vinayaka Mission's",
        location: "Salem, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹95,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "vinayaka"
    },
    {
        rank: 91,
        name: "Chettinad Hospital",
        location: "Kanchipuram, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹1,10,00,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "chettinad"
    },
    {
        rank: 92,
        name: "DY Patil, Navi Mumbai",
        location: "Navi Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,25,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Private",
        siteLink: "dpu-navimumbai"
    },
    {
        rank: 93,
        name: "JLNMCH (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "jlnmch"
    },
    {
        rank: 94,
        name: "UCMS Delhi",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹30,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Govt",
        siteLink: "ucms"
    },
    {
        rank: 95,
        name: "Government Medical College",
        location: "Patiala, Punjab",
        entrance: "NEET UG",
        fees: "₹8,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "gmc-patiala"
    },
    {
        rank: 96,
        name: "Indira Gandhi Medical College",
        location: "Shimla, Himachal Pradesh",
        entrance: "NEET UG",
        fees: "₹3,00,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "igmc-shimla"
    },
    {
        rank: 97,
        name: "S.N. Medical College",
        location: "Jodhpur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "snmc"
    },
    {
        rank: 98,
        name: "Gajra Raja Medical College",
        location: "Gwalior, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹5,00,000",
        avgPlacement: "₹7.20 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "grmc"
    },
    {
        rank: 99,
        name: "Rajendra Institute (RIMS)",
        location: "Ranchi, Jharkhand",
        entrance: "NEET UG",
        fees: "₹2,50,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "rims-ranchi"
    },
    {
        rank: 100,
        name: "Goa Medical College",
        location: "Panaji, Goa",
        entrance: "NEET UG",
        fees: "₹5,50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Govt",
        siteLink: "gmc-goa"
    }
];

// Function to populate MBBS table
function populateMBBSTable() {
    const tbody = document.getElementById('mbbsCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    mbbsColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' ? '#059669' : '#d97706';
        const typeBgColor = college.type === 'Govt' ? '#ecfdf5' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #059669; color: #047857; background: #d1fae5;">${college.rank}</div>
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
                <a href="college-site.html?id=MBBS-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #059669 0%, #047857 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ MBBS Colleges table populated with', mbbsColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateMBBSTable();
});