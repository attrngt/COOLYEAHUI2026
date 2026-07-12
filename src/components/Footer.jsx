import React from "react";
import { Link } from "react-router-dom";
import { FaInstagram, FaTiktok, FaEnvelope } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white py-12 border-t-4 border-brand-orange">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="flex flex-col items-center md:items-start">
          <Link
            to="/"
            className="font-headline text-4xl italic text-white mb-2"
          >
            COOLYEAH <span className="text-brand-orange">UI</span>
          </Link>
        </div>
        <div className="flex flex-col items-center md:items-end gap-3">
          <h4 className="font-headline text-lg uppercase mb-2">
            Connect With Us
          </h4>

          {/* Bagian Icon Media Sosial */}
          <div className="flex gap-4 mb-2">
            <a
              href="https://www.instagram.com/coolyeah.ui/"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center text-xl hover:bg-brand-orange hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.tiktok.com/@coolyeah.ui"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center text-xl hover:bg-brand-orange hover:text-white transition-colors"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="https://x.com/COOLYEAH_UI"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full bg-white text-brand-dark flex items-center justify-center text-xl hover:bg-brand-orange hover:text-white transition-colors"
              aria-label="X"
            >
              <FaXTwitter />
            </a>
          </div>

          {/* Bagian Icon Email */}
          <div className="flex items-center gap-2 text-brand-silver hover:text-brand-orange transition-colors mt-2">
            <FaEnvelope />
            coolyeah.ui.2026@gmail.com
          </div>
        </div>
      </div>
    </footer>
  );
}
