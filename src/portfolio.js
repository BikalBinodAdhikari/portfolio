/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to false if you don't want Splash screen.
};

//Home Page
const greeting = {
  title: "Bikal Binod Adhikari",
  logo_name: "Bikal Binod Adhikari",
  nickname: "parad0x",
  subTitle:
    "Seeking for more knowledge with the following skills: Full stack Development-MERN (MongoDB, Express, React, Node), SQL & iOS Application Development.",
  resumeLink:
    "https://drive.google.com/file/d/1ekwmgLUpwZDPjf1T4RQ9bYZeNHlrhjtg/view?usp=sharing",
  portfolio_repository: "https://github.com/BikalBinodAdhikari",
};

const socialMediaLinks = [
  /* Your Social Media Link */
  // github: "https://github.com/BikalBinodAdhikari",
  // linkedin: "https://www.linkedin.com/in/bikalbinodadhikari",
  // gmail: "bikalbinodadhikari@gmail.com",
  // gitlab: "https://gitlab.com/bikalbinodadhikari",
  // facebook: "https://www.facebook.com/bikalbinodadhikari",

  {
    name: "Github",
    link: "https://github.com/BikalBinodAdhikari",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/bikalbinodadhikari",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },

  {
    name: "Gmail",
    link: "mailto:bikalbinodadhikari@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "https://twitter.com/bikalbinodadhikari",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/bikalbinodadhikari",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building resposive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            color: "#02569B",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Laravel",
          fontAwesomeClassname: "logos-laravel",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "logos-php",
          style: {
            color: "#2C8EBB",
          },
        },
      ],
    },

    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Digital Ocean",
          fontAwesomeClassname: "logos-digital-ocean",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
    {
      title: "iOS Application Development",
      fileName: "IosDevImg",
      skills: [
        "⚡ Building resposive and blazingly fast iOS Application using UIKit and SwiftUI",
        "⚡ Developing website using vapor for server side development",
        "⚡ Submitting developed application to AppStore",
      ],
      softwareSkills: [
        {
          skillName: "Swift",
          fontAwesomeClassname: "vscode-icons:file-type-swift",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "iOS",
          fontAwesomeClassname: "logos-ios",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "AppStore",
          fontAwesomeClassname: "cib-app-store-ios",
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "logos-firebase",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "vscode-icons:file-type-mongo",
          style: {
            color: "#02569B",
          },
        },
      ],
    },

    {
      title: "Content Management System",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly SEO friendly themes for a service",
        "⚡ Experience of working with few customers worldwide",
        "⚡ Changing the theme upon the requirements of the client",
      ],
      softwareSkills: [
        {
          skillName: "WordPress",
          fontAwesomeClassname: "dashicons-wordpress",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Drupal",
          fontAwesomeClassname: "fa-brands:drupal",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Joomla",
          fontAwesomeClassname: "logos-joomla",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Magento",
          fontAwesomeClassname: "logos-magento",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PrestaShop",
          fontAwesomeClassname: "logos-prestashop",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        "⚡ Designing highly attractive user interface for mobile and web applications",
        "⚡ Customizing logo designs and building logos from scratch",
        "⚡ Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe Photoshop",
          fontAwesomeClassname: "cib-adobe-photoshop",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
        {
          skillName: "Adobe Illustrator",
          fontAwesomeClassname: "simple-icons:adobeillustrator",
          style: {
            color: "#FF7C00",
          },
        },
        {
          skillName: "Inkscape",
          fontAwesomeClassname: "simple-icons:inkscape",
          style: {
            color: "#000000",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/bikalbinodadhika",
    },
    {
      siteName: "Codechef",
      iconifyClassname: "simple-icons:codechef",
      style: {
        color: "#5B4638",
      },
      profileLink: "https://www.codechef.com/users/bikalbinod",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "Nepal College of Information Technology, Lalitpur",
      subtitle: "B.E Software Engineering",
      logo_path: "NCIT_LOGO.png",
      alt_name: "Nepal College of Information Technology, Lalitpur",
      duration: "2017 - Present",
      descriptions: [
        "⚡ I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        "⚡ Apart from this, I have done courses on Deep Learning, Data Science, Cloud Computing and Full Stack Development.",
        "⚡ I have completed iOS Application Development",
        "⚡ I have completed Graphics Designing using Adobe Illustrator and Adobe Photoshop",
      ],
      website_link: "https://ncit.edu.np/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Machine Learning",
      subtitle: "- Andrew Ng",
      logo_path: "stanford_logo.png",
      certificate_link: "https://www.coursera.org/",
      alt_name: "Stanford University",
      color_code: "#8C151599",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship and Volunteership",
  description:
    "I have worked with many evolving startups as IT Officer and junior Developer, Designer and Lead Software Engineer. I have also worked with some well established companies mostly as Fullstack Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "IT Officer",
          company: "Aarambha Infosys Pvt. Ltd",
          company_url: "http://aarambhainfosys.com.np/",
          logo_path: "Aarambha.png",
          duration: "June 2018 - PRESENT",
          location: "Bhaktapur, Nepal",
          description:
            "I worked here as an IT Officer. My role here was to look after the all the Information Technology related stuffs. Handeling website and developing website was my key role here.",
          color: "#0879bf",
        },
        {
          title: "IT Officer",
          company: "Shinetechnocrats Pvt. Ltd",
          company_url: "http://shinetechnocrats.com.np/",
          logo_path: "shinetechnocrats.png",
          duration: "June 2018 - PRESENT",
          location: "Bhaktapur, Nepal",
          description:
            "I worked here as an IT Officer. My role here was to look after the all the Information Technology related stuffs. Handeling website and developing website was my key role here.",
          color: "#0879bf",
        },
        {
          title: "Fullstack Developer",
          company: "RARA Foods",
          company_url: "http://rarafoods.com",
          logo_path: "rara-foods.png",
          duration: "2019 - PRESENT",
          location: "Marrickville, Australia",
          description:
            "I have created a food delivery system using MEARN stack for my client. And I'm currently the person to look after this system. It is in development phase which allows users to order foods like in Uber-Eats..",
          color: "#9b1578",
        },
        {
          title: "Web Developer",
          company: "Jana Kalyan Yuwa Samiti",
          company_url: "http://jkyc.org.np/",
          logo_path: "freecopy_logo.png",
          duration: "Nov 2017 - PRESENT",
          location: "Chandranigahapur, Rautahat",
          description:
            "Jana Kalyan Yuwa Samiti is a NGO which have been uplifting the society by bringing different programmes for the people living in terai.",
          color: "#fc1f20",
        },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "MERN stack Developer",
          company: "Silicontech Nepal Pvt. Ltd.",
          company_url: "http://silicontechnepal.com.np",
          logo_path: "silicon.png",
          duration: "Dec 2020 - Present",
          location: "Koteshwor, Kathmandu",
          description:
            "I'm currently a MERN stack Developer intern in Silicontech Nepal Pvt. Ltd.",
          color: "#ee3c26",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title:
            "International Youth Conference on Science, Technology and Innovation",
          company: "Nepal Government",
          company_url: "http://202.45.147.168/news/45",
          logo_path:
            "International Youth Conference on Science, Technology and Innovation.png",
          duration: "June 2019 - April 2020",
          location: "",
          description:
            "International Youth Conference on Science, Technology and Innovation iwas a platform where many innovative ideas were explored. People around the globe came and participated in this event. I got opportunity to be a volunteer in this event.",
          color: "#4285F4",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "Bikal Binod Adhikari.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with React, iOS Development, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Blogs",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://adhikaribikalbinod.com.np/blog",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Mahadevsthan Marga, Koteshwor, Kathmandu, Nepal",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/uxqSn8KvkmsYDkgz7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+977-9865050791",
  },
};

export {
  settings,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  contactPageData,
};
