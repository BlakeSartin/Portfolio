import "./Portfolio.scss";
import {PhoneAndroid} from '@material-ui/icons'

export default function Portfolio() {
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>

      <ul>
        <li className="active">Featured</li>
        <li>Web App</li>
        <li>Mobile App</li>
        <li>Design</li>

      </ul>
      <div className="container">
        <div className="item">
          <PhoneAndroid className="icon"/>
          <h3>Dating App</h3>
          </div>
          <div className="item">
          <PhoneAndroid className="icon"/>
          <h3>Dating App</h3>
          </div>
          <div className="item">
          <PhoneAndroid className="icon"/>
          <h3>Dating App</h3>
          </div>
          <div className="item">
          <PhoneAndroid className="icon"/>
          <h3>Dating App</h3>
          </div>
        </div>
        
    </div>
  );
}
