import React, { useState } from "react";
import Boss from "../assets/boss-hog.png";
import BabyHog from "./BabyHog";
import offspring from "../data.js"

function HogBoss() {
  const [eyeColor, setEyeColor] = useState("blue");

  const eyeColors = ["Blue", "Sun", "Glowing"]
  function handleChangeEyeColor(e) {
    setEyeColor(e.target.value);
  }

  return (
    <div>
      {eyeColors.map((color, index) => {
        return ([
          <input
                key={index}
                type="radio"
                name="eyeColor"
                value={color.toLowerCase()}
                onChange={handleChangeEyeColor}
              />,
              `${color}`, <br></br>
        ]);
      })}
      <h2>Name: Blaster Boss</h2>
      <h3>Weight: 2.54 Tons</h3>
      <h3>Eye Color: {eyeColor}</h3>
      <div id="boss-domicile">
        <img id="boss-blaster" src={Boss} alt="" />
      </div>
      <ul className="hoglist">
        {offspring.map(baby => 
          <BabyHog key={baby.id} name={baby.name} hobby={baby.hobby} eyeColor={eyeColor}/>
        )}
      </ul>
    </div>
  );
}

export default HogBoss;
