import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { recipes, Recipe } from '../../recipes';
import { RecipeInstructions } from '../../components/Recipe';

interface RecipeProps {
  recipe: Recipe;
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  return (
    <>
      <Image width={303} height={228} src={`/photos/${recipe.slug}.jpg`} />
      <h1 className="text-4xl">{recipe.title}</h1>
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
