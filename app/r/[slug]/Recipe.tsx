import Image from 'next/image';
import { Recipe, Ingredient } from '../../../recipes';

interface Props {
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

function areIngredientsBySection(
  ingredients:
    | ReadonlyArray<Ingredient>
    | Record<string, ReadonlyArray<Ingredient>>
): ingredients is Record<string, ReadonlyArray<Ingredient>> {
  return !Array.isArray(ingredients);
}

function pluralize(word: string, count: number): string {
  return count > 1 ? `${word}s` : word;
}

function formatIngredient({ name, measurement, quantity }: Ingredient): string {
  switch (measurement) {
    case 'cucharada':
      return `${quantity} ${pluralize('cucharada', quantity)} de ${name}`;
    case 'cucharilla':
      return `${quantity} ${pluralize('cucharilla', quantity)} de ${name}`;
    case 'mililitro':
      return `${quantity} ${pluralize('mililitro', quantity)} de ${name}`;
    case 'litro':
      return `${quantity} ${pluralize('litro', quantity)} de ${name}`;
    case 'gramo':
      return `${quantity}g de ${name}`;
    case 'manojo':
      return `${quantity} ${pluralize('manojo', quantity)} de ${name}`;
    case 'pellizco':
      return `${quantity} ${pluralize('pellizco', quantity)} de ${name}`;
    case 'unidad':
      return `${formatUnit(quantity)} ${name}`;
    case 'vaso':
      return `${quantity} ${pluralize('vaso', quantity)} de ${name}`;
    default:
      return assertNever(measurement);
  }
}

export const RecipeInstructions: React.FC<Props> = ({ recipe }) => {
  return (
    <>
      <div className="serving">
        <h3 className="my-6 text-xl inline-block">Ingredientes</h3>
        <span>{`(${recipe.serving} ${pluralize(
          'persona',
          recipe.serving
        )})`}</span>
      </div>
      {!areIngredientsBySection(recipe.ingredients) ? (
        <ul>
          {recipe.ingredients.map((ingredient) => (
            <li key={ingredient.name}>{formatIngredient(ingredient)}</li>
          ))}
        </ul>
      ) : (
        Object.entries(recipe.ingredients).map(([section, ingredients]) => (
          <div key={section}>
            <h5 className="font-bold underline uppercase my-2">{section}</h5>
            <ul className="list-none">
              {ingredients.map((ingredient) => (
                <li key={ingredient.name}>{formatIngredient(ingredient)}</li>
              ))}
            </ul>
          </div>
        ))
      )}
      <div className="serving">
        <h3 className="inline-block text-xl mt-6">Instrucciones</h3>
        {recipe.steps.map((step, idx) => (
          <div className="my-8 flex" key={idx}>
            {step.photo && (
              <Image
                width={200}
                height={150}
                className="float object-cover"
                alt="Recipe"
                src={`/photos/${recipe.slug}-${step.photo}.jpg`}
              />
            )}
            <p>{step.instruction}</p>
          </div>
        ))}
      </div>
    </>
  );
};
