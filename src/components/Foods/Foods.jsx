import { useEffect, useState } from "react";

import Food from "../Food/Food";


const Foods = ({handleTable}) => {

    const [foods, setFoods] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
       
            <div className="md:w-3/5 grid lg:grid-cols-2 grid-cols-1 lg:mx-auto mx-10">
            {
                foods.map(food=> <Food
                key={food.id}
                food={food}
                handleTable={handleTable}
                ></Food>)
            }
            </div>
    );
};

export default Foods;