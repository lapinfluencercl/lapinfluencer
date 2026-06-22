function formatCatalogPrice(value) {
  return value.toLocaleString("es-CL");
}

function personVariants(maxPersons, basePrice, personAdd) {
  return Array.from({ length: maxPersons }, (_, index) => {
    const persons = index + 1;
    return {
      title: `${persons} persona${persons > 1 ? "s" : ""}`,
      price: formatCatalogPrice(basePrice + index * personAdd)
    };
  });
}

function personPetVariants(maxPersons, maxPets, basePrice, personAdd, petAdd) {
  const variants = [];
  for (let persons = 1; persons <= maxPersons; persons += 1) {
    for (let pets = 1; pets <= maxPets; pets += 1) {
      variants.push({
        title: `${persons} persona${persons > 1 ? "s" : ""} + ${pets} mascota${pets > 1 ? "s" : ""}`,
        price: formatCatalogPrice(basePrice + (persons - 1) * personAdd + (pets - 1) * petAdd)
      });
    }
  }
  return variants;
}

function personPetRows(rows, basePrice, personAdd, petAdd) {
  return rows.flatMap(({ persons, maxPets }) =>
    Array.from({ length: maxPets }, (_, index) => {
      const pets = index + 1;
      return {
        title: `${persons} persona${persons > 1 ? "s" : ""} + ${pets} mascota${pets > 1 ? "s" : ""}`,
        price: formatCatalogPrice(basePrice + (persons - 1) * personAdd + (pets - 1) * petAdd)
      };
    })
  );
}

const catalog = {
  esculpidas: {
    label: "Piezas Esculpidas",
    products: [
      {
        name: "Llavero 3D",
        image: "assets/productos/catalogo-llavero-3d-limpio.png",
        price: "22.000",
        summary: "Retrato esculpido de 5 a 6 cm aprox.",
        details: [
          "Dije con nombre, en forma de corazon, huesito, pescadito o estrella.",
          "Dije de patita.",
          "Tú eliges el color de los accesorios.",
          "Puedes agregar alas o aureola sin costo adicional."
        ]
      },
      {
        name: "Magneto 3D",
        aliases: ["Magneto"],
        image: "assets/productos/catalogo-magneto-3d-limpio.png",
        price: "22.000",
        summary: "Retrato esculpido de 5 a 6 cm aprox.",
        details: [
          "Dije con nombre: huesito, pescadito o rectángulo.",
          "Tú eliges el color del accesorio.",
          "Puede llevar alas o aureola sin costo adicional."
        ]
      },
      {
        name: "Clip 3D para el auto",
        aliases: ["Clip", "Clip para el auto"],
        image: "assets/productos/catalogo-clip-auto-limpio.png",
        price: "22.000",
        summary: "Clip de rejilla para el auto con retrato esculpido de 5 a 6 cm aprox.",
        details: [
          "Incluye dije con nombre.",
          "Tú eliges el color del accesorio.",
          "Puede llevar alas o aureola sin costo adicional."
        ]
      },
      {
        name: "Colgante 3D",
        aliases: ["Colgante"],
        image: "assets/productos/colgante-catalogo.png",
        price: "Desde 33.000",
        summary: "Colgante esculpido con fondo, decoracion y nombre.",
        options: [
          {
            title: "Colgante 8 cm de diametro",
            image: "assets/productos/colgante-8cm.png",
            price: "1 mascota: 33.000",
            notes: ["Incluye cuerina sintetica para colgar.", "Tipos de decoracion: flores, suculentas, hojas, corazones, huesitos, patitas, conchitas de mar, etc."]
          },
          {
            title: "Colgante 15 cm de diametro",
            image: "assets/productos/colgante-catalogo.png",
            price: "Desde 46.000",
            notes: ["Incluye cuerina sintetica para colgar.", "Tipos de decoracion: flores, suculentas, hojas, corazones, huesitos, patitas, conchitas de mar, etc."],
            variants: [
              { title: "1 mascota", price: "46.000" },
              { title: "2 mascotas", price: "56.000" },
              { title: "3 mascotas", price: "66.000" }
            ]
          }
        ]
      },
      {
        name: "Cuadro 3D",
        image: "assets/productos/portada-cuadros-3d.png",
        price: "Desde 57.500",
        summary: "Cuadro esculpido con marco vintage color blanco.",
        options: [
          {
            title: "Cuadro 3D 15 x 20 cm",
            image: "assets/productos/cuadro-3d-15x20.png",
            price: "Desde 57.500",
            notes: ["Desde 2 mascotas el marco va horizontal."],
            variants: [
              { title: "1 mascota", price: "57.500" },
              { title: "2 mascotas", price: "69.500" },
              { title: "3 mascotas", price: "81.500" },
              { title: "4 mascotas", price: "93.500" },
              { title: "5 mascotas", price: "105.500" },
              { title: "6 mascotas", price: "117.500" }
            ]
          },
          {
            title: "Cuadro 3D grande 23 x 27 cm",
            image: "assets/productos/cuadro-3d-grande.png",
            price: "Desde 84.000",
            notes: ["Desde 2 mascotas el marco va horizontal."],
            variants: [
              { title: "1 mascota", price: "84.000" },
              { title: "2 mascotas", price: "99.000" },
              { title: "3 mascotas", price: "114.000" },
              { title: "4 mascotas", price: "129.000" },
              { title: "5 mascotas", price: "144.000" },
              { title: "6 mascotas", price: "159.000" }
            ]
          }
        ]
      },
      {
        name: "Figura decorativa",
        aliases: ["Figura"],
        image: "assets/productos/portada-figuras.png",
        price: "Desde 84.000",
        summary: "Figura miniatura sobre base de madera con placa.",
        notice: "Si quieres mas de una figura en la misma base, el valor es el mismo.",
        options: [
          {
            title: "Figura M",
            image: "assets/productos/figura-m.png",
            price: "84.000",
            notes: ["Base aproximada de 7,5 cm.", "Alto aproximado de 9 a 10 cm."]
          },
          {
            title: "Figura L",
            image: "assets/productos/figura-l.png",
            price: "120.000",
            notes: ["Base de 12 cm.", "Alto aproximado de 13 a 14 cm."]
          }
        ]
      }
    ]
  },
  pintadas: {
    label: "Piezas Pintadas",
    products: [
      {
        name: "Llavero circular",
        aliases: ["Llavero"],
        image: "assets/productos/llavero-circular-nuevo.png",
        price: "Desde 16.500",
        summary: "Llavero circular acrílico pintado a mano y bañado en resina.",
        options: [
          {
            title: "¿Qué incluye?",
            image: "assets/productos/llavero-circular-nuevo.png",
            price: "Desde 16.500",
            notes: ["Nombre al reverso.", "Color de fondo a elección.", "Incluye borla decorativa de color aleatorio según disponibilidad."],
            variants: [
              { title: "1 retrato", price: "16.500" },
              { title: "2 retratos", price: "22.000" }
            ]
          }
        ]
      },
      {
        name: "Tazones",
        aliases: ["Tazon"],
        image: "assets/productos/portada-pintadas-tazon.png",
        price: "Desde 16.500",
        summary: "Tazones pintados a mano, incluye nombre y adornos simples.",
        options: [
          {
            title: "Tazón Café-Lover",
            image: "assets/productos/tazon-cafe-lover.png",
            colorImage: "assets/productos/colores-tazon-cafe-lover.png",
            price: "Desde 22.000",
            notes: ["Medida: 350 cc."],
            colors: ["Blanco", "Celeste", "Rosado", "Lila"],
            variants: [
              { title: "1 mascota", price: "22.000" },
              { title: "2 mascotas", price: "33.000" },
              { title: "3 mascotas", price: "46.000" },
              { title: "4 mascotas", price: "59.000" }
            ]
          },
          {
            title: "Tazón Tricolor",
            image: "assets/productos/tazon-tricolor.png",
            colorImage: "assets/productos/colores-tazon-tricolor.png",
            price: "Desde 16.500",
            notes: ["Medida: 300 cc."],
            colors: ["Café", "Negro"],
            variants: [
              { title: "1 mascota", price: "16.500" },
              { title: "2 mascotas", price: "27.500" },
              { title: "3 mascotas", price: "40.500" },
              { title: "4 mascotas", price: "53.500" }
            ]
          },
          {
            title: "Tazón Sencillo",
            image: "assets/productos/tazon-sencillo.png",
            colorImage: "assets/productos/colores-tazon-sencillo.png",
            price: "Desde 22.000",
            notes: ["Medida: 400 cc."],
            colors: ["Beige", "Rosado", "Celeste", "Verde"],
            variants: [
              { title: "1 mascota", price: "22.000" },
              { title: "2 mascotas", price: "33.000" },
              { title: "3 mascotas", price: "46.000" },
              { title: "4 mascotas", price: "59.000" }
            ]
          },
          {
            title: "Tazón tipo Matero",
            image: "assets/productos/catalogo-tazones-limpio.png",
            colorImage: "assets/productos/colores-tazon-matero.png",
            price: "Desde 22.000",
            notes: ["Medida: 700 cc."],
            colors: ["Blanco", "Blanco con asa burdeo"],
            variants: [
              { title: "1 mascota", price: "22.000" },
              { title: "2 mascotas", price: "33.000" },
              { title: "3 mascotas", price: "46.000" },
              { title: "4 mascotas", price: "59.000" }
            ]
          }
        ]
      },
      {
        name: "Lienzos cuadrados, rectangulares y circulares",
        aliases: ["Lienzos"],
        image: "assets/productos/catalogo-lienzos-limpio.png",
        price: "Desde 16.500",
        summary: "Retratos pintados en lienzos cuadrados, rectangulares o circulares.",
        options: [
          {
            group: "Retrato mascota",
            title: "Lienzo 10 x 10 cm con atril decorativo",
            image: "assets/productos/lienzo-10x10-faltante.png",
            price: "16.500",
            notes: ["Maximo 1 mascota.", "Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "3.000" }]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo 20 x 20 cm con atril",
            price: "Desde 22.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "4.000" }],
            variants: [
              { title: "1 mascota", price: "22.000" },
              { title: "2 mascotas", price: "27.500" },
              { title: "3 mascotas", price: "33.500" },
              { title: "4 mascotas", price: "38.500" }
            ]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo 30 x 30 cm",
            price: "Desde 33.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: [
              { title: "1 mascota", price: "33.000" },
              { title: "2 mascotas", price: "45.000" },
              { title: "3 mascotas", price: "57.000" },
              { title: "4 mascotas", price: "69.000" },
              { title: "5 mascotas", price: "81.000" },
              { title: "6 mascotas", price: "93.000" }
            ]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo circular 30 cm de diametro",
            price: "33.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: [
              { title: "1 mascota", price: "33.000" },
              { title: "2 mascotas", price: "45.000" },
              { title: "3 mascotas", price: "57.000" },
              { title: "4 mascotas", price: "69.000" },
              { title: "5 mascotas", price: "81.000" },
              { title: "6 mascotas", price: "93.000" }
            ]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo circular 40 cm de diametro",
            price: "46.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: [
              { title: "1 mascota", price: "46.000" },
              { title: "2 mascotas", price: "58.000" },
              { title: "3 mascotas", price: "70.000" },
              { title: "4 mascotas", price: "82.000" },
              { title: "5 mascotas", price: "94.000" },
              { title: "6 mascotas", price: "106.000" }
            ]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo 40 x 50 cm",
            price: "Desde 46.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: [
              { title: "1 mascota", price: "46.000" },
              { title: "2 mascotas", price: "58.000" },
              { title: "3 mascotas", price: "70.000" },
              { title: "4 mascotas", price: "82.000" },
              { title: "5 mascotas", price: "94.000" },
              { title: "6 mascotas", price: "106.000" }
            ]
          },
          {
            group: "Retrato mascota",
            title: "Lienzo 50 x 50 cm",
            price: "Desde 50.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: [
              { title: "1 mascota", price: "50.000" },
              { title: "2 mascotas", price: "62.000" },
              { title: "3 mascotas", price: "74.000" },
              { title: "4 mascotas", price: "86.000" },
              { title: "5 mascotas", price: "98.000" },
              { title: "6 mascotas", price: "110.000" }
            ]
          },
          {
            group: "Retrato persona",
            title: "Lienzo 30 x 30 cm",
            price: "Desde 43.000",
            notes: ["Maximo 2 personas.", "Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: personVariants(2, 43000, 15000)
          },
          {
            group: "Retrato persona",
            title: "Lienzo circular 30 cm de diametro",
            price: "Desde 43.000",
            notes: ["Maximo 2 personas.", "Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: personVariants(2, 43000, 15000)
          },
          {
            group: "Retrato persona",
            title: "Lienzo circular 40 cm de diametro",
            price: "Desde 57.500",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personVariants(4, 57500, 15000)
          },
          {
            group: "Retrato persona",
            title: "Lienzo 40 x 50 cm",
            price: "Desde 57.500",
            notes: ["Maximo 5 personas.", "Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personVariants(5, 57500, 15000)
          },
          {
            group: "Retrato persona",
            title: "Lienzo 50 x 50 cm",
            price: "Desde 67.500",
            notes: ["Maximo 6 personas.", "Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personVariants(6, 67500, 15000)
          },
          {
            group: "Retrato mascota y persona",
            title: "Lienzo 30 x 30 cm",
            price: "Desde 50.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: personPetRows([{ persons: 1, maxPets: 3 }], 50000, 15000, 10000)
          },
          {
            group: "Retrato mascota y persona",
            title: "Lienzo circular 30 cm de diametro",
            price: "Desde 50.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "6.000" }],
            variants: personPetRows([{ persons: 1, maxPets: 3 }], 50000, 15000, 10000)
          },
          {
            group: "Retrato mascota y persona",
            title: "Lienzo circular 40 cm de diametro",
            price: "Desde 60.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personPetRows([{ persons: 1, maxPets: 4 }, { persons: 2, maxPets: 3 }, { persons: 3, maxPets: 2 }], 60000, 15000, 10000)
          },
          {
            group: "Retrato mascota y persona",
            title: "Lienzo 40 x 50 cm",
            price: "Desde 60.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personPetRows([{ persons: 1, maxPets: 5 }, { persons: 2, maxPets: 4 }, { persons: 3, maxPets: 3 }, { persons: 4, maxPets: 2 }], 60000, 15000, 10000)
          },
          {
            group: "Retrato mascota y persona",
            title: "Lienzo 50 x 50 cm",
            image: "assets/productos/lienzo-persona-mascota.png",
            price: "Desde 68.000",
            notes: ["Incluye fondo de uno o mas colores."],
            addons: [{ title: "Agregar fondo personalizado basado en una foto o idea", price: "10.000" }],
            variants: personPetRows([{ persons: 1, maxPets: 6 }, { persons: 2, maxPets: 5 }, { persons: 3, maxPets: 4 }, { persons: 4, maxPets: 3 }, { persons: 5, maxPets: 2 }], 68000, 15000, 10000)
          }
        ]
      },
      {
        name: "Bolsa reutilizable",
        aliases: ["Bolsa"],
        image: "assets/productos/catalogo-bolsa-limpio.png",
        price: "Desde 25.500",
        summary: "Bolsa reutilizable 40 x 40 cm.",
        options: [
          {
            title: "Bolsa reutilizable 40 x 40 cm",
            image: "assets/productos/catalogo-bolsa-limpio.png",
            price: "Desde 25.500",
            notes: ["Puedes agregar el nombre de tu mascota.", "Elige si quieres una mascota a cada lado o al mismo lado.", "Hasta 6 mascotas."],
            variants: [
              { title: "1 mascota", price: "25.500" },
              { title: "2 mascotas", price: "35.500" },
              { title: "3 mascotas", price: "45.500" },
              { title: "4 mascotas", price: "55.500" },
              { title: "5 mascotas", price: "65.500" },
              { title: "6 mascotas", price: "75.500" }
            ]
          }
        ]
      }
    ]
  }
};

const grid = document.querySelector("#product-grid");
const optionView = document.querySelector("#option-view");
const backButton = document.querySelector("#back-button");
const categoryButtons = document.querySelectorAll(".category-button");
const sortSelect = document.querySelector("#sort-select");
const categoryLabel = document.querySelector("#current-category-label");
const categoryTitle = document.querySelector("#current-category-title");
const cartDrawer = document.querySelector("#cart-drawer");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const cartCount = document.querySelector("#cart-count");
const cartWhatsapp = document.querySelector("#cart-whatsapp");
const cartOpenButton = document.querySelector("#cart-open-button");
const cartCloseButton = document.querySelector("#cart-close-button");
const cartAgenda = document.querySelector("#cart-agenda");
const cartTotal = document.querySelector("#cart-total");
const cartFinal = document.querySelector("#cart-final");
const cartDeposit = document.querySelector("#cart-deposit");
const cartPayment = document.querySelector("#cart-payment");
const cartWarning = document.querySelector("#cart-warning");
const reviewForm = document.querySelector("#review-form");
const reviewKey = document.querySelector("#review-key");
const reviewKeyToggle = document.querySelector("#review-key-toggle");
const reviewName = document.querySelector("#review-name");
const reviewRating = document.querySelector("#review-rating");
const reviewStars = document.querySelector("#review-stars");
const reviewPhoto = document.querySelector("#review-photo");
const reviewText = document.querySelector("#review-text");
const reviewMessage = document.querySelector("#review-form-message");
const customerReviews = document.querySelector("#customer-reviews");
const customerReviewsGrid = document.querySelector("#customer-reviews-grid");
const calendarGrid = document.querySelector("#calendar-grid");
const agendaSelected = document.querySelector("#agenda-selected");
const calendarMonthTitle = document.querySelector("#calendar-month-title");
const calendarMonthSelect = document.querySelector("#calendar-month-select");
const calendarYearSelect = document.querySelector("#calendar-year-select");

const params = new URLSearchParams(window.location.search);
let currentCategory = params.get("categoria") || "esculpidas";
let currentSort = "featured";
let cart = JSON.parse(localStorage.getItem("lapinfluencerCart") || "[]");
let selectedWeek = localStorage.getItem("lapinfluencerAgenda") || "";
let paymentMethod = localStorage.getItem("lapinfluencerPayment") || "";
const reviewAccessKey = "MIREVIEW";
localStorage.removeItem("lapinfluencerCoupon");
const today = new Date();
const firstAgendaMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastAgendaMonth = new Date(2027, 11, 1);
let visibleAgendaMonth = new Date(firstAgendaMonth);
const agendaAvailability = {
  "2026-5-1": { pintadas: "full", esculpidas: "full" },
  "2026-5-2": { pintadas: "full", esculpidas: "full" },
  "2026-5-3": { pintadas: "full", esculpidas: "full" },
  "2026-5-4": { pintadas: "full", esculpidas: "full" },
  "2026-6-1": { esculpidas: "full" }
};
const agendaTypes = {
  pintadas: "Pintura",
  esculpidas: "Escultura"
};
const monthNames = Array.from({ length: 12 }, (_, index) =>
  new Date(2026, index, 1).toLocaleDateString("es-CL", { month: "long" })
);

function monthHasAvailability(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  for (let week = 1; week <= 4; week += 1) {
    const availability = agendaAvailability[`${year}-${month}-${week}`] || {};
    const isFull = Object.keys(agendaTypes).every((typeKey) => availability[typeKey] === "full");
    if (!isFull) return true;
  }
  return false;
}

function firstAvailableAgendaMonth() {
  const cursor = new Date(firstAgendaMonth);
  while (cursor <= lastAgendaMonth) {
    if (monthHasAvailability(cursor)) return new Date(cursor);
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return new Date(firstAgendaMonth);
}

visibleAgendaMonth = firstAvailableAgendaMonth();

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function initials(name) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();
}

function formatPrice(price) {
  if (!price || price.includes("CLP") || price.includes("completar")) return price;
  return `${price} CLP (IVA incluido)`;
}

function numericPrice(price) {
  const match = String(price || "").match(/\d[\d.]*/);
  return match ? Number(match[0].replace(/\./g, "")) : Number.MAX_SAFE_INTEGER;
}

function productBasePrice(product) {
  return numericPrice(product.price);
}

function sortedProducts(products) {
  const items = products.map((product, index) => ({ product, index }));
  if (currentSort === "featured") {
    const featuredOrder = {
      esculpidas: ["figura-decorativa", "colgante-3d", "cuadro-3d"],
      pintadas: ["tazones", "lienzos-cuadrados-rectangulares-y-circulares"]
    };
    const order = featuredOrder[currentCategory] || [];
    items.sort((a, b) => {
      const aRank = order.indexOf(slugify(a.product.name));
      const bRank = order.indexOf(slugify(b.product.name));
      const safeA = aRank === -1 ? Number.MAX_SAFE_INTEGER : aRank;
      const safeB = bRank === -1 ? Number.MAX_SAFE_INTEGER : bRank;
      return safeA - safeB || a.index - b.index;
    });
  }
  if (currentSort === "price-asc") {
    items.sort((a, b) => productBasePrice(a.product) - productBasePrice(b.product) || a.index - b.index);
  }
  if (currentSort === "price-desc") {
    items.sort((a, b) => productBasePrice(b.product) - productBasePrice(a.product) || a.index - b.index);
  }
  return items.map((item) => item.product);
}

function productMatchesSlug(product, productSlug) {
  return [product.name, ...(product.aliases || [])].some((name) => slugify(name) === productSlug);
}

function renderColorChoice(option) {
  if (!option.colors) return "";
  return `
    <label class="color-choice">
      <span>Color</span>
      <select data-color-select>
        ${option.colors.map((color) => `<option value="${color}">${color}</option>`).join("")}
      </select>
    </label>
  `;
}

function renderAddonChoices(option) {
  if (!option.addons) return "";
  return `
    <div class="addon-choice">
      ${option.addons
        .map(
          (addon) => `
            <label>
              <input type="checkbox" data-addon-title="${addon.title}" data-addon-price="${formatPrice(addon.price)}" />
              <span>${addon.title} (+${formatPrice(addon.price)})</span>
            </label>
          `
        )
        .join("")}
    </div>
  `;
}

function renderVariantChoice(product, option) {
  if (!option.variants) {
    return `<button class="card-action" type="button" data-cart-name="${product.name} - ${option.title}" data-cart-price="${formatPrice(option.price)}">Agregar al carrito</button>`;
  }

  return `
    <label class="variant-choice">
      <span>Selecciona una opcion</span>
      <select data-variant-select>
        <option value="">Seleccionar</option>
        ${option.variants
          .map((variant) => `<option value="${variant.title}" data-price="${formatPrice(variant.price)}">${variant.title} - ${formatPrice(variant.price)}</option>`)
          .join("")}
      </select>
    </label>
    <button class="card-action" type="button" data-cart-base="${product.name} - ${option.title}" disabled>Agregar al carrito</button>
  `;
}

function renderOptionCard(product, option, showImageSpace = false, suppressImage = false) {
  const shouldShowImageArea = !suppressImage && (option.image || option.imageSpace || option.colorImage || option.colorImageSpace || showImageSpace);
  return `
    <article class="option-card">
      ${
        shouldShowImageArea
          ? `<div class="option-image-row ${option.colorImage || option.colorImageSpace ? "option-image-row-pair" : ""}" aria-hidden="true">
              <div class="option-image-space option-image-primary">${option.image ? `<img src="${option.image}" alt="" />` : ""}</div>
              ${option.colorImage ? `<div class="option-image-space option-image-secondary"><img src="${option.colorImage}" alt="" /></div>` : option.colorImageSpace ? `<div class="option-image-space option-image-secondary option-image-placeholder"></div>` : ""}
            </div>`
          : ""
      }
      <h4>${option.title}</h4>
      <ul>${option.notes.map((note) => `<li>${note}</li>`).join("")}</ul>
      ${renderColorChoice(option)}
      ${renderAddonChoices(option)}
      <p class="price">${formatPrice(option.price)}</p>
      ${renderVariantChoice(product, option)}
    </article>
  `;
}

function lienzoOptionOrder(option) {
  const title = option.title.toLowerCase();
  if (title.includes("10 x 10")) return 1;
  if (title.includes("20 x 20")) return 2;
  if (title.includes("circular 30")) return 3;
  if (title.includes("circular 40")) return 4;
  if (title.includes("30 x 30")) return 5;
  if (title.includes("40 x 50")) return 6;
  if (title.includes("50 x 50")) return 7;
  return 99;
}

function lienzoBlockKey(option) {
  const title = option.title.toLowerCase();
  if (title.includes("10 x 10") || title.includes("20 x 20")) return "small";
  if (title.includes("circular 30") || title.includes("circular 40")) return "circle";
  return "large";
}

function lienzoBlockImage(group, blockKey) {
  if (group === "Retrato mascota") {
    if (blockKey === "small") return "assets/productos/lienzo-10x10-faltante.png";
    if (blockKey === "circle") return "assets/productos/lienzo-retrato-circular.png";
    if (blockKey === "large") return "assets/productos/lienzo-mascota.png";
  }
  return "";
}

function renderLienzoBlocks(product, group, options) {
  const orderedOptions = [...options].sort((a, b) => lienzoOptionOrder(a) - lienzoOptionOrder(b));
  return ["small", "circle", "large"]
    .map((blockKey) => {
      const blockOptions = orderedOptions.filter((option) => lienzoBlockKey(option) === blockKey);
      if (!blockOptions.length) return "";
      const blockImage = lienzoBlockImage(group, blockKey);
      const gridClass = blockOptions.length === 3 ? "three-options" : "two-options";
      return `
        <div class="lienzo-block">
          ${blockImage ? `<div class="option-image-space lienzo-block-image" aria-hidden="true"><img src="${blockImage}" alt="" /></div>` : ""}
          <div class="option-grid ${gridClass}">
            ${blockOptions.map((option) => renderOptionCard(product, option, false, true)).join("")}
          </div>
        </div>
      `;
    })
    .join("");
}

function renderOptionGroups(product) {
  const isLienzoProduct = product.name.includes("Lienzos");
  const groups = product.options.reduce((items, option) => {
    const group = option.group || "";
    if (!items[group]) items[group] = [];
    items[group].push(option);
    return items;
  }, {});

  return Object.entries(groups)
    .map(([group, options]) => {
      if (isLienzoProduct) {
        return `
          <section class="option-group lienzo-group">
            ${group ? `<h5>${group}</h5>` : ""}
            ${renderLienzoBlocks(product, group, options)}
          </section>
        `;
      }
      const orderedOptions = isLienzoProduct ? [...options].sort((a, b) => lienzoOptionOrder(a) - lienzoOptionOrder(b)) : options;
      return `
        <section class="option-group">
          ${group ? `<h5>${group}</h5>` : ""}
          <div class="option-grid ${orderedOptions.length === 2 ? "two-options" : ""} ${isLienzoProduct ? "lienzo-options" : ""}">
            ${orderedOptions.map((option) => renderOptionCard(product, option, orderedOptions.length === 2 || isLienzoProduct)).join("")}
          </div>
        </section>
      `;
    })
    .join("");
}

function renderProducts() {
  if (!grid || !categoryLabel || !categoryTitle || !optionView || !backButton) return;

  const category = catalog[currentCategory];
  categoryLabel.textContent = category.label;
  categoryTitle.textContent = "Productos disponibles";
  optionView.hidden = true;
  optionView.innerHTML = "";
  grid.hidden = false;
  backButton.hidden = true;

  if (sortSelect) sortSelect.value = currentSort;

  grid.innerHTML = sortedProducts(category.products)
    .map((product) => {
      const hasOptions = Array.isArray(product.options);
      const action = hasOptions ? "Ver opciones" : "Ver mas";
      return `
        <article class="product-card">
          <div class="product-image product-image-area" aria-hidden="true">
            ${Object.prototype.hasOwnProperty.call(product, "image") ? (product.image ? `<img src="${product.image}" alt="" />` : "") : initials(product.name)}
          </div>
          <div class="card-body product-info">
            <h4>${product.name}</h4>
            <p>${product.summary || ""}</p>
            <span class="price">${formatPrice(product.price)}</span>
          </div>
          <button class="card-action" type="button" data-product="${slugify(product.name)}">${action}</button>
        </article>
      `;
    })
    .join("");
}

function openProduct(product) {
  grid.hidden = true;
  optionView.hidden = false;
  backButton.hidden = false;
  categoryTitle.textContent = product.name;

  if (product.options) {
    renderOptions(product);
  } else {
    renderDetails(product);
  }

  optionView.scrollIntoView({ behavior: "smooth", block: "start" });
}

function goToProduct(product) {
  const productSlug = slugify(product.name);
  window.location.href = `opciones.html?categoria=${currentCategory}&producto=${productSlug}`;
}

function renderDetails(product) {
  const items = product.details || [];
  optionView.innerHTML = `
    <h4>${product.name}</h4>
    <p>${product.summary}</p>
    <div class="option-grid">
      <article class="option-card">
        <h4>¿Que incluye?</h4>
        <ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>
        <p class="price">${formatPrice(product.price)}</p>
        <button class="card-action" type="button" data-cart-name="${product.name}" data-cart-price="${formatPrice(product.price)}">Agregar al carrito</button>
      </article>
    </div>
    <aside class="catalog-note">Para medidas especiales, ideas personalizadas o detalles fuera del catalogo, agrega la opcion mas cercana y lo coordinamos por WhatsApp.</aside>
  `;
  optionView.innerHTML = optionView.innerHTML.replace(/\u00c2\u00bf/g, "\u00bf");
}

function renderOptions(product) {
  optionView.innerHTML = `
    <h4>${product.name}: opciones</h4>
    ${renderOptionGroups(product)}
    ${product.notice ? `<aside class="catalog-note">${product.notice}</aside>` : ""}
    <aside class="catalog-note">Para medidas especiales, ideas personalizadas o detalles fuera del catalogo, agrega la opcion mas cercana y lo coordinamos por WhatsApp.</aside>
  `;
}

if (grid) {
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-product]");
    if (!button) return;

    const product = catalog[currentCategory].products.find((item) => slugify(item.name) === button.dataset.product);
    if (product) goToProduct(product);
  });
}

if (sortSelect) {
  sortSelect.addEventListener("change", () => {
    currentSort = sortSelect.value;
    renderProducts();
  });
}

if (optionView) {
  optionView.addEventListener("change", (event) => {
    const select = event.target.closest("[data-variant-select]");
    if (!select) return;
    const card = select.closest(".option-card");
    const button = card.querySelector("button[data-cart-base]");
    if (button) {
      button.disabled = !select.value;
      button.classList.toggle("selected", Boolean(select.value));
    }
  });

  optionView.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-cart-name], button[data-cart-base]");
    if (!button) return;
    const card = button.closest(".option-card");
    const variantSelect = card?.querySelector("[data-variant-select]");
    const selectedVariant = variantSelect?.selectedOptions[0];
    if (variantSelect && !variantSelect.value) return;
    const baseName = button.dataset.cartBase
      ? `${button.dataset.cartBase} - ${variantSelect.value}`
      : button.dataset.cartName;
    const basePrice = selectedVariant?.dataset.price || button.dataset.cartPrice;
    const colorSelect = card?.querySelector("[data-color-select]");
    const color = colorSelect ? ` - Color: ${colorSelect.value}` : "";
    const addons = [...(card?.querySelectorAll("[data-addon-title]:checked") || [])];
    const addonName = addons.map((addon) => ` - ${addon.dataset.addonTitle}`).join("");
    const addonPrice = addons.map((addon) => ` + ${addon.dataset.addonPrice}`).join("");
    addToCart(`${baseName}${color}${addonName}`, `${basePrice}${addonPrice}`);
  });
}

if (backButton) {
  backButton.addEventListener("click", () => {
    window.location.hash = "productos";
    renderProducts();
  });
}

categoryButtons.forEach((button) => {
  button.addEventListener("click", () => {
    window.location.href = `categoria.html?categoria=${button.dataset.category}`;
  });
});

function selectCategory(categoryKey) {
  currentCategory = categoryKey;
  categoryButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.category === categoryKey);
  });
}

function renderFromHash() {
  if (!grid) return;

  const hash = decodeURIComponent(window.location.hash.replace("#", ""));
  const [categoryKey, productSlug] = hash.split("/");

  if (params.get("categoria") && catalog[params.get("categoria")]) {
    selectCategory(params.get("categoria"));
    renderProducts();
    return;
  }

  if (!catalog[categoryKey]) {
    renderProducts();
    return;
  }

  selectCategory(categoryKey);
  renderProducts();

  if (!productSlug) return;

  const product = catalog[categoryKey].products.find((item) => productMatchesSlug(item, productSlug));
  if (product) {
    openProduct(product);
  }
}

window.addEventListener("popstate", renderFromHash);
window.addEventListener("hashchange", renderFromHash);
renderFromHash();

function saveCart() {
  localStorage.setItem("lapinfluencerCart", JSON.stringify(cart));
}

function savePayment() {
  localStorage.setItem("lapinfluencerPayment", paymentMethod);
}

function priceAmount(price) {
  return (String(price || "").match(/\d{1,3}(?:\.\d{3})+/g) || []).reduce((total, value) => total + Number(value.replace(/\./g, "")), 0);
}

function formatCurrency(value) {
  return `${value.toLocaleString("es-CL")} CLP`;
}

function cartTotalAmount() {
  return cart.reduce((total, item) => total + priceAmount(item.price) * item.quantity, 0);
}

function selectedAgendaType() {
  if (selectedWeek.includes("Pintura")) return "pintadas";
  if (selectedWeek.includes("Escultura")) return "esculpidas";
  return "";
}

function agendaCategoryLabel(category) {
  return category === "pintadas" ? "Pintura" : category === "esculpidas" ? "Escultura" : "sin tipo";
}

function cartTypeWarning() {
  const agendaType = selectedAgendaType();
  if (!agendaType || !cart.length) return "";
  const wrongItems = cart.filter((item) => item.category && item.category !== agendaType);
  if (!wrongItems.length) return "";
  const needed = [...new Set(wrongItems.map((item) => agendaCategoryLabel(item.category)))].join(" y ");
  return `Tienes productos de ${needed}, pero elegiste un cupo de ${agendaCategoryLabel(agendaType)}. Debes cambiar el cupo para poder agendar.`;
}

function cartTypeWarningHtml(warning) {
  if (!warning) return "";
  return `${warning}<br><a href="#agenda">Cambiar cupo en Agenda</a>`;
}

function addToCart(name, price, category = currentCategory) {
  const existing = cart.find((item) => item.name === name && item.price === price && item.category === category);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1, category });
  }
  saveCart();
  renderCart();
  cartDrawer.hidden = false;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  renderCart();
}

function cartMessage() {
  if (!cart.length && !selectedWeek) return encodeURIComponent("Hola Cata 🎨\nMe interesa agendar un pedido.\nQuedo atent@ a tu confirmación, gracias! 📅✨");
  const lines = cart.map((item) => `- ${item.quantity} x ${item.name} (${item.price})`);
  const agendaLine = selectedWeek || "por coordinar";
  const productLines = lines.length ? lines.join("\n") : "Aun no seleccione productos.";
  const subtotal = cartTotalAmount();
  const deposit = Math.ceil(subtotal / 2);
  const paymentLine = paymentMethod ? `Metodo de pago: ${paymentMethod}` : "Metodo de pago: por definir";
  return encodeURIComponent(`Hola Cata 🎨
Me interesa agendar:

PEDIDO:
${productLines}

Subtotal: ${formatCurrency(subtotal)}
Total del pedido: ${formatCurrency(subtotal)}
Abono 50% para agendar: ${formatCurrency(deposit)}
${paymentLine}

Para la semana del: ${agendaLine} 📅
Quedo atent@ a tu confirmación, gracias! 🗓️✨`);
}

function renderCart() {
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartEmpty.hidden = cart.length > 0;
  if (cartAgenda) {
    cartAgenda.textContent = selectedWeek ? `Agenda: ${selectedWeek}` : "Agenda: sin semana seleccionada.";
  }
  if (cartPayment) {
    cartPayment.value = paymentMethod;
  }
  const subtotal = cartTotalAmount();
  if (cartTotal) {
    cartTotal.textContent = `Subtotal: ${formatCurrency(subtotal)}`;
  }
  if (cartFinal) {
    cartFinal.textContent = `Total del pedido: ${formatCurrency(subtotal)}`;
  }
  if (cartDeposit) {
    cartDeposit.textContent = `Abono 50% para agendar: ${formatCurrency(Math.ceil(subtotal / 2))}`;
  }
  if (cartWarning) {
    const warning = cartTypeWarning();
    cartWarning.hidden = !warning;
    cartWarning.innerHTML = cartTypeWarningHtml(warning);
  }
  const warning = cartTypeWarning();
  cartWhatsapp.classList.toggle("disabled", Boolean(warning));
  cartWhatsapp.setAttribute("aria-disabled", warning ? "true" : "false");
  cartWhatsapp.href = warning ? "#" : `https://wa.me/56985781006?text=${cartMessage()}`;

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <article class="cart-item">
          <div>
            <h3>${item.name}</h3>
            <p>${item.price}</p>
            <span>Cantidad: ${item.quantity}</span>
          </div>
          <button class="remove-button" type="button" data-remove-index="${index}">Eliminar</button>
        </article>
      `
    )
    .join("");
}

function renderAgenda() {
  if (!calendarGrid || !agendaSelected || !calendarMonthTitle) return;

  const monthName = visibleAgendaMonth.toLocaleDateString("es-CL", {
    month: "long",
    year: "numeric"
  });
  const monthOnlyFormatter = new Intl.DateTimeFormat("es-CL", { month: "long" });
  const year = visibleAgendaMonth.getFullYear();
  const month = visibleAgendaMonth.getMonth();
  const lastDay = new Date(year, month + 1, 0).getDate();
  const weekCandidates = [];
  const dateFormatter = new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  const firstCalendarDay = new Date(year, month, 1);
  const firstOffset = (firstCalendarDay.getDay() + 6) % 7;
  const firstVisibleDay = new Date(year, month, 1 - firstOffset);

  for (let row = 0; row < 6; row += 1) {
    const days = [];
    for (let column = 0; column < 7; column += 1) {
      const date = new Date(firstVisibleDay);
      date.setDate(firstVisibleDay.getDate() + row * 7 + column);
      days.push(date);
    }

    const inMonthDays = days.filter((date) => date.getMonth() === month);
    if (!inMonthDays.length) continue;

    const isFullWeek = days[0].getMonth() === month && days[6].getMonth() === month;
    weekCandidates.push({ days, inMonthDays, isFullWeek });
  }

  const fullWeeks = weekCandidates.filter((week) => week.isFullWeek);
  const partialWeeks = weekCandidates
    .filter((week) => !week.isFullWeek)
    .sort((a, b) => b.inMonthDays.length - a.inMonthDays.length);
  const selectedWeeks = fullWeeks.length >= 4 ? fullWeeks.slice(0, 4) : [...fullWeeks, ...partialWeeks.slice(0, 4 - fullWeeks.length)];
  const calendarRows = selectedWeeks
    .sort((a, b) => a.days[0] - b.days[0])
    .map((candidate, index) => {
      const weekStart = candidate.days[0];
      const weekEnd = candidate.days[6];
      const startText = dateFormatter.format(weekStart);
      const endText = dateFormatter.format(weekEnd);
      const startRange = `${weekStart.getDate()} de ${monthOnlyFormatter.format(weekStart)}`;
      const endRange = `${weekEnd.getDate()} de ${monthOnlyFormatter.format(weekEnd)}`;
      const label = `${monthName} - Semana ${index + 1}: ${startText} al ${endText}`;
      const key = `${year}-${month}-${index + 1}`;
      const availability = agendaAvailability[key] || {};
      return { days: candidate.days, week: { index: index + 1, startText, endText, startRange, endRange, label, availability } };
    });

  calendarMonthTitle.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarGrid.innerHTML = `
    <div class="calendar-weeks">
      ${calendarRows
    .map(
      ({ days, week }) => {
        if (!week) {
          return "";
        }

        const isFullyBooked = Object.keys(agendaTypes).every((typeKey) => week.availability[typeKey] === "full");

        return `
          <div class="week-card calendar-week available ${isFullyBooked ? "fully-booked-week" : ""}">
            <span class="week-range">
              <strong>Semana ${week.index}</strong>
              <span>${week.startRange} al ${week.endRange}</span>
            </span>
            <span class="agenda-type-actions">
              ${Object.entries(agendaTypes)
                .map(([typeKey, typeLabel]) => {
                  const isFull = week.availability[typeKey] === "full";
                  const agendaLabel = `${week.label} - ${typeLabel}`;
                  return `
                    <button
                      class="agenda-slot ${isFull ? "full-slot" : "available-slot"}"
                      type="button"
                      data-week="${agendaLabel}"
                      ${isFull ? "disabled" : ""}
                    >
                      <span>${typeLabel}</span>
                      <small>${isFull ? "Sin cupos" : "Cupos disponibles"}</small>
                    </button>
                  `;
                })
                .join("")}
            </span>
          </div>
        `;
      }
    )
    .join("")}
    </div>
  `;

  if (calendarMonthSelect) {
    calendarMonthSelect.value = String(visibleAgendaMonth.getMonth());
  }

  if (calendarYearSelect) {
    calendarYearSelect.value = String(visibleAgendaMonth.getFullYear());
  }

  agendaSelected.textContent = selectedWeek
    ? `Semana elegida: ${selectedWeek}. Se confirmara por WhatsApp.`
    : "Aun no has elegido semana.";

  calendarGrid.querySelectorAll(".agenda-slot").forEach((button) => {
    button.classList.toggle("selected", button.dataset.week === selectedWeek);
  });
}

cartOpenButton.addEventListener("click", () => {
  cartDrawer.hidden = false;
});

cartCloseButton.addEventListener("click", () => {
  cartDrawer.hidden = true;
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove-index]");
  if (!button) return;
  removeFromCart(Number(button.dataset.removeIndex));
});

if (cartPayment) {
  cartPayment.addEventListener("change", () => {
    paymentMethod = cartPayment.value;
    savePayment();
    renderCart();
  });
}

function storedReviews() {
  try {
    return JSON.parse(localStorage.getItem("lapinfluencerReviews") || "[]");
  } catch (error) {
    return [];
  }
}

function saveReviews(reviews) {
  localStorage.setItem("lapinfluencerReviews", JSON.stringify(reviews));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function starsFor(rating) {
  const value = Math.max(1, Math.min(5, Number(rating) || 5));
  return "★".repeat(value);
}

function renderCustomerReviews() {
  if (!customerReviews || !customerReviewsGrid) return;
  const reviews = storedReviews();
  customerReviews.hidden = reviews.length === 0;
  customerReviewsGrid.innerHTML = reviews
    .map(
      (review) => `
        <article class="review-card">
          <img src="${review.photo}" alt="Foto del pedido de ${escapeHtml(review.name)}" />
          <h4>${escapeHtml(review.name)}</h4>
          <div class="review-stars" aria-label="${review.rating} de 5 estrellas">${starsFor(review.rating)}</div>
          <p>“${escapeHtml(review.text)}”</p>
        </article>
      `
    )
    .join("");
}

function resizeReviewPhoto(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const image = new Image();
      image.onload = () => {
        const maxSize = 900;
        const scale = Math.min(1, maxSize / Math.max(image.width, image.height));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.width * scale);
        canvas.height = Math.round(image.height * scale);
        const context = canvas.getContext("2d");
        context.drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.86));
      };
      image.onerror = reject;
      image.src = reader.result;
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function setReviewMessage(text, type) {
  if (!reviewMessage) return;
  reviewMessage.textContent = text;
  reviewMessage.className = `review-form-message ${type || ""}`.trim();
}

function setReviewRating(value) {
  if (!reviewRating || !reviewStars) return;
  const rating = Math.max(1, Math.min(5, Number(value) || 5));
  reviewRating.value = String(rating);
  reviewStars.querySelectorAll("button").forEach((button) => {
    const active = Number(button.dataset.rating) <= rating;
    button.classList.toggle("active", active);
    button.setAttribute("aria-checked", Number(button.dataset.rating) === rating ? "true" : "false");
  });
}

if (reviewKeyToggle && reviewKey) {
  reviewKeyToggle.addEventListener("click", () => {
    const showing = reviewKey.type === "text";
    reviewKey.type = showing ? "password" : "text";
    reviewKeyToggle.setAttribute("aria-label", showing ? "Mostrar clave" : "Ocultar clave");
    reviewKeyToggle.classList.toggle("active", !showing);
  });
}

if (reviewStars) {
  reviewStars.addEventListener("click", (event) => {
    const button = event.target.closest("button[data-rating]");
    if (!button) return;
    setReviewRating(button.dataset.rating);
  });
  setReviewRating(reviewRating?.value || 5);
}

if (reviewForm) {
  reviewForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const key = reviewKey.value.trim().toUpperCase();
    if (key !== reviewAccessKey) {
      setReviewMessage("Clave incorrecta. Pide la clave a Cata para publicar tu reseña.", "error");
      return;
    }

    const file = reviewPhoto.files[0];
    if (!file) {
      setReviewMessage("Agrega una foto de tu pedido para publicar la reseña.", "error");
      return;
    }

    try {
      const photo = await resizeReviewPhoto(file);
      const reviews = storedReviews();
      reviews.unshift({
        name: reviewName.value.trim(),
        rating: reviewRating.value,
        text: reviewText.value.trim(),
        photo,
        createdAt: new Date().toISOString()
      });
      saveReviews(reviews.slice(0, 24));
      renderCustomerReviews();
      reviewForm.reset();
      setReviewRating(5);
      setReviewMessage("Reseña publicada. Muchas gracias por compartir tu pedido.", "success");
    } catch (error) {
      setReviewMessage("No pude cargar esa foto. Prueba con otra imagen más liviana.", "error");
    }
  });
}

if (calendarGrid) {
  calendarGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".agenda-slot");
    if (!button || button.disabled) return;
    selectedWeek = button.dataset.week;
    localStorage.setItem("lapinfluencerAgenda", selectedWeek);
    renderAgenda();
    renderCart();
  });
}

function setupCalendarSelectors() {
  if (!calendarMonthSelect || !calendarYearSelect) return;

  calendarYearSelect.innerHTML = "";
  for (let year = firstAgendaMonth.getFullYear(); year <= lastAgendaMonth.getFullYear(); year += 1) {
    calendarYearSelect.insertAdjacentHTML("beforeend", `<option value="${year}">${year}</option>`);
  }

  updateMonthOptions();

  calendarYearSelect.addEventListener("change", () => {
    updateMonthOptions();
    visibleAgendaMonth = new Date(Number(calendarYearSelect.value), Number(calendarMonthSelect.value), 1);
    renderAgenda();
  });

  calendarMonthSelect.addEventListener("change", () => {
    visibleAgendaMonth = new Date(Number(calendarYearSelect.value), Number(calendarMonthSelect.value), 1);
    renderAgenda();
  });
}

renderCart();
renderCustomerReviews();
setupCalendarSelectors();
renderAgenda();

function updateMonthOptions() {
  if (!calendarMonthSelect || !calendarYearSelect) return;

  const selectedYear = Number(calendarYearSelect.value || visibleAgendaMonth.getFullYear());
  calendarMonthSelect.innerHTML = "";

  monthNames.forEach((name, monthIndex) => {
    const monthDate = new Date(selectedYear, monthIndex, 1);
    if (monthDate < firstAgendaMonth || monthDate > lastAgendaMonth) return;
    if (!monthHasAvailability(monthDate)) return;
    const label = name.charAt(0).toUpperCase() + name.slice(1);
    calendarMonthSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${monthIndex}">${label}</option>`
    );
  });

  const visibleStillAllowed =
    visibleAgendaMonth.getFullYear() === selectedYear &&
    visibleAgendaMonth >= firstAgendaMonth &&
    visibleAgendaMonth <= lastAgendaMonth &&
    monthHasAvailability(visibleAgendaMonth);

  if (visibleStillAllowed) {
    calendarMonthSelect.value = String(visibleAgendaMonth.getMonth());
  } else {
    calendarMonthSelect.value = calendarMonthSelect.options[0]?.value || "0";
    visibleAgendaMonth = new Date(selectedYear, Number(calendarMonthSelect.value), 1);
  }
}
