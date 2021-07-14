import React from "react";
import { API_URL } from "../ulits/url";
import BusinessCard from "../componets/BusinessCard";

const BusinessPages = ({ businesses }) => {
  return (
    <section>
      <div className="container py-10">
        <h1 className="text-center text-4xl "> Businesses </h1>
        <div className="sm: pt-10 md:grid md:grid-cols-4  md:gap-2 py-6">
          {businesses &&
            businesses.map((business) => <BusinessCard business={business} />)}
        </div>
      </div>
    </section>
  );
};
export const getStaticProps = async () => {
  // Fetch Products
  const businesses_res = await fetch(`${API_URL}/businesses`);
  const businesses = await businesses_res.json();

  // return Products

  return {
    props: {
      businesses,
    },
  };
};

export default BusinessPages;
