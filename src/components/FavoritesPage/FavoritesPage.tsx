import { useState } from "react";
import { useEffect } from "react";
import Compendium from "../Home/Games/Compendium";

const FavoritesPage= () => {
  const [hyruleCompendium, setHyruleCompendium] = useState<Compendium>();
  let pick = localStorage.getItem("favorite") || "1";

  useEffect(() => {
    const fetchFunction = async () => {
      let result = await fetch(
        `https://botw-compendium.herokuapp.com/api/v2/entry/${pick}`
      );
      let json: Compendium = await result.json();

      setHyruleCompendium(json);
    };
    fetchFunction();
  });
  return (
    <>
      {hyruleCompendium && (
        <div id="Favorite">
          <div id="FavoriteTitle">
            <h2>Favorite Compendium item:</h2>
            <h2>'{hyruleCompendium.data.name}'</h2>
          </div>
          <img
            id="FavoriteImage"
            src={hyruleCompendium.data.image}
            alt="Compendium Item from The Legend of Zelda Breath of the Wild Copyright Nintendo 2017"
          />
          <div id="FavoriteDescriptionBox">
            <p id="FavoriteDescriptionTitle" className="FavoriteText">
              Description:
            </p>
            <p id="FavoriteDescription" className="FavoriteText">
              {" "}
              {hyruleCompendium.data.description}
            </p>
            <p id="CommonLocationsTitle" className="FavoriteText">
              Common Locations:
            </p>
            {hyruleCompendium.data.common_locations ? (
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
      )}
    </>
  );
};

export default FavoritesPage;
