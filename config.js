/**
 * ╔══════════════════════════════════════════════════════════════════╗
 *  PANNELLO DI CONFIGURAZIONE — LA FERMATA
 *  Farinata e Pizza Restaurant · Torino
 * ╔══════════════════════════════════════════════════════════════════╗
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

  telefono:         "011 000 0000",
  telefonoHref:     "0110000000",
  whatsapp:         "390110000000",
  email:            "info@lafermata.it",

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
  //  ⭐ SEZIONE 4 — RECENSIONI GOOGLE
  // ══════════════════════════════════════════════════════════════

  googleMapsReviewLink: "https://www.google.com/maps/search/?api=1&query=La+Fermata+Torino",

  // ══════════════════════════════════════════════════════════════
  //  💬 SEZIONE 5 — MESSAGGIO WHATSAPP PRECOMPILATO
  // ══════════════════════════════════════════════════════════════

  whatsappMessaggio:        "Ciao! Vorrei prenotare un tavolo o chiedere informazioni 🚋",
  whatsappMessaggioEncoded: "Ciao!%20Vorrei%20prenotare%20un%20tavolo%20o%20chiedere%20informazioni%20%F0%9F%9A%8B",

  // ══════════════════════════════════════════════════════════════
  //  🕐 SEZIONE 6 — ORARI DI APERTURA
  // ══════════════════════════════════════════════════════════════

  orariSettimana:   "Mar–Ven: 12:00–14:30 · 19:00–22:30",
  orariSabato:      "Sab–Dom: 12:00–15:00 · 19:00–23:00",

  // ══════════════════════════════════════════════════════════════
  //  📋 SEZIONE 7 — DATI LEGALI
  //  ⚠️ DA AGGIORNARE con i dati reali del titolare
  // ══════════════════════════════════════════════════════════════

  pIva:             "IT00000000000",

  // ══════════════════════════════════════════════════════════════
  //  🔖 SEZIONE 8 — THEFORK / PRENOTAZIONE TAVOLO
  //  Inserisci il link TheFork del tuo ristorante
  // ══════════════════════════════════════════════════════════════

  theforkUrl:       "https://www.thefork.it/ristorante/la-fermata-torino",
  theforkWidgetId:  "",

  // ══════════════════════════════════════════════════════════════
  //  🔗 SEZIONE 9 — SEO E SOCIAL
  // ══════════════════════════════════════════════════════════════

  titoloPagineBase: "LA FERMATA — Farinata e Pizza Restaurant Torino",
  localita:         "Torino",
  facebook:         "",
  instagram:        "https://www.instagram.com/lafermata_torino/",

  // ══════════════════════════════════════════════════════════════
  //  📸 SEZIONE 10 — GALLERIA FOTO
  // ══════════════════════════════════════════════════════════════

  instagramImages: [
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1548365328-8c6db3220e4c?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=700&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1528137871618-79d2761e3fd5?q=80&w=700&auto=format&fit=crop",
  ],

  // ══════════════════════════════════════════════════════════════
  //  🍕 SEZIONE 11 — MENU COMPLETO
  //
  //  PIZZE (tipo "pizza"): ogni pizza ha DUE prezzi obbligatori
  //    prezzoTegamino + prezzoMattone
  //  FARINATA (tipo "farinata"): Classica (3 formati) + Farcite
  //  FOCACCE (tipo "focacce"): { nome, ingredienti, prezzo }
  //  MULTIPIATTO (tipo "multipiatto"): piatto componibile
  //  BIRRA (tipo "birra"): erogatori per litro
  //  BIMBI (tipo "bimbi"): { nome, descrizione, prezzo }
  // ══════════════════════════════════════════════════════════════

  menu: [

    {
      categoria: "Le Pizze — Doppia Cottura",
      tipo: "pizza",
      emoji: "🍕",
      descrizioneCategoria: "Ogni pizza è disponibile in due format: Al Tegamino (cottura torinese, formato individuale) e Al Mattone (classica, croccante). Impasto a lievitazione naturale 48h con farine selezionate.",
      pizze: [
        { nome: "Margherita",          ingredienti: "Pomodoro San Marzano DOP, Fior di Latte, basilico fresco, olio EVO",                    prezzoTegamino: "8,00 €",  prezzoMattone: "12,00 €" },
        { nome: "Marinara del Porto",  ingredienti: "Pomodoro San Marzano DOP, aglio, origano di Pantelleria, olio EVO",                     prezzoTegamino: "7,00 €",  prezzoMattone: "10,00 €" },
        { nome: "Quattro Formaggi",    ingredienti: "Fior di Latte, Gorgonzola DOP, Pecorino Romano, Scamorza affumicata",                   prezzoTegamino: "10,00 €", prezzoMattone: "14,00 €" },
        { nome: "Prosciutto e Funghi", ingredienti: "Prosciutto cotto alta qualità, funghi Champignon, Fior di Latte, pomodoro",             prezzoTegamino: "9,00 €",  prezzoMattone: "13,00 €" },
        { nome: "Diavola",             ingredienti: "Salame piccante artigianale, pomodoro San Marzano DOP, Fior di Latte, origano",         prezzoTegamino: "9,50 €",  prezzoMattone: "13,50 €" },
        { nome: "Patate e Rosmarino",  ingredienti: "Patate novelle a fettine, rosmarino fresco, aglio, olio EVO, Fior di Latte",            prezzoTegamino: "8,50 €",  prezzoMattone: "12,00 €" },
      ]
    },

    {
      categoria: "Pizze Speciali — Le Linee",
      tipo: "pizza",
      emoji: "🚋",
      descrizioneCategoria: "Le nostre creazioni signature, battezzate con i nomi delle storiche linee tram di Torino. Abbinamenti audaci, ingredienti d'eccellenza.",
      pizze: [
        { nome: "Linea 1",  ingredienti: "Mortadella Bologna IGP a rosa, stracciatella fresca di Andria, pistacchio di Bronte DOP, olio EVO",                         prezzoTegamino: "12,00 €", prezzoMattone: "16,00 €" },
        { nome: "Linea 4",  ingredienti: "Burrata pugliese, pomodorini datterini confit, basilico fresco, riduzione di aceto balsamico di Modena IGP",                 prezzoTegamino: "11,00 €", prezzoMattone: "15,00 €" },
        { nome: "Linea 10", ingredienti: "Salmone norvegese affumicato, rucola selvatica, scamorza affumicata, scorza di limone di Amalfi",                            prezzoTegamino: "12,00 €", prezzoMattone: "16,00 €" },
        { nome: "Linea 15", ingredienti: "Funghi Porcini trifolati, crema di tartufo nero del Piemonte, Fior di Latte, scaglie di Parmigiano Reggiano 24 mesi",       prezzoTegamino: "13,00 €", prezzoMattone: "17,00 €" },
        { nome: "Linea 55", ingredienti: "'Nduja artigianale di Spilinga, stracciatella pugliese, pomodoro San Marzano DOP, miele millefiori in finitura",             prezzoTegamino: "12,50 €", prezzoMattone: "16,50 €" },
      ]
    },

    {
      categoria: "La Farinata",
      tipo: "farinata",
      emoji: "🌾",
      descrizioneCategoria: "La nostra farinata è preparata ogni giorno con farina di ceci 100% italiana, olio EVO di prima spremitura e acqua. Cotta nel forno ad alta temperatura per ottenere la crosticina dorata perfetta.",
      prezziClassica: {
        porzione: "3,50 €",
        doppia:   "6,00 €",
        teglia:   "18,00 €"
      },
      farcite: [
        { nome: "Rosmarino e Cipolla di Tropea",  cottura: "in cottura",    prezzo: "5,00 €" },
        { nome: "Olive nere e Timo",              cottura: "in cottura",    prezzo: "5,00 €" },
        { nome: "Zucchine e Maggiorana",          cottura: "in cottura",    prezzo: "5,50 €" },
        { nome: "Gorgonzola DOP e Noci",          cottura: "fuori cottura", prezzo: "6,00 €" },
        { nome: "Prosciutto Crudo e Rucola",      cottura: "fuori cottura", prezzo: "6,50 €" },
        { nome: "Stracchino e Crudo Toscano",     cottura: "fuori cottura", prezzo: "6,50 €" },
        { nome: "Salsiccia e Friarielli",         cottura: "in cottura",    prezzo: "6,00 €" },
      ]
    },

    {
      categoria: "Focacce al Mattone",
      tipo: "focacce",
      emoji: "🫓",
      descrizioneCategoria: "Focacce soffici e fragranti, cotte direttamente al mattone. Perfette da condividere o come accompagnamento.",
      voci: [
        { nome: "Focaccia Classica all'Olio",    ingredienti: "Olio EVO, sale di Cervia in fiocchi, rosmarino fresco",          prezzo: "6,00 €" },
        { nome: "Focaccia Genovese",             ingredienti: "Olio EVO abbondante, sale grosso, lievitazione naturale 24h",   prezzo: "7,00 €" },
        { nome: "Focaccia Pomodorini e Olive",   ingredienti: "Pomodorini datterini, olive Taggiasche, origano, olio EVO",     prezzo: "7,50 €" },
        { nome: "Focaccia Cipolle e Scamorza",   ingredienti: "Cipolla di Tropea caramellata, Scamorza affumicata, timo",      prezzo: "8,00 €" },
        { nome: "Focaccia Patate e Pancetta",    ingredienti: "Patate arrosto, pancetta croccante, Pecorino Romano, rosmarino", prezzo: "8,50 €" },
      ]
    },

    {
      categoria: "Linea Metropolitan Multipiatto",
      tipo: "multipiatto",
      emoji: "🚇",
      descrizioneCategoria: "Componi il tuo piatto personalizzato: scegli 1 base e 3 ingredienti dalla nostra selezione. Ideale per chi non vuole scegliere — scegli tutto!",
      prezzoBase: "14,00 €",
      noteMultipiatto: "Ogni ingrediente extra: +2,00 €",
      basi: [
        "Pizza al Tegamino",
        "Pizza al Mattone",
        "Farinata Classica",
        "Focaccia al Mattone"
      ],
      ingredienti: [
        "Prosciutto Crudo 24 mesi",
        "Mortadella Bologna IGP",
        "Stracciatella di Andria",
        "Burrata Pugliese",
        "Funghi Porcini trifolati",
        "Rucola selvatica",
        "Pomodorini confit",
        "Gorgonzola DOP",
        "Scamorza affumicata",
        "Salmone affumicato",
        "Crema di Tartufo",
        "Pistacchio di Bronte DOP"
      ]
    },

    {
      categoria: "Lo Spillatore al Tavolo",
      tipo: "birra",
      emoji: "🍺",
      descrizioneCategoria: "Birra artigianale torinese servita in eleganti erogatori direttamente al vostro tavolo. Il rubinetto è vostro!",
      voci: [
        { litri: "1,0 L",  prezzo: "8,00 €" },
        { litri: "1,5 L",  prezzo: "11,00 €" },
        { litri: "2,0 L",  prezzo: "14,00 €" },
        { litri: "2,5 L",  prezzo: "17,00 €" },
        { litri: "3,5 L",  prezzo: "22,00 €" }
      ]
    },

    {
      categoria: "Menu Bimbi",
      tipo: "bimbi",
      emoji: "👶",
      descrizioneCategoria: "Un menu pensato per i nostri piccoli ospiti: porzioni adatte, sapori genuini e una sorpresa dolce alla fine!",
      voci: [
        {
          nome: "Menu Tram Piccolo",
          descrizione: "Pizza Tegamino (Margherita o Prosciutto) + Bibita a scelta (20cl) + Gioco Dolce 🎁",
          prezzo: "9,00 €"
        },
        {
          nome: "Menu Tram Grande",
          descrizione: "Pizza Tegamino Maxi + Bibita a scelta (33cl) + Dessert + Gioco Dolce 🎁",
          prezzo: "12,00 €"
        }
      ]
    }

  ],

  // ══════════════════════════════════════════════════════════════
  //  ⭐ SEZIONE 12 — RECENSIONI
  //  Come aggiungere: aggiungi { nome, stelle, testo, data }
  //  stelle: numero da 1 a 5
  // ══════════════════════════════════════════════════════════════

  recensioni: [
    {
      nome: "Federica M.",
      stelle: 5,
      testo: "La farinata è un capolavoro! Croccante fuori, morbida dentro — non ne avevo mai mangiata così buona a Torino. La pizza al tegamino della Linea 15 con tartufo è da sogno. Ambiente caldo e accogliente, staff gentilissimo. Torneremo sicuramente!",
      data: "1 settimana fa"
    },
    {
      nome: "Giacomo P.",
      stelle: 5,
      testo: "Finalmente un posto che fa la vera farinata con ingredienti di qualità! Lo spillatore al tavolo è un'idea geniale — ci siamo fermati per un'ora a chiacchierare con la birra sempre fresca. Le pizze al mattone sono strepitose, in particolare la Linea 55 con 'nduja.",
      data: "2 settimane fa"
    },
    {
      nome: "Sara V.",
      stelle: 5,
      testo: "Posto bellissimo, atmosfera autentica che ricorda i vecchi tram torinesi. Il multipiatto è perfetto per chi come me non sa mai cosa scegliere! Farinata farcita con stracchino e crudo da leccarsi i baffi. Prezzi onestissimi per la qualità.",
      data: "3 settimane fa"
    }
  ]

}; // fine SITO

// ══════════════════════════════════════════════════════════════
//  ⚙️  MOTORE DEL SITO — NON MODIFICARE QUESTO BLOCCO
// ══════════════════════════════════════════════════════════════

(function initConfig() {
  document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('[data-config]').forEach(function (el) {
      var key = el.getAttribute('data-config');
      if (window.SITO[key] !== undefined) {
        el.textContent = window.SITO[key];
      }
    });

    document.querySelectorAll('[data-config-href]').forEach(function (el) {
      var tpl = el.getAttribute('data-config-href');
      el.href = tpl.replace(/\{(\w+)\}/g, function (_, k) {
        return window.SITO[k] !== undefined ? window.SITO[k] : '';
      });
    });

    document.querySelectorAll('[data-anno]').forEach(function (el) {
      el.textContent = window.SITO.annoCorrente;
    });

    window.loadConsentedMap = function () {
      var consent = localStorage.getItem('cookieConsent');
      var placeholder = document.getElementById('map-placeholder');
      var iframe = document.getElementById('map-iframe');
      if (consent === 'accepted') {
        if (iframe && !iframe.src) { iframe.src = window.SITO.mappaEmbed; }
        if (placeholder) { placeholder.style.display = 'none'; }
        if (iframe) { iframe.style.display = 'block'; }
      } else {
        if (placeholder) { placeholder.style.display = 'flex'; }
        if (iframe) { iframe.style.display = 'none'; }
      }
    };
    window.loadConsentedMap();

    var schemaEl = document.getElementById('schema-org');
    if (schemaEl) {
      var schema = {
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
        "url": "https://lafermata.it",
        "sameAs": [window.SITO.instagram]
      };
      schemaEl.textContent = JSON.stringify(schema, null, 2);
    }

    initMenu();
    initRecensioni();
    initInstagram();
  });
})();

function initMenu() {
  var grid = document.getElementById('menu-grid');
  if (!grid || !window.SITO.menu) return;

  var html = '';
  window.SITO.menu.forEach(function (cat) {
    html += '<div class="menu-category-card animate-on-scroll">';
    html += '<div class="menu-category-header">';
    html += '<h3 class="menu-category-title">' + (cat.emoji ? cat.emoji + ' ' : '') + cat.categoria + '</h3>';
    html += '<p class="menu-category-desc">' + cat.descrizioneCategoria + '</p>';
    html += '</div>';

    if (cat.tipo === 'pizza' && cat.pizze) {
      html += '<ul class="menu-pizza-list">';
      cat.pizze.forEach(function (pizza) {
        html += '<li class="menu-pizza-item menu-pizza-item--doppia">';
        html += '<div class="menu-pizza-info">';
        html += '<span class="menu-pizza-nome">' + pizza.nome + '</span>';
        html += '<span class="menu-pizza-ingredienti">' + pizza.ingredienti + '</span>';
        html += '</div>';
        html += '<div class="menu-pizza-prezzi">';
        html += '<span class="prezzo-badge prezzo-tegamino"><em>Tegamino</em>' + pizza.prezzoTegamino + '</span>';
        html += '<span class="prezzo-badge prezzo-mattone"><em>Mattone</em>' + pizza.prezzoMattone + '</span>';
        html += '</div>';
        html += '</li>';
      });
      html += '</ul>';
    }

    else if (cat.tipo === 'farinata') {
      html += '<div class="farinata-block">';
      html += '<div class="farinata-classica">';
      html += '<div class="farinata-classica-header"><span class="farinata-tipo-label">Farinata Classica</span></div>';
      html += '<div class="farinata-formati">';
      html += '<div class="farinata-formato"><span class="formato-nome">Porzione</span><span class="formato-prezzo">' + cat.prezziClassica.porzione + '</span></div>';
      html += '<div class="farinata-formato"><span class="formato-nome">Doppia</span><span class="formato-prezzo">' + cat.prezziClassica.doppia + '</span></div>';
      html += '<div class="farinata-formato"><span class="formato-nome">Teglia</span><span class="formato-prezzo">' + cat.prezziClassica.teglia + '</span></div>';
      html += '</div></div>';
      html += '<div class="farinata-farcite">';
      html += '<span class="farinata-tipo-label">Farinate Farcite</span>';
      html += '<ul class="farinata-list">';
      cat.farcite.forEach(function (v) {
        var cls = v.cottura === 'in cottura' ? 'cottura-in' : 'cottura-fuori';
        html += '<li class="farinata-item">';
        html += '<div class="farinata-item-info">';
        html += '<span class="farinata-item-nome">' + v.nome + '</span>';
        html += '<span class="cottura-badge ' + cls + '">' + v.cottura + '</span>';
        html += '</div>';
        html += '<span class="farinata-item-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul></div></div>';
    }

    else if (cat.tipo === 'focacce' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info">';
        html += '<span class="menu-pizza-nome">' + v.nome + '</span>';
        html += '<span class="menu-pizza-ingredienti">' + v.ingredienti + '</span>';
        html += '</div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    else if (cat.tipo === 'multipiatto') {
      html += '<div class="multipiatto-block">';
      html += '<div class="multipiatto-prezzo-box">';
      html += '<span class="multipiatto-prezzo">' + cat.prezzoBase + '</span>';
      html += '<span class="multipiatto-note">a persona · ' + cat.noteMultipiatto + '</span>';
      html += '</div>';
      html += '<div class="multipiatto-cols">';
      html += '<div class="multipiatto-col"><strong>Le basi</strong><ul>';
      cat.basi.forEach(function(b) { html += '<li>' + b + '</li>'; });
      html += '</ul></div>';
      html += '<div class="multipiatto-col"><strong>Ingredienti a scelta (3 inclusi)</strong><ul>';
      cat.ingredienti.forEach(function(i) { html += '<li>' + i + '</li>'; });
      html += '</ul></div>';
      html += '</div></div>';
    }

    else if (cat.tipo === 'birra' && cat.voci) {
      html += '<div class="birra-grid">';
      cat.voci.forEach(function (v) {
        html += '<div class="birra-card">';
        html += '<span class="birra-litri">' + v.litri + '</span>';
        html += '<span class="birra-prezzo">' + v.prezzo + '</span>';
        html += '</div>';
      });
      html += '</div>';
    }

    else if (cat.tipo === 'bimbi' && cat.voci) {
      html += '<ul class="menu-pizza-list">';
      cat.voci.forEach(function (v) {
        html += '<li class="menu-pizza-item">';
        html += '<div class="menu-pizza-info">';
        html += '<span class="menu-pizza-nome">' + v.nome + '</span>';
        html += '<span class="menu-pizza-ingredienti">' + v.descrizione + '</span>';
        html += '</div>';
        html += '<span class="menu-pizza-prezzo">' + v.prezzo + '</span>';
        html += '</li>';
      });
      html += '</ul>';
    }

    html += '</div>';
  });

  grid.innerHTML = html;
  setTimeout(function () {
    document.querySelectorAll('#menu-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);
}

function initRecensioni() {
  var grid = document.getElementById('recensioni-grid');
  if (!grid || !window.SITO.recensioni) return;

  var html = '';
  window.SITO.recensioni.forEach(function (rec) {
    var stelle = '';
    for (var i = 0; i < 5; i++) {
      stelle += i < rec.stelle ? '<span class="star filled">★</span>' : '<span class="star">★</span>';
    }
    var iniziale = rec.nome.charAt(0).toUpperCase();
    html += '<div class="recensione-card animate-on-scroll">';
    html += '<div class="recensione-header">';
    html += '<div class="recensione-avatar">' + iniziale + '</div>';
    html += '<div class="recensione-meta">';
    html += '<span class="recensione-nome">' + rec.nome + '</span>';
    html += '<span class="recensione-data">' + rec.data + '</span>';
    html += '</div>';
    html += '<div class="google-icon">G</div>';
    html += '</div>';
    html += '<div class="recensione-stelle">' + stelle + '</div>';
    html += '<p class="recensione-testo">' + rec.testo + '</p>';
    html += '</div>';
  });

  grid.innerHTML = html;
  setTimeout(function () {
    document.querySelectorAll('#recensioni-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 150);
}

function initInstagram() {
  var grid = document.getElementById('instagram-grid');
  if (!grid || !window.SITO.instagramImages || !window.SITO.instagramImages.length) return;

  var instagramUrl = window.SITO.instagram || '#';

  function safeUrl(url) {
    if (typeof url !== 'string') return '';
    var trimmed = url.trim();
    return /^https?:\/\//i.test(trimmed) ? trimmed : '';
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
    document.querySelectorAll('#instagram-grid .animate-on-scroll').forEach(function (el) {
      el.classList.add('visible');
    });
  }, 100);
}
