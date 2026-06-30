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

function slugify(value) {
  return value
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function formatPrice(price) {
  if (!price || price.includes("CLP") || price.includes("completar")) return price;
  return `${price} CLP (IVA incluido)`;
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
  const blocks = ["small", "circle", "large"]
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
  return blocks;
}

function renderOptionGroups(product, cards) {
  const isLienzoProduct = product.name.includes("Lienzos");
  const groups = cards.reduce((items, option) => {
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

function optionGroups(cards) {
  return [...new Set(cards.map((card) => card.group).filter(Boolean))];
}

function renderGroupLanding(groups) {
  const groupImages = {
    "Retrato mascota": "assets/productos/lienzo-mascota.png",
    "Retrato persona": "assets/productos/lienzo-retrato-persona.png",
    "Retrato mascota y persona": "assets/productos/lienzo-persona-mascota.png"
  };
  return `
    <div class="option-grid">
      ${groups
        .map(
          (group) => `
            <article class="option-card option-type-card">
              <div class="option-image-space" aria-hidden="true">${groupImages[group] ? `<img src="${groupImages[group]}" alt="" />` : ""}</div>
              <h4>${group}</h4>
              <p>Ver medidas y opciones disponibles.</p>
              <a class="card-action option-link" href="opciones.html?categoria=${categoryKey}&producto=${productSlug}&tipo=${slugify(group)}">Ver detalles</a>
            </article>
          `
        )
        .join("")}
    </div>
  `;
}

function selectedGroupHero(group) {
  const heroImages = {
    "Retrato persona": "assets/productos/lienzo-retrato-persona.png",
    "Retrato mascota y persona": "assets/productos/lienzo-persona-mascota.png"
  };
  if (!heroImages[group]) return "";
  return `
    <div class="selected-group-hero" aria-hidden="true">
      <img src="${heroImages[group]}" alt="" />
    </div>
  `;
}

const params = new URLSearchParams(window.location.search);
const categoryKey = params.get("categoria");
const productSlug = params.get("producto");
const groupSlug = params.get("tipo");
const category = catalog[categoryKey];
const product = category?.products.find((item) => productMatchesSlug(item, productSlug));

const categoryEl = document.querySelector("#product-category");
const titleEl = document.querySelector("#product-title");
const summaryEl = document.querySelector("#product-summary");
const detailImageEl = document.querySelector("#product-detail-image");
const optionsEl = document.querySelector("#product-options");
const categoryBackLink = document.querySelector("#category-back-link");
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
let cart = JSON.parse(localStorage.getItem("lapinfluencerCart") || "[]");
let selectedWeek = localStorage.getItem("lapinfluencerAgenda") || "";
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
let agendaAvailability = {};
const agendaTypes = {
  pintadas: "Pintura",
  esculpidas: "Escultura"
};

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
  return startOfDay(days[6]) < startOfDay(new Date());
}

function agendaKey(year, monthIndex, week) {
  return `${year}-${String(monthIndex + 1).padStart(2, "0")}-semana-${week}`;
}

function agendaSlotData({ weekIndex, monthLabel, weekStart, weekEnd, typeKey }) {
  const typeLabel = agendaTypes[typeKey];
  const base = `semana ${weekIndex} de ${monthLabel} (${weekStart.getDate()}-${weekEnd.getDate()})`;
  return {
    type: typeKey,
    typeLabel,
    base,
    text: `Agendado para: ${base} - cupo ${typeLabel.toLowerCase()}`
  };
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
  const monthLabel = new Intl.DateTimeFormat("es-CL", { month: "long" }).format(monthDate);
  const key = agendaKey(monthDate.getFullYear(), monthDate.getMonth(), index + 1);
  const availability = agendaAvailability[key] || {};
  const isPast = isPastAgendaWeek(candidate.days);
  const isFull = availability[typeKey] === "full";
  const data = agendaSlotData({
    weekIndex: index + 1,
    monthLabel,
    weekStart: candidate.days[0],
    weekEnd: candidate.days[6],
    typeKey
  });
  return { available: !isPast && !isFull, data };
}

function findRecommendedMixedWeek() {
  for (const monthDate of monthRange()) {
    const weeks = agendaWeeksForMonth(monthDate);
    for (let index = 0; index < weeks.length; index += 1) {
      const pintura = weekSlotInfo(monthDate, weeks[index], index, "pintadas");
      const escultura = weekSlotInfo(monthDate, weeks[index], index, "esculpidas");
      if (pintura.available && escultura.available) return { pintura, escultura };
    }
  }
  return null;
}

if (!category || !product) {
  titleEl.textContent = "Producto no encontrado";
  summaryEl.textContent = "Vuelve al catálogo para elegir una opción disponible.";
  optionsEl.innerHTML = "";
} else {
  categoryBackLink.href = groupSlug ? `opciones.html?categoria=${categoryKey}&producto=${productSlug}` : `categoria.html?categoria=${categoryKey}`;
  categoryBackLink.textContent = groupSlug ? "Atrás a tipos de lienzo" : "Atrás a productos";
  categoryEl.textContent = category.label;
  titleEl.textContent = product.name;
  summaryEl.textContent = product.summary;
  if (detailImageEl && product.image && !product.options) {
    detailImageEl.hidden = false;
    detailImageEl.innerHTML = `<img src="${product.image}" alt="${product.name}" />`;
  } else if (detailImageEl) {
    detailImageEl.hidden = true;
    detailImageEl.innerHTML = "";
  }

  const cards = product.options || [
    {
      title: "¿Qué incluye?",
      price: product.price,
      notes: product.details || []
    }
  ];

  cards.forEach((card) => {
    if (card.title.includes("Que incluye") || card.title.includes("Qué incluye")) card.title = "¿Qué incluye?";
  });

  const groups = optionGroups(cards);
  const selectedGroup = groups.find((group) => slugify(group) === groupSlug);

  if (groups.length > 1 && !selectedGroup) {
    optionsEl.innerHTML = renderGroupLanding(groups);
  } else {
    const visibleCards = selectedGroup ? cards.filter((card) => card.group === selectedGroup) : cards;
    if (selectedGroup) {
      titleEl.textContent = `${product.name}: ${selectedGroup}`;
      summaryEl.textContent = "Elige la medida y las opciones para tu retrato.";
    }
    optionsEl.innerHTML = `${selectedGroupHero(selectedGroup)}${renderOptionGroups(product, visibleCards)}`;

    if (product.notice) {
      optionsEl.insertAdjacentHTML("beforeend", `<aside class="catalog-note">${product.notice}</aside>`);
    }

    optionsEl.insertAdjacentHTML("beforeend", `<aside class="catalog-note">Para medidas especiales, ideas personalizadas o detalles fuera del catálogo, agrega la opción más cercana y lo coordinamos por WhatsApp.</aside>`);
  }
}

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

function categoryLabel(category) {
  return category === "pintadas" ? "Pintura" : category === "esculpidas" ? "Escultura" : "sin tipo";
}

function cartCategoryMode() {
  const categories = [...new Set(cart.map((item) => item.category).filter(Boolean))];
  if (!categories.length) return "";
  if (categories.length > 1) return "mixed";
  return categories[0];
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
  if (mode === "mixed") return false;
  return mode === typeKey;
}

function selectedAgendaMatchesCart() {
  const agendaType = selectedAgendaType();
  const required = requiredAgendaTypes();
  if (!required.length) return true;
  const selectedTypes = Object.keys(selectedAgendaSlots).filter((typeKey) => selectedAgendaSlots[typeKey]?.text);
  if (selectedTypes.length) return selectedTypes.every((typeKey) => required.includes(typeKey));
  if (!selectedWeek || !agendaType) return true;
  return agendaTypeAllowedForCart(agendaType);
}

function clearSelectedAgenda() {
  selectedWeek = "";
  selectedWeekType = "";
  selectedAgendaSlots = {};
  localStorage.removeItem("lapinfluencerAgenda");
  localStorage.removeItem("lapinfluencerAgendaKey");
  localStorage.removeItem("lapinfluencerAgendaType");
  localStorage.removeItem("lapinfluencerAgendaSlots");
}

function cleanCartItemName(name) {
  return String(name || "")
    .replace(/\s*-\s*(?:Â¿|¿)?Qu[eé] incluye\??/gi, "")
    .replace(/\s{2,}/g, " ")
    .trim();
}

function saveAgendaSlots() {
  localStorage.setItem("lapinfluencerAgendaSlots", JSON.stringify(selectedAgendaSlots));
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

function cartTypeWarning() {
  const mode = cartCategoryMode();
  if (mode === "mixed" && !agendaSelectionsComplete()) return "";
  const agendaType = selectedAgendaType();
  if (!agendaType || !cart.length) return "";
  const wrongItems = cart.filter((item) => item.category && item.category !== agendaType);
  if (!wrongItems.length) return "";
  const needed = [...new Set(wrongItems.map((item) => categoryLabel(item.category)))].join(" y ");
  return `Tienes productos de ${needed}, pero elegiste un cupo de ${categoryLabel(agendaType)}. Debes cambiar el cupo para poder agendar.`;
}

function cartTypeWarningHtml(warning) {
  if (!warning) return "";
  return `${warning}<br><a href="index.html#agenda">Cambiar cupo en Agenda</a>`;
}

function cartNeedsAgendaDate() {
  return cart.length > 0 && !agendaSelectionsComplete();
}

function requiredAgendaTypes() {
  const mode = cartCategoryMode();
  if (mode === "mixed") return ["pintadas", "esculpidas"];
  if (mode) return [mode];
  return [];
}

function agendaSelectionsComplete() {
  const required = requiredAgendaTypes();
  if (!required.length) return false;
  if (required.length === 1 && selectedWeek && selectedAgendaType() === required[0]) return true;
  return required.every((typeKey) => selectedAgendaSlots[typeKey]?.text);
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
  const selectedText = selectedAgendaSlots[typeKey]?.text || selectedWeek;
  return selectedText
    ? `${selectedText}<button class="button secondary mixed-cart-action" type="button" data-cart-agenda-clear>Cambiar fecha seleccionada</button>`
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

function addToCart(name, price, category = categoryKey) {
  name = cleanCartItemName(name);
  const existing = cart.find((item) => item.name === name && item.price === price && item.category === category);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1, category });
  }
  if (!selectedAgendaMatchesCart()) {
    clearSelectedAgenda();
    agendaCompatibilityNotice = "Selecciona una fecha compatible con tu pedido.";
  }
  saveCart();
  renderCart();
  cartDrawer.hidden = false;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  if (!selectedAgendaMatchesCart()) {
    clearSelectedAgenda();
    agendaCompatibilityNotice = "Selecciona una fecha compatible con tu pedido.";
  }
  saveCart();
  renderCart();
}

function cartMessage() {
  if (!cart.length && !selectedWeek) {
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
  selectedWeek = localStorage.getItem("lapinfluencerAgenda") || "";
  selectedWeekType = localStorage.getItem("lapinfluencerAgendaType") || "";
  selectedAgendaSlots = JSON.parse(localStorage.getItem("lapinfluencerAgendaSlots") || "{}");
  if (!selectedAgendaMatchesCart()) {
    clearSelectedAgenda();
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
    cartWhatsapp.href = `categoria.html?categoria=${categoryKey || "esculpidas"}`;
    cartWhatsapp.target = "_self";
    cartWhatsapp.textContent = "Agrega productos al carrito";
  } else if (needsAgendaDate) {
    cartWhatsapp.href = "index.html#agenda";
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

optionsEl.addEventListener("change", (event) => {
  const select = event.target.closest("[data-variant-select]");
  if (!select) return;
  const card = select.closest(".option-card");
  const button = card.querySelector("button[data-cart-base]");
  if (button) {
    button.disabled = !select.value;
    button.classList.toggle("selected", Boolean(select.value));
  }
});

optionsEl.addEventListener("click", (event) => {
  const button = event.target.closest("button[data-cart-name], button[data-cart-base]");
  if (!button) return;
  if (button.disabled) return;
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
  window.location.href = "index.html#agenda";
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

loadAgendaAvailability().then(renderCart);
loadCoupons().then(renderCart);
renderCart();

async function loadAgendaAvailability() {
  try {
    const response = await fetch("agenda.json", { cache: "no-store" });
    if (!response.ok) return;
    const data = await response.json();
    const nextAvailability = data.availability || data;
    if (nextAvailability && typeof nextAvailability === "object") {
      agendaAvailability = nextAvailability;
    }
  } catch (error) {
    console.warn("agenda.json no cargó. La recomendación de agenda se mostrará con disponibilidad por defecto.", error);
  }
}

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
