import { CommonGameTranslation } from "../../types/translations/CommonGame";

const startScreen = {
  pressStart: "Iniciar juego",
  startGame: "Iniciar juego",
};

const playerSetup = {
  title: "Nothing To Hide",
  welcomeTo: "Bienvenido a",
  description:
    "Antes de comenzar, elige un apodo genial y un avatar que te represente.",
  errorUsername: "Por favor ingresa un apodo.",
  errorUsernameInvalid: "El apodo solo puede contener letras y números",
  errorAvatar: "Por favor selecciona un avatar.",
  usernameLabel: "Apodo",
  usernamePlaceholder: "Ingresa tu apodo",
  avatarLabel: "Seleccionar avatar",
  avatarAlt: "Selección de avatar",
  continueButton: "Continuar",
};

const quizSetup = {
  title: "¡Hora del cuestionario!",
  getReady: "Preparado para un cuestionario",
  startSoon: "Comienza pronto...",
};

const achievements = {
  title: "Logros de:",
  unlockedMessage: "¡Felicidades, has alcanzado el siguiente hito!",
  failedMessage: "Lamentablemente no lograste esta insignia:",
  password: "Maestro de Contraseñas",
  cookie: "Maestro de Cookies",
  socialMedia: "Maestro de Redes Sociales",
  photo: "Maestro de Fotos",
  phishing: "Maestro de Phishing",
};

const introduction = {
  welcome: "Hola",
  role: "Eres un estudiante de 10º grado. Estás relajándote hasta que tu teléfono vibra. De repente estás en medio de todo: ¿Tu tarea? Tomar decisiones, mantener la calma y mantener el control del caos digital.",
  message: "Tu juego, tus decisiones, ¡Vamos!",
};

const endScreen = {
  successTitle: "¡Felicidades, Protector Digital!",
  successMessage: "Has superado todos los desafíos y ganado todas las insignias de ciberseguridad.\n¡Tu cuenta ahora está súper protegida! ¡Hackers, phishers y cookies curiosos no tienen ninguna oportunidad!",
  successEndingMessage: "La aplicación InstaVibe confía en ti y permanece en tu dispositivo.\nContinúa compartiendo de manera responsable y ayuda a otros a convertirse también en héroes digitales.",
  failedTitle: "¡Casi llegas!",
  failedMessage: "Ya has aprendido muchas cosas importantes, pero aún faltan algunos puntos.\nPara proteger tu seguridad, la aplicación InstaVibe se desactivará ahora.",
  failedEndingMessage: "No te preocupes, puedes reiniciar el juego, recolectar las insignias faltantes y regresar aún más fuerte!",
  pointsEarned: `Puntos ganados: {POINTS}`,
  tryAgain: "Jugar de nuevo",
  replayFailedModules: "Recuperar niveles faltantes",
  gameOver: "Fin del juego",
  roundOver: "Ronda terminada",
};

const tutorial = {
  title: "Tutorial",
  next: "Siguiente",
  back: "Atrás",
  skip: "Omitir",
  start: "¡Vamos!",
};

const landscapeScreen = {
  turnDevice: "¡Por favor gira tu dispositivo!"
}

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
