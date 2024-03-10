type Measurement =
  | 'gramo'
  | 'cucharada'
  | 'cucharilla'
  | 'pellizco'
  | 'manojo'
  | 'unidad'
  | 'mililitro'
  | 'litro'
  | 'vaso';

type IngredientName =
  | 'aceite de oliva'
  | 'aceite de sésamo'
  | 'aceituna negra'
  | 'agua'
  | 'aguacate'
  | 'ajo'
  | 'alcaparra'
  | 'alga'
  | 'alitas de pollo'
  | 'almeja'
  | 'arroz'
  | 'arroz integral'
  | 'azúcar'
  | 'broccoli'
  | 'caldo de pollo'
  | 'carne picada de cerdo'
  | 'cebolla'
  | 'cebolleta'
  | 'cebollino'
  | 'cerdo'
  | 'champiñón'
  | 'cilantro'
  | 'col china'
  | 'dashi'
  | 'dorada'
  | 'enoki'
  | 'gamba'
  | 'gochujang'
  | 'grasa de pollo'
  | 'huevo'
  | 'jengibre'
  | 'ketchup'
  | 'leche'
  | 'leche de coco'
  | 'lechuga'
  | 'limón'
  | 'maicena'
  | 'maíz'
  | 'mantequilla'
  | 'miel'
  | 'mirin'
  | 'molleja de pollo'
  | 'muslos de pollo'
  | 'nata de cocinar'
  | 'nuez moscada'
  | 'panko'
  | 'pasta tom yum'
  | 'pastilla avecrem'
  | 'patata'
  | 'pimienta blanca'
  | 'pimienta negra'
  | 'pimiento verde'
  | 'pollo concentrado'
  | 'ponzu'
  | 'puerro'
  | 'sal'
  | 'salchicha'
  | 'salmón'
  | 'salsa de ostras'
  | 'salsa de pescado'
  | 'salsa de soja'
  | 'salsa worcestershire'
  | 'sake'
  | 'sauce de poisson'
  | 'sésamo'
  | 'shichu'
  | 'shiitake'
  | 'shimeji'
  | 'spaghetti'
  | 'surimi'
  | 'tallarines'
  | 'toban djan'
  | 'tofu'
  | 'tomate cherry'
  | 'vinagre'
  | 'vino blanco'
  | 'zanahoria';

export interface Ingredient {
  readonly name: IngredientName;
  readonly quantity: number;
  readonly measurement: Measurement;
}

interface Step {
  readonly instruction: string;
  readonly photo?: string;
}

interface BaseRecipe {
  readonly title: string;
  readonly draft?: boolean;
  readonly serving: number;
  readonly ingredients:
    | ReadonlyArray<Ingredient>
    | Record<string, ReadonlyArray<Ingredient>>;
  readonly steps: ReadonlyArray<Step>;
}

export interface Recipe extends BaseRecipe {
  readonly slug: string;
}

const baseRecipes: Record<string, BaseRecipe> = {
  'ensalada-de-cilantro': {
    title: 'Ensalada de cilantro',
    serving: 2,
    ingredients: [
      { name: 'limón', quantity: 1 / 4, measurement: 'unidad' },
      { name: 'cilantro', quantity: 1, measurement: 'manojo' },
      { name: 'sal', quantity: 1, measurement: 'pellizco' },
      { name: 'pimienta negra', quantity: 1, measurement: 'pellizco' },
      { name: 'aceite de sésamo', quantity: 2, measurement: 'cucharada' },
      { name: 'sauce de poisson', quantity: 1, measurement: 'cucharada' },
      { name: 'tomate cherry', quantity: 12, measurement: 'unidad' },
    ],
    steps: [
      {
        instruction:
          'Lavar el cilantro con agua y ponerlo en un bol. Echar los tomates, el limón exprimido, la sal, la pimienta negra, el aceite y la salsa y remover.',
      },
    ],
  },
  'asia-don': {
    title: 'Asia don (donbori de salmón y aguacate)',
    serving: 2,
    ingredients: [
      { name: 'aguacate', quantity: 1, measurement: 'unidad' },
      { name: 'salmón', quantity: 150, measurement: 'gramo' },
      { name: 'aceite de oliva', quantity: 2, measurement: 'cucharada' },
      { name: 'vinagre', quantity: 1, measurement: 'cucharada' },
      { name: 'limón', quantity: 1, measurement: 'cucharada' },
      { name: 'azúcar', quantity: 1, measurement: 'cucharada' },
      { name: 'salsa de soja', quantity: 1, measurement: 'cucharada' },
      { name: 'sésamo', quantity: 1, measurement: 'cucharada' },
      { name: 'pimienta negra', quantity: 1, measurement: 'pellizco' },
    ],
    steps: [
      {
        instruction: 'Cortar el aguacate en daditos, y lo mismo con el salmón.',
      },
      {
        instruction:
          'Preparar la salsa vertiendo en un bol el vinagre, el azucar, la salsa de soja.',
      },
    ],
  },
  'tiras-de-cerdo-al-limon': {
    title: 'Tiras de cerdo al limón',
    serving: 2,
    ingredients: [
      { name: 'cerdo', quantity: 300, measurement: 'gramo' },
      { name: 'agua', quantity: 100, measurement: 'mililitro' },
      { name: 'limón', quantity: 1, measurement: 'unidad' },
      { name: 'sal', quantity: 1, measurement: 'pellizco' },
      { name: 'aceite de sésamo', quantity: 1, measurement: 'cucharilla' },
      { name: 'ajo', quantity: 1, measurement: 'unidad' },
      { name: 'maicena', quantity: 2, measurement: 'cucharilla' },
      { name: 'pastilla avecrem', quantity: 1, measurement: 'unidad' },
    ],
    steps: [],
  },
  'sopa-de-maiz': {
    title: 'Sopa de maíz',
    serving: 4,
    ingredients: [
      { name: 'maíz', quantity: 300, measurement: 'gramo' },
      { name: 'cebolla', quantity: 1 / 2, measurement: 'unidad' },
      { name: 'mantequilla', quantity: 10, measurement: 'gramo' },
      { name: 'vino blanco', quantity: 50, measurement: 'mililitro' },
      { name: 'sal', quantity: 2, measurement: 'pellizco' },
      { name: 'pimienta blanca', quantity: 1, measurement: 'pellizco' },
      { name: 'agua', quantity: 225, measurement: 'mililitro' },
      { name: 'leche', quantity: 125, measurement: 'mililitro' },
      { name: 'nata de cocinar', quantity: 125, measurement: 'mililitro' },
      { name: 'pastilla avecrem', quantity: 1 / 4, measurement: 'unidad' },
    ],
    steps: [
      {
        instruction:
          'Echamos en una olla la mantequilla a fuego medio y la cebolla cortada en juliana hasta que quede pocha (sin quemar).',
      },
      {
        instruction: 'Echar el maíz, remover y dejarlo 2 minutos cocinando.',
      },
      {
        instruction:
          'Echar el vino, la sal y la pimienta. Subir el fuego hasta que se evapore.',
      },
      {
        instruction:
          'Echar el agua. Tapar la olla y dejarlo 5 minutos a fuego medio.',
      },
      {
        instruction:
          'Pasarlo todo por un triturador (puede usarse un colador luego si quiere dejar más suave).',
      },
      {
        instruction: 'Añadir la leche, la nata y el avecrem y mezclar bien.',
      },
    ],
  },
  'mollejas-al-limon': {
    title: 'Mollejas al limon',
    serving: 2,
    ingredients: [
      { name: 'molleja de pollo', quantity: 300, measurement: 'gramo' },
      { name: 'sal', quantity: 1, measurement: 'cucharada' },
      { name: 'pimienta negra', quantity: 1, measurement: 'cucharada' },
      { name: 'azúcar', quantity: 1, measurement: 'cucharada' },
      { name: 'ajo', quantity: 1, measurement: 'unidad' },
      { name: 'cebollino', quantity: 1, measurement: 'cucharilla' },
      { name: 'sake', quantity: 1, measurement: 'cucharada' },
      { name: 'limón', quantity: 1 / 4, measurement: 'unidad' },
      { name: 'aceite de sésamo', quantity: 1, measurement: 'cucharada' },
    ],
    steps: [
      {
        instruction:
          'Cortar las mollejas por la mitad y hacer cortes en las partes blancas. Echar a un bol.',
      },
      {
        instruction:
          'En el bol echar la sal, el azucar, el ajo, el sake, el limon exprimido y el aceite. Remover y dejar reposar 10 minutos.',
      },
      {
        instruction:
          'Calentar en una sarten con aceite a fuego medio y echar el contenido del bol. Echar pimienta negra y dejar tapado 5 minutos.',
      },
      {
        instruction: 'Echar cebollino picado por encima y servir.',
      },
    ],
  },
  nikujaga: {
    title: 'Estofado de carne y patatas (Nikujaga)',
    serving: 2,
    ingredients: [
      { name: 'patata', quantity: 2, measurement: 'unidad' },
      { name: 'aceite de oliva', quantity: 1, measurement: 'cucharada' },
      { name: 'cebolla', quantity: 1, measurement: 'unidad' },
      { name: 'zanahoria', quantity: 1, measurement: 'unidad' },
      { name: 'cerdo', quantity: 200, measurement: 'gramo' },
      { name: 'salsa de soja', quantity: 2, measurement: 'cucharada' },
      { name: 'azúcar', quantity: 1, measurement: 'cucharada' },
      { name: 'vino blanco', quantity: 1, measurement: 'cucharada' },
    ],
    steps: [
      {
        instruction:
          'Cortar la carne en rodajas finas pequeñas, la cebolla en juliana, las zanahorias y las patatas en trozos medianos irregulares.',
      },
      {
        instruction:
          'Calientar una cucharada de aceite de oliva en una olla y freir la carne. Agregue el azúcar, la salsa de soja y el vino.',
      },
      {
        instruction:
          'Agregar las cebollas, las papatas y las zanahorias a la olla, cubrir con fuego medio y ¡estará listo en aproximadamente 20 minutos! Remover de vez en cuando.',
      },
    ],
  },
  chawanmushi: {
    title: 'Natillas de huevo al vapor (Chawanmushi)',
    serving: 2,
    ingredients: [
      { name: 'huevo', quantity: 2, measurement: 'unidad' },
      { name: 'agua', quantity: 330, measurement: 'mililitro' },
      { name: 'dashi', quantity: 2, measurement: 'cucharilla' },
      { name: 'sal', quantity: 1 / 4, measurement: 'cucharilla' },
      { name: 'surimi', quantity: 6, measurement: 'unidad' },
      { name: 'champiñón', quantity: 1, measurement: 'unidad' },
    ],
    steps: [
      { instruction: 'Batimos los huevos en un bol' },
      {
        instruction:
          'En otro bol preparamos el agua con el dashi, mezclamos, y terminamos echandolo en el bol con el huevo',
        photo: 'cuenco',
      },
      {
        instruction:
          'Ponemos en un vasito el champi y el surimi troceado, y luego el preparado del bol con la ayuda de un colador y tapamos el vaso con papel de aluminio para que se cueza.',
        photo: 'aluminio',
      },
      {
        instruction:
          'En una olla, poner unos cinco centimetros de agua y llevar a ebullición. Una vez hirviendo, poner el vaso que repose sobre el agua y tapar la olla. Calentar primero 3 minutos a fuego fuerte, y luego 15 minutos a fuego lento con la olla tapada en todo momento.',
        photo: 'olla',
      },
    ],
  },
  hanbagu: {
    title: 'Hamburguesa sencilla (hanbagu)',
    serving: 2,
    ingredients: {
      hamburguesa: [
        {
          name: 'cerdo',
          quantity: 600,
          measurement: 'gramo',
        },
        { name: 'panko', quantity: 1, measurement: 'vaso' },
        { name: 'huevo', quantity: 2, measurement: 'unidad' },
        { name: 'cebolla', quantity: 1, measurement: 'unidad' },
        { name: 'sal', quantity: 1, measurement: 'cucharilla' },
        { name: 'pimienta negra', quantity: 1, measurement: 'cucharilla' },
        { name: 'nuez moscada', quantity: 1, measurement: 'cucharilla' },
        { name: 'aceite de oliva', quantity: 1, measurement: 'cucharilla' },
        { name: 'leche', quantity: 40, measurement: 'mililitro' },
      ],
      salsa: [
        { name: 'agua', quantity: 50, measurement: 'mililitro' },
        { name: 'ketchup', quantity: 3, measurement: 'cucharada' },
        { name: 'salsa worcestershire', quantity: 2, measurement: 'cucharada' },
      ],
    },
    steps: [
      {
        instruction:
          'Con carne picada de cerdo (o mezcla), picar la cebolla (sofreirla un poco) y echar todos los ingredientes en una sarten directamente (el huevo directamente, sin batir).',
        photo: 'sarten',
      },
      {
        instruction:
          'Mezclar con la mano todos los ingredientes dentro de la sartén hasta que quede pegajoso, y entonces separar la masa y darle forma.',
        photo: 'forma',
      },
      {
        instruction:
          'Poner a calentar a fuego medio hasta que cada parte quede bien hecha, con la sartén tapada.',
        photo: 'hecho',
      },
      {
        instruction:
          'Mezclar todos los ingredientes de la salsa y echar por encima en la sartén. Dejar calentar unos minutos.',
        photo: 'salsa',
      },
    ],
  },
  'tom-yum-kung': {
    title: 'Tom Yum Kung (Sopa de gambas)',
    serving: 2,
    ingredients: [
      { name: 'gamba', quantity: 4, measurement: 'unidad' },
      { name: 'cebolla', quantity: 1 / 4, measurement: 'unidad' },
      { name: 'tomate cherry', quantity: 4, measurement: 'unidad' },
      { name: 'champiñón', quantity: 4, measurement: 'unidad' },
      { name: 'ajo', quantity: 2, measurement: 'unidad' },
      { name: 'agua', quantity: 400, measurement: 'mililitro' },
      { name: 'limón', quantity: 1, measurement: 'cucharada' },
      { name: 'aceite de oliva', quantity: 1, measurement: 'cucharada' },
      { name: 'leche de coco', quantity: 50, measurement: 'mililitro' },
      { name: 'pasta tom yum', quantity: 2, measurement: 'cucharada' },
      { name: 'cilantro', quantity: 2, measurement: 'pellizco' },
      { name: 'azúcar', quantity: 1, measurement: 'cucharilla' },
      { name: 'salsa de pescado', quantity: 2, measurement: 'cucharilla' },
    ],
    steps: [
      {
        instruction:
          'Cortar la cebolla en juliana, el champiñón en rodajas, los tomates cherry por la mitad y los ajos aplastados con la ayuda del cuchillo.',
      },
      {
        instruction:
          'Echar en una cazuela con aceite el ajo, y cuando coja color echar la cebolla, seguido de los champiñónes y las gambas sin cabeza (y con piel)',
      },
      {
        instruction:
          'Cuando la gamba este roja, echar el tomate, el agua, la pasta tom yum, la salsa de pescado, el azúcar y dejar cocinar a fuego medio durante unos minutos.',
      },
      {
        instruction:
          'Echar la leche de coco y el limón exprimido. Remover un poco y servir con un poco de cilantro cortado por encima.',
      },
    ],
  },
  'pollo-yangnyeom': {
    title: 'Pollo Yangnyeom',
    serving: 2,
    ingredients: [
      { name: 'alitas de pollo', quantity: 12, measurement: 'unidad' },
      { name: 'maicena', quantity: 2, measurement: 'cucharada' },
      { name: 'lechuga', quantity: 1, measurement: 'manojo' },
      { name: 'cebollino', quantity: 1, measurement: 'pellizco' },
      { name: 'gochujang', quantity: 2, measurement: 'cucharada' },
      { name: 'ketchup', quantity: 2, measurement: 'cucharada' },
      { name: 'aceite de sésamo', quantity: 1, measurement: 'cucharada' },
      { name: 'mirin', quantity: 1, measurement: 'cucharada' },
      { name: 'azúcar', quantity: 1, measurement: 'cucharada' },
    ],
    steps: [
      {
        instruction:
          'Echar en un bol el gochujang, ketchup, aceite de sésamo, mirin y el azucar y remover bien para tener nuestra salsa.',
      },
      {
        instruction:
          'Espolvorear la harina en las alitas y echar a una sarten (sin aceite) hasta que esté hecha por los dos lados.',
      },
      {
        instruction:
          'Echar la salsa junto al pollo, mezclar y dejar calentar unos minutos hasta que la salsa ligue con la carne.',
      },
      {
        instruction:
          'En un plato poner la lechuga cortada y echar encima la carne de la sartén. Espolvorear por encima el cebollino.',
      },
    ],
  },
  'acqua-pazza': {
    title: 'Acqua pazza',
    serving: 2,
    ingredients: [
      { name: 'dorada', measurement: 'unidad', quantity: 1 },
      { name: 'aceituna negra', measurement: 'unidad', quantity: 12 },
      { name: 'tomate cherry', measurement: 'unidad', quantity: 8 },
      { name: 'alcaparra', measurement: 'unidad', quantity: 8 },
      { name: 'vino blanco', measurement: 'mililitro', quantity: 50 },
      { name: 'almeja', measurement: 'unidad', quantity: 10 },
      { name: 'aceite de oliva', measurement: 'cucharada', quantity: 1 },
    ],
    steps: [
      {
        instruction:
          'Echar sal a la dorada y dejar que permee por 5 minutos por lo menos. A la vez, lava las almejas y los tomates.',
      },
      {
        instruction:
          'Echar el ajo en una sarten grande con el aceite de oliva. Cuando esté hecho, poner la dorada y dorarla por los dos lados a fuego medio.',
      },
      {
        instruction:
          'Echar las almejas, los tomates y el vino. Tapar la sarten y esperar 3 minutos.',
      },
      {
        instruction:
          'Echar las aceitunas, las alcaparras, un poco de romero y volver a tapar por 3 minutos.',
      },
      {
        instruction:
          'Sacarlo de la sarten y espolvorear con sal, pimienta negra y aceite.',
      },
    ],
  },
  'ebi-chili': {
    title: 'Gambas picantes (ebi chili)',
    serving: 2,
    ingredients: {
      main: [
        { name: 'gamba', quantity: 16, measurement: 'unidad' },
        { name: 'jengibre', quantity: 1, measurement: 'cucharilla' },
        { name: 'sal', quantity: 1, measurement: 'cucharilla' },
        { name: 'pimienta negra', quantity: 1, measurement: 'cucharilla' },
        { name: 'maicena', quantity: 1, measurement: 'cucharada' },
        { name: 'aceite de oliva', quantity: 1, measurement: 'cucharada' },
        { name: 'puerro', quantity: 2, measurement: 'cucharada' },
        { name: 'toban djan', quantity: 1, measurement: 'cucharilla' },
      ],
      salsa: [
        { name: 'ketchup', quantity: 3, measurement: 'cucharada' },
        { name: 'sake', quantity: 1, measurement: 'cucharada' },
        { name: 'aceite de sésamo', quantity: 1 / 2, measurement: 'cucharada' },
        { name: 'azúcar', quantity: 2, measurement: 'cucharilla' },
        {
          name: 'pollo concentrado',
          quantity: 1 / 2,
          measurement: 'cucharilla',
        },
        { name: 'salsa de soja', quantity: 1, measurement: 'cucharilla' },
        { name: 'agua', quantity: 4, measurement: 'cucharada' },
        { name: 'ajo', quantity: 1, measurement: 'cucharilla' },
        { name: 'jengibre', quantity: 1, measurement: 'cucharilla' },
        { name: 'sal', quantity: 1, measurement: 'cucharilla' },
        { name: 'pimienta negra', quantity: 1, measurement: 'cucharilla' },
      ],
    },
    steps: [
      { instruction: 'Cortar el puerro y rallar el ajo y el jengibre.' },
      { instruction: 'Mezclar los ingredientes de la salsa en un bol' },
      {
        instruction:
          'Pelar las gambas y limpiarlas. Espolvorear con la maicena y echar a una sarten hirviendo con aceite.',
      },
      {
        instruction:
          'Cuando las gambas cojan color, echar el puerro y el toban djan.',
      },
      {
        instruction:
          'Echar la salsa, y calentar a fuego medio/bajo hasta que espese. Servir y listo.',
      },
    ],
  },
  nabe: {
    title: 'Nabe',
    serving: 3,
    ingredients: [
      { name: 'agua', quantity: 1, measurement: 'litro' },
      { name: 'dashi', quantity: 15, measurement: 'gramo' },
      { name: 'puerro', quantity: 1, measurement: 'unidad' },
      { name: 'col china', quantity: 1 / 2, measurement: 'unidad' },
      { name: 'shimeji', quantity: 1, measurement: 'manojo' },
      { name: 'enoki', quantity: 1, measurement: 'manojo' },
      { name: 'shiitake', quantity: 4, measurement: 'unidad' },
      { name: 'alitas de pollo', quantity: 6, measurement: 'unidad' },
    ],
    steps: [
      {
        instruction:
          'Cortar en cortes diagonales de un palmo el puerro y la col china. Hacer un par de cortes al enoki y al shimeji y lo mismo con el shiitake. Cortar las alitas por la mitad.',
      },
      {
        instruction:
          'En la cazuela echar el agua y calentar con el dashi unos minutos.',
      },
      {
        instruction:
          'Echar el resto de ingredientes menos el ponzu a fuego alto y tapar la cazuela durante 20 minutos. Vigilar bien y bajar el fuego si es necesario.',
      },
      {
        instruction:
          'Servir con un plato de ponzu donde ir pasando los alimentos.',
        photo: 'ponzu',
      },
    ],
  },
  'sopa-de-alitas': {
    title: 'Sopa de alitas',
    serving: 2,
    ingredients: [
      { name: 'agua', quantity: 600, measurement: 'mililitro' },
      { name: 'aceite de sésamo', quantity: 1, measurement: 'cucharilla' },
      { name: 'alitas de pollo', quantity: 10, measurement: 'unidad' },
      { name: 'vino blanco', quantity: 100, measurement: 'mililitro' },
      { name: 'ajo', quantity: 2, measurement: 'unidad' },
      { name: 'jengibre', quantity: 1, measurement: 'cucharada' },
      { name: 'puerro', quantity: 2, measurement: 'cucharada' },
      { name: 'sal', quantity: 1, measurement: 'cucharada' },
      { name: 'arroz integral', quantity: 3, measurement: 'cucharada' },
    ],
    steps: [
      {
        instruction:
          'En una olla a presión echar todos los ingredientes y calentar 10 minutos.',
      },
      {
        instruction:
          'Destapar y calentar a fuego medio para reducir el caldo. Ajustar de sal si necesario.',
      },
    ],
  },
  'chashu-men': {
    title: 'Ramen de cerdo (Chashu-men)',
    serving: 2,
    ingredients: {
      carne: [
        { name: 'cerdo', quantity: 200, measurement: 'gramo' },
        { name: 'ajo', quantity: 1, measurement: 'unidad' },
        { name: 'puerro', quantity: 1, measurement: 'unidad' },
        { name: 'agua', quantity: 500, measurement: 'mililitro' },
        { name: 'vino blanco', quantity: 2, measurement: 'cucharada' },
        { name: 'jengibre', quantity: 1, measurement: 'cucharilla' },
        { name: 'salsa de soja', quantity: 2, measurement: 'cucharada' },
        { name: 'miel', quantity: 2, measurement: 'cucharada' },
        { name: 'salsa de ostras', quantity: 1, measurement: 'cucharada' },
      ],
      caldo: [
        { name: 'agua', quantity: 350, measurement: 'mililitro' },
        { name: 'salsa de soja', quantity: 1, measurement: 'cucharada' },
        { name: 'salsa de ostras', quantity: 1, measurement: 'cucharilla' },
        { name: 'pastilla avecrem', quantity: 1, measurement: 'cucharada' },
        { name: 'grasa de pollo', quantity: 1, measurement: 'cucharada' },
        { name: 'ajo', quantity: 1, measurement: 'cucharilla' },
        { name: 'sal', quantity: 1, measurement: 'cucharilla' },
        { name: 'aceite de sésamo', quantity: 1, measurement: 'cucharilla' },
      ],
      resto: [
        { name: 'tallarines', quantity: 200, measurement: 'gramo' },
        { name: 'maíz', quantity: 2, measurement: 'cucharada' },
        { name: 'cebollino', quantity: 1, measurement: 'cucharada' },
        { name: 'alga', quantity: 4, measurement: 'unidad' },
      ],
    },
    steps: [
      {
        instruction:
          'Para la carne, cortar el puerro en cortes diagonales de 5 centimetros y el ajo en laminas. Sellar el bloque de carne en una sarten, y entonces echar el puerro, ajo, agua, el vino y el jengibre y llevar a ebullicion. Entonces bajar a fuego medio, tapar la sarten y cocinar durante 20 minutos.',
      },
      {
        instruction:
          'Guardar 100 mililitros de agua y la carne y retirar el resto. Echar en la sarten vacia la soja, miel y la salsa de ostras junto al agua guardada. Echar la carne y calentar durante 10 minutos, dejando que espese la salsa. Una vez terminado, cortar en filetes finos.',
        photo: 'carne',
      },
      {
        instruction:
          'Poner todos los ingredientes del caldo junto a los 350ml de agua hirviendo en un bol.',
        photo: 'caldo',
      },
      {
        instruction:
          'Cocinar en una sarten con agua los tallarines el tiempo indicado. Al terminar colar, separar en dos boles y echar el caldo preparado anteriormente. Finalmente poner la carne, el maiz, el cebollino y las hojas de algas por encima.',
      },
    ],
  },
  'arroz-con-salmon': {
    title: 'Arroz con salmón',
    serving: 4,
    ingredients: [
      {
        name: 'arroz',
        quantity: 2,
        measurement: 'vaso',
      },
      {
        name: 'enoki',
        quantity: 2,
        measurement: 'manojo',
      },
      {
        name: 'salmón',
        quantity: 1,
        measurement: 'unidad',
      },
      {
        name: 'vino blanco',
        quantity: 2,
        measurement: 'cucharada',
      },
      {
        name: 'salsa de soja',
        quantity: 2,
        measurement: 'cucharada',
      },
      {
        name: 'agua',
        quantity: 2,
        measurement: 'vaso',
      },
      {
        name: 'sal',
        quantity: 2,
        measurement: 'cucharilla',
      },
      {
        name: 'dashi',
        quantity: 1,
        measurement: 'cucharilla',
      },
    ],
    steps: [
      {
        instruction:
          'Lavar el arroz y echarlo en la máquina de arroz. Echar la soja, sal, el dashi y el alcohol. Llenar el resto con el agua hasta la cantidad apropiada. Poner el salmón fresco encima junto con el enoki. Encender la máquina y esperar a que se cocine.',
        photo: 'maquina',
      },
      {
        instruction:
          'Una vez hecho, retirar el salmón para quitarle la piel y el hueso. Volver a ponerlo en el cuenco y remover junto con el arroz para que se mezcle bien.',
      },
      {
        instruction: 'Servir con un poco de cebollino troceado por encima.',
      },
    ],
  },
  napolitan: {
    title: 'Napolitan',
    serving: 2,
    ingredients: [
      { name: 'pimiento verde', quantity: 1, measurement: 'unidad' },
      { name: 'salchicha', quantity: 2, measurement: 'unidad' },
      { name: 'cebolla', quantity: 1, measurement: 'unidad' },
      { name: 'ketchup', quantity: 3, measurement: 'cucharada' },
      { name: 'salsa worcestershire', quantity: 1, measurement: 'cucharilla' },
      { name: 'pastilla avecrem', quantity: 1, measurement: 'cucharilla' },
      { name: 'spaghetti', quantity: 160, measurement: 'gramo' },
    ],
    steps: [
      {
        instruction:
          'Cortar la cebolla en juliana, las salchichas en rodajas pequeñas, y el pimiento en tiras finas.',
      },
      {
        instruction:
          'Echar en una sartén la cebolla y pocharla, seguido de la salchicha y el pimiento y sofreir bien.',
      },
      {
        instruction:
          'Añadir el ketchup, el polvo de avecrem y la salsa y hacer a fuego lento durante unos 5 a 10 minutos. Mientras ir preparando la pasta, y hacer un minuto menos del indicado (vamos a cocinarlo luego).',
      },
      {
        instruction:
          'Echar la pasta en la sartén con la salsa, mezclar a fuego lento y ya estará listo.',
      },
    ],
  },
  shichu: {
    title: 'Shichu (estofado de pollo y verduras)',
    serving: 4,
    ingredients: [
      { name: 'shichu', quantity: 1, measurement: 'unidad' },
      { name: 'cebolla', quantity: 1, measurement: 'unidad' },
      { name: 'zanahoria', quantity: 1, measurement: 'unidad' },
      { name: 'broccoli', quantity: 1, measurement: 'unidad' },
      { name: 'patata', quantity: 1, measurement: 'unidad' },
      { name: 'muslos de pollo', quantity: 1, measurement: 'unidad' },
      { name: 'caldo de pollo', quantity: 1, measurement: 'unidad' },
      { name: 'maíz', quantity: 100, measurement: 'gramo' },
    ],
    steps: [
      {
        instruction:
          'Cortar la cebolla en juliana, la zanahoria, la patata y el broccoli en trozos pequeños. Deshuesar los muslos y cortarlos en trozos pequeños.',
      },
      {
        instruction:
          'En una cazuela con un chorro de aceite echar la carne y sellar',
      },
      {
        instruction:
          'Retirar la carne temporalmente a un plato y echar a la cazuela la cebolla. Cuando poche echar la zanahoria y por ultimo la patata.',
      },
      {
        instruction:
          'Echar la carne reservada y cubrir con el caldo de pollo. Dejar cocinar a fuego medio durante 20 minutos.',
      },
      {
        instruction: 'Mientras, en otro recipiente cocer el broccoli.',
      },
      {
        instruction:
          'Pasados los 20 minutos, echar el shichu y  el maiz y dejar 20 minutos.',
      },
      {
        instruction:
          'Por ultimo, echar el broccoli y servir, opcionalmente acompañado por arroz.',
      },
    ],
  },
  mabodofu: {
    title: 'Mabodofu',
    serving: 2,
    ingredients: {
      base: [
        {
          name: 'tofu',
          quantity: 300,
          measurement: 'gramo',
        },
        {
          name: 'carne picada de cerdo',
          quantity: 400,
          measurement: 'gramo',
        },
        {
          name: 'ajo',
          quantity: 1,
          measurement: 'unidad',
        },
        {
          name: 'jengibre',
          quantity: 1,
          measurement: 'cucharilla',
        },
        {
          name: 'cebollino',
          quantity: 1,
          measurement: 'cucharada',
        },
        {
          name: 'cebolleta',
          quantity: 1,
          measurement: 'cucharada',
        },
        {
          name: 'toban djan',
          quantity: 2,
          measurement: 'cucharada',
        },
        {
          name: 'aceite de sésamo',
          quantity: 1 / 2,
          measurement: 'cucharada',
        },
        {
          name: 'maicena',
          quantity: 1,
          measurement: 'cucharada',
        },
      ],
      salsa: [
        { name: 'vino blanco', quantity: 2, measurement: 'cucharada' },
        { name: 'mirin', quantity: 1, measurement: 'cucharada' },
        { name: 'salsa de soja', quantity: 1, measurement: 'cucharada' },
        {
          name: 'pollo concentrado',
          quantity: 1 / 2,
          measurement: 'cucharada',
        },
        { name: 'azúcar', quantity: 1 / 2, measurement: 'cucharada' },
        { name: 'agua', quantity: 200, measurement: 'mililitro' },
      ],
    },
    steps: [
      {
        instruction:
          'Calienta aceite en una sartén y fríe el ajo picado, el jengibre y la cebolla verde. Agrega la carne picada y fríela hasta que cambie de color.',
      },
      {
        instruction: 'Añade la cantidad deseada de toban djan y saltea.',
      },
      {
        instruction: 'Agrega la salsa y lleva a ebullición.',
      },
      {
        instruction: 'Agrega el tofu y deja cocinar a fuego lento por un rato.',
      },
      {
        instruction:
          'Baja el fuego, añade el almidón de patata soluble en agua y mezcla bien. Vuelve a bajar el fuego, deja que espese, y termina añadiendo aceite de sésamo y cebollino.',
      },
    ],
  },
};

export const recipes: ReadonlyMap<string, Recipe> = new Map(
  Object.entries(baseRecipes)
    .filter(([_, { draft }]) => !draft)
    .map(([slug, baseRecipe]) => [
      slug,
      {
        ...baseRecipe,
        slug,
      },
    ]),
);
