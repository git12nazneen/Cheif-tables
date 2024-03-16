

const Food = ({food}) => {
  console.log(food)
  const{id,recipe_name, recipe_image,short_description ,ingredients, preparing_time, calories} = food;
    return (
        <div className="container mx-auto max-w-6xl">
            <div className="card w-80 bg-base-200 shadow-xl my-9">
  <figure className="px-7 pt-7">
    <img src={recipe_image} alt="" className="rounded-xl" />
  </figure>
  <div className="card-body  text-start">
    <h2 className="card-title text-start">{recipe_name}</h2>
    <p className="font-light my-3 text-xs">{short_description}</p>
    <hr />
    <h2 className="font-bold my-2">Ingredient : {ingredients.length}</h2>
    <ul className="font-light text-xs">
     {
      ingredients.map(ingredient => <li>*{ingredient}</li>)
     }
    </ul>
    <hr />
    <div className="md:flex my-2 font-light">
      <div className="flex-1">{preparing_time}</div>
      <div className="flex-1">{calories}</div>
    </div>
    <div className="card-actions">
      <button className="btn  bg-green-500 rounded-full">Want to cook</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default Food;