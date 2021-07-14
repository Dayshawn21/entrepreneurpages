import React from "react";
import { API_URL } from "../ulits/url";
import CategoriesCard from "../components/CategoriesCard";

const CategoriesPages = ({ categories }) => {
  return (
    <section>
      <div className="container py-10">
        <h1 className="text-center text-4xl "> Categories </h1>
        <div className="sm: pt-10 md:grid md:grid-cols-3  md:gap-4 pt-6">
          {categories &&
            categories.map((category) => (
              <CategoriesCard category={category} />
            ))}
        </div>
      </div>
    </section>
  );
};
export const getStaticProps = async () => {
  // Fetch Products
  const categories_res = await fetch(`${API_URL}/categories`);
  const categories = await categories_res.json();

  // return Products

  return {
    props: {
      categories,
    },
  };
};

export default CategoriesPages;
