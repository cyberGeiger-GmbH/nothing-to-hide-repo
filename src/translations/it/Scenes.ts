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
      "<T>[La tua camera da letto, immersa nella morbida luce della sera. Il tuo telefono vibra: Max sta inviando un altro messaggio al gruppo. Ti chiedi cosa abbia scoperto questa volta...]</T>",
    innerDialog:
      "<T>Max scopre sempre per primo le cose più interessanti. Dovrei vedere cosa lo entusiasma tanto adesso.</T>",
  },
  intro: {
    chatGroupName: "Gruppo Scuola",
    chat1: {
      characterName: "Max",
      dialog:
        "Ragazzi! La nuova piattaforma social InstaVibe è fantastica! Dovete assolutamente iscrivervi, sarà un successo!🔥🔥🔥",
    },
    chat2: {
      characterName: "Lea",
      dialog:
        "Un'altra nuova piattaforma? Max, riesco a malapena a stare al passo con HoloSnap 😅 Sei sicuro che ne valga la pena?",
    },
    chat3: {
      characterName: "Timo",
      dialog: "Se Max lo sta pubblicizzando, sai già che sarà un successo 😄 Hai un link?",
    },
    chat4: {
      characterName: "Max",
      dialog:
        "Già capito! Fidati di me: InstaVibe ha un'energia completamente diversa. Ecco il link!",
    },
    player1: {
      dialog:
        "<B>[Ti fermi, pensieroso...]</B>\nInstaVibe... Ho sentito cose positive, ma devo stare attento. Darò solo un'occhiata veloce prima di andare a letto.",
    },
    player2: {
      dialog:
        "<B>[Dopo aver scaricato InstaVibe]</B>\nOkay, Vediamo di cosa si tratta. È ora di esplorare, ma terrò a mente il consiglio di Max sull'importanza di comportarsi in modo intelligente online.",
    },
  },
  miniGame: {
    youHave: "Hai",
    objectsFound: "trovati oggetti!",
    all: "all",
    title: "Minigame: Oggetti nascosti",
    description:
      "Trova tutti gli oggetti che non dovresti pubblicare su InstaVibe. Rimuovili dalla foto prima che scada il tempo e la foto venga pubblicata!",
    miniGameGiveUp: "Rinuncia",
    tutorial: [
      {
        title: "Trova gli oggetti",
        message:
          "Clicca o seleziona l'oggetto che hai trovato. Se è corretto, scomparirà e sentirai un suono.",
      },
      {
        title: "Punteggio",
        message: "Nell'angolo in alto a destra vedrai quanti oggetti hai già trovato.",
      },
      {
        title: "Limite di tempo",
        message:
          'Guarda il timer del conto alla rovescia. Se non riesci a trovare altri oggetti, puoi anche premere il pulsante “Rinuncia”.',
      },
    ],
  },
  quiz: [
    {
      question:
        "Una volta installato InstaVibe, cosa significa effettivamente che il tuo profilo è “pubblico”?",
      answers: [
        {
          text: "Solo tu puoi vedere i tuoi post.",
          description:
            "Se il tuo profilo è pubblico, non solo tu ma chiunque può vedere i tuoi post, anche gli sconosciuti.",
        },
        {
          text: "Chiunque su Internet può vedere i tuoi post.",
          description:
            "Un profilo pubblico significa che chiunque, anche persone che non conosci, può vedere tutto ciò che pubblichi: foto, video, testi.",
          isCorrect: true,
        },
        {
          text: "Solo i tuoi amici possono vedere i tuoi post.",
          description:
            "Se desideri che solo i tuoi amici possano vedere i tuoi post, devi impostare il tuo profilo come “privato”.",
        },
        {
          text: "Solo la tua famiglia può vedere i tuoi post.",
          description:
            "Con un profilo pubblico, non solo la tua famiglia ma davvero tutti gli utenti di Internet possono vedere i tuoi contenuti.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Vuoi scrivere una biografia interessante su InstaVibe: perché non dovresti includere informazioni personali?",
      answers: [
        {
          text: "È noioso per gli altri.",
          description:
            "Che qualcosa sia interessante o meno non ha importanza: si tratta di sicurezza, non di intrattenimento.",
        },
        {
          text: "Gli estranei potrebbero utilizzare queste informazioni in modo improprio.",
          description:
            "Se, ad esempio, scrivi la tua età, la scuola che frequenti o il luogo di residenza nella tua biografia, degli sconosciuti potrebbero usare queste informazioni per farti del male, ad esempio per manipolarti o inviarti messaggi mirati e pericolosi.",
          isCorrect: true,
        },
        {
          text: "In realtà nessuno legge la bio.",
          description:
            "Molte persone guardano la bio, specialmente quando si ottengono nuovi follower. Gli sconosciuti spesso la leggono per prima.",
        },
        {
          text: "Non puoi usare le emoji.",
          description:
            "È possibile utilizzare le emoji nelle biografie: questo non è il problema. Il pericolo sta nell'inserire troppe informazioni personali.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Dopo aver pubblicato il tuo primo InstaVibe, come puoi proteggere le tue foto da occhi indiscreti??",
      answers: [
        {
          text: "Disattiva le impostazioni relative alla tua posizione",
          description:
            "Disattivare le impostazioni di localizzazione è una scelta ragionevole, ma non protegge direttamente le tue foto da visualizzazioni non autorizzate.",
        },
        {
          text: "Modifica le tue impostazioni sulla privacy",
          description:
            'Se modifichi correttamente le impostazioni sulla privacy (ad esempio, impostando il tuo profilo come “privato” o scegliendo chi può vedere i tuoi post), solo le persone selezionate potranno vedere le tue foto.',
          isCorrect: true,
        },
        {
          text: "Aggiungi tanti amici",
          description:
            "Più persone aggiungi, maggiore è il rischio che qualcuno utilizzi in modo improprio o condivida le tue foto.",
        },
        {
          text: "“Mi piace“ ad ogni post",
          description: "Il “Mi piace” non protegge in alcun modo le tue foto.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Max ti ha segnalato un profilo sospetto: come puoi capire se è falso?",
      answers: [
        {
          text: "Ha Spunta blu o Badge verificato.",
          description:
            "Una Spunta blu o un Badge verificato di solito significa che il profilo è reale - i profili falsi non hanno quasi mai una cosa del genere.",
        },
        {
          text: "Ha molte foto e amici reali.",
          description:
            "Molti amici reali e post sono spesso indice di un profilo autentico.",
        },
        {
          text: "Contiene pochissime informazioni, immagini sconosciute e quasi nessun post.",
          description:
            "I profili falsi spesso sembrano vuoti, utilizzano foto d'archivio o immagini di altre persone e non hanno contenuti reali.",
          isCorrect: true,
        },
        {
          text: "Ha un nome buffo.",
          description: "Un nome buffo da solo non dice nulla sulla veridicità o meno di un profilo.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Mentre scorri InstaVibe, come puoi assicurarti che la tua privacy rimanga davvero protetta?",
      answers: [
        {
          text: "Pubblica tutto apertamente",
          description: "Se tutto è pubblico, anche gli estranei possono vedere tutti i tuoi contenuti: non è sicuro.",
        },
        {
          text: "Rendi i tuoi post visibili solo agli amici",
          description:
            "Se rendi i tuoi post visibili solo agli amici, proteggi i tuoi dati ed eviti di esporli a estranei.",
          isCorrect: true,
        },
        {
          text: "Mette “Mi Piace“ ad ogni post",
          description: "Il “Mi piace” non protegge i tuoi dati personali",
        },
        {
          text: "Inviare il proprio indirizzo a sconosciuti",
          description:
            "Non fornire mai dati personali come il tuo indirizzo a sconosciuti: è estremamente pericoloso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Stai pensando di pubblicare il messaggio di Max: perché è una cattiva idea farlo senza il suo consenso?",
      answers: [
        {
          text: "Perché nessuno è interessato",
          description:
            "Non si tratta di sapere se qualcuno è interessato o meno, ma di privacy e rispetto.",
        },
        {
          text: "Perché rallenta il telefono",
          description: "Uno screenshot non rallenta il tuo telefono, non è quello il problema.",
        },
        {
          text: "Perché è ingiusto e spesso proibito",
          description:
            "I messaggi privati sono riservati: pubblicarli senza consenso è scorretto e può comportare conseguenze legali.",
          isCorrect: true,
        },
        {
          text: "Perché riceve meno “Mi piace”",
          description: "I “Mi piace” non hanno nulla a che vedere con il diritto alla privacy.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Quale affermazione è effettivamente vera quando si tratta di gestire le foto di altre persone su InstaVibe?",
      answers: [
        {
          text: "Puoi pubblicare foto di chiunque senza alcun problema.",
          description:
            "Ogni persona ha diritto alla propria immagine: non è consentito pubblicare foto in questo modo.",
        },
        {
          text: "È necessario avere il permesso delle persone presenti nella foto.",
          description:
            "Prima di pubblicare una foto, devi ottenere il consenso di tutte le persone che vi compaiono: è una questione di correttezza e spesso anche un obbligo di legge.",
          isCorrect: true,
        },
        {
          text: "È sempre consentito pubblicare foto degli amici.",
          description:
            "Anche i tuoi amici hanno diritto alla privacy e possono decidere se una foto debba essere pubblicata online o meno.",
        },
        {
          text: "Finché non tagghi nessuno, tutto è permesso.",
          description:
            "Che qualcuno sia taggato o meno, non cambia il fatto che devi prima chiedere il permesso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Ricevi uno strano messaggio da uno sconosciuto: come dovresti reagire?",
      answers: [
        {
          text: "Ignoralo e non fare nulla",
          description: "Spesso ignorare il problema non aiuta, il messaggio rimane lì e può peggiorare.",
        },
        {
          text: "Condividi e inoltra",
          description: "Inoltrarlo non fa altro che diffondere più odio o aumentare i rischi.",
        },
        {
          text: "Bloccalo e segnalalo",
          description:
            "È meglio bloccare immediatamente la persona e segnalare il messaggio al provider: è così che si interviene in modo efficace contro tali utenti.",
          isCorrect: true,
        },
        {
          text: "Rispondi con un insulto",
          description:
            "Rispondere con insulti peggiora solo le cose e può anche metterti nei guai.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Uno sconosciuto ti invia una richiesta di amicizia su InstaVibe: perché dovresti essere cauto??",
      answers: [
        {
          text: "Perché altrimenti avrai troppi amici",
          description: "Non si tratta di quanti amici hai, ma di sicurezza.",
        },
        {
          text: "Perché degli sconosciuti potrebbero spiare le tue informazioni",
          description:
            "Se concedi a degli sconosciuti l'accesso al tuo profilo, questi potranno vedere i tuoi dati personali e magari anche usarli in modo improprio.",
          isCorrect: true,
        },
        {
          text: "Perché altrimenti la batteria si scaricherà",
          description:
            "I tuoi amici non hanno alcuna influenza sulla batteria del tuo telefono. Si tratta di sicurezza, non della batteria.",
        },
        {
          text: "Perché è imbarazzante",
          description:
            "Non è imbarazzante ignorare le richieste di amicizia che non vuoi accettare. Si tratta della tua privacy e della tua protezione.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Stai pensando di condividere la tua posizione nel tuo profilo: cosa potrebbe succedere se lo facessi?",
      answers: [
        {
          text: "La batteria si ricarica più velocemente.",
          description: "La posizione non ha alcuna influenza sulla velocità di ricarica della batteria.",
        },
        {
          text: "Gli sconosciuti potrebbero trovarti o seguirti.",
          description:
            "Se condividi la tua posizione reale, gli sconosciuti possono scoprire dove ti trovi e magari persino seguirti o contattarti in modo sgradevole.",
          isCorrect: true,
        },
        {
          text: "Riceverai un regalo",
          description: "Condividere la tua posizione non ti porterà regali, ma potrebbe metterti in pericolo.",
        },
        {
          text: "Il tuo profilo verrà cancellato.",
          description:
            "Il tuo profilo non verrà cancellato, ma condividere la tua posizione può mettere in pericolo la tua sicurezza.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Dopo aver creato il tuo profilo InstaVibe, perché non dovresti pubblicare il tuo numero di telefono?",
      answers: [
        {
          text: "Perché a nessuno interessa",
          description:
            "Non si tratta di sapere se qualcuno è interessato o meno. La privacy e la sicurezza sono fondamentali.",
        },
        {
          text: "Perché degli estranei potrebbero molestarti o ingannarti",
          description:
            "Se rendi pubblico il tuo numero di telefono, degli estranei potrebbero chiamarti, molestarti o persino ingannarti.",
          isCorrect: true,
        },
        {
          text: "Perché otterrai meno like",
          description: "Il numero di like non ha nulla a che vedere con il tuo numero di telefono",
        },
        {
          text: "Perché verrà automaticamente cancellato",
          description:
            "Il tuo numero di telefono non verrà automaticamente cancellato, ma potrebbe essere utilizzato in modo improprio da altri.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Vuoi rendere più interessante il tuo profilo: quali informazioni dovresti evitare di condividere?",
      answers: [
        {
          text: "Your favorite food",
          description:
            "Il tuo cibo preferito non è un'informazione riservata e non rappresenta un pericolo.",
        },
        {
          text: "Il tuo indirizzo",
          description:
            "Non dovresti mai condividere il tuo indirizzo sui social media perché potrebbe essere visto da estranei e mettere a rischio la tua sicurezza.",
          isCorrect: true,
        },
        {
          text: "Una foto del tuo cane",
          description:
            "Una foto del tuo cane non è assolutamente un problema, purché non riveli alcuna informazione privata.",
        },
        {
          text: "Un tramonto",
          description: "Una foto di un tramonto non è problematica e non influisce sulla tua privacy.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Stai pianificando un nuovo post: quale foto puoi condividere senza preoccupazioni?",
      answers: [
        {
          text: "Il tuo cibo preferito",
          description:
            "Il tuo cibo preferito non è un'informazione riservata e non rappresenta un pericolo.",
        },
        {
          text: "Il tuo indirizzo",
          description:
            "Non dovresti mai condividere il tuo indirizzo sui social media perché potrebbe essere visto da estranei, mettendo a rischio la tua sicurezza.",
        },
        {
          text: "Una foto del tuo cane",
          description:
            "Una foto del tuo cane non è affatto problematica, purché non riveli alcuna informazione privata.",
        },
        {
          text: "Un tramonto",
          description: "Una foto di un tramonto non è problematica e non influisce sulla tua privacy.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
  ],
};

const cookie: CookieTranslation = {
  intro: {
    buttonTextAcceptCookies: "Accetta tutti i cookie",
    buttonTextManageCookies: "Gestisci i cookie",
    cookieInfo1:
      "Noi e terze parti selezionate utilizziamo cookie o tecnologie simili, come descritto nella Politica sui cookie. Puoi acconsentire all'uso di tali tecnologie cliccando sul pulsante ‘Accetta’.",
    player1: {
      dialog:
        "Hmm... perché dovrei accettare questi cookie? Preferisco gestire i cookie e vedere quali non sono necessari.",
    },
    hint: {
      dialog: "Non posso ancora continuare. È necessario attivare qualcosa richiesto dal sito web.",
    },
    cookies: {
      title: "Vuoi un cookie?",
      essentialTitle: "Essenziale:",
      nonEssentialTitle: "Non-Essenziale:",
      essential: {
        login: "Login",
        security: "Sicurezza",
        language: "Lingua",
        system: "Sistema",
      },
      nonEssential: {
        tracking: "Tracciamento",
        advertising: "Pubblicità",
        marketing: "Marketing",
        thirdParty: "Terze parti",
        social: "Social Media",
        remarketing: "Remarketing",
        analytics: "Analisi",
      },
      cookieInfo2:
        "Puoi gestire i tuoi cookie qui. Alcuni sono essenziali e non possono essere disattivati.",
      cookieInfo3: "Non posso ancora continuare. Uno o più cookie devono ancora essere disattivati.",
      buttonTextContinue: "Continua",
    },
  },
  miniGame: {
    title: "Cookie Cutter",
    description: "Distruggi tutti i cookie cattivi!",
    goodCookieTexts: ["Sessione", "Carrello", "Securezza", "Lingua", "Sistema"],
    badCookieTexts: [
      "Tracciamento",
      "Pubblicità",
      "Marketing",
      "Terze parti",
      "Social Media",
      "Remarketing",
      "Analisi",
    ],
    tutorial: [
      {
        title: "Cookie Cutter",
        message: "Scorri sullo schermo per distruggere i cookie cattivi.",
      },
      {
        title: "Il tempo sta scadendo!",
        message: "Tieni d'occhio il timer.",
      },
      {
        title: "Punteggio",
        message:
          "Puoi vedere quanti cookie buoni hai distrutto guardando il tuo punteggio. Se distruggi un cookie buono, ottieni punti negativi.",
      },
    ],
  },
  quiz: [
    {
      question: "A cosa servono i cookie su Internet?",
      answers: [
        {
          text: "Ai siti web per ricordare alcune cose (ad esempio, login, carrello)",
          description:
            "I cookie memorizzano informazioni in modo che i siti web possano riconoscerti, ad esempio mantenendo l'accesso o conservando gli articoli nel carrello.",
          isCorrect: true,
        },
        {
          text: "Per velocizzare il tuo computer",
          description: "I cookie non migliorano le prestazioni hardware del tuo computer.",
        },
        {
          text: "Per ottenere più punti nei videogiochi",
          description: "I cookie non influiscono sui tuoi punteggi di gioco.",
        },
        {
          text: "Per ricevere automaticamente gli aggiornamenti",
          description: "Gli aggiornamenti non sono controllati dai cookie.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa sono i cookie di tracciamento?",
      answers: [
        {
          text: "Cookie che tracciano la tua posizione esatta",
          description: "I cookie di tracciamento in genere salvano il comportamento di navigazione, non la posizione precisa.",
        },
        {
          text: "Cookie che tracciano i siti web visitati per personalizzare gli annunci pubblicitari",
          description: "I cookie di tracciamento registrano le attività di navigazione per personalizzare la pubblicità.",
          isCorrect: true,
        },
        {
          text: "Cookie che memorizzano la password",
          description: "Le password non vengono memorizzate nei cookie di tracciamento.",
        },
        {
          text: "Cookie che prevengono i virus",
          description: "I cookie non proteggono dai malware.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Perché InstaVibe ti chiede di accettare i cookie la prima volta che lo apri?",
      answers: [
        {
          text: "Per ottenere più like",
          description: "I like non hanno nulla a che vedere con il consenso ai cookie.",
        },
        {
          text: "Perché altrimenti l'app non sa se ti piace InstaVibe",
          description: "Le richieste di consenso ai cookie non riguardano le tue preferenze per altre app.",
        },
        {
          text: "Perché molti paesi hanno leggi che ti proteggono",
          description: "Leggi come il GDPR richiedono il consenso in modo che tu abbia il controllo sui tuoi dati.",
          isCorrect: true,
        },
        {
          text: "Per evitare che il tuo telefono si blocchi",
          description: "”La stabilità del telefono non dipende dai cookie.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa sarebbe più difficile su InstaVibe senza i cookie?",
      answers: [
        {
          text: "Rimanere connessi e aprire direttamente il tuo profilo",
          description:
            "Senza i cookie, dovresti effettuare il login più spesso perché la tua sessione non verrebbe ricordata.",
          isCorrect: true,
        },
        {
          text: "Modificare le foto con i filtri",
          description: "I filtri non dipendono dai cookie.",
        },
        {
          text: "Caricare video",
          description: "I caricamenti funzionano indipendentemente dai cookie.",
        },
        {
          text: "Inviare messaggi",
          description: "La messaggistica in genere non richiede cookie.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quali cookie sono utili?",
      answers: [
        {
          text: "Accesso, tracciamento, analisi, sistema",
          description: "Non tutti sono ugualmente utili o necessari.",
        },
        {
          text: "Sistema, Accesso, Pubblicità",
          description: "La pubblicità non è necessaria per fornire le funzionalità principali.",
        },
        {
          text: "Lingua, Sistema, Sicurezza, Accesso",
          description:
            "Queste categorie consentono di gestire le impostazioni della lingua, la sicurezza e l’accesso: sono utili.",
          isCorrect: true,
        },
        {
          text: "Nessuna delle risposte è corretta",
          description: "Esiste una risposta corretta.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "A cosa servono i cookie di sistema a InstaVibe?",
      answers: [
        {
          text: "Per ottenere più like",
          description: "I like non hanno nulla a che vedere con i cookie di sistema.",
        },
        {
          text: "Per vedere gli annunci pubblicitari delle scarpe",
          description: "Questo è il ruolo dei cookie di marketing, non dei cookie di sistema.",
        },
        {
          text: "Per velocizzare il tuo telefono",
          description: "I cookie di sistema non influiscono sulle prestazioni del dispositivo.",
        },
        {
          text: "Per consentire all'app di riconoscere che hai effettuato l'accesso e caricare le tue foto",
          description:
            "I cookie necessari/di sistema supportano funzioni fondamentali come lo stato della sessione e il caricamento dei contenuti.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa succede se disattivi i cookie di sistema di InstaVibe?",
      answers: [
        {
          text: "L'app non funzionerà correttamente.",
          description:
            "Senza i cookie necessari, le funzioni principali come l'accesso o il caricamento delle pagine potrebbero smettere di funzionare correttamente.",
          isCorrect: true,
        },
        {
          text: "Vedrai meno pubblicità.",
          description: "Questo riguarda principalmente i cookie di marketing, non i cookie di sistema",
        },
        {
          text: "Otterrai più like",
          description: "I cookie non influenzano i like.",
        },
        {
          text: "Potrai continuare a pubblicare post, ma senza filtri",
          description: "I filtri non dipendono dai cookie di sistema.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Perché i cookie analitici sono importanti per InstaVibe?",
      answers: [
        {
          text: "Così i tuoi amici possono mettere Mi piace più velocemente",
          description: "I Mi piace non sono influenzati dai cookie analitici.",
        },
        {
          text: "Così l'app sa quali funzioni sono popolari e può migliorarle",
          description:
            "I cookie analitici mostrano quali aree vengono utilizzate, aiutando il team a migliorare l'app.",
          isCorrect: true,
        },
        {
          text: "Così il tuo telefono ha più spazio di archiviazione",
          description: "I cookie non aumentano lo spazio di archiviazione del dispositivo.",
        },
        {
          text: "Per ottenere automaticamente follower",
          description: "Le analisi non portano ad avere più follower.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa fanno i cookie di marketing su InstaVibe?",
      answers: [
        {
          text: "Rendono i tuoi video più popolari.",
          description: "La popolarità non è controllata dai cookie.",
        },
        {
          text: "Memorizzano i filtri che utilizzi.",
          description: "Si tratta più di un argomento relativo alle impostazioni/funzionalità, non al marketing.",
        },
        {
          text: "Garantiscono che il tuo profilo rimanga privato.",
          description: "Le impostazioni sulla privacy sono indipendenti dai cookie di marketing.",
        },
        {
          text: "Mostrano annunci pubblicitari correlati a ciò che visualizzi (ad esempio, abbigliamento sportivo se visiti molte pagine di sport).",
          description: "I cookie di marketing personalizzano la pubblicità in base al tuo comportamento di navigazione.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Quale tipo di cookie utilizza InstaVibe per vedere quali funzioni vengono utilizzate di più (ad esempio Storie, Reels, messaggi)",
      answers: [
        {
          text: "Cookie al cioccolato",
          description: "Gustosi, ma non è quello che intendiamo.",
        },
        {
          text: "Marketing cookies",
          description: "I marketing cookies servono principalmente per personalizzare gli annunci pubblicitari.",
        },
        {
          text: "Cookie analitici",
          description:
            "I cookie analitici misurano l'utilizzo e aiutano a capire quali funzioni sono più popolari.",
          isCorrect: true,
        },
        {
          text: "Cookie di sistema",
          description: "I cookie di sistema servono per le funzioni principali, non per l'analisi.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

const phishing: PhishingTranslation = {
  prologue: {
    bedroom:
      "<T>[Il mattino seguente: ti stai preparando per andare a scuola quando ricevi una notifica da InstaVibe. Dopo la configurazione di ieri, sei curioso di sapere chi potrebbe averti contattato...]</T>",
  },
  intro: {
    player1: {
      dialog:
        "Qualcuno mi ha già mandato un messaggio su InstaVibe? È stato velocissimo... Chissà se è uno dei miei amici.",
    },
    chat1: {
      characterName: "Jonas M. (10B)",
      dialog:
        "Ciao! Ho visto che ti sei appena iscritto a InstaVibe, benvenuto! Sto organizzando un evento scolastico e mi serve l'elenco della classe con i recapiti. Ti dispiacerebbe condividerlo? Mi sarebbe davvero d'aiuto!",
    },
    player2: {
      dialog:
        "Jonas della 10B? Non credo che ci siamo mai incontrati... Mi sembra un po' troppo diretto per qualcuno che non conosco. Dovrei fidarmi di lui?",
    },
  },
  miniGame: {
    title: "Salva il pesce - Individua il phishing!",
    description: `Non tutto su Internet è reale, e questo vale anche sott'acqua!
                  Le esche con i messaggi cadono in mare. Guida il subacqueo verso gli ami da pesca cliccando, leggi i messaggi e decidi: si tratta di phishing o no?`,
    hint: "Ogni decisione sbagliata mette in pericolo il tuo pesce, quindi fai attenzione!",
    startButton: "Andiamo!",
    legit: "Reale",
    phishing: "Phishing",
    gameOver: "Game over",
    success:
      "Ben fatto! Hai aiutato il pesce a evitare esche pericolose e a stare al sicuro. È così che ti proteggi dal phishing nella vita reale, rimanendo vigile.",
    failure:
      "Oh no! Il pesce ha mangiato troppi messaggi pericolosi e non ce l'ha fatta. Proprio come su Internet, un clic sbagliato può causare gravi danni.",
    phishingMessages: [
      {
        type: "email",
        sender: "support@instavibe.com",
        text: "Il tuo account è stato sospeso a causa di attività sospette. Effettua il login qui per sbloccarlo.",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "prize@streamfest.io",
        text: "Congratulazioni! Hai vinto 3 mesi di streaming gratuito. Richiedilo subito.",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "update@gameworld.io",
        text: "È necessario un nuovo aggiornamento. Scaricalo qui per continuare a giocare.",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "verification@instavibe-support.com",
        text: "Verifica subito il tuo account InstaVibe, altrimenti verrà disattivato.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+49 1521 4455667",
        text: "Ciao, sono io, quello della scuola. Puoi inviarmi il tuo login InstaVibe? Devo controllare una cosa.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+43 660 9876543",
        text: "Il tuo pacco non è stato consegnato. Conferma il tuo indirizzo qui.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+41 76 123 4567",
        text: "Hai vinto un premio in un concorso! Richiedi subito il tuo premio.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+31 612345678",
        text: "Rilevato accesso non autorizzato al tuo account. Proteggi subito il tuo account.",
        isPhishing: true,
      },
      {
        type: "sms",
        sender: "+33 612 345 678",
        text: "Fattura non pagata. Effettua il pagamento tramite questo link.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_giveaway",
        text: "Sei uno dei nostri fan più fedeli! Vinci subito esclusivi gadget InstaVibe. Basta compilare questo modulo.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@teachersgroup_official",
        text: "Puoi inviarmi nuovamente le risposte del test? Le ho perse. Ecco il link.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@free_gamecoins",
        text: "Monete gratuite per il tuo gioco preferito - in esclusiva per gli utenti InstaVibe!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_support_admin",
        text: "Inserisci i tuoi dati di accesso per evitare di perdere l'accesso.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@event_official",
        text: "Biglietti gratuiti per il concerto! Solo per i primi 100 - affrettati!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe_warning",
        text: "Il tuo account è stato segnalato. Visualizza il reclamo qui.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@brand_support_fake",
        text: "Per confermare il tuo ultimo post: inserisci qui la tua password.",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@randomuser324",
        text: "Ehi, qualcuno sta usando le tue foto su InstaVibe. Guarda qui!",
        isPhishing: true,
      },
      {
        type: "chat",
        sender: "@instavibe.alert",
        text: "A causa dell'elevata richiesta, devi effettuare nuovamente l'accesso. Clicca qui.",
        isPhishing: true,
      },
      {
        type: "email",
        sender: "support@instavibe.com",
        text: "La tua registrazione è andata a buon fine. Benvenuto su InstaVibe!",
        isPhishing: false,
      },
      {
        type: "email",
        sender: "info@instavibe.com",
        text: "Ti abbiamo inviato un'e-mail di conferma. Conferma la tua registrazione.",
        isPhishing: false,
      },
      {
        type: "sms",
        sender: "+49 1521 4455667",
        text: "La tua password è stata modificata con successo. Ora puoi effettuare il login.",
        isPhishing: false,
      },
      {
        type: "sms",
        sender: "+43 660 9876543",
        text: "Abbiamo inviato una nuova newsletter. Dai un'occhiata!",
        isPhishing: false,
      },
      {
        type: "chat",
        sender: "@instavibe_support",
        text: "Come possiamo aiutarti? Se hai domande, non esitare a contattarci.",
        isPhishing: false,
      },
      {
        type: "chat",
        sender: "@instavibe_team",
        text: "Ultimi aggiornamenti su InstaVibe. Dai un'occhiata alle nuove funzionalità!",
        isPhishing: false,
      },
    ],
    tutorial: [
      {
        title: "Nuoto",
        message: "Naviga e tieni premuta la freccia per nuotare fino al punto desiderato oppure usa i tasti freccia.",
      },
      {
        title: "Posta Phishing",
        message: "Nuota vicino a una busta per aprirla",
      },
      {
        title: "Leggi il messaggio",
        message: "Decidi se si tratta di un'esca o meno.",
      },
      {
        title: "Scelta sbagliata",
        message: "Le scelte sbagliate danneggeranno il pesce.",
      },
      {
        title: "Scelta giusta",
        message: "Le scelte giuste guariranno il pesce.",
      },
      {
        title: "Salute del pesce",
        message: "L'obiettivo è mantenere in vita il pesce.",
      },
    ],
  },
  quiz: [
    {
      question: "Mentre controlli le tue e-mail, appare un messaggio sospetto: potrebbe trattarsi di un tentativo di phishing? Ma cos'è il phishing?",
      answers: [
        {
          text: "Un gioco online",
          description: "Il phishing non è un gioco, è un metodo di truffa.",
        },
        {
          text: "Il tentativo di ottenere dati personali",
          description:
            "Nel phishing, i truffatori cercano di ottenere dati riservati come password, dettagli dell'account o dati di accesso tramite e-mail, siti web o messaggi falsi.",
          isCorrect: true,
        },
        {
          text: "Un genere musicale",
          description: "Il phishing non ha nulla a che vedere con la musica.",
        },
        {
          text: "Un programma antivirus",
          description:
            "Un programma antivirus protegge dai virus, ma a volte rileva anche i tentativi di phishing. Tuttavia, il phishing stesso è un tipo di truffa.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Max non era sicuro di un'e-mail: come avrebbe potuto riconoscere che si trattava di phishing?",
      answers: [
        {
          text: "Proviene da un indirizzo e-mail ufficiale.",
          description: "Non è un segno di phishing, gli indirizzi dall'aspetto ufficiale sembrano affidabili.",
        },
        {
          text: "Proviene da un indirizzo mittente insolito o errato.",
          description: "I mittenti insoliti o errati sono un forte indizio di phishing.",
          isCorrect: true,
        },
        {
          text: "L'oggetto contiene emoticon colorate.",
          description: "Le emoticon da sole non indicano phishing.",
        },
        {
          text: "Include un saluto amichevole.",
          description: "I saluti amichevoli sono utilizzati anche nelle e-mail autentiche.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Il messaggio sembra urgente: cosa scrivono spesso i truffatori di phishing per spingerti a reagire?",
      answers: [
        {
          text: "Elogi per il tuo comportamento sicuro",
          description: "Gli elogi sono usati raramente per esercitare pressione.",
        },
        {
          text: "Una minaccia di sospendere il tuo account",
          description: "Minacce come la sospensione dell'account creano stress e inducono a cliccare.",
          isCorrect: true,
        },
        {
          text: "Un codice coupon",
          description: "I coupon hanno lo scopo di attirarti, ma di solito non esercitano una pressione acuta.",
        },
        {
          text: "Una foto divertente di un gatto",
          description: "Le immagini divertenti sono innocue e non sono uno strumento tipico di phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quali di queste caratteristiche NON indicano un'e-mail di phishing?",
      answers: [
        {
          text: "E-mail inaspettata con link",
          description: "Le e-mail inaspettate con link sono tipiche del phishing.",
        },
        {
          text: "Richiesta della tua password",
          description: "Le e-mail di phishing spesso richiedono le password.",
        },
        {
          text: "Errori ortografici e formulazioni strane",
          description: "Il linguaggio scadente e gli errori sono una caratteristica comune.",
        },
        {
          text: "Messaggio dal tuo migliore amico",
          description: "I messaggi dai veri amici non sono un tipico segno di phishing.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question: "L'e-mail di phishing richiede informazioni: quali dati cercano solitamente i truffatori?",
      answers: [
        {
          text: "La tua canzone preferita",
          description: "Le tue preferenze non interessano ai truffatori.",
        },
        {
          text: "I tuoi dati bancari e le tue password",
          description: "I dati bancari e le password sono l'obiettivo principale del phishing.",
          isCorrect: true,
        },
        {
          text: "Il tuo cibo preferito",
          description: "Il cibo preferito non ha alcun valore per i truffatori.",
        },
        {
          text: "I tuoi voti in educazione fisica",
          description: "I voti in educazione fisica non interessano ai truffatori.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Ricevi un'e-mail che sembra sospetta: qual è il modo migliore per rispondere?",
      answers: [
        {
          text: "Clicca sul link e controlla",
          description: "Cliccare sul link può essere pericoloso.",
        },
        {
          text: "Elimina o segnala il messaggio",
          description: "È meglio eliminarlo o segnalarlo direttamente.",
          isCorrect: true,
        },
        {
          text: "Rispondi rapidamente",
          description: "Rispondere fornisce un feedback ai truffatori.",
        },
        {
          text: "Ignora il messaggio",
          description: "Ignorarlo non serve, è meglio segnalarlo o eliminarlo.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "TL'e-mail menziona ‘InstaVibe’: perché i truffatori usano spesso nomi noti?",
      answers: [
        {
          text: "Perché suona più divertente",
          description: "A loro non interessa se lo trovi divertente o meno.",
        },
        {
          text: "Così ti fidi di più del messaggio",
          description: "I nomi familiari sembrano affidabili e creano un falso senso di sicurezza.",
          isCorrect: true,
        },
        {
          text: "Per fare pubblicità",
          description: "La pubblicità non è l'obiettivo del phishing.",
        },
        {
          text: "Perché in questo modo hanno una maggiore visibilità.",
          description: "La visibilità non ha alcuna importanza in questo caso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quale delle seguenti affermazioni è corretta?",
      answers: [
        {
          text: "Non si dovrebbero mai inviare dati personali via e-mail.",
          description: "I dati personali non dovrebbero mai essere inclusi nelle e-mail.",
          isCorrect: true,
        },
        {
          text: "Le password possono essere condivise.",
          description: "Le password non dovrebbero mai essere condivise.",
        },
        {
          text: "Tutti i link su Internet sono sicuri.",
          description: "Non tutti i link sono sicuri: molti di essi sono pericolosi.",
        },
        {
          text: "Dovresti sempre cliccare su ‘Iscriviti ora’.",
          description: "I pulsanti ‘Iscriviti ora’ nelle e-mail possono essere trappole di phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa può succedere se clicchi su un link di phishing?",
      answers: [
        {
          text: "Verrà riprodotta la tua canzone preferita.",
          description: "No, probabilmente la tua canzone preferita non verrà riprodotta.",
        },
        {
          text: "I tuoi dati verranno rubati.",
          description: "Sì, i tuoi dati potrebbero essere rubati direttamente.",
          isCorrect: true,
        },
        {
          text: "Vincerai uno smartphone.",
          description: "Le promesse di premi sono solitamente una truffa.",
        },
        {
          text: "Niente - i miei dati sono al sicuro.",
          description: "I link di phishing sono quasi sempre pericolosi.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quale messaggio sembra sospetto?",
      answers: [
        {
          text: "Ehi, come stai?",
          description: "Sembra normale e innocuo.",
        },
        {
          text: "Hai vinto 1.000 euro - clicca qui!",
          description: "Le promesse di premi con un link sono spesso truffe.",
          isCorrect: true,
        },
        {
          text: "Ci vediamo alle 15:00",
          description: "Un appuntamento perfettamente normale.",
        },
        {
          text: "Buona fortuna per il compito in classe.",
          description: "Sembra un messaggio amichevole, non sospetto.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Nel gioco hai visto molti messaggi di phishing: arrivano davvero solo tramite e-mail?",
      answers: [
        {
          text: "Sì",
          description: "Il phishing avviene anche tramite SMS, social media e altre piattaforme.",
        },
        {
          text: "No",
          description: "Il phishing può arrivare attraverso molti canali.",
          isCorrect: true,
        },
        {
          text: "Solo sui telefoni cellulari",
          description: "Il phishing può avvenire sia sui telefoni cellulari che sui PC.",
        },
        {
          text: "Solo di notte",
          description: "L'ora non ha importanza.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Se non sei sicuro dell'autenticità di un messaggio, dovresti...",
      answers: [
        {
          text: "Fornire i propri dati per sicurezza.",
          description: "Non condividere mai dati personali.",
        },
        {
          text: "Chiedere a qualcuno o visitare il sito web ufficiale.",
          description: "Verificare sempre chiedendo prima o visitando personalmente il sito ufficiale.",
          isCorrect: true,
        },
        {
          text: "Inoltrare il messaggio.",
          description: "Inoltrare il messaggio non fa altro che aumentare il rischio.",
        },
        {
          text: "Metti 'Mi piace' al messaggio.",
          description: "Mettere 'Mi piace' non ti aiuterà contro il phishing.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Cosa succede spesso se clicchi su un link di phishing?",
      answers: [
        {
          text: "Vieni reindirizzato a un sito web falso.",
          description: "Vieni reindirizzato a una pagina falsa che può rubare i tuoi dati.",
          isCorrect: true,
        },
        {
          text: "Ricevi un regalo.",
          description: "Le offerte di phishing non sono mai regali legittimi.",
        },
        {
          text: "Vieni espulso da Internet.",
          description: "In realtà non si viene espulsi da Internet, ma i propri dati potrebbero essere rubati.",
        },
        {
          text: "Si vince un viaggio.",
          description: "I premi falsi come i viaggi sono spesso un trucco di phishing.",
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
      "Ehi, probabilmente anche tu hai visto quella foto imbarazzante di me... potresti aiutarmi?",
    notificationTitle: "Messaggio da Max",
    overlayTitle: "Max ha bisogno di te!",
    overlayPrompt: "Scegli un'azione:",
    header: {
      avatarLabel: "S4",
      profileName: "CyberCarriere",
      subtitle: "Sponsorizzato • Scena 4",
    },
    minigameIntro: {
      title: "Pubblicare o non pubblicare?🤔",
      description: [
        "Apparirà una serie di foto una dopo l'altra.",
        "Per ogni foto, scegli se pubblicarla su InstaVibe o mantenerla privata.",
        "Assicurati di non pubblicare foto imbarazzanti o dannose.",
      ],
    },
    feedActions: {
      like: "Like",
      chat: "Chat",
      share: "Condividi",
    },
    commentsLabel: "Comments",
    actions: [
      {
        id: "ignora",
        label: "Non fare nulla e ignoralo",
        response: "Ignorarlo non lo farà sparire. Mi sento solo con questo pensiero.",
        isCorrect: false,
      },
      {
        id: "confront_publicly",
        label: "Commenta pubblicamente e chiedi all'autore di cancellarlo",
        response:
          "Questo potrebbe solo attirare più attenzione e la situazione potrebbe peggiorare. Non voglio peggiorare le cose.",
        isCorrect: false,
      },
      {
        id: "report_alone",
        label: "Segnala la foto al fornitore dell'app senza dirlo a Max",
        response:
          "Segnalarlo è una buona idea, ma avrei preferito che me ne avessi parlato prima. È importante che tu mi sostenga.",
        isCorrect: false,
      },
      {
        id: "support_and_act",
        label: "Chiedi a Max come si sente e offrigli il tuo aiuto per segnalarlo",
        response:
          "Grazie per avermi consultato prima. Significa molto per me. Segnaliamola insieme.",
        isCorrect: true,
      },
    ],
  },
  miniGame: {
    title: "Pubblicare o non pubblicare?",
    description:
      "Hai visto che non tutte le immagini sono adatte a Internet. In questo gioco, decidi tu: premi il pulsante destro per pubblicare o il pulsante sinistro per non pubblicare.",
    allCorrect: "Ottimo lavoro! Hai fatto tutto bene!",
    minimumReached: "Molto bene! Hai risposto correttamente alla maggior parte delle domande!",
    insufficient: "Non male, ma c'è ancora margine di miglioramento!",
    post: "Pubblica",
    notPost: "Non pubblicare",
    couldPost: "Potresti pubblicare questa immagine.",
    shouldNotPost: "Non dovresti pubblicare questa immagine.",
  },
  quiz: [
    {
      question:
        "Qual è la prima cosa che dovresti fare se il tuo amico Max pubblica una tua foto che non ti piace su InstaVibe?",
      answers: [
        {
          text: "Segnala immediatamente la foto a InstaVibe",
          description:
            "Segnalarla può essere d'aiuto, ma prima prova a risolvere la questione direttamente con la persona che l'ha pubblicata.",
        },
        {
          text: "Insulta Max nei commenti",
          description:
            "Gli insulti non fanno altro che aggravare la situazione e non accelerano la rimozione della foto.",
        },
        {
          text: "Chiedi cortesemente a Max in un messaggio privato di cancellare la foto",
          description:
            "Corretto: un messaggio privato calmo e amichevole è solitamente la soluzione più rapida e rispettosa.",
          isCorrect: true,
        },
        {
          text: "Non fare nulla: è tuo amico",
          description:
            "Se ti senti a disagio, hai il diritto di dire la tua: le amicizie si basano sul rispetto.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Hai scattato una foto divertente di Timo mentre inciampa. Puoi pubblicarla su InstaVibe senza il suo permesso?",
      answers: [
        {
          text: "Sì, è divertente: è tutto ciò che conta!",
          description: "Essere divertenti non prevale sul diritto di una persona alla propria immagine.",
        },
        {
          text: "Solo se non lo tagghi",
          description: "Anche senza tag, è comunque la sua immagine: deve essere d'accordo.",
        },
        {
          text: "No, tutti hanno il ‘diritto alla propria immagine’.",
          description:
            "Correct: Corretto: è necessario il permesso prima di pubblicare foto di persone identificabili.",
          isCorrect: true,
        },
        {
          text: "Sì, ma solo per gli amici intimi",
          description: "La privacy vale anche nella tua cerchia privata: chiedi prima il permesso.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Hai chiesto a Max di cancellare la foto che ti ritrae, ma lui non risponde. Qual è la mossa più sensata da fare?",
      answers: [
        {
          text: "Hackerare la sua password e cancellarla tu stesso",
          description: "L'hacking è illegale e peggiora solo le cose",
        },
        {
          text: "Pubblicare una sua foto imbarazzante per vendicarti",
          description: "La vendetta crea ulteriori problemi e viola anche i suoi diritti.",
        },
        {
          text: "Segnalare la foto a InstaVibe poiché è stata pubblicata senza il tuo consenso",
          description:
            "Corretto: se il contatto diretto fallisce, usa gli strumenti di segnalazione della piattaforma per proteggerti.",
          isCorrect: true,
        },
        {
          text: "Cancellare il tuo account",
          description:
            "Cancellare il tuo account non risolve il problema: usa prima gli strumenti disponibili.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Quali delle seguenti foto possono essere pubblicate su InstaVibe senza bisogno del permesso di nessuno?",
      answers: [
        {
          text: "Una foto di gruppo di tutta la tua classe",
          description: "Le foto di gruppo coinvolgono più persone: devi prima ottenere il loro consenso.",
        },
        {
          text: "Uno sconosciuto che indossa una maglietta alla moda",
          description: "Anche gli sconosciuti hanno diritto alla privacy e alla personalità.",
        },
        {
          text: "Un tramonto sul lago",
          description: "Corretto: le foto di natura/paesaggi che non mostrano persone identificabili vanno benissimo.",
          isCorrect: true,
        },
        {
          text: "Il tuo fratellino che gioca",
          description: "Le foto dei bambini richiedono particolare cautela e il consenso dei genitori.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Qualcuno ha caricato una tua foto su un profilo falso e sta scrivendo commenti offensivi. Cosa dovresti fare?",
      answers: [
        {
          text: "Rispondi al profilo e insultalo a tua volta",
          description: "Insultare a tua volta può aggravare la situazione ed essere usato contro di te.",
        },
        {
          text: "Segnala immediatamente il profilo e parlane con un genitore o un insegnante",
          description: "Corretto: chiedi aiuto ad adulti di fiducia e usa gli strumenti di segnalazione.",
          isCorrect: true,
        },
        {
          text: "Non fare nulla: smetterà da solo.",
          description: "Problemi come questo spesso peggiorano se ignorati.",
        },
        {
          text: "Chiedi anche ai tuoi amici di insultare quella persona",
          description: "Le molestie coordinate possono aggravare la situazione e violano le regole della piattaforma.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Vuoi pubblicare una foto della tua pagella perché ne sei orgoglioso. Perché potrebbe essere una cattiva idea?",
      answers: [
        {
          text: "Gli altri potrebbero diventare gelosi dei tuoi voti.",
          description: "La gelosia non è il problema principale, ma piuttosto l'esposizione dei dati personali.",
        },
        {
          text: "Le pagelle sono noiose e probabilmente non otterranno alcun like.",
          description: "I like non contano, la tua privacy sì.",
        },
        {
          text: "Mostra dati privati come il tuo nome completo, la data di nascita e il nome della scuola.",
          description: "Corretto: questi dettagli possono essere utilizzati in modo improprio se condivisi pubblicamente.",
          isCorrect: true,
        },
        {
          text: "La scuola lo vieta severamente.",
          description: "Potrebbero esserci delle regole in merito, ma la ragione principale è la protezione dei dati personali.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Il ‘diritto alla propria immagine’ significa che..",
      answers: [
        {
          text: "…è consentito pubblicare solo foto professionali di se stessi.",
          description: "No, si tratta di consenso, non di qualità delle foto.",
        },
        {
          text: "…in generale, tutti hanno il diritto di decidere se le immagini che li ritraggono possono essere pubblicate.",
          description: "Corretto: la pubblicazione di foto identificabili richiede il permesso.",
          isCorrect: true,
        },
        {
          text: "...puoi chiedere un compenso per ogni foto che scatti.",
          description: "Questo non ha nulla a che vedere con questo diritto.",
        },
        {
          text: "… hai il diritto di disegnare qualsiasi immagine desideri.",
          description: "Il disegno è un'altra cosa: il diritto riguarda la pubblicazione di foto di persone.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Alla festa di Lea è stata scattata una foto in cui qualcuno sta vivendo un momento imbarazzante sullo sfondo. Dovresti pubblicarla?",
      answers: [
        {
          text: "Sì, è divertente e tutti rideranno.",
          description: "Ciò che è divertente per te potrebbe essere offensivo per loro: il rispetto viene prima di tutto.",
        },
        {
          text: "No, potrebbe mettere in imbarazzo e ferire la persona sullo sfondo.",
          description: "Corretto: non esporre il momento imbarazzante di qualcun altro.",
          isCorrect: true,
        },
        {
          text: "Sì, ma solo se la persona non è chiaramente visibile",
          description: "Anche se la foto è sfocata, le persone potrebbero comunque essere identificabili o sentirsi esposte.",
        },
        {
          text: "Forse, ma aggiungi un filtro divertente",
          description: "Un filtro non risolve il problema della privacy.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Hai segnalato un'immagine su InstaVibe ma non succede nulla. A chi puoi rivolgerti al di fuori dell'app?",
      answers: [
        {
          text: "A nessuno, non si può fare altro.",
          description: "Ci sono sempre persone a cui puoi chiedere aiuto.",
        },
        {
          text: "I tuoi follower, per fare pressione sulla persona",
          description: "Mobilitare una folla può causare ulteriori danni e violazioni delle regole.",
        },
        {
          text: "Il produttore del tuo telefono",
          description: "Non possono aiutarti con i problemi relativi ai contenuti della piattaforma.",
        },
        {
          text: "Genitori, insegnanti o un servizio di consulenza",
          description: "Corretto: adulti o servizi di fiducia possono aiutarti a intraprendere ulteriori azioni.",
          isCorrect: true,
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Perché è una buona idea disattivare il tagging automatico della posizione (geotagging) prima di pubblicare foto su InstaVibe?",
      answers: [
        {
          text: "Perché migliora la qualità delle foto",
          description: "La qualità delle immagini non è influenzata dai tag di localizzazione.",
        },
        {
          text: "Perché altrimenti otterrai meno like",
          description: "I like non sono collegati al geotagging.",
        },
        {
          text: "Perché degli estranei potrebbero capire dove ti trovi di solito",
          description: "Corretto: i modelli di localizzazione (casa, scuola) possono esporti a rischi.",
          isCorrect: true,
        },
        {
          text: "Perché risparmia la batteria del telefono",
          description: "La durata della batteria non è la ragione principale, ma lo sono la privacy e la sicurezza.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

const password: PasswordTranslation = {
  prologue: {
    classroom:
      "<T>[Laboratorio informatico. Ti siedi accanto ai tuoi compagni di classe, curioso di sapere quale sarà la lezione di oggi. Il signor Müller sembra avere in serbo qualcosa di interessante...]</T>",
  },
  intro: {
    herrMueller1:
      "<B>Mr. Müller:</B>\nBene, ragazzi, oggi faremo qualcosa di diverso! La scuola sta lanciando un nuovo sistema di posta elettronica. Ognuno di voi riceverà il proprio indirizzo e-mail scolastico.",
    herrMueller2:
      "(Digita sulla tastiera mentre il proiettore mostra la homepage del sistema. Ti sporgi in avanti, interessato)",
    herrMueller3:
      "<B>Mr. Müller:</B>\nAndate su mail.school-net.com e accedete con la vostra password temporanea. Per prima cosa, DOVETE creare una password forte e sicura. Ricordate ciò che abbiamo imparato sulla sicurezza online!",
    player1:
      "<B>[Navigate all'URL e vedete: ‘Benvenuti in SchoolMail - Impostate una nuova password’]</B>\nDopo tutto quello che ho imparato sulla sicurezza online, devo rendere questa password davvero sicura...",
  },
  miniGame: {
    title: "Distruggi password",
    description: "Scoprite cosa rende una password forte e quali sono quelle non sicure.",
    hint: "Ma ricorda: una password sicura da sola non garantisce la tua sicurezza!",
    endScreenScore: "Il tuo punteggio finale:",
    tutorial: [
      {
        title: "Comandi",
        message: "Dirigi la lama della sega verso le password con il mouse, il touch o la tastiera e tagliale (←/A sinistra, →/D destra).",
      },
      {
        title: "Passwords",
        message: "Dirigi la lama della sega verso le password e tagliale, ma solo quelle deboli!",
      },
      {
        title: "Punti",
        message: "Non tagliare le password sicure o perderai punti!",
      },
    ],
  },
  quiz: [
    {
      question:
        "Il signor Müller ti ha chiesto di creare una nuova password sicura per la tua e-mail scolastica. Cosa rende davvero sicura una password?",
      answers: [
        {
          text: "Il tuo nome e l'anno di nascita",
          description:
            "Una password composta dal tuo nome e dall'anno di nascita è molto facile da indovinare. Evita le informazioni personali!",
        },
        {
          text: "Almeno 8 caratteri, lettere maiuscole e minuscole, numeri e caratteri speciali",
          description:
            "Una password sicura dovrebbe essere lunga almeno 8 caratteri e contenere una combinazione di lettere maiuscole e minuscole, numeri e caratteri speciali. Questo rende più difficile decifrare la password.",
          isCorrect: true,
        },
        {
          text: "‘123456’",
          description:
            "‘123456’ è una delle password più comuni e più deboli. Può essere hackerata in pochi secondi.",
        },
        {
          text: "Il nome del tuo animale domestico",
          description:
            "Il nome del tuo animale domestico è facile da indovinare, soprattutto se qualcuno ti conosce. Evita nomi semplici.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Ora hai una password sicura per la tua email scolastica e per InstaVibe. Con quale frequenza dovresti cambiare password così importanti?",
      answers: [
        {
          text: "Mai",
          description:
            "Se non cambi mai le tue password, il tuo account diventa un bersaglio facile in caso di furto.",
        },
        {
          text: "Solo quando hai un nuovo telefono",
          description:
            "Un nuovo telefono non significa automaticamente che devi cambiare la tua password: ciò che conta è la protezione in caso di sospetto furto di dati.",
        },
        {
          text: "Regolarmente e se sospetti un uso improprio",
          description:
            "Cambiare regolarmente le password e cambiarle immediatamente se si sospetta un uso improprio protegge i tuoi account dagli attacchi.",
          isCorrect: true,
        },
        {
          text: "Ogni volta che sei di cattivo umore",
          description: "Il tuo umore non ha nulla a che vedere con la sicurezza delle password.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Che cos'è un gestore di password?",
      answers: [
        {
          text: "Un programma che riproduce musica",
          description: "I programmi musicali non hanno nulla a che vedere con le password.",
        },
        {
          text: "Un gioco per il tuo telefono",
          description: "Un gestore di password non è un gioco, ma uno strumento per la tua sicurezza.",
        },
        {
          text: "Un programma che memorizza le password in modo sicuro",
          description:
            "Un gestore di password ti aiuta a memorizzare in modo sicuro tutte le tue password e a ricordarle: devi solo ricordare una password principale.",
          isCorrect: true,
        },
        {
          text: "Una cartella sulla scrivania",
          description:
            "Una cartella sulla scrivania non sarebbe sicura e non avrebbe le funzioni di protezione di un vero gestore di password.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quale delle seguenti password è la più sicura?",
      answers: [
        {
          text: "Calcio123",
          description:
            "Contiene lettere e numeri, ma è facile da indovinare, soprattutto se qualcuno sa che ti piace il calcio.",
        },
        {
          text: "H@u$M@u$2025!",
          description:
            "Questa password è lunga, creativa e contiene lettere maiuscole e minuscole, numeri e caratteri speciali: proprio ciò che la rende difficile da decifrare.",
          isCorrect: true,
        },
        {
          text: "987654321",
          description:
            "Si tratta di una semplice sequenza di numeri e una delle password più comuni: molto insicura.",
        },
        {
          text: "Ciao",
          description: "Una parola semplice senza numeri o caratteri speciali è troppo facile da indovinare.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Come si può ricordare una password sicura?",
      answers: [
        {
          text: "Per niente - dovresti usare la stessa password per tutto",
          description:
            "Usare la stessa password per tutto è molto insicuro e può facilmente portare al furto di dati.",
        },
        {
          text: "Formando una frase e prendendo la prima lettera di ogni parola",
          description:
            "Una frase ti aiuta a creare una password unica e sicura che puoi ricordare facilmente, ad esempio ‘Il mio cane ama 3 grandi ossa!’ → MdL3gB!",
          isCorrect: true,
        },
        {
          text: "Scrivendola su un biglietto e attaccandola allo schermo",
          description: "Una password su un biglietto visibile è facile da rubare.",
        },
        {
          text: "Usando solo numeri",
          description:
            "Una password sicura dovrebbe contenere numeri, lettere e caratteri speciali, non solo numeri.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Perché i caratteri speciali sono importanti in una password?",
      answers: [
        {
          text: "Rendono più facile ricordarla.",
          description:
            "I caratteri speciali spesso rendono le password un po' più complicate, ma non necessariamente più facili da ricordare.",
        },
        {
          text: "Aumentano la sicurezza perché offrono più possibilità.",
          description:
            "I caratteri speciali garantiscono un numero maggiore di combinazioni, rendendo la password molto più difficile da decifrare.",
          isCorrect: true,
        },
        {
          text: "Sono belli da vedere.",
          description: "L'aspetto non conta: la sicurezza è fondamentale.",
        },
        {
          text: "Riducono la lunghezza della password.",
          description:
            "I caratteri speciali non accorciano la password, la rendono solo più forte.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Quale delle seguenti affermazioni è corretta?",
      answers: [
        {
          text: "Una password sicura dovrebbe essere il più breve possibile.",
          description:
            "Le password brevi sono molto più facili da indovinare o decifrare: più sono lunghe, meglio è!",
        },
        {
          text: "Le password dovrebbero essere condivise con gli amici.",
          description: "Le password sono private e non dovrebbero mai essere condivise, nemmeno con gli amici.",
        },
        {
          text: "Una password dovrebbe essere il più lunga e complessa possibile.",
          description:
            "Una password lunga e complessa con lettere, numeri e caratteri speciali è molto più sicura.",
          isCorrect: true,
        },
        {
          text: "Una password non ha bisogno di lettere maiuscole.",
          description:
            "Le lettere maiuscole aumentano la sicurezza perché creano più possibilità nella combinazione della password.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Immagina che un compagno di classe ti guardi da dietro le spalle e ora conosca la password della tua e-mail scolastica. Cosa potrebbe farci?",
      answers: [
        {
          text: "Potrebbe fingere di essere te e utilizzare i tuoi dati in modo improprio.",
          description:
            "Chiunque conosca la tua password può appropriarsi del tuo account, inviare messaggi, effettuare acquisti o rubare dati privati.",
          isCorrect: true,
        },
        {
          text: "Può prepararti una torta.",
          description: "La tua password non ha nulla a che vedere con la preparazione di una torta.",
        },
        {
          text: "Potrebbe cancellare la tua password.",
          description:
            "Conoscere la password non è sufficiente per cancellarla: il danno si verifica attraverso l'accesso al tuo account.",
        },
        {
          text: "Potrebbe chiamarti al telefono.",
          description: "La tua password non ha alcuna influenza sulle telefonate.",
        },
      ],
      timeLimit: 30,
    },
    {
      question: "Se scrivi una password, dove dovresti conservarla?",
      answers: [
        {
          text: "Proprio accanto al computer",
          description:
            "Una password lasciata in bella vista accanto al computer può essere facilmente trovata e rubata da altri.",
        },
        {
          text: "In una chat pubblica",
          description: "In una chat pubblica, molte persone possono leggere i messaggi: questo è molto pericoloso.",
        },
        {
          text: "In un luogo sicuro che solo tu conosci",
          description:
            "Se scrivi la tua password, conservala in un luogo segreto e sicuro che solo tu conosci, ad esempio in un cassetto chiuso a chiave o in un documento crittografato.",
          isCorrect: true,
        },
        {
          text: "Pubblicarla sui social media",
          description: "Le password non dovrebbero mai essere pubblicate: sarebbe un invito per gli hacker.",
        },
      ],
      timeLimit: 30,
    },
    {
      question:
        "Sia il tuo nuovo account e-mail scolastico che InstaVibe offrono l'autenticazione a due fattori (2FA). Qual è il vantaggio principale di utilizzarla?",
      answers: [
        {
          text: "Non hai più bisogno di una password.",
          description: "Hai ancora bisogno della tua password, ma è richiesta un'ulteriore conferma.",
        },
        {
          text: "C'è un secondo livello di sicurezza oltre alla password.",
          description:
            "Con l'autenticazione a due fattori, sei doppiamente protetto, ad esempio utilizzando una password e un codice inviato al tuo telefono.",
          isCorrect: true,
        },
        {
          text: "Estende automaticamente la password.",
          description:
            "La lunghezza della password rimane la stessa: viene semplicemente aggiunto un ulteriore passaggio di verifica.",
        },
        {
          text: "Ottieni una nuova password ogni giorno.",
          description:
            "La tua password rimane la stessa, ma il codice di conferma cambia ad ogni accesso.",
        },
      ],
      timeLimit: 30,
    },
  ],
};

export const scenes = {
  socialMedia,
  cookie,
  phishing,
  photos,
  password,
};

