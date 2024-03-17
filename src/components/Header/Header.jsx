
import { MdPeopleAlt } from "react-icons/md";
const Header = () => {
    return (
      <div className="container mx-auto max-w-6xl">
          <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
       
        <li><a>About</a></li>
        <li><a>Reciepes</a></li>
        <li><a>Search</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Recipe Calories</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Home</a></li>
     
         <li><a href="">About</a></li>   
         <li><a href="">Recipes</a></li>   
         <li><a href="">Search</a></li>   
     
     
    </ul>
  </div>
  <div className="navbar-end">
  <div className="form-control">
      <input type="text" placeholder= "Search" className="input input-bordered  md:w-auto rounded-3xl w-14" />
    </div>
    <a className="btn rounded-full bg-green-500 ml-5"><MdPeopleAlt /></a>
  </div>
</div>
        </div>
    );
};

export default Header;