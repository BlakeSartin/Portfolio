import "./Topbar.scss"
import {Phone, Mail} from '@material-ui/icons'

export default function Topbar({menuOpen, setMenuOpen}) {
  return(
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
      <div className="left">
        <a href="#intro" className="logo">B.</a>
        <div className="itemcontainer">
          <Phone className="icon"/>
          <span>778-384-2705</span>
          </div>
          <div className="itemcontainer">
          <Mail className="icon"/>
          <span>blake.sartin8@gmail.com</span>
          </div>
          </div>
      <div className="right">
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
          <span className="line1"></span>
          <span className="line2"></span>
          <span className="line3"></span>
          </div>
        </div>
        </div>
      </div>
  )
}