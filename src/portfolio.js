/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Dann Dylan Del Prado",
  title: "Dann Dylan Del Prado",
  subTitle:
    "CompTIA A+ certified with 9 years of experience in IT, specializing in hardware and software configuration, OS image deployment, and technical services. Strong background in programming with experience building and maintaining web-based solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1SQGT2-RYeMwZWsZ_FnieFHk1HcT6DeFH/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  gmail: "ddanndylan@gmail.com",
  github: "https://github.com/danndylan",
  linkedin: "https://www.linkedin.com/in/dylan-del-prado-35523523a/",
  gitlab: "https://gitlab.com/ddanndylan",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/7420317/dylan",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "EXPERIENCED IN PROGRAMMING AND JUST ABOUT ANYTHING WITH COMPUTERS!",
  skills: [
    emoji(
      "⚡ Configure and troubleshoot various computer devices from servers to mobile phones"
    ),
    emoji(
      "⚡ Develop web applications - professional work or personal projects"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  programmingSkills: [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "NodeJs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "NPM",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "Laravel",
      fontAwesomeClassname: "fab fa-laravel"
    },
    {
      skillName: "SQL Database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Redis",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "HTML-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git"
    }
  ],
  managementSkills: [
    {
      skillName: "Microsoft Office",
      fontAwesomeClassname: "fab fa-microsoft"
    },
    {
      skillName: "JIRA",
      fontAwesomeClassname: "fab fa-jira"
    },
    {
      skillName: "Confluence",
      fontAwesomeClassname: "fab fa-confluence"
    }
  ],
  technicianSkills: [
    {
      skillName: "Linux",
      fontAwesomeClassname: "fab fa-brands fa-linux"
    },
    {
      skillName: "Windows",
      fontAwesomeClassname: "fab fa-brands fa-windows"
    },
    {
      skillName: "MacOS",
      fontAwesomeClassname: "fab fa-brands fa-apple"
    },
    {
      skillName: "Cisco Meraki",
      fontAwesomeClassname: "fa fa-solid fa-wifi"
    },
    {
      skillName: "Genetec Security",
      fontAwesomeClassname: "fa fa-solid fa-user-shield"
    },
    {
      skillName: "Axis Cameras",
      fontAwesomeClassname: "fa fa-solid fa-video"
    },
    {
      skillName: "HP Servers",
      fontAwesomeClassname: "fa fa-solid fa-server"
    },
    {
      skillName: "NCR Point of Sale",
      fontAwesomeClassname: "fa fa-solid fa-cash-register"
    },
    {
      skillName: "Printers",
      fontAwesomeClassname: "fa fa-solid fa-print"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Central Luzon State University",
      logo: require("./assets/images/clsu-logo-green.png"),
      subHeader: "Bachelor's Degree in Information Technology",
      duration: "June 2012 - June 2017",
      desc: "Graduated with diploma and published documentation for special project development.",
      descBullets: []
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Web Development",
      progressPercentage: "80%"
    },
    {
      Stack: "Operating Systems and Hardware",
      progressPercentage: "90%"
    },
    {
      Stack: "Project Management", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Computer Services Technician II",
      company: "Quantum Lifecycle Partners",
      companylogo: require("./assets/images/QuantumLogoJPEG.jpg"),
      date: "August 2022 – Present",
      desc: "Toronto, ON",
      descBullets: [
        "Configure and deploy high volumes of IT equipment for 2–5 new Starbucks locations monthly, while providing device reconfiguration support for existing stores.",
        "Deploy image and enroll thousands of laptops and Chromebooks for district school boards including York Region District School Board (YRDSB) and Toronto Catholic District School Board (TCDSB).",
        "Update and enroll 2,000+ mobile devices annually in Samsung Knox MDM for CBI Health.",
        "Configure hardware and BIOS setup on data center servers before deployment.",
        "Wipe hard drives and test components of various refurbished laptop brands and models.",
        "Review and improve technical parts of work instructions from clients and internal teams.",
        "Maintain documentation of all tasks completed for Quality Assurance.",
        "Provide timeline estimates of tasks in large orders for Project Managers.",
        "Prepare Bill of Lading documents for the Shipping team."
      ]
    },
    {
      role: "Mid-Level Web Developer",
      company: "Cafe24 Philippines, Inc.",
      companylogo: require("./assets/images/cafe24.png"),
      date: "August 2017 – April 2022",
      desc: "Pasig, Metro Manila",
      descBullets: [
        "Designed and developed features for Cafe24 e-malls using multiple programming languages, utilizing various frameworks and libraries.",
        "Led development efforts on API integrations and performance optimizations for Cafe24 Recipe platform focused on automating tasks in e-mall applications.",
        "Managed a small team of junior developers, delegating tasks and ensuring code quality and timely project delivery.",
        "Conducted code reviews, project timeline estimations, and contributed to the evolution of internal coding standards and best practices.",
        "Collaborated with senior developers to develop features and improvements in existing systems, both client facing apps and internal tools.",
        "Undergone training by developing features using PHP, JavaScript, MySQL, HTML and CSS."
      ]
    },
    {
      role: "Full-Stack Developer",
      company: "Anida",
      companylogo: require("./assets/images/anida.png"),
      date: "July 2022 – August 2022",
      desc: "Toronto, ON",
      descBullets: [
        "Developed and maintained the organization's official website using Node.js.",
        "Refactored database schema and improved the performance and scalability of the back-end infrastructure."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "PROJECTS I WORKED ON PROFESSIONALLY AND VOLUNTARY",
  projects: [
    {
      image: require("./assets/images/anida.webp"),
      projectName: "Anida",
      projectDesc:
        "Contributed as a volunteer to the organization's official website.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://anida.org/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/cafe24 recipe.webp"),
      projectName: "Cafe24 Recipe",
      projectDesc:
        "A dedicated platform for Cafe24 e-malls that automates functionalities for owners.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://recipe.cafe24.com/"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certification 🎖️ "),
  subtitle: "Industry certifications and technical achievements!",

  achievementsCards: [
    {
      title: "CompTIA A+ (Core 1 & Core 2)",
      subtitle: "Earned May 2026.",
      image: require("./assets/images/compTIAA+.png"),
      imageAlt: "CompTIA A+",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/1tAReYOLxxKuleOWq57FS604gOEJiM6jb/view?usp=drive_link"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (403)-707-5896",
  email_address: "ddanndylan@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
