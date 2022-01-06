const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: "/",
  title: "SEMANTIC ERROR",
};

const about = {
  // all the properties are optional - can be left empty or deleted
  name: "Kaushal Sharma",
  role: "Software Engineer",
  description:
    "Long Distance Cylist, Runner and Hobbyist Pianist. I love playing chess and building stuff in my free time.",
  resume: "/resume.pdf",
  social: {
    linkedin: "https://www.linkedin.com/in/kaushal-sharma-558681128/",
    github: "https://github.com/iamkaushal",
    kaggle: "https://www.kaggle.com/imkaushal",
    instagram: "https://www.instagram.com/semantic_error",
    chess: "https://github.com/iamkaushal",
    strava: "https://www.strava.com/athletes/iamkaushal",
    stackoverflow: "https://stackoverflow.com/users/story/7939593",
  },
};

const experiences = [
  {
    company: "Zydelo Inc.",
    time: "May 2021 - Present",
    projects: [
      {
        name: "Scalable Web Services",
        description:
          "Lead the end to end development of scalable and robust back-end APIs for the in-house products and multiple clients. Mentored junior developers and helped with code reviews and best practices. Tech stack used Python, Django Rest Framework, PostgreSQL, Elastic Search, Redis, Docker",
        stack: [
          "Python",
          "Django",
          "Django Rest Framework",
          "React",
          "PostgreSQL",
          "Elastic Search",
          "Docker",
          "Redux",
          "Redis",
          "Git",
        ],
      },
      {
        name: "Infrastructure Provisioning",
        description:
          "Automated provisioning and configuring of Infrastructure on Amazon Web Services, using Terraform and Ansible. Reduced the manual effort for provisioning and configuration of services by 99%",
        stack: [
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
    time: "July 2019 - May 2021",
    projects: [
      {
        name: "Enterprise Data Warehousing",
        description:
          "Implemented Enterprise Data Warehouse for one of the largest public sector banks in the country. Worked in multiple role varying from writing ETL jobs in SAS and IBM Datastage to Scheduling and Monitoring of jobs in Production environment.",
        stack: ["IBM Data Architect", "SAS DI", "Oracle Dbeaver"],
      },
      {
        name: "Web service Integration of ML and Django",
        description:
          "Developed web services, Django REST api which integrated the data flow from ML pipeline to the existing Business Intelligence Dashboard. Earlier, Business Intelligence team was directly consuming the ML data via REST end points using Excel files, thereby reducing the flexibility to get data insights. Enhanced the BI dashboard which consumed this ML data and provided BI team to easily generate different reports, data insights, etc",
        stack: ["Python", "Django", "DRF", "sklearn", "Git", "PostgreSQL"],
      },
      {
        name: "Fraud Detection POC",
        description:
          "Worked with core FRMS team, discussed various methodologies involving detection of Fraudulent Transactions and accounts. Did POC using various ML algorithms like XGboost, CatBoost, Random Forest on huge datasets. Analysed emsembled models also.",
        stack: [
          "sklearn",
          "numpy",
          "matplotlib",
          "pandas",
          "XGBoost",
          "Jupyter Notebook",
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
  //   name: "Haberman's Dataset : Exploratory Data Analysis",
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
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: "Kaushal Sharma, D. Chaudhary,R. Gupta, R. Kapoor. (2018). Voice based application designed for visually impaired people and enabling them to use email services.",
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
