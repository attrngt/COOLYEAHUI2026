import { FaEnvelope, FaInstagram, FaTiktok } from "react-icons/fa";
import { aboutData } from "../data/languages";
import React, { useState, useEffect, useRef } from "react";

// Import gambar untuk section About
import rc1 from "../images/rc1.JPG";
// Import icon khusus untuk Core Values (menggunakan FontAwesome 6)
import { FaRocket, FaCompass, FaArrowTrendUp } from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";
import Register from "./Register";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

export default function About({ language }) {
  const text = aboutData[language];
  // Tambahkan di bagian paling atas file (bersama import lainnya)
  const logoFiles = import.meta.glob("/src/pastimages/*.{jpg,jpeg,png,svg}", {
    eager: true,
  });
  const stats = [
    { number: "2000+", label: "Participants" },
    { number: "20+", label: "Speakers" },
    { number: "30+", label: "Partners" },
    { number: "5800+", label: "Followers as 2026" },
  ];

  const statsData = [
    { number: 2000, label: "Participants" },
    { number: 20, label: "Speakers" },
    { number: 30, label: "Partners" },
    { number: 5800, label: "Followers as 2026" },
  ];
  const Counter = ({ target }) => {
    const [count, setCount] = useState(0);
    const counterRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            let start = 0;
            const duration = 2000;
            const step = target / (duration / 16);
            const timer = setInterval(() => {
              start += step;
              if (start >= target) {
                setCount(target);
                clearInterval(timer);
              } else {
                setCount(Math.floor(start));
              }
            }, 16);
          }
        },
        { threshold: 0.5 },
      );
      if (counterRef.current) observer.observe(counterRef.current);
      return () => observer.disconnect();
    }, [target]);

    return <span ref={counterRef}>{count}+</span>;
  };

  // benefit sponsor
const coreValues = [
  {
    id: 1,
    icon: <FaRocket />,
    title: text.coreValuesTitle.hope,
    key: "hope",
  },
  {
    id: 2,
    icon: <FaCompass />,
    title: text.coreValuesTitle.axis,
    key: "axis",
  },
  {
    id: 3,
    icon: <FaArrowTrendUp />,
    title: text.coreValuesTitle.momentum,
    key: "momentum",
  },
];

  return (
    <div className="flex flex-col w-full bg-white">
      {/* ================= SECTION 1: ABOUT COOLYEAH ================= */}
      <section className="py-20 md:py-28 px-6 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="flex flex-col">
            <h4 className="font-headline text-brand-orange text-xl md:text-2xl uppercase tracking-wider mb-4">
              About Coolyeah
            </h4>

            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl italic uppercase text-brand-dark mb-8 leading-tight">
              THE <span className="text-brand-orange">FORMULA</span> OF YOUR
              JOURNEY, THE <span className="text-brand-orange">PATH</span> YOU
              WILL DRIVE.
            </h1>

            <div className="space-y-6 text-gray-600 text-lg md:text-xl leading-relaxed mb-12 text-justify">
              <p>{text.hero.description}</p>
            </div>

            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-brand-silver/10 border-l-4 border-brand-orange p-6 rounded-r-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-headline text-3xl md:text-4xl text-brand-dark italic mb-1">
                    {stat.number}
                  </h3>
                  <p className="font-bold text-sm text-brand-orange uppercase tracking-wider">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group mt-10 lg:mt-0">
            <div className="absolute -inset-4 bg-brand-orange -skew-x-6 transform transition-transform duration-500 group-hover:skew-x-0 group-hover:scale-105 opacity-20 rounded-2xl"></div>
            <div className="relative z-10 aspect-[4/5] md:aspect-square lg:aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border-4 border-white">
              <img
                src={rc1}
                alt="About COOLYEAH Event"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[20%] group-hover:grayscale-0"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 z-20 w-32 h-32 bg-[radial-gradient(#eb4b00_3px,transparent_3px)] [background-size:12px_12px] opacity-40"></div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 2: VISION & MISSION ================= */}
      <section className="py-20 bg-brand-silver/20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-center mb-16 text-brand-dark">
            VISION & <span className="text-brand-orange">MISSION</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-brand-dark text-white p-8 md:p-12 rounded-2xl border-b-8 border-brand-orange shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-headline text-3xl md:text-4xl italic mb-6 text-brand-orange">
                VISION
              </h3>
              <p className="text-brand-silver text-lg leading-relaxed text-justify">
                {text.vision}
              </p>
            </div>

            <div className="bg-brand-dark text-white p-8 md:p-12 rounded-2xl border-b-8 border-brand-orange shadow-xl hover:-translate-y-2 transition-transform duration-300">
              <h3 className="font-headline text-3xl md:text-4xl italic mb-6 text-brand-orange">
                MISSION
              </h3>
              <ul className="space-y-6 text-brand-silver text-lg leading-relaxed">
                {text.missions.map((mission, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-brand-orange mt-1 text-xl">●</span>
                    <span className="text-justify">{mission}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION 3: OUR CORE VALUES ================= */}
      <section className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Header Section */}
          <div className="text-center max-w-4xl mx-auto mb-20 animate-[fadeIn_0.8s_ease-out_forwards]">
            <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-brand-dark mb-6">
              OUR CORE <span className="text-brand-orange">VALUES</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              {text.coreValuesIntro}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value, index) => (
              <div
                key={value.id}
                // Delay staggered untuk animasi (ditangani manual melalui utilitas gaya/Tailwind)
                style={{ animationDelay: `${index * 150}ms` }}
                className="group flex flex-col h-full bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(235,75,0,0.12)] animate-[fadeInUp_0.8s_ease-out_both]"
              >
                {/* Latar Belakang Lingkaran Icon */}
                <div className="w-20 h-20 rounded-full bg-brand-orange/10 flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110 group-hover:bg-brand-orange">
                  <span className="text-4xl text-brand-orange transition-colors duration-500 group-hover:text-white">
                    {value.icon}
                  </span>
                </div>

                {/* Judul Kartu */}
                <h3 className="font-headline text-2xl text-brand-dark italic uppercase mb-4">
                  {value.title}
                </h3>

                {/* Garis Aksen Animasi */}
                <div className="w-12 h-1 bg-brand-silver mb-6 transition-all duration-500 group-hover:w-full group-hover:bg-brand-orange"></div>

                {/* Deskripsi (flex-grow untuk menyamakan tinggi kartu) */}
                <p className="text-gray-600 leading-relaxed flex-grow text-base md:text-lg text-justify">
                  {text.coreValues[value.key]}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*====== IMPACT ====== */}
      <section className="py-24 px-6 bg-brand-dark text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-headline text-4xl md:text-5xl italic uppercase mb-12">
            OUR <span className="text-brand-orange">IMPACT</span>
          </h2>

          {/* Grid Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
            {statsData.map((stat, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="font-headline text-6xl md:text-7xl italic text-brand-orange mb-3">
                  <Counter target={stat.number} />
                </div>
                <p className="text-brand-silver uppercase tracking-widest font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Paragraf Deskripsi */}
          <div className="max-w-3xl mx-auto border-t border-gray-800 pt-10">
            <p className="text-gray-400 text-lg md:text-xl leading-relaxed italic">
              {text.impactDescription}
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* KOLOM KIRI: Content */}
            <div className="flex flex-col">
              <h2 className="font-headline text-4xl md:text-5xl italic uppercase text-brand-dark mb-6">
                Grow Together with{" "}
                <span className="text-brand-orange">COOLYEAH</span>
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed mb-8 text-justify">
                {text.partnerDescription}
              </p>

              {/* List Benefits */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                {text.partnerBenefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-brand-dark font-semibold"
                  >
                    <FaCheckCircle className="text-brand-orange text-xl" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>

            {/* KOLOM KANAN: Past Partners Collage */}
            {/* KOLOM KANAN: Past Partners Collage (Otomatis) */}
            <div className="relative">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-orange/10 rounded-full blur-3xl"></div>

              <div className="grid grid-cols-2 gap-4 p-8 bg-brand-silver/10 rounded-2xl border-2 border-dashed border-brand-silver">
                {Object.values(logoFiles).map((file, i) => (
                  <div
                    key={i}
                    className="h-32 bg-transparent rounded-xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center p-6"
                  >
                    <img
                      src={file.default}
                      alt={`Partner ${i + 1}`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                ))}
              </div>

              <p className="text-center text-sm text-gray-500 mt-6 italic font-medium">
                Trusted by Industry Leaders & Media Partners
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= SECTION: READY TO START YOUR JOURNEY? ================= */}
      <section className="py-24 px-6 bg-brand-dark text-white text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-headline text-4xl md:text-6xl italic uppercase mb-8">
            Ready to Be Part of{" "}
            <span className="text-brand-orange">COOLYEAH?</span>
          </h2>

          <p className="text-brand-silver text-lg md:text-xl leading-relaxed mb-12">
            {text.ctaDescription}
          </p>

          <div className="flex flex-col sm:flex-row justify-start gap-x-44">
            {/* Button 1: Register Now (Primary Orange) */}
            <Link
              to="/register"
              className="px-10 py-4 ml-8 bg-brand-orange text-white font-bold uppercase tracking-widest -skew-x-12 hover:bg-white hover:text-brand-dark transition-all duration-300 shadow-[3px_3px_0px_0px_#ffffff] hover:shadow-none self-start"
            >
              <span className="block skew-x-12">{text.registerButton}</span>
            </Link>

            <div className="border-2 border-brand-orange rounded-xl p-6 text-left max-w-md mx-auto bg-brand-dark/30 backdrop-blur-sm">
              <h3 className="font-headline text-xl uppercase text-brand-orange mb-4">
                {text.partnerButton}
              </h3>

              <div className="space-y-4">
                <a
                  href="https://instagram.com/coolyeah.ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-brand-orange transition-colors"
                >
                  <FaInstagram className="text-2xl" />
                  <span>@coolyeah.ui</span>
                </a>

                <a
                  href="https://www.tiktok.com/@coolyeah.ui"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-brand-orange transition-colors"
                >
                  <FaTiktok className="text-2xl" />
                  <span>@coolyeah.ui</span>
                </a>

                <div className="flex items-center gap-3 text-white hover:text-brand-orange transition-colors">
                  <FaEnvelope />
                  <span>coolyeah.ui.2026@gmail.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
