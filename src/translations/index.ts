import { DE } from "./de/DE";
import { EN } from "./en/EN";
import { IT } from "./it/IT";

export const translations = { DE, EN, IT };

export type Language = keyof typeof translations;
