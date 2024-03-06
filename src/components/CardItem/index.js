import './index.css'

const CardItem = props => {
  const {cardDetails} = props
  const {title, description, imgUrl, className} = cardDetails
  return (
    <li className={`list-item ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="description">{description}</p>
      <img src={imgUrl} alt={title} className="image" />
    </li>
  )
}

export default CardItem
