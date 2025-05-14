import { resList } from "./utils/constData";
import RestaurantCard from "./RestaurantCard";
import React, { useState } from "react";

const Body = () => {
  const [arrayData, setarrayData] = useState(resList);
  return (
    <div className="body">
      <div className="search-container">
        <input type="text" placeholder="Search Food or Restaurant" />
        <button
          onClick={() => {
            const filter = arrayData.filter((data) => data.data.avgRating > 4);
            setarrayData(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {arrayData.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
