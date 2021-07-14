import React from "react";
import Link from "next/link";
import Image from "next/image";
const BusinessCard = ({ business }) => {
  <Image src={business.logo.formats.thumbnail.url} width={200} height={200} />;
  return (
    <div>
      <div>
        <div class="bg-white shadow-xl border-black border-2	 rounded-lg py-3">
          <div class="photo-wrapper text-center p-2">
            <Image
              src={business.logo.formats.thumbnail.url}
              width={250}
              height={200}
            />
          </div>
          <div class="p-2">
            <h3 class="text-center text-xl text-gray-900 font-medium leading-8">
              {business.company}
            </h3>

            <table class="text-sm my-3">
              <tbody>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">
                    Description{" "}
                  </td>
                  <td class="px-2 py-2">{business.description}</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">
                    Location
                  </td>
                  <td class="px-2 py-2">{business.location}</td>
                </tr>
              </tbody>
            </table>

            <div class="text-center my-3">
              <a
                class="text-s text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium"
                href={business.link}
              >
                View Business
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessCard;
