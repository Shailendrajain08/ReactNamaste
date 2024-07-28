import restaurantData from "../utils/restaurantData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let resList = restaurantData;

  const topRestaurant = () => {
    resList = resList.filter((res) => res.info.avgRating > 4);
    console.log(resList)
  };

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
