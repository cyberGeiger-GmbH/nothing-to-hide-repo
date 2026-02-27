import { GeneralTranslation } from "../../types/translations/General";

const common: GeneralTranslation["common"] = {
  currentLanguage: "Italiano",
  open: "Apri",
  close: "Chiudi",
  back: "Indietro",
  proceed: "Continua",
  retry: "Riprova",
  save: "Salva",
  cancel: "Annulla",
  from: "Da",
  You: "Tu",
  great: "Ottimo",
  maxGamePoints: "Hai totalizzato {POINTS} su {MAX_POINTS} punti possibili in questo gioco.",
};

const settings: GeneralTranslation["settings"] = {
  title: "Impostazioni",
  audioEnabled: "Audio attivo",
  musicVolume: "Musica",
  soundEffectsVolume: "Effetti sonori",
  chooseLanguage: "Scegli la lingua",
};

const about: GeneralTranslation["legal"] = {
  titleImpressum: "Impronta",
  titleGeneral: "Informazioni generali",
  textGeneral: "Questa applicazione è stata sviluppata nell'ambito di un progetto studentesco per il corso di laurea triennale in Informatica presso la Scuola Universitaria Professionale della Svizzera nordoccidentale (FHNW). Il committente e responsabile dei contenuti è DataPro. DataPro è un progetto finanziato nell'ambito del programma UE Erasmus+ Istruzione scolastica dal 2023 al 2026 ed è quindi cofinanziato dall'UE (Web: www.datapro.education).",
  titleContact: "Contatto",
  textContact: "L'operatore di questo sito web è l'Università di Scienze dell'Educazione di Friburgo (Pädagogische Hochschule Freiburg). È raggiungibile al seguente indirizzo:\n" +
    "Pädagogische Hochschule Freiburg\n" +
    "Kunzenweg 21\n" +
    "79117 Freiburg\n" +
    "Tel.: (0761) 682-0\n" +
    "Fax: (0761) 682-402\n" +
    "E-Mail: rektor(at)ph-freiburg.de\n" +
    "Internet: www.ph-freiburg.de\n" +
    "L'Università di Scienze dell'Educazione di Friburgo è una corporazione di diritto pubblico.\n" +
    "È legalmente rappresentata dal Rettore.\n" +
    "L'autorità di vigilanza competente è il Ministero della Scienza, della Ricerca e delle Arti del Baden-Württemberg (MWK) (Königstraße 46, D - 70173 Stuttgart, Web: mwk.baden-wuerttemberg.de).\n",
  titleLinks: "Link esterni",
  textLinks: "Questa applicazione contiene link a siti web esterni. Il rispettivo fornitore o operatore è responsabile del contenuto delle pagine collegate.",
  titleCopyright: "Copyright",
  textCopyright: "Il codice sorgente di questo sito web è disponibile su GitHub: www.github.com/nothing-to-hide/nothing-to-hide. È un'applicazione open-source e l'uso del codice e dei contenuti è regolato dalla licenza MIT.",
  titleDisclaimer: "Avvertenza",
  textDisclaimer: "Il contenuto di questa applicazione è stato creato con la massima cura. Tuttavia, non si può garantire la correttezza, completezza e aggiornamento dei contenuti. Si consiglia di giocare sotto la supervisione dei genitori o degli insegnanti. In quanto progetto studentesco, questa applicazione ha esclusivamente scopi dimostrativi e didattici. Non si assume alcuna responsabilità per danni di natura materiale o immateriale derivanti dall'uso o dal mancato uso delle informazioni fornite.",
  titlePrivacy: "Informativa sulla privacy",
  textPrivacy: "L'applicazione è stata progettata fin dall'inizio in modo tale da non consentire l'identificazione di persone fisiche. Tutti i dati raccolti sono anonimizzati e non vengono trattati dati personali. Inoltre, nessun dato viene trasferito a fornitori di servizi esterni o terze parti.\n" +
    "Per ulteriori domande potete rivolgervi in qualsiasi momento al progetto DataPro presso l'Università di Scienze dell'Educazione di Friburgo. Si prega di includere \"DataPro Web Games\" nell'oggetto della propria e-mail a poststelle(at)ph-freiburg.de.\n" +
    "Per ulteriori domande sulla protezione dei dati personali, contattare il nostro Responsabile della protezione dei dati all'indirizzo datenschutz(at)ph-freiburg.de.\n" +
    "Avete inoltre la possibilità di presentare un reclamo al Commissario statale per la protezione dei dati e la libertà di informazione del Baden-Württemberg (Web: https://www.baden-wuerttemberg.datenschutz.de/).",
};

export const general: GeneralTranslation = {
  common,
  settings,
  legal: about,
};
