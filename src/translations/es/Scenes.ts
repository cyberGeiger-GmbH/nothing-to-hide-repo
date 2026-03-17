import {
  SocialMediaTranslation,
  CookieTranslation,
  PhishingTranslation,
  PhotosTranslation,
  PasswordTranslation,
} from "../../types/translations/Scenes";

const socialMedia: SocialMediaTranslation = {
  prologue: {
    bedroom:
      "<T>[Tu habitación, bañada por la suave luz del atardecer. Tu teléfono vibra: Max está enviando mensajes al grupo otra vez. Te preguntas qué habrá descubierto esta vez...]</T>",
    innerDialog:
      "<T>Max siempre encuentra las cosas más geniales primero. Debería ver lo que le entusiasma ahora.</T>",
  },
  intro: {
    chatGroupName: "Grupo de Escuela",
    chat1: {
      characterName: "Max",
      dialog:
        "¡Chicos! ¡La nueva plataforma de redes sociales InstaVibe es increíble! 🔥🔥🔥",
    },
    chat2: {
      characterName: "Lea",
      dialog:
        "¿Otra plataforma nueva? Max, apenas puedo seguirle el ritmo a HoloSnap. ¿Seguro que vale la pena?",
    },
    chat3: {
      characterName: "Timo",
      dialog:
        "Si Max lo está promocionando, sabes que va a explotar de todos modos 😄 ¿Tienes un link?",
    },
    chat4: {
      characterName: "Max",
      dialog:
        "¡Ya lo tengo! Créeme, InstaVibe lo tiene. ¡Una energía completamente diferente! ¡Aquí está el enlace!",
    },
    player1: {
      dialog:
        "<B>[Pausa, pensativa...]</B>\nInstaVibe... He oído cosas buenas, pero debería tener cuidado. Echaré un vistazo rápido antes de acostarme.",
    },
    player2: {
      dialog:
        "<B>[Pausa, pensativa...]</B>\nInstaVibe... He oído cosas buenas, pero debería tener cuidado. Echaré un vistazo rápido antes de acostarme.",
    },
  },
  miniGame: {
    youHave: "Tu tienes",
    objectsFound: "objetos encontrados!",
    all: "todos",
    title: "Minijuego: Objetos Escondidos",
    description:
      "Encuentra todos los objetos que no debes publicar en InstaVibe. ¡Elimínalos de la foto antes de que se acabe el tiempo y se publique!",
    miniGameGiveUp: "Renuncia",
    tutorial: [
      {
        title: "Encuentra objetos",
        message:
          "Click en el objeto que hayas encontrado. Si es correcto, desaparecerá y oirás un sonido.",
      },
      {
        title: "Puntuación",
        message:
          "En la esquina superior derecha, verás cuántos objetos ya has encontrado.",
      },
      {
        title: "Límite de tiempo",
        message:
          'Observa la cuenta regresiva. Si no encuentras más objetos, también puedes presionar el botón "Renunciar".',
      },
    ],
  },
  quiz: [
    {
      question:
        'Una vez que hayas instalado InstaVibe, ¿qué significa realmente que tu perfil sea "público"?',
      answers: [
        {
          text: "Solo tu puedes ver tus publicaciones",
          description:
            "Si tu perfil es público, no solo tú, sino todos pueden ver tus publicaciones, incluso desconocidos.",
        },
        {
          text: "Cualquiera en internet puede ver tus publicaciones",
          description:
            "Un perfil público significa que cualquiera, incluso las personas que no sigues, puede ver todo lo que publicas: fotos, videos, textos.",
          isCorrect: true,
        },
        {
          text: "Solo tus amigos pueden ver tus publicaciones",
          description:
            'Si solo quieres que tus amigos vean tus publicaciones, debes configurar tu perfil como "privado".',
        },
        {
          text: "Solo tus familiares pueden ver tus publicaciones",
          description:
            "Con un perfil público, no solo tu familia sino cualquier usuario de Internet puede ver su contenido.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Quieres escribir una biografía interesante en InstaVibe? ¿Por qué no deberías incluir información personal?",
      answers: [
        {
          text: "Es aburrido para el resto",
          description:
            "No importa si algo es interesante o no, se trata de seguridad, no de entretenimiento.",
        },
        {
          text: "Extraños podrían hacer mal uso de esta información",
          description:
            "Si, por ejemplo, escribes tu edad, escuela o lugar de residencia en tu biografía, extraños pueden usar esta información para hacerte daño; por ejemplo, para manipularte o enviarte mensajes específicos y peligrosos.",
          isCorrect: true,
        },
        {
          text: "Nadie realmente lee la biografía",
          description:
            "Mucha gente sí consulta la biografía, sobre todo cuando consigues nuevos seguidores. A menudo, los desconocidos la leen primero.",
        },
        {
          text: "No puedes usar emoticonos",
          description:
            "Puedes usar emojis en la BIOS, ese no es el problema. El peligro radica en incluir demasiada información personal.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Después de haber publicado tu primer InstaVibe, ¿cómo puedes proteger tus fotos de miradas indiscretas?",
      answers: [
        {
          text: "Desactiva tu configuración de ubicación",
          description:
            "Desactivar la configuración de ubicación es una opción razonable, pero no protege directamente tus fotos de vistas no autorizadas.",
        },
        {
          text: "Ajusta tu configuración de privacidad",
          description:
            'Si ajusta correctamente su configuración de privacidad, por ejemplo, configura tu perfil como "privado" o elige quién puede ver tus publicaciones. Solo las personas seleccionadas pueden ver tus fotos.',
          isCorrect: true,
        },
        {
          text: "Agrega muchos amigos",
          description:
            "Cuantas más personas agregues, mayor será el riesgo de que alguien haga un mal uso o comparta tus fotos.",
        },
        {
          text: "Me gusta cada publicación",
          description: "Dar me gusta no protege tus propias fotos de ninguna manera.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Max te señaló un perfil sospechoso. ¿Cómo puedes saber si es falso?",
      answers: [
        {
          text: "Tiene una marca de verificación verificada.",
          description:
            "Una marca de verificación generalmente significa que el perfil es real; los perfiles falsos casi nunca tienen tal cosa.",
        },
        {
          text: "Tiene muchas fotos y amigos reales.",
          description:
            "Es más probable que tener muchos amigos y publicaciones reales sea señal de un perfil real.",
        },
        {
          text: "Tiene muy poca información, desconocida, imágenes y casi ninguna publicación",
          description:
            "Los perfiles falsos a menudo parecen vacíos, utilizan fotos de archivo o de otras personas y no tienen contenido real.",
          isCorrect: true,
        },
        {
          text: "Tiene un nombre gracioso",
          description:
            "Un nombre gracioso por sí solo no dice nada sobre si un perfil es genuino o falso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Cómo puedo asegurarme de que mi privacidad esté realmente protegida mientras navego por InstaVibe?",
      answers: [
        {
          text: "Publica todo públicamente",
          description:
            "Si todo es público, desconocidos también podrán ver todo tu contenido; eso no es seguro.",
        },
        {
          text: "Haz que tus publicaciones sean visibles solo para tus amigos",
          description:
            "Si haces que tus publicaciones sean visibles solo para tus amigos, protege sus datos y evita exponerlos a extraños.",
          isCorrect: true,
        },
        {
          text: "Da me gusta a todas las publicaciones",
          description: "Dar me gusta no tiene nada que ver con proteger sus propios datos.",
        },
        {
          text: "Envía tu dirección a desconocidos",
          description:
            "Nunca des datos personales como tu dirección a desconocidos - es extremadamente peligroso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Estás pensando en publicar el mensaje de Max? ¿Por qué es una mala idea sin su consentimiento?",
      answers: [
        {
          text: "Porque nadie está interesado",
          description:
            "No se trata de si alguien esta interesado o no, sino de privacidad y respeto.",
        },
        {
          text: "Porque ralentiza el telefono movil",
          description: "Una captura de pantalla no ralentiza tu teléfono, ese no es el problema.",
        },
        {
          text: "Porque es injusto y a menudo está prohibido",
          description:
            "Los mensajes privados son confidenciales; publicarlos sin consentimiento es injusto e incluso puede tener consecuencias legales.",
          isCorrect: true,
        },
        {
          text: "Porque recibe menos me gusta",
          description: "Los me gusta no tienen nada que ver con el derecho a la privacidad.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Cuál afirmación es realmente cierta en lo que respecta al manejo de las fotos de otras personas en InstaVibe?",
      answers: [
        {
          text: "Puedes publicar fotos de todos sin ningún problema.",
          description:
            "Toda persona tiene derecho a su propia imagen: no se permite publicar fotos sin permiso.",
        },
        {
          text: "Necesitas el permiso de las personas que aparecen en la foto.",
          description:
            "Antes de publicar una imagen, debes obtener el consentimiento de todas las personas que aparecen en ella; esto es justo y, a menudo, legalmente obligatorio.",
          isCorrect: true,
        },
        {
          text: "Siempre puedes publicar fotos de amigos.",
          description:
            "Tus amigos también tienen derecho a la privacidad y pueden decidir si una foto debe publicarse en línea o no.",
        },
        {
          text: "Siempre y cuando no etiquetes a nadie, todo está permitido.",
          description:
            "Que alguien esté etiquetado o no no cambia el hecho de que primero hay que pedir permiso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Recibes un mensaje extraño de un extraño, ¿Cómo deberías reaccionar?",
      answers: [
        {
          text: "Ignóralo y no hagas nada",
          description: "Ignorarlo a menudo no ayuda, el mensaje permanece allí y puede empeorar.",
        },
        {
          text: "Compártelo y reenvíalo",
          description: "Reenviarlo solo difunde más odio o riesgo.",
        },
        {
          text: "Bloquearlo y reportarlo",
          description:
            "Es mejor bloquear a la persona inmediatamente y reportar el mensaje al proveedor; así es como se toman medidas efectivas contra dichos usuarios.",
          isCorrect: true,
        },
        {
          text: "Insúltalos de vuelta",
          description:
            "Responder con insultos lo empeora todo y también te puede meter en problemas.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Un extraño te envía una solicitud de amistad en InstaVibe – ¿Por qué deberías ser cauteloso?",
      answers: [
        {
          text: "Porque de lo contrario, tendrás demasiados amigos",
          description: "No se trata de cuántos amigos tengas, sino de seguridad.",
        },
        {
          text: "Porque desconocidos podrían espiar tu información",
          description:
            "Si les das acceso a tu perfil a desconocidos, podrán ver tus datos personales y tal vez incluso hacer mal uso de ellos.",
          isCorrect: true,
        },
        {
          text: "Porque de lo contrario se te agotará la batería",
          description:
            "Tus amigos no tienen ninguna influencia sobre la batería de tu teléfono. Se trata de seguridad, no de la batería.",
        },
        {
          text: "Porque es vergonzoso",
          description:
            "No es vergonzoso ignorar las solicitudes de amistad que no conoces. Se trata de tu privacidad y protección.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Estás pensando en compartir tu ubicación en tu perfil? ¿Qué podría pasar si lo haces?",
      answers: [
        {
          text: "Tu batería se carga más rápido.",
          description: "La ubicación no tiene influencia en la velocidad de carga de su batería.",
        },
        {
          text: "Los desconocidos podrían encontrarte o seguirte.",
          description:
            "Si compartes tu ubicación real, los desconocidos pueden descubrir donde estás y tal vez incluso seguirte o contactarte de forma incómoda.",
          isCorrect: true,
        },
        {
          text: "Recibirás un regalo.",
          description: "Compartir tu ubicación no trae regalos - puede ponerte en peligro.",
        },
        {
          text: "Tu perfil será eliminado.",
          description:
            "Tu perfil no será eliminado, pero compartir la ubicación puede poner en peligro tu seguridad.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Después de configurar tu perfil de InstaVibe, ¿por qué no deberías publicar allí tu número de teléfono?",
      answers: [
        {
          text: "Porque a nadie le interesa",
          description:
            "No se trata de si a alguien le interesa o no. La privacidad y la seguridad son cruciales.",
        },
        {
          text: "Porque desconocidos podrían acosarte o engañarte",
          description:
            "Si muestras públicamente tu número de teléfono, desconocidos podrían llamarte, acosarte o incluso engañarte.",
          isCorrect: true,
        },
        {
          text: "Porque recibirás menos me gusta",
          description: "La cantidad de me gusta no tiene nada que ver con tu número de teléfono.",
        },
        {
          text: "Porque se eliminará automáticamente",
          description:
            "Su número de teléfono no se eliminará automáticamente, pero otros pueden usarlo indebidamente.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Quieres darle vida a tu perfil? ¿Qué información preferirías NO compartir?",
      answers: [
        {
          text: "Tu comida favorita",
          description:
            "Tu comida favorita no es información confidencial y no representa ningún peligro.",
        },
        {
          text: "Tu dirección",
          description:
            "Nunca debes compartir tu dirección en las redes sociales ya que los extraños pueden verlo y podría poner en peligro su seguridad.",
          isCorrect: true,
        },
        {
          text: "Una foto de tu perro",
          description:
            "Una foto de tu perro no tiene ningún problema siempre que no revele ninguna información privada.",
        },
        {
          text: "Una puesta de sol",
          description:
            "Una foto de una puesta de sol no es problemática y no afecta tu privacidad.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Estás planeando una nueva publicación? ¿Qué foto puedes compartir sin problemas?",
      answers: [
        {
          text: "Tu comida favorita",
          description:
            "Tu comida favorita no es información confidencial y no representa ningún peligro.",
        },
        {
          text: "Tu dirección",
          description:
            "Nunca debes compartir tu dirección en las redes sociales ya que los extraños pueden verlo, lo que podría poner en peligro su seguridad.",
        },
        {
          text: "Una foto de tu perro",
          description:
            "Una foto de tu perro no tiene ningún problema siempre que no revele ninguna información privada.",
        },
        {
          text: "Una puesta de sol",
          description:
            "Una foto de una puesta de sol no supone ningún problema y no afecta a tu privacidad.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
  ],
};

const cookie: CookieTranslation = {
  intro: {
    buttonTextAcceptCookies: "Aceptar todas las cookies",
    buttonTextManageCookies: "Administrar cookies",
    cookieInfo1:
      'Nosotros y terceros seleccionados utilizamos cookies o tecnologías similares, como se describe en la Política de Cookies. Puede aceptar el uso de dichas tecnologías haciendo clic en el botón "Aceptar".',
    player1: {
      dialog:
        "Hmm...¿por qué debería aceptar estas cookies? Prefiero gestionarlas y ver cuáles no son necesarias.",
    },
    hint: {
      dialog: "No puedo continuar todavía. Es necesario activar algo que el sitio web requiere.",
    },
    cookies: {
      title: "¿Quieres una galleta?",
      essentialTitle: "Esencial:",
      nonEssentialTitle: "No esencial:",
      essential: {
        login: "Login",
        security: "Seguridad",
        language: "Lenguaje",
        system: "Sistema",
      },
      nonEssential: {
        tracking: "Tracking",
        advertising: "Publicidad",
        marketing: "Marketing",
        thirdParty: "Tercera Persona",
        social: "Social Media",
        remarketing: "Remarketing",
        analytics: "Analyticas",
      },
      cookieInfo2:
        "Puede administrar sus cookies aquí. Algunas son esenciales y no se pueden desactivar.",
      cookieInfo3: "Todavía no puedo continuar. Una o más cookies aún deben desactivarse.",
      buttonTextContinue: "Continúa",
    },
  },
  miniGame: {
    title: "Cortador de Cookies",
    description: "¡Destroye todas las cookies malas!",
    goodCookieTexts: ["Sesión", "Carritos", "Seguridad", "Lenguaje", "Sistema"],
    badCookieTexts: [
      "Tracking",
      "Publicidad",
      "Marketing",
      "Tercera Persona",
      "Social Media",
      "Remarketing",
      "Analyticas",
    ],
    tutorial: [
      {
        title: "Cortador de Cookie",
        message: "Desliza el dedo por la pantalla para destruir las galletas defectuosas",
      },
      {
        title: "¡El tiempo corre!",
        message: "Ten en cuenta el cronómetro",
      },
      {
        title: "Puntuación",
        message:
          "Puedes ver cuántas buenas galletas has destruido al mirar tu puntuación. Si destruyes una galleta buena, obtienes puntos negativos",
      },
    ],
  },
  quiz: [
    {
      question: "¿Para qué se utilizan las cookies en Internet?",
      answers: [
        {
          text: "Para que los sitios web puedan recordar cosas (por ejemplo, inicio de sesión, carrito...)",
          description:
            "Las cookies almacenan información para que los sitios web puedan reconocerlo, como mantener la sesión iniciada o guardar artículos en su carrito.",
          isCorrect: true,
        },
        {
          text: "Para que su computadora funcione más rápido",
          description:
            "Las cookies no mejoran el rendimiento del hardware de su computadora.",
        },
        {
          text: "Para obtener más puntos en los videojuegos",
          description: "Las cookies no afectan tus puntuaciones en el juego.",
        },
        {
          text: "Para obtener actualizaciones automáticamente",
          description: "Las actualizaciones no están controladas por cookies.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué son las cookies de seguimiento?",
      answers: [
        {
          text: "Cookies que rastrean tu ubicación exacta",
          description:
            "Las cookies de seguimiento generalmente guardan información de navegación, no ubicación precisa.",
        },
        {
          text: "Cookies que rastrean qué sitios web visitas para anuncios personalizados",
          description:
            "Las cookies de seguimiento registran sus actividades de navegación para personalizar la publicidad.",
          isCorrect: true,
        },
        {
          text: "Cookies que almacenan tu contraseña",
          description: "Las contraseñas no se almacenan en las cookies de seguimiento.",
        },
        {
          text: "Cookies que previenen virus",
          description: "Las cookies no protegen contra malware.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Por qué InstaVibe te pide que aceptes las cookies la primera vez que lo abres?",
      answers: [
        {
          text: "Así obtienes más me gusta",
          description: "Los me gusta no tienen nada que ver con el consentimiento de las cookies.",
        },
        {
          text: "Porque de lo contrario la aplicación no sabe si te gusta InstaVibe",
          description:
            "Las solicitudes de cookies no se refieren a tus preferencias para otras aplicaciones.",
        },
        {
          text: "Porque muchos países tienen leyes que te protegen",
          description:
            "Leyes como el RGPD requieren consentimiento para que puedas tener control sobre tus datos.",
          isCorrect: true,
        },
        {
          text: "Para que tu teléfono no se bloquee",
          description: "La estabilidad del teléfono no depende de las cookies.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué sería más difícil en InstaVibe sin cookies?",
      answers: [
        {
          text: "Mantener la sesión iniciada y abrir tu perfil directamente",
          description: "Mantener la sesión iniciada y abrir tu perfil directamente.",
          isCorrect: true,
        },
        {
          text: "Edición de fotos con filtros",
          description: "Los filtros no dependen de las cookies.",
        },
        {
          text: "Subiendo videos",
          description: "Las subidas funcionan independientemente de las cookies.",
        },
        {
          text: "Enviando mensajes",
          description: "La mensajería normalmente no requiere cookies.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué cookies son útiles?",
      answers: [
        {
          text: "Inicio de sesión, seguimiento, análisis, sistema",
          description: "No todos son igualmente útiles o necesarios.",
        },
        {
          text: "Sistema, Inicio de sesión, Publicidad",
          description: "No se requiere publicidad para proporcionar funciones principales.",
        },
        {
          text: "Idioma, Sistema, Seguridad, Inicio de sesión",
          description:
            "Estas categorías ayudan con la configuración del idioma, la seguridad, y el inicio de sesión: son útiles.",
          isCorrect: true,
        },
        {
          text: "Ninguna de las respuestas es correcta",
          description: "Hay una respuesta correcta.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Para qué necesita InstaVibe las cookies del sistema?",
      answers: [
        {
          text: "Así obtienes más me gusta",
          description: "Los me gusta no tienen nada que ver con las cookies del sistema.",
        },
        {
          text: "Entonces ves anuncios de zapatos",
          description: "Esa es la función de las cookies de marketing, no cookies del sistema.",
        },
        {
          text: "Para que tu teléfono funcione más rápido",
          description: "Las cookies del sistema no afectan el rendimiento del dispositivo.",
        },
        {
          text: "Para que la aplicación sepa que has iniciado sesión y pueda cargar tus fotos",
          description:
            "Las cookies necesarias/del sistema respaldan funciones básicas como estado de la sesión y cargando contenido.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué sucede si deshabilita las cookies del sistema de InstaVibe?",
      answers: [
        {
          text: "La aplicación no funcionará correctamente.",
          description:
            "Sin las cookies necesarias, las funciones principales como el inicio de sesión o la carga de páginas pueden dejar de funcionar correctamente.",
          isCorrect: true,
        },
        {
          text: "Verás menos anuncios.",
          description:
            "Esto se refiere principalmente a las cookies de marketing, no cookies del sistema.",
        },
        {
          text: "Recibirás más me gusta.",
          description: "Las cookies no influyen en los me gusta.",
        },
        {
          text: "Puedes seguir publicando pero sin filtros",
          description: "Los filtros no dependen de las cookies del sistema.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Por qué son importantes las cookies analíticas para InstaVibe?",
      answers: [
        {
          text: "Para que tus amigos puedan dar me gusta más rápido",
          description: "Los me gusta no se ven afectados por las cookies de análisis.",
        },
        {
          text: "Para que la aplicación sepa qué funciones son populares y pueda mejorarlas",
          description:
            "Las cookies de análisis muestran qué áreas se utilizan, lo que ayuda al equipo a mejorar la aplicación.",
          isCorrect: true,
        },
        {
          text: "Para que tu teléfono tenga más almacenamiento",
          description: "Las cookies no aumentan el almacenamiento del dispositivo.",
        },
        {
          text: "Así que automáticamente obtienes seguidores",
          description: "Los análisis no generan más seguidores.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué hacen las cookies de marketing en InstaVibe?",
      answers: [
        {
          text: "Hacen que tus videos sean más populares.",
          description: "La popularidad no está controlada por las cookies.",
        },
        {
          text: "Almacenan los filtros que usas.",
          description: "Eso es más un tema de configuración/funciones, no marketing.",
        },
        {
          text: "Garantizan que tu perfil se mantenga privado.",
          description:
            "La configuración de privacidad es independiente de las cookies de marketing.",
        },
        {
          text: "Muestran anuncios relacionados con lo que ves (por ejemplo, ropa deportiva si visitas muchas páginas de deportes)",
          description:
            "Las cookies de marketing personalizan la publicidad basado en su comportamiento de navegación.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Qué tipo de cookies utiliza InstaVibe para ver qué funciones se utilizan con más frecuencia (por ejemplo, Historias, Reels, mensajes)?",
      answers: [
        {
          text: "Galletas de chocolate",
          description: "Sabrosas, pero no lo que queremos decir.",
        },
        {
          text: "Cookies de marketing",
          description: "Las cookies de marketing son principalmente para personalizar.",
        },
        {
          text: "Cookies de analisis",
          description:
            "Las cookies de análisis miden el uso y ayudan a comprender qué características son populares.",
          isCorrect: true,
        },
        {
          text: "Cookies de sistemas",
          description:
            "Las cookies del sistema son para funciones básicas, no para fines comerciales.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

const phishing: PhishingTranslation = {
  prologue: {
    bedroom:
      "<T>[A la mañana siguiente: Te estás preparando para la escuela cuando recibes una notificación de InstaVibe. Después de la configuración de ayer, tienes curiosidad por saber quién podría estar contactándote...]</T>",
  },
  intro: {
    player1: {
      dialog:
        "¿Alguien ya me está enviando mensajes por InstaVibe? ¡Qué rápido! Me pregunto si será alguno de mis amigos",
    },
    chat1: {
      characterName: "Jonas M. (10B)",
      dialog:
        "¡Hola! Vi que te acabas de unir a InstaVibe. ¡Bienvenido! Estoy organizando un evento escolar y necesito la lista de clases con la información de contacto. ¿Te importaría compartirla? ¡Me sería de gran ayuda!",
    },
    player2: {
      dialog:
        "Jonas de 10B? No creo que nos conozcamos... Esto... Parece demasiado directo para alguien que no conozco, ¿Debería confiar en él?",
    },
  },
  miniGame: {
    title: "¡Salven a los peces! ¡Detecten el phishing!",
    description: `No todo lo que hay en Internet es real: ¡esto también se aplica bajo el agua! Los cebos con mensajes caen al mar. El buceador busca a los anzuelos de pesca haciendo clic, lea los mensajes y decide: ¿es phishing o no?`,
    hint: "Cada decisión equivocada pone a tus peces en peligro, ¡así que ten cuidado!",
    startButton: "¡Vamos!",
    legit: "Real",
    phishing: "Phishing",
    gameOver: "Game over",
    success:
      "¡Bien hecho! Has ayudado a los peces a evitar cebos peligrosos y a mantenerse a salvo. Así es como te proteges del phishing en la vida real: manteniéndote alerta.",
    failure:
      "¡Oh, no! El pez se comió demasiados mensajes peligrosos y no sobrevivió. Al igual que en internet, un clic erróneo puede causar un gran daño.",
    phishingMessages: [
      {
        type: "email",
        sender: "support@instavibe.com",
        text: "Su cuenta ha sido suspendida debido a actividades sospechosas. Inicie sesión aquí para desbloquearla",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "premio@streamfest.io",
        text: "¡Felicitaciones! Has ganado 3 meses de premios gratis. Reclámalo ahora",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "update@gameworld.io",
        text: "Se requiere una nueva actualización. Descárgala aquí para seguir jugando.",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "verificacion@instavibe-support.com",
        text: "Verifique su cuenta de InstaVibe ahora, o será desactivado.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+49 1521 4455667",
        text: "Hola, soy yo, de la escuela. ¿Puedes enviarme tu información de acceso a InstaVibe? Necesito comprobar algo",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+43 660 9876543",
        text: "No se pudo entregar su paquete. Confirme su dirección aquí.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+41 76 123 4567",
        text: "¡Has ganado un premio en un concurso! Reclama tu premio",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+31 612345678",
        text: "Se detectó acceso no autorizado a su cuenta. Asegura tu cuenta ahora",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+33 612 345 678",
        text: "Factura no pagada. Realizar el pago a través de este enlace",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_giveaway",
        text: "¡Eres uno de nuestros mejores fans! ¡Gana productos exclusivos de InstaVibe ahora! Solo completa este formulario.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@grupoprofesores_oficial",
        text: "¿Puedes enviarme las respuestas del examen nuevamente? Las perdí. Aquí está el enlace.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@gratis_gamecoins",
        text: "¡Monedas gratis para tu juego favorito - exclusivamente para usuarios de InstaVibe!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_support_admin",
        text: "Ingrese sus datos de inicio de sesión para evitar perder el acceso.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@evento_oficial",
        text: "¡Entradas gratis para el concierto! Solo para los primeros 100 - ¡Date prisa!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_warning",
        text: "Su cuenta ha sido reportada. Ver queja aquí",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@brand_support_fake",
        text: "Para confirmar tu última publicación: Introduce tu contraseña aquí",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@randomuser324",
        text: "Oye, alguien está usando tus fotos en InstaVibe. ¡Mira esto!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe.alerta",
        text: "Debido a la alta demanda, debe iniciar sesión nuevamente. Haga clic aquí",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "support@instavibe.com",
        text: "Su registro se ha realizado correctamente. ¡Bienvenido a InstaVibe!",
        isPhishing: false,
      },
      {
        type: "email",
        sender: "info@instavibe.com",
        text: "Le hemos enviado un correo electrónico de confirmación. Por favor, confirme",
        isPhishing: false,
      },
      {
        type: "sms",
        sender: "+49 1521 4455667",
        text: "Su contraseña ha sido cambiada exitosamente. Puede iniciar sesión ahora.",
        isPhishing: false,
      },
      {
        type: "sms",
        sender: "+43 660 9876543",
        text: "Hemos enviado un nuevo boletín informativo. ¡Échale un vistazo!",
        isPhishing: false,
      },
      {
        type: "chat",
        sender: "@instavibe_support",
        text: "¿Cómo podemos ayudarte? Si tienes alguna pregunta, no dudes en contactarnos",
        isPhishing: false,
      },
      {
        type: "chat",
        sender: "@instavibe_team",
        text: "Últimas actualizaciones de InstaVibe. ¡Descubre las nuevas funciones!",
        isPhishing: false,
      },
    ],
    tutorial: [
      {
        title: "Nadando",
        message:
          "Navega y mantén presionada la flecha para nadar hasta el lugar deseado o usa las teclas de flecha.",
      },
      {
        title: "Sobres de Phishing",
        message: "Nade cerca de un sobre para abrirlo.",
      },
      {
        title: "Lee el mensaje",
        message: "Decide si es un cebo o no.",
      },
      {
        title: "Mala elección",
        message: "Las malas decisiones dañarán a los peces.",
      },
      {
        title: "Buena elección",
        message: "Las decisiones correctas curarán a los peces.",
      },
      {
        title: "Salud de los peces",
        message: "El objetivo es mantener vivos a los peces.",
      },
    ],
  },
  quiz: [
    {
      question:
        "Al revisar su correo electrónico, aparece un mensaje sospechoso. ¿Podría ser un intento de phishing? Pero ¿qué es el phishing?",
      answers: [
        {
          text: "Un juego online",
          description: "El phishing no es un juego, es una estafa.",
        },
        {
          text: "El intento de obtener datos personales",
          description:
            "En el phishing, los estafadores intentan obtener datos confidenciales como contraseñas, detalles de cuentas o datos de acceso a través de correos electrónicos, sitios web o mensajes falsos.",
          isCorrect: true,
        },
        {
          text: "Un genero de música",
          description: "Phishing no tiene nada que ver con música.",
        },
        {
          text: "Un programa antivirus",
          description:
            "Un programa antivirus protege contra virus, pero a veces también detecta intentos de phishing. Sin embargo, el phishing en sí mismo es un tipo de estafa.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Max no estaba seguro de un correo electrónico. ¿Cómo pudo reconocer que era phishing?",
      answers: [
        {
          text: "Proviene de una dirección de correo electrónico oficial.",
          description:
            "No es una señal de phishing, las direcciones que parecen oficiales parecen confiables.",
        },
        {
          text: "Proviene de una dirección de remitente inusual o incorrecta.",
          description: "Los remitentes inusuales o defectuosos son una fuerte indicación de phishing.",
          isCorrect: true,
        },
        {
          text: "El asunto contiene emoticonos coloridos.",
          description: "Los emoticonos por sí solos no indican phishing.",
        },
        {
          text: "Incluye un saludo amistoso.",
          description:
            "Los saludos amistosos también se utilizan en emails genuinos.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "El mensaje parece urgente. ¿Qué suelen escribir los estafadores de phishing para presionarte a reaccionar?",
      answers: [
        {
          text: "Elogio por su comportamiento seguro",
          description: "El elogio rara vez se utiliza para aplicar presión.",
        },
        {
          text: "Una amenaza de suspender su cuenta",
          description:
            "Las amenazas como la suspensión de la cuenta crean estrés y tentación de hacer clic.",
          isCorrect: true,
        },
        {
          text: "Un código de cupón",
          description:
            "Los cupones están destinados a atraerte, pero por lo general no aplican presión aguda.",
        },
        {
          text: "Una imagen divertida de un gato",
          description:
            "Las imágenes divertidas son inofensivas y no son una herramienta típica de phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Cuáles de estas características NO indican una phishing de correo electronico?",
      answers: [
        {
          text: "Correo electrónico inesperado con enlaces",
          description: "Los correos electrónicos inesperados con enlaces son típicos del phishing.",
        },
        {
          text: "Solicita tu contraseña",
          description: "Los correos electrónicos inesperados con enlaces son típicos del phishing.",
        },
        {
          text: "Errores ortográficos y expresiones extrañas",
          description: "El lenguaje deficiente y los errores son una característica común.",
        },
        {
          text: "Mensaje de tu mejor amigo",
          description: "Los mensajes de amigos reales no son una señal típica de phishing.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "El correo electrónico de phishing solicita información, ¿qué datos suelen buscar los estafadores después?",
      answers: [
        {
          text: "tu canción favorita",
          description: "Tus preferencias no son de interés para los estafadores.",
        },
        {
          text: "Sus datos bancarios y contraseñas",
          description: "Los datos bancarios y las contraseñas son el principal objetivo del phishing.",
          isCorrect: true,
        },
        {
          text: "tu comida favorita",
          description: "La comida favorita no tiene ningún valor para los estafadores.",
        },
        {
          text: "Tus calificaciones deportivas",
          description: "Las calificaciones deportivas no interesan a los estafadores.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Recibió un correo electrónico que parece sospechoso. ¿Cuál es la mejor manera de responder?",
      answers: [
        {
          text: "Haga clic en el enlace y compruébelo",
          description: "Hacer clic en el enlace puede ser peligroso.",
        },
        {
          text: "Eliminar o reportar el mensaje",
          description: "Lo mejor es eliminarlo o reportarlo directamente.",
          isCorrect: true,
        },
        {
          text: "Responder rapido",
          description: "Responder proporciona retroalimentación a los estafadores.",
        },
        {
          text: "Ignorar el mensaje",
          description: "Ignorar no ayuda, mejor denunciar o eliminarlo.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: 'El correo electrónico menciona "InstaVibe". ¿Por qué los estafadores suelen usar nombres conocidos?',
      answers: [
        {
          text: "Porque suena más gracioso",
          description: "No les importa si lo encuentras gracioso o no.",
        },
        {
          text: "Así confías más en el mensaje",
          description:
            "Los nombres familiares parecen confiables y crean una falsa sensación de seguridad.",
          isCorrect: true,
        },
        {
          text: "Para publicitar",
          description: "La publicidad no es el objetivo del phishing.",
        },
        {
          text: "Porque tienen más alcance de esta manera.",
          description: "El alcance no juega un papel aquí.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Cuál de las siguientes afirmaciones es correcta?",
      answers: [
        {
          text: "Nunca debes enviar datos personales por correo electrónico.",
          description: "Los datos personales nunca deben incluirse en correos electronicos.",
          isCorrect: true,
        },
        {
          text: "Las contraseñas pueden compartirse",
          description: "Las contraseñas nunca deben compartirse.",
        },
        {
          text: "Todos los enlaces en Internet son seguros.",
          description: "No todos los enlaces son seguros; muchos de ellos son peligrosos.",
        },
        {
          text: "Siempre debes hacer clic en 'Registrarse ahora'.",
          description:
            "Los botones 'Registrarse ahora' en los correos electrónicos pueden ser trampas de phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué puede pasar si haces clic en un enlace de phishing?",
      answers: [
        {
          text: "Se reproducirá tu canción favorita.",
          description: "No, tu canción favorita probablemente no se reproducirá.",
        },
        {
          text: "Sus datos serán robados.",
          description: "Sí, sus datos podrían ser robados directamente.",
          isCorrect: true,
        },
        {
          text: "Ganarás un teléfono inteligente.",
          description: "Las promesas de premios suelen ser una estafa.",
        },
        {
          text: "Nada, mis datos están seguros.",
          description: "Los enlaces de phishing casi siempre son inseguros.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué mensaje parece sospechoso?",
      answers: [
        {
          text: "Hola, ¿que tal?",
          description: "Parece normal e inofensivo.",
        },
        {
          text: "¡Has ganado 1,000 euros - haz click aquí!",
          description: "Promesas de premios con un enlace son estafas muy comunes.",
          isCorrect: true,
        },
        {
          text: "Nos vemos a las 3 p.m.",
          description: "Una cita completamente legítima.",
        },
        {
          text: "Buena suerte con el examen",
          description: "Parece un mensaje amigable, no sospechoso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "En el juego viste muchos mensajes de phishing. ¿Realmente solo llegan por correo electrónico?",
      answers: [
        {
          text: "Si",
          description: "El phishing también ocurre a través de SMS, redes sociales y otras plataformas.",
        },
        {
          text: "No",
          description: "El phishing puede llegar a través de muchos canales.",
          isCorrect: true,
        },
        {
          text: "Solo en teléfonos móviles",
          description: "El phishing puede ocurrir tanto en teléfonos móviles como en PC.",
        },
        {
          text: "Solo de noche",
          description: "La hora no importa.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Si no está seguro de si un mensaje es auténtico, deberías...",
      answers: [
        {
          text: "Proporcione sus datos para estar seguro.",
          description: "Nunca comparta datos personales.",
        },
        {
          text: "Pregunte a alguien o visite el sitio web oficial.",
          description:
            "Siempre verifique preguntando primero o visitando el sitio oficial usted mismo.",
          isCorrect: true,
        },
        {
          text: "Reenviar el mensaje.",
          description: "Reenviar solo distribuye el riesgo.",
        },
        {
          text: "Me gusta el mensaje.",
          description: "Me gusta no ayuda contra el phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué sucede a menudo si haces clic en un enlace de phishing?",
      answers: [
        {
          text: "Se le redirige a un sitio web falso.",
          description: "Se le lleva a una página falsa que puede robar sus datos.",
          isCorrect: true,
        },
        {
          text: "Recibirás un regalo.",
          description: "Las ofertas de phishing nunca son legítimas.",
        },
        {
          text: "Estás fuera de internet.",
          description:
            "En realidad no estás fuera de internet, pero tus datos podrían ser robados.",
        },
        {
          text: "Ganas un viaje.",
          description: "Los premios falsos como los viajes suelen ser una estafa de phishing.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

const photos: PhotosTranslation = {
  prologue: {},
  intro: {
    initialMessage:
      "Oye, probablemente también viste esa vergonzosa foto mía...¿Podrías ayudarme, por favor?",
    notificationTitle: "Mensaje de Max",
    overlayTitle: "Max te necesita!",
    overlayPrompt: "Escoge una acción",
    header: {
      avatarLabel: "S4",
      profileName: "CyberCareers",
      subtitle: "Sponsored • Escena 4",
    },
    minigameIntro: {
      title: "¿Publicar o no publicar? 🤔",
      description: [
        "Aparecerán una serie de fotos una tras otra.",
        "Para cada foto, elige si quieres publicarla en InstaVibe o mantenerlo privado.",
        "Asegúrate de no publicar fotos vergonzosas o dañinas.",
      ],
    },
    feedActions: {
      like: "Like",
      chat: "Chat",
      share: "Compartir",
    },
    commentsLabel: "Comentarios",
    actions: [
      {
        id: "ignorar",
        label: "No hagas nada e ignoralo",
        response: "Ignorarlo no hará que desaparezca. Me siento solo con ello.",
        isCorrect: false,
      },
      {
        id: "confront_publicly",
        label: "Comenta públicamente y dile al autor que lo borre",
        response:
          "Eso podría atraer más atención y la situación podría empeorar. No quiero empeorar las cosas.",
        isCorrect: false,
      },
      {
        id: "report_alone",
        label: "Reportar la foto al proveedor de la aplicación sin avisarle a Max",
        response:
          "Eso podría atraer más atención y la situación podría empeorar. No quiero empeorar las cosas.",
        isCorrect: false,
      },
      {
        id: "support_and_act",
        label: "Pregúntale a Max cómo se siente y ofrécete a ayudarlo a informar",
        response:
          "Gracias por consultarme primero. Significa mucho para mí. Reportémoslo juntos.",
        isCorrect: true,
      },
    ],
  },
  miniGame: {
    title: "¿Publicar o no publicar?",
    description:
      "Has visto que no todas las imágenes pertenecen a Internet. En este juego, tú decides: pulsa el botón derecho para publicar o el botón izquierdo para no publicar.",
    allCorrect: "¡Buen trabajo! ¡Lo hiciste todo bien!",
    minimumReached: "¡Muy bien! Respondiste la mayoría de las preguntas.",
    insufficient: "¡No está mal, pero aún hay margen de mejora!",
    post: "Publicar",
    notPost: "No publicar",
    couldPost: "Podrías publicar esta imagen.",
    shouldNotPost: "No deberías publicar esta imagen.",
  },
  quiz: [
    {
      question:
        "¿Qué es lo primero que debes hacer si tu amigo Max publica una foto tuya que no te gusta en InstaVibe?",
      answers: [
        {
          text: "Reportar la foto a InstaVibe inmediatamente",
          description:
            "Informar puede ayudar, pero primero intente resolverlo directamente con la persona que lo publicó.",
        },
        {
          text: "Insulta a Max en los comentarios",
          description:
            "Los insultos solo empeoran la situación y no harán que la foto se elimine más rápido.",
        },
        {
          text: "Pídele amablemente a Max en un mensaje privado que elimine la foto",
          description:
            "Correcto: Un mensaje privado tranquilo y amistoso suele ser la solución más rápida y respetuosa.",
          isCorrect: true,
        },
        {
          text: "No hagas nada, es tu amigo",
          description:
            "Si te sientes incómodo, tienes derecho a hablar; las amistades se basan en el respeto.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Tomaste una foto graciosa de Timo tropezando. ¿Puedes publicarla en InstaVibe sin su permiso?",
      answers: [
        {
          text: "Sí, es gracioso, ¡eso es lo único que importa!",
          description: "Ser gracioso no anula el derecho de alguien a su propia imagen.",
        },
        {
          text: "Solo si no lo etiquetas",
          description:
            "Incluso sin etiqueta, sigue siendo su imagen – debe estar de acuerdo.",
        },
        {
          text: "No, cada uno tiene 'derecho a su propia imagen'.",
          description:
            "Correcto: Necesitas permiso antes de publicar fotos de personas identificables.",
          isCorrect: true,
        },
        {
          text: "Sí, pero solo para amigos cercanos",
          description: "La privacidad aún se aplica en tu círculo privado; pregunta primero.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Le pediste a Max que borrara tu foto, pero no responde. ¿Cuál es el siguiente paso, el más sensato?",
      answers: [
        {
          text: "Hackear su contraseña y eliminarla usted mismo",
          description: "Hackear es ilegal y hace que todo sea más complicado.",
        },
        {
          text: "Publicar una foto vergonzosa de él para vengarse de él",
          description: "La venganza crea más problemas y también viola sus derechos.",
        },
        {
          text: "Reportando la foto a InstaVibe ya que ha sido publicado sin su consentimiento",
          description:
            "Correcto: Si el contacto directo falla, utilice las herramientas de denuncia de la plataforma para protegerse.",
          isCorrect: true,
        },
        {
          text: "Eliminando tu cuenta",
          description:
            "Eliminar tu cuenta no resuelve el problema. Usa primero las herramientas disponibles.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Cuál de las siguientes fotos se puede publicar en InstaVibe sin necesidad de permiso de nadie?",
      answers: [
        {
          text: "Una foto grupal de toda tu clase",
          description:
            "Las fotos grupales involucran a varias personas: necesitamos su consentimiento primero.",
        },
        {
          text: "Un extraño con una camisa genial",
          description: "Los extraños aún tienen privacidad y personalidad.",
        },
        {
          text: "Un atardecer junto al lago",
          description:
            "Correcto: Las fotos de naturaleza o paisajes que no muestran personas identificables están perfectamente bien.",
          isCorrect: true,
        },
        {
          text: "Tu hermanito jugando",
          description:
            "Las fotografías de niños requieren precaución adicional y el consentimiento de los padres.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Alguien subió una foto tuya a un perfil falso y está escribiendo cosas malas. ¿Qué deberías hacer?",
      answers: [
        {
          text: "Escríbele al perfil y devuélvele el insulto",
          description: "Insultar de vuelta puede empeorar la situación.",
        },
        {
          text: "Reporta el perfil inmediatamente y habla con un padre",
          description:
            "Correcto: Obtenga apoyo de adultos de confianza y utilice herramientas de denuncia.",
          isCorrect: true,
        },
        {
          text: "No hagas nada, se detendrá solo.",
          description: "Problemas como este a menudo empeoran si se ignoran.",
        },
        {
          text: "Pídeles a tus amigos que también insulten a esa persona",
          description:
            "El acoso coordinado puede agravar la situación y violar las reglas de la plataforma.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Quieres publicar una foto de tu informe escolar porque estás orgulloso. ¿Por qué podría ser una mala idea?",
      answers: [
        {
          text: "Los demás podrían ponerse celosos de tus notas.",
          description:
            "Los celos no son el problema principal, sino la exposición de datos personales.",
        },
        {
          text: "Los informes escolares son aburridos y probablemente no llegarán a buen puerto",
          description: "Los 'me gusta' no importan, tu privacidad sí.",
        },
        {
          text: "Muestra datos privados como tu nombre completo, fecha de nacimiento y nombre de la escuela.",
          description:
            "Correcto: Esos detalles pueden usarse incorrectamente si se comparte públicamente.",
          isCorrect: true,
        },
        {
          text: "La escuela lo prohíbe estrictamente.",
          description:
            "Pueden existir normas al respecto, pero la protección de los datos personales es la razón principal.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "El 'derecho a la propia imagen' significa que…",
      answers: [
        {
          text: "...solo puedes publicar fotos profesionales tuyas.",
          description: "No, se trata del consentimiento, no de la calidad de la foto.",
        },
        {
          text: "…en general, cada persona tiene derecho a decidir si se pueden publicar imágenes de ella.",
          description: "Correcto: La publicación de fotos identificables requiere permiso.",
          isCorrect: true,
        },
        {
          text: "…puedes cobrar dinero por cada foto que tomes.",
          description: "Eso no tiene nada que ver con este derecho.",
        },
        {
          text: "...tienes derecho a dibujar cualquier imagen que quieras.",
          description: "Dibujar es otra historia: lo correcto es publicar fotos de personas.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "En la fiesta de Lea, se tomó una foto donde alguien está teniendo un momento vergonzoso de fondo. ¿Deberías publicarlo?",
      answers: [
        {
          text: "Sí, es divertido y todos se reirán.",
          description: "Lo gracioso para ti puede ser hiriente para ellos. El respeto es lo primero.",
        },
        {
          text: "No, podría avergonzar y herir a la persona en segundo plano.",
          description: "Correcto: No expongas el momento incómodo de otra persona.",
          isCorrect: true,
        },
        {
          text: "Sí, pero solo si la persona no es claramente visible",
          description:
            "Incluso si la foto está borrosa, las personas aún podrían ser identificables o sentirse expuestas.",
        },
        {
          text: "Tal vez, pero agrega un filtro divertido",
          description: "Un filtro no resuelve el problema de la privacidad.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Reportaste una imagen en InstaVibe pero no pasa nada. ¿A quién puedes contactar fuera de la aplicación?",
      answers: [
        {
          text: "Nadie, no se puede hacer nada más.",
          description: "Siempre hay gente a la que puedes pedir ayuda.",
        },
        {
          text: "Tus seguidores, para presionar a la persona",
          description:
            "Movilizar una turba puede llevar a más daño y violaciones de las reglas.",
        },
        {
          text: "El fabricante de su teléfono",
          description: "No pueden ayudar con el contenido de la plataforma.",
        },
        {
          text: "Padres, profesores o un servicio de asesoramiento",
          description:
            "Correcto: Adultos o servicios de confianza pueden ayudarle a tomar medidas adicionales.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "¿Por qué es una buena idea desactivar el etiquetado automático de ubicación -geoetiquetado- antes de publicar fotos en InstaVibe?",
      answers: [
        {
          text: "Porque mejora la calidad de la foto",
          description: "La calidad de la imagen no se ve afectada por la ubicación etiquetada.",
        },
        {
          text: "Porque, de lo contrario, obtendrás menos me gusta",
          description: "Los 'Me gusta' no están relacionados con el geoetiquetado.",
        },
        {
          text: "Porque los extraños podrían descubrir dónde estás generalmente ubicado",
          description:
            "Correcto: Patrones de ubicación -casa, escuela- puede exponerle a riesgos.",
          isCorrect: true,
        },
        {
          text: "Porque ahorra batería del teléfono",
          description:
            "La duración de la batería no es la razón principal: la privacidad y la seguridad son.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

const password: PasswordTranslation = {
  prologue: {
    classroom:
      "<T>[Laboratorio de informática. Te sientas junto a tus compañeros, curioso por la lección de hoy. El Sr. Müller parece tener algo interesante planeado...]</T>",
  },
  intro: {
    herrMueller1:
      "<B>Mr. Müller:</B>\nMuy bien, ¡hoy hay algo diferente! La escuela está implementando un nuevo sistema de correo electrónico. Cada uno tendrá su propia dirección de correo electrónico escolar.",
    herrMueller2:
      "(Escribe en su teclado mientras el proyector muestra la página de inicio del sistema. Te inclinas hacia adelante, interesado.)",
    herrMueller3:
      "<B>Mr. Müller:</B>\nVaya a mail.school-net.com e inicie sesión con tu contraseña temporal. Primero, DEBES crear una contraseña segura. ¡Recuerda lo que aprendimos sobre seguridad en línea!",
    player1:
      "<B>[Navegas a la URL y ves: 'Bienvenido a SchoolMail - Establecer nueva contraseña']</B>\nDespués de todo lo que he aprendido sobre seguridad en línea, necesito hacer que esta contraseña sea realmente segura...",
  },
  miniGame: {
    title: "Destructor de contraseñas",
    description: "Descubre qué hace que una contraseña sea segura y cuáles son inseguras.",
    hint: "Pero recuerda: ¡Una contraseña segura por sí sola no garantiza tu seguridad!",
    endScreenScore: "Tu puntuación final: ",
    tutorial: [
      {
        title: "Controles",
        message:
          "Dirige la hoja de sierra hacia las contraseñas con el mouse, el tacto o el teclado y córtalas (←/A izquierda, →/D derecha).",
      },
      {
        title: "Contraseñas",
        message:
          "Dirige la hoja de sierra hacia las contraseñas y córtalas - ¡pero sólo los débiles!",
      },
      {
        title: "Puntos",
        message: "¡No cortes contraseñas seguras o perderás puntos!",
      },
    ],
  },
  quiz: [
    {
      question:
        "Sr. Müller le pidió que creara una contraseña nueva y segura para tu correo electrónico escolar. ¿Qué hace que una contraseña sea realmente segura?",
      answers: [
        {
          text: "Tu nombre y año de nacimiento",
          description:
            "Una contraseña que consta de su nombre y año de nacimiento es muy fácil de adivinar. ¡Evita la información personal!",
        },
        {
          text: "Al menos 8 caracteres, letras mayúsculas y minúsculas, números y caracteres especiales",
          description:
            "Una contraseña segura debe tener al menos 8 caracteres y contener una combinación de mayúsculas y minúsculas, números y caracteres especiales. Esto dificulta descifrar la contraseña.",
          isCorrect: true,
        },
        {
          text: "'123456'",
          description:
            "'123456' es uno de los más comunes y débiles, se puede hackear en segundos.",
        },
        {
          text: "El nombre de tu mascota",
          description:
            "El nombre de tu mascota es fácil de adivinar, especialmente si alguien te conoce. Evita los nombres simples.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Ahora tienes una contraseña segura para tu correo electrónico escolar y para InstaVibe. ¿Con qué frecuencia deberías cambiar contraseñas tan importantes?",
      answers: [
        {
          text: "Nunca",
          description:
            "Si nunca cambia sus contraseñas, su cuenta se convierte en un blanco fácil en caso de robo.",
        },
        {
          text: "Sólo cuando tengas un teléfono nuevo",
          description:
            "Un teléfono nuevo no significa automáticamente que tengas que cambiar tu contraseña: lo que importa es la protección si existe sospecha de robo de datos.",
        },
        {
          text: "Regularmente y si sospecha de un uso indebido",
          description:
            "Cambiar regularmente sus contraseñas y cambiarlas inmediatamente si sospecha que han sido utilizadas incorrectamente protege sus cuentas de los atacantes.",
          isCorrect: true,
        },
        {
          text: "Siempre que estés de mal humor",
          description: "Tu estado de ánimo no tiene nada que ver con la seguridad de la contraseña.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Qué es un administrador de contraseñas?",
      answers: [
        {
          text: "Un programa que reproduce música",
          description: "Los programas de música no tienen nada que ver con contraseñas.",
        },
        {
          text: "Un juego para tu teléfono",
          description:
            "Un administrador de contraseñas no es un juego, sino una herramienta para tu seguridad.",
        },
        {
          text: "Un programa que almacena contraseñas de forma segura",
          description:
            "Un administrador de contraseñas te ayuda a almacenar de forma segura todas tus contraseñas y recordarlas: solo necesitas recordar una contraseña maestra.",
          isCorrect: true,
        },
        {
          text: "Una carpeta en el escritorio",
          description:
            "Una carpeta en el escritorio sería insegura y carecería de las funciones protectoras de un verdadero administrador de contraseñas.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Cuál de las siguientes contraseñas es la más segura?",
      answers: [
        {
          text: "Football123",
          description:
            "Contiene letras y números, pero es fácil de adivinar, sobre todo si alguien sabe que te gusta el fútbol.",
        },
        {
          text: "H@u$M@u$2025!",
          description:
            "Esta contraseña es larga, creativa y contiene mayúsculas y minúsculas, números y caracteres especiales.",
          isCorrect: true,
        },
        {
          text: "987654321",
          description:
            "Esta es una secuencia simple de números y una de las contraseñas más comunes; son muy inseguras.",
        },
        {
          text: "Hola",
          description:
            "Una palabra sencilla sin números ni caracteres especiales es demasiado fácil de adivinar.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Cómo puedes recordar una contraseña segura?",
      answers: [
        {
          text: "No, en absoluto. Debes usar la misma contraseña para todo",
          description:
            "Usar la misma contraseña para todo es muy inseguro y puede conducir fácilmente al robo de datos.",
        },
        {
          text: "Formando una oración y tomando la primera letra de cada palabra",
          description:
            "Una frase te ayuda a crear una contraseña única y segura que puedas recordar fácilmente, por ejemplo: \"¡A mi perro le encantan los 3 huesos grandes!\" → ¡MdL3gB!",
          isCorrect: true,
        },
        {
          text: "Escribiéndolo en una nota y pegándola en la pantalla",
          description: "Una contraseña en una nota visible es fácil de robar.",
        },
        {
          text: "Usando sólo números",
          description:
            "Una contraseña segura debe contener números, letras y caracteres especiales, no solo números.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Por qué son importantes los caracteres especiales en una contraseña?",
      answers: [
        {
          text: "Hacen que sea más fácil recordarlo.",
          description:
            "Los caracteres especiales a menudo hacen que las contraseñas sean un poco más complicadas, pero no necesariamente más fáciles de recordar.",
        },
        {
          text: "Aumentan la seguridad porque hay más posibilidades.",
          description:
            "Los caracteres especiales aumentan el número de combinaciones posibles, haciendo que la contraseña sea mucho más difícil de descifrar.",
          isCorrect: true,
        },
        {
          text: "Se ven bien.",
          description: "La apariencia no importa: la seguridad es crucial.",
        },
        {
          text: "Reducen la longitud de la contraseña.",
          description:
            "Los caracteres especiales no acortan la contraseña, solo la hacen más fuerte.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "¿Cuál de las siguientes afirmaciones es correcta?",
      answers: [
        {
          text: "Una contraseña segura debe ser lo más corta posible.",
          description:
            "Las contraseñas cortas son mucho más fáciles de adivinar o descifrar. ¡Cuanto más tiempo, mejor!",
        },
        {
          text: "Las contraseñas deben compartirse con amigos.",
          description:
            "Las contraseñas son privadas y nunca deben compartirse, ni siquiera con amigos.",
        },
        {
          text: "Una contraseña debe ser lo más larga y compleja posible.",
          description:
            "Una contraseña larga y compleja con letras, números y caracteres especiales es mucho más segura.",
          isCorrect: true,
        },
        {
          text: "Una contraseña no necesita letras mayúsculas.",
          description:
            "Las letras mayúsculas aumentan la seguridad porque crean más posibilidades en la combinación de la contraseña.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Imagina que un compañero de clase mira por encima de tu hombro y ahora sabe la contraseña de tu correo electrónico escolar. ¿Qué podrían hacer con ella?",
      answers: [
        {
          text: "Pueden hacerse pasar por ti y hacer mal uso de tus datos.",
          description:
            "Quien conozca tu contraseña puede hacerse con el control de tu cuenta, enviar mensajes, realizar compras o robar datos privados.",
          isCorrect: true,
        },
        {
          text: "Pueden hornearte un pastel.",
          description: "Tu contraseña no tiene nada que ver con hornear un pastel.",
        },
        {
          text: "Pueden borrar tu contraseña.",
          description:
            "Conocer la contraseña por sí sola no es suficiente para borrarla; el daño se produce al acceder a tu cuenta.",
        },
        {
          text: "Pueden llamar a tu teléfono.",
          description: "Su contraseña no tiene influencia en el teléfono o llamadas.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Si escribes una contraseña, ¿dónde debes guardarla?",
      answers: [
        {
          text: "Justo al lado de la computadora",
          description:
            "Una contraseña dejada a la vista junto a la computadora puede ser fácilmente encontrada y robada por otros.",
        },
        {
          text: "En un chat público",
          description:
            "En un chat público, muchas personas pueden leer al mismo tiempo; esto es muy peligroso.",
        },
        {
          text: "En un lugar seguro que sólo tú conoces",
          description:
            "Si escribes tu contraseña, mantenla en un lugar secreto y seguro que sólo usted conoce, por ejemplo, en un cajón cerrado o en un documento cifrado.",
          isCorrect: true,
        },
        {
          text: "Publícalo en las redes sociales",
          description:
            "Las contraseñas nunca deben publicarse; eso sería una invitación a los piratas informáticos.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Tanto tu nueva cuenta de correo electrónico escolar como InstaVibe ofrecen autenticación de dos factores (2FA). ¿Cuál es la mayor ventaja de usarla?",
      answers: [
        {
          text: "Ya no necesitas una contraseña.",
          description: "Aún necesitas tu contraseña, pero se requiere una confirmación adicional.",
        },
        {
          text: "Hay una segunda capa de seguridad además de la contraseña.",
          description:
            "Con la autenticación de dos factores, estas doblemente seguro y protegido, por ejemplo, mediante una contraseña y un código enviado a su teléfono.",
          isCorrect: true,
        },
        {
          text: "Se extiende automáticamente la contraseña.",
          description:
            "La longitud de la contraseña permanece igual; simplemente se agrega un paso de verificación adicional.",
        },
        {
          text: "Recibes una nueva contraseña cada día.",
          description:
            "Tu contraseña permanece igual, pero el código de confirmación cambia con cada inicio de sesión.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

export const scenes = { socialMedia, cookie, phishing, photos, password };
