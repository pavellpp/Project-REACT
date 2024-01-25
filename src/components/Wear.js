import './Wear.css'



const Wear = (props) => {
  return (
    <div classMame= 'one-wear'>
      <h2>{props.wearTitle}</h2>
      <img src={props.wearImage} alt='' />
      <p>{props.wearTags}</p>
      <h4>{props.wearPrice}</h4>
   </div>
  )
}

export default Wear
