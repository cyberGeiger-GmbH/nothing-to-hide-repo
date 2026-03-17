import { CS } from "./cs/CS";
import { DE } from "./de/DE";
import { EN } from "./en/EN";
import { ES } from "./es/ES";
import { IT } from "./it/IT";

export const translations = { CS, DE, EN, ES, IT };

export type Language = keyof typeof translations;
