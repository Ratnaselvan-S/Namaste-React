import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addItems } from "../utils/cartSlice";
const RestaurantMenu = () => {
  const [arrayData, setArrayData] = useState([]);
  const resId = useParams();
  const [accordianState, setAccordianState] = useState(false);
  const [arrayIndex, setArrayIndex] = useState(0);

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

  const dispatch = useDispatch();
  const handliclick = (props) => {
    dispatch(addItems(props));
  };

  return (
    <div>
      {arrayData?.map((data, index) => {
        return (
          <div
            className="flex flex-col justify-center items-center w-6/12 mx-auto"
            key={index}
          >
            {data?.card?.card?.title && (
              <h1
                className="w-3/4 bg-orange-200 px-4 py-2 m-3 rounded-lg"
                onClick={() => {
                  setArrayIndex(index);
                  setAccordianState(
                    (prevState) => index !== arrayIndex || !prevState
                  );
                }}
              >
                {data?.card?.card?.title} (
                {data?.card?.card?.itemCards?.length > 0
                  ? data?.card?.card?.itemCards?.length
                  : "0"}
                )
              </h1>
            )}
            {accordianState && index === arrayIndex && (
              <div>
                {data?.card?.card?.itemCards?.map((item, idx) => {
                  return (
                    <div className="flex justify-between align-middle my-4 ">
                      <h5 key={idx} className="my-auto">
                        {item?.card?.info?.name}
                      </h5>
                      <button
                        className="border rounded-lg p-2 "
                        onClick={() => handliclick(item)}
                      >
                        add
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
