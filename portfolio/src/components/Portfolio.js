import "./Portfolio.scss";
import { PhoneAndroid } from "@material-ui/icons";
import PortfolioList from "./Portfolio_List/PortfolioList";
import { useState } from "react";

export default function Portfolio() {
  const [selected, SetSelected] = useState("featured");

  const list = [
    {
      id: "featured",
      title: "Featured",
    },
    {
      id: "web",
      title: "Web App",
    },

    {
      id: "mobile",
      title: "Mobile App",
    },

    {
      id: "design",
      title: "Design",
    },
  ];

  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            SetSelected={SetSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        <div className="item">
          <PhoneAndroid className="icon" />
          <h3>Dating App</h3>
        </div>
        <div className="item">
          <PhoneAndroid className="icon" />
          <h3>Dating App</h3>
        </div>
        <div className="item">
          <PhoneAndroid className="icon" />
          <h3>Dating App</h3>
        </div>
        <div className="item">
          <PhoneAndroid className="icon" />
          <h3>Dating App</h3>
        </div>
      </div>
    </div>
  );
}
