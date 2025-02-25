
const Prepare = ({table, handleDelete,current}) => {
    // console.log(table)
//    console.log(current)
    return (
        <div className="md:w-2/5 my-10 text-black bg-slate-100 p-5 rounded-3xl border border-gray-300 lg:mx-auto mx-5">
           <div className="">
           <h1 className="  text-center text-2xl font-bold border-b-2 border-gray-400">Want to cook:{table.length}</h1>
           <hr />
           <hr />
           <div className="flex py-3 mb-10">
            <div className="flex-1">Name</div>
            <div className="flex-1">  Time</div>
            <div className="flex-1">Calories</div>
            <div className="flex-1"></div>
           </div>
            <div className="cart-info">
                {
                    table.map((item,index) =>(
                        // console.log(item),
                        <div className="flex py-2 font-light text-sm bg-white rounded-3xl mt-3" key={item.id}>
                            <p className="pt-3 pl-2">{index+1}</p>
                        <div className="flex-1 py-3 pl-2">{item.recipe_name.slice(0,10)}</div>
                        <div className="flex-1 py-3">{item.preparing_time} </div>
                        <div className="flex-1 py-3">{item.calories} </div>
                        <button 
                        onClick={()=> handleDelete(item)} className="btn rounded-full bg-green-500 ">Prepare</button>
                    </div>
                    ))
                }
             </div>
           <h1 className="  text-center text-2xl font-bold border-b-2 border-gray-400">Prepare to cook:{current.length}</h1>
           <hr />
           <hr />
           <div className="flex py-3">
            <div className="flex-1">Name</div>
            <div className="flex-1">Time</div>
            <div className="flex-1">Calories</div>
           </div>
           <div className="currently-cook">
          {
            current.map((data,index)=>{
                return(
                    <div className="flex py-2 font-light text-sm bg-white rounded-3xl mt-3">
                        <p className="pt-3 pl-2">{index+1}</p>
                    <p className="flex-1 py-3 pl-2">{data.recipe_name.slice(0,10)}</p>
                    <p className="flex-1 py-3">{data.preparing_time}</p>
                    <p className="flex-1 py-3">{data.calories}</p>
                </div>
                )
                
            
            })
          }
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