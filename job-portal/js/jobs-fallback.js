/* Fallback dataset used only if fetch('jobs.json') fails (e.g. opening the site directly
   from the filesystem without a local server). Keeps the site fully functional offline. */
const JOBS_FALLBACK = [
  {
    "id": 1,
    "company": "Oracle",
    "title": "Oracle Hiring Freshers - Associate Software Engineer",
    "location": "Hyderabad",
    "salary": "\u20b98 LPA",
    "experience": "0 Years",
    "qualification": "B.Tech / B.E (CSE, IT, ECE)",
    "date": "2026-07-25",
    "logo": "images/oracle.svg",
    "description": "Oracle is looking for enthusiastic freshers to join its Cloud Infrastructure team in Hyderabad. You'll work alongside senior engineers building and testing large-scale distributed systems that power Oracle Cloud.",
    "responsibilities": [
      "Write clean, testable code in Java or Python",
      "Assist in debugging and resolving production issues",
      "Participate in code reviews and daily stand-ups",
      "Document technical processes and design decisions"
    ],
    "skills": [
      "Java",
      "SQL",
      "Data Structures",
      "Problem Solving"
    ],
    "category": "Software",
    "featured": true,
    "apply": "https://www.oracle.com/careers/"
  },
  {
    "id": 2,
    "company": "TCS",
    "title": "TCS Ninja - National Qualifier Test 2026",
    "location": "Pan India",
    "salary": "\u20b93.6 LPA",
    "experience": "0 Years",
    "qualification": "Any Graduate / B.Tech",
    "date": "2026-07-24",
    "logo": "images/tcs.svg",
    "description": "TCS Ninja hiring drive is open for 2026 graduates across all streams. Selected candidates will be trained in TCS's flagship Initial Learning Program before being deployed to live client projects.",
    "responsibilities": [
      "Complete the mandatory 8-week induction training",
      "Work on client delivery projects under mentor guidance",
      "Support unit testing and documentation"
    ],
    "skills": [
      "Aptitude",
      "Communication",
      "Basic Programming"
    ],
    "category": "IT",
    "featured": true,
    "apply": "https://ibegin.tcs.com/"
  },
  {
    "id": 3,
    "company": "Infosys",
    "title": "Infosys Systems Engineer Trainee",
    "location": "Bengaluru",
    "salary": "\u20b94.5 LPA",
    "experience": "0 Years",
    "qualification": "B.E / B.Tech (All Branches)",
    "date": "2026-07-23",
    "logo": "images/infosys.svg",
    "description": "Infosys is expanding its Systems Engineer Trainee program. Candidates will undergo foundation training at the Mysuru campus followed by placement in a technology vertical.",
    "responsibilities": [
      "Attend foundation and stream-specific training",
      "Build and support enterprise applications",
      "Collaborate with cross-functional delivery teams"
    ],
    "skills": [
      "Java",
      "Python",
      "Cloud Basics",
      "Communication"
    ],
    "category": "Software",
    "featured": true,
    "apply": "https://www.infosys.com/careers/"
  },
  {
    "id": 4,
    "company": "Amazon",
    "title": "Amazon Operations - Work From Home Associate",
    "location": "Remote",
    "salary": "\u20b93.2 LPA",
    "experience": "0-1 Years",
    "qualification": "Any Graduate",
    "date": "2026-07-22",
    "logo": "images/amazon.svg",
    "description": "Amazon is hiring remote Operations Associates to support seller and customer queries. This is a fully work-from-home role with flexible night and day shift options.",
    "responsibilities": [
      "Handle inbound customer and seller queries",
      "Log and track issue resolution in internal tools",
      "Meet quality and productivity targets"
    ],
    "skills": [
      "English Communication",
      "MS Excel",
      "Typing Speed"
    ],
    "category": "Work From Home",
    "featured": false,
    "apply": "https://www.amazon.jobs/"
  },
  {
    "id": 5,
    "company": "Google",
    "title": "Google STEP Internship 2026",
    "location": "Bengaluru",
    "salary": "\u20b980,000 / month",
    "experience": "Internship",
    "qualification": "Pursuing B.Tech / B.E (1st-3rd Year)",
    "date": "2026-07-21",
    "logo": "images/google.svg",
    "description": "The Student Training in Engineering Program (STEP) gives early-in-college students hands-on software engineering experience, mentorship, and exposure to Google-scale systems.",
    "responsibilities": [
      "Contribute code to a real Google product team",
      "Pair with a mentor engineer throughout the internship",
      "Present a final project demo to the team"
    ],
    "skills": [
      "C++",
      "Python",
      "Data Structures",
      "Algorithms"
    ],
    "category": "Internship",
    "featured": true,
    "apply": "https://buildyourfuture.withgoogle.com/programs/step"
  },
  {
    "id": 6,
    "company": "Wipro",
    "title": "Wipro Elite National Talent Hunt",
    "location": "Pune",
    "salary": "\u20b93.5 LPA - \u20b96.5 LPA",
    "experience": "0 Years",
    "qualification": "B.E / B.Tech / MCA",
    "date": "2026-07-20",
    "logo": "images/wipro.svg",
    "description": "Wipro's Elite hiring program recruits graduates for roles across application development, testing, and cloud engineering with a structured onboarding academy.",
    "responsibilities": [
      "Complete the WILP onboarding curriculum",
      "Develop and test modules for client applications",
      "Support production releases under guidance"
    ],
    "skills": [
      "Core Java",
      "SQL",
      "Aptitude"
    ],
    "category": "Software",
    "featured": false,
    "apply": "https://careers.wipro.com/"
  },
  {
    "id": 7,
    "company": "Accenture",
    "title": "Accenture Associate Software Engineer",
    "location": "Chennai",
    "salary": "\u20b94.5 LPA",
    "experience": "0 Years",
    "qualification": "B.Tech / B.E / MCA",
    "date": "2026-07-19",
    "logo": "images/accenture.svg",
    "description": "Accenture is hiring Associate Software Engineers for its Advanced Technology Centers, supporting global clients across banking, retail, and healthcare domains.",
    "responsibilities": [
      "Develop and maintain application modules",
      "Participate in agile sprint ceremonies",
      "Troubleshoot and resolve defects"
    ],
    "skills": [
      "Java",
      "JavaScript",
      "Agile",
      "SQL"
    ],
    "category": "Software",
    "featured": false,
    "apply": "https://www.accenture.com/in-en/careers"
  },
  {
    "id": 8,
    "company": "Capgemini",
    "title": "Capgemini Analyst - Digital Engineering",
    "location": "Mumbai",
    "salary": "\u20b94 LPA",
    "experience": "0 Years",
    "qualification": "B.E / B.Tech",
    "date": "2026-07-18",
    "logo": "images/capgemini.svg",
    "description": "Capgemini's Digital Engineering team is hiring analysts to work on modernisation projects for enterprise clients across Europe and the US.",
    "responsibilities": [
      "Assist in requirement analysis and design",
      "Write unit tests for delivered features",
      "Coordinate with onsite-offshore teams"
    ],
    "skills": [
      "Python",
      "REST APIs",
      "Git"
    ],
    "category": "Software",
    "featured": false,
    "apply": "https://www.capgemini.com/careers/"
  },
  {
    "id": 9,
    "company": "IBM",
    "title": "IBM Kickstart - Cloud Support Associate",
    "location": "Bengaluru",
    "salary": "\u20b95 LPA",
    "experience": "0-1 Years",
    "qualification": "B.Tech / BCA / MCA",
    "date": "2026-07-17",
    "logo": "images/ibm.svg",
    "description": "IBM Kickstart hires early-career technologists into cloud support and site-reliability roles, with rotational exposure to IBM Cloud and watsonx platforms.",
    "responsibilities": [
      "Monitor cloud infrastructure health and alerts",
      "Assist customers with technical support tickets",
      "Document root-cause analyses"
    ],
    "skills": [
      "Linux",
      "Cloud Computing",
      "Networking Basics"
    ],
    "category": "IT",
    "featured": false,
    "apply": "https://www.ibm.com/careers/"
  },
  {
    "id": 10,
    "company": "Cognizant",
    "title": "Cognizant GenC - Programmer Analyst Trainee",
    "location": "Coimbatore",
    "salary": "\u20b94 LPA",
    "experience": "0 Years",
    "qualification": "B.E / B.Tech / MCA / M.Sc",
    "date": "2026-07-16",
    "logo": "images/cognizant.svg",
    "description": "Cognizant's GenC program trains fresh graduates in full-stack development before deploying them to live client engagements across industries.",
    "responsibilities": [
      "Complete full-stack training curriculum",
      "Build features for client web applications",
      "Support QA and release cycles"
    ],
    "skills": [
      "Java",
      "React Basics",
      "SQL"
    ],
    "category": "Software",
    "featured": false,
    "apply": "https://careers.cognizant.com/"
  },
  {
    "id": 11,
    "company": "HCLTech",
    "title": "HCL TechBee - Diploma & PUC Program",
    "location": "Noida",
    "salary": "\u20b91.8 LPA (stipend + salary)",
    "experience": "0 Years",
    "qualification": "12th / Diploma",
    "date": "2026-07-15",
    "logo": "images/hcl.svg",
    "description": "TechBee is HCLTech's early-career program for 12th-pass and diploma students, combining paid on-the-job training with a path to a full-time technology role.",
    "responsibilities": [
      "Attend structured classroom and lab training",
      "Shadow engineers on live support tickets",
      "Complete quarterly skill assessments"
    ],
    "skills": [
      "Basic Computers",
      "English",
      "Aptitude"
    ],
    "category": "Internship",
    "featured": false,
    "apply": "https://www.hcltechbee.com/"
  },
  {
    "id": 12,
    "company": "Tech Mahindra",
    "title": "Tech Mahindra BPO - Customer Support Executive",
    "location": "Hyderabad",
    "salary": "\u20b92.4 LPA - \u20b93 LPA",
    "experience": "0-2 Years",
    "qualification": "Any Graduate / Undergraduate",
    "date": "2026-07-14",
    "logo": "images/techm.svg",
    "description": "Tech Mahindra is hiring Customer Support Executives for a voice-process account, handling telecom customer queries for a leading US client.",
    "responsibilities": [
      "Handle inbound and outbound customer calls",
      "Resolve billing and service queries",
      "Maintain call quality benchmarks"
    ],
    "skills": [
      "Voice Communication",
      "English",
      "Customer Handling"
    ],
    "category": "BPO",
    "featured": false,
    "apply": "https://careers.techmahindra.com/"
  },
  {
    "id": 13,
    "company": "Qualcomm",
    "title": "Qualcomm Graduate Engineer Trainee - Embedded Systems",
    "location": "Hyderabad",
    "salary": "\u20b99 LPA",
    "experience": "0 Years",
    "qualification": "B.Tech ECE / EEE",
    "date": "2026-07-20",
    "logo": "images/qualcomm.svg",
    "description": "Qualcomm's Hyderabad design center is hiring GETs to work on next-generation chipset firmware and embedded validation for mobile platforms.",
    "responsibilities": [
      "Develop and test embedded C firmware",
      "Debug hardware-software integration issues",
      "Collaborate with chip design teams"
    ],
    "skills": [
      "Embedded C",
      "RTOS",
      "Digital Electronics"
    ],
    "category": "Software",
    "featured": true,
    "apply": "https://www.qualcomm.com/company/careers"
  },
  {
    "id": 14,
    "company": "Citi",
    "title": "Citi Technology Analyst Program",
    "location": "Pune",
    "salary": "\u20b99.5 LPA",
    "experience": "0 Years",
    "qualification": "B.Tech / M.Tech (CSE/IT)",
    "date": "2026-07-20",
    "logo": "images/citi.svg",
    "description": "Citi's Technology Analyst Program recruits graduates into its global banking technology division, building systems that process millions of transactions daily.",
    "responsibilities": [
      "Develop banking application modules in Java",
      "Write automated test cases",
      "Follow secure coding and compliance standards"
    ],
    "skills": [
      "Java",
      "SQL",
      "Financial Domain Basics"
    ],
    "category": "Finance",
    "featured": true,
    "apply": "https://jobs.citi.com/"
  },
  {
    "id": 15,
    "company": "Deloitte",
    "title": "Deloitte Digital Marketing Analyst",
    "location": "Gurugram",
    "salary": "\u20b96 LPA",
    "experience": "0-1 Years",
    "qualification": "MBA / Any Graduate",
    "date": "2026-07-13",
    "logo": "images/deloitte.svg",
    "description": "Deloitte's Digital Marketing practice is hiring analysts to support campaign strategy, SEO, and analytics for consulting clients across sectors.",
    "responsibilities": [
      "Build and monitor digital marketing campaigns",
      "Analyse SEO and web traffic performance",
      "Prepare client-ready reporting decks"
    ],
    "skills": [
      "SEO",
      "Google Analytics",
      "Content Strategy"
    ],
    "category": "Marketing",
    "featured": false,
    "apply": "https://www2.deloitte.com/careers/"
  },
  {
    "id": 16,
    "company": "Government of Telangana",
    "title": "TS Public Service Commission - Junior Assistant",
    "location": "Hyderabad",
    "salary": "As per Govt. Pay Scale",
    "experience": "0 Years",
    "qualification": "Any Degree",
    "date": "2026-07-12",
    "logo": "images/govt.svg",
    "description": "TSPSC has released notification for Junior Assistant posts across various government departments in Telangana. Selection is through a written examination.",
    "responsibilities": [
      "Maintain departmental records and files",
      "Assist senior officers with correspondence",
      "Support public-facing service counters"
    ],
    "skills": [
      "General Knowledge",
      "Basic Computers",
      "Regional Language"
    ],
    "category": "Government",
    "featured": false,
    "apply": "https://tspsc.gov.in/"
  }
];
