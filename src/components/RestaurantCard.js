import React from "react";
const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div
      className="w-60  p-4 m-4  rounded-lg "
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="rounded-lg h-44 m-auto object-cover w-[100%] p-0"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1661891862/" +
          cloudinaryImageId
        }
        alt="Biryani"
      />

      <h3 className="font-bold text-lg py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>₹{costForTwo / 100} FOR TWO</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;

export const withHigherOerder = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute text-white bg-black">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
