import { useState } from "react";
import { data } from "./data";
import GoodsList from "./GoodsList";
import Buttons from "./Buttons";
import './App.css';

function Home () {

    const [goods, setGoods] = useState(data);

    const chosenGoods = (searchTerm) => {
        const newGoods=data.filter(element => element.searchTerm === searchTerm);
        setGoods(newGoods);
    }

    return (
        <div>
          <div className='cont'>
            <h2 className='back'> Free Standart Shipping</h2>
          </div>
          <Buttons filteredGoods={chosenGoods}/>
          <GoodsList itemsForSale = {goods}/>
        </div>
      );

}


export default Home;
