import "./Testimonials.scss";
import {
  ArrowRightOutlined,
  YouTube,
  Twitter,
  PersonOutlined,
  Instagram,
} from "@material-ui/icons";

export default function Testimonials() {

  let data = [
   {
      id:2,
      name: "Tyus Bro",
      title: "Co-Founder of Best Friends Inc",
      icon: <Twitter />,
      desc:"Lorem impsum alghjbav asdkljfhba thlkndfgb sdivjb",
      featured: false,
    },
    {
      id:1,
      name: "Kat Teitz",
      title: "CEO of Fantastic Girlfriend",
      icon: <YouTube />,
      desc:"Lorem impsum alghjbav asdkljfhba thlkndfgb sdivjb",
      featured: true,
    },
    {
      id:3,
      name: "Max Kim",
      title: "Co-Founder of Best Friends Inc",
      icon: <Instagram />,
      desc:"Lorem impsum alghjbav asdkljfhba thlkndfgb sdivjb",
      featured: false,
    },

  ]
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
          <div className="top">
            <ArrowRightOutlined className="left" />
            <PersonOutlined className="user"/>
            {d.icon}
          </div>
          <div className="center">
           {d.desc}
          </div>
          <div className="bottom">
            <h3>{d.name}</h3>
            <h4>{d.title}</h4>
          </div>
        </div>
        ))}
      </div>
    </div>
  );
}
