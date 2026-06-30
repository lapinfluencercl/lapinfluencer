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
const cartContinueButton = document.querySelector("#cart-continue-button");
const cartAgenda = document.querySelector("#cart-agenda");
const cartTotal = document.querySelector("#cart-total");
const cartFinal = document.querySelector("#cart-final");
const cartDeposit = document.querySelector("#cart-deposit");
const cartWarning = document.querySelector("#cart-warning");
const cartCoupon = document.querySelector("#cart-coupon");
const cartCouponApply = document.querySelector("#cart-coupon-apply");
const cartCouponMessage = document.querySelector("#cart-coupon-message");
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
let selectedWeekKey = localStorage.getItem("lapinfluencerAgendaKey") || "";
let selectedWeekType = localStorage.getItem("lapinfluencerAgendaType") || "";
let selectedAgendaSlots = JSON.parse(localStorage.getItem("lapinfluencerAgendaSlots") || "{}");
let couponCode = "";
let appliedCoupon = null;
let couponStatus = "";
let coupons = [];
let agendaCompatibilityNotice = "";
const EMOJI_ARTIST = "\u{1F469}\u{1F3FB}\u200D\u{1F3A8}";
const EMOJI_WRITE = "\u270D\u{1F3FB}";
const EMOJI_TICKET = "\u{1F39F}\uFE0F";
const EMOJI_GREEN = "\u{1F7E2}";
const EMOJI_MONEY = "\u{1F4B8}";
const EMOJI_CALENDAR = "\u{1F4C5}";
const EMOJI_SPIRAL_CALENDAR = "\u{1F5D3}\uFE0F";
const EMOJI_SPARKLES = "\u2728";
const today = new Date();
const firstAgendaMonth = new Date(today.getFullYear(), today.getMonth(), 1);
const lastAgendaMonth = new Date(today.getFullYear(), today.getMonth() + 17, 1);
let visibleAgendaMonth = new Date(firstAgendaMonth);
let agendaAvailability = {};
const agendaTypes = {
  pintadas: "Pintura",
  esculpidas: "Escultura"
};
let agendaModal = null;
let agendaModalBody = null;
let agendaModalMonth = new Date(firstAgendaMonth);
let mixedSeparateMode = false;
const monthNames = Array.from({ length: 12 }, (_, index) =>
  new Date(2026, index, 1).toLocaleDateString("es-CL", { month: "long" })
);

function startOfDay(date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function agendaWeeksForMonth(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const weekCandidates = [];
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

  return (fullWeeks.length >= 4 ? fullWeeks.slice(0, 4) : [...fullWeeks, ...partialWeeks.slice(0, 4 - fullWeeks.length)])
    .sort((a, b) => a.days[0] - b.days[0]);
}

function isPastAgendaWeek(days) {
  const weekEnd = days[6];
  return startOfDay(weekEnd) < startOfDay(new Date());
}

function monthHasAvailability(monthDate) {
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  return agendaWeeksForMonth(monthDate).some((weekCandidate, index) => {
    if (isPastAgendaWeek(weekCandidate.days)) return false;
    const availability = agendaAvailability[agendaKey(year, month, index + 1)] || {};
    const isFull = Object.keys(agendaTypes).every((typeKey) => availability[typeKey] === "full");
    return !isFull;
  });
}

function agendaKey(year, monthIndex, week) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-semana-${week}`;
}

function agendaRangeText(weekStart, weekEnd, monthOnlyFormatter) {
  const startMonth = monthOnlyFormatter.format(weekStart);
  const endMonth = monthOnlyFormatter.format(weekEnd);
  if (startMonth === endMonth) {
    return `${weekStart.getDate()} al ${weekEnd.getDate()} de ${endMonth}`;
  }
  return `${weekStart.getDate()} de ${startMonth} al ${weekEnd.getDate()} de ${endMonth}`;
}

function agendaDisplayText({ weekIndex, monthLabel, weekStart, weekEnd, typeLabel, monthOnlyFormatter }) {
  return `Agendado para: semana ${weekIndex} de ${monthLabel} (${weekStart.getDate()}-${weekEnd.getDate()}) - cupo ${typeLabel.toLowerCase()}`;
}

function agendaSlotData({ weekIndex, monthLabel, weekStart, weekEnd, typeKey, monthOnlyFormatter }) {
  const typeLabel = agendaTypes[typeKey];
  const base = `semana ${weekIndex} de ${monthLabel} (${weekStart.getDate()}-${weekEnd.getDate()})`;
  return {
    type: typeKey,
    typeLabel,
    base,
    text: `Agendado para: ${base} - cupo ${typeLabel.toLowerCase()}`
  };
}

function saveAgendaSlots() {
  localStorage.setItem("lapinfluencerAgendaSlots", JSON.stringify(selectedAgendaSlots));
}

function migrateLegacyAgendaSelection() {
  if (selectedWeek && selectedWeekType && !selectedAgendaSlots[selectedWeekType]) {
    selectedAgendaSlots[selectedWeekType] = {
      type: selectedWeekType,
      typeLabel: agendaTypes[selectedWeekType] || selectedWeekType,
      base: selectedWeek.replace(/^Agendado para:\s*/i, "").replace(/\s-\scupo\s.+$/i, ""),
      text: selectedWeek
    };
    saveAgendaSlots();
  }
}

function clearSelectedAgenda() {
  selectedWeek = "";
  selectedWeekKey = "";
  selectedWeekType = "";
  selectedAgendaSlots = {};
  localStorage.removeItem("lapinfluencerAgenda");
  localStorage.removeItem("lapinfluencerAgendaKey");
  localStorage.removeItem("lapinfluencerAgendaType");
  localStorage.removeItem("lapinfluencerAgendaSlots");
}

function selectedAgendaIsAvailable() {
  if (!selectedWeek) return true;
  if (!selectedWeekKey || !selectedWeekType) return false;
  const match = selectedWeekKey.match(/^(\d{4})-(\d{2})-semana-(\d+)$/);
  if (!match) return false;
  const year = Number(match[1]);
  const monthIndex = Number(match[2]) - 1;
  const weekIndex = Number(match[3]) - 1;
  const week = agendaWeeksForMonth(new Date(year, monthIndex, 1))[weekIndex];
  if (!week || isPastAgendaWeek(week.days)) return false;
  const availability = agendaAvailability[selectedWeekKey] || {};
  return availability[selectedWeekType] !== "full";
}

function firstAvailableAgendaMonth() {
  const cursor = new Date(firstAgendaMonth);
  while (cursor <= lastAgendaMonth) {
    if (monthHasAvailability(cursor)) return new Date(cursor);
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return new Date(firstAgendaMonth);
}

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
      <span>Selecciona una opción</span>
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
      const action = hasOptions ? "Ver opciones" : "Ver más";
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
    <aside class="catalog-note">Para medidas especiales, ideas personalizadas o detalles fuera del catálogo, agrega la opción más cercana y lo coordinamos por WhatsApp.</aside>
  `;
  optionView.innerHTML = optionView.innerHTML.replace(/\u00c2\u00bf/g, "\u00bf");
}

function renderOptions(product) {
  optionView.innerHTML = `
    <h4>${product.name}: opciones</h4>
    ${renderOptionGroups(product)}
    ${product.notice ? `<aside class="catalog-note">${product.notice}</aside>` : ""}
    <aside class="catalog-note">Para medidas especiales, ideas personalizadas o detalles fuera del catálogo, agrega la opción más cercana y lo coordinamos por WhatsApp.</aside>
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

function priceAmount(price) {
  return (String(price || "").match(/\d{1,3}(?:\.\d{3})+/g) || []).reduce((total, value) => total + Number(value.replace(/\./g, "")), 0);
}

function formatCurrency(value) {
  return `${value.toLocaleString("es-CL")} CLP`;
}

function cartTotalAmount() {
  return cart.reduce((total, item) => total + priceAmount(item.price) * item.quantity, 0);
}

function normalizedCoupon(value) {
  return String(value || "").trim().toUpperCase();
}

function couponDescription(coupon) {
  if (!coupon) return "";
  if (coupon.description) return coupon.description;
  return coupon.type === "fixed" ? `${formatCurrency(Number(coupon.value) || 0)} de descuento` : `${Number(coupon.value) || 0}% de descuento`;
}

function findCoupon(code) {
  const normalized = normalizedCoupon(code);
  return coupons.find((coupon) => normalizedCoupon(coupon.code) === normalized) || null;
}

function calculateCouponDiscount(coupon, total) {
  if (!coupon || coupon.active === false) return 0;
  const value = Number(coupon.value) || 0;
  if (coupon.type === "fixed") return Math.min(total, Math.max(0, value));
  if (coupon.type === "percent") return Math.min(total, Math.max(0, Math.round(total * value / 100)));
  return 0;
}

function applyCouponFromInput(value) {
  couponCode = normalizedCoupon(value);
  appliedCoupon = null;
  couponStatus = "";
  if (!couponCode) return;
  const coupon = findCoupon(couponCode);
  if (!coupon) {
    couponStatus = "Cupón no válido.";
    return;
  }
  if (coupon.active === false) {
    couponStatus = "Cupón inactivo.";
    return;
  }
  appliedCoupon = coupon;
  couponStatus = `Cupón aplicado: ${couponDescription(coupon)}.`;
}

function cartDiscountAmount() {
  return calculateCouponDiscount(appliedCoupon, cartTotalAmount());
}

function cartFinalAmount() {
  return Math.max(0, cartTotalAmount() - cartDiscountAmount());
}

function selectedAgendaType() {
  if (selectedWeekType) return selectedWeekType;
  if (selectedWeek.toLowerCase().includes("pintura")) return "pintadas";
  if (selectedWeek.toLowerCase().includes("escultura")) return "esculpidas";
  return "";
}

function agendaCategoryLabel(category) {
  return category === "pintadas" ? "Pintura" : category === "esculpidas" ? "Escultura" : "sin tipo";
}

function cartCategoryMode() {
  const categories = [...new Set(cart.map((item) => item.category).filter(Boolean))];
  if (!categories.length) return "";
  if (categories.length > 1) return "mixed";
  return categories[0];
}

function requiredAgendaTypes() {
  const mode = cartCategoryMode();
  if (mode === "mixed") return ["pintadas", "esculpidas"];
  if (mode) return [mode];
  return [];
}

function cartCategoryWarning() {
  const mode = cartCategoryMode();
  if (mode === "mixed") {
    return "Tu pedido incluye un producto pintado y otro esculpido. Te recomendamos tomar la misma fecha para ambos cupos, así la entrega se realiza de forma conjunta.";
  }
  return "";
}

function agendaTypeAllowedForCart(typeKey) {
  const mode = cartCategoryMode();
  if (!mode) return true;
  if (mode === "mixed") return typeKey === "pintadas" || typeKey === "esculpidas";
  return mode === typeKey;
}

function agendaSelectionsComplete() {
  const required = requiredAgendaTypes();
  if (!required.length) return false;
  return required.every((typeKey) => selectedAgendaSlots[typeKey]?.text);
}

function selectedAgendaMatchesCart() {
  const required = requiredAgendaTypes();
  if (!required.length) return true;
  const selectedTypes = Object.keys(selectedAgendaSlots).filter((typeKey) => selectedAgendaSlots[typeKey]?.text);
  return selectedTypes.every((typeKey) => required.includes(typeKey));
}

function incompatibleAgendaMessage() {
  const mode = cartCategoryMode();
  if (mode === "mixed") return cartCategoryWarning();
  if (mode === "pintadas") return "Este producto requiere cupo pintura.";
  if (mode === "esculpidas") return "Este producto requiere cupo escultura.";
  return "Selecciona una fecha compatible con tu pedido.";
}

function cleanCartItemName(name) {
  return String(name || "")
    .replace(/\s*-\s*(?:Â¿|¿)?Qu[eé] incluye\??/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function syncAgendaSelectionWithCart() {
  const required = requiredAgendaTypes();
  let changed = false;
  Object.keys(selectedAgendaSlots).forEach((typeKey) => {
    if (!required.includes(typeKey)) {
      delete selectedAgendaSlots[typeKey];
      changed = true;
    }
  });

  if (changed) {
    saveAgendaSlots();
    if (required.length === 1 && selectedAgendaSlots[required[0]]) {
      selectedWeek = selectedAgendaSlots[required[0]].text;
      selectedWeekType = required[0];
      localStorage.setItem("lapinfluencerAgenda", selectedWeek);
      localStorage.setItem("lapinfluencerAgendaType", selectedWeekType);
    } else {
      selectedWeek = "";
      selectedWeekType = "";
      localStorage.removeItem("lapinfluencerAgenda");
      localStorage.removeItem("lapinfluencerAgendaType");
      localStorage.removeItem("lapinfluencerAgendaKey");
    }
  }
  return changed;
}

function selectAgendaSlot(typeKey, slot) {
  selectedAgendaSlots[typeKey] = slot;
  saveAgendaSlots();

  if (requiredAgendaTypes().length === 1) {
    selectedWeek = slot.text;
    selectedWeekType = typeKey;
    localStorage.setItem("lapinfluencerAgenda", selectedWeek);
    localStorage.setItem("lapinfluencerAgendaType", selectedWeekType);
  } else {
    selectedWeek = "";
    selectedWeekType = "";
    localStorage.removeItem("lapinfluencerAgenda");
    localStorage.removeItem("lapinfluencerAgendaType");
  }
}

function cartAgendaHtml() {
  const mode = cartCategoryMode();
  if (!cart.length) return "";
  if (mode === "mixed") {
    const pintura = selectedAgendaSlots.pintadas?.base || "falta seleccionar fecha";
    const escultura = selectedAgendaSlots.esculpidas?.base || "falta seleccionar fecha";
    if (!agendaSelectionsComplete()) {
      const recommended = findRecommendedMixedWeek();
      const recommendation = recommended
        ? `<br><strong>Semana recomendada: ${recommended.pintura.data.base}</strong>
          <button class="button primary mixed-cart-action" type="button" data-cart-agenda-both data-pintura='${JSON.stringify(recommended.pintura.data)}' data-escultura='${JSON.stringify(recommended.escultura.data)}'>Agendar ambos cupos en esta fecha</button>
          <button class="button secondary mixed-cart-action" type="button" data-cart-agenda-separate>Quiero agendar por separado</button>`
        : `<br><span>No encontré una semana con ambos cupos disponibles. Puedes agendar por separado.</span>
          <button class="button secondary mixed-cart-action" type="button" data-cart-agenda-separate>Quiero agendar por separado</button>`;
      return `${cartCategoryWarning()}${recommendation}`;
    }
    return `Agendado para:<br>• Pintura: ${pintura}<br>• Escultura: ${escultura}<br>Tu pedido será enviado cuando ambos productos estén listos.<button class="button secondary mixed-cart-action" type="button" data-cart-agenda-clear>Cambiar fecha seleccionada</button>`;
  }
  const typeKey = requiredAgendaTypes()[0];
  return selectedAgendaSlots[typeKey]?.text
    ? `${selectedAgendaSlots[typeKey].text}<button class="button secondary mixed-cart-action" type="button" data-cart-agenda-clear>Cambiar fecha seleccionada</button>`
    : "";
}

function whatsappAgendaText() {
  const mode = cartCategoryMode();
  if (mode === "mixed") {
    return `Agenda:\n- Pintura: ${selectedAgendaSlots.pintadas?.base || "por coordinar"}\n- Escultura: ${selectedAgendaSlots.esculpidas?.base || "por coordinar"}\n\nTu pedido será enviado cuando ambos productos estén listos.`;
  }
  const typeKey = requiredAgendaTypes()[0];
  return selectedAgendaSlots[typeKey]?.text || selectedWeek || "por coordinar";
}

function monthRange() {
  const months = [];
  const cursor = new Date(firstAgendaMonth);
  while (cursor <= lastAgendaMonth) {
    months.push(new Date(cursor));
    cursor.setMonth(cursor.getMonth() + 1);
  }
  return months;
}

function weekSlotInfo(monthDate, candidate, index, typeKey) {
  const monthOnlyFormatter = new Intl.DateTimeFormat("es-CL", { month: "long" });
  const monthLabel = monthOnlyFormatter.format(monthDate);
  const year = monthDate.getFullYear();
  const month = monthDate.getMonth();
  const key = agendaKey(year, month, index + 1);
  const availability = agendaAvailability[key] || {};
  const isPast = isPastAgendaWeek(candidate.days);
  const isFull = availability[typeKey] === "full";
  const data = agendaSlotData({
    weekIndex: index + 1,
    monthLabel,
    weekStart: candidate.days[0],
    weekEnd: candidate.days[6],
    typeKey,
    monthOnlyFormatter
  });
  return { key, isPast, isFull, available: !isPast && !isFull, data, weekIndex: index + 1, monthLabel };
}

function findRecommendedMixedWeek() {
  for (const monthDate of monthRange()) {
    const weeks = agendaWeeksForMonth(monthDate);
    for (let index = 0; index < weeks.length; index += 1) {
      const pintura = weekSlotInfo(monthDate, weeks[index], index, "pintadas");
      const escultura = weekSlotInfo(monthDate, weeks[index], index, "esculpidas");
      if (pintura.available && escultura.available) {
        return { monthDate, week: weeks[index], index, pintura, escultura };
      }
    }
  }
  return null;
}

function createAgendaModal() {
  if (agendaModal) return;
  agendaModal = document.createElement("div");
  agendaModal.className = "agenda-modal";
  agendaModal.hidden = true;
  agendaModal.innerHTML = `
    <div class="agenda-modal-panel" role="dialog" aria-modal="true" aria-labelledby="agenda-modal-title">
      <div class="agenda-modal-header">
        <h2 id="agenda-modal-title">Selecciona fecha para agendar tu pedido</h2>
        <button class="icon-button" type="button" data-agenda-modal-close aria-label="Cerrar agenda">x</button>
      </div>
      <div class="agenda-modal-body"></div>
    </div>
  `;
  document.body.append(agendaModal);
  agendaModalBody = agendaModal.querySelector(".agenda-modal-body");
  agendaModal.addEventListener("click", (event) => {
    if (event.target === agendaModal || event.target.closest("[data-agenda-modal-close]")) {
      closeAgendaModal();
    }
  });
}

function agendaModalControlsHtml() {
  const selectedYear = agendaModalMonth.getFullYear();
  const selectedMonth = agendaModalMonth.getMonth();
  const years = [...new Set(monthRange().map((monthDate) => monthDate.getFullYear()))];
  const months = monthRange().filter((monthDate) => monthDate.getFullYear() === selectedYear);
  return `
    <div class="calendar-controls agenda-modal-controls">
      <label><span>Mes</span><select data-modal-month>${months.map((monthDate) => `<option value="${monthDate.getMonth()}" ${monthDate.getMonth() === selectedMonth ? "selected" : ""}>${monthNames[monthDate.getMonth()].charAt(0).toUpperCase() + monthNames[monthDate.getMonth()].slice(1)}</option>`).join("")}</select></label>
      <label><span>Año</span><select data-modal-year>${years.map((year) => `<option value="${year}" ${year === selectedYear ? "selected" : ""}>${year}</option>`).join("")}</select></label>
    </div>
  `;
}

function renderAgendaModal() {
  if (!agendaModalBody) return;
  const mode = cartCategoryMode();
  const required = requiredAgendaTypes();
  const recommended = mode === "mixed" ? findRecommendedMixedWeek() : null;
  const mixedStatus = mode === "mixed"
    ? `<div class="agenda-modal-status">
        <strong>${cartCategoryWarning()}</strong>
        <span>Pintura: ${selectedAgendaSlots.pintadas?.base || "falta seleccionar fecha"}</span>
        <span>Escultura: ${selectedAgendaSlots.esculpidas?.base || "falta seleccionar fecha"}</span>
      </div>`
    : "";
  const recommendation = recommended
    ? `<div class="agenda-recommendation">
        <strong>Semana recomendada: ${recommended.pintura.data.base}</strong>
        <button class="button primary" type="button" data-agenda-both="${recommended.pintura.data.base}" data-pintura='${JSON.stringify(recommended.pintura.data)}' data-escultura='${JSON.stringify(recommended.escultura.data)}'>Agendar ambos cupos en esta fecha</button>
      </div>`
    : mode === "mixed" ? `<div class="agenda-recommendation"><p>No encontré una semana con ambos cupos disponibles. Puedes elegir fechas por separado.</p></div>` : "";

  agendaModalBody.innerHTML = `
    ${mixedStatus}
    ${recommendation}
    ${mode === "mixed" ? `<button class="text-button agenda-separate-button" type="button" data-agenda-separate>Quiero agendar por separado</button>` : ""}
    ${mode !== "mixed" || mixedSeparateMode ? agendaModalControlsHtml() : ""}
    <div class="agenda-modal-weeks"></div>
  `;

  if (mode === "mixed" && !mixedSeparateMode) {
    bindAgendaModalActions();
    return;
  }

  renderAgendaModalWeeks(required);
  bindAgendaModalActions();
}

function renderAgendaModalWeeks(required) {
  const weeksContainer = agendaModalBody.querySelector(".agenda-modal-weeks");
  if (!weeksContainer) return;
  const weeks = agendaWeeksForMonth(agendaModalMonth);
  weeksContainer.innerHTML = "";
  weeks.forEach((candidate, index) => {
    const card = document.createElement("div");
    card.className = "week-card calendar-week available";
    const range = document.createElement("span");
    range.className = "week-range";
    range.innerHTML = `<strong>Semana ${index + 1}</strong><span>${candidate.days[0].getDate()} al ${candidate.days[6].getDate()}</span>`;
    const actions = document.createElement("span");
    actions.className = "agenda-type-actions";
    Object.entries(agendaTypes).forEach(([typeKey, typeLabel]) => {
      const info = weekSlotInfo(agendaModalMonth, candidate, index, typeKey);
      const compatible = required.includes(typeKey) || !required.length;
      const disabled = !compatible || !info.available;
      const button = document.createElement("button");
      button.className = `agenda-slot ${disabled ? "full-slot" : "available-slot"}`;
      button.type = "button";
      button.disabled = disabled;
      button.dataset.modalAgendaType = typeKey;
      button.dataset.modalAgendaSlot = JSON.stringify(info.data);
      button.innerHTML = `<span>${typeLabel}</span><small>${info.isPast ? "Pasada" : info.isFull ? "Sin cupos" : compatible ? "Cupos disponibles" : "No corresponde"}</small>`;
      actions.append(button);
    });
    card.append(range, actions);
    weeksContainer.append(card);
  });
}

function bindAgendaModalActions() {
  agendaModalBody.querySelector("[data-agenda-separate]")?.addEventListener("click", () => {
    mixedSeparateMode = true;
    renderAgendaModal();
  });
  agendaModalBody.querySelector("[data-agenda-both]")?.addEventListener("click", (event) => {
    const button = event.currentTarget;
    selectAgendaSlot("pintadas", JSON.parse(button.dataset.pintura));
    selectAgendaSlot("esculpidas", JSON.parse(button.dataset.escultura));
    agendaCompatibilityNotice = "";
    closeAgendaModal();
    renderCart();
  });
  agendaModalBody.querySelector("[data-modal-year]")?.addEventListener("change", (event) => {
    const year = Number(event.target.value);
    const firstMonthForYear = monthRange().find((monthDate) => monthDate.getFullYear() === year);
    agendaModalMonth = new Date(year, firstMonthForYear?.getMonth() ?? 0, 1);
    renderAgendaModal();
  });
  agendaModalBody.querySelector("[data-modal-month]")?.addEventListener("change", (event) => {
    agendaModalMonth = new Date(agendaModalMonth.getFullYear(), Number(event.target.value), 1);
    renderAgendaModal();
  });
  agendaModalBody.querySelectorAll("[data-modal-agenda-type]").forEach((button) => {
    button.addEventListener("click", () => {
      selectAgendaSlot(button.dataset.modalAgendaType, JSON.parse(button.dataset.modalAgendaSlot));
      agendaCompatibilityNotice = "";
      if (agendaSelectionsComplete()) closeAgendaModal();
      renderCart();
      renderAgendaModal();
    });
  });
}

function cartTypeWarning() {
  const mode = cartCategoryMode();
  if (mode === "mixed" && !agendaSelectionsComplete()) return "";
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

function cartNeedsAgendaDate() {
  return cart.length > 0 && !agendaSelectionsComplete();
}

function scrollToAgendaFromCart() {
  cartDrawer.hidden = true;
  const agendaSection = document.querySelector("#agenda");
  if (agendaSection) {
    agendaSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  if (window.location.hash !== "#agenda") {
    history.pushState(null, "", "#agenda");
  }
}

function openAgendaModal(startSeparate = false) {
  if (!cart.length) return;
  createAgendaModal();
  mixedSeparateMode = startSeparate;
  agendaModalMonth = new Date(firstAgendaMonth);
  renderAgendaModal();
  agendaModal.hidden = false;
}

function closeAgendaModal() {
  if (agendaModal) {
    agendaModal.hidden = true;
  }
}

function addToCart(name, price, category = currentCategory) {
  name = cleanCartItemName(name);
  const existing = cart.find((item) => item.name === name && item.price === price && item.category === category);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1, category });
  }
  if (syncAgendaSelectionWithCart()) {
    agendaCompatibilityNotice = "Selecciona una fecha compatible con tu pedido.";
  }
  saveCart();
  renderCart();
  cartDrawer.hidden = false;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  if (syncAgendaSelectionWithCart()) {
    agendaCompatibilityNotice = "Selecciona una fecha compatible con tu pedido.";
  }
  saveCart();
  renderCart();
}

function cartMessage() {
  if (!cart.length) {
    const emptyMessage = `¡Hola Cata${EMOJI_ARTIST}!\nMe interesa agendar${EMOJI_WRITE}.\n\n¡Quedo atent@ a tu confirmación, muchas gracias! ${EMOJI_SPIRAL_CALENDAR}${EMOJI_SPARKLES}`;
    return encodeURIComponent(emptyMessage);
  }
  const lines = cart.map((item) => `- ${item.quantity} x ${cleanCartItemName(item.name)} (${item.price})`);
  const agendaLine = whatsappAgendaText();
  const productLines = lines.length ? lines.join("\n") : "Aún no seleccioné productos.";
  const discount = cartDiscountAmount();
  const finalTotal = cartFinalAmount();
  const deposit = Math.ceil(finalTotal / 2);
  const discountLine = discount && appliedCoupon ? `\n${EMOJI_TICKET}Cupón aplicado: ${appliedCoupon.code} - ${couponDescription(appliedCoupon)} (-${formatCurrency(discount)})\n` : "";
  const message = `¡Hola Cata${EMOJI_ARTIST}!
Me interesa agendar${EMOJI_WRITE}:

${productLines}

${discountLine}${EMOJI_GREEN}Total del pedido: ${formatCurrency(finalTotal)}

${EMOJI_MONEY}50% para agendar: ${formatCurrency(deposit)}

${EMOJI_CALENDAR}${agendaLine}

¡Quedo atent@ a tu confirmación, muchas gracias! ${EMOJI_SPIRAL_CALENDAR}${EMOJI_SPARKLES}`;
  return encodeURIComponent(message);
}
function renderCart() {
  migrateLegacyAgendaSelection();
  if (syncAgendaSelectionWithCart()) {
    agendaCompatibilityNotice = "Selecciona una fecha compatible con tu pedido.";
  }
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = totalItems;
  cartEmpty.hidden = cart.length > 0;
  if (cartAgenda) {
    const agendaHtml = cartAgendaHtml();
    cartAgenda.hidden = !agendaHtml;
    cartAgenda.innerHTML = agendaHtml;
  }
  const subtotal = cartTotalAmount();
  const discount = cartDiscountAmount();
  const finalTotal = cartFinalAmount();
  if (cartTotal) {
    cartTotal.hidden = !discount;
    cartTotal.textContent = discount ? `Descuento aplicado: -${formatCurrency(discount)}` : "";
  }
  if (cartFinal) {
    cartFinal.textContent = `Total del pedido: ${formatCurrency(finalTotal)}`;
  }
  if (cartDeposit) {
    cartDeposit.hidden = true;
    cartDeposit.textContent = "";
  }
  if (cartCoupon) {
    cartCoupon.value = couponCode;
  }
  if (cartCouponMessage) {
    const couponField = cartCouponMessage.closest(".coupon-field");
    couponField?.classList.remove("valid", "invalid");
    if (!couponCode) {
      cartCouponMessage.textContent = "";
    } else if (appliedCoupon) {
      cartCouponMessage.textContent = couponStatus;
      couponField?.classList.add("valid");
    } else {
      cartCouponMessage.textContent = couponStatus || "Cupón no válido.";
      couponField?.classList.add("invalid");
    }
  }
  if (cartWarning) {
    const warning = cartNeedsAgendaDate() ? "" : cartTypeWarning() || agendaCompatibilityNotice;
    cartWarning.hidden = !warning;
    cartWarning.innerHTML = cartTypeWarningHtml(warning);
  }
  const needsAgendaDate = cartNeedsAgendaDate();
  const warning = cartTypeWarning();
  const disabledWarning = Boolean(warning) && !needsAgendaDate;
  cartWhatsapp.classList.toggle("disabled", disabledWarning);
  cartWhatsapp.setAttribute("aria-disabled", disabledWarning ? "true" : "false");
  if (!cart.length) {
    cartWhatsapp.href = "#productos";
    cartWhatsapp.target = "_self";
    cartWhatsapp.textContent = "Agrega productos al carrito";
  } else if (needsAgendaDate) {
    cartWhatsapp.href = "#agenda";
    cartWhatsapp.target = "_self";
    cartWhatsapp.textContent = "Seleccionar fecha a agendar";
  } else {
    cartWhatsapp.target = warning ? "_self" : "_blank";
    cartWhatsapp.href = warning ? "#" : `https://wa.me/56985781006?text=${cartMessage()}`;
    cartWhatsapp.textContent = "Agendar pedido";
  }

  cartItems.innerHTML = cart
    .map(
      (item, index) => `
        <article class="cart-item">
          <div>
            <h3>${cleanCartItemName(item.name)}</h3>
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
  const visibleMonthLabel = monthOnlyFormatter.format(visibleAgendaMonth);
  const year = visibleAgendaMonth.getFullYear();
  const month = visibleAgendaMonth.getMonth();
  const dateFormatter = new Intl.DateTimeFormat("es-CL", {
    weekday: "long",
    day: "numeric",
    month: "long"
  });

  const calendarRows = agendaWeeksForMonth(visibleAgendaMonth)
    .map((candidate, index) => {
      const weekStart = candidate.days[0];
      const weekEnd = candidate.days[6];
      const startText = dateFormatter.format(weekStart);
      const endText = dateFormatter.format(weekEnd);
      const startRange = `${weekStart.getDate()} de ${monthOnlyFormatter.format(weekStart)}`;
      const endRange = `${weekEnd.getDate()} de ${monthOnlyFormatter.format(weekEnd)}`;
      const label = `${monthName} - Semana ${index + 1}: ${startText} al ${endText}`;
      const key = agendaKey(year, month, index + 1);
      const availability = agendaAvailability[key] || {};
      const isPast = isPastAgendaWeek(candidate.days);
      return { days: candidate.days, week: { index: index + 1, startText, endText, startRange, endRange, label, availability, isPast } };
    });

  calendarMonthTitle.textContent = monthName.charAt(0).toUpperCase() + monthName.slice(1);
  calendarGrid.innerHTML = "";
  const weeksWrapper = document.createElement("div");
  weeksWrapper.className = "calendar-weeks";

  calendarRows.forEach(({ days, week }) => {
    if (!week) return;
    const isFullyBooked = week.isPast || Object.keys(agendaTypes).every((typeKey) => week.availability[typeKey] === "full");
    const weekCard = document.createElement("div");
    weekCard.className = `week-card calendar-week available ${isFullyBooked ? "fully-booked-week" : ""}`;

    const range = document.createElement("span");
    range.className = "week-range";
    const title = document.createElement("strong");
    title.textContent = `Semana ${week.index}`;
    const dates = document.createElement("span");
    dates.textContent = `${week.startRange} al ${week.endRange}`;
    range.append(title, dates);

    const actions = document.createElement("span");
    actions.className = "agenda-type-actions";

    Object.entries(agendaTypes).forEach(([typeKey, typeLabel]) => {
      const isFull = week.isPast || week.availability[typeKey] === "full";
      const isCompatible = agendaTypeAllowedForCart(typeKey);
      const isDisabled = isFull || !isCompatible;
      const agendaLabel = agendaDisplayText({
        weekIndex: week.index,
        monthLabel: visibleMonthLabel,
        weekStart: days[0],
        weekEnd: days[6],
        typeLabel,
        monthOnlyFormatter
      });
      const button = document.createElement("button");
      button.className = `agenda-slot ${isDisabled ? "full-slot" : "available-slot"}`;
      button.type = "button";
      button.dataset.week = agendaLabel;
      button.dataset.agendaBase = agendaSlotData({
        weekIndex: week.index,
        monthLabel: visibleMonthLabel,
        weekStart: days[0],
        weekEnd: days[6],
        typeKey,
        monthOnlyFormatter
      }).base;
      button.dataset.agendaKey = agendaKey(year, month, week.index);
      button.dataset.agendaType = typeKey;
      button.disabled = isDisabled;

      const label = document.createElement("span");
      label.textContent = typeLabel;
      const status = document.createElement("small");
      status.textContent = week.isPast
        ? "Pasada"
        : isFull
          ? "Sin cupos"
          : isCompatible
            ? "Cupos disponibles"
            : cartCategoryMode() === "mixed"
              ? "Separar pedidos"
              : "No corresponde";
      button.append(label, status);
      actions.append(button);
    });

    weekCard.append(range, actions);
    weeksWrapper.append(weekCard);
  });

  if (!weeksWrapper.children.length) {
    const emptyMessage = document.createElement("p");
    emptyMessage.className = "agenda-selected";
    emptyMessage.textContent = "No hay semanas disponibles para este mes.";
    weeksWrapper.append(emptyMessage);
  }

  calendarGrid.append(weeksWrapper);

  if (calendarMonthSelect) {
    calendarMonthSelect.value = String(visibleAgendaMonth.getMonth());
  }

  if (calendarYearSelect) {
    calendarYearSelect.value = String(visibleAgendaMonth.getFullYear());
  }

  if (!selectedAgendaIsAvailable()) {
    clearSelectedAgenda();
  }

  agendaSelected.textContent = selectedWeek
    ? selectedWeek
    : "Aún no has elegido semana.";

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

cartContinueButton?.addEventListener("click", () => {
  cartDrawer.hidden = true;
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-remove-index]");
  if (!button) return;
  removeFromCart(Number(button.dataset.removeIndex));
});

cartWarning?.addEventListener("click", (event) => {
  const link = event.target.closest('a[href="#agenda"]');
  if (!link) return;
  event.preventDefault();
  openAgendaModal();
});

cartAgenda?.addEventListener("click", (event) => {
  const clearButton = event.target.closest("[data-cart-agenda-clear]");
  if (clearButton) {
    clearSelectedAgenda();
    agendaCompatibilityNotice = "";
    renderCart();
    return;
  }
  const bothButton = event.target.closest("[data-cart-agenda-both]");
  if (bothButton) {
    selectAgendaSlot("pintadas", JSON.parse(bothButton.dataset.pintura));
    selectAgendaSlot("esculpidas", JSON.parse(bothButton.dataset.escultura));
    agendaCompatibilityNotice = "";
    renderCart();
    return;
  }
  const separateButton = event.target.closest("[data-cart-agenda-separate]");
  if (!separateButton) return;
  openAgendaModal(true);
});

cartWhatsapp.addEventListener("click", (event) => {
  if (!cartNeedsAgendaDate()) return;
  event.preventDefault();
  openAgendaModal();
});

if (cartCouponApply && cartCoupon) {
  cartCouponApply.addEventListener("click", () => {
    applyCouponFromInput(cartCoupon.value);
    renderCart();
  });

  cartCoupon.addEventListener("keydown", (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();
    applyCouponFromInput(cartCoupon.value);
    renderCart();
  });
}

if (calendarGrid) {
  calendarGrid.addEventListener("click", (event) => {
    const button = event.target.closest(".agenda-slot");
    if (!button || button.disabled) return;
    const typeKey = button.dataset.agendaType || "";
    selectAgendaSlot(typeKey, {
      type: typeKey,
      typeLabel: agendaTypes[typeKey] || typeKey,
      base: button.dataset.agendaBase || button.dataset.week,
      text: button.dataset.week
    });
    selectedWeekKey = button.dataset.agendaKey || "";
    agendaCompatibilityNotice = "";
    localStorage.setItem("lapinfluencerAgendaKey", selectedWeekKey);
    renderAgenda();
    renderCart();
    if (cart.length) {
      cartDrawer.hidden = false;
    }
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

loadCoupons().then(renderCart);
renderCart();
initializeAgenda();

async function loadCoupons() {
  try {
    const response = await fetch("cupones.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    coupons = Array.isArray(data.coupons) ? data.coupons : [];
  } catch (error) {
    coupons = [];
  }
}

async function initializeAgenda() {
  await loadAgendaAvailability();
  visibleAgendaMonth = new Date(firstAgendaMonth);
  setupCalendarSelectors();
  renderAgenda();
  renderCart();
}

async function loadAgendaAvailability() {
  try {
    const response = await fetch("agenda.json", { cache: "no-store" });
    if (!response.ok) {
      console.warn("No se pudo cargar agenda.json. La agenda se mostrará con disponibilidad por defecto.");
      return;
    }
    const data = await response.json();
    const nextAvailability = data.availability || data;
    if (nextAvailability && typeof nextAvailability === "object") {
      agendaAvailability = nextAvailability;
    }
  } catch (error) {
    // En archivo local algunos navegadores bloquean agenda.json; GitHub Pages lo carga normalmente.
    console.warn("agenda.json no cargó. Si abriste la web con file://, prueba con un servidor local. La agenda se mostrará con disponibilidad por defecto.", error);
  }
}

function updateMonthOptions() {
  if (!calendarMonthSelect || !calendarYearSelect) return;

  const selectedYear = Number(calendarYearSelect.value || visibleAgendaMonth.getFullYear());
  calendarMonthSelect.innerHTML = "";

  monthNames.forEach((name, monthIndex) => {
    const monthDate = new Date(selectedYear, monthIndex, 1);
    if (monthDate < firstAgendaMonth || monthDate > lastAgendaMonth) return;
    const label = name.charAt(0).toUpperCase() + name.slice(1);
    calendarMonthSelect.insertAdjacentHTML(
      "beforeend",
      `<option value="${monthIndex}">${label}</option>`
    );
  });

  const visibleStillAllowed =
    visibleAgendaMonth.getFullYear() === selectedYear &&
    visibleAgendaMonth >= firstAgendaMonth &&
    visibleAgendaMonth <= lastAgendaMonth;

  if (visibleStillAllowed) {
    calendarMonthSelect.value = String(visibleAgendaMonth.getMonth());
  } else {
    calendarMonthSelect.value = calendarMonthSelect.options[0]?.value || "0";
    visibleAgendaMonth = new Date(selectedYear, Number(calendarMonthSelect.value), 1);
  }
}
