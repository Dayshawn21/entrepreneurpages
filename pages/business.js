import React from "react";
import { API_URL } from "../ulits/url";
import BusinessCard from "../components/BusinessCard";

const BusinessPages = ({ businesses }) => {
  return (
    <section>
      <div className="container py-10">
        <h1 className="text-center text-4xl pb-4 "> Businesses </h1>
        <div className="grid  md:grid-cols-4 gap-2">
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
      revalidate: 100,
    },
  };
};

export default BusinessPages;
