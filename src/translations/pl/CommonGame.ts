import { CommonGameTranslation } from "../../types/translations/CommonGame";

const startScreen = {
  pressStart: "Rozpocznij grę",
  startGame: "Rozpocznij grę",
};

const playerSetup = {
  title: "Nothing To Hide",
  welcomeTo: "Witaj w",
  description:
    "Zanim zaczniemy, wybierz fajny pseudonim i awatar, który Cię reprezentuje.",
  errorUsername: "Wpisz pseudonim.",
  errorUsernameInvalid: "Pseudonim może zawierać tylko litery i cyfry",
  errorAvatar: "Wybierz awatar.",
  usernameLabel: "Pseudonim",
  usernamePlaceholder: "Wpisz swój pseudonim",
  avatarLabel: "Wybierz awatar",
  avatarAlt: "Wybór awatara",
  continueButton: "Kontynuuj",
};

const quizSetup = {
  title: "Czas na quiz!!",
  getReady: "Przygotuj się na quiz",
  startSoon: "Zaczyna się już za chwilę...",
};

const achievements = {
  title: "Osiągnięcia:",
  unlockedMessage: "Gratulacje, osiągnąłeś następujący kamień milowy:",
  failedMessage: "Niestety, nie zdobyłeś tej odznaki:",
  password: "Mistrz haseł",
  cookie: "Mistrz ciasteczek",
  socialMedia: "Mistrz mediów społecznościowych",
  photo: "Mistrz zdjęć",
  phishing: "Mistrz phishingu",
};

const introduction = {
  welcome: "Cześć",
  role: "Jesteś uczniem klasy dziesiątej. Po prostu się relaksujesz – aż Twój telefon wibruje. Nagle jesteś w samym środku wydarzeń: Twoje zadanie? Podejmuj decyzje, zachowaj spokój i panuj nad cyfrowym chaosem.",
  message: "Twoja gra, Twoje decyzje, ruszaj!",
};

const endScreen = {
  successTitle: "Gratulacje, Cyfrowy Obrońco!",
  successMessage: "Sprostałeś wszystkim wyzwaniom i zdobyłeś wszystkie odznaki cyberbezpieczeństwa.\nTwoje konto jest teraz superchronione! Hakerzy, phisherzy i ciekawskie ciasteczka nie mają żadnych szans!",
  successEndingMessage: "Aplikacja InstaVibe Ci ufa i zostaje na Twoim urządzeniu.\nNadal udostępniaj treści odpowiedzialnie i pomóż innym również zostać cyfrowymi bohaterami.",
  failedTitle: "Już prawie!",
  failedMessage: "Nauczyłeś się już wielu ważnych rzeczy, ale wciąż brakuje kilku punktów.\nAby chronić Twoje bezpieczeństwo, aplikacja InstaVibe zostanie teraz dezaktywowana.",
  failedEndingMessage: "Nie martw się, możesz zacząć grę od nowa, zdobyć brakujące odznaki i wrócić jeszcze silniejszy!",
  pointsEarned: `Zdobyte punkty: {POINTS}`,
  tryAgain: "Zagraj ponownie",
  replayFailedModules: "Nadrób brakujące poziomy",
  gameOver: "Koniec gry",
  roundOver: "Koniec rundy",
};

const tutorial = {
  title: "Samouczek",
  next: "Dalej",
  back: "Wstecz",
  skip: "Pomiń",
  start: "Zaczynamy!",
};

const landscapeScreen = {
  turnDevice: "Obróć swoje urządzenie!"
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
