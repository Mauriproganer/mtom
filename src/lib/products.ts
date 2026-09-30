import facial1 from "@/assets/facial-1.jpg";
import facial2 from "@/assets/facial-2.jpg";
import facial3 from "@/assets/facial-3.jpg";
import facial4 from "@/assets/facial-4.jpg";
import facial5 from "@/assets/facial-5.jpg";
import facial6 from "@/assets/facial-6.jpg";
import facial7 from "@/assets/facial-7.jpg";
import facial8 from "@/assets/facial-8.jpg";
import facial9 from "@/assets/facial-9.jpg";
import facial10 from "@/assets/facial-10.jpg";
import pelo1 from "@/assets/pelo-1.jpg";
import pelo2 from "@/assets/pelo-2.jpg";
import pelo3 from "@/assets/pelo-3.jpg";
import pelo4 from "@/assets/pelo-4.jpg";
import pelo5 from "@/assets/pelo-5.jpg";
import pelo6 from "@/assets/pelo-6.jpg";
import pelo7 from "@/assets/pelo-7.jpg";
import pelo8 from "@/assets/pelo-8.jpg";
import pelo9 from "@/assets/pelo-9.jpg";
import pelo10 from "@/assets/pelo-10.jpg";
import piel1 from "@/assets/piel-1.jpg";
import piel2 from "@/assets/piel-2.jpg";
import piel3 from "@/assets/piel-3.jpg";
import piel4 from "@/assets/piel-4.jpg";
import piel5 from "@/assets/piel-5.jpg";
import piel6 from "@/assets/piel-6.jpg";
import piel7 from "@/assets/piel-7.jpg";
import piel8 from "@/assets/piel-8.jpg";
import piel9 from "@/assets/piel-9.jpg";
import piel10 from "@/assets/piel-10.jpg";
import corporal1 from "@/assets/corporal-1.jpg";
import corporal2 from "@/assets/corporal-2.jpg";
import corporal3 from "@/assets/corporal-3.jpg";
import corporal4 from "@/assets/corporal-4.jpg";
import corporal5 from "@/assets/corporal-5.jpg";
import corporal6 from "@/assets/corporal-6.jpg";
import corporal7 from "@/assets/corporal-7.jpg";
import corporal8 from "@/assets/corporal-8.jpg";
import corporal9 from "@/assets/corporal-9.jpg";
import corporal10 from "@/assets/corporal-10.jpg";
import dental1 from "@/assets/dental-1.jpg";
import dental2 from "@/assets/dental-2.jpg";
import dental3 from "@/assets/dental-3.jpg";
import dental4 from "@/assets/dental-4.jpg";
import dental5 from "@/assets/dental-5.jpg";
import dental6 from "@/assets/dental-6.jpg";
import dental7 from "@/assets/dental-7.jpg";
import dental8 from "@/assets/dental-8.jpg";
import dental9 from "@/assets/dental-9.jpg";
import dental10 from "@/assets/dental-10.jpg";

export interface Product {
  name: string;
  description: string;
  price: string;
  image: string;
}

export interface Section {
  id: string;
  nav: string;
  title: string;
  number: string;
  products: Product[];
}

export const sections: Section[] = [
  {
    id: "facial",
    nav: "Facial",
    title: "Ritual Facial",
    number: "01 / 04",
    products: [
      {
        name: "Oli de Figa de Moro",
        description: "Regeneració profunda amb antioxidants naturals del sud.",
        price: "85,00€",
        image: facial1,
      },
      {
        name: "Crema d'Alga Vermella",
        description: "Hidratació marina de 24 hores per a pells sensibles.",
        price: "62,00€",
        image: facial2,
      },
      {
        name: "Tònic de Neroli",
        description: "Bruma refrescant amb destil·lat pur de flor de taronger.",
        price: "42,00€",
        image: facial3,
      },
      {
        name: "Netejador d'Argila",
        description: "Purifica sense ressecar mitjançant argiles volcàniques.",
        price: "38,00€",
        image: facial4,
      },
      {
        name: "Sèrum Lluminositat",
        description: "Vitamina C estabilitzada amb extracte de magrana.",
        price: "94,00€",
        image: facial5,
      },
      {
        name: "Contorn d'Ulls",
        description: "Efecte lífting immediat amb pèptids de seda.",
        price: "76,00€",
        image: facial6,
      },
      {
        name: "Mascareta de Nit",
        description: "Tractament intensiu de reparació nocturna.",
        price: "88,00€",
        image: facial7,
      },
      {
        name: "CeraVe Loció Hidratant Facial",
        description: "Hidratació lleugera de 24 hores amb ceramides per a l'ús diari.",
        price: "15,90€",
        image: facial8, // ← CANVIA LA IMATGE: src/assets/facial-8.jpg
      },
      {
        name: "The Ordinary Niacinamida 10%",
        description: "Sèrum amb niacinamida i zinc per unificar el to i reduir imperfeccions.",
        price: "7,50€",
        image: facial9, // ← CANVIA LA IMATGE: src/assets/facial-9.jpg
      },
      {
        name: "Garnier Vitamina C Sèrum SPF 25",
        description: "Sèrum amb vitamina C i protecció solar SPF 25 per il·luminar el rostre.",
        price: "14,95€",
        image: facial10, // ← CANVIA LA IMATGE: src/assets/facial-10.jpg
      },
    ],
  },
  {
    id: "pelo",
    nav: "Cabell",
    title: "Cura Capil·lar",
    number: "02 / 04",
    products: [
      {
        name: "Xampú de Romaní",
        description: "Estimula el creixement amb olis essencials purs.",
        price: "32,00€",
        image: pelo1,
      },
      {
        name: "Condicionador de Karité",
        description: "Nutrició extrema per a puntes danyades.",
        price: "34,00€",
        image: pelo2,
      },
      {
        name: "Oli d'Argània",
        description: "Brillantor mirall sense apelmassar el cabell.",
        price: "45,00€",
        image: pelo3,
      },
      {
        name: "Bruma Capil·lar",
        description: "Fragància de figa i sol per al cabell.",
        price: "28,00€",
        image: pelo4,
      },
      {
        name: "Mascareta de Fang",
        description: "Detox capil·lar amb minerals de la costa.",
        price: "48,00€",
        image: pelo5,
      },
      {
        name: "Sèrum Anticaiguda",
        description: "Tractament intensiu amb cafeïna verda.",
        price: "54,00€",
        image: pelo6,
      },
      {
        name: "Exfoliant de Sal Marina",
        description: "Neteja profunda del cuir cabellut.",
        price: "39,00€",
        image: pelo7,
      },
      {
        name: "Pantene Xampú Repara i Protegeix",
        description: "Neteja suaument i repara el cabell danyat, deixant-lo fort i brillant.",
        price: "5,50€",
        image: pelo8, // ← CANVIA LA IMATGE: src/assets/pelo-8.jpg
      },
      {
        name: "L'Oréal Elvive Tractament Reparador",
        description: "Tractament capil·lar que reforça la fibra i aporta brillantor al cabell.",
        price: "8,95€",
        image: pelo9, // ← CANVIA LA IMATGE: src/assets/pelo-9.jpg
      },
      {
        name: "Garnier Fructis Hair Bomb Proteïna Mascareta",
        description: "Mascareta nutritiva amb proteïnes vegetals per a un cabell fort i suau.",
        price: "6,95€",
        image: pelo10, // ← CANVIA LA IMATGE: src/assets/pelo-10.jpg
      },
    ],
  },
  {
    id: "piel",
    nav: "Pell",
    title: "Tractaments de Pell",
    number: "03 / 04",
    products: [
      {
        name: "Bàlsam Relaxant",
        description: "Lavanda i calèndula per a pells irritades.",
        price: "52,00€",
        image: piel1,
      },
      {
        name: "Elixir de Sol",
        description: "Oli amb partícules d'or per a una brillantor eterna.",
        price: "68,00€",
        image: piel2,
      },
      {
        name: "Crema de Mans",
        description: "Mantega de llimona i ametlla dolça.",
        price: "24,00€",
        image: piel3,
      },
      {
        name: "Esprai Mineral",
        description: "Aigua termal enriquida amb magnesi.",
        price: "21,00€",
        image: piel4,
      },
      {
        name: "Gel d'Àloe Pur",
        description: "Calma immediata post-exposició solar.",
        price: "35,00€",
        image: piel5,
      },
      {
        name: "Protector Urbà",
        description: "Escut invisible contra la pol·lució. SPF 50.",
        price: "58,00€",
        image: piel6,
      },
      {
        name: "Concentrat Reafirmant",
        description: "Ampolles d'efecte tensor immediat.",
        price: "72,00€",
        image: piel7,
      },
      {
        name: "Nivea Body Milk Nutritiu",
        description: "Llet corporal amb oli d'ametlla per a una hidratació intensa i duradora.",
        price: "6,50€",
        image: piel8, // ← CANVIA LA IMATGE: src/assets/piel-8.jpg
      },
      {
        name: "Dove Loció Corporal Hidratant",
        description: "Loció lleugera de tacte suau que hidrata sense deixar sensació greixosa.",
        price: "5,50€",
        image: piel9, // ← CANVIA LA IMATGE: src/assets/piel-9.jpg
      },
      {
        name: "Vaseline Advanced Repair Loció Corporal",
        description: "Loció reparadora per a pell seca, amb hidratació intensiva.",
        price: "5,95€",
        image: piel10, // ← CANVIA LA IMATGE: src/assets/piel-10.jpg
      },
    ],
  },
  {
    id: "corporal",
    nav: "Corporal",
    title: "Cura Corporal",
    number: "04 / 04",
    products: [
      {
        name: "Mantega Mediterrània",
        description: "Textura untuosa amb aroma de gessamí silvestre.",
        price: "46,00€",
        image: corporal1,
      },
      {
        name: "Exfoliant d'Oliva",
        description: "Pinyol d'oliva triturat per a una pell de seda.",
        price: "38,00€",
        image: corporal2,
      },
      {
        name: "Oli Reafirmant",
        description: "Drenant amb extracte d'heura i xiprer.",
        price: "55,00€",
        image: corporal3,
      },
      {
        name: "Gel de Bany Botànic",
        description: "Neteja suau sense sulfats, pH neutre.",
        price: "29,00€",
        image: corporal4,
      },
      {
        name: "Crema de Coll",
        description: "Específica per a l'escot, amb elastina.",
        price: "64,00€",
        image: corporal5,
      },
      {
        name: "Desodorant de Pedra",
        description: "Efectivitat natural amb alum i sàlvia.",
        price: "18,00€",
        image: corporal6,
      },
      {
        name: "Llet Corporal",
        description: "Absorció ràpida amb aigua de roses.",
        price: "42,00€",
        image: corporal7,
      },
      {
        name: "Dove Gel de Dutxa Nutritiu",
        description: "Neteja suau amb un quart d'hidratant per a una pell més suau.",
        price: "4,50€",
        image: corporal8, // ← CANVIA LA IMATGE: src/assets/corporal-8.jpg
      },
      {
        name: "Dehesia Llet Corporal Natural",
        description: "Llet corporal natural amb extractes botànics que nodreixen la pell.",
        price: "5,95€",
        image: corporal9, // ← CANVIA LA IMATGE: src/assets/corporal-9.jpg
      },
      {
        name: "Deliplus Loció Corporal Àloe",
        description: "Hidratació diària amb àloe vera, de textura fresca i lleugera.",
        price: "3,50€",
        image: corporal10, // ← CANVIA LA IMATGE: src/assets/corporal-10.jpg
      },
    ],
  },
  {
    id: "dental",
    nav: "Dental",
    title: "Somriure Mediterrani",
    number: "05 / 05",
    products: [
      {
        name: "Pasta Blanquejadora",
        description: "Blanqueig natural amb enzims de papaia.",
        price: "16,00€",
        image: dental1,
      },
      {
        name: "Col·lutori de Sàlvia",
        description: "Alè fresc amb olis essencials botànics.",
        price: "19,00€",
        image: dental2,
      },
      {
        name: "Raspall de Bambú",
        description: "Filaments suaus i mànec biodegradable.",
        price: "9,00€",
        image: dental3,
      },
      {
        name: "Tires Blanquejadores",
        description: "Somriure lluminós en 14 dies, sense sensibilitat.",
        price: "34,00€",
        image: dental4,
      },
      {
        name: "Fil Dental de Menta",
        description: "Seda natural encerada amb cera de candel·lil·la.",
        price: "8,00€",
        image: dental5,
      },
      {
        name: "Sèrum de Genives",
        description: "Cura intensiva amb neem i àcid hialurònic.",
        price: "27,00€",
        image: dental6,
      },
      {
        name: "Pols de Carbó",
        description: "Neteja profunda amb carbó actiu de coco.",
        price: "14,00€",
        image: dental7,
      },
      {
        name: "Oral-B Pro-Expert Pasta Dental",
        description: "Protecció professional diària amb fluorur per a unes dents fortes.",
        price: "4,95€",
        image: dental8, // ← CANVIA LA IMATGE: src/assets/dental-8.jpg
      },
      {
        name: "Colgate Advanced White Pasta Dental",
        description: "Pasta blanquejadora que elimina les taques superficials.",
        price: "3,95€",
        image: dental9, // ← CANVIA LA IMATGE: src/assets/dental-9.jpg
      },
      {
        name: "Listerine Col·lutori",
        description: "Col·lutori antisèptic que elimina gèrmens i deixa un alè fresc.",
        price: "6,50€",
        image: dental10, // ← CANVIA LA IMATGE: src/assets/dental-10.jpg
      },
    ],
  },
];
