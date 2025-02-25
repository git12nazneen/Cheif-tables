import { CiTimer } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Food = ({food,handleTable}) => {
  // console.log(handleTable)

  const{recipe_name, recipe_image,short_description ,ingredients, preparing_time, calories} = food;
    return (
        <div className=" grid-cols-2">
            <div className="card w-72 bg-base-200 shadow-xl my-9 border border-gray-300">
  <figure className="px-5 pt-5">
    <img src={recipe_image} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body  text-start">
    <h2 className="card-title text-start">{recipe_name}</h2>
    <p className="font-light my-1 text-xs">{short_description}</p>
    <hr />
    <h2 className="font-bold my-1">Ingredient : {ingredients.length}</h2>
    <ul className="font-light text-xs">
     {
      ingredients.map(ingredient => <li>*{ingredient}</li>)
     }
    </ul>
    <hr />
    <div className="md:flex my-1 font-light justify-between">
      <div className="flex">
        <h1><CiTimer /></h1>
        <h1>{preparing_time}</h1>
        </div>

      <div className="flex">
   
      <h2><FaFire /></h2>
      <h2>{calories}</h2>
    </div>

    </div>
    <div className="card-actions">
      <button onClick={()=>handleTable(food)} className="btn  bg-green-500 rounded-full">Want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Food;