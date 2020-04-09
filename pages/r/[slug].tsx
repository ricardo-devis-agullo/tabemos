import { NextPage, GetStaticPaths, GetStaticProps } from 'next';
import { recipes, Recipe } from '../../recipes';

interface RecipeProps {
  recipe: Recipe;
}

const RecipePage: NextPage<RecipeProps> = ({ recipe }) => {
  return <p>This is the blog post {JSON.stringify(recipe.ingredients)}.</p>;
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
