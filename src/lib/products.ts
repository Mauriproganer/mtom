import facial1 from "@/assets/facial-1.jpg";
import facial2 from "@/assets/facial-2.jpg";
import facial3 from "@/assets/facial-3.jpg";
import facial4 from "@/assets/facial-4.jpg";
import facial5 from "@/assets/facial-5.jpg";
import facial6 from "@/assets/facial-6.jpg";
import facial7 from "@/assets/facial-7.jpg";
import pelo1 from "@/assets/pelo-1.jpg";
import pelo2 from "@/assets/pelo-2.jpg";
import pelo3 from "@/assets/pelo-3.jpg";
import pelo4 from "@/assets/pelo-4.jpg";
import pelo5 from "@/assets/pelo-5.jpg";
import pelo6 from "@/assets/pelo-6.jpg";
import pelo7 from "@/assets/pelo-7.jpg";
import piel1 from "@/assets/piel-1.jpg";
import piel2 from "@/assets/piel-2.jpg";
import piel3 from "@/assets/piel-3.jpg";
import piel4 from "@/assets/piel-4.jpg";
import piel5 from "@/assets/piel-5.jpg";
import piel6 from "@/assets/piel-6.jpg";
import piel7 from "@/assets/piel-7.jpg";
import corporal1 from "@/assets/corporal-1.jpg";
import corporal2 from "@/assets/corporal-2.jpg";
import corporal3 from "@/assets/corporal-3.jpg";
import corporal4 from "@/assets/corporal-4.jpg";
import corporal5 from "@/assets/corporal-5.jpg";
import corporal6 from "@/assets/corporal-6.jpg";
import corporal7 from "@/assets/corporal-7.jpg";
import dental1 from "@/assets/dental-1.jpg";
import dental2 from "@/assets/dental-2.jpg";
import dental3 from "@/assets/dental-3.jpg";
import dental4 from "@/assets/dental-4.jpg";
import dental5 from "@/assets/dental-5.jpg";
import dental6 from "@/assets/dental-6.jpg";
import dental7 from "@/assets/dental-7.jpg";

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
        name: "Óleo de Higo Chumbo",
        description: "Regeneración profunda con antioxidantes naturales del sur.",
        price: "85,00€",
        image: facial1,
      },
      {
        name: "Crema Alga Roja",
        description: "Hidratación marina de 24 horas para pieles sensibles.",
        price: "62,00€",
        image: facial2,
      },
      {
        name: "Tónico Neroli",
        description: "Bruma refrescante con destilado puro de azahar.",
        price: "42,00€",
        image: facial3,
      },
      {
        name: "Limpiador de Arcilla",
        description: "Purifica sin resecar mediante arcillas volcánicas.",
        price: "38,00€",
        image: facial4,
      },
      {
        name: "Sérum Luminosidad",
        description: "Vitamina C estabilizada con extracto de granada.",
        price: "94,00€",
        image: facial5,
      },
      {
        name: "Contorno de Ojos",
        description: "Efecto lifting inmediato con péptidos de seda.",
        price: "76,00€",
        image: facial6,
      },
      {
        name: "Mascarilla de Noche",
        description: "Tratamiento intensivo de reparación nocturna.",
        price: "88,00€",
        image: facial7,
      },
    ],
  },
  {
    id: "pelo",
    nav: "Pelo",
    title: "Cuidado Capilar",
    number: "02 / 04",
    products: [
      {
        name: "Champú de Romero",
        description: "Estimula el crecimiento con aceites esenciales puros.",
        price: "32,00€",
        image: pelo1,
      },
      {
        name: "Acondicionador de Karité",
        description: "Nutrición extrema para puntas dañadas.",
        price: "34,00€",
        image: pelo2,
      },
      {
        name: "Aceite de Argán",
        description: "Brillo espejo sin apelmazar el cabello.",
        price: "45,00€",
        image: pelo3,
      },
      {
        name: "Bruma Capilar",
        description: "Fragancia de higo y sol para el cabello.",
        price: "28,00€",
        image: pelo4,
      },
      {
        name: "Mascarilla de Barro",
        description: "Detox capilar con minerales de la costa.",
        price: "48,00€",
        image: pelo5,
      },
      {
        name: "Sérum Anticaída",
        description: "Tratamiento intensivo con cafeína verde.",
        price: "54,00€",
        image: pelo6,
      },
      {
        name: "Exfoliante Sal Marina",
        description: "Limpieza profunda del cuero cabelludo.",
        price: "39,00€",
        image: pelo7,
      },
    ],
  },
  {
    id: "piel",
    nav: "Piel",
    title: "Tratamientos de Piel",
    number: "03 / 04",
    products: [
      {
        name: "Bálsamo Relajante",
        description: "Lavanda y caléndula para pieles irritadas.",
        price: "52,00€",
        image: piel1,
      },
      {
        name: "Elixir de Sol",
        description: "Aceite con partículas de oro para un brillo eterno.",
        price: "68,00€",
        image: piel2,
      },
      {
        name: "Crema de Manos",
        description: "Manteca de limón y almendra dulce.",
        price: "24,00€",
        image: piel3,
      },
      {
        name: "Spray Mineral",
        description: "Agua termal enriquecida con magnesio.",
        price: "21,00€",
        image: piel4,
      },
      {
        name: "Gel de Aloe Puro",
        description: "Calma inmediata post-exposición solar.",
        price: "35,00€",
        image: piel5,
      },
      {
        name: "Protector Urbano",
        description: "Escudo invisible contra la polución. SPF 50.",
        price: "58,00€",
        image: piel6,
      },
      {
        name: "Concentrado Reafirmante",
        description: "Ampollas de efecto tensor inmediato.",
        price: "72,00€",
        image: piel7,
      },
    ],
  },
  {
    id: "corporal",
    nav: "Corporal",
    title: "Cuidado Corporal",
    number: "04 / 04",
    products: [
      {
        name: "Manteca Mediterránea",
        description: "Textura untuosa con aroma a jazmín silvestre.",
        price: "46,00€",
        image: corporal1,
      },
      {
        name: "Exfoliante de Oliva",
        description: "Hueso de aceituna triturado para piel de seda.",
        price: "38,00€",
        image: corporal2,
      },
      {
        name: "Aceite Reafirmante",
        description: "Drenante con extracto de hiedra y ciprés.",
        price: "55,00€",
        image: corporal3,
      },
      {
        name: "Gel de Baño Botánico",
        description: "Limpieza suave sin sulfatos, pH neutro.",
        price: "29,00€",
        image: corporal4,
      },
      {
        name: "Crema de Cuello",
        description: "Específica para el escote, con elastina.",
        price: "64,00€",
        image: corporal5,
      },
      {
        name: "Desodorante de Piedra",
        description: "Efectividad natural con alumbre y salvia.",
        price: "18,00€",
        image: corporal6,
      },
      {
        name: "Leche Corporal",
        description: "Absorción rápida con agua de rosas.",
        price: "42,00€",
        image: corporal7,
      },
    ],
  },
  {
    id: "dental",
    nav: "Dental",
    title: "Sonrisa Mediterránea",
    number: "05 / 05",
    products: [
      {
        name: "Pasta Blanqueante",
        description: "Blanqueamiento natural con enzimas de papaya.",
        price: "16,00€",
        image: dental1,
      },
      {
        name: "Enjuague de Salvia",
        description: "Aliento fresco con aceites esenciales botánicos.",
        price: "19,00€",
        image: dental2,
      },
      {
        name: "Cepillo de Bambú",
        description: "Filamentos suaves y mango biodegradable.",
        price: "9,00€",
        image: dental3,
      },
      {
        name: "Tiras Blanqueadoras",
        description: "Sonrisa luminosa en 14 días, sin sensibilidad.",
        price: "34,00€",
        image: dental4,
      },
      {
        name: "Hilo Dental de Menta",
        description: "Seda natural encerada con cera de candelilla.",
        price: "8,00€",
        image: dental5,
      },
      {
        name: "Sérum de Encías",
        description: "Cuidado intensivo con neem y ácido hialurónico.",
        price: "27,00€",
        image: dental6,
      },
      {
        name: "Polvo de Carbón",
        description: "Limpieza profunda con carbón activado de coco.",
        price: "14,00€",
        image: dental7,
      },
    ],
  },
];
