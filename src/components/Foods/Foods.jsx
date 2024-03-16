import { useEffect } from "react";
import { useState } from "react";
import Food from "../Food/Food";


const Foods = () => {

    const [foods, setFoods] = useState([])

    useEffect(()=>{
        fetch('fakedata.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[])

    return (
        <div className="container mx-auto max-w-6xl">
          
            <div>
            {
                foods.map(food=> <Food
                key={food.id}
                food={food}
                ></Food>)
            }
            </div>
        </div>
    );
};

export default Foods;