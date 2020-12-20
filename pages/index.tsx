import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { recipes } from '../recipes';

interface SummaryRecipe {
  title: string;
  slug: string;
}

interface IndexProps {
  recipes: SummaryRecipe[];
}

const RecipeCard: React.FC<{ recipe: SummaryRecipe }> = ({ recipe }) => {
  return (
    <Link href={`/r/${recipe.slug}`}>
      <div className="card group m-2.5 relative cursor-pointer">
        <Image
          src={`/photos/${recipe.slug}.jpg`}
          height={1000}
          width={500}
          objectFit="cover"
        />
        <div className="title h-20 flex absolute bottom-0 w-full justify-center items-end bg-pink-400 group-hover:bg-pink-300 bg-opacity-60 transition-colors duration-500">
          <span className="text-white pb-3">{recipe.title}</span>
        </div>
        <style jsx>
          {`
            .card {
              height: 400px;
              width: 200px;
            }
          `}
        </style>
      </div>
    </Link>
  );
};

const Index: NextPage<IndexProps> = ({ recipes }) => {
  return (
    <div className="flex flex-wrap">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
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
