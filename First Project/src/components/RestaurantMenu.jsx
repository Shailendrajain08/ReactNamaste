import React from "react";
import { useEffect, useState } from "react";
import ShimmerUi from "./Shimmer";
import { useParams } from "react-router-dom";
import { FOOD_IMG_URL, MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu"
import DynamicH1 from "./DynamicH1.JSX";

const RestaurantMenu = () => {

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <ShimmerUi />;

  const { name, cuisines, costForTwoMessage, avgRating, totalRatingsString } =
    resInfo?.cards[2]?.card?.card?.info;

  const { cards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR || {
    cards: [],
  };

  return (
    <>
    <DynamicH1 />
      <div className="menu">
        <h1>{name}</h1>
        <p className="resRating">
          {avgRating > 3.5 ? (
            <b className="resRatingGreen">
              {" "}
              &#9733; {avgRating} ({totalRatingsString})
            </b>
          ) : (
            <b className="resRatingRed">
              &#9733; {avgRating} ({totalRatingsString})
            </b>
          )}{" "}
          - {costForTwoMessage}
        </p>
        <p className="cuisines">{cuisines.join(", ")}</p>
      </div>

      {cards.map((resp, i) => (
        <div key={i}>
          {" "}
          <h2 className="menuHeadline">{resp.card.card.title}</h2>
          {resp.card.card.itemCards
            ? resp.card.card.itemCards?.map((response) => (
                <div key={response.card.info.id} className="menuCardView">
                  <div className="menuCardDetails">
                    <div>
                      <h3 className="foodName">{response.card.info.name}</h3>
                      <h4>
                        &#x20B9;{" "}
                        {(response.card.info.price ||
                          response.card.info.defaultPrice) / 100}{" "}
                        /-
                      </h4>
                      {response.card.info.ratings?.aggregatedRating?.rating ? (
                        response.card.info.ratings.aggregatedRating.rating >=
                        3.5 ? (
                          <p className="ratingColorGreen">
                            &#9733;{" "}
                            {response.card.info.ratings.aggregatedRating.rating}
                          </p>
                        ) : (
                          <p className="ratingColorOrange">
                            &#9733;{" "}
                            {response.card.info.ratings.aggregatedRating.rating}
                          </p>
                        )
                      ) : (
                        <p></p>
                      )}
                      <p className="foodDescription">
                        {response.card.info.description}
                      </p>
                    </div>
                  </div>
                  <div className="menuCardImgContainer">
                    <img
                      className="menuCardImg"
                      src={FOOD_IMG_URL + response.card.info.imageId}
                      alt={response.card.info.name}
                    />
                  </div>
                </div>
              ))
            : resp.card.card.categories &&
              resp.card.card.categories?.map((response) => (
                <div key={response.id}>
                  {response.itemCards?.map((response2) => (
                    <div key={response2.card.info.id} className="menuCardView">
                      <div className="menuCardDetails">
                        <div>
                          <h3>{response2.card.info.name}</h3>
                          <h4>
                            &#x20B9;{" "}
                            {(response2.card.info.price ||
                              response2.card.info.defaultPrice) / 100}{" "}
                            /-
                          </h4>
                          {response2.card.info.ratings?.aggregatedRating
                            ?.rating ? (
                            response2.card.info.ratings.aggregatedRating
                              .rating >= 3.5 ? (
                              <p className="ratingColorGreen">
                                &#9733;{" "}
                                {
                                  response2.card.info.ratings.aggregatedRating
                                    .rating
                                }
                              </p>
                            ) : (
                              <p className="ratingColorOrange">
                                &#9733;{" "}
                                {
                                  response2.card.info.ratings.aggregatedRating
                                    .rating
                                }
                              </p>
                            )
                          ) : (
                            <p></p>
                          )}
                          <p>{response2.card.info.description}</p>
                        </div>
                      </div>
                      <div className="menuCardImgContainer">
                        <img
                          className="menuCardImg"
                          src={FOOD_IMG_URL + response2.card.info.imageId}
                          alt={response2.card.info.name}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              ))}
        </div>
      ))}
    </>
  );
};

export default RestaurantMenu;
