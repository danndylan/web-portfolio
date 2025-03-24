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
    "Web Developer with 5+ years of experience specializing in e-commerce platforms and API integrations. Proficient in JavaScript, PHP, MySQL, and RESTful APIs. Currently working as a Computer Technician for 3 years, providing tech solutions to government and private clients.",
  resumeLink:
    "https://drive.google.com/file/d/1VrhRLiCh8SRpeQFN2s4U32mFIWld9bwr/view?usp=drive_link", // Set to empty to hide the button
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
    "EXPERIENCED WITH JAVASCRIPT AND PHP BACKEND FRAMEWORKS AND JUST ABOUT ANYTHING WITH COMPUTERS!",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
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
      skillName: "SQL Database",
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
      fontAwesomeClassname: "fab fa-wifi"
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
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "50%" //Insert relative proficiency in percentage
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
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
    },
    {
      role: "Computer Technician",
      company: "DCR Systems Group Inc.",
      companylogo: require("./assets/images/dcr.png"),
      date: "August 2022 – Present",
      desc: "Toronto, ON",
      descBullets: [
        "Update, image, and configure software and hardware of various computer devices for different scale of orders, following provided work instructions and quality control documents.",
        "Validate and improve technical parts of work instructions from clients and internal teams.",
        "Maintaining documentation of all tasks completed in an order to ensure consistency.",
        "Providing timeline estimates for tasks in large orders.",
        "Supported lab functions in the warehouse, assisting with device management and other duties."
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
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
