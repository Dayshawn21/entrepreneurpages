import Link from "next/link";
import React from "react";
import CategoriesCard from "./CategoriesCard";

const Categories = ({ categories }) => {
  return (
    <section className="bg-gray-600 pt-6">
      <div className="container">
        <h1 className="text-center text-4xl text-white pb-3 ">
          Browse by Categories
        </h1>
        <div className=" grid md:grid-cols-4 gap-4">
          {categories &&
            categories.map((category) => (
              <CategoriesCard category={category} />
            ))}
        </div>
        <div className="text-center py-10">
          <Link href={`/categories`}>
            <a class="bg-white hover:bg-blue-700 font-bold py-3 px-4 rounded">
              More Categories
            </a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
