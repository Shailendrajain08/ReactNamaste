import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logoItem">
        <img
          className="logo"
          alt="logo"
          src="https://logo-marque.com/wp-content/uploads/2020/11/Swiggy-Logo.png"
        ></img>
      </div>
      <div className="navItem">
        <ul>
          <li className="liItem">Home</li>
          <li className="liItem">About US</li>
          <li className="liItem">Contact US</li>
          <li className="liItem">Cart</li>
        </ul>
      </div>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="Search">Search</div>
      <div className="restaurantCantainer">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard/>
      </div>
    </div>
  );
};

const StyleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCard = () => {
  return (
    <div className="restaurantCard" style={StyleCard}>
      <img
        className="res-logo"
        alt="Restaurant-logo"
        src="https://www.jubilantfoodworks.com/images/brand_pic3.jpg"
      ></img>
      <h3>Domino's</h3>
      <h4>Italian, Continantal</h4>
      <h4>4.3 Star</h4>
      <h4>30 Minutes</h4>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
