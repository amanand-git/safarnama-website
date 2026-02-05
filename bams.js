// ============================================
// BAMS COLLEGES DATA (Top 100)
// ============================================

const bamsColleges = [
    {
        rank: 1,
        name: "Institute of Medical Sciences (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹55,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Central Govt",
        siteLink: "ims-bhu"
    },
    {
        rank: 2,
        name: "National Institute of Ayurveda (NIA)",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹1,15,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Central Govt",
        siteLink: "nia-jaipur"
    },
    {
        rank: 3,
        name: "IPGT & RA, Gujarat Ayurved University",
        location: "Jamnagar, Gujarat",
        entrance: "NEET UG",
        fees: "₹20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "jamnagar-ayurved"
    },
    {
        rank: 4,
        name: "Faculty of Ayurveda, IMS BHU",
        location: "Varanasi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹50,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "Govt",
        siteLink: "bhu-ayurveda"
    },
    {
        rank: 5,
        name: "All India Institute of Ayurveda (AIIA)",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹45,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Central Govt",
        siteLink: "aiia-delhi"
    },
    {
        rank: 6,
        name: "Govt. Ayurved College & Hospital",
        location: "Nagpur, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "gac-nagpur"
    },
    {
        rank: 7,
        name: "R.A. Podar Ayurved Medical College",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹2,10,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "podar-mumbai"
    },
    {
        rank: 8,
        name: "Govt. Ayurvedic College",
        location: "Guwahati, Assam",
        entrance: "NEET UG",
        fees: "₹25,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "gac-guwahati"
    },
    {
        rank: 9,
        name: "Tilak Ayurved Mahavidyalaya",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹2,25,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "tilak-pune"
    },
    {
        rank: 10,
        name: "Rishikul Govt. PG Ayurvedic College",
        location: "Haridwar, Uttarakhand",
        entrance: "NEET UG",
        fees: "₹60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "rishikul-haridwar"
    },
    {
        rank: 11,
        name: "State Ayurvedic College & Hospital",
        location: "Lucknow, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹65,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "sac-lucknow"
    },
    {
        rank: 12,
        name: "Govt. Ayurveda College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "NEET UG",
        fees: "₹60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gac-trivandrum"
    },
    {
        rank: 13,
        name: "Dr. Sarvepalli Radhakrishnan RAU",
        location: "Jodhpur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹90,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "dsrrau-jodhpur"
    },
    {
        rank: 14,
        name: "Ch. Brahm Prakash Ayurved Charak Sansthan",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹3,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "cbpacs-delhi"
    },
    {
        rank: 15,
        name: "Ayurvedic & Unani Tibbia College",
        location: "New Delhi, Delhi",
        entrance: "NEET UG",
        fees: "₹15,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Govt",
        siteLink: "tibbia-delhi"
    },
    {
        rank: 16,
        name: "Govt. Ayurvedic College",
        location: "Patiala, Punjab",
        entrance: "NEET UG",
        fees: "₹80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gac-patiala"
    },
    {
        rank: 17,
        name: "Sri Dharmasthala Manjunatheshwara (SDM)",
        location: "Udupi, Karnataka",
        entrance: "NEET UG",
        fees: "₹12,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "sdm-udupi"
    },
    {
        rank: 18,
        name: "KLE University of Ayurveda",
        location: "Belagavi, Karnataka",
        entrance: "NEET UG",
        fees: "₹18,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "kle-belgaum"
    },
    {
        rank: 19,
        name: "Bharati Vidyapeeth College of Ayurved",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹16,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "bvdu-pune"
    },
    {
        rank: 20,
        name: "Govt. Akhandanand Ayurved College",
        location: "Ahmedabad, Gujarat",
        entrance: "NEET UG",
        fees: "₹20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "akhandanand"
    },
    {
        rank: 21,
        name: "Govt. Ayurveda Medical College",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹1,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "gamc-bangalore"
    },
    {
        rank: 22,
        name: "Govt. Ayurveda Medical College",
        location: "Mysuru, Karnataka",
        entrance: "NEET UG",
        fees: "₹1,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "gamc-mysore"
    },
    {
        rank: 23,
        name: "Vaidyaratnam P.S. Varier Ayurveda College",
        location: "Kottakkal, Kerala",
        entrance: "NEET UG",
        fees: "₹65,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private (Aided)",
        siteLink: "vpsv-kottakkal"
    },
    {
        rank: 24,
        name: "Govt. Ayurvedic College",
        location: "Raipur, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-raipur"
    },
    {
        rank: 25,
        name: "Govt. Ashtang Ayurved Mahavidyalaya",
        location: "Indore, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹85,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "ashtang-indore"
    },
    {
        rank: 26,
        name: "Dr. D.Y. Patil College of Ayurved",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹20,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "dpu-ayurved"
    },
    {
        rank: 27,
        name: "Govt. Ayurvedic College",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹75,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-jabalpur"
    },
    {
        rank: 28,
        name: "Gopabandhu Ayurveda Mahavidyalaya",
        location: "Puri, Odisha",
        entrance: "NEET UG",
        fees: "₹30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gopabandhu-puri"
    },
    {
        rank: 29,
        name: "Amrita School of Ayurveda",
        location: "Kollam, Kerala",
        entrance: "NEET UG",
        fees: "₹18,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "amrita-ayurveda"
    },
    {
        rank: 30,
        name: "Govt. Ayurveda College",
        location: "Kannur, Kerala",
        entrance: "NEET UG",
        fees: "₹60,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "gac-kannur"
    },
    {
        rank: 31,
        name: "Sumandeep Vidyapeeth",
        location: "Vadodara, Gujarat",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sumandeep-ayurved"
    },
    {
        rank: 32,
        name: "J.B. Roy State Ayurvedic Medical College",
        location: "Kolkata, West Bengal",
        entrance: "NEET UG",
        fees: "₹45,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "jbroy-kolkata"
    },
    {
        rank: 33,
        name: "Govt. Ayurved College",
        location: "Nanded, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "gac-nanded"
    },
    {
        rank: 34,
        name: "Govt. Ayurved College",
        location: "Osmanabad, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "gac-osmanabad"
    },
    {
        rank: 35,
        name: "Parul Institute of Ayurveda",
        location: "Vadodara, Gujarat",
        entrance: "NEET UG",
        fees: "₹16,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "parul-ayurveda"
    },
    {
        rank: 36,
        name: "Rajiv Gandhi Govt. PG Ayurvedic College",
        location: "Paprola, Himachal Pradesh",
        entrance: "NEET UG",
        fees: "₹80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "paprola-ayurved"
    },
    {
        rank: 37,
        name: "Shri Dhanwantri Ayurvedic College",
        location: "Chandigarh",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "dhanwantri-chd"
    },
    {
        rank: 38,
        name: "Dayanand Ayurvedic College",
        location: "Jalandhar, Punjab",
        entrance: "NEET UG",
        fees: "₹8,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "dayanand-jalandhar"
    },
    {
        rank: 39,
        name: "Govt. Ayurveda College",
        location: "Tripunithura, Kerala",
        entrance: "NEET UG",
        fees: "₹65,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "gac-tripunithura"
    },
    {
        rank: 40,
        name: "Dr. N.R.S. Govt. Ayurvedic College",
        location: "Vijayawada, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹55,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "nrs-vijayawada"
    },
    {
        rank: 41,
        name: "S.V. Ayurvedic College",
        location: "Tirupati, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "sv-ayurvedic"
    },
    {
        rank: 42,
        name: "Govt. Ayurved College",
        location: "Rewa, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹70,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "gac-rewa"
    },
    {
        rank: 43,
        name: "Datta Meghe Institute (Mahatma Gandhi Ayurved)",
        location: "Wardha, Maharashtra",
        entrance: "NEET UG",
        fees: "₹21,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "dmims-ayurved"
    },
    {
        rank: 44,
        name: "Govt. Ayurved College",
        location: "Gwalior, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹75,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-gwalior"
    },
    {
        rank: 45,
        name: "Govt. Ayurved College",
        location: "Vadodara, Gujarat",
        entrance: "NEET UG",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gac-vadodara"
    },
    {
        rank: 46,
        name: "MMM Govt. Ayurved College",
        location: "Udaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹85,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "mmm-udaipur"
    },
    {
        rank: 47,
        name: "Govt. Ayurvedic College",
        location: "Patna, Bihar",
        entrance: "NEET UG",
        fees: "₹45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "gac-patna"
    },
    {
        rank: 48,
        name: "Govt. Ayurvedic College",
        location: "Atarra, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹55,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-atarra"
    },
    {
        rank: 49,
        name: "Govt. Ayurvedic College",
        location: "Banda, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹55,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-banda"
    },
    {
        rank: 50,
        name: "Sri Sri College of Ayurvedic Science",
        location: "Bengaluru, Karnataka",
        entrance: "NEET UG",
        fees: "₹14,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sri-sri-ayurveda"
    },
    {
        rank: 51,
        name: "Patanjali Bhartiya Ayurvigyan",
        location: "Haridwar, Uttarakhand",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "patanjali-ayurved"
    },
    {
        rank: 52,
        name: "YMT Ayurvedic Medical College",
        location: "Navi Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹15,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "ymt-ayurved"
    },
    {
        rank: 53,
        name: "Govt. Ayurvedic College",
        location: "Jalgaon, Maharashtra",
        entrance: "NEET UG",
        fees: "₹1,65,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gac-jalgaon"
    },
    {
        rank: 54,
        name: "Bundelkhand Govt. Ayurvedic College",
        location: "Jhansi, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "bgac-jhansi"
    },
    {
        rank: 55,
        name: "Lalit Hari State PG Ayurvedic College",
        location: "Pilibhit, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹58,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "lhspac-pilibhit"
    },
    {
        rank: 56,
        name: "Govt. Ayurvedic College",
        location: "Muzaffarpur, Bihar",
        entrance: "NEET UG",
        fees: "₹42,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "gac-muzaffarpur"
    },
    {
        rank: 57,
        name: "Govt. Ayurvedic College",
        location: "Begusarai, Bihar",
        entrance: "NEET UG",
        fees: "₹40,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "gac-begusarai"
    },
    {
        rank: 58,
        name: "North Eastern Institute (NEIAH)",
        location: "Shillong, Meghalaya",
        entrance: "NEET UG",
        fees: "₹65,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Central Govt",
        siteLink: "neiah-shillong"
    },
    {
        rank: 59,
        name: "Govt. Dhanwantri Ayurveda College",
        location: "Ujjain, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gdac-ujjain"
    },
    {
        rank: 60,
        name: "Pt. Khushilal Sharma Govt. Ayurved College",
        location: "Bhopal, Madhya Pradesh",
        entrance: "NEET UG",
        fees: "₹85,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "ptksgac-bhopal"
    },
    {
        rank: 61,
        name: "Govt. Ayurveda Medical College",
        location: "Shimoga, Karnataka",
        entrance: "NEET UG",
        fees: "₹1,10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "gamc-shimoga"
    },
    {
        rank: 62,
        name: "Taranath Govt. Ayurvedic Medical College",
        location: "Bellary, Karnataka",
        entrance: "NEET UG",
        fees: "₹1,15,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "tgamc-bellary"
    },
    {
        rank: 63,
        name: "Govt. Ayurvedic Medical College",
        location: "Nagercoil, Tamil Nadu",
        entrance: "NEET UG",
        fees: "₹35,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "gamc-nagercoil"
    },
    {
        rank: 64,
        name: "Govt. Ayurveda College",
        location: "Junagadh, Gujarat",
        entrance: "NEET UG",
        fees: "₹22,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "gac-junagadh"
    },
    {
        rank: 65,
        name: "Sheth J.P. Govt. Ayurved College",
        location: "Bhavnagar, Gujarat",
        entrance: "NEET UG",
        fees: "₹20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "jp-bhavnagar"
    },
    {
        rank: 66,
        name: "Govt. Ayurved College",
        location: "Bilaspur, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹38,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "gac-bilaspur"
    },
    {
        rank: 67,
        name: "CSMSS Ayurved Mahavidyalaya",
        location: "Aurangabad, Maharashtra",
        entrance: "NEET UG",
        fees: "₹12,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "csmss-ayurved"
    },
    {
        rank: 68,
        name: "Sumatibhai Shah Ayurved Mahavidyalaya",
        location: "Pune, Maharashtra",
        entrance: "NEET UG",
        fees: "₹14,00,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "ssam-pune"
    },
    {
        rank: 69,
        name: "K.G. Mittal Ayurvedic College",
        location: "Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹13,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "kg-mittal"
    },
    {
        rank: 70,
        name: "D.Y. Patil School of Ayurveda",
        location: "Navi Mumbai, Maharashtra",
        entrance: "NEET UG",
        fees: "₹22,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "dpu-navimumbai"
    },
    {
        rank: 71,
        name: "Jupiter Ayurved Medical College",
        location: "Nagpur, Maharashtra",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "jupiter-nagpur"
    },
    {
        rank: 72,
        name: "S.K.S.S. Arts College",
        location: "Tirupati, Andhra Pradesh",
        entrance: "NEET UG",
        fees: "₹55,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private (Aided)",
        siteLink: "skss-tirupati"
    },
    {
        rank: 73,
        name: "Muniyal Institute of Ayurveda",
        location: "Manipal, Karnataka",
        entrance: "NEET UG",
        fees: "₹11,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "muniyal-ayurveda"
    },
    {
        rank: 74,
        name: "Alva's Ayurveda Medical College",
        location: "Moodbidri, Karnataka",
        entrance: "NEET UG",
        fees: "₹10,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "alvas-ayurveda"
    },
    {
        rank: 75,
        name: "JSS Ayurveda Medical College",
        location: "Mysuru, Karnataka",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "jss-ayurveda"
    },
    {
        rank: 76,
        name: "SDM College of Ayurveda",
        location: "Hassan, Karnataka",
        entrance: "NEET UG",
        fees: "₹11,50,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "sdm-hassan"
    },
    {
        rank: 77,
        name: "Amrutha Ayurvedic Medical College",
        location: "Chitradurga, Karnataka",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "amrutha-ayurveda"
    },
    {
        rank: 78,
        name: "Ashwini Ayurvedic Medical College",
        location: "Tumkur, Karnataka",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.80 LPA",
        type: "Private",
        siteLink: "ashwini-ayurveda"
    },
    {
        rank: 79,
        name: "Ahalia Ayurveda Medical College",
        location: "Palakkad, Kerala",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ahalia-palakkad"
    },
    {
        rank: 80,
        name: "Pankajakasthuri Ayurveda College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "pankajakasthuri"
    },
    {
        rank: 81,
        name: "Vishnu Ayurveda College",
        location: "Palakkad, Kerala",
        entrance: "NEET UG",
        fees: "₹10,80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "vishnu-ayurveda"
    },
    {
        rank: 82,
        name: "Mannam Ayurveda Co-operative",
        location: "Pandalam, Kerala",
        entrance: "NEET UG",
        fees: "₹9,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mannam-ayurveda"
    },
    {
        rank: 83,
        name: "KMCT Ayurveda Medical College",
        location: "Kozhikode, Kerala",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "kmct-ayurveda"
    },
    {
        rank: 84,
        name: "Shri Baba Mastnath Ayurvedic College",
        location: "Rohtak, Haryana",
        entrance: "NEET UG",
        fees: "₹12,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "mastnath-rohtak"
    },
    {
        rank: 85,
        name: "Gaur Brahman Ayurvedic College",
        location: "Rohtak, Haryana",
        entrance: "NEET UG",
        fees: "₹9,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "gaur-brahman"
    },
    {
        rank: 86,
        name: "Murari Lal Rasiwasia Ayurvedic College",
        location: "Bhiwani, Haryana",
        entrance: "NEET UG",
        fees: "₹8,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "mlr-bhiwani"
    },
    {
        rank: 87,
        name: "Sri Ganganagar College of Ayurveda",
        location: "Sri Ganganagar, Rajasthan",
        entrance: "NEET UG",
        fees: "₹11,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "ganganagar-ayurved"
    },
    {
        rank: 88,
        name: "Mahatma Jyotiba Fule Ayurveda College",
        location: "Jaipur, Rajasthan",
        entrance: "NEET UG",
        fees: "₹12,00,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.80 LPA",
        type: "Private",
        siteLink: "mjf-jaipur"
    },
    {
        rank: 89,
        name: "Punjab Ayurved Medical College",
        location: "Sri Ganganagar, Rajasthan",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.20 LPA",
        type: "Private",
        siteLink: "punjab-ayurved"
    },
    {
        rank: 90,
        name: "Shekhawati Ayurved Medical College",
        location: "Pilani, Rajasthan",
        entrance: "NEET UG",
        fees: "₹11,50,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "shekhawati-pilani"
    },
    {
        rank: 91,
        name: "Shree Ram Ayurvedic Medical College",
        location: "Meerut, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹10,00,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "shree-ram-meerut"
    },
    {
        rank: 92,
        name: "Major S.D. Singh Ayurvedic College",
        location: "Farrukhabad, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹9,50,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.80 LPA",
        type: "Private",
        siteLink: "sdsingh-ayurved"
    },
    {
        rank: 93,
        name: "Sri Sai Ayurvedic Medical College",
        location: "Aligarh, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹10,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.20 LPA",
        type: "Private",
        siteLink: "sri-sai-aligarh"
    },
    {
        rank: 94,
        name: "Vivek College of Ayurvedic Sciences",
        location: "Bijnor, Uttar Pradesh",
        entrance: "NEET UG",
        fees: "₹9,80,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "vivek-bijnor"
    },
    {
        rank: 95,
        name: "Rajiv Lochan Ayurved Medical College",
        location: "Durg, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹8,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "rajiv-lochan"
    },
    {
        rank: 96,
        name: "Chhattisgarh Ayurved Medical College",
        location: "Rajnandgaon, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹8,00,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "cg-ayurved"
    },
    {
        rank: 97,
        name: "Bharti Ayurved Medical College",
        location: "Durg, Chhattisgarh",
        entrance: "NEET UG",
        fees: "₹8,20,000",
        avgPlacement: "₹3.60 LPA",
        highestPlacement: "₹6.20 LPA",
        type: "Private",
        siteLink: "bharti-ayurved"
    },
    {
        rank: 98,
        name: "K.A.T.S. Ayurved Medical College",
        location: "Ganjam, Odisha",
        entrance: "NEET UG",
        fees: "₹9,00,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "kats-ganjam"
    },
    {
        rank: 99,
        name: "Sri Sri Nripendra Narayan",
        location: "Cooch Behar, West Bengal",
        entrance: "NEET UG",
        fees: "₹8,50,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "ssnn-ayurved"
    },
    {
        rank: 100,
        name: "Raghunath Ayurved Mahavidyalaya",
        location: "Contai, West Bengal",
        entrance: "NEET UG",
        fees: "₹9,50,000",
        avgPlacement: "₹3.60 LPA",
        highestPlacement: "₹6.20 LPA",
        type: "Private",
        siteLink: "raghunath-ayurved"
    }
];

// Function to populate BAMS table
function populateBAMSTable() {
    const tbody = document.getElementById('bamsCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    bamsColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = (college.type === 'Govt' || college.type === 'Central Govt') ? '#84cc16' : '#d97706';
        const typeBgColor = (college.type === 'Govt' || college.type === 'Central Govt') ? '#ecfccb' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #84cc16; color: #4d7c0f; background: #f7fee7;">${college.rank}</div>
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
                <a href="college-site.html?id=BAMS-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #84cc16 0%, #65a30d 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ BAMS Colleges table populated with', bamsColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateBAMSTable();
});