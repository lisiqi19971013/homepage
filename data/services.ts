import type { I18nText } from "@/contexts/LanguageContext";

export interface ServiceCategory {
  title: I18nText;
  items: string[];
}

export const services: ServiceCategory[] = [
  {
    title: {
      zh: "期刊审稿人",
      en: "Journal Reviewer",
    },
    items: [
      "IEEE Transactions on Pattern Analysis and Machine Intelligence (TPAMI)",
      "IEEE Transactions on Robotics (TRO)",
      "International Journal of Computer Vision (IJCV)",
      "IEEE Transactions on Multimedia (TMM)",
      "IEEE Transactions on Circuits and Systems for Video Technology (TCSVT)",
      "IEEE Transactions on Neural Networks and Learning Systems (TNNLS)",
      "Pattern Recognition (PR)",
    ],
  },
  {
    title: {
      zh: "会议审稿人",
      en: "Conference Reviewer",
    },
    items: [
      "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      "IEEE/CVF International Conference on Computer Vision (ICCV)",
      "European Conference on Computer Vision (ECCV)",
      "Annual Conference on Neural Information Processing Systems (NeurIPS)",
      "International Conference on Machine Learning (ICML)",
      "International Joint Conferences on Artificial Intelligence (IJCAI)",
      "AAAI Conference on Artificial Intelligence (AAAI)",
      "ACM The Web Conference (WWW)",
    ],
  },
];
