import "./Intro.scss";
import { ArrowDownward } from "@material-ui/icons";

export default function Intro() {
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/kindpng_3371936.png" alt="" />
        </div>
      </div>
      <div className="right">
      <div className="wrapper">
        <h2>Hello, My name is </h2>
        <h1>Blake Sartin</h1>
        <h3>
          Full-Stack Developer<span>Designer</span>
        </h3>
      </div>
      <a href="#portfolio">
        <ArrowDownward className="icon" />
      </a>
      </div>
    </div>
  );
}
