const Pizza = (props) => {
  return (
    <div className="pizza">
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <img src={props.image} alt={props.name}/>
    </div>
  )
}

export default Pizza;