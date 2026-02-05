// ============================================
// LLM COLLEGES DATA (Top 100)
// ============================================

const llmColleges = [
    {
        rank: 1,
        name: "NLSIU Bangalore",
        location: "Bengaluru, Karnataka",
        entrance: "CLAT PG",
        fees: "₹3,80,000",
        avgPlacement: "₹10.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "NLU",
        siteLink: "nlsiu"
    },
    {
        rank: 2,
        name: "NLU Delhi (NLUD)",
        location: "New Delhi, Delhi",
        entrance: "AILET PG",
        fees: "₹2,60,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹19.00 LPA",
        type: "NLU",
        siteLink: "nlud"
    },
    {
        rank: 3,
        name: "NALSAR Hyderabad",
        location: "Hyderabad, Telangana",
        entrance: "CLAT PG",
        fees: "₹2,75,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹16.00 LPA",
        type: "NLU",
        siteLink: "nalsar"
    },
    {
        rank: 4,
        name: "WBNUJS Kolkata",
        location: "Kolkata, West Bengal",
        entrance: "CLAT PG",
        fees: "₹2,65,000",
        avgPlacement: "₹10.50 LPA",
        highestPlacement: "₹17.00 LPA",
        type: "NLU",
        siteLink: "nujs"
    },
    {
        rank: 5,
        name: "Symbiosis Law School (SLS)",
        location: "Pune, Maharashtra",
        entrance: "AIAT",
        fees: "₹2,20,000",
        avgPlacement: "₹8.50 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "Private",
        siteLink: "sls-pune"
    },
    {
        rank: 6,
        name: "IIT Kharagpur (RGSOIPL)",
        location: "Kharagpur, West Bengal",
        entrance: "Interview/Test",
        fees: "₹1,60,000",
        avgPlacement: "₹12.00 LPA",
        highestPlacement: "₹20.00 LPA",
        type: "Govt",
        siteLink: "iit-kgp-law"
    },
    {
        rank: 7,
        name: "GNLU Gandhinagar",
        location: "Gandhinagar, Gujarat",
        entrance: "CLAT PG",
        fees: "₹2,60,000",
        avgPlacement: "₹8.00 LPA",
        highestPlacement: "₹15.00 LPA",
        type: "NLU",
        siteLink: "gnlu"
    },
    {
        rank: 8,
        name: "Indian Law Institute (ILI)",
        location: "New Delhi, Delhi",
        entrance: "ILI CAT",
        fees: "₹1,40,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "Govt",
        siteLink: "ili-delhi"
    },
    {
        rank: 9,
        name: "Faculty of Law, Delhi University",
        location: "New Delhi, Delhi",
        entrance: "CUET PG",
        fees: "₹10,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "du-law"
    },
    {
        rank: 10,
        name: "NLU Jodhpur",
        location: "Jodhpur, Rajasthan",
        entrance: "CLAT PG",
        fees: "₹2,80,000",
        avgPlacement: "₹9.50 LPA",
        highestPlacement: "₹16.50 LPA",
        type: "NLU",
        siteLink: "nluj"
    },
    {
        rank: 11,
        name: "Jamia Millia Islamia",
        location: "New Delhi, Delhi",
        entrance: "JMI Entrance",
        fees: "₹18,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "Govt",
        siteLink: "jmi-law"
    },
    {
        rank: 12,
        name: "NLIU Bhopal",
        location: "Bhopal, Madhya Pradesh",
        entrance: "CLAT PG",
        fees: "₹2,40,000",
        avgPlacement: "₹7.50 LPA",
        highestPlacement: "₹14.00 LPA",
        type: "NLU",
        siteLink: "nliu"
    },
    {
        rank: 13,
        name: "RMNLU Lucknow",
        location: "Lucknow, Uttar Pradesh",
        entrance: "CLAT PG",
        fees: "₹1,60,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "NLU",
        siteLink: "rmnlu"
    },
    {
        rank: 14,
        name: "Jindal Global Law School",
        location: "Sonipat, Haryana",
        entrance: "LSAT-India",
        fees: "₹4,50,000",
        avgPlacement: "₹9.00 LPA",
        highestPlacement: "₹18.00 LPA",
        type: "Private",
        siteLink: "jgu-law"
    },
    {
        rank: 15,
        name: "Siksha 'O' Anusandhan",
        location: "Bhubaneswar, Odisha",
        entrance: "SAAT",
        fees: "₹1,80,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "soa-law"
    },
    {
        rank: 16,
        name: "RGNUL Patiala",
        location: "Patiala, Punjab",
        entrance: "CLAT PG",
        fees: "₹2,20,000",
        avgPlacement: "₹6.50 LPA",
        highestPlacement: "₹13.00 LPA",
        type: "NLU",
        siteLink: "rgnul"
    },
    {
        rank: 17,
        name: "Banaras Hindu University (BHU)",
        location: "Varanasi, Uttar Pradesh",
        entrance: "CUET PG",
        fees: "₹12,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "bhu-law"
    },
    {
        rank: 18,
        name: "NUALS Kochi",
        location: "Kochi, Kerala",
        entrance: "CLAT PG",
        fees: "₹2,10,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "NLU",
        siteLink: "nuals"
    },
    {
        rank: 19,
        name: "NLU Odisha (NLUO)",
        location: "Cuttack, Odisha",
        entrance: "CLAT PG",
        fees: "₹2,20,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.50 LPA",
        type: "NLU",
        siteLink: "nluo"
    },
    {
        rank: 20,
        name: "CNLU Patna",
        location: "Patna, Bihar",
        entrance: "CLAT PG",
        fees: "₹2,00,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "NLU",
        siteLink: "cnlu"
    },
    {
        rank: 21,
        name: "Christ University (School of Law)",
        location: "Bengaluru, Karnataka",
        entrance: "Entrance Test",
        fees: "₹1,60,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "christ-llm"
    },
    {
        rank: 22,
        name: "NUSRL Ranchi",
        location: "Ranchi, Jharkhand",
        entrance: "CLAT PG",
        fees: "₹2,10,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "NLU",
        siteLink: "nusrl"
    },
    {
        rank: 23,
        name: "NLUJA Assam",
        location: "Guwahati, Assam",
        entrance: "CLAT PG",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "NLU",
        siteLink: "nluja"
    },
    {
        rank: 24,
        name: "TNNLU Tiruchirappalli",
        location: "Tiruchirappalli, Tamil Nadu",
        entrance: "CLAT PG",
        fees: "₹1,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "NLU",
        siteLink: "tnnlu"
    },
    {
        rank: 25,
        name: "DSNLU Visakhapatnam",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "CLAT PG",
        fees: "₹1,90,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "NLU",
        siteLink: "dsnlu"
    },
    {
        rank: 26,
        name: "MNLU Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "CLAT PG",
        fees: "₹2,40,000",
        avgPlacement: "₹7.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "NLU",
        siteLink: "mnlu-mumbai"
    },
    {
        rank: 27,
        name: "MNLU Nagpur",
        location: "Nagpur, Maharashtra",
        entrance: "CLAT PG",
        fees: "₹2,20,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹11.00 LPA",
        type: "NLU",
        siteLink: "mnlu-nagpur"
    },
    {
        rank: 28,
        name: "Symbiosis Law School (SLS)",
        location: "Noida, Uttar Pradesh",
        entrance: "AIAT",
        fees: "₹1,90,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.50 LPA",
        type: "Private",
        siteLink: "sls-noida"
    },
    {
        rank: 29,
        name: "Amity Law School",
        location: "Noida, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "amity-llm"
    },
    {
        rank: 30,
        name: "ILS Law College",
        location: "Pune, Maharashtra",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "ils-pune"
    },
    {
        rank: 31,
        name: "GLC Mumbai",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹25,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Govt",
        siteLink: "glc-mumbai"
    },
    {
        rank: 32,
        name: "Army Institute of Law",
        location: "Mohali, Punjab",
        entrance: "AIL LET",
        fees: "₹1,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "ail-mohali"
    },
    {
        rank: 33,
        name: "Kalinga Institute (KIIT)",
        location: "Bhubaneswar, Odisha",
        entrance: "KIITEE",
        fees: "₹3,50,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "kiit-law"
    },
    {
        rank: 34,
        name: "UPES (School of Law)",
        location: "Dehradun, Uttarakhand",
        entrance: "ULSAT-LLM",
        fees: "₹2,80,000",
        avgPlacement: "₹5.80 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "upes-llm"
    },
    {
        rank: 35,
        name: "Guru Gobind Singh IP University (USLLS)",
        location: "New Delhi, Delhi",
        entrance: "CLAT PG",
        fees: "₹90,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "ggsipu-law"
    },
    {
        rank: 36,
        name: "Panjab University",
        location: "Chandigarh",
        entrance: "PU CET (PG)",
        fees: "₹30,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "pu-law"
    },
    {
        rank: 37,
        name: "Aligarh Muslim University (AMU)",
        location: "Aligarh, Uttar Pradesh",
        entrance: "AMU Entrance",
        fees: "₹20,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Govt",
        siteLink: "amu-law"
    },
    {
        rank: 38,
        name: "Babasaheb Bhimrao Ambedkar Univ (BBAU)",
        location: "Lucknow, Uttar Pradesh",
        entrance: "CUET PG",
        fees: "₹10,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Central Govt",
        siteLink: "bbau-law"
    },
    {
        rank: 39,
        name: "Saveetha School of Law",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,80,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "Private",
        siteLink: "saveetha-llm"
    },
    {
        rank: 40,
        name: "Alliance University",
        location: "Bengaluru, Karnataka",
        entrance: "ACLAT",
        fees: "₹2,50,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "alliance-law"
    },
    {
        rank: 41,
        name: "Osmania University",
        location: "Hyderabad, Telangana",
        entrance: "TS PGLCET",
        fees: "₹15,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "ou-law"
    },
    {
        rank: 42,
        name: "MNLU Aurangabad",
        location: "Aurangabad, Maharashtra",
        entrance: "CLAT PG",
        fees: "₹2,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "NLU",
        siteLink: "mnlu-aur"
    },
    {
        rank: 43,
        name: "HPNLU Shimla",
        location: "Shimla, Himachal Pradesh",
        entrance: "CLAT PG",
        fees: "₹2,10,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "NLU",
        siteLink: "hpnlu"
    },
    {
        rank: 44,
        name: "DNLU Jabalpur",
        location: "Jabalpur, Madhya Pradesh",
        entrance: "CLAT PG",
        fees: "₹2,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.50 LPA",
        type: "NLU",
        siteLink: "dnlu"
    },
    {
        rank: 45,
        name: "Institute of Law, Nirma University",
        location: "Ahmedabad, Gujarat",
        entrance: "CLAT PG",
        fees: "₹2,00,000",
        avgPlacement: "₹6.00 LPA",
        highestPlacement: "₹12.00 LPA",
        type: "Private",
        siteLink: "nirma-law"
    },
    {
        rank: 46,
        name: "ICFAI Law School",
        location: "Hyderabad, Telangana",
        entrance: "ILSAT (PG)",
        fees: "₹2,20,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "icfai-hyd"
    },
    {
        rank: 47,
        name: "Symbiosis Law School (SLS)",
        location: "Hyderabad, Telangana",
        entrance: "AIAT",
        fees: "₹1,80,000",
        avgPlacement: "₹5.50 LPA",
        highestPlacement: "₹10.00 LPA",
        type: "Private",
        siteLink: "sls-hyd"
    },
    {
        rank: 48,
        name: "Manipal University Jaipur",
        location: "Jaipur, Rajasthan",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "muj-law"
    },
    {
        rank: 49,
        name: "SRM School of Law",
        location: "Kattankulathur, Tamil Nadu",
        entrance: "SRMJEEL",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "srm-law"
    },
    {
        rank: 50,
        name: "VIT Law School",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "vit-law"
    },
    {
        rank: 51,
        name: "Tamil Nadu Dr. Ambedkar Law Univ",
        location: "Chennai, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "tndalu"
    },
    {
        rank: 52,
        name: "School of Law, SASTRA",
        location: "Thanjavur, Tamil Nadu",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "sastra-law"
    },
    {
        rank: 53,
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
        rank: 54,
        name: "Chandigarh University",
        location: "Mohali, Punjab",
        entrance: "CUCET",
        fees: "₹1,30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "cu-law"
    },
    {
        rank: 55,
        name: "Galgotias University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "GUEE / Merit",
        fees: "₹90,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "galgotias-law"
    },
    {
        rank: 56,
        name: "Lloyd Law College",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "Merit/Interview",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "lloyd-law"
    },
    {
        rank: 57,
        name: "Sharda University",
        location: "Greater Noida, Uttar Pradesh",
        entrance: "SUAT",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "sharda-law"
    },
    {
        rank: 58,
        name: "Bangalore University (University Law College)",
        location: "Bengaluru, Karnataka",
        entrance: "PGCET",
        fees: "₹25,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "bu-law"
    },
    {
        rank: 59,
        name: "Cochin University (CUSAT)",
        location: "Kochi, Kerala",
        entrance: "CUSAT CAT",
        fees: "₹45,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Govt",
        siteLink: "cusat-law"
    },
    {
        rank: 60,
        name: "Andhra University (Dr. B.R. Ambedkar Law)",
        location: "Visakhapatnam, Andhra Pradesh",
        entrance: "AP PGLCET",
        fees: "₹30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "au-law"
    },
    {
        rank: 61,
        name: "Maharshi Dayanand University (MDU)",
        location: "Rohtak, Haryana",
        entrance: "MDU Entrance",
        fees: "₹45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "mdu-law"
    },
    {
        rank: 62,
        name: "Kurukshetra University",
        location: "Kurukshetra, Haryana",
        entrance: "KUK Entrance",
        fees: "₹40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Govt",
        siteLink: "kuk-law"
    },
    {
        rank: 63,
        name: "University of Mumbai (Dept of Law)",
        location: "Mumbai, Maharashtra",
        entrance: "Merit Based",
        fees: "₹35,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Govt",
        siteLink: "mu-law"
    },
    {
        rank: 64,
        name: "Savitribai Phule Pune University",
        location: "Pune, Maharashtra",
        entrance: "OEE",
        fees: "₹30,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Govt",
        siteLink: "unipune-law"
    },
    {
        rank: 65,
        name: "University of Lucknow",
        location: "Lucknow, Uttar Pradesh",
        entrance: "LUMET",
        fees: "₹40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Govt",
        siteLink: "lkouniv-law"
    },
    {
        rank: 66,
        name: "Patna University",
        location: "Patna, Bihar",
        entrance: "PMET",
        fees: "₹20,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "patna-law"
    },
    {
        rank: 67,
        name: "Gauhati University",
        location: "Guwahati, Assam",
        entrance: "Entrance Test",
        fees: "₹30,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "gauhati-law"
    },
    {
        rank: 68,
        name: "Utkal University (University Law College)",
        location: "Bhubaneswar, Odisha",
        entrance: "Entrance Test",
        fees: "₹25,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Govt",
        siteLink: "utkal-law"
    },
    {
        rank: 69,
        name: "MS Ramaiah College of Law",
        location: "Bengaluru, Karnataka",
        entrance: "Merit/Interview",
        fees: "₹1,40,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "msrcl"
    },
    {
        rank: 70,
        name: "KLE Society’s Law College",
        location: "Bengaluru, Karnataka",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "kle-law"
    },
    {
        rank: 71,
        name: "CMR University",
        location: "Bengaluru, Karnataka",
        entrance: "CMRUAT",
        fees: "₹1,30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "cmr-law"
    },
    {
        rank: 72,
        name: "Presidency University",
        location: "Bengaluru, Karnataka",
        entrance: "PULAT",
        fees: "₹1,50,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "presidency-law"
    },
    {
        rank: 73,
        name: "IFIM Law School",
        location: "Bengaluru, Karnataka",
        entrance: "ISAT",
        fees: "₹1,80,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "ifim-law"
    },
    {
        rank: 74,
        name: "NorthCap University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹1,60,000",
        avgPlacement: "₹4.50 LPA",
        highestPlacement: "₹8.50 LPA",
        type: "Private",
        siteLink: "ncu-law"
    },
    {
        rank: 75,
        name: "GD Goenka University",
        location: "Gurugram, Haryana",
        entrance: "GATA",
        fees: "₹1,80,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "gd-goenka-law"
    },
    {
        rank: 76,
        name: "BML Munjal University",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹2,00,000",
        avgPlacement: "₹5.00 LPA",
        highestPlacement: "₹9.00 LPA",
        type: "Private",
        siteLink: "bml-law"
    },
    {
        rank: 77,
        name: "Amity University (Gurugram)",
        location: "Gurugram, Haryana",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹8.00 LPA",
        type: "Private",
        siteLink: "amity-ggn"
    },
    {
        rank: 78,
        name: "Chitkara University",
        location: "Rajpura, Punjab",
        entrance: "Merit Based",
        fees: "₹1,30,000",
        avgPlacement: "₹4.20 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "chitkara-law"
    },
    {
        rank: 79,
        name: "Rayat Bahra University",
        location: "Mohali, Punjab",
        entrance: "Merit Based",
        fees: "₹80,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "rayat-bahra"
    },
    {
        rank: 80,
        name: "ICFAI University (Dehradun)",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit/Interview",
        fees: "₹1,30,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "icfai-ddn"
    },
    {
        rank: 81,
        name: "Uttaranchal University (LCD)",
        location: "Dehradun, Uttarakhand",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "uu-law"
    },
    {
        rank: 82,
        name: "Teerthanker Mahaveer University",
        location: "Moradabad, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹85,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "tmu-law"
    },
    {
        rank: 83,
        name: "Invertis University",
        location: "Bareilly, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹75,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "invertis-law"
    },
    {
        rank: 84,
        name: "Mohammad Ali Jauhar University",
        location: "Rampur, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹60,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "jauhar-law"
    },
    {
        rank: 85,
        name: "Integral University",
        location: "Lucknow, Uttar Pradesh",
        entrance: "IUET",
        fees: "₹90,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "integral-law"
    },
    {
        rank: 86,
        name: "Amity University (Lucknow)",
        location: "Lucknow, Uttar Pradesh",
        entrance: "Merit Based",
        fees: "₹1,45,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "amity-lko"
    },
    {
        rank: 87,
        name: "Banasthali Vidyapith",
        location: "Banasthali, Rajasthan",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "banasthali"
    },
    {
        rank: 88,
        name: "Mody University",
        location: "Sikar, Rajasthan",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "mody-law"
    },
    {
        rank: 89,
        name: "Jaipur National University",
        location: "Jaipur, Rajasthan",
        entrance: "Entrance Test",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jnu-jaipur"
    },
    {
        rank: 90,
        name: "Maharishi Markandeshwar",
        location: "Ambala, Haryana",
        entrance: "Merit Based",
        fees: "₹95,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "mm-law"
    },
    {
        rank: 91,
        name: "GLS University",
        location: "Ahmedabad, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,40,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "gls-law"
    },
    {
        rank: 92,
        name: "Parul University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,10,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "parul-law"
    },
    {
        rank: 93,
        name: "Navrachana University",
        location: "Vadodara, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "navrachana"
    },
    {
        rank: 94,
        name: "Auro University",
        location: "Surat, Gujarat",
        entrance: "Merit Based",
        fees: "₹1,50,000",
        avgPlacement: "₹4.00 LPA",
        highestPlacement: "₹7.50 LPA",
        type: "Private",
        siteLink: "auro-law"
    },
    {
        rank: 95,
        name: "Indore Institute of Law",
        location: "Indore, Madhya Pradesh",
        entrance: "IILET",
        fees: "₹1,30,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "iil-indore"
    },
    {
        rank: 96,
        name: "Jagran Lakecity University",
        location: "Bhopal, Madhya Pradesh",
        entrance: "JLUET",
        fees: "₹1,20,000",
        avgPlacement: "₹3.80 LPA",
        highestPlacement: "₹7.00 LPA",
        type: "Private",
        siteLink: "jlu-law"
    },
    {
        rank: 97,
        name: "Oriental University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹60,000",
        avgPlacement: "₹3.20 LPA",
        highestPlacement: "₹6.00 LPA",
        type: "Private",
        siteLink: "oriental-law"
    },
    {
        rank: 98,
        name: "Sage University",
        location: "Indore, Madhya Pradesh",
        entrance: "SEE",
        fees: "₹70,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "sage-law"
    },
    {
        rank: 99,
        name: "Medi-Caps University",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹85,000",
        avgPlacement: "₹3.50 LPA",
        highestPlacement: "₹6.50 LPA",
        type: "Private",
        siteLink: "medicaps-law"
    },
    {
        rank: 100,
        name: "Renaissance Law College",
        location: "Indore, Madhya Pradesh",
        entrance: "Merit Based",
        fees: "₹50,000",
        avgPlacement: "₹3.00 LPA",
        highestPlacement: "₹5.50 LPA",
        type: "Private",
        siteLink: "renaissance"
    }
];

// Function to populate LLM table
function populateLLMTable() {
    const tbody = document.getElementById('llmCollegesTableBody');
    if (!tbody) return;

    tbody.innerHTML = '';

    llmColleges.forEach(college => {
        const row = document.createElement('tr');
        
        // Define badge color based on college type
        const typeBadgeColor = college.type === 'NLU' || college.type === 'Govt' || college.type === 'Central Govt' ? '#a21caf' : '#d97706';
        const typeBgColor = college.type === 'NLU' || college.type === 'Govt' || college.type === 'Central Govt' ? '#fdf4ff' : '#fffbeb';

        row.innerHTML = `
            <td class="rank-cell">
                <div class="rank-badge" style="border-color: #a21caf; color: #86198f; background: #fae8ff;">${college.rank}</div>
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
                <a href="college-site.html?id=LLM-${college.rank}" class="site-btn" style="background: linear-gradient(135deg, #a21caf 0%, #86198f 100%);">View Site</a>
            </td>
        `;
        
        tbody.appendChild(row);
    });
    
    console.log('✅ LLM Colleges table populated with', llmColleges.length, 'colleges');
}

// Initialize when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    populateLLMTable();
});