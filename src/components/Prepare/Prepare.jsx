

const Prepare = ({table, handleDelete}) => {
    // console.log(table)
   

   


    return (
        <div className="md:w-2/5 my-10 text-black bg-slate-200 p-5">
           <div className="">
           <h1 className="  text-center text-2xl font-bold border-b-2 border-gray-400">Want to cook:{table.length}</h1>
           <hr />
           <hr />
           <div className="flex py-3">
            <div className="flex-1">Name</div>
            <div className="flex-1">Time</div>
            <div className="flex-1">Calories</div>
            <div className="flex-1"></div>
           </div>
             
           
            <div className="cart-info">
                {
                    table.map((item,index) =>(
                        console.log(item),
                        
                        <div className="flex py-2 font-light text-sm bg-white rounded-3xl mt-3" key={item.id}>
                            <p className="pt-3 pl-2">{index+1}</p>
                        <div className="flex-1 py-3 pl-2">{item.recipe_name.slice(0,10)}</div>
                        <div className="flex-1 py-3">{item.preparing_time} </div>
                        <div className="flex-1 py-3">{item.calories} </div>
                        <button 
                        onClick={()=> handleDelete(item.id)} className="btn rounded-full bg-green-500 ">Prepare</button>
                    </div>
                    ))
                }
             </div>

           

          
           <h1 className="  text-center text-2xl font-bold border-b-2 border-gray-400">Prepare to cook:</h1>
           <hr />
           <hr />
           <div className="flex py-3">
            <div className="flex-1">Name</div>
            <div className="flex-1">Time</div>
            <div className="flex-1">Calories</div>
           </div>

           <div className="flex py-3">
           <div className="flex-1"><h2>Total time:</h2></div> 
             <div className="flex-1"> <h3>Total calories</h3></div>
            </div>
           
          
           </div>
        </div>
    );
};

export default Prepare;