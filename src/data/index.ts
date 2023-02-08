import img1 from "../assets/img/1.jpg";
import img2 from "../assets/img/2.jpg";
import img3 from "../assets/img/3.jpg";
import img4 from "../assets/img/4.jpg";
import image1 from "../assets/img/project-photos/1.jpg";
import image2 from "../assets/img/project-photos/2.jpg";
import image3 from "../assets/img/project-photos/3.jpg";
import image4 from "../assets/img/project-photos/4.jpg";
import image5 from "../assets/img/project-photos/5.jpg";
import image6 from "../assets/img/project-photos/6.jpg";
import image7 from "../assets/img/project-photos/7.jpg";
import image8 from "../assets/img/project-photos/8.jpg";
import image9 from "../assets/img/project-photos/9.jpg";

export const route = [
  {
    id: 1,
    img: img1,
    text: "Photo folio",
    link: "Photo-folio",
  },
  {
    id: 2,
    img: img2,
    text: "Maccė Studio",
    link: "Maccė-Studio",
  },
  {
    id: 3,
    img: img3,
    text: "Victoria-Labalme.",
    link: "Victoria-Labalme",
  },
  {
    id: 4,
    img: img4,
    text: "Komono",
    link: "Komono",
  },
];

export const data = [
  {
    id: "Photo-folio",
    title: "Photo folio",
    link: "/",
    discription:
      "Passionné de Photo depuis des années, je me suis créé cette année un portfolio où je mets en avant mes clichés. De mes Pyrénées natales jusqu'en Nouvelle-Zélande, j'ai photographié les plus beaux paysages que j'ai eu la chance de contempler.",
    websiteName: "ANNÉE",
    year: "2020",
    role: ["UX/UI Design", "Front-end Développement"],
    images: [image1, image2, image3],
  },
  {
    id: "Maccė-Studio",
    title: "Maccė Studio",
    link: "/",
    discription:
      "Macce Studio est un studio de création de contenu créé en 2020 par la pétillante Eline Mara. Passionnée par l'art, le graphisme et la photo, elle met sa créativité au service des marques. Son univers singulier donnera une personnalité à votre communication.",
    websiteName: "ANNÉE",
    year: "2020",
    role: ["UX/UI Design", "Front-end Développement"],
    images: [image4, image5, image6],
  },
  {
    id: "Victoria-Labalme",
    title: "Victoria Labalme",
    link: "/",
    discription:
      "Victoria est étudiante en Master Design Graphique et Design d'Interaction. Elle m'a demandé de lui intégrer son portfolio pour mettre en avant ses créations. Découvrez son univers et ses projets sur son Behance.",
    websiteName: "ANNÉE",
    year: "2020",
    role: ["Front-end Développement"],
    images: [image7, image8],
  },
  {
    id: "Komono",
    title: "Komono",
    link: "/",
    discription:
      "Komono est une marque belge de montres et de lunettes à l'univers coloré et minimaliste. Cette landing page de produit et ma réponse au projet du même nom que j'ai du compléter pendant ma formation chez FreeCodeCamp.org.",
    websiteName: "ANNÉE",
    year: "2020",
    role: ["UX/UI Design", "Front-end Développement"],
    images: [image9],
  },
];
