const speakerModules = import.meta.glob(
  "../speakersimg/*.{png,jpg,jpeg,webp}",
  {
    eager: true,
    import: "default",
  },
);

const speakerImages = Object.fromEntries(
  Object.entries(speakerModules).map(([path, image]) => [
    path
      .split("/")
      .pop()
      .replace(/\.[^/.]+$/, ""),
    image,
  ]),
);

export const speakers = {
  fayanna: {
    image: speakerImages.sp1,
    name: "Fayanna Davianny",
    title: "Founder & CEO of Self Grow Indonesia",
  },

  faisal: {
    image: speakerImages.sp2,
    name: "Faisal Yusuf Baskoro",
    title: "Professional Public Speaker & BRI Future Leader",
  },

  tba: {
    image: null,
    name: "TBA",
    title: "Speaker Coming Soon",
  },

  jason: {
    image: speakerImages.sp3,
    name: "Jason Nathanael",
    title:
      "Founder Of Macro Journal and Investment Educator & Financial Content Creator",
  },

  christina: {
    image: speakerImages.sp4,
    name: "Christina Yaori",
    title:
      "Founder & CEO of SellerUP Academy and Chief Business Officer at ENTROPI",
  },

    tantut: {
      image: speakerImages.sp5,
      name: "Tantut Wahyu Setyoko",
      title: "Assistant Manager Data Scientist at Bank Mega",
    },
    ardi: {
      image: speakerImages.sp6,
      name: "Moch Ardi Firmansyah",
      title: "Professional Excel Trainer with 10,000+ Participants and People Services & Analytics at Lintasarta",
    },
  //   : {
  //     image: null,
  //     name: "",
  //     title: "",
  //   },
};
