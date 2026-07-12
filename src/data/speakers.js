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
    image: null,
    name: "Jason Nathanael",
    title:
      "Founder Of Macro Journal and Investment Educator & Financial Content Creator",
  },

  christina: {
    image: null,
    name: "Christina Yaori",
    title:
      "Founder & CEO of SellerUP Academy and Chief Business Officer at ENTROPI",
  },

  //   : {
  //     image: null,
  //     name: "",
  //     title: "",
  //   },
};
