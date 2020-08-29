import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { recipes, Recipe } from '../../recipes';
import { RecipeInstructions } from '../../components/Recipe';

interface RecipeProps {
  recipe: Recipe;
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  return (
    <>
      <img width="303px" height="228px" src={`/${recipe.slug}.webp`}></img>
      <h1>{recipe.title}</h1>
      <RecipeInstructions recipe={recipe}></RecipeInstructions>
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
