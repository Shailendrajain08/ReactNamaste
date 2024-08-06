import restaurantData from "../utils/restaurantData";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./Shimmer";
import { useEffect, useState } from "react";

const Body = () => {
  const [resList, setResList ] = useState([]);
  const topRestaurant = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4);
    setResList(filterList)
  };

  useEffect(() => {
    fetchData()
  }, []);

  const fetchData = async () => {
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.2599333&lng=77.412615&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    const json = await data.json();
    console.log("json",json)
    setResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(resList.length === 0) {
    return <ShimmerUi/>
  }

  return (
    <div className="body">
      {/* <div className="Search">Search</div> */}
      <div className="filter">
        <button className="filter-btn" onClick={topRestaurant}>
          Top Rated Restaurant
        </button>{" "}
      </div>
      <div className="restaurantCantainer">
        {resList.map((restaurant) => (
            <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
