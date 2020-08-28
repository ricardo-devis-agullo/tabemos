import { NextPage, GetStaticProps } from 'next';
import Link from 'next/link';
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
    <div className="card">
      <img src={`/${recipe.slug}.jpg`} />
      <div className="title">
        <Link href={`/r/${recipe.slug}`}>
          <a>{recipe.title}</a>
        </Link>
      </div>
      <style jsx>
        {`
          .card {
            height: 400px;
            width: 200px;
            margin: 10px;
            position: relative;
          }
          .card img {
            width: 200px;
            height: 400px;
            object-fit: cover;
          }
          .title {
            display: flex;
            align-items: flex-end;
            justify-content: center;
            height: 80px;
            width: 100%;
            color: #000;
            position: absolute;
            bottom: 0;
            background-color: #e590c19e;
            transition: background-color 0.5s;
          }
          .title:hover {
            background-color: #e590c1;
          }
          .title a {
            padding-bottom: 10px;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
};

const Index: NextPage<IndexProps> = ({ recipes }) => {
  return (
    <div className="recipes">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.slug} recipe={recipe} />
      ))}
      <style jsx>{`
        .recipes {
          display: flex;
          flex-wrap: wrap;
        }
      `}</style>
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
