import type { I18nText } from "@/contexts/LanguageContext";

export interface NewsItem {
  date: string;
  content: I18nText;
  link?: string;
}

export const news: NewsItem[] = [
  {
    date: "2026-06",
    content: {
      zh: "我们的工作 H³Former 被 IEEE TIP (IEEE Transactions on Image Processing) 录用。",
      en: "Our work H³Former has been accepted by IEEE TIP (IEEE Transactions on Image Processing).",
    },
  },
  {
    date: "2026-05",
    content: {
      zh: "我们的工作 ColorPCR++ 被 IEEE TPAMI (IEEE Transactions on Pattern Analysis and Machine Intelligence) 录用。",
      en: "Our work ColorPCR++ has been accepted by IEEE TPAMI (IEEE Transactions on Pattern Analysis and Machine Intelligence).",
    },
  },
  {
    date: "2026-04",
    content: {
      zh: "我们的工作 SoftHGNN 被 IJCV (International Journal of Computer Vision) 录用。",
      en: "Our work SoftHGNN has been accepted by IJCV (International Journal of Computer Vision).",
    },
  },
];
