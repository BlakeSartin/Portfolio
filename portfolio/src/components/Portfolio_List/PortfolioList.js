import "./PortfolioList.scss"

export default function PortfolioList({id, title, active, SetSelected}) {
  return (
    <li className={active ? "portfolioList active" : "portfolioList"} onClick={()=> SetSelected(id)}>
      {title}
      </li>
  )
}