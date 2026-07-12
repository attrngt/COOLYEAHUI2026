import { speakers } from "./speakers";

export const registerEvents = [
  {
    id: 1,
    number: "01",

    title: "COOLYEAH CLASS",

    speakers: [speakers.fayanna, speakers.faisal],

    topics: ["Creative & Critical Thinking", "Personal Branding & Networking"],

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

    speakers: [speakers.jason, speakers.christina],

    topics: [
      "Digital Asset and Stock Investment",
      "Digital Business and E-Commerce Strategy",
      "Data Analyst",
      "Microsoft Excel",
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

    speakers: [speakers.tba],

    topics: ["TBA"],

    registration: "TBA",

    eventDate: "TBA",

    location: "TBA",

    formUrl: "#",
  },

  {
    id: 4,
    number: "04",

    title: "GRAND CLOSING x TALKSHOW",

    speakers: [speakers.tba],

    topics: ["TBA"],

    registration: "TBA",

    eventDate: "TBA",

    location: "TBA",

    formUrl: "#",
  },
];
