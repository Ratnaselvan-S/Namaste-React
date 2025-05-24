import { useEffect, useState } from "react";

const useRestaurantFetachData = () => {
  const [arrayData, setarrayData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const fetchdata = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=12.9715987&lng=77.5945627&str=A%20Star%20Grill%20%26%20North%20Indian&trackingId=f8687776-f59e-900f-2437-779d3004cada&submitAction=ENTER&queryUniqueId=4ab1a6b4-9648-c44f-88b2-a38a7b0c1def"
      );

      const json = await fetchdata.json();
      setarrayData(
        json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]
          ?.card?.card?.restaurants
      );
    } catch (err) {
      console.log(err);
    }
  };

  return arrayData;
};

export default useRestaurantFetachData;
