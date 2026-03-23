/**
 * ╔══════════════════════════════════════════════════════════════════╗
 *  PANNELLO DI CONFIGURAZIONE — LA FERMATA
 *  Farinata e Pizza Restaurant · Torino
 * ╚══════════════════════════════════════════════════════════════════╝
 *
 *  👋 Benvenuto nel pannello di configurazione del tuo sito!
 *
 *  COME USARLO:
 *  ─────────────────────────────────────────────────────────────────
 *  1. Modifica i valori tra virgolette " " o le cifre numeriche
 *  2. Salva il file (Ctrl+S / Cmd+S)
 *  3. Carica il file aggiornato sul tuo server
 *
 *  ✅ NON toccare le parentesi { } [ ] o le virgole , alla fine
 *  ✅ NON modificare i nomi delle chiavi (la parte PRIMA dei ":")
 *  ✅ Per testare le modifiche apri il sito nel browser
 *
 * ══════════════════════════════════════════════════════════════════
 */

window.SITO = {

  // ══════════════════════════════════════════════════════════════
  //  📌 SEZIONE 1 — IDENTITÀ DEL RISTORANTE
  // ══════════════════════════════════════════════════════════════

  nomeAzienda:      "LA FERMATA",
  slogan:           "Farinata e Pizza Restaurant · Torino",
  descrizioneBreve: "LA FERMATA — Fermata De Gasperi, Torino. Farinata artigianale e pizza a doppia cottura (Tegamino e Mattone). Impasto a lievitazione naturale, farine selezionate, ingredienti di alta qualità. Una sosta irresistibile lungo la Linea 15.",
  anniEsperienza:   "10+",
  annoFondazione:   "2015",
  annoCorrente:     new Date().getFullYear(),

  // ══════════════════════════════════════════════════════════════
  //  📞 SEZIONE 2 — CONTATTI
  //  ⚠️ IMPORTANTE: aggiorna telefono, email e WhatsApp!
  // ══════════════════════════════════════════════════════════════

  telefono:         "011 000 0000",          // 📞 Numero visualizzato
  telefonoHref:     "0110000000",            // 📞 Solo cifre per href="tel:..."
  whatsapp:         "390110000000",          // 📞 Prefisso 39 + numero senza zero
  email:            "info@lafermata.eu",     // ✉️  DA AGGIORNARE

  // ══════════════════════════════════════════════════════════════
  //  📍 SEZIONE 3 — SEDE E INDIRIZZO
  // ══════════════════════════════════════════════════════════════

  indirizzo:        "Corso De Gasperi, 15",
  citta:            "Torino",
  cap:              "10129",
  provincia:        "TO",
  mappaQuery:       "Corso+De+Gasperi,+15,+10129+Torino+TO",
  mappaEmbed:       "https://maps.google.com/maps?q=Corso+De+Gasperi,+15,+10129+Torino+TO&t=&z=15&ie=UTF8&iwloc=&output=embed",

  // ══════════════════════════════════════════════════════════════
  //  🌐 SEZIONE 4 — SITO WEB, SOCIAL E WI-FI
  // ══════════════════════════════════════════════════════════════

  sitoWeb:          "lafermata.eu",
  sitoWebUrl:       "https://lafermata.eu",
  instagram:        "https://www.instagram.com/lafermatatorino/",
  instagramHandle:  "lafermatatorino",
  facebook:         "https://www.facebook.com/LaFermataTorino",
  facebookNome:     "La Fermata Torino",

  // Password Wi-Fi da mostrare ai clienti
  wifiPassword:     "fermatadegasperipizzeriafarinata",

  // ══════════════════════════════════════════════════════════════
  //  ⭐ SEZIONE 5 — RECENSIONI GOOGLE
  // ══════════════════════════════════════════════════════════════

  googleMapsReviewLink: "https://www.google.com/maps/search/?api=1&query=La+Fermata+Torino+De+Gasperi",

  // ══════════════════════════════════════════════════════════════
  //  💬 SEZIONE 6 — MESSAGGIO WHATSAPP PRECOMPILATO
  // ══════════════════════════════════════════════════════════════

  whatsappMessaggio:        "Ciao! Vorrei prenotare un tavolo o chiedere informazioni 🚋",
  whatsappMessaggioEncoded: "Ciao!%20Vorrei%20prenotare%20un%20tavolo%20o%20chiedere%20informazioni%20%F0%9F%9A%8B",

  // ══════════════════════════════════════════════════════════════
  //  🕐 SEZIONE 7 — ORARI DI APERTURA
  //  ✏️ Modifica qui gli orari del ristorante
  // ══════════════════════════════════════════════════════════════

  orariSettimana:   "Mar–Ven: 12:00–14:30 · 19:00–22:30",
  orariSabato:      "Sab–Dom: 12:00–15:00 · 19:00–23:00",

  // ══════════════════════════════════════════════════════════════
  //  📋 SEZIONE 8 — DATI LEGALI
  //  ⚠️ DA AGGIORNARE con i dati reali del titolare
  // ══════════════════════════════════════════════════════════════

  pIva:             "IT00000000000",

  // ══════════════════════════════════════════════════════════════
  //  🔖 SEZIONE 9 — THEFORK / PRENOTAZIONE TAVOLO
  //  Inserisci il link TheFork del tuo ristorante su TheFork
  // ══════════════════════════════════════════════════════════════

  theforkUrl:       "https://www.thefork.it/ristorante/la-fermata-torino",
  theforkWidgetId:  "",   // ⚠️ Inserisci il tuo ID widget TheFork (opzionale)

  // ══════════════════════════════════════════════════════════════
  //  📸 SEZIONE 10 — GALLERIA FOTO
  //  ✏️ Sostituisci con i link alle tue foto reali
  // ══════════════════════════════════════════════════════════════

  instagramImages: [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=700&auto=format&fit=crop"
  ],

  // ══════════════════════════════════════════════════════════════
  //  🍕 SEZIONE 11 — MENU COMPLETO
  //
  //  ────────────────────────────────────────────────────────────
  //  GUIDA RAPIDA PER IL GESTORE
  //  ────────────────────────────────────────────────────────────
  //
  //  🍕 TIPO "pizza" — Doppia cottura Tegamino / Mattone
  //    • prezzoTegamino : prezzo formato piccolo (torinese)
  //    • prezzoMattone  : prezzo formato classico
  //    • Usa null per prezzoTegamino se non disponibile (mostra "N/D")
  //    • notaPrezzo     : nota aggiuntiva (es. "Integrale + 2,00 €")
  //
  //  🌾 TIPO "farinata" — Classica (3 formati) + Farcita
  //    • prezziClassica : { porzione, doppia, teglia }
  //    • farcita.fuoriCottura : [ { nome, prezzo } ]
  //    • farcita.inCottura    : { nota, prezzoPersona, gusti: [] }
  //    • farcita.teglia       : prezzo teglia (6 persone)
  //
  //  🫓 TIPO "focacce" — Prezzo unico
  //    • voci: [ { nome, ingredienti, prezzo } ]
  //
  //  🍕 TIPO "chiacchiere" — Pizza fritta, prezzo unico
  //    • voci: [ { nome, prezzo } ]
  //
  //  🍺 TIPO "spillatore" — Erogatore da tavolo bionda/rossa
  //    • voci: [ { litri, prezzoBionda, prezzoRossa } ]
  //
  //  🥤 TIPO "bevande-spina" — Birra alla spina media/piccola
  //    • voci: [ { nome, prezzoMedia, prezzoPiccola } ]
  //
  //  🍾 TIPO "birre-bottiglia" — Birre/bibite in bottiglia
  //    • voci: [ { nome, formato, prezzo } ]
  //
  //  🍷 TIPO "vino-rosso" / "vino-bianco" — Vini in bottiglia + sfuso
  //    • bottiglie: [ { nome, formato, gradazione, prezzo } ]
  //    • sfuso    : [ { nome, formato, gradazione, prezzo } ]
  //
  //  🥂 TIPO "calici" — Vino al calice
  //    • voci: [ { nome, prezzo } ]
  //
  //  👶 TIPO "bimbi" — Menu bambini
  //    • voci: [ { nome, descrizione, prezzo } ]
  // ══════════════════════════════════════════════════════════════

  menu: [

    // ─────────────────────────────────────────────────────────
    //  🍕 PIZZE CLASSICHE
    //  Modifica prezzoTegamino e prezzoMattone per aggiornare i prezzi
    //  Versione integrale disponibile con + 2,00 € (notaPrezzo)
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Pizze Classiche",
      tipo: "pizza",
      emoji: "🍕",
      notaPrezzo: "Versione Integrale + 2,00 €",
      descrizioneCategoria: "La tradizione della pizza a doppia cottura: Al Tegamino (cottura torinese, formato individuale) o Al Mattone (classica, croccante). Impasto a lievitazione naturale.",
      pizze: [
        // ✏️ Per modificare una pizza: cambia i valori dopo i ":"
        // prezzoTegamino = formato piccolo · prezzoMattone = formato classico
        { nome: "Margherita",            ingredienti: "Pomodoro, mozzarella",                                               prezzoTegamino: "6,00 €",  prezzoMattone: "6,50 €"  },
        { nome: "Margherita di Bufala",  ingredienti: "Pomodoro, mozzarella di bufala",                                     prezzoTegamino: "7,50 €",  prezzoMattone: "8,50 €"  },
        { nome: "Napoli",                ingredienti: "Pomodoro, mozzarella, acciughe",                                     prezzoTegamino: "7,50 €",  prezzoMattone: "8,00 €"  },
        { nome: "Prosciutto",            ingredienti: "Pomodoro, mozzarella, prosciutto",                                   prezzoTegamino: "7,50 €",  prezzoMattone: "8,00 €"  },
        { nome: "Würstel",               ingredienti: "Pomodoro, mozzarella, wurstel",                                      prezzoTegamino: "7,50 €",  prezzoMattone: "8,00 €"  },
        { nome: "Diavola",               ingredienti: "Pomodoro, mozzarella, salamino piccante",                            prezzoTegamino: "8,00 €",  prezzoMattone: "9,00 €"  },
        { nome: "Quattro Stagioni",      ingredienti: "Pomodoro, mozz., olive, prosciutto, carciofini, funghi",             prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Formaggi",              ingredienti: "Pomodoro, mozz., fontina, gorgonzola, emmentaler",                  prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Greca",                 ingredienti: "Pomodoro, mozzarella, olive",                                        prezzoTegamino: "7,50 €",  prezzoMattone: "8,00 €"  },
        { nome: "Vegetariana",           ingredienti: "Pomodoro, mozz., carciofi, melanzane, zucchine",                    prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Biancaneve",            ingredienti: "Mozzarella",                                                         prezzoTegamino: "6,00 €",  prezzoMattone: "6,00 €"  },
        { nome: "Marinara",              ingredienti: "Pomodoro, acciughe, aglio",                                          prezzoTegamino: "7,00 €",  prezzoMattone: "7,50 €"  },
        { nome: "Bismarck",              ingredienti: "Pomodoro, mozz., prosciutto, uovo",                                  prezzoTegamino: "9,50 €",  prezzoMattone: "9,50 €"  }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🚋 PIZZE SPECIALI — LE LINEE
    //  Nomi ispirati alle storiche linee tram di Torino
    //  null per prezzoTegamino = "N/D" (non disponibile)
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Pizze Speciali — Le Linee",
      tipo: "pizza",
      emoji: "🚋",
      notaPrezzo: "Versione Integrale + 2,00 €",
      descrizioneCategoria: "Le nostre creazioni signature, battezzate con i nomi delle storiche linee tram di Torino.",
      pizze: [
        { nome: "Linea 1",       ingredienti: "Pom., mozz., wurstel, patatine",                                  prezzoTegamino: "8,00 €",  prezzoMattone: "9,00 €"  },
        { nome: "Linea 4",       ingredienti: "Pom., mozz., salsiccia, gorgonzola",                              prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 6",       ingredienti: "Pom., mozz., stracchino, rucola fuori cottura",                   prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 15",      ingredienti: "Pom., mozz., gorgonzola, cipolle",                                prezzoTegamino: "8,00 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 16",      ingredienti: "Mozz., cipolle, olive, acciughe",                                 prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 21",      ingredienti: "Mozz., Scamorza, pomodorini gialli, salsiccia",                   prezzoTegamino: null,       prezzoMattone: "12,00 €" },
        { nome: "Linea 43",      ingredienti: "Pom., mozz., gorgonzola, speck, radicchio, salsiccia",           prezzoTegamino: null,       prezzoMattone: "12,00 €" },
        { nome: "Linea 45",      ingredienti: "Pom., mozz., speck, brie",                                        prezzoTegamino: "8,50 €",  prezzoMattone: "9,00 €"  },
        { nome: "Linea 46",      ingredienti: "Mozz. o stracchino, rucola, bresaola fuori cottura",              prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 53",      ingredienti: "Bufala, tonno, pomodori secchi, olive taggiasche",                prezzoTegamino: null,       prezzoMattone: "12,00 €" },
        { nome: "Linea 55",      ingredienti: "Pom., mozz., prosciutto cotto, funghi",                          prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 56",      ingredienti: "Pom., mozz., salsiccia, friarielli (rossa o bianca)",             prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 57",      ingredienti: "Pom., mozz., prosciutto cotto, fontina",                          prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 61",      ingredienti: "Mozz., salsiccia, rucola, Parmigiano a scaglie",                  prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 66",      ingredienti: "Pom., mozz., tonno, cipolla",                                     prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 67",      ingredienti: "Pom., mozz., tonno, carciofini",                                  prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 71",      ingredienti: "Mozz., gorgonzola, pere, noci",                                   prezzoTegamino: "10,00 €", prezzoMattone: "11,00 €" },
        { nome: "Linea 73",      ingredienti: "Stracchino, pomodorini fuori cottura, olive",                     prezzoTegamino: "8,00 €",  prezzoMattone: "9,00 €"  },
        { nome: "Linea 77",      ingredienti: "Mozz., crudo, gorgonzola, noci",                                  prezzoTegamino: "8,50 €",  prezzoMattone: "9,50 €"  },
        { nome: "Linea 78",      ingredienti: "Pom., bufala, cotto, grana, rucola",                              prezzoTegamino: "10,00 €", prezzoMattone: "11,00 €" },
        { nome: "Linea 18",      ingredienti: "Bufala, mortadella fuori cottura, pistacchi",                     prezzoTegamino: null,       prezzoMattone: "12,50 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🌾 LA FARINATA
    //  CLASSICA: modifica i 3 prezzi in "prezziClassica"
    //  FARCITA FUORI COTTURA: aggiungi/modifica voci in farcita.fuoriCottura
    //  FARCITA IN COTTURA: modifica prezzoPersona e l'array "gusti"
    // ─────────────────────────────────────────────────────────
    {
      categoria: "La Farinata",
      tipo: "farinata",
      emoji: "🌾",
      descrizioneCategoria: "Preparata ogni giorno con farina di ceci 100% italiana, olio EVO di prima spremitura e acqua. Cotta ad alta temperatura per la crosticina dorata perfetta.",
      prezziClassica: {
        porzione: "5,00 €",   // ✏️ Prezzo porzione singola
        doppia:   "9,00 €",   // ✏️ Prezzo doppia porzione
        teglia:   "25,00 €"   // ✏️ Prezzo teglia (6 persone)
      },
      farcita: {
        // ── FUORI COTTURA: ingredienti messi dopo la cottura
        fuoriCottura: [
          { nome: "Gorgonzola",  prezzo: "6,50 €" },
          { nome: "Stracchino",  prezzo: "6,50 €" },
          { nome: "Crudo",       prezzo: "7,50 €" },
          { nome: "Lardo",       prezzo: "7,50 €" }
        ],
        // ── IN COTTURA: ingredienti cotti insieme alla farinata
        inCottura: {
          nota:           "Min. 2 persone",
          prezzoPersona:  "6,50 €",    // ✏️ Prezzo a persona
          gusti: [
            "Fontina e gorgonzola",
            "Gorgonzola e salsiccia",
            "Salamino",
            "Rosmarino",
            "Cipolla",
            "Zucchine",
            "Grana e basilico"
          ]
        },
        teglia: "30,00 €"   // ✏️ Prezzo teglia farcita (6 persone)
      }
    },

    // ─────────────────────────────────────────────────────────
    //  🫓 FOCACCIA AL MATTONE
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Focaccia al Mattone",
      tipo: "focacce",
      emoji: "🫓",
      descrizioneCategoria: "Focacce cotte al mattone, perfette da condividere.",
      voci: [
        { nome: "Stracciatella e acciughe",    ingredienti: "Stracciatella, acciughe del Cantabrico",           prezzo: "12,00 €" },
        { nome: "Lardo, miele e noci",         ingredienti: "Lardo di Colonnata, miele millefiori, noci",       prezzo: "12,00 €" },
        { nome: "Crudo di Parma e bufala",     ingredienti: "Prosciutto crudo di Parma, mozzarella di bufala", prezzo: "14,00 €" },
        { nome: "Burrata e crudo di Parma",    ingredienti: "Burrata pugliese, prosciutto crudo di Parma",     prezzo: "14,00 €" },
        { nome: "Primavera",                   ingredienti: "Fiordilatte, pomodorini, rucola",                  prezzo: "12,00 €" },
        { nome: "Vegetariana",                 ingredienti: "Verdure di stagione, pomodoro, olio EVO",          prezzo: "12,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🍕 CHIACCHIERE (Pizza fritta)
    //  Aggiungi voci con { nome, prezzo }
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Chiacchiere",
      tipo: "chiacchiere",
      emoji: "🍕",
      descrizioneCategoria: "Pizza fritta con ingredienti selezionati. Croccante fuori, soffice dentro.",
      voci: [
        { nome: "Bufala, crudo Parma, pomodorini, olive",   prezzo: "16,00 €" },
        { nome: "Burrata, crudo Parma, pomodorini, olive",  prezzo: "18,00 €" },
        { nome: "Tagliere salumi",                          prezzo: "18,00 €" },
        { nome: "Tagliere formaggi",                        prezzo: "18,00 €" },
        { nome: "Tagliere misto",                           prezzo: "18,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🍺 LO SPILLATORE AL TAVOLO
    //  Erogatore di birra consegnato al tavolo
    //  Colonne: Bionda · Rossa
    //  ✏️ Modifica solo i prezzi (prezzoBionda, prezzoRossa)
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Lo Spillatore al Tavolo",
      tipo: "spillatore",
      emoji: "🍺",
      descrizioneCategoria: "Birra artigianale servita in eleganti erogatori direttamente al vostro tavolo. Il rubinetto è vostro!",
      voci: [
        { litri: "1,0 L",   prezzoBionda: "14,00 €", prezzoRossa: "17,00 €" },
        { litri: "1,5 L",   prezzoBionda: "21,00 €", prezzoRossa: "25,00 €" },
        { litri: "2,0 L",   prezzoBionda: "27,00 €", prezzoRossa: "32,00 €" },
        { litri: "2,5 L",   prezzoBionda: "30,00 €", prezzoRossa: "36,00 €" },
        { litri: "3,0 L",   prezzoBionda: "34,00 €", prezzoRossa: "41,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🥤 BEVANDE ALLA SPINA
    //  Colonne: Media · Piccola
    //  ✏️ Modifica prezzoMedia e prezzoPiccola
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Bevande alla Spina",
      tipo: "bevande-spina",
      emoji: "🥤",
      descrizioneCategoria: "Birra alla spina e bevande in formato media (40 cl) o piccola (20 cl).",
      voci: [
        { nome: "Bionda",          prezzoMedia: "5,50 €", prezzoPiccola: "4,00 €" },
        { nome: "Rossa",           prezzoMedia: "6,50 €", prezzoPiccola: "4,50 €" },
        { nome: "Panaché bionda",  prezzoMedia: "5,50 €", prezzoPiccola: "3,50 €" },
        { nome: "Panaché rossa",   prezzoMedia: "6,50 €", prezzoPiccola: "4,00 €" },
        { nome: "Coca Cola",       prezzoMedia: "4,50 €", prezzoPiccola: "3,50 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🍾 BIRRE IN BOTTIGLIA E BIBITE
    //  ✏️ Aggiungi: { nome, formato, prezzo }
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Birre in Bottiglia e Bibite",
      tipo: "birre-bottiglia",
      emoji: "🍾",
      descrizioneCategoria: "Selezione di birre artigianali e bibite in bottiglia.",
      voci: [
        { nome: "Weiss",                                     formato: "50 cl",  prezzo: "7,00 €" },
        { nome: "Menabrea Ambrata",                          formato: "33 cl",  prezzo: "5,00 €" },
        { nome: "Menabrea Bionda",                           formato: "33 cl",  prezzo: "5,00 €" },
        { nome: "Ichnusa Bionda non filtrata",               formato: "33 cl",  prezzo: "6,00 €" },
        { nome: "Bibite (Coca-Cola, C. Zero, Estathè, Fanta, Sprite, Chinotto, Lemonsoda)", formato: "", prezzo: "3,50 €" },
        { nome: "Acqua naturale o gasata",                   formato: "",       prezzo: "2,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🍷 VINO ROSSO
    //  bottiglie: vini in bottiglia intera
    //  sfuso    : vino sfuso in 1/4 o 1/2 litro
    //  ✏️ Modifica i prezzi nelle rispettive sezioni
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Vino Rosso",
      tipo: "vino-rosso",
      emoji: "🍷",
      descrizioneCategoria: "Selezione di vini rossi piemontesi, in bottiglia o sfuso.",
      bottiglie: [
        { nome: "Barbera DOC",  formato: "0,75 lt", gradazione: "12,5°", prezzo: "15,00 €" },
        { nome: "Nebbiolo",     formato: "0,75 lt", gradazione: "13,0°", prezzo: "20,00 €" }
      ],
      sfuso: [
        { nome: "Barbera sfuso", formato: "1/4 lt", gradazione: "12,5°", prezzo: "5,00 €" },
        { nome: "Barbera sfuso", formato: "1/2 lt", gradazione: "12,5°", prezzo: "7,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🥂 VINO BIANCO
    //  Stessa struttura del vino rosso
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Vino Bianco",
      tipo: "vino-bianco",
      emoji: "🥂",
      descrizioneCategoria: "Selezione di vini bianchi piemontesi e veneti, in bottiglia o sfuso.",
      bottiglie: [
        { nome: "Arneis",                   formato: "0,75 lt", gradazione: "12,0°", prezzo: "14,00 €" },
        { nome: "Traminer",                 formato: "0,75 lt", gradazione: "13,0°", prezzo: "16,00 €" },
        { nome: "Prosecco Valdobbiadene",   formato: "0,75 lt", gradazione: "13,0°", prezzo: "16,00 €" }
      ],
      sfuso: [
        { nome: "Chardonnay sfuso", formato: "1/4 lt", gradazione: "12,0°", prezzo: "5,00 €" },
        { nome: "Chardonnay sfuso", formato: "1/2 lt", gradazione: "12,0°", prezzo: "7,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  🥂 CALICI
    //  ✏️ Aggiungi: { nome, prezzo }
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Calici",
      tipo: "calici",
      emoji: "🥂",
      descrizioneCategoria: "Una selezione al calice per accompagnare la tua fermata.",
      voci: [
        { nome: "Chardonnay", prezzo: "5,00 €" },
        { nome: "Barbera",    prezzo: "5,00 €" },
        { nome: "Prosecco",   prezzo: "6,00 €" },
        { nome: "Nebbiolo",   prezzo: "6,00 €" },
        { nome: "Spritz",     prezzo: "6,00 €" }
      ]
    },

    // ─────────────────────────────────────────────────────────
    //  👶 MENU BIMBI
    //  Include il Gioco Dolce per i piccoli ospiti
    // ─────────────────────────────────────────────────────────
    {
      categoria: "Menu Bimbi",
      tipo: "bimbi",
      emoji: "👶",
      descrizioneCategoria: "Un menu pensato per i nostri piccoli ospiti: porzioni adatte, sapori genuini e una sorpresa dolce alla fine!",
      voci: [
        {
          nome: "Menu Tram Piccolo",
          descrizione: "Pizza Tegamino (Margherita o Prosciutto) + Bibita a scelta (20 cl) + Gioco Dolce 🎁",
          prezzo: "9,00 €"
        },
        {
          nome: "Menu Tram Grande",
          descrizione: "Pizza Tegamino Maxi + Bibita a scelta (33 cl) + Dessert + Gioco Dolce 🎁",
          prezzo: "12,00 €"
        }
      ]
    }

  ], // ← fine menu


  // ══════════════════════════════════════════════════════════════
  //  ⭐ SEZIONE 12 — RECENSIONI
  //
  //  Come aggiungere una recensione:
  //  1. Copia un blocco { nome, stelle, testo, data }
  //  2. Incollalo prima dell'ultima ] di chiusura
  //  3. Aggiungi una virgola dopo il blocco precedente
  //  stelle: numero da 1 a 5
  // ══════════════════════════════════════════════════════════════

  recensioni: [
    {
      nome: "Federica M.",
      stelle: 5,
      testo: "La farinata è un capolavoro! Croccante fuori, morbida dentro — non ne avevo mai mangiata così buona a Torino. La pizza al tegamino della Linea 15 con gorgonzola e cipolle è da sogno. Ambiente caldo e accogliente, staff gentilissimo.",
      data: "1 settimana fa"
    },
    {
      nome: "Giacomo P.",
      stelle: 5,
      testo: "Finalmente un posto che fa la vera farinata con ingredienti di qualità! Lo spillatore al tavolo è un'idea geniale — ci siamo fermati per un'ora a chiacchierare con la birra sempre fresca. Le pizze al mattone sono strepitose.",
      data: "2 settimane fa"
    },
    {
      nome: "Sara V.",
      stelle: 5,
      testo: "Posto bellissimo, atmosfera autentica che ricorda i vecchi tram torinesi. La Linea 71 con gorgonzola, pere e noci è straordinaria! La farinata farcita fuori cottura con stracchino da leccarsi i baffi. Prezzi onestissimi.",
      data: "3 settimane fa"
    }
  ]

}; // ← fine SITO


// ══════════════════════════════════════════════════════════════
//  ⚙️  MOTORE DEL SITO — NON MODIFICARE QUESTO BLOCCO
//  Funzioni tecniche che fanno funzionare il sito
// ══════════════════════════════════════════════════════════════

(function initConfig() {
  document.addEventListener('DOMContentLoaded', function () {

    // Popola testo degli elementi con data-config
    document.querySelectorAll('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config');
      if (window.SITO[key] !== undefined) el.textContent = window.SITO[key];
    });

    // Popola href con template "{chiave}"
    document.querySelectorAll('[data-config-href]').forEach(function (el) {
      var tpl = el.getAttribute('data-config-href');
      el.href = tpl.replace(/\{(\w+)\}/g, function (_, k) {
        return window.SITO[k] !== undefined ? window.SITO[k] : '';
      });
    });

    // Anno corrente
    document.querySelectorAll('[data-anno]').forEach(function (el) {
      el.textContent = window.SITO.annoCorrente;
    });

    // Iframe mappa
    window.loadConsentedMap = function () {
      var consent = localStorage.getItem('cookieConsent');
      var placeholder = document.getElementById('map-placeholder');
      var iframe = document.getElementById('map-iframe');
      if (consent === 'accepted') {
        if (iframe && !iframe.src) iframe.src = window.SITO.mappaEmbed;
        if (placeholder) placeholder.style.display = 'none';
        if (iframe) iframe.style.display = 'block';
      } else {
        if (placeholder) placeholder.style.display = 'flex';
        if (iframe) iframe.style.display = 'none';
      }
    };
    window.loadConsentedMap();

    // Schema.org JSON-LD
    var schemaEl = document.getElementById('schema-org');
    if (schemaEl) {
      schemaEl.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Restaurant",
        "name": window.SITO.nomeAzienda,
        "description": window.SITO.descrizioneBreve,
        "telephone": window.SITO.telefono,
        "email": window.SITO.email,
        "servesCuisine": ["Pizza", "Farinata", "Italian"],
        "priceRange": "€€",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": window.SITO.indirizzo,
          "addressLocality": window.SITO.citta,
          "postalCode": window.SITO.cap,
          "addressRegion": window.SITO.provincia,
          "addressCountry": "IT"
        },
        "openingHours": ["Tu-Fr 12:00-14:30", "Tu-Fr 19:00-22:30", "Sa-Su 12:00-15:00", "Sa-Su 19:00-23:00"],
        "foundingDate": window.SITO.annoFondazione,
        "url": window.SITO.sitoWebUrl,
        "sameAs": [window.SITO.instagram, window.SITO.facebook]
      }, null, 2);
    }

    initMenu();
    initRecensioni();
    initInstagram();
  });
})();

// ─────────────────────────────────────────────────────────────
//  initMenu() — Genera il menu dal JSON
// ─────────────────────────────────────────────────────────────
function initMenu() {
  var grid = document.getElementById('menu-grid');
  if (!grid || !window.SITO.menu) return;
  var html = '';

  window.SITO.menu.forEach(function (cat) {
    html += '<div class="menu-category-card animate-on-scroll">';
    html += '<div class="menu-category-header">';
    html += '<h3 class="menu-category-title">' + (cat.emoji ? cat.emoji + ' ' : '') + cat.categoria + '</h3>';
    html += '<p class="menu-category-desc">' + cat.descrizioneCategoria + '</p>';
    if (cat.notaPrezzo) {
      html += '<span class="menu-nota-prezzo">ℹ️ ' + cat.notaPrezzo + '</span>';
    }
    html += '</div>';

    // ── PIZZE (doppia cottura Tegamino / Mattone)
    if (cat.tipo === 'pizza' && cat.pizze) {
      html += '<div class="menu-pizza-doppia-header">';
      html += '<span></span>';
      html += '<span class="col-label col-tegamino">Al Tegamino</span>';
      html += '<span class="col-label col-mattone">Al Mattone</span>';
      html += '</div>';
      html += '<ul class="menu-pizza-list">';
      cat.pizze.forEach(function (p) {
        html += '<li class="menu-pizza-item menu-pizza-item--doppia">';
        html += '<div class="menu-pizza-info">';
        html += '<span class="menu-pizza-nome">' + p.nome + '</span>';
        html += '<span class="menu-pizza-ingredienti">' + p.ingredienti + '</span>';
        html += '</div>';
        html += '<div class="menu-pizza-prezzi">';
        var teg = p.prezzoTegamino ? p.prezzoTegamino : '<span class="nd">N/D</span>';
        html += '<span class="prezzo-badge prezzo-tegamino">' + teg + '</span>';
        html += '<span class="prezzo-badge prezzo-mattone">' + p.prezzoMattone + '</span>';
        html += '</div>';
        html += '</li>';
      });
      html += '</ul>';
    }

    // ── FARINATA
    else if (cat.tipo === 'farinata') {
      html += '<div class="farinata-block">';
      // Classica
      html += '<div class="farinata-classica">';
      html += '<span class="farinata-tipo-label">🌾 Farinata Classica</span>';
      html += '<div class="farinata-formati">';
      html += '<div class="farinata-formato"><span class="formato-nome">Porzione</span><span class="formato-prezzo">' + cat.prezziClassica.porzione + '</span></div>';
      html += '<div class="farinata-formato"><span class="formato-nome">Doppia</span><span class="formato-prezzo">' + cat.prezziClassica.doppia + '</span></div>';
      html += '<div class="farinata-formato"><span class="formato-nome">Teglia (6 pers.)</span><span class="formato-prezzo">' + cat.prezziClassica.teglia + '</span></div>';
      html += '</div></div>';
      // Farcita fuori cottura
      html += '<div class="farinata-farcite">';
      html += '<span class="farinata-tipo-label">🧀 Farcita — Fuori Cottura</span>';
      html += '<ul class="farinata-list">';
      cat.farcita.fuoriCottura.forEach(function (v) {
        html += '<li class="farinata-item"><span class="farinata-item-nome">' + v.nome + '</span><span class="farinata-item-prezzo">' + v.prezzo + '</span></li>';
      });
      html += '</ul></div>';
      // Farcita in cottura
      html += '<div class="farinata-farcite farinata-incottura">';
      html += '<span class="farinata-tipo-label">🔥 Farcita — In Cottura <em class="farinata-nota">(' + cat.farcita.inCottura.nota + ' · ' + cat.farcita.inCottura.prezzoPersona + ' a persona)</em></span>';
      html += '<div class="farinata-gusti">';
      cat.farcita.inCottura.gusti.forEach(function (g) {
        html += '<span class="farinata-gusto">' + g + '</span>';
      });
      html += '</div></div>';
      // Teglia farcita
      html += '<div class="farinata-teglia"><i class="fa-solid fa-circle-info"></i> Teglia farcita (6 persone): <strong>' + cat.farcita.teglia + '</strong></div>';
      html += '</div>';
    }

    // ── FOCACCE
    else if (cat.tipo === 'focacce' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info"><span class="menu-pizza-nome">' + v.nome + '</span><span class="menu-pizza-ingredienti">' + v.ingredienti + '</span></div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    // ── CHIACCHIERE
    else if (cat.tipo === 'chiacchiere' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info"><span class="menu-pizza-nome">' + v.nome + '</span></div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    // ── SPILLATORE (Bionda / Rossa)
    else if (cat.tipo === 'spillatore' && cat.voci) {
      html += '<table class="drink-table">';
      html += '<thead><tr><th>Litri</th><th>🍺 Bionda</th><th>🍻 Rossa</th></tr></thead>';
      html += '<tbody>';
      cat.voci.forEach(function (v) {
        html += '<tr><td class="drink-litri">' + v.litri + '</td>';
        html += '<td class="drink-prezzo">' + v.prezzoBionda + '</td>';
        html += '<td class="drink-prezzo">' + v.prezzoRossa + '</td></tr>';
      });
      html += '</tbody></table>';
    }

    // ── BEVANDE ALLA SPINA (Media / Piccola)
    else if (cat.tipo === 'bevande-spina' && cat.voci) {
      html += '<table class="drink-table">';
      html += '<thead><tr><th>Bevanda</th><th>Media (40cl)</th><th>Piccola (20cl)</th></tr></thead>';
      html += '<tbody>';
      cat.voci.forEach(function (v) {
        html += '<tr><td class="drink-nome">' + v.nome + '</td>';
        html += '<td class="drink-prezzo">' + v.prezzoMedia + '</td>';
        html += '<td class="drink-prezzo">' + v.prezzoPiccola + '</td></tr>';
      });
      html += '</tbody></table>';
    }

    // ── BIRRE IN BOTTIGLIA
    else if (cat.tipo === 'birre-bottiglia' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info"><span class="menu-pizza-nome">' + v.nome + '</span>';
        if (v.formato) html += '<span class="menu-pizza-ingredienti">' + v.formato + '</span>';
        html += '</div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    // ── VINO ROSSO / BIANCO
    else if ((cat.tipo === 'vino-rosso' || cat.tipo === 'vino-bianco') && cat.bottiglie) {
      html += '<div class="vino-block">';
      html += '<span class="vino-label">🍾 In Bottiglia</span>';
      html += '<table class="drink-table"><thead><tr><th>Vino</th><th>Formato</th><th>Gradaz.</th><th>Prezzo</th></tr></thead><tbody>';
      cat.bottiglie.forEach(function (v) {
        html += '<tr><td class="drink-nome">' + v.nome + '</td><td>' + v.formato + '</td><td class="drink-grad">' + v.gradazione + '</td><td class="drink-prezzo">' + v.prezzo + '</td></tr>';
      });
      html += '</tbody></table>';
      if (cat.sfuso && cat.sfuso.length) {
        html += '<span class="vino-label" style="margin-top:16px">🫙 Sfuso</span>';
        html += '<table class="drink-table"><thead><tr><th>Vino</th><th>Formato</th><th>Gradaz.</th><th>Prezzo</th></tr></thead><tbody>';
        cat.sfuso.forEach(function (v) {
          html += '<tr><td class="drink-nome">' + v.nome + '</td><td>' + v.formato + '</td><td class="drink-grad">' + v.gradazione + '</td><td class="drink-prezzo">' + v.prezzo + '</td></tr>';
        });
        html += '</tbody></table>';
      }
      html += '</div>';
    }

    // ── CALICI
    else if (cat.tipo === 'calici' && cat.voci) {
      html += '<div class="calici-grid">';
      cat.voci.forEach(function (v) {
        html += '<div class="calice-card"><span class="calice-nome">' + v.nome + '</span><span class="calice-prezzo">' + v.prezzo + '</span></div>';
      });
      html += '</div>';
    }

    // ── BIMBI
    else if (cat.tipo === 'bimbi' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info"><span class="menu-pizza-nome">' + v.nome + '</span><span class="menu-pizza-ingredienti">' + v.descrizione + '</span></div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    html += '</div>'; // .menu-category-card
  });

  grid.innerHTML = html;
  setTimeout(function () {
    document.querySelectorAll('#menu-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);
}

// ─────────────────────────────────────────────────────────────
//  initRecensioni()
// ─────────────────────────────────────────────────────────────
function initRecensioni() {
  var grid = document.getElementById('recensioni-grid');
  if (!grid || !window.SITO.recensioni) return;
  var html = '';
  window.SITO.recensioni.forEach(function (rec) {
    var stelle = '';
    for (var i = 0; i < 5; i++) stelle += i < rec.stelle ? '<span class="star filled">★</span>' : '<span class="star">★</span>';
    var iniziale = rec.nome.charAt(0).toUpperCase();
    html += '<div class="recensione-card animate-on-scroll">';
    html += '<div class="recensione-header"><div class="recensione-avatar">' + iniziale + '</div>';
    html += '<div class="recensione-meta"><span class="recensione-nome">' + rec.nome + '</span><span class="recensione-data">' + rec.data + '</span></div>';
    html += '<div class="google-icon">G</div></div>';
    html += '<div class="recensione-stelle">' + stelle + '</div>';
    html += '<p class="recensione-testo">' + rec.testo + '</p>';
    html += '</div>';
  });
  grid.innerHTML = html;
  setTimeout(function () {
    document.querySelectorAll('#recensioni-grid .animate-on-scroll').forEach(function (el) { el.classList.add('visible'); });
  }, 150);
}

// ─────────────────────────────────────────────────────────────
//  initInstagram()
// ─────────────────────────────────────────────────────────────
function initInstagram() {
  var grid = document.getElementById('instagram-grid');
  if (!grid || !window.SITO.instagramImages || !window.SITO.instagramImages.length) return;
  var instagramUrl = window.SITO.instagram || '#';
  function safeUrl(url) {
    if (typeof url !== 'string') return '';
    var t = url.trim();
    return /^https?:\/\//i.test(t) ? t : '';
  }
  var html = '';
  window.SITO.instagramImages.forEach(function (url, i) {
    var safe = safeUrl(url);
    if (!safe) return;
    html += '<a href="' + safeUrl(instagramUrl) + '" target="_blank" rel="noopener" class="instagram-item animate-on-scroll">';
    html += '<img src="' + safe + '" alt="LA FERMATA — foto ' + (i + 1) + '" loading="lazy">';
    html += '<div class="instagram-item-overlay"><i class="fa-brands fa-instagram"></i></div>';
    html += '</a>';
  });
  grid.innerHTML = html;
  setTimeout(function () {
    document.querySelectorAll('#instagram-grid .animate-on-scroll').forEach(function (el) { el.classList.add('visible'); });
  }, 100);
}
