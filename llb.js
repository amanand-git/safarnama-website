// ============================================
// LLB / LAW COLLEGES DATA (Top 100)
// ============================================

const llbColleges = [
    {
        rank: 1,
        name: "NLSIU Bangalore",
        location: "Bengaluru, Karnataka",
        entrance: "CLAT",
        fees: "₹3,20,000",
        avgPlacement: "₹16.00 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "NLU",
        siteLink: "nlsiu"
    },
    {
        rank: 2,
        name: "NLU Delhi (NLUD)",
        location: "New Delhi, Delhi",
        entrance: "AILET",
        fees: "₹3,00,000",
        avgPlacement: "₹15.50 LPA",
        highestPlacement: "₹19.00 LPA",
        type: "NLU",
        siteLink: "nlud"
    },
    {
        rank: 3,
        name: "NALSAR Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "CLAT",
        fees: "₹2,80,000",
        avgPlacement: "₹15.00 LPA",
        highestPlacement: "₹18.50 LPA",
        type: "NLU",
        siteLink: "nalsar"
    },
    {
        rank: 4,
        name: "WBNUJS Kolkata",
        location: "Kolkata, West Bengal",
        entrance: "CLAT",
        fees: "₹2,60,000",
        avgPlacement: "₹14.50 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "NLU",
        siteLink: "nujs"
    },
    {
        rank: 5,
        name: "Symbiosis Law School (SLS)",
        location: "Pune, Maharashtra",
        entrance: "SLAT",
        fees: "₹3,50,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "sls-pune"
    },
    {
        rank: 6,
        name: "NLU Jodhpur",
        location: "Jodhpur, Rajasthan",
        entrance: "CLAT",
        fees: "₹2,70,000",
        avgPlacement: "₹14.00 LPA",
        highestPlacement: "₹17.00 LPA",
        type: "NLU",
        siteLink: "nluj"
    },
    {
        rank: 7,
        name: "GNLU Gandhinagar",
        location: "Gandhinagar, Gujarat",
        entrance: "CLAT",
        fees: "₹2,50,000",
        avgPlacement: "₹13.50 LPA",
        highestPlacement: "₹16.50 LPA",
        type: "NLU",
        siteLink: "gnlu"
    },
    {
        rank: 8,
        name: "Faculty of Law, Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹10,500",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "jmi-law"
    },
    {
        rank: 9,
        name: "IIT Kharagpur (Rajiv Gandhi School of IP Law)",
        location: "Kharagpur, West Bengal",
        entrance: "IIT Law Entrance",
        fees: "₹1,50,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "iit-kgp-law"
    },
    {
        rank: 10,
        name: "Faculty of Law, Delhi University",
        location: "New Delhi, Delhi",
        entrance: "CUET PG (LLB)",
        fees: "₹5,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "du-law"
    },
    {
        rank: 11,
        name: "NLIU Bhopal",
        location: "Bhopal, Madhya Pradesh",
        entrance: "CLAT",
        fees: "₹2,40,000",
        avgPlacement: "₹12.50 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "NLU",
        siteLink: "nliu"
    },
    {
        rank: 12,
        name: "RMNLU Lucknow",
        location: "Lucknow, Uttar Pradesh",
        entrance: "CLAT",
        fees: "₹1,80,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "NLU",
        siteLink: "rmnlu"
    },
    {
        rank: 13,
        name: "ILS Law College",
        location: "Pune, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹40,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "ils-pune"
    },
    {
        rank: 14,
        name: "GLC Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹7,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "glc-mumbai"
    },
    {
        rank: 15,
        name: "Aligarh Muslim University (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "AMU Entrance",
        fees: "₹12,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "amu-law"
    },
    {
        rank: 16,
        name: "Banaras Hindu University (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "CUET UG/PG",
        fees: "₹3,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "bhu-law"
    },
    {
        rank: 17,
        name: "RGNUL Patiala",
        location: "Patiala, Punjab",
        entrance: "CLAT",
        fees: "₹2,30,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "NLU",
        siteLink: "rgnul"
    },
    {
        rank: 18,
        name: "NUALS Kochi",
        location: "Kochi, Kerala",
        entrance: "CLAT",
        fees: "₹2,10,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "NLU",
        siteLink: "nuals"
    },
    {
        rank: 19,
        name: "NLU Odisha (NLUO)",
        location: "Cuttack, Odisha",
        entrance: "CLAT",
        fees: "₹2,20,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹15.50 LPA",
        type: "NLU",
        siteLink: "nluo"
    },
    {
        rank: 20,
        name: "CNLU Patna",
        location: "Patna, Bihar",
        entrance: "CLAT",
        fees: "₹2,00,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "NLU",
        siteLink: "cnlu"
    },
    {
        rank: 21,
        name: "Christ University (School of Law)",
        location: "Bengaluru, Karnataka",
        entrance: "CULEE",
        fees: "₹1,90,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "christ-law"
    },
    {
        rank: 22,
        name: "Army Institute of Law (AIL)",
        location: "Mohali, Punjab",
        entrance: "AIL LET",
        fees: "₹1,80,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "ail-mohali"
    },
    {
        rank: 23,
        name: "NUSRL Ranchi",
        location: "Ranchi, Jharkhand",
        entrance: "CLAT",
        fees: "₹2,10,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "NLU",
        siteLink: "nusrl"
    },
    {
        rank: 24,
        name: "NLUJA Assam",
        location: "Guwahati, Assam",
        entrance: "CLAT",
        fees: "₹2,00,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "NLU",
        siteLink: "nluja"
    },
    {
        rank: 25,
        name: "DSNLU Visakhapatnam",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "CLAT",
        fees: "₹1,95,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "NLU",
        siteLink: "dsnlu"
    },
    {
        rank: 26,
        name: "TNNLU Tiruchirappalli",
        location: "Tiruchirappalli, Tamil Nadu",
        entrance: "CLAT",
        fees: "₹1,80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "NLU",
        siteLink: "tnnlu"
    },
    {
        rank: 27,
        name: "MNLU Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "CLAT",
        fees: "₹2,50,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "NLU",
        siteLink: "mnlu-mumbai"
    },
    {
        rank: 28,
        name: "MNLU Nagpur",
        location: "Nagpur, Maharashtra",
        entrance: "CLAT",
        fees: "₹2,30,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "NLU",
        siteLink: "mnlu-nagpur"
    },
    {
        rank: 29,
        name: "Jindal Global Law School (JGLS)",
        location: "Sonipat, Haryana",
        entrance: "LSAT-India",
        fees: "₹6,00,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "jgls"
    },
    {
        rank: 30,
        name: "Symbiosis Law School (SLS)",
        location: "Noida, Uttar Pradesh",
        entrance: "SLAT",
        fees: "₹3,20,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "sls-noida"
    },
    {
        rank: 31,
        name: "UPES (School of Law)",
        location: "Dehradun, Uttarakhand",
        entrance: "ULSAT / CLAT",
        fees: "₹3,50,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "upes-law"
    },
    {
        rank: 32,
        name: "KIIT School of Law",
        location: "Bhubaneswar, Odisha",
        entrance: "KIITEE",
        fees: "₹3,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "kiit-law"
    },
    {
        rank: 33,
        name: "Amity Law School",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹2,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-law"
    },
    {
        rank: 34,
        name: "USLLS (GGSIPU)",
        location: "New Delhi, Delhi",
        entrance: "CLAT",
        fees: "₹1,10,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "uslls"
    },
    {
        rank: 35,
        name: "Panjab University (Dept of Law)",
        location: "Chandigarh",
        entrance: "PU LLB",
        fees: "₹15,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "pu-law"
    },
    {
        rank: 36,
        name: "ICFAI Law School",
        location: "Hyderabad, Telangana",
        entrance: "ILSAT / CLAT",
        fees: "₹2,60,000",
        avgPlacement: "₹5.20 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "icfai-hyd"
    },
    {
        rank: 37,
        name: "Lloyd Law College",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "LET / CLAT",
        fees: "₹1,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "lloyd"
    },
    {
        rank: 38,
        name: "VIPS (Vivekananda Institute)",
        location: "New Delhi, Delhi",
        entrance: "CLAT",
        fees: "₹1,30,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "vips-law"
    },
    {
        rank: 39,
        name: "MS Ramaiah College of Law",
        location: "Bengaluru, Karnataka",
        entrance: "CLAT / LSAT",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "ms-ramaiah-law"
    },
    {
        rank: 40,
        name: "KLE Society’s Law College",
        location: "Bengaluru, Karnataka",
        entrance: "LSAT / CLAT",
        fees: "₹1,50,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kle-law"
    },
    {
        rank: 41,
        name: "Osmania University (College of Law)",
        location: "Hyderabad, Telangana",
        entrance: "TS LAWCET",
        fees: "₹10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "ou-law"
    },
    {
        rank: 42,
        name: "Tamil Nadu Dr. Ambedkar Law Univ",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "tndalu"
    },
    {
        rank: 43,
        name: "Maharashtra National Law Univ (MNLU)",
        location: "Aurangabad, Maharashtra",
        entrance: "CLAT",
        fees: "₹2,20,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "NLU",
        siteLink: "mnlu-aurangabad"
    },
    {
        rank: 44,
        name: "HPNLU Shimla",
        location: "Shimla, Himachal Pradesh",
        entrance: "CLAT",
        fees: "₹2,10,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "NLU",
        siteLink: "hpnlu"
    },
    {
        rank: 45,
        name: "DNLU Jabalpur",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "CLAT",
        fees: "₹2,20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "NLU",
        siteLink: "dnlu"
    },
    {
        rank: 46,
        name: "VIT Law School",
        location: "Chennai, Tamil Nadu",
        entrance: "CLAT / LSAT",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "vit-law"
    },
    {
        rank: 47,
        name: "Manipal University (School of Law)",
        location: "Jaipur, Rajasthan",
        entrance: "Merit / CLAT",
        fees: "₹2,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "manipal-law"
    },
    {
        rank: 48,
        name: "SRM School of Law",
        location: "Kattankulathur, Tamil Nadu",
        entrance: "SRMJEEL",
        fees: "₹2,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "srm-law"
    },
    {
        rank: 49,
        name: "School of Law, SASTRA",
        location: "Thanjavur, Tamil Nadu",
        entrance: "CLAT / Merit",
        fees: "₹1,40,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "sastra-law"
    },
    {
        rank: 50,
        name: "Saveetha School of Law",
        location: "Chennai, Tamil Nadu",
        entrance: "Saveetha Entrance",
        fees: "₹2,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "saveetha-law"
    },
    {
        rank: 51,
        name: "School of Law, Christ (Delhi NCR)",
        location: "Ghaziabad, Uttar Pradesh",
        entrance: "CULEE",
        fees: "₹2,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "christ-ncr"
    },
    {
        rank: 52,
        name: "Symbiosis Law School (SLS)",
        location: "Hyderabad, Telangana",
        entrance: "SLAT",
        fees: "₹3,30,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "sls-hyd"
    },
    {
        rank: 53,
        name: "Bharati Vidyapeeth (New Law College)",
        location: "Pune, Maharashtra",
        entrance: "BVP CET",
        fees: "₹1,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "bvp-law"
    },
    {
        rank: 54,
        name: "Deccan Education Society (DES)",
        location: "Pune, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "des-law"
    },
    {
        rank: 55,
        name: "Dr. Ambedkar College of Law",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹8,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "ambedkar-law"
    },
    {
        rank: 56,
        name: "SVKM's Pravin Gandhi College of Law",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹65,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "pgcl"
    },
    {
        rank: 57,
        name: "Rizvi Law College",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "rizvi-law"
    },
    {
        rank: 58,
        name: "Jitendra Chauhan College of Law",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹12,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jccl"
    },
    {
        rank: 59,
        name: "Alliance School of Law",
        location: "Bengaluru, Karnataka",
        entrance: "ACLAT",
        fees: "₹3,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "alliance-law"
    },
    {
        rank: 60,
        name: "School of Law, UPES",
        location: "Dehradun, Uttarakhand",
        entrance: "ULSAT",
        fees: "₹3,60,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Private",
        siteLink: "upes-law"
    },
    {
        rank: 61,
        name: "Institute of Law, Nirma University",
        location: "Ahmedabad, Gujarat",
        entrance: "CLAT",
        fees: "₹2,80,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "nirma-law"
    },
    {
        rank: 62,
        name: "ICFAI Law School",
        location: "Dehradun, Uttarakhand",
        entrance: "ILSAT",
        fees: "₹1,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "icfai-ddn"
    },
    {
        rank: 63,
        name: "School of Law, GITAM",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "GAT / CLAT",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "gitam-law"
    },
    {
        rank: 64,
        name: "IFIM Law School",
        location: "Bengaluru, Karnataka",
        entrance: "LSAT / CLAT",
        fees: "₹2,00,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "ifim-law"
    },
    {
        rank: 65,
        name: "CMR University School of Legal Studies",
        location: "Bengaluru, Karnataka",
        entrance: "CMRUAT",
        fees: "₹1,60,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "cmr-law"
    },
    {
        rank: 66,
        name: "BML Munjal University (School of Law)",
        location: "Gurugram, Haryana",
        entrance: "CLAT / LSAT",
        fees: "₹3,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "bml-law"
    },
    {
        rank: 67,
        name: "NorthCap University",
        location: "Gurugram, Haryana",
        entrance: "CLAT / LSAT",
        fees: "₹2,20,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "northcap-law"
    },
    {
        rank: 68,
        name: "GD Goenka University",
        location: "Gurugram, Haryana",
        entrance: "GATA / CLAT",
        fees: "₹2,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "gd-goenka"
    },
    {
        rank: 69,
        name: "Sharda University (School of Law)",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT / CLAT",
        fees: "₹1,80,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "sharda-law"
    },
    {
        rank: 70,
        name: "Galgotias University (School of Law)",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE / CLAT",
        fees: "₹1,10,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "galgotias-law"
    },
    {
        rank: 71,
        name: "Lovely Professional University (LPU)",
        location: "Phagwara, Punjab",
        entrance: "LPUNEST",
        fees: "₹1,60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "lpu-law"
    },
    {
        rank: 72,
        name: "Chandigarh University (UILS)",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹1,40,000",
        avgPlacement: "₹4.80 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "cu-law"
    },
    {
        rank: 73,
        name: "Chitkara University",
        location: "Rajpura, Punjab",
        entrance: "Merit / Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "chitkara-law"
    },
    {
        rank: 74,
        name: "Rayat Bahra University",
        location: "Mohali, Punjab",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "rayat-bahra"
    },
    {
        rank: 75,
        name: "Geeta Institute of Law",
        location: "Panipat, Haryana",
        entrance: "GLAT",
        fees: "₹85,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "geeta-law"
    },
    {
        rank: 76,
        name: "Department of Laws, HPU",
        location: "Shimla, Himachal Pradesh",
        entrance: "HPU Entrance",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "hpu-law"
    },
    {
        rank: 77,
        name: "University Law College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "ulc-bangalore"
    },
    {
        rank: 78,
        name: "Bangalore Institute of Legal Studies",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹70,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "bils"
    },
    {
        rank: 79,
        name: "Vaikunta Baliga College of Law",
        location: "Udupi, Karnataka",
        entrance: "Merit Based",
        fees: "₹40,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "vbcl"
    },
    {
        rank: 80,
        name: "SDM Law College",
        location: "Mangalore, Karnataka",
        entrance: "Merit Based",
        fees: "₹50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sdm-law"
    },
    {
        rank: 81,
        name: "Government Law College",
        location: "Kozhikode, Kerala",
        entrance: "KLEE",
        fees: "₹5,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "glc-calicut"
    },
    {
        rank: 82,
        name: "Government Law College",
        location: "Thiruvananthapuram, Kerala",
        entrance: "KLEE",
        fees: "₹5,500",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "glc-trivandrum"
    },
    {
        rank: 83,
        name: "Government Law College",
        location: "Ernakulam, Kerala",
        entrance: "KLEE",
        fees: "₹6,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Govt",
        siteLink: "glc-ernakulam"
    },
    {
        rank: 84,
        name: "School of Legal Studies, CUSAT",
        location: "Kochi, Kerala",
        entrance: "CUSAT CAT",
        fees: "₹45,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "cusat-law"
    },
    {
        rank: 85,
        name: "Mar Gregorios College of Law",
        location: "Thiruvananthapuram, Kerala",
        entrance: "KLEE",
        fees: "₹40,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mgcl"
    },
    {
        rank: 86,
        name: "Jogesh Chandra Chaudhuri Law College",
        location: "Kolkata, West Bengal",
        entrance: "Calcutta Univ Entrance",
        fees: "₹12,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jcclc"
    },
    {
        rank: 87,
        name: "Surendranath Law College",
        location: "Kolkata, West Bengal",
        entrance: "Calcutta Univ Entrance",
        fees: "₹8,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "snlc"
    },
    {
        rank: 88,
        name: "South Calcutta Law College",
        location: "Kolkata, West Bengal",
        entrance: "Calcutta Univ Entrance",
        fees: "₹10,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "sclc"
    },
    {
        rank: 89,
        name: "Heritage Law College",
        location: "Kolkata, West Bengal",
        entrance: "Merit Based",
        fees: "₹90,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "heritage-law"
    },
    {
        rank: 90,
        name: "Amity University (Kolkata)",
        location: "Kolkata, West Bengal",
        entrance: "Amity Test",
        fees: "₹1,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-kol-law"
    },
    {
        rank: 91,
        name: "Department of Law, Calcutta University",
        location: "Kolkata, West Bengal",
        entrance: "CU Law Entrance",
        fees: "₹5,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "cu-dept-law"
    },
    {
        rank: 92,
        name: "University Law College",
        location: "Bhubaneswar, Odisha",
        entrance: "Merit Based",
        fees: "₹15,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "ulc-bbsr"
    },
    {
        rank: 93,
        name: "MS Law College",
        location: "Cuttack, Odisha",
        entrance: "Merit Based",
        fees: "₹20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "ms-law"
    },
    {
        rank: 94,
        name: "ICFAI University (Dehradun)",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit / Interview",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "icfai-law"
    },
    {
        rank: 95,
        name: "Law College Dehradun (Uttaranchal Univ)",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "lcd-uu"
    },
    {
        rank: 96,
        name: "Siddharth College of Law",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "siddharth-law"
    },
    {
        rank: 97,
        name: "New Law College",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹12,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "new-law-college"
    },
    {
        rank: 98,
        name: "K.C. Law College",
        location: "Mumbai, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "kc-law"
    },
    {
        rank: 99,
        name: "Manikchand Pahade Law College",
        location: "Aurangabad, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹18,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mplc"
    },
    {
        rank: 100,
        name: "Dayanand College of Law",
        location: "Latur, Maharashtra",
        entrance: "MHT CET Law",
        fees: "₹20,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "dayanand-law"
    }
];

// Function to populate LLB table
function populateLLBTable() {
    const tbody = document.getElementById('llbCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    llbColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'Govt' || college.type === 'NLU' ? '#be123c' : '#d97706';
        const typeBgColor = college.type === 'Govt' || college.type === 'NLU' ? '#fff1f2' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #be123c; color: #9f1239; background: #ffe4e6;">${college.rank}</div>
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
                <a href="college-site.html?id=LLB-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #be123c 0%, #9f1239 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ LLB Colleges table populated with', llbColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateLLBTable();
});