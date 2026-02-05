// ============================================
// B.SC AGRICULTURE COLLEGES DATA (Top 100)
// ============================================

const agriColleges = [
    {
        rank: 1,
        name: "ICAR-IARI (Indian Agricultural Research Inst.)",
        location: "New Delhi, Delhi",
        entrance: "ICAR AIEEA (CUET)",
        fees: "₹25,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Central Govt",
        siteLink: "iari"
    },
    {
        rank: 2,
        name: "ICAR-NDRI (National Dairy Research Inst.)",
        location: "Karnal, Haryana",
        entrance: "ICAR AIEEA",
        fees: "₹30,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Central Govt",
        siteLink: "ndri"
    },
    {
        rank: 3,
        name: "Punjab Agricultural University (PAU)",
        location: "Ludhiana, Punjab",
        entrance: "PAU CET",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "State Govt",
        siteLink: "pau"
    },
    {
        rank: 4,
        name: "Banaras Hindu University (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "CUET",
        fees: "₹35,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Central Govt",
        siteLink: "bhu-agri"
    },
    {
        rank: 5,
        name: "G.B. Pant Univ. of Agriculture & Tech",
        location: "Pantnagar, Uttarakhand",
        entrance: "GBPUAT Entrance",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "State Govt",
        siteLink: "gbpuat"
    },
    {
        rank: 6,
        name: "Tamil Nadu Agricultural University (TNAU)",
        location: "Coimbatore, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "State Govt",
        siteLink: "tnau"
    },
    {
        rank: 7,
        name: "Chaudhary Charan Singh Haryana Agri Univ",
        location: "Hisar, Haryana",
        entrance: "ICAR AIEEA",
        fees: "₹70,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "State Govt",
        siteLink: "ccshau"
    },
    {
        rank: 8,
        name: "Univ. of Agricultural Sciences (UAS)",
        location: "Bengaluru, Karnataka",
        entrance: "KCET",
        fees: "₹1,10,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "State Govt",
        siteLink: "uas-bangalore"
    },
    {
        rank: 9,
        name: "Sher-e-Kashmir Univ of Agri Sciences (SKUAST)",
        location: "Srinagar, J&K",
        entrance: "SKUAST-J CET",
        fees: "₹1,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "State Govt",
        siteLink: "skuast"
    },
    {
        rank: 10,
        name: "Acharya N.G. Ranga Agri University (ANGRAU)",
        location: "Guntur, Andhra Pradesh",
        entrance: "AP EAMCET",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "State Govt",
        siteLink: "angrau"
    },
    {
        rank: 11,
        name: "Central Agricultural University",
        location: "Imphal, Manipur",
        entrance: "ICAR AIEEA",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Central Govt",
        siteLink: "cau-imphal"
    },
    {
        rank: 12,
        name: "CSK Himachal Pradesh Krishi Vishvavidyalaya",
        location: "Palampur, Himachal Pradesh",
        entrance: "ICAR AIEEA",
        fees: "₹1,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "State Govt",
        siteLink: "cskhpkv"
    },
    {
        rank: 13,
        name: "Kerala Agricultural University",
        location: "Thrissur, Kerala",
        entrance: "KEAM",
        fees: "₹65,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "kau"
    },
    {
        rank: 14,
        name: "Professor Jayashankar Telangana Agri Univ",
        location: "Hyderabad, Telangana",
        entrance: "TS EAMCET",
        fees: "₹1,30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "State Govt",
        siteLink: "pjtsau"
    },
    {
        rank: 15,
        name: "UAS Dharwad",
        location: "Dharwad, Karnataka",
        entrance: "KCET",
        fees: "₹1,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "State Govt",
        siteLink: "uas-dharwad"
    },
    {
        rank: 16,
        name: "Indira Gandhi Krishi Vishwavidyalaya",
        location: "Raipur, Chhattisgarh",
        entrance: "CG PAT",
        fees: "₹60,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "igkv"
    },
    {
        rank: 17,
        name: "Dr. Rajendra Prasad Central Agri Univ",
        location: "Pusa, Bihar",
        entrance: "ICAR AIEEA",
        fees: "₹40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Central Govt",
        siteLink: "rpcau"
    },
    {
        rank: 18,
        name: "SHUATS (Sam Higginbottom Univ)",
        location: "Prayagraj, Uttar Pradesh",
        entrance: "SHUATS Entrance",
        fees: "₹4,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Deemed",
        siteLink: "shuats"
    },
    {
        rank: 19,
        name: "Jawaharlal Nehru Krishi Vishwa Vidyalaya",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "MP PAT",
        fees: "₹90,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "jnkvv"
    },
    {
        rank: 20,
        name: "Anand Agricultural University",
        location: "Anand, Gujarat",
        entrance: "GUJCET",
        fees: "₹1,10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "aau"
    },
    {
        rank: 21,
        name: "Lovely Professional University (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹9,60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "lpu-agri"
    },
    {
        rank: 22,
        name: "Maharana Pratap Univ of Agri & Tech",
        location: "Udaipur, Rajasthan",
        entrance: "JET Agriculture",
        fees: "₹1,40,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "mpuat"
    },
    {
        rank: 23,
        name: "Visva Bharati University",
        location: "Santiniketan, West Bengal",
        entrance: "CUET",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Central Govt",
        siteLink: "visva-bharati"
    },
    {
        rank: 24,
        name: "Orissa University of Agri & Tech (OUAT)",
        location: "Bhubaneswar, Odisha",
        entrance: "OUAT Entrance",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "State Govt",
        siteLink: "ouat"
    },
    {
        rank: 25,
        name: "Bidhan Chandra Krishi Viswavidyalaya",
        location: "Mohanpur, West Bengal",
        entrance: "WBJEE",
        fees: "₹45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "bckv"
    },
    {
        rank: 26,
        name: "Junagadh Agricultural University",
        location: "Junagadh, Gujarat",
        entrance: "GUJCET",
        fees: "₹1,10,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "jau"
    },
    {
        rank: 27,
        name: "Navsari Agricultural University",
        location: "Navsari, Gujarat",
        entrance: "GUJCET",
        fees: "₹1,10,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "nau"
    },
    {
        rank: 28,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹7,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "cu-agri"
    },
    {
        rank: 29,
        name: "Amity University",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹5,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-agri"
    },
    {
        rank: 30,
        name: "Mahatma Phule Krishi Vidyapeeth",
        location: "Rahuri, Maharashtra",
        entrance: "MHT CET",
        fees: "₹1,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "mpkv"
    },
    {
        rank: 31,
        name: "Dr. Panjabrao Deshmukh Krishi Vidyapeeth",
        location: "Akola, Maharashtra",
        entrance: "MHT CET",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "pdkv"
    },
    {
        rank: 32,
        name: "Aligarh Muslim University (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "CUET / AMU Exam",
        fees: "₹60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Central Govt",
        siteLink: "amu-agri"
    },
    {
        rank: 33,
        name: "Sardar Vallabhbhai Patel Univ of Agri",
        location: "Meerut, Uttar Pradesh",
        entrance: "UPCATET",
        fees: "₹1,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "svpuat"
    },
    {
        rank: 34,
        name: "Birsa Agricultural University",
        location: "Ranchi, Jharkhand",
        entrance: "JCECE",
        fees: "₹60,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "bau-ranchi"
    },
    {
        rank: 35,
        name: "Uttar Banga Krishi Viswavidyalaya",
        location: "Cooch Behar, West Bengal",
        entrance: "WBJEE",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "ubkv"
    },
    {
        rank: 36,
        name: "Bihar Agricultural University",
        location: "Bhagalpur, Bihar",
        entrance: "BCECE",
        fees: "₹30,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "bau-bihar"
    },
    {
        rank: 37,
        name: "Sri Venkateswara Veterinary University",
        location: "Tirupati, Andhra Pradesh",
        entrance: "AP EAMCET",
        fees: "₹1,20,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "svvu"
    },
    {
        rank: 38,
        name: "Rajmata Vijayaraje Scindia Krishi Vishwa",
        location: "Gwalior, Madhya Pradesh",
        entrance: "MP PAT",
        fees: "₹95,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "rvskvv"
    },
    {
        rank: 39,
        name: "Siksha 'O' Anusandhan (SOA)",
        location: "Bhubaneswar, Odisha",
        entrance: "SAAT",
        fees: "₹6,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "soa-agri"
    },
    {
        rank: 40,
        name: "Graphic Era Hill University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "graphic-era-agri"
    },
    {
        rank: 41,
        name: "VIT (Vellore Institute of Tech)",
        location: "Vellore, Tamil Nadu",
        entrance: "VITEEE",
        fees: "₹4,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "vit-agri"
    },
    {
        rank: 42,
        name: "Centurion University",
        location: "Paralakhemundi, Odisha",
        entrance: "CUEE",
        fees: "₹4,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "centurion"
    },
    {
        rank: 43,
        name: "Vasantrao Naik Marathwada Krishi",
        location: "Parbhani, Maharashtra",
        entrance: "MHT CET",
        fees: "₹1,40,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "vnmkv"
    },
    {
        rank: 44,
        name: "Dr. Balasaheb Sawant Konkan Krishi",
        location: "Dapoli, Maharashtra",
        entrance: "MHT CET",
        fees: "₹1,30,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "dbskkv"
    },
    {
        rank: 45,
        name: "Uttar Banga Krishi Viswavidyalaya",
        location: "Cooch Behar, West Bengal",
        entrance: "WBJEE",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "ubkv"
    },
    {
        rank: 46,
        name: "Assam Agricultural University",
        location: "Jorhat, Assam",
        entrance: "Merit / CET",
        fees: "₹40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "State Govt",
        siteLink: "aau-jorhat"
    },
    {
        rank: 47,
        name: "Swami Keshwanand Rajasthan Agri Univ",
        location: "Bikaner, Rajasthan",
        entrance: "JET",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "State Govt",
        siteLink: "skrau"
    },
    {
        rank: 48,
        name: "Banda University of Agri & Tech",
        location: "Banda, Uttar Pradesh",
        entrance: "UPCATET",
        fees: "₹1,60,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "buat"
    },
    {
        rank: 49,
        name: "Narendra Deva Univ of Agri & Tech",
        location: "Faizabad, Uttar Pradesh",
        entrance: "UPCATET",
        fees: "₹1,70,000",
        avgPlacement: "₹3.60 LPA",
        highestPlacement: "₹6.20 LPA",
        type: "State Govt",
        siteLink: "nduat"
    },
    {
        rank: 50,
        name: "Agriculture University, Kota",
        location: "Kota, Rajasthan",
        entrance: "JET",
        fees: "₹1,30,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "State Govt",
        siteLink: "aukota"
    },
    {
        rank: 51,
        name: "Uttaranchal University",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "uu-agri"
    },
    {
        rank: 52,
        name: "Dolphin PG Institute",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "dolphin-institute"
    },
    {
        rank: 53,
        name: "Teerthanker Mahaveer Univ",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "tmu-agri"
    },
    {
        rank: 54,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "galgotias-agri"
    },
    {
        rank: 55,
        name: "Sharda University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹5,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sharda-agri"
    },
    {
        rank: 56,
        name: "Quantum University",
        location: "Roorkee, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "quantum-agri"
    },
    {
        rank: 57,
        name: "Dev Bhoomi Uttarakhand Univ",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "dbuu-agri"
    },
    {
        rank: 58,
        name: "ITM University",
        location: "Gwalior, Madhya Pradesh",
        entrance: "ITM NEST",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "itm-gwalior"
    },
    {
        rank: 59,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "parul-agri"
    },
    {
        rank: 60,
        name: "SGT University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹5,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sgt-agri"
    },
    {
        rank: 61,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "invertis-agri"
    },
    {
        rank: 62,
        name: "GLA University",
        location: "Mathura, Uttar Pradesh",
        entrance: "GLAET",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "gla-agri"
    },
    {
        rank: 63,
        name: "Sanskriti University",
        location: "Mathura, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sanskriti-agri"
    },
    {
        rank: 64,
        name: "Rama University",
        location: "Kanpur, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "rama-agri"
    },
    {
        rank: 65,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "IUET",
        fees: "₹3,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "integral-agri"
    },
    {
        rank: 66,
        name: "Babu Banarasi Das Univ",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "bbdu-agri"
    },
    {
        rank: 67,
        name: "Maharishi Markandeshwar",
        location: "Ambala, Haryana",
        entrance: "Merit Based",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mm-agri"
    },
    {
        rank: 68,
        name: "Jagannath University",
        location: "Jaipur, Rajasthan",
        entrance: "JUEE",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "jagannath-agri"
    },
    {
        rank: 69,
        name: "Vivekananda Global University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "vgu-agri"
    },
    {
        rank: 70,
        name: "Suresh Gyan Vihar Univ",
        location: "Jaipur, Rajasthan",
        entrance: "SGVUEE",
        fees: "₹3,80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sgvu-agri"
    },
    {
        rank: 71,
        name: "NIMS University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "nims-agri"
    },
    {
        rank: 72,
        name: "Mewar University",
        location: "Chittorgarh, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "mewar-agri"
    },
    {
        rank: 73,
        name: "Career Point University",
        location: "Kota, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "career-point"
    },
    {
        rank: 74,
        name: "CT University",
        location: "Ludhiana, Punjab",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "ct-agri"
    },
    {
        rank: 75,
        name: "GNA University",
        location: "Phagwara, Punjab",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "gna-agri"
    },
    {
        rank: 76,
        name: "Rayat Bahra University",
        location: "Mohali, Punjab",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rayat-bahra"
    },
    {
        rank: 77,
        name: "RimT University",
        location: "Gobindgarh, Punjab",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rimt-agri"
    },
    {
        rank: 78,
        name: "Guru Kashi University",
        location: "Bathinda, Punjab",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "gku-agri"
    },
    {
        rank: 79,
        name: "Desh Bhagat University",
        location: "Gobindgarh, Punjab",
        entrance: "Merit Based",
        fees: "₹2,40,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "desh-bhagat"
    },
    {
        rank: 80,
        name: "Sri Sri University",
        location: "Cuttack, Odisha",
        entrance: "SSU CET",
        fees: "₹5,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sri-sri-agri"
    },
    {
        rank: 81,
        name: "GIET University",
        location: "Gunupur, Odisha",
        entrance: "GIETEE",
        fees: "₹3,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "giet-agri"
    },
    {
        rank: 82,
        name: "AKS University",
        location: "Satna, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "aks-agri"
    },
    {
        rank: 83,
        name: "Medi-Caps University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹3,20,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "medicaps-agri"
    },
    {
        rank: 84,
        name: "Sage University",
        location: "Indore, Madhya Pradesh",
        entrance: "SEE",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "sage-agri"
    },
    {
        rank: 85,
        name: "RKDF University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "rkdf-agri"
    },
    {
        rank: 86,
        name: "Mansarovar Global University",
        location: "Sehore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,20,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "mansarovar-agri"
    },
    {
        rank: 87,
        name: "Rabindranath Tagore Univ",
        location: "Bhopal, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹2,40,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "rntu-agri"
    },
    {
        rank: 88,
        name: "Assam Down Town Univ",
        location: "Guwahati, Assam",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "adtu-agri"
    },
    {
        rank: 89,
        name: "Kaziranga University",
        location: "Jorhat, Assam",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "kaziranga-agri"
    },
    {
        rank: 90,
        name: "Himalayan University",
        location: "Itanagar, Arunachal",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "himalayan-agri"
    },
    {
        rank: 91,
        name: "Arunachal University of Studies",
        location: "Namsai, Arunachal",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "aus-agri"
    },
    {
        rank: 92,
        name: "Apex University",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹2,80,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "apex-agri"
    },
    {
        rank: 93,
        name: "Rai University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,60,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "rai-agri"
    },
    {
        rank: 94,
        name: "Ganpat University",
        location: "Mehsana, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,50,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "ganpat-agri"
    },
    {
        rank: 95,
        name: "Gokul Global University",
        location: "Siddhpur, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹2.80 LPA",
        highestPlacement: "₹5.00 LPA",
        type: "Private",
        siteLink: "gokul-agri"
    },
    {
        rank: 96,
        name: "Swarrnim Startup University",
        location: "Gandhinagar, Gujarat",
        entrance: "Merit Based",
        fees: "₹3,00,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "swarrnim-agri"
    },
    {
        rank: 97,
        name: "ITM Vocational University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹2,50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "itm-agri"
    },
    {
        rank: 98,
        name: "Dhanalakshmi Srinivasan Univ",
        location: "Trichy, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "dsu-agri"
    },
    {
        rank: 99,
        name: "Kalasalingam Academy",
        location: "Srivilliputhur, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹4,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "kalasalingam-agri"
    },
    {
        rank: 100,
        name: "Karunya Institute",
        location: "Coimbatore, Tamil Nadu",
        entrance: "KEE / Merit",
        fees: "₹5,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "karunya-agri"
    }
];

// Function to populate Agri table
function populateAgriTable() {
    const tbody = document.getElementById('agriCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    agriColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = (college.type === 'Central Govt' || college.type === 'State Govt') ? '#16a34a' : '#d97706';
        const typeBgColor = (college.type === 'Central Govt' || college.type === 'State Govt') ? '#dcfce7' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #16a34a; color: #15803d; background: #f0fdf4;">${college.rank}</div>
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
                <a href="college-site.html?id=Agri-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #16a34a 0%, #15803d 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ Agri Colleges table populated with', agriColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateAgriTable();
});