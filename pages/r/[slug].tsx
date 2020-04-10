import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { recipes, Recipe } from '../../recipes';

interface RecipeProps {
  recipe: Recipe;
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
            <li>{ingredient.name}</li>
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
