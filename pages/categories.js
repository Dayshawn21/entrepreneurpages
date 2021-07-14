import React from "react";
import { API_URL } from "../ulits/url";
import CategoriesCard from "../components/CategoriesCard";

const CategoriesPages = ({ categories }) => {
  return (
    <section>
      <div className="container py-10">
        <h1 className="text-center text-4xl pb-3 "> Categories </h1>
        <div className="grid md:grid-cols-4 gap-4">
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
