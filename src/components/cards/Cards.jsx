import React, { useState } from "react";
import "./Cards.css";
import { CardData } from "../../data/Data";
import Card from "../card/Card";

const Cards = () => {
  return (
    <div className="Cards">
      {CardData.map((item, index) => {
        return (
          <div className="parentContainer" key={index}>
            <Card
              title={item.title}
              color={item.color}
              barValue={item.barValue}
              value={item.value}
              icon={item.png}
              series={item.series}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
