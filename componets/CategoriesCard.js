import React from "react";
import Link from "next/link";

const CategoriesCard = ({ category }) => {
  return (
    <div className="  rounded overflow-hidden shadow-lg bg-white">
      <Link href={`/categories/${category.slug}`}>
        <a>
          <div className="font-bold text-xl m-3 text-center">
            <h1>{category.name}</h1>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default CategoriesCard;
