import RestaurantCard from "./RestaurantCard";
import React, { useState, useEffect } from "react";
const Body = () => {
  const [arrayData, setarrayData] = useState([]);
  const [copyData, setCopyData] = useState([]);
  const [searchData, setsearchData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch(
          "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=A%20Star%20Grill%20%26%20North%20Indian&trackingId=f8687776-f59e-900f-2437-779d3004cada&submitAction=ENTER&queryUniqueId=4ab1a6b4-9648-c44f-88b2-a38a7b0c1def"
        );
        const json = await data.json(); // ✅ Add parentheses here
        console.log(
          json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
            ?.card?.card?.restaurants
        );
        setarrayData(
          json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
            ?.card?.card?.restaurants
        );
        setCopyData(
          json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
            ?.card?.card?.restaurants
        );
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

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
