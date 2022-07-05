import "./Testimonials.scss";
import {
  ArrowRightOutlined,
  YouTube,
  Twitter,
  PersonOutlined,
} from "@material-ui/icons";

export default function Testimonials() {
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        <div className="card">
          <div className="top">
            <ArrowRightOutlined className="left" />
            <PersonOutlined className="user"/>
            <YouTube className="right"/>
          </div>
          <div className="center">
            lorem ipsum sdlgkjasbfgdlkjasbfglakjsfbglakjsfb asfgkjadsolf aldsfk
            jgnadlfkj gbnasldfkj 
          </div>
          <div className="bottom">
            <h3>Bob</h3>
            <h4>CEO of lorem</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
