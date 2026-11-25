/** Datos que no cambian según el idioma. Los textos están en /dictionaries. */

export const artistName = "Silvina Paola";

export const sectionIds = [
  "inicio",
  "sobre-mi",
  "trayectoria",
  "musica",
  "proyeccion",
  "contacto",
] as const;
export type SectionId = (typeof sectionIds)[number];

export const navItems = [
  { id: "sobre-mi", key: "about" },
  { id: "trayectoria", key: "trajectory" },
  { id: "musica", key: "music" },
  { id: "contacto", key: "contact" },
] as const;

export const images = {
  hero: "/images/portada/hero.png",
  og: "/images/portada/og.jpg",
  portrait: "/images/sobre-mi/retrato.png",
  epCover: "/images/musica/ep-sentir-asi-portada.jpg",
  projection: "/images/contacto/proyeccion.jpg",
  contact: "/images/contacto/contacto.jpg",
} as const;

export const links = {
  email: "silvinapaolamusic@gmail.com",
  instagram: "https://www.instagram.com/silvinapaolamusic",
  instagramHandle: "@silvinapaolamusic",
  youtube: "https://youtube.com/@silvinatorcigliani7675",
  youtubeHandle: "@silvinatorcigliani7675",
  epk: "/epk/Silvina_Paola_EPK_2026.pdf",
  playlist:
    "https://youtube.com/playlist?list=OLAK5uy_kNHmcGQNVvY_MaEia7xJtB7xt3rC75nJ0",
  photoSession: "https://photos.app.goo.gl/LKDFWuaaK2gdc3GD6",
} as const;

export const projects = [
  {
    id: "misty-soul-choir",
    name: "Misty Soul Choir",
    photo: "/images/trayectoria/misty-soul-choir.jpg",
    href: "#misty-soul-choir",
  },
  {
    id: "ep-sentir-asi",
    name: "EP · Sentir así",
    photo: "/images/trayectoria/ep-sentir-asi.jpg",
    href: "#musica",
  },
  {
    id: "marina-gonzalez",
    name: "Marina González",
    photo: "/images/trayectoria/marina-gonzalez.jpg",
    href: "#marina-gonzalez",
  },
  {
    id: "rhythm-gamblers",
    name: "The Rhythm Gamblers",
    photo: "/images/trayectoria/rhythm-gamblers.jpg",
    href: "#rhythm-gamblers",
  },
] as const;

/** `title` solo en nombres propios; si falta, el título sale del diccionario. */
export type MediaRecord = { id: string; url: string; title?: string };

export const experiences = [
  {
    id: "misty-soul-choir",
    name: "Misty Soul Choir",
    photos: [
      { key: "misty1", src: "/images/trayectoria/misty-1.jpg" },
      { key: "misty2", src: "/images/trayectoria/misty-2.jpg" },
    ],
    records: [
      {
        id: "standByMe",
        title: "Stand by me",
        url: "https://drive.google.com/file/d/1ZTZJZ3AuaSGn4EW6t_GpcsOO7ddiX6I1/view",
      },
      {
        id: "backToBlack",
        title: "Back to Black",
        url: "https://drive.google.com/file/d/12dVAzz7rgE-us_U-ESR5-1m8UZu-_-LW/view",
      },
    ],
  },
  {
    id: "rhythm-gamblers",
    name: "The Rhythm Gamblers",
    photos: [
      { key: "gamblers1", src: "/images/trayectoria/gamblers-1.jpg" },
      { key: "gamblers2", src: "/images/trayectoria/gamblers-2.jpg" },
    ],
    records: [
      {
        id: "sway",
        title: "Sway",
        url: "https://drive.google.com/file/d/1FldnbXZ06HrCz_O3Da6jMonEjSiaAUxC/view",
      },
      {
        id: "sanPedroLive",
        url: "https://drive.google.com/file/d/1UXeIQlUHAdDtpo1kwkr3od1f-umRdD64/view",
      },
    ],
  },
  {
    id: "marina-gonzalez",
    name: "Marina González",
    photos: [
      {
        key: "marinaCosquin",
        src: "/images/trayectoria/marina-gonzalez-cosquin.jpg",
      },
    ],
    records: [
      { id: "cosquin", url: "https://youtu.be/ZKTaKYd5Xcc" },
      { id: "balnearia", url: "https://youtu.be/mNnUvbLC-iU?t=286" },
    ],
  },
] as const;

export const songs = [
  { id: "fG9Gw5694CY", title: "Sentir así" },
  { id: "x8GB1iIuE2w", title: "Nuevo amanecer" },
  { id: "gHW1a931OZE", title: "Errores" },
  { id: "J4blu_znbmc", title: "La sombra" },
  { id: "iqePvHAL7Ng", title: "Mi lugar" },
] as const;

export const musicRecords: readonly MediaRecord[] = [
  { id: "miLugarAcoustic", url: "https://youtu.be/dUsb-EbH05k" },
  { id: "nuevoAmanecerAcoustic", url: "https://youtu.be/a61ypnoQOio?t=112" },
];

export const videoclips = [
  {
    id: "sara",
    title: "Sarà perché ti amo",
    photo: "/images/musica/sara-perche-ti-amo.jpg",
    videoId: "QN7f01EaAf4",
  },
  {
    id: "velha",
    title: "Velha Infância",
    photo: "/images/musica/velha-infancia.jpg",
    videoId: "oRcBIHvDzUM",
  },
] as const;
