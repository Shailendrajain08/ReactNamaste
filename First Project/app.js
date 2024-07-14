import React from "react";
import ReactDOM from "react-dom/client"

const Header = () => {
    return (
        <div className="header">
            <div className="logoItem">
                <img className="logo" alt="logo" src="https://logo-marque.com/wp-content/uploads/2020/11/Swiggy-Logo.png"></img>
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
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="Search">Search</div>
            <div className="restaurantCantainer">
                <RestaurantCard/>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="restaurantCard">
            <h3>Domino's</h3>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<AppLayout/>)
