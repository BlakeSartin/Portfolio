import "./Works.scss"
import { PhoneAndroid, ArrowRight, ArrowLeft } from "@material-ui/icons";

export default function Works() {

  return(
    <div className="works" id="works">
      <div className="slider">
        <div className="container">
          <div className="item">
            <div className="left">
              <div className="leftContainer">
                <div className="imgContainer">
                  <PhoneAndroid/>
                  </div>
                  <h2>Title</h2>
                  <p>Lorem ipsum alfiogjhas asldkfj hsdlfi jbasdl fjkhbasdl jbasli gjb</p>
                  <span>Projects</span>
                </div>
              </div>
            <div className="right">
              <img src="https://media.istockphoto.com/photos/keeping-up-with-modern-advancements-picture-id1081869336?k=20&m=1081869336&s=612x612&w=0&h=0fUoqQ-eRFZXWuvJ3GIVrbmYHAzKEIg6pcu2fhbXQCw="
              alt=""
              />
              </div>
            </div>
          </div>
        </div>
        <ArrowLeft className="iconLeft"/>
        <ArrowRight className="iconRight"/>
      </div>
  )
}