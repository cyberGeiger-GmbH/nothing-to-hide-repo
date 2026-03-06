import { GeneralTranslation } from "../../types/translations/General";

const common: GeneralTranslation["common"] = {
  currentLanguage: "Čeština",
  open: "Otevřít",
  close: "Zavřít",
  back: "Zpět",
  proceed: "Pokračovat",
  retry: "Zkusit znovu",
  save: "Uložit",
  cancel: "Zrušit",
  from: "Od",
  You: "Ty",
  great: "Skvělé",
  maxGamePoints: "V této hře jsi dosáhl {POINTS} z {MAX_POINTS} možných bodů.",
};

const settings: GeneralTranslation["settings"] = {
  title: "Nastavení",
  audioEnabled: "Zvuk zapnut",
  musicVolume: "Hudba",
  soundEffectsVolume: "Zvukové efekty",
  chooseLanguage: "Vybrat jazyk",
};

const about: GeneralTranslation["legal"] = {
  titleImpressum: "Tiráž",
  titleGeneral: "Obecné informace",
  textGeneral: "Tato aplikace byla vyvinuta v rámci studentského projektu bakalářského studia informatiky na Hochschule für Angewandte Wissenschaften und Kunst Nordwestschweiz (FHNW). Zadavatelem a obsahově odpovědnou stranou je DataPro. DataPro je projekt financovaný v rámci programu EU Erasmus+ Školní vzdělávání v letech 2023–2026 a je tedy spolufinancován EU (Web: www.datapro.education).",
  titleContact: "Kontakt",
  textContact: "Provozovatelem těchto webových stránek je Pedagogická vysoká škola ve Freiburgu (Pädagogische Hochschule Freiburg). Lze ji kontaktovat na adrese:\n" +
    "Pädagogische Hochschule Freiburg\n" +
    "Kunzenweg 21\n" +
    "79117 Freiburg\n" +
    "Tel.: (0761) 682-0\n" +
    "Fax: (0761) 682-402\n" +
    "E-Mail: rektor(at)ph-freiburg.de\n" +
    "Internet: www.ph-freiburg.de\n" +
    "Pedagogická vysoká škola ve Freiburgu je veřejnoprávní korporací.\n" +
    "Jejím zákonným zástupcem je rektor/rektorka.\n" +
    "Příslušným správním a dozorčím orgánem je Ministerstvo vědy, výzkumu a umění Bádensko-Württemberska (MWK) (Königstraße 46, D - 70173 Stuttgart, Web: mwk.baden-wuerttemberg.de).\n",
  titleLinks: "Externí odkazy",
  textLinks: "Tato aplikace obsahuje odkazy na externí webové stránky. Za obsah propojených stránek odpovídá příslušný poskytovatel nebo provozovatel.",
  titleCopyright: "Autorská práva",
  textCopyright: "Zdrojový kód těchto webových stránek je k dispozici na GitHubu: www.github.com/nothing-to-hide/nothing-to-hide. Jedná se o open-source aplikaci a použití kódu a obsahu se řídí licencí MIT.",
  titleDisclaimer: "Vyloučení odpovědnosti",
  textDisclaimer: "Obsah této aplikace byl vytvořen s maximální péčí. Za správnost, úplnost a aktuálnost obsahu však nelze ručit. Doporučujeme hraní pod dohledem rodičů nebo školy. Jako studentský projekt slouží tato aplikace výhradně pro demonstrační a vzdělávací účely. Nepřebíráme žádnou odpovědnost za škody hmotné nebo nehmotné povahy vzniklé v důsledku použití nebo nepoužití poskytnutých informací.",
  titlePrivacy: "Zásady ochrany osobních údajů",
  textPrivacy: "Aplikace byla od základu navržena tak, aby nebylo možné identifikovat fyzické osoby. Všechna shromážděná data jsou anonymizována a nejsou zpracovávána žádná osobní data. Dále nejsou žádná data předávána externím poskytovatelům služeb ani třetím stranám.\n" +
    "Další dotazy můžete kdykoli směřovat na projekt DataPro na Pedagogické vysoké škole ve Freiburgu. Ve svém e-mailu na adresu poststelle(at)ph-freiburg.de uveďte prosím do předmětu „DataPro Web Games.\n" +
    "Máte-li další otázky týkající se ochrany osobních údajů, kontaktujte prosím našeho pověřence pro ochranu osobních údajů na adrese datenschutz(at)ph-freiburg.de.\n" +
    "Máte také možnost podat stížnost u Zemského komisaře pro ochranu údajů a svobodu informací v Bádensku-Württembersku (Web: https://www.baden-wuerttemberg.datenschutz.de/).",
};

export const general: GeneralTranslation = {
  common,
  settings,
  legal: about,
};
