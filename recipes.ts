type Measurement =
  | 'gramo'
  | 'cucharada'
  | 'cucharilla'
  | 'pellizco'
  | 'manojo'
  | 'unidad'
  | 'mililitro';

type IngredientName =
  | 'limón'
  | 'salmón'
  | 'aguacate'
  | 'arroz'
  | 'cilantro'
  | 'sal'
  | 'agua'
  | 'ajo'
  | 'leche'
  | 'sake'
  | 'nata de cocinar'
  | 'pastilla avecrem'
  | 'azúcar'
  | 'mantequilla'
  | 'pimienta negra'
  | 'pimienta blanca'
  | 'aceite de sésamo'
  | 'aceite de oliva'
  | 'molleja de pollo'
  | 'salsa de soja'
  | 'sésamo'
  | 'cerdo'
  | 'vinagre'
  | 'vino blanco'
  | 'sauce de poisson'
  | 'maíz'
  | 'maicena'
  | 'cebolla'
  | 'cebollino'
  | 'tomate cherry';

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
  readonly serving: number;
  readonly ingredients: ReadonlyArray<Ingredient>;
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
          'Cortar las molleas por la mitad y hacer cortes en las partes blancas. Echar a un bol.',
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
};

export const recipes: Record<string, Recipe> = Object.fromEntries(
  Object.entries(baseRecipes).map(([slug, baseRecipe]) => [
    slug,
    {
      ...baseRecipe,
      slug,
    },
  ])
);
