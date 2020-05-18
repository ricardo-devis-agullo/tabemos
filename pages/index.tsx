import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import { recipes } from '@recipes';

interface SummaryRecipe {
  title: string;
  slug: string;
}

interface IndexProps {
  recipes: SummaryRecipe[];
}

const Index: NextPage<IndexProps> = ({ recipes }) => {
  return (
    <div>
      {recipes.map((recipe) => (
        <div key={recipe.slug}>
          <Link href={`/r/${recipe.slug}`}>
            <a>{recipe.title}</a>
          </Link>
        </div>
      ))}
    </div>
  );
};

export const getStaticProps: GetStaticProps<IndexProps> = async () => {
  const summaryRecipes = Object.entries(recipes).map(([slug, recipe]) => ({
    title: recipe.title,
    slug,
  }));

  return { props: { recipes: summaryRecipes } };
};

export default Index;
