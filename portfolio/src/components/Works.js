import "./Works.scss";
import { PhoneAndroid, ArrowRight, ArrowLeft, Computer, Android,  FormatPaint } from "@material-ui/icons";
import { useState } from "react";

export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0)

  const data = [
    {
      id: "1",
      title: "Web Design",
      desc: "asldkjgbasdflvkjbazdsfvlkjhb",
      icon:<Computer />,
      img: "https://cdn.dribbble.com/users/1753227/screenshots/16784743/media/a2084c7185909024af790e4a93241b42.png?compress=1&resize=400x300&vertical=top",
    },
    {
      id: "2",
      title: "Mobile App",
      desc: "dgakjlgflksadfg",
      icon:<Android />,
      img: "https://media.istockphoto.com/photos/heart-love-on-a-mobile-phone-picture-id1034417688?k=20&m=1034417688&s=612x612&w=0&h=6wKoSVdA78HS22vYs9JcCWdcQR7grdQ7-f2k1zaLums=",
    },
    {
      id: "3",
      title: "Api",
      desc: "asldkjgbasdflvkjbazdsfvlkjhb",
      icon:<PhoneAndroid />,
      img: "https://cdn.dribbble.com/users/774375/screenshots/11047506/media/9d49544350977efd38dd0c3f2d30c037.png?compress=1&resize=400x300",
    },
    {
      id: "4",
      title: "Design",
      desc: "asldkjgbasdflvkjbazdsfvlkjhb",
      icon:<FormatPaint />,
      img: "https://cdn.dribbble.com/users/110372/screenshots/12022846/media/3db54efccd2cf7ac65cb68f8d13d387a.png?compress=1&resize=400x300",
    },
  ];

  const handleClick = (direction) => {
    direction === "left" ? setCurrentSlide(currentSlide > 0 ? currentSlide -1 : data.length-1) : 
    setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0)
  }

  return (
    <div className="works" id="works">
      <div className="slider" style={{transform:`translateX(-${currentSlide*100}vw)`}}>
        {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    {d.icon}
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Projects</span>
                </div>
              </div>
              <div className="right">
                <img src={d.img} alt="" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <ArrowLeft className="iconLeft" onClick={()=>handleClick("left")}/>
      <ArrowRight className="iconRight" onClick={()=>handleClick()}/>
    </div>
  );
}
