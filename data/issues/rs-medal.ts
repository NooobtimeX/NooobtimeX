import { AffiliationId } from "@/enum";
import type { Issue } from "@/interface";
import { googleAds, nextjs, tailwindcss, vercel } from "../abilities";

export const rsMedal: Issue = {
  id: "rs-medal",
  title: "RS Medal",
  description:
    "A medal showcase web application built to display awards and accolades in an elegant layout.",
  images: {
    thumbnail: "/issue/RSMEDAL.png",
    banner: "/issue/RSMEDAL.png",
    photos: ["/issue/RSMEDAL.png"],
  },
  abilities: [nextjs, vercel, tailwindcss, googleAds],
  links: {
    live: "https://www.rs-medal.com",
  },
  startDate: "2022-08-01",
  linkedAffiliationId: AffiliationId.RuamsukPlatingJunior,
};
