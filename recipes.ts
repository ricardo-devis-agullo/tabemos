type Measurement = 'gramo' | 'cucharada' | 'pellizco' | 'manojo' | 'unidad';

type IngredientName =
  | 'limón'
  | 'cilantro'
  | 'sal'
  | 'pimienta negra'
  | 'aceite de sésamo'
  | 'sauce de poisson'
  | 'tomate cherry';

interface Ingredient {
  name: IngredientName;
  quantity: number;
  measurement: Measurement;
}

export type Recipe = {
  ingredients: Ingredient[];
  steps: string[];
};

interface Recipes {
  [slug: string]: Recipe;
}

export const recipes: Recipes = {
  'ensalada-de-cilantro': {
    ingredients: [
      { name: 'limón', quantity: 1 / 4, measurement: 'unidad' },
      { name: 'cilantro', quantity: 1, measurement: 'manojo' },
      { name: 'sal', quantity: 1, measurement: 'pellizco' },
      { name: 'pimienta negra', quantity: 1, measurement: 'pellizco' },
      { name: 'aceite de sésamo', quantity: 2, measurement: 'cucharada' },
      { name: 'sauce de poisson', quantity: 1, measurement: 'cucharada' },
      { name: 'tomate cherry', quantity: 12, measurement: 'unidad' },
    ],
    steps: [],
  },
};
