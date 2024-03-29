import localFont from "next/font/local";

export const ppEditorialNew = localFont({
  src: [
    {
      path: "../public/fonts/pp-editorial-new-regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/pp-editorial-new-ultrabold.otf",
      weight: "800",
      style: "normal",
    },
  ],
});
