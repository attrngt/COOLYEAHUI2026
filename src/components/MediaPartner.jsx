export default function MediaPartner() {
  // Import semua logo dalam folder assets/partners
  const logoModules = import.meta.glob(
    "../assets/partners/*.{png,jpg,jpeg,svg,webp}",
    {
      eager: true,
      import: "default",
    },
  );

  // Ubah menjadi array partner
  const partners = Object.entries(logoModules)
    .map(([path, logo], index) => {
      const fileName = path
        .split("/")
        .pop()
        .replace(/\.[^/.]+$/, "");

      return {
        id: index + 1,
        name: fileName
          .replace(/[-_]/g, " ")
          .replace(/\b\w/g, (char) => char.toUpperCase()),
        logoUrl: logo,
      };
    })
    // Optional: urutkan berdasarkan nama file
    .sort((a, b) => a.name.localeCompare(b.name));

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="font-headline text-4xl md:text-5xl italic uppercase mb-14 text-brand-dark">
          OUR <span className="text-brand-orange">PARTNERS</span>
        </h2>

        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="w-24 h-24 md:w-32 md:h-32 flex items-center justify-center p-4 bg-white rounded-xl shadow-[0_4px_15px_rgba(0,0,0,0.06)] border border-gray-100 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_rgba(235,75,0,0.2)] hover:border-brand-orange"
            >
              <img
                src={partner.logoUrl}
                alt={partner.name}
                className="w-full h-full object-contain aspect-square transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
