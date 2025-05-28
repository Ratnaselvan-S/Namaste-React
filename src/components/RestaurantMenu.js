import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [arrayData, setArrayData] = useState([]);
  const resId = useParams();

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const fetchdata = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9628669&lng=77.57750899999999&restaurantId=" +
          resId.id
      );
      const json = await fetchdata.json();
      setArrayData(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards);
      console.log(json.data.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {arrayData?.map((data, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center"
            key={index}
          >
            {data?.card?.card?.title && (
              <h1 className="w-[45vh]  bg-orange-200 px-4 py-2 m-3 rounded-lg">
                {data?.card?.card?.title} (
                {data?.card?.card?.itemCards?.length > 0
                  ? data?.card?.card?.itemCards?.length
                  : "0"}
                )
              </h1>
            )}
            <div>
              {data?.card?.card?.itemCards?.map((item, idx) => {
                console.log(item?.card?.info?.name);
                return <h5 key={idx}>{item?.card?.info?.name}</h5>;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
