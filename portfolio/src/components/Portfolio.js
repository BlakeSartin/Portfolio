import "./Portfolio.scss";
import { PhoneAndroid } from "@material-ui/icons";
import PortfolioList from "./Portfolio_List/PortfolioList";
import { useEffect, useState } from "react";
import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  apiPortfolio,
  designPortfolio,
} from ".//..//data";
export default function Portfolio() {
  const [selected, SetSelected] = useState("featured");
  const [data, setData] = useState([]);

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
    {
      id: "Api",
      title: "Api",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "featured":
        setData(featuredPortfolio);
        break;
      case "web":
        setData(webPortfolio);
        break;
      case "mobile":
        setData(mobilePortfolio);
        break;
      case "Api":
        setData(apiPortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      default:
        setData(featuredPortfolio);
    }
  }, [selected]);

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
        {data.map((d) => (
          <div className="item">
            <img 
            src={d.img} 
            alt=""/>
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
