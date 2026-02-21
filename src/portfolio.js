const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "SEMANTIC ERROR",
};

const about = {
  //All the properties are optional - can be left empty or deleted
  name: "Kaushal Sharma",
  role: "Software Engineer",
  description:
    "Long Distance Cyclist, Runner and Hobbyist Pianist. I love playing chess and building stuff in my free time.",
  resume: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/kaushal-sharma-558681128/",
    github: "https://github.com/iamkaushal",
    kaggle: "https://www.kaggle.com/imkaushal",
    instagram: "https://www.instagram.com/semantic_error",
    chess: "https://www.chess.com/member/imkaushal",
    strava: "https://www.strava.com/athletes/iamkaushal",
    stackoverflow: "https://stackoverflow.com/users/7939593/kaushal-sharma",
  },
};

const experiences = [
  {
    company: "Unify Technologies",
    type: "Full-time",
    location: "Gurugram, Haryana, India · Remote",
    roles: [
      {
        title: "Senior Software Engineer",
        subtitle: "Contingent worker @ Meta",
        time: "Dec 2023 - Feb 2026 · 2 yrs 3 mos",
        description:
          "Core contributor to Aria Studio. Engineered a cross-platform application across Linux, Windows and Mac powered by fast, scalable FastAPI services that held up when it mattered. Built parsers to extract raw VRS file data into usable streams across multiple sensors including IMU, SLAM cameras, RGB camera, audio and GPS from Meta Aria Glasses. Brought that data to life with real-time visualization using Rerun. Contributed to MPS and AR/VR services, building the backend infrastructure behind some of Meta's most ambitious bets.",
        skills: ["Python", "React.js", "FastAPI", "Rerun"],
      },
    ],
  },
  {
    company: "Zydelo",
    type: "Full-time · 2 yrs 8 mos",
    location: "Alpharetta, Georgia, United States · Remote",
    roles: [
      {
        title: "Senior Software Engineer",
        time: "May 2022 - Dec 2023 · 1 yr 8 mos",
        projects: [
          {
            name: "Scalable Web Services",
            description:
              "Owned backend development end to end. Architected and shipped high-performance APIs using Python, Django Rest Framework, PostgreSQL, Elasticsearch, Redis and Docker, serving both internal products and external clients without missing a beat. Took junior developers under wing, ran code reviews and built a culture of engineering excellence that outlasted any single project.",
          },
        ],
        skills: [
          "Docker",
          "Git",
          "Python",
          "Django",
          "Django Rest Framework",
          "React",
          "PostgreSQL",
          "Elasticsearch",
          "Redis",
          "Redux",
          "Code Reviews",
          "Mentoring",
        ],
      },
      {
        title: "Software Engineer",
        time: "May 2021 - May 2022 · 1 yr 1 mo",
        projects: [
          {
            name: "Infrastructure Provisioning",
            description:
              "Eliminated nearly all manual infrastructure work. Built end-to-end automation for provisioning and configuring AWS services using Terraform and Ansible. 99% reduction in manual effort. The kind of work that quietly saves the team thousands of hours and nobody has to think about it again.",
          },
        ],
        skills: [
          "Docker",
          "Git",
          "AWS",
          "Terraform",
          "Ansible",
          "EC2",
          "PostgreSQL",
          "Redis",
          "S3",
          "VPC",
          "boto3",
        ],
      },
    ],
  },
  {
    company: "Wipro Limited",
    type: "Full-time",
    location: "Gurugram, Haryana, India · On-site",
    roles: [
      {
        title: "Project Engineer",
        time: "Jul 2019 - May 2021 · 1 yr 11 mos",
        projects: [
          {
            name: "Enterprise Data Warehousing",
            description:
              "Delivered an Enterprise Data Warehouse for one of the largest public sector banks in the country, end to end. Didn't stay in one lane. Wrote ETL jobs in SAS and IBM DataStage, managed scheduling, and owned production monitoring. The kind of project where you touch every layer and understand how the whole machine works.",
          },
          {
            name: "Web service Integration of ML and Django",
            description:
              "Bridged the gap between machine learning and business intelligence. Built Django REST APIs that connected the ML pipeline directly to the existing BI dashboard, replacing a clunky workflow where the BI team was pulling ML data through Excel files and REST endpoints manually. Result: the BI team went from wrestling with spreadsheets to generating reports, slicing data and pulling insights on demand. Faster decisions, zero bottlenecks.",
          },
          {
            name: "Fraud Detection POC",
            description:
              "Worked side by side with the core FRMS team to rethink how fraudulent transactions and accounts get detected. Didn't just discuss methodologies, built a working POC. Ran XGBoost, CatBoost and Random Forest on massive datasets, analysed ensemble models and benchmarked what performed best under real-world conditions. From whiteboard to working prototype.",
          },
        ],
        skills: [
          "Java",
          "Git",
          "SAS",
          "IBM DataStage",
          "Python",
          "Django",
          "DRF",
          "XGBoost",
          "Oracle",
        ],
      },
    ],
  },
  {
    company: "LawFacto",
    type: "Internship",
    location: "New Delhi, India · Remote",
    roles: [
      {
        title: "Software Developer Intern",
        time: "Jan 2018 - Mar 2018 · 3 mos",
        description:
          "Engineered the REST APIs that power the official mobile app and website for the Delhi High Court and Supreme Court of India, delivering court orders, judgments, display boards, bar notifications and event updates to the legal community in real time. The app was officially launched in the presence of Sh. Arun Jaitley, Hon'ble Minister of Finance and Corporate Affairs, Government of India. Code that runs in courtrooms. Doesn't get more real than that.",
        links: [
          {
            label: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.auribises.dhcba",
          },
          {
            label: "App Store",
            url: "https://apps.apple.com/in/app/dhcba-official/id1326761861",
          },
        ],
      },
    ],
  },
];

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "VSB Power Line Fault Detection",
    description:
      "Exploratory Data Analysis on VSB Power line partial discharge patterns in signals acquired from these power lines with a new meter designed at the ENET Centre at VSB to derive POC for continuously monitoring and predicting power line faults.",
    stack: ["Numpy", "Pandas", "Python", "MatPlotLib"],
    sourceCode:
      "https://github.com/iamkaushal/VSB-Power-Line-Fault-Detection-EDA",
    livePreview:
      "https://www.kaggle.com/imkaushal/power-line-fault-detection-eda-feature-engineering/notebook",
  },

  {
    name: "Netflix Movie Recommendation System",
    description:
      "Designed a collaborative movie recommendation system using matrix Factorization and movie-movie cosine-similarity matrix and used RMSE as the metric",
    stack: [
      "Feature Engineering",
      "Matrix Factorization",
      "Recommendation Engine",
    ],
    sourceCode:
      "https://github.com/iamkaushal/Netflix-Movie-Recommender-System/blob/main/Netflix%20Movie%20Recommender%20.ipynb",
    livePreview:
      "https://github.com/iamkaushal/Netflix-Movie-Recommender-System/blob/main/Netflix%20Movie%20Recommender%20.ipynb",
  },

  // {
  //   name: "Haberman's Dataset: Exploratory Data Analysis",
  //   description: '',
  //   stack: [
  //     'Pandas',
  //     'MatPlotLib',
  //     'Seaborn',
  //     'Feature Engineering',
  //     'Data Visualization',
  //   ],
  //   sourceCode:
  //     'https://www.kaggle.com/imkaushal/haberman-s-dataset-exploratory-data-analysis',
  //   livePreview:
  //     'https://www.kaggle.com/imkaushal/haberman-s-dataset-exploratory-data-analysis',
  // },

  {
    name: "EDA and TSNE on Donor Choose Dataset",
    description:
      "Exploratory Data Analysis and Feature Engineering for classification of Application for DonorChoose.org dataset. Used various techniques like t-SNE for visualization of high dimensional data points.",
    stack: ["TSNE", "Exploratory Data Analysis", "Python"],
    sourceCode:
      "https://www.kaggle.com/imkaushal/eda-and-tsne-on-donor-choose-dataset",
    livePreview:
      "https://www.kaggle.com/imkaushal/eda-and-tsne-on-donor-choose-dataset",
  },
];

const researches = [
  //Projects can be added and removed
  //If there are no projects, the Projects section won't show up
  {
    name: "Kaushal Sharma, D. Chaudhary, R. Gupta, R. Kapoor. (2018). Voice-based application designed for visually impaired people and enabling them to use email services.",
    description:
      "In Proceedings of the 12th INDIACom; INDIACom-2018; IEEE Conference ID: 42835. 2018 5th International Conference on “Computing for Sustainable Global Development”, New Delhi, India",
    // stack: ['Numpy', 'Pandas', 'Python', 'MatPlotLib'],
    // sourceCode:
    // 'http://bvicam.in/INDIACom/news/INDIACom%202018%20Proceedings/Main/papers/2956.pdf',
    livePreview:
      "http://bvicam.in/INDIACom/news/INDIACom%202018%20Proceedings/Main/papers/2956.pdf",
  },
  {
    name: "Kaushal Sharma, D. Chaudhary. (2019). Hindi Handwritten Character Recognition using Deep Convolution Neural Network.",
    description:
      "In Proceedings of the 13th INDIACom; INDIACom-2019; IEEE Conference ID: 46181.2019 6th International Conference on “Computing for Sustainable Global Development”, New Delhi, India",
    // stack: ['TSNE', 'Exploratory Data Analysis', 'Python'],
    // sourceCode: 'https://ieeexplore.ieee.org/document/8991403',
    livePreview: "https://ieeexplore.ieee.org/document/8991403",
  },
];

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  "Python",
  "JavaScript",
  "TypeScript",
  "Django",
  "React",
  "Redux",
  "Data Structures",
  "Algorithms",
  "Machine Learning",
  "Deep Learning",
  "Elastic Search",
  "Docker",
  "Django Rest Framework",
  "AWS",
  "FastAPI",
  "Design Patterns",
  "Microservices",
  "SQL",
];

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: "kaushalsharma880@gmail.com",
};

export { header, about, experiences, projects, researches, skills, contact };
