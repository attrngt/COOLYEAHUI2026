import { FaArrowDown } from "react-icons/fa6";
import { registerEvents } from "../data/registerEvents";

export default function Register() {
  const handleScrollToEvents = (e) => {
    e.preventDefault(); // Mencegah lompatan default dari anchor tag
    const element = document.getElementById("events");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <main className="bg-white">
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-brand-dark text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(235,75,0,.18),transparent_45%)]" />

        <div className="relative max-w-7xl mx-auto px-6 pt-36 pb-28 text-center">
          <p className="uppercase tracking-[0.35em] font-headline text-brand-orange text-sm mb-5">
            COOLYEAH UI 2026
          </p>

          <h1 className="font-headline italic uppercase text-5xl md:text-7xl leading-none mb-8">
            REGISTER
          </h1>

          <h2 className="text-2xl md:text-3xl font-semibold mb-8">
            Choose Your Track
          </h2>

          <p className="max-w-3xl mx-auto text-gray-300 leading-8 text-lg">
            Every journey starts with a single step. Register yourself to
            COOLYEAH UI event(s) now
          </p>

          <div className="mt-16 flex justify-center">
            <a
              href="#events"
              onClick={handleScrollToEvents}
              className="inline-flex items-center gap-3 text-brand-orange hover:text-orange-300 transition"
            >
              <span className="uppercase tracking-wider text-sm">
                Scroll Down to Choose Your Event
              </span>

              <FaArrowDown className="animate-bounce" />
            </a>
          </div>
        </div>
      </section>

      {/* ================= EVENT SECTION ================= */}

      <section id="events" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="font-headline italic uppercase text-4xl md:text-5xl text-brand-dark mb-6 mt-5">
              START YOUR JOURNEY
            </h2>

            <p className="text-gray-600 max-w-3xl mx-auto leading-8">
              Select one of the four COOLYEAH event series below. Click on your
              preferred event to continue your registration through the official
              registration form.
            </p>
          </div>

          {/* CARD GRID */}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {registerEvents.map((event) => (
              <div
                key={event.id}
                className="group bg-white rounded-3xl border border-gray-200 p-8 transition-all duration-300 hover:-translate-y-2 hover:border-brand-orange hover:shadow-[0_18px_45px_rgba(235,75,0,0.18)]"
              >
                {/* Number */}

                <span className="font-headline italic text-6xl text-brand-orange/20 group-hover:text-brand-orange transition">
                  {event.number}
                </span>

                {/* Title */}

                <h3 className="font-headline italic uppercase text-3xl text-brand-dark mt-4 mb-8">
                  {event.title}
                </h3>

                {/* Speakers */}

                <div className="mb-6">
                  <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-3">
                    Speakers
                  </p>
                  <div className="space-y-4">
                    {event.speakers.map((speaker, index) => (
                      <div key={index} className="flex items-center gap-4">
                        {speaker.image ? (
                          <img
                            src={speaker.image}
                            alt={speaker.name}
                            className="w-20 h-20 rounded-full object-cover"
                          />
                        ) : (
                          <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center text-xs">
                            TBA
                          </div>
                        )}

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

                {/* Topics */}

                <div className="mb-6">
                  <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-3">
                    Topics
                  </p>

                  <ul className="space-y-2">
                    {event.topics.map((topic, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-2 text-gray-700"
                      >
                        <span className="text-brand-orange mt-1">●</span>

                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Registration */}

                <div className="grid gap-5 border-t border-b border-gray-100 py-6">
                  <div>
                    <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-2">
                      Registration Period
                    </p>

                    <p className="text-gray-700">{event.registration}</p>
                  </div>
                  <div>
                    <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-2">
                      Participant Announcement
                    </p>

                    <p className="text-gray-700">{event.announce}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-2">
                      Event Date
                    </p>

                    <p className="text-gray-700">{event.eventDate}</p>
                  </div>

                  <div>
                    <p className="uppercase tracking-wider text-xs font-semibold text-brand-orange mb-2">
                      Venue
                    </p>

                    <p className="text-gray-700">{event.location}</p>
                  </div>
                </div>

                {/* Button */}

                <div className="mt-8">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(event.formUrl, "_blank");
                    }}
                    className="w-full py-4 rounded-xl bg-brand-dark text-white font-semibold uppercase tracking-wider transition-all duration-300 group-hover:bg-brand-orange cursor-pointer"
                  >
                    Register Now →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
