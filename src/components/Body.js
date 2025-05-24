import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
import useRestaurantFetachData from "../utils/useRestaurantFetachData";
const Body = () => {
  const [copyData, setCopyData] = useState([]);
  const [searchData, setsearchData] = useState("");

  const arrayData = useRestaurantFetachData();

  useEffect(() => {
    if (arrayData && arrayData.length > 0) {
      setCopyData(arrayData);
    }
  }, [arrayData]);

  return (
    <div className="body">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search Food or Restaurant"
          value={searchData}
          onChange={(e) => setsearchData(e.target.value)}
        />
        <button
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
      <div className="res-container">
        {copyData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
