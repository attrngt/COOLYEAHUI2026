import React, { useState } from "react";
import { languageData } from "../data/languages";
import { Link } from "react-router-dom";
import MediaPartner from "../components/MediaPartner";

import rc1 from "../images/rc1.JPG";
import rc2 from "../images/rc2.jpeg";
import rc3 from "../images/rc3.JPG";
import rc4 from "../images/rc4.JPG";
import rc5 from "../images/rc5.JPG";
import rc6 from "../images/rc6.JPG";
import rc7 from "../images/rc7.JPG";


// Terima 'language' sebagai props dari App.jsx
export default function Home({ language }) {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);
  const handleScrollToEvents = (e) => {
    e.preventDefault(); // Mencegah lompatan default dari anchor tag
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  // State language dan fungsinya sudah dihapus dari sini

  const text = languageData[language];

  const eventSeries = [
    {
      id: 1,
      title: "COOLYEAH CLASS",
      description: text.eventDescriptions.class,
      image: rc1,
      topics: [
        "Personal Branding & Networking",
        "Creative & Critical Thinking",
      ],
      benefits: ["Official Certificate", "Benefit 2", "Benefit 3", "Benefit 4"],
      speakers: [
        { image: null, name: "TBA", title: "TBA" },
        { image: null, name: "TBA", title: "TBA" },
      ],
    },
    {
      id: 2,
      title: "COOLYEAH CLASS PRO",
      description: text.eventDescriptions.pro,
      image: rc4,
      topics: [
        "Digital Asset & Stock Investment",
        "Digital Bussiness & E-Commerce Strategy",
        "Data Analysis with Microsoft Excel",
      ],
      benefits: ["Official Certificate", "Benefit 2", "Benefit 3", "Benefit 4"],
      speakers: [
        { image: null, name: "TBA", title: "TBA" },
        { image: null, name: "TBA", title: "TBA" },
      ],
    },
    {
      id: 3,
      title: "COOLYEAH CLASS EXPERT",
      description: text.eventDescriptions.expert,
      image: rc7,
      topics: ["Human Resources and Talent Development", "Digital Marketing"],
      benefits: ["Official Certificate", "Benefit 2", "Benefit 3", "Benefit 4"],
      speakers: [
        { image: null, name: "TBA", title: "TBA" },
        { image: null, name: "TBA", title: "TBA" },
      ],
    },
    {
      id: 4,
      title: "GRAND CLOSING X TALKSHOW",
      description: text.eventDescriptions.closing,
      image: rc2,
      benefits: ["Official Certificate", "Benefit 2", "Benefit 3", "Benefit 4"],
      speakers: [
        { image: null, name: "TBA", title: "TBA" },
        { image: null, name: "TBA", title: "TBA" },
      ],
    },
  ];

  const timelineData = [
    {
      id: 1,
      event: "COOLYEAH CLASS",
      registration: "Open Registration 13 July 2026",
      date: "25 July 2026",
      location: "Universitas Indonesia",
    },
    {
      id: 2,
      event: "COOLYEAH CLASS PRO",
      registration: "TBA",
      date: "TBA",
      location: "Universitas Indonesia",
    },
    {
      id: 3,
      event: "COOLYEAH CLASS EXPERT",
      registration: "TBA",
      date: "TBA",
      location: "Universitas Indonesia",
    },
    {
      id: 4,
      event: "GRAND CLOSING x TALKSHOW",
      registration: "TBA",
      date: "TBA",
      location: "Universitas Indonesia",
    },
  ];

  const recapPhotos = [rc3, rc2, rc6, rc4, rc5];

  return (
    <div className="flex flex-col w-full">
      {/* ================= HERO SECTION ================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center px-8 overflow-hidden bg-brand-dark text-white">
        <div className="relative z-10 text-center max-w-5xl mx-auto">
          <h1 className="font-headline text-3xl md:text-4xl lg:text-5xl tracking-tight uppercase mb-6 drop-shadow-2xl italic">
            THE <span className="text-brand-orange">FORMULA</span> OF YOUR
            JOURNEY, THE <span className="text-brand-orange">PATH</span> YOU
            WILL DRIVE
          </h1>

          <p className="text-brand-silver text-lg md:text-xl mb-10 max-w-2xl mx-auto mt-8">
            {text.heroDescription}
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="#events"
              onClick={handleScrollToEvents}
              className="px-8 py-3 bg-white text-brand-dark font-bold uppercase -skew-x-12 transition-transform hover:scale-105 shadow-[4px_4px_0px_0px_#eb4b00]"
            >
              <span className="block skew-x-12">{text.viewEvents}</span>
            </a>
          </div>
        </div>
      </section>

      {/* Sisa kode di bawah ini sama persis, tidak ada yang berubah */}
      {/* ================= RANGKAIAN ACARA SECTION ================= */}
      <section id="events" className="py-30 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-center mb-12 text-brand-dark">
            MAIN <span className="text-brand-orange">EVENTS</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {eventSeries.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedEvent(item)}
                className="group cursor-pointer bg-brand-dark border-b-4 border-brand-orange rounded-lg overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="aspect-video w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-headline text-xl text-white italic">
                    {item.title}
                  </h3>
                  <p className="text-brand-silver text-sm mt-2 line-clamp-2">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP/MODAL RANGKAIAN ACARA */}
      {selectedEvent && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 px-4 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white max-w-2xl w-full max-h-[90vh] overflow-y-auto rounded-xl shadow-2xl relative animate-[fadeIn_0.3s_ease-out] overflow-y-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-brand-dark text-white rounded-full font-bold flex items-center justify-center hover:bg-brand-orange transition-colors"
            >
              ✕
            </button>
            <div className="aspect-video w-full">
              <img
                src={selectedEvent.image}
                alt={selectedEvent.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <h3 className="font-headline text-3xl text-brand-dark italic mb-4">
                {selectedEvent.title}
              </h3>
              <p
                className={`text-gray-700 leading-relaxed ${
                  selectedEvent.topics ? "mb-6" : "mb-8"
                }`}
              >
                {selectedEvent.description}
              </p>
              {selectedEvent.topics && (
                <div className="mb-8 p-4 bg-brand-silver/20 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-brand-dark mb-3 uppercase tracking-wide text-sm">
                    {text.topics}
                  </h4>
                  <ul className="list-disc list-inside text-gray-700 space-y-1">
                    {selectedEvent.topics.map((topic, index) => (
                      <li key={index} className="pl-1">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {selectedEvent.benefits && (
                <div className="mb-8 p-4 bg-brand-orange/10 rounded-lg border-l-4 border-brand-orange">
                  <h4 className="font-bold text-brand-dark mb-3 uppercase tracking-wide text-sm">
                    {text.benefits}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedEvent.benefits.map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 text-gray-700"
                      >
                        <span className="text-brand-orange text-lg">✓</span>
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              {selectedEvent.speakers && (
                <div className="mb-8">
                  <h4 className="font-bold text-brand-dark mb-4 uppercase tracking-wide text-sm">
                    {text.speakers}
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {selectedEvent.speakers.map((speaker, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 p-4 rounded-xl border border-gray-200"
                      >
                        <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                          {speaker.image ? (
                            <img
                              src={speaker.image}
                              alt={speaker.name}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <span className="text-xs text-gray-500">TBA</span>
                          )}
                        </div>
                        <div>
                          <h5 className="font-semibold text-brand-dark">
                            {speaker.name}
                          </h5>
                          <p className="text-sm text-gray-500">
                            {speaker.title}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              <Link
                to="/register"
                className="inline-block bg-brand-orange text-white px-8 py-3 -skew-x-12 hover:bg-brand-dark transition-colors font-bold uppercase tracking-wider shadow-[4px_4px_0px_0px_#d1d5db]"
              >
                <span className="block skew-x-12">{text.register}</span>
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* ================= TIMELINE SECTION ================= */}
      <section id="timeline" className="py-20 px-6 bg-brand-silver/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-center mb-16 text-brand-dark">
            <span className="text-brand-orange">{text.timeline}</span>
          </h2>
          <div className="relative border-l-4 border-brand-orange ml-4 md:ml-1/2">
            {timelineData.map((time, index) => (
              <div key={time.id} className="mb-10 ml-8 relative">
                <div className="absolute -left-[42px] top-1 w-6 h-6 bg-brand-dark border-4 border-brand-orange rounded-full"></div>
                <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-brand-dark hover:border-brand-orange transition-colors">
                  <h3 className="font-headline text-xl text-brand-dark mb-3">
                    {time.event}
                  </h3>
                  <p className="text-sm text-brand-orange font-semibold">
                    {time.registration}
                  </p>
                  <p className="text-gray-700 mt-2">{time.date}</p>
                  <p className="text-gray-500 mt-1">{time.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= RECAP BENTO GRID SECTION ================= */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-center mb-12 text-brand-dark">
            <span className="text-brand-orange">{text.recap}</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4 h-auto md:h-[600px]">
            <div className="md:col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md">
              <img
                src={recapPhotos[0]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Recap 1"
              />
            </div>
            <div className="md:col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md">
              <img
                src={recapPhotos[1]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Recap 2"
              />
            </div>
            <div className="md:col-span-1 row-span-2 rounded-xl overflow-hidden shadow-md">
              <img
                src={recapPhotos[2]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Recap 3"
              />
            </div>
            <div className="md:col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md">
              <img
                src={recapPhotos[3]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Recap 4"
              />
            </div>
            <div className="md:col-span-1 row-span-1 rounded-xl overflow-hidden shadow-md">
              <img
                src={recapPhotos[4]}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                alt="Recap 5"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= MEDIA PARTNER ================= */}
      <MediaPartner />

      {/* ======= FAQ ====== */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-center mb-14 text-brand-dark">
            <span className="text-brand-orange">{text.faq}</span>
          </h2>
          <div className="space-y-4">
            {text.questions.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex justify-between items-center p-5 text-left bg-white hover:bg-gray-50 transition"
                >
                  <span className="font-semibold text-brand-dark">
                    {faq.question}
                  </span>
                  <span className="text-2xl text-brand-orange">
                    {openFaq === index ? "−" : "+"}
                  </span>
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      
    </div>
  );
}
