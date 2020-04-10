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

interface BaseRecipe {
  title: string;
  serving: number;
  ingredients: Ingredient[];
  steps: string[];
}

export interface Recipe extends BaseRecipe {
  slug: string;
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
    steps: [],
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
