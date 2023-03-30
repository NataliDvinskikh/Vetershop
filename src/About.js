import { useState } from "react";
import { dataNew } from "./dataNew";

function About() {

const [picture,setPicture] = useState(0);
const {photo} = dataNew[picture];
const [showText, setShowText] = useState(false);
const str = ` A group of companies founded in 2014 and creating several projects: the media platform www.vetermagazine.ru, offline and online stores Veter Shop, creative agency Veter Agency, a lifestyle magazine Veter Magazine, school of entrepreneurs Veter School, sports school Veter Body School and city festivals Veter Festival. Our first and flagship store is located on the Taras Shevchenko embankment, in the beautiful bright premises of the Friends Social Club, which we opened in the spring of 2018 together with the "No Prescription" cafe. There are many brands here, each of which we have personally selected: candles, clothes, cosmetics, children's toys and clothes, books, handmade ceramics, jewelry, home decor and much more.`;

const previousPicture = () => {
  setPicture(picture=>{
    picture--;
    if(picture<0){
      picture=dataNew.length-1;
    }
    return picture
  })
}

const nextPicture = () => {
  setPicture((picture=>{
    picture++;
  if(picture>dataNew.length-1){
    picture = 0;
  }
  return picture;
}))
}

const showTextClick = () => {
  setShowText(!showText)
}


    return (
      <div>
        <div className="description">
           <p>{showText ? str : str.substring(0,83)+ "..."}
           <button className="btn" onClick={showTextClick}>{showText ? "Show less" : "Show more"}</button>
           </p>
        </div>
      <div className="container">
      <button  className="btn"  onClick={previousPicture}> Previous </button>
         <img src={photo} width="400px" alt ="place"/>
        <button className="btn"  onClick={nextPicture}>Next</button>
      </div>

      </div>

    )
}

export default About;
