function Navbar(props){
    return(
        <nav class="navbar navbar-expand-lg bg-light ml-32 mt-12">
  <div class="container-fluid">
    <a class="bg-white p-1 rounded"  href="#">{props.head}</a>
    <button class="ml-20">
      <span class="font-bold  bg-gray-500 text-red-200 p-2 rounded"> I am Button => </span>
    </button>
    
    <div class="flex mt-4  " id="navbarNav">
      <ul class="flex ">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="ml-5">
          <a class="nav-link" href="#">New item</a>
        </li>
        <li class="ml-5">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="ml-5">
          <a class="ml-5">Disabled</a>
        </li>
      </ul>
      <h1 class="ml-5 font-bold"> I am Props {props.name}</h1>
    </div>
  </div>
</nav>
)
}
export default Navbar