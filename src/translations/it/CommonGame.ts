import { CommonGameTranslation } from "../../types/translations/CommonGame";

const startScreen = {
  pressStart: "Inizia il gioco",
  startGame: "Inizia il gioco",
};

const playerSetup = {
  title: "Nothing To Hide",
  welcomeTo: "Benvenuto in",
  description:
    "Prima di iniziare, scegli un nickname e un avatar che ti rappresenti.",
  errorUsername: "Inserisci un nickname.",
  errorUsernameInvalid: "Il nickname può contenere solo lettere e numeri",
  errorAvatar: "Seleziona un avatar.",
  usernameLabel: "Nickname",
  usernamePlaceholder: "Inserisci il tuo nickname",
  avatarLabel: "Seleziona avatar",
  avatarAlt: "Selezione avatar",
  continueButton: "Continua",
};

const quizSetup = {
  title: "Ora del quiz!!",
  getReady: "Pronto per un quiz",
  startSoon: "Inizia a breve...",
};

const achievements = {
  title: "Traguardi di:",
  unlockedMessage: "Complimenti, hai raggiunto il seguente traguardo:",
  failedMessage: "Purtroppo non hai ottenuto questo badge:",
  password: "Maestro delle password",
  cookie: "Maestro dei cookie",
  socialMedia: "Maestro dei social media",
  photo: "Maestro delle foto",
  phishing: "Maestro del phishing",
};

const introduction = {
  welcome: "Ciao",
  role: "Sei uno studente del 10° anno. Stai rilassandoti — finché il tuo telefono non vibra. All'improvviso sei nel mezzo di tutto: il tuo compito? Prendi decisioni, rimani calmo e tieni traccia del caos digitale.",
  message: "Il tuo gioco, le tue decisioni, Vai!",
};

const endScreen = {
  successTitle: "Complimenti, Protettore Digitale!",
  successMessage: "Hai superato tutte le sfide e vinto tutti i badge per la sicurezza informatica.\nIl tuo account è ora super protetto! Hacker, phisher e cookie curiosi non hanno chance!",
  successEndingMessage: "L'app InstaVibe si fida di te e rimane sul tuo dispositivo.\nContinua a condividere in modo responsabile e aiuta anche gli altri a diventare eroi digitali.",
  failedTitle: "Ci sei quasi!",
  failedMessage: "Hai già imparato molte cose importanti, ma mancano ancora alcuni punti.\nPer proteggere la tua sicurezza, l'app InstaVibe verrà ora disattivata.",
  failedEndingMessage: "Non preoccuparti, puoi riavviare il gioco, raccogliere i badge mancanti e tornare ancora più forte!",
  pointsEarned: `Punti ottenuti: {POINTS}`,
  tryAgain: "Gioca di nuovo",
  replayFailedModules: "Recupera i livelli mancanti",
  gameOver: "Game over",
  roundOver: "Round finito",
};

const tutorial = {
  title: "Tutorial",
  next: "Avanti",
  back: "Indietro",
  skip: "Salta",
  start: "Andiamo!",
};

const landscapeScreen = {
  turnDevice: "Ruota il dispositivo!"
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
