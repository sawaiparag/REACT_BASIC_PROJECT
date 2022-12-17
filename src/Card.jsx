function Card(props){
    return(

<div class="ml-32 mt-5" style= {{width:"15rem"}}>
  <img src={props.link} class="w-48" alt="..."/>
  <div class="card-body">
    <h5 class="font-bold ml-20">{props.head}</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
)
}
export default Card