import { GeneralTranslation } from "../../types/translations/General";

const common: GeneralTranslation["common"] = {
  currentLanguage: "Español",
  open: "Abrir",
  close: "Cerrar",
  back: "Atrás",
  proceed: "Continuar",
  retry: "Reintentar",
  save: "Guardar",
  cancel: "Cancelar",
  from: "De",
  You: "Tú",
  great: "Genial",
  maxGamePoints: "Has obtenido {POINTS} de {MAX_POINTS} puntos posibles en este juego.",
};

const settings: GeneralTranslation["settings"] = {
  title: "Configuración",
  audioEnabled: "Sonido activado",
  musicVolume: "Música",
  soundEffectsVolume: "Efectos de sonido",
  chooseLanguage: "Elegir idioma",
};

const about: GeneralTranslation["legal"] = {
  titleImpressum: "Aviso legal",
  titleGeneral: "Información general",
  textGeneral: "Esta aplicación fue desarrollada como parte de un proyecto estudiantil para el programa de Licenciatura en Informática de la Universidad de Ciencias Aplicadas y Artes del Noroeste de Suiza (FHNW). El cliente y responsable del contenido es DataPro. DataPro es un proyecto financiado dentro del programa UE Erasmus+ Educación Escolar de 2023 a 2026 y está cofinanciado por la UE (Web: www.datapro.education).",
  titleContact: "Contacto",
  textContact: "El operador de este sitio web es la Universidad de Educación de Friburgo (Pädagogische Hochschule Freiburg). Se puede contactar en la siguiente dirección:\n" +
    "Pädagogische Hochschule Freiburg\n" +
    "Kunzenweg 21\n" +
    "79117 Freiburg\n" +
    "Tel.: (0761) 682-0\n" +
    "Fax: (0761) 682-402\n" +
    "E-Mail: rektor(at)ph-freiburg.de\n" +
    "Internet: www.ph-freiburg.de\n" +
    "La Universidad de Educación de Friburgo es una corporación de derecho público.\n" +
    "Está legalmente representada por el Rector.\n" +
    "La autoridad de supervisión competente es el Ministerio de Ciencia, Investigación y Artes de Baden-Württemberg (MWK) (Königstraße 46, D - 70173 Stuttgart, Web: mwk.baden-wuerttemberg.de).\n",
  titleLinks: "Enlaces externos",
  textLinks: "Esta aplicación contiene enlaces a sitios web externos. El respectivo proveedor u operador es responsable del contenido de las páginas vinculadas.",
  titleCopyright: "Derechos de autor",
  textCopyright: "El código fuente de este sitio web está disponible en GitHub: www.github.com/nothing-to-hide/nothing-to-hide. Es una aplicación de código abierto y el uso del código y el contenido se rige por la licencia MIT.",
  titleDisclaimer: "Descargo de responsabilidad",
  textDisclaimer: "El contenido de esta aplicación fue creado con el mayor cuidado. Sin embargo, no se puede garantizar la corrección, integridad y actualidad del contenido. Se recomienda jugar bajo la supervisión de padres o profesores. Como proyecto estudiantil, esta aplicación sirve exclusivamente para fines de demostración y aprendizaje. No se asume responsabilidad por daños de naturaleza material o inmaterial derivados del uso o no uso de la información proporcionada.",
  titlePrivacy: "Política de privacidad",
  textPrivacy: "La aplicación fue diseñada desde el principio de manera que no sea posible identificar personas físicas. Todos los datos recopilados están anonimizados y no se procesan datos personales. Además, no se transfieren datos a proveedores de servicios externos ni a terceros.\n" +
    "Puede dirigir consultas adicionales en cualquier momento al proyecto DataPro en la Universidad de Educación de Friburgo. Incluya \"DataPro Web Games\" en el asunto de su correo electrónico a poststelle(at)ph-freiburg.de.\n" +
    "Si tiene más preguntas sobre la protección de datos, comuníquese con nuestro Oficial de Protección de Datos en datenschutz(at)ph-freiburg.de.\n" +
    "Además, tiene la opción de presentar una queja ante el Comisionado Estatal para la Protección de Datos y la Libertad de Información de Baden-Württemberg (Web: https://www.baden-wuerttemberg.datenschutz.de/).",
};

export const general: GeneralTranslation = {
  common,
  settings,
  legal: about,
};
