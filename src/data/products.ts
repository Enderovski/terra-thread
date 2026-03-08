// Fire products
import fireProduct1 from "@/assets/fire-product-1.jpg";
import fireProduct2 from "@/assets/fire-product-2.jpg";
import fireProduct3 from "@/assets/fire-product-3.jpg";
import fireProduct4 from "@/assets/fire-product-4.jpg";
import fireProduct1Angle1 from "@/assets/fire-product-1-angle-1.jpg";
import fireProduct1Angle2 from "@/assets/fire-product-1-angle-2.jpg";
import fireProduct1Angle3 from "@/assets/fire-product-1-angle-3.jpg";
import fireProduct2Angle1 from "@/assets/fire-product-2-angle-1.jpg";
import fireProduct2Angle2 from "@/assets/fire-product-2-angle-2.jpg";
import fireProduct2Angle3 from "@/assets/fire-product-2-angle-3.jpg";
import fireProduct3Angle1 from "@/assets/fire-product-3-angle-1.jpg";
import fireProduct3Angle2 from "@/assets/fire-product-3-angle-2.jpg";
import fireProduct3Angle3 from "@/assets/fire-product-3-angle-3.jpg";
import fireProduct4Angle1 from "@/assets/fire-product-4-angle-1.jpg";
import fireProduct4Angle2 from "@/assets/fire-product-4-angle-2.jpg";
import fireProduct4Angle3 from "@/assets/fire-product-4-angle-3.jpg";

// Water products
import waterProduct1 from "@/assets/water-product-1.jpg";
import waterProduct2 from "@/assets/water-product-2.jpg";
import waterProduct3 from "@/assets/water-product-3.jpg";
import waterProduct4 from "@/assets/water-product-4.jpg";
import waterProduct1Angle1 from "@/assets/water-product-1-angle-1.jpg";
import waterProduct1Angle2 from "@/assets/water-product-1-angle-2.jpg";
import waterProduct1Angle3 from "@/assets/water-product-1-angle-3.jpg";
import waterProduct2Angle1 from "@/assets/water-product-2-angle-1.jpg";
import waterProduct2Angle2 from "@/assets/water-product-2-angle-2.jpg";
import waterProduct2Angle3 from "@/assets/water-product-2-angle-3.jpg";
import waterProduct3Angle1 from "@/assets/water-product-3-angle-1.jpg";
import waterProduct3Angle2 from "@/assets/water-product-3-angle-2.jpg";
import waterProduct3Angle3 from "@/assets/water-product-3-angle-3.jpg";
import waterProduct4Angle1 from "@/assets/water-product-4-angle-1.jpg";
import waterProduct4Angle2 from "@/assets/water-product-4-angle-2.jpg";
import waterProduct4Angle3 from "@/assets/water-product-4-angle-3.jpg";

// Earth products
import earthProduct1 from "@/assets/earth-product-1.jpg";
import earthProduct2 from "@/assets/earth-product-2.jpg";
import earthProduct3 from "@/assets/earth-product-3.jpg";
import earthProduct4 from "@/assets/earth-product-4.jpg";
import earthProduct1Angle1 from "@/assets/earth-product-1-angle-1.jpg";
import earthProduct1Angle2 from "@/assets/earth-product-1-angle-2.jpg";
import earthProduct1Angle3 from "@/assets/earth-product-1-angle-3.jpg";
import earthProduct2Angle1 from "@/assets/earth-product-2-angle-1.jpg";
import earthProduct2Angle2 from "@/assets/earth-product-2-angle-2.jpg";
import earthProduct2Angle3 from "@/assets/earth-product-2-angle-3.jpg";
import earthProduct3Angle1 from "@/assets/earth-product-3-angle-1.jpg";
import earthProduct3Angle2 from "@/assets/earth-product-3-angle-2.jpg";
import earthProduct3Angle3 from "@/assets/earth-product-3-angle-3.jpg";
import earthProduct4Angle1 from "@/assets/earth-product-4-angle-1.jpg";
import earthProduct4Angle2 from "@/assets/earth-product-4-angle-2.jpg";
import earthProduct4Angle3 from "@/assets/earth-product-4-angle-3.jpg";

// Air products
import airProduct1 from "@/assets/air-product-1.jpg";
import airProduct2 from "@/assets/air-product-2.jpg";
import airProduct3 from "@/assets/air-product-3.jpg";
import airProduct4 from "@/assets/air-product-4.jpg";
import airProduct1Angle1 from "@/assets/air-product-1-angle-1.jpg";
import airProduct1Angle2 from "@/assets/air-product-1-angle-2.jpg";
import airProduct1Angle3 from "@/assets/air-product-1-angle-3.jpg";
import airProduct2Angle1 from "@/assets/air-product-2-angle-1.jpg";
import airProduct2Angle2 from "@/assets/air-product-2-angle-2.jpg";
import airProduct2Angle3 from "@/assets/air-product-2-angle-3.jpg";
import airProduct3Angle1 from "@/assets/air-product-3-angle-1.jpg";
import airProduct3Angle2 from "@/assets/air-product-3-angle-2.jpg";
import airProduct3Angle3 from "@/assets/air-product-3-angle-3.jpg";
import airProduct4Angle1 from "@/assets/air-product-4-angle-1.jpg";
import airProduct4Angle2 from "@/assets/air-product-4-angle-2.jpg";
import airProduct4Angle3 from "@/assets/air-product-4-angle-3.jpg";

export type ElementCategory = "fire" | "water" | "earth" | "air";

export interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  gallery: string[];
  tag?: string;
  description: string;
  category: ElementCategory;
}

export const categories: { id: ElementCategory; label: string; icon: string; description: string }[] = [
  { id: "fire", label: "Ateş", icon: "🔥", description: "Tutku ve güç" },
  { id: "water", label: "Su", icon: "💧", description: "Akış ve huzur" },
  { id: "earth", label: "Toprak", icon: "🌿", description: "Kök ve denge" },
  { id: "air", label: "Hava", icon: "🌬️", description: "Özgürlük ve hafiflik" },
];

export const products: Product[] = [
  // FIRE
  {
    id: "fire-1",
    name: "Ejder Aşkı Yüzük",
    price: "₺1.290",
    image: fireProduct1,
    gallery: [fireProduct1, fireProduct1Angle1, fireProduct1Angle2, fireProduct1Angle3],
    tag: "Son 3 Adet",
    description: "Ateş elementinin gücünü taşıyan, el yapımı ejderha motifli altın filigran yüzük. Koyu kırmızı taş, tutkunun simgesi.",
    category: "fire",
  },
  {
    id: "fire-2",
    name: "Alev Kolye · Altın",
    price: "₺1.740",
    image: fireProduct2,
    gallery: [fireProduct2, fireProduct2Angle1, fireProduct2Angle2, fireProduct2Angle3],
    description: "Dövme altın alev motifli kolye ucu. Yakut kırmızısı taşlarla süslenmiş, volkanik taş üzerinde işlenmiş.",
    category: "fire",
  },
  {
    id: "fire-3",
    name: "Ateş Tütsülük",
    price: "₺680",
    image: fireProduct3,
    gallery: [fireProduct3, fireProduct3Angle1, fireProduct3Angle2, fireProduct3Angle3],
    tag: "Yeni",
    description: "Alev desenli seramik tütsülük. Turuncu-siyah sır ile el yapımı, meditasyon ve ritüel için ideal.",
    category: "fire",
  },
  {
    id: "fire-4",
    name: "Anka Tüyü Küpe",
    price: "₺890",
    image: fireProduct4,
    gallery: [fireProduct4, fireProduct4Angle1, fireProduct4Angle2, fireProduct4Angle3],
    description: "Dövme bakır anka kuşu tüyü küpeler. Karneol taşlarıyla bezeli, bohem ruhun yansıması.",
    category: "fire",
  },
  // WATER
  {
    id: "water-1",
    name: "Okyanus Dalgası Yüzük",
    price: "₺1.120",
    image: waterProduct1,
    gallery: [waterProduct1, waterProduct1Angle1, waterProduct1Angle2, waterProduct1Angle3],
    tag: "Çok Satan",
    description: "Dalga formunda gümüş bant üzerinde mavi akuamarin taş. Okyanusun sakinliğini parmağınızda taşıyın.",
    category: "water",
  },
  {
    id: "water-2",
    name: "Su Damlası Kolye",
    price: "₺1.480",
    image: waterProduct2,
    gallery: [waterProduct2, waterProduct2Angle1, waterProduct2Angle2, waterProduct2Angle3],
    description: "Labradorit ay taşı su damlası formunda kolye ucu. Işığı farklı açılardan yansıtan büyülü taş.",
    category: "water",
  },
  {
    id: "water-3",
    name: "Dalga Seramik Kase",
    price: "₺560",
    image: waterProduct3,
    gallery: [waterProduct3, waterProduct3Angle1, waterProduct3Angle2, waterProduct3Angle3],
    tag: "Yeni",
    description: "Okyanus dalgası desenli el yapımı seramik kase. Turkuaz ve kobalt mavisi sırla bezeli.",
    category: "water",
  },
  {
    id: "water-4",
    name: "İnci & Deniz Küpe",
    price: "₺720",
    image: waterProduct4,
    gallery: [waterProduct4, waterProduct4Angle1, waterProduct4Angle2, waterProduct4Angle3],
    description: "Tatlı su incisi ve deniz kabuğu gümüş tel sarma küpeler. Denizin zarafeti kulaklarınızda.",
    category: "water",
  },
  // EARTH
  {
    id: "earth-1",
    name: "Kehribar Doğa Yüzük",
    price: "₺980",
    image: earthProduct1,
    gallery: [earthProduct1, earthProduct1Angle1, earthProduct1Angle2, earthProduct1Angle3],
    description: "Ham kehribar taşlı organik dal formunda bronz yüzük. Toprağın sıcaklığını hissedin.",
    category: "earth",
  },
  {
    id: "earth-2",
    name: "Yeşim Taşı Kolye",
    price: "₺1.340",
    image: earthProduct2,
    gallery: [earthProduct2, earthProduct2Angle1, earthProduct2Angle2, earthProduct2Angle3],
    tag: "Sınırlı Üretim",
    description: "Ahşap boncuk ve yeşim taşı kolye ucu. Deri kordonlu, orman ruhunu taşıyan doğal parça.",
    category: "earth",
  },
  {
    id: "earth-3",
    name: "Yaprak Saksı",
    price: "₺480",
    image: earthProduct3,
    gallery: [earthProduct3, earthProduct3Angle1, earthProduct3Angle2, earthProduct3Angle3],
    description: "Yaprak kabartma desenli el yapımı terrakotta saksı. Doğal sırsız kil, bitkileriniz için mükemmel.",
    category: "earth",
  },
  {
    id: "earth-4",
    name: "Taşlaşmış Ahşap Küpe",
    price: "₺640",
    image: earthProduct4,
    gallery: [earthProduct4, earthProduct4Angle1, earthProduct4Angle2, earthProduct4Angle3],
    description: "Bakır tel sarma taşlaşmış ahşap küpeler. Organik formlar, toprağın hafızasını taşıyan parçalar.",
    category: "earth",
  },
  // AIR
  {
    id: "air-1",
    name: "Ay Taşı Tüy Yüzük",
    price: "₺1.060",
    image: airProduct1,
    gallery: [airProduct1, airProduct1Angle1, airProduct1Angle2, airProduct1Angle3],
    description: "Opal ay taşı ve tüy formunda platin bant. Eterik ve hafif, gökyüzünün ruhunu taşıyor.",
    category: "air",
  },
  {
    id: "air-2",
    name: "Bulut Kolye · İnci",
    price: "₺1.180",
    image: airProduct2,
    gallery: [airProduct2, airProduct2Angle1, airProduct2Angle2, airProduct2Angle3],
    tag: "Yeni",
    description: "Bulut formunda beyaz inci kolye ucu. Altın zincirli, rüya gibi hafif ve zarif.",
    category: "air",
  },
  {
    id: "air-3",
    name: "Kristal Rüzgar Çanı",
    price: "₺780",
    image: airProduct3,
    gallery: [airProduct3, airProduct3Angle1, airProduct3Angle2, airProduct3Angle3],
    description: "Gümüş çanlar ve kristal prizmalarla süslenmiş rüzgar çanı. Evinize huzur ve ışık getirin.",
    category: "air",
  },
  {
    id: "air-4",
    name: "Kelebek Kanat Küpe",
    price: "₺920",
    image: airProduct4,
    gallery: [airProduct4, airProduct4Angle1, airProduct4Angle2, airProduct4Angle3],
    tag: "Çok Satan",
    description: "İridescent kelebek kanat formunda küpeler. Beyaz ve gümüş tonlarında, ışıkla dans eden parçalar.",
    category: "air",
  },
];
