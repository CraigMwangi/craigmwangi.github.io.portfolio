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
  username: "Craig Mwangi",
  title: "Hi! I'm Craig!",
  subTitle: emoji(
    "Graduate Software Developer with hands-on experience building web and mobile apps using JavaScript, React, Node.js, and Firebase. Focused on clean code, scalability, and delivering real business value."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // CV LINK
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/CraigMwangi",
  linkedin: "https://www.linkedin.com/in/craig-mwangi-404208166",
  gmail: "craigmwangi1@gmail.com",
  gitlab: "https://gitlab.com/CraigMwangi",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Creative and computing solutions for Businesses, Markets and Individuals",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean, Google API's, Youtube API's, Spotify API's"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Goldsmiths University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Bachelors of Science- Upper Division Second Class Honours in Business Computing and Entrepreneurship",
      duration: "September 2020 - April 2024",
      desc: "Developed apps and delivered projects with an entreprenuerial mindset to maximise and achieve business goals.",
      descBullets: [
        "Practical experience with digital technologies and computing",
        "Critical thinking and problem-solving in tech-driven contexts",
        "Exposure to major business areas: IT, finance, marketing, and management",
        "Awareness of emerging tech trends and their business impact"
      ]
    },
    {
      schoolName: "St Anselm's Catholic School",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "A Level Business & BTEC Information Technology",
      duration: "September 2018 - June 2020",
      desc: "Achieved the highest merit of Distinction within Information Technology and performed top of the class in Business",
      descBullets: [
        "Understanding of business operations, finance, and marketing", 
        "Analytical thinking and decision-making based on real-world data", 
        "Understanding of cybersecurity, data management, and cloud computing", 
        "Experience with software development and web technologies"
      ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Creativity", //Insert stack or technology you have experience in
      progressPercentage: "110%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Customer Advisor",
      company: "Three",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "September 2020 – Present",
      desc: "Focus on understanding individual customer needs, providing tailored solutions, and delivering excellent service to enhance the customer experience.",
      descBullets: [
 " • Consistently achieved store and personal KPI’s to ensure the business met volume."
 " • Built strong customer-facing skills, with a focus on digital upgrades and device support."
 " • Routinely adapted to in-store systems, delivering accurate diagnostics and personalised solutions."
 " • Demonstrated problem-solving and collaborative skills under pressure."
      ]
    },
    {
      role: "Customer Assistant",
      company: "Morrisons",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "May 2020 – September 2020",
      desc: "Responsible for providing excellent customer service and maintaining the smooth operation of the store during the pandemic."
    },
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "My Projects",
  subtitle: "All projects created by Craig Mwangi.",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Gigify",
      projectDesc: "• A full-stack application for discovering live and local performances by unsigned artists. • Features included user-uploaded gigs, artist profiles, and location-based discovery. • Focused on UI/UX simplicity and artist empowerment.",
      footerLink: [
        {
          name: "Gigify",
          url: "https://craigmwangi.github.io/Gigify2",
          
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Beatify",
      projectDesc: "• Instantly search YouTube for instrumentals by tag or artist style." "• View original video links and descriptions with no distractions." "• Powered by YouTube & Firebase - fast, server-side API with cached beat data for performance.",
      footerLink: [
        {
          name: "Beatify",
          url: "https://craigmwangi.github.io/Beatify1",
          
        }
        //  you can add extra buttons here.
      ]
    },

  
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "MyTaskApp",
      projectDesc: "• A simple web-based to-do application built with Flask. • Allows users to add tasks, categorize them, set a priority level, and a deadline. • Mark tasks as completed or delete them.",
      footerLink: [
        {
          name: "MyTaskApp",
          url: "https://craigmwangi.github.io/MyTaskApp",
        }
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
      title: "March on Canterbury",
      subtitle:
        "Organised and led a major community event in support of Black Lives Matter with 1000+ attendees, securing support from figures such as the Archbishop of Canterbury and local government.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Image of attendees on the March on Canterbury event",
      footerLink: [
        {
          name: "Kent Online Article",
          url: "https://www.kentonline.co.uk/kent/news/thousands-march-in-black-lives-matter-protests-228693/"
      ]
    },
    {
      title: "Add another",
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
      title: "Add another",
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
  display: true // Set false to hide this section, defaults to true
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
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project, job or just want to say hi? My Inbox is open for all.",
  email_address: "craigmwangi1@gmail.com"
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
  isHireable,
  resumeSection
};
