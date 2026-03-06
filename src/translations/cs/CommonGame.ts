import { CommonGameTranslation } from "../../types/translations/CommonGame";

const startScreen = {
  pressStart: "Spustit hru",
  startGame: "Spustit hru",
};

const playerSetup = {
  title: "Nothing To Hide",
  welcomeTo: "Vítej v",
  description:
    "Než začneme, vyber si skvělou přezdívku a avatar, který tě představuje.",
  errorUsername: "Prosím zadej přezdívku.",
  errorUsernameInvalid: "Přezdívka může obsahovat pouze písmena a čísla",
  errorAvatar: "Prosím vyber avatar.",
  usernameLabel: "Přezdívka",
  usernamePlaceholder: "Zadej svou přezdívku",
  avatarLabel: "Vyber avatar",
  avatarAlt: "Výběr avatara",
  continueButton: "Pokračovat",
};

const quizSetup = {
  title: "Čas na kvíz!!",
  getReady: "Připrav se na kvíz",
  startSoon: "Začínáme brzy...",
};

const achievements = {
  title: "Úspěchy:",
  unlockedMessage: "Gratulujeme, dosáhl jsi následujícího milníku:",
  failedMessage: "Bohužel jsi nezískal tento odznak:",
  password: "Mistr hesel",
  cookie: "Mistr cookies",
  socialMedia: "Mistr sociálních sítí",
  photo: "Mistr fotografií",
  phishing: "Mistr proti phishingu",
};

const introduction = {
  welcome: "Ahoj",
  role: "Jsi student 10. ročníku. Zrovna relaxuješ – když najednou zavibruje telefon. Najednou jsi uprostřed všeho: Tvůj úkol? Rozhoduj, zůstaň v klidu a orientuj se v digitálním chaosu.",
  message: "Tvoje hra, tvoje rozhodnutí, Pojď na to!",
};

const endScreen = {
  successTitle: "Gratulujeme, Digitální Ochránče!",
  successMessage: "Zvládl jsi všechny výzvy a získal všechny odznaky za kybernetickou bezpečnost.\nTvůj účet je teď super chráněný! Hackeři, phisheři a zvědavé cookies nemají šanci!",
  successEndingMessage: "Aplikace InstaVibe ti důvěřuje a zůstává v tvém zařízení.\nPokračuj ve sdílení zodpovědně a pomoz ostatním stát se digitálními hrdiny.",
  failedTitle: "Skoro tam!",
  failedMessage: "Naučil ses už mnoho důležitých věcí, ale pár bodů ještě chybí.\nZ bezpečnostních důvodů bude aplikace InstaVibe nyní deaktivována.",
  failedEndingMessage: "Neboj se, můžeš hru spustit znovu, získat chybějící odznaky a vrátit se silnější!",
  pointsEarned: `Získané body: {POINTS}`,
  tryAgain: "Hrát znovu",
  replayFailedModules: "Dohnat chybějící úrovně",
  gameOver: "Konec hry",
  roundOver: "Kolo skončilo",
};

const tutorial = {
  title: "Tutoriál",
  next: "Další",
  back: "Zpět",
  skip: "Přeskočit",
  start: "Jdeme na to!",
};

const landscapeScreen = {
  turnDevice: "Prosím otočte zařízení!",
};

export const commonGame: CommonGameTranslation = {
  startScreen,
  playerSetup,
  quizSetup,
  achievements,
  introduction,
  endScreen,
  tutorial,
  landscapeScreen,
};
