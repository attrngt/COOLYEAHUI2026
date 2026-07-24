import { speakers } from "./speakers";
import rc1 from "../images/rc1.jpg";
import rc4 from "../images/rc4.jpg";
import rc7 from "../images/rc7.jpg";
import rc2 from "../images/rc2.jpeg";

export const registerEvents = [
  {
    id: 1,
    number: "01",
    title: "COOLYEAH CLASS",
    descriptionKey: "class",
    image: rc1,
    speakers: [speakers.fayanna, speakers.faisal],
    topics: ["Creative & Critical Thinking", "Personal Branding & Networking"],
    benefits: [
      "Interactive mentoring session",
      "Networking opportunities",
      "Case Presentation & Discussion",
      "Beauty Product Goodie Bag",
    ],
    registration: "13 Jul 2026 - 23 Jul 2026",
    announce: "24 Jul 2026",
    eventDate: "25 Jul 2026",
    location: "Universitas Indonesia",
    formUrl: "https://bemui.link/RegistrasiCOOLYEAHCLASSUI2026",
  },

  {
    id: 2,
    number: "02",
    title: "COOLYEAH CLASS PRO",
    descriptionKey: "pro",
    image: rc4,
    speakers: [speakers.jason, speakers.christina, speakers.tantut, speakers.ardi],
    topics: [
      "Digital Asset and Stock Investment",
      "Digital Business and E-Commerce Strategy",
      "Data Analysis",
      "Microsoft Excel",
    ],
    benefits: [
      "Official E-Certificate",
      "Interactive Mentoring Session",
      "Interactive Quiz",
      "Hands-on Case Study",
    ],
    registration: "20 Jul 2026 - 30 Jul 2026",
    announce: "31 Jul 2026",
    eventDate: "1-2 Aug 2026",
    location: "Universitas Indonesia",
    formUrl: "https://bemui.link/RegistrasiCOOLYEAHCLASSPROUI2026",
  },

  {
    id: 3,
    number: "03",
    title: "COOLYEAH CLASS EXPERT",
    descriptionKey: "expert",
    image: rc7,
    speakers: [speakers.tba],
    topics: ["Human Resources and Talent Development", "Digital Marketing"],
    benefits: [
      "Official Certificate",
      "Industry expert guidance",
      "Advanced skill development",
      "Professional networking",
    ],
    registration: "TBA",
    announce: "TBA",
    eventDate: "TBA",
    location: "TBA",
    formUrl: "#",
  },

  {
    id: 4,
    number: "04",
    title: "GRAND CLOSING x TALKSHOW",
    descriptionKey: "closing",
    image: rc2,
    speakers: [speakers.tba],
    topics: ["TBA"],
    benefits: [
      "Official Certificate",
      "Inspirational talkshow",
      "Career insights",
      "Final event celebration",
    ],
    registration: "TBA",
    announce: "TBA",
    eventDate: "TBA",
    location: "TBA",
    formUrl: "#",
  },
];
