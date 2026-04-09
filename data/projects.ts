import type { I18nText } from "@/contexts/LanguageContext";

export interface Project {
  title: I18nText;
  description: I18nText;
  role: I18nText;
  period: string;
  funding?: I18nText;
}

export const projects: Project[] = [];
