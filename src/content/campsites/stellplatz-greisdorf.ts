import type { CampsiteConfig } from "../types";

/**
 * Stellplatz Greisdorf — kleiner, privat errichteter Wohnmobil-Stellplatz für bis zu
 * zehn Mobile in Greisdorf bei St. Stefan ob Stainz, Tourismusregion Reinischkogel
 * (Weststeiermark). Selbstbedienung per Kuvert-Kassa. Quelle: stellplatz-greisdorf.at.
 * Alle Inhalte aus raw/digest abgeleitet; Bilder provenienzgebunden, je einmal verwendet.
 */
const IMG = "/campsites/stellplatz-greisdorf";

const stellplatzGreisdorf: CampsiteConfig = {
  name: "Stellplatz Greisdorf",
  shortName: "Greisdorf",
  slug: "stellplatz-greisdorf",
  ort: "St. Stefan ob Stainz",
  region: "Steiermark",
  brandKind: "Wohnmobil-Stellplatz",
  regionLong: "Tourismusregion Reinischkogel · Schilcherland · Steiermark",

  heroVariant: "center",

  claim: "Dein Stellplatz in der Region Reinischkogel",
  claimEmphasis: "Region Reinischkogel",
  emailDetail: "euer kleiner Platz für gerade einmal zehn Mobile",
  intro:
    "Hier stellst du dein Mobil auf einen privat errichteten Platz für höchstens zehn Fahrzeuge — Frischwasser, Strom, Grauwasser- und Kassettenentsorgung inklusive, ruhig gelegen in der Tourismusregion Reinischkogel.",

  statement: {
    text: "Du schreibst Datum und Kennzeichen auf ein Kuvert, wirfst die Gebühr in die Kassa — Vertrauen statt Schranke.",
    emphasis: "Vertrauen statt Schranke",
  },

  pillars: [
    {
      title: "Platz für zehn Mobile",
      text: "Höchstens zehn Fahrzeuge teilen sich den gepflegten Schotterplatz — privat errichtet, ohne den Trubel großer Anlagen.",
      image: { src: `${IMG}/amenity-dcc3c3318f.webp`, alt: "Eingang und Schotterfläche von Stellplatz Greisdorf" },
    },
    {
      title: "Bezahlen per Kuvert-Kassa",
      text: "Datum und Kennzeichen auf ein Kuvert, 15 Euro einlegen und in die rote Kassa werfen — kein Personal, nur Vertrauen.",
      image: { src: `${IMG}/amenity-69d8a6051e.webp`, alt: "Willkommens-Infotafel mit Preisliste und roter Kuvert-Kassa am Stellplatz Greisdorf" },
    },
    {
      title: "Mitten in der Region Reinischkogel",
      text: "Du übernachtest in der grünen Tourismusregion Reinischkogel — ruhig, bewaldet und nah an den Genusswegen des Schilcherlandes.",
      image: { src: `${IMG}/amenity-98b3d311af.webp`, alt: "Blick in die bewaldete Landschaft rund um den Stellplatz" },
    },
  ],

  usps: [
    "Platz für 10 Mobile",
    "Frischwasser",
    "Strom mit 10 A",
    "Grauwasserentsorgung",
    "WC-Kassettenentleerung",
  ],

  trust: {
    heading: "Warum Greisdorf ein guter Halt ist",
    headingEmphasis: "guter Halt",
    intro:
      "Karl Weidhofer hat den Stellplatz selbst errichtet und betreut ihn persönlich. Keine Schranke, kein Personal — dafür ein sauberer, ehrlicher Platz, den du so verlässt, wie du ihn gern vorfindest.",
  },

  awards: [],

  saison: { von: "Palmsonntag", bis: "Allerseelen" },

  hero: {
    aerial: { src: `${IMG}/amenity-7aca1743bd.webp`, alt: "Wohnmobile auf dem Stellplatz Greisdorf vor herbstlichem Wald" },
  },

  camping: {
    heading: "Alles zum Ver- und Entsorgen",
    intro:
      "Die münzbetriebene Stromsäule steht direkt am Platz — für einen Euro bekommst du zwei Kilowattstunden. Frischwasser, Grauwasser- und Kassettenentsorgung sind in der Stellplatzgebühr enthalten.",
    features: [
      {
        title: "Stromsäule mit 10 A",
        text: "Eine münzbetriebene Säule versorgt dein Mobil — für einen Euro gibt es zwei Kilowattstunden, abgesichert mit 10 Ampere.",
        image: { src: `${IMG}/amenity-cb7dea394c.webp`, alt: "Münzbetriebene Stromsäule am Stellplatz Greisdorf" },
      },
    ],
  },

  anreise: {
    heading: "Anfahrt nach Greisdorf",
    modes: [
      {
        title: "Mit dem Auto",
        text: "Über die A2 Süd-Autobahn bis zur Abfahrt Mooskirchen oder Lannach, dann der B76 Richtung Stainz folgen und weiter nach Greisdorf — von Graz aus rund 40 Minuten.",
      },
      {
        title: "Navigation",
        text: "Gib „Greisdorf 160, 8511 Greisdorf“ ins Navi ein; die Koordinaten N 46° 55′ 39″ O 15° 12′ 54″ führen dich direkt auf den Platz.",
      },
    ],
  },

  galerie: {
    heading: "Ein Platz, der auf Vertrauen baut",
    headingEmphasis: "Vertrauen",
    intro:
      "Entsorgung für chemische Toiletten und eine Kassa zum Selbstzahlen — ein paar ehrliche Eindrücke vom Stellplatz Greisdorf.",
    tag: "Selbstbedienung am Platz",
    images: [],
  },

  booking: {
    heading: "Zehn Plätze, ein fairer Preis",
    headingEmphasis: "fairer Preis",
    intro:
      "Du zahlst direkt am Platz in die Kassa — oder schreibst Karl Weidhofer vorab, wenn du dir deinen Stellplatz sichern möchtest.",
    categories: [
      { id: "stellplatz", label: "Wohnmobil-Stellplatz", perNight: 15 },
    ],
    pricesArePlaceholder: false,
    priceNote: "€ 15 pro Nacht inkl. Ver- und Entsorgung · Strom extra: € 0,50 je kWh",
    highlight: {
      title: "Im Preis enthalten",
      text: "Grauwasser- und Toilettenentsorgung, Frischwasser und Müllabgabe in geringen Mengen sind in den 15 Euro bereits dabei.",
    },
  },

  kontakt: {
    tel: "+43 680 3 11 57 60",
    telHref: "tel:+436803115760",
    mail: "karl.weidhofer@gmx.at",
    adresse: "Greisdorf 160 · 8511 Greisdorf · Steiermark",
    coords: { lat: 46.927602, lng: 15.215899 },
  },

  languages: ["DE"],

  nav: [
    { label: "Versorgung", href: "#camping" },
    { label: "Preise", href: "#booking" },
    { label: "Anreise", href: "#anreise" },
  ],
};

export default stellplatzGreisdorf;
