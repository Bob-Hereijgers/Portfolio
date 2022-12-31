import { useState } from "react";
import { useEffect } from "react";
import { RotatingTriangles } from "react-loader-spinner";
import Compendium from "../Home/Games/Compendium";

const FavoritesPage = () => {
  const [hyruleCompendium, setHyruleCompendium] = useState<Compendium>();
  const [favorite, setFavorite] = useState<string>(
    localStorage.getItem("favorite") ?? ""
  );
  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/entry/${favorite}`
      );
      let json: Compendium = await result.json();

      setHyruleCompendium(json);
    };
    fetchFunction();
  });
  return (
    <>
      {favorite && hyruleCompendium ? (
        <div id="Favorite">
          <div id="FavoriteTitle">
            <h2>Favorite Compendium item:</h2>
            <h2>'{hyruleCompendium?.data.name}'</h2>
          </div>
          <img
            id="FavoriteImage"
            src={hyruleCompendium?.data.image}
            alt="Compendium Item from The Legend of Zelda Breath of the Wild Copyright Nintendo 2017"
          />
          <div id="FavoriteDescriptionBox">
            <p id="FavoriteDescriptionTitle" className="FavoriteText">
              Description:
            </p>
            <p id="FavoriteDescription" className="FavoriteText">
              {" "}
              {hyruleCompendium?.data.description}
            </p>
            <p id="CommonLocationsTitle" className="FavoriteText">
              Common Locations:
            </p>
            {hyruleCompendium?.data.common_locations ? (
              <p id="CommonLocations" className="FavoriteText">
                {hyruleCompendium.data.common_locations[0]}{" "}
                {hyruleCompendium.data.common_locations[1]}
              </p>
            ) : (
              <p id="CommonLocations" className="FavoriteText">
                Unknown
              </p>
            )}
          </div>
        </div>
      ) : (
        <div className="NoFavorite">
          {" "}
          <div>
            {" "}
            <h1>No Favorite Found</h1>
            <p className="NoFavoritetext">
              Select one of the Compendium Items as your favorites.
            </p>
          </div>
        </div>
      )} 
    </>
  );
};

export default FavoritesPage; 
