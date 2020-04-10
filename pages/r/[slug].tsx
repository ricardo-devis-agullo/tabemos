import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { recipes, Recipe, Ingredient } from '../../recipes';

interface RecipeProps {
  recipe: Recipe;
}

function assertNever(x: never): never {
  throw new Error('Unexpected object: ' + x);
}

function formatUnit(unit: number): string {
  switch (unit) {
    case 1 / 4:
      return '1/4';
    case 1 / 2:
      return '1/2';
    default:
      return String(unit);
  }
}

function pluralize(word: string, count: number): string {
  return count > 1 ? `${word}s` : word;
}

function formatIngredient({ name, measurement, quantity }: Ingredient): string {
  switch (measurement) {
    case 'cucharada':
      return `${quantity} ${pluralize('cucharada', quantity)} de ${name}`;
    case 'gramo':
      return `${quantity}g de ${name}`;
    case 'manojo':
      return `${quantity} ${pluralize('manojo', quantity)} de ${name}`;
    case 'pellizco':
      return `${quantity} ${pluralize('pellizco', quantity)} de ${name}`;
    case 'unidad':
      return `${formatUnit(quantity)} ${name}`;
    default:
      return assertNever(measurement);
  }
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  const servingText = `${recipe.serving} persona${
    recipe.serving > 1 ? 's' : ''
  }`;

  return (
    <>
      <img width="303px" height="228px" src={`/${recipe.slug}.jpg`}></img>
      <h1>{recipe.title}</h1>
      <h3>Ingredientes</h3>
      <span>{`(${servingText})`}</span>
      <ul>
        {recipe.ingredients.map((ingredient) => (
          <div key={ingredient.name}>
            <li>{formatIngredient(ingredient)}</li>
          </div>
        ))}
      </ul>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(recipes).map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<RecipeProps> = async ({
  params,
}) => {
  return { props: { recipe: recipes[String(params?.slug)] } };
};

export default RecipePage;
