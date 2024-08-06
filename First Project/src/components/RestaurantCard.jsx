import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating, 
    costForTwo,
    sla,
  } = resData.info;
  

  const StyleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div className="restaurantCard" style={StyleCard}>
      <img
        className="res-logo"
        alt="Restaurant-logo"
        src={CDN_URL + cloudinaryImageId}
      ></img>
      <div className="card-body">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} Average Rating</h4>
        <h4>{costForTwo}</h4>
        <h4>{sla?.deliveryTime} Minutes</h4>
      </div>
    </div>
  );
};

export default RestaurantCard;
