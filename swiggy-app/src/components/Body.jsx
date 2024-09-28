import React from 'react'
import { RESTAURANT_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import ShimmerUi from "./ShimmerUi";
import { useEffect, useState } from "react";

const Body = () => {

  const [resList, setResList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const topRestaurant = () => {
    const filterList = resList.filter((res) => res.info.avgRating > 4);
    setResList(filterList);
  };

  //if no dependency array => useEffect is called on every component render
  //if dependency array is empty = [] => useEffect is called on initial component render(just once)
  //if dependency array is [filteredRestaurant] => called everytime filteredRestaurant is updated
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      RESTAURANT_API
    ); 
    
    const json = await data.json();
    setResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //Conditional Rendering
  // if(resList.length === 0) {
  //   return <ShimmerUi/>
  // }

    return resList.length === 0 ? (
        <ShimmerUi />
      ) : (
        <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="seach-box"
            placeholder="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              // filter the restaurant and update the UI
              // searchText
              const filteredRestaurant = resList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            search
          </button>
        </div>
        <button className="filter-btn" onClick={topRestaurant}>
          Top Rated Restaurant
        </button>{" "}
      </div>
      <div className="restaurantCantainer">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant?.info} />
        ))}
      </div>
    </div>
  )
}

export default Body