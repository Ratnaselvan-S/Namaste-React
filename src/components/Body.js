import RestaurantCard, { withHigherOerder } from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import useRestaurantFetachData from "../utils/useRestaurantFetachData";
import { Link } from "react-router-dom";

const Body = () => {
  const [copyData, setCopyData] = useState([]);
  const [searchData, setsearchData] = useState("");
  const HigherOrder = withHigherOerder(RestaurantCard);
  const arrayData = useRestaurantFetachData();

  useEffect(() => {
    if (arrayData && arrayData.length > 0) {
      setCopyData(arrayData);
    }
  }, [arrayData]);

  return (
    <div className="body">
      <div className="flex justify-center mb-5">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchData}
          onChange={(e) => setsearchData(e.target.value)}
          className="border-solid border-2 mx-4 px-2 py-1 rounded-md"
        />
        <button
          className="px-4 py-2 bg-green-200 rounded-lg"
          onClick={() => {
            const filter = arrayData.filter((data) =>
              data.info.name.toLowerCase().includes(searchData.toLowerCase())
            );
            setCopyData(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap justify-center">
        {copyData.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurantmenu/" + restaurant.info.id}
          >
            {restaurant.info.promoted ? (
              <HigherOrder resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
