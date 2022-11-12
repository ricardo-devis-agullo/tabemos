import Link from 'next/link';
import Image from 'next/image';
import { recipes } from '../recipes';

interface SummaryRecipe {
  title: string;
  slug: string;
}

const RecipeCard: React.FC<{ recipe: SummaryRecipe }> = ({ recipe }) => {
  return (
    <Link className="group" href={`/r/${recipe.slug}`}>
      <div className="cursor-pointer h-96 w-52 m-2 relative">
        <Image
          alt="Recipe"
          className="object-cover w-full h-full"
          src={`/photos/${recipe.slug}.jpg`}
          height={1000}
          width={500}
        />
        <div className="flex items-end justify-center h-20 w-full text-black absolute bottom-0 bg-pink-400 bg-opacity-60 group-hover:bg-opacity-100 transition-colors duration-500">
          <span className="text-white pb-2">{recipe.title}</span>
        </div>
      </div>
    </Link>
  );
};

export default function Home() {
  return (
    <div className="flex flex-wrap justify-center">
      {[...recipes.values()].map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
    </div>
  );
}
