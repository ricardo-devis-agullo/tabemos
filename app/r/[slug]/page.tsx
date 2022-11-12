import Image from 'next/image';
import { recipes } from '../../../recipes';
import { RecipeInstructions } from './Recipe';

export default function RecipePage({
  params,
}: {
  params: Record<string, string>;
}) {
  const recipe = recipes.get(params.slug)!;

  return (
    <div className="flex flex-col items-center">
      <Image
        width={303}
        height={228}
        src={`/photos/${recipe.slug}.jpg`}
        alt="Photo"
      />
      <h1 className="text-2xl font-bold mt-8">{recipe.title}</h1>
      <RecipeInstructions recipe={recipe}></RecipeInstructions>
    </div>
  );
}

export async function generateStaticParams() {
  return [...recipes.keys()].map((slug) => ({
    slug,
  }));
}
