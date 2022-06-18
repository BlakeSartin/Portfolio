import "./Topbar.scss"
import {Phone, Mail} from '@material-ui/icons'

export default function Topbar() {
  return(
    <div className="topbar">
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">B.</a>
        <div className="itemcontainer">
          <Phone className="icon"/>
          <span>778-384-2705</span>
          </div>
          <div className="itemcontainer"></div>
          <Mail className="icon"/>
          <span>blake.sartin8@gmail.com</span>
          </div>
        </div>
      <div className="right">
     
        </div>
      </div>
  )
}