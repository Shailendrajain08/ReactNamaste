import { Link } from "react-router-dom";
import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
  const { resData } = props;
  const { id, cloudinaryImageId, name, cuisines, avgRating, costForTwo, sla } =
    resData;

  return (
    <>
    <Link className="link2" to={"/restaurant/" + id}>
        <div className="restaurantCard">
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
      </Link>
    </>

  )
}

export default RestaurantCard