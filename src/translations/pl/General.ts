import { GeneralTranslation } from "../../types/translations/General";

const common: GeneralTranslation["common"] = {
  currentLanguage: "Polski",
  open: "Otwórz",
  close: "Zamknij",
  back: "Wstecz",
  proceed: "Kontynuuj",
  retry: "Spróbuj ponownie",
  save: "Zapisz",
  cancel: "Anuluj",
  from: "Od",
  You: "Ty",
  great: "Świetnie",
  maxGamePoints: "Zdobyłeś {POINTS} z {MAX_POINTS} możliwych punktów w tej grze.",
};

const settings: GeneralTranslation["settings"] = {
  title: "Ustawienia",
  audioEnabled: "Dźwięk włączony",
  musicVolume: "Muzyka",
  soundEffectsVolume: "Efekty dźwiękowe",
  chooseLanguage: "Wybierz język",
};

const about: GeneralTranslation["legal"] = {
  titleImpressum: "Stopka redakcyjna",
  titleGeneral: "Informacje ogólne",
  textGeneral: "Ta aplikacja została opracowana w ramach projektu studenckiego na studiach licencjackich z informatyki na Uniwersytecie Nauk Stosowanych i Sztuki Północno-Zachodniej Szwajcarii (FHNW). Zleceniodawcą i podmiotem odpowiedzialnym za treści jest DataPro. DataPro to projekt finansowany w ramach unijnego programu Erasmus+ Edukacja szkolna w latach 2023–2026, współfinansowany przez UE (strona internetowa: www.datapro.education).",
  titleContact: "Kontakt",
  textContact: "Operatorem tej strony internetowej jest Uniwersytet Pedagogiczny we Fryburgu (Pädagogische Hochschule Freiburg). Można się z nim skontaktować pod adresem:\n" +
    "Pädagogische Hochschule Freiburg\n" +
    "Kunzenweg 21\n" +
    "79117 Freiburg\n" +
    "Tel.: (0761) 682-0\n" +
    "Fax: (0761) 682-402\n" +
    "E-Mail: rektor(at)ph-freiburg.de\n" +
    "Internet: www.ph-freiburg.de\n" +
    "Uniwersytet Pedagogiczny we Fryburgu jest korporacją prawa publicznego.\n" +
    "Jest reprezentowany prawnie przez Rektora.\n" +
    "Właściwym organem nadzorczym jest Ministerstwo Nauki, Badań i Sztuki Badenii-Wirtembergii (MWK) (Königstraße 46, D - 70173 Stuttgart, strona internetowa: mwk.baden-wuerttemberg.de).\n",
  titleLinks: "Linki zewnętrzne",
  textLinks: "Ta aplikacja zawiera linki do zewnętrznych stron internetowych. Za treść stron, do których prowadzą linki, odpowiada odpowiedni dostawca lub operator.",
  titleCopyright: "Prawa autorskie",
  textCopyright: "Kod źródłowy tej strony internetowej jest dostępny na GitHubie: www.github.com/nothing-to-hide/nothing-to-hide. Jest to aplikacja open-source, a korzystanie z kodu i treści podlega licencji MIT.",
  titleDisclaimer: "Zastrzeżenie",
  textDisclaimer: "Treść tej aplikacji została opracowana z najwyższą starannością. Nie można jednak zagwarantować poprawności, kompletności ani aktualności treści. Zalecamy korzystanie z aplikacji pod nadzorem rodziców lub nauczycieli. Jako projekt studencki aplikacja ta służy wyłącznie celom demonstracyjnym i edukacyjnym. Nie ponosimy odpowiedzialności za szkody materialne lub niematerialne wynikające z korzystania lub niekorzystania z udostępnionych informacji.",
  titlePrivacy: "Polityka prywatności",
  textPrivacy: "Aplikacja została zaprojektowana od podstaw w taki sposób, aby identyfikacja osób fizycznych nie była możliwa. Wszystkie zebrane dane są anonimizowane i nie są przetwarzane żadne dane osobowe. Ponadto żadne dane nie są przekazywane zewnętrznym usługodawcom ani osobom trzecim.\n" +
    "Dalsze zapytania można w każdej chwili kierować do projektu DataPro na Uniwersytecie Pedagogicznym we Fryburgu. Prosimy o umieszczenie w temacie wiadomości e-mail wysyłanej na adres poststelle(at)ph-freiburg.de hasła „DataPro Web Games”.\n" +
    "W przypadku dalszych pytań dotyczących ochrony danych prosimy o kontakt z naszym Inspektorem Ochrony Danych pod adresem datenschutz(at)ph-freiburg.de.\n" +
    "Ponadto masz możliwość złożenia skargi do Krajowego Pełnomocnika ds. Ochrony Danych i Wolności Informacji Badenii-Wirtembergii (strona internetowa: https://www.baden-wuerttemberg.datenschutz.de/).",
};

export const general: GeneralTranslation = {
  common,
  settings,
  legal: about,
};
