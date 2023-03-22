import homebg from "./Assets/home-bg.png";
import digilogo from "./Assets/sponsorsLogos/digilogo.png";
import devfolio from "./Assets/sponsorsLogos/devfolio_white.png";
import filecoin from "./Assets/sponsorsLogos/filecoin_white.png";
import solana from "./Assets/sponsorsLogos/solana_white.png";
import polygon from "./Assets/sponsorsLogos/polygon_white.png";
import ieee from "./Assets/sponsorsLogos/ieee_white.png";
import ieee_cs from "./Assets/sponsorsLogos/IEEE-CS_white.png";
import shutterbugs from "./Assets/sponsorsLogos/shutterbugs.png";
import alan from "./Assets/sponsorsLogos/alan.png";
import koii from "./Assets/sponsorsLogos/koii.png";
// import celo from "./Assets/sponsorsLogos/celo.png";
import echo3d from "./Assets/sponsorsLogos/echo3d.png";
import streamyard from "./Assets/sponsorsLogos/streamyard1.JPG";
import wolfram from "./Assets/sponsorsLogos/wolfram.jpg";
import gfg from "./Assets/sponsorsLogos/gfg.png";
import gdg_dgp from "./Assets/sponsorsLogos/gdg_dgp.png";
import gdg_kol from "./Assets/sponsorsLogos/gdg_kol.png";
import lemon_grass from "./Assets/sponsorsLogos/lemon_grass.png";
import rosenfeld from "./Assets/sponsorsLogos/rosenfeld.jpeg";
import wiley from "./Assets/sponsorsLogos/wiley_white.png";
import grabon from "./Assets/sponsorsLogos/grabon.png";
import give_my_cert from "./Assets/sponsorsLogos/give_my_cert.png";
import axure from "./Assets/sponsorsLogos/axure.png";
import certopus from "./Assets/sponsorsLogos/certopus.png";
import prayosys from "./Assets/sponsorsLogos/prayosys.png";
import shivalika from "./Assets/sponsorsLogos/shivalika.JPG";
import shivam from "./Assets/sponsorsLogos/shivam.JPG";
import jay_maharaj from "./Assets/sponsorsLogos/jay_maharaj.jpeg";
import jay_bhavani from "./Assets/sponsorsLogos/jay_bhavani.jpeg";
import maruti from "./Assets/sponsorsLogos/maruti.jpeg";
import replit from "./Assets/sponsorsLogos/replit_white.png";
import taskade from "./Assets/sponsorsLogos/taskade.png";
import interviewbuddy from './Assets/sponsorsLogos/ib.png'
import digitalocean from './Assets/sponsorsLogos/do.png'
import cuvette from './Assets/sponsorsLogos/cuvette.png'
import postman from './Assets/sponsorsLogos/pm.svg'

import zenisha from "./Assets/teami/Zenisha_Savaliya.jpeg";
import dhruvi from "./Assets/teami/Dhruvi_Sherathiya.jpg";

import me from "./Assets/teami/Vashishth_Patel.jpg";
import dharmesh from "./Assets/teami/Dharmesh_Poriya.jpg";
import Ryah from "./Assets/teami/Ryah.jpg";
import nirali from "./Assets/teami/Nirali.jpeg";
import smit from "./Assets/teami/smit.jpeg";
import manav from "./Assets/teami/manav.jpg";
// import ruchit from "./Assets/teami/Ruchit_Parekh.jpg";
import parshwa from "./Assets/teami/Parshwa_Mehta.jpg";
import ayush from "./Assets/teami/Ayush_Rudani.jpg";
import aneri from "./Assets/teami/Aneri_Sonani.jpg";








const TOP_SECTION = {
  TITLE: "HACKHUSTLE",
  Typed_effect: ["25 March - 26 March", "Win awesome prizes", "Events And Sessions"],
  SHORT_DESCRIPTION:
    "Join us on 25th and 26th of March 2023 for 2 days of creation, innovation, & fun.",
  IMG_SRC: homebg,
  DISCORD_LINK: "https://discord.gg/cvHPEK7U3v",
  JUDGES_FORM_LINK:
    "#Jugdes Form Link",
  HACKERS_REGISTRATION_FORM_LINK:
    "#Hackers Registration devfolio link"
};

const SOCIALS = {
  instagram: "https://www.instagram.com/ieeesb_nitdgp/?hl=en",
  discord: "#",
  linkedin: "https://in.linkedin.com/company/ieeesbnitdgp",
  website: "https://edu.ieee.org/in-nitdgp/",
  email: "mailto:ieeesb.nitdgp@gmail.com",
  mail: "ieeesb.nitdgp@gmail.com"
};

const MIDDLE_SECTION = {
  TITLE: "What is HackHustle?",
  LONG_DESCRIPTION:
    "It is a 2 day hackathon in which all participants can sharpen their skills and connect with people to grow together. The Hackathon is designed to spark innovation, attract and educate new talent and create new channels for collaboration between performance and capacity professionals.",
  LOGO_EFFECT: true,
  LOGO: ""
};

const FOOTER = {
  VOLUNTEERING_FORM: {
    required: true,
    src: "#Volunteer form link"
  },
  JOIN_TEAM: {
    required: true,
    src: "#Join team link"
  },
  Privacy_policy: {
    required: true,
    src: ""
  },
  Terms_of_use: {
    required: true,
    src: ""
  }
};

const calenderStartingDate = {
  month: 7,
  year: 2022
}


const schedule = [
  {
    "day": "15-03-2023",
    "events": [
      {
        "title": "Registrations start",
        "timings": "8 AM - 9 AM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "11 AM - 12 PM",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "16-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Event",
        "timings": "12 AM - 1 Pm",
        "link": "https://google.com"
      }
    ]
  },
  {
    "day": "17-7-2022",
    "events": [
      {
        "title": "Closing Ceremoney",
        "timings": "6 PM - 7 PM",
        "link": "https://google.com"
      }
    ]
  },
]

const Prizeinfo = [
  [
    //Array 1
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Overall First",
      content:
        "The first overall prize will be given to a project that outstands all other submissions."
    },
    {
      icon: <i className=" second fas fa-4x fa-medal"></i>,
      type: "Overall Second",
      content:
        "The second overall prize will be given to the second-best project in the hackathon."
    },
    {
      icon: <i className=" third fas fa-4x fa-skiing-nordic"></i>,
      type: "Overall Third",
      content:
        "The third overall prize will be given to the third-best project in the hackathon."
    }
  ],
  [
    //Array 2
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: " Best Women Team",
      content: "Your project will qualify for this category if your all team members are women."
    },
    {
      icon: <i className="first fas fa-4x fa-trophy"></i>,
      type: "Best DDU Team",
      content: "Your project will qualify for this category if your all team members are from DDU."
    },
    {
      icon: <i className="fas fa-user-friends seventh fa-3x "></i>,
      type: "More prizes",
      content: "More prizes will be revealed later"
    }
  ],
  [
    //Array 3
  ]
];

const TeamInfo = [
  [
    // Array 1
    {
      Name: "Vashishth Patel",
      role: "Lead Organizer",
      github: "https://github.com/vasu-1",
      linkedin: "https://www.linkedin.com/in/vashishth-patel-312a52204/",
      img: me
    },
    {
      Name: "Ayush Rudani",
      role: "Organizer",
      github: "https://github.com/R-Ayush777",
      linkedin: "https://www.linkedin.com/in/ayush-rudani-7a3516204/",
      img: ayush
    },
    {
      Name: "Smit Padaliya",
      role: "Organizer",
      github: "https://github.com/Smit-05",
      linkedin: "https://www.linkedin.com/in/smit-padaliya-aa03291b8/",
      img: smit
    }
  ],
  [
    // Array 2
    {
      Name: "Zenisha Savaliya",
      role: "Manager",
      github: "https://github.com/zenishasavaliya",
      linkedin: "https://www.linkedin.com/in/zenishasavaliya/",
      img: zenisha
    },
    {
      Name: "Parshwa Mehta",
      role: "Manager & Content",
      github: "https://github.com/PARSHWA0510",
      linkedin: "https://www.linkedin.com/in/parshwa-mehta-949306205",
      img: parshwa
    },
    {
      Name: "Dharmesh Poriya",
      role: "Manager",
      github: "https://github.com/Dharmesh-Poriya07",
      linkedin: "https://www.linkedin.com/in/dharmesh-poriya/",
      img: dharmesh
    },
  ],
  [
    // Array 2
    {
      Name: "Aneri Sonani",
      role: "Manager & Web",
      github: "https://github.com/AneriSonani09",
      linkedin: "https://www.linkedin.com/in/aneri-sonani-061b44204/",
      img: aneri
    },
    {
      Name: "Nirali Darji",
      role: "Design Lead",
      github: "#",
      linkedin: "https://www.linkedin.com/in/nirali-darji-1b766a209",
      img: nirali
    },
    {
      Name: "Dhruvi Sherathiya",
      role: "Outreach Lead",
      github: "https://github.com/DhruviSherathiya",
      linkedin: "https://www.linkedin.com/in/dhruvisherathiya",
      img: dhruvi
    },
  ],
  [
    // Array 2
    {
      Name: "Manav Shah",
      role: "Content Lead",
      github: "https://github.com/manavshah25",
      linkedin: "https://www.linkedin.com/in/manav-shah-28a521212",
      img: manav
    }
  ]
];

const JudgesInfo = [
  [
    // Array 1
    {
      Name: "Rehan",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: me
    },
    {
      Name: "Moon",
      role: "Manager",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "Ryah Garcia",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ],
  [
    // Array 2
    {
      Name: "Lyanola",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    },
    {
      Name: "Zoheb",
      role: "Organizer",
      github: "",
      linkedin: "",
      img: Ryah
    }
  ]
];

const sponsorLogos = [
  // [{ src: cfc }, { src: sublime }, { src: echoAR }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4
  [{src: ieee, link: "https://www.ieee.org/"}, { src: gdg_kol, link: "https://gdgkolkata.in/" }, { src: gdg_dgp, link: "https://gdgdurgapur.in/" }],  
  [{ src: devfolio, link: "https://devfolio.co/" }, { src: polygon, link: "https://polygon.technology/" },{ src: filecoin, link: "https://filecoin.io/" }],
  [{ src: replit, link: "https://replit.com/" }, { src: solana, link: "https://solana.com/" }, { src: rosenfeld, link:"https://rosenfeldmedia.com/"}],
  [{ src: axure, link: "https://www.axure.com/"}]
];

const titlesponsorLogos = [
  [{}, {src: ieee_cs, link: "https://www.computer.org/"}],
  // [{ src: devfolio, link: "https://devfolio.co/" }, { src: polygon, link: "https://polygon.technology/" }], //Array 1
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const diamondsponsorLogos = [
  // [{ src: gdg_kol, link: "https://gdgkolkata.in/" }, { src: gdg_dgp, link: "https://gdgdurgapur.in/" }]
]

const goldsponsorLogos = [
  // [  ], //Array 1
  [{ src: filecoin, link: "https://filecoin.io/" }, { src: gfg, link: "https://www.geeksforgeeks.org/" }, { src: digitalocean, link: "https://www.digitalocean.com/" }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const silversponsorLogos = [
  [{ src: echo3d, link: "https://www.echo3d.co/" }, { src: wolfram, link: "https://www.wolfram.com/" }, { src: interviewbuddy, link: "https://interviewbuddy.in/" }], //Array 1
  [{ src: alan, link: "https://alan.app/" }, { src: shivam, link: "#" }],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const bronzeponsorLogos = [
  [{ src: replit, link: "https://replit.com/" }, { src: certopus, link: "https://certopus.com/" }, { src: taskade, link: "https://www.taskade.com/" },], //Array 1
  [{ src: koii, link: "https://www.koii.network/" }, { src: postman, link: "https://postman.com/" }, {src: prayosys, link: "https://prayosys.com/"}],
  [{src: shivalika, link: "#"}, {src: cuvette, link: "https://www.cuvette.tech/"}],
  // [{ src: taskade }, { src: Replit }, { src: qoom }], //Array 2
  // [{ src: interviewC }, { src: pass }, { src: glimpse }], //Array 3
  // [{ src: egg }, { src: ll }, { src: ACF }] //Array 4

];

const knowlwdgesponsorLogos = [[{}, {src: wiley, link: "https://www.wiley.com/en-in"}]]
const savingssponsorLogos = [[{}, {src: grabon, link: "https://www.grabon.in/"}]]
const certificatesponsorLogos = [[{}, {src: give_my_cert, link: "https://givemycertificate.com/"}]]
const culinarysponsorLogos = [[{}, {src: lemon_grass, link: "https://lemongrassrestaurant.in/"}]]

const FoodLogos = [
  [{src: maruti, link: "#"},{src: jay_bhavani, link: "#"},{src: jay_maharaj, link: "#"}],
];

const designlogo = [
  [{ src: digilogo, link: "https://www.instagram.com/digicosmic_studio/" }, { src: streamyard, link: "https://streamyard.com/" }, { src: shutterbugs, link: "https://www.instagram.com/shutterbugs_ddu/?hl=en" }]
];


const frequentlyAskedQuestions = [
  [
    [
      {
        label: "What is a hackathon?",
        content: 'A hackathon is an event, usually lasting one or more days, where people come together to work on projects and solve problems in a collaborative and competitive environment.'
      },
      {
        label: "How long will HackHustle last?",
        content: "HackHustle is a 2-day hackathon in which all participants can sharpen their skills and connect with people to grow together."
      },
      {
        label: "What kind of skills do I need to participate in a hackathon?",
        content: "You don't necessarily need to have a stipulated set of skills as long as you have the ability to work in a team and communicate effectively and can learn on the go. All you need is the enthusiasm to solve a problem and present them to the judges in the final round."
      },
    ],
    [
      {
        label: "Who can participate in HackHustle?",
        content: "Anyone can participate in HackHustle, regardless of their background or skill level. HackHustle is open to all students regardless of their branch of study."
      },
      {
        label: "Do I need to have a team to participate in a hackathon?",
        content: "No, you don't compulsorily need to have a team to participate in HackHustle. However, we are allowing a maximum of 4 members to participate as a team. Individual entries or participation are also encouraged."
      },
      {
        label: "Are there any prizes for winning a hackathon?",
        content: "Many hackathons offer prizes for the winning teams, which can include cash, sponsor gifts, and other incentives. However, the main goal of a hackathon is usually to build something innovative and solve a problem, rather than to win a prize." 
      }
    ]
  ],

];

export {
  TOP_SECTION,
  MIDDLE_SECTION,
  SOCIALS,
  FOOTER,
  Prizeinfo,
  sponsorLogos,
  titlesponsorLogos,
  diamondsponsorLogos,
  goldsponsorLogos,
  silversponsorLogos,
  bronzeponsorLogos,
  TeamInfo,
  JudgesInfo,
  frequentlyAskedQuestions,
  schedule,
  calenderStartingDate,
  designlogo,
  FoodLogos,
  knowlwdgesponsorLogos,
  savingssponsorLogos,
  certificatesponsorLogos,
  culinarysponsorLogos
};
