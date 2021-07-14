import React from "react";
import { API_URL } from "../../ulits/url";
import BusinessCard from "../../componets/BusinessCard";

const Category = ({ category }) => {
  console.log(category);
  return (
    <div className="container pt-6">
      <h1 className="text-center text-6xl ">{category.name}</h1>
      <div className=" grid md:grid-cols-4  gap-3 py-6">
        {category.businesses.map((business) => (
          <BusinessCard business={business} />
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async ({ params: { slug } }) => {
  // Fetch Products
  const categories_res = await fetch(`${API_URL}/categories/?slug=${slug}`);
  const found = await categories_res.json();

  // return Products

  return {
    props: {
      category: found[0],
    },
  };
};

export async function getStaticPaths() {
  //Retrieve all the possible paths

  const categories_res = await fetch(`${API_URL}/categories`);
  const categories = await categories_res.json();

  //Return them to NextJS context

  return {
    paths: categories.map((category) => ({
      params: { slug: String(category.slug) },
    })),

    fallback: false,
  };
}

export default Category;
