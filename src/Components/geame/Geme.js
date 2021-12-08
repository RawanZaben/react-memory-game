import React, { useState  } from "react";
import "./Geme.css";
export default function Geme() {
  const [memoryArr, setmemoryAarr] = useState([
    { id: 1, name: "1", url: "https://2u.pw/IZ1e3", hide: false },
    { id: 2, name: "1", url: "https://2u.pw/IZ1e3", hide: false },
    { id: 3, name: "2", url: "https://2u.pw/VtL38", hide: false },
    { id: 4, name: "2", url: "https://2u.pw/VtL38", hide: false },
    { id: 5, name: "3", url: "https://2u.pw/xUXCM", hide: false },
    { id: 6, name: "3", url: "https://2u.pw/xUXCM", hide: false },
    { id: 7, name: "4", url: "https://2u.pw/KaaNB", hide: false },
    { id: 8, name: "4", url: "https://2u.pw/KaaNB", hide: false },
    { id: 9, name: "5", url: "https://2u.pw/uD1zc", hide: false },
    { id: 10, name: "5", url: "https://2u.pw/uD1zc", hide: false },
    { id: 11, name: "6", url: "https://2u.pw/iLQRr", hide: false },
    { id: 12, name: "6", url: "https://2u.pw/iLQRr", hide: false },
    { id: 13, name: "7", url: "https://2u.pw/FcfuL", hide: false },
    { id: 14, name: "7", url: "https://2u.pw/FcfuL", hide: false },
    { id: 15, name: "8", url: "https://2u.pw/jEEpV", hide: false },
    { id: 16, name: "8", url: "https://2u.pw/jEEpV", hide: false },
  ]);
  const [counter, setCounter] = useState(1);
  const [clickOne, setClickOne] = useState("")
  const [clickOneID, setClickOneID] = useState("")
  const [currentOptions, setcurrentOptions] = useState(null);

  const handleCilick = (obj) => {
    const id = obj.id
    let newArr=[...memoryArr]


    for(let i=0;i<memoryArr.length;i++){
        if(memoryArr[i].id===id){
          if(memoryArr[i].hide===true){
            newArr[i].hide=false
          }else{
            newArr[i].hide=true 
        }
    }
    }
    setmemoryAarr(newArr) 
     
    if (counter % 2 === 1) {
      setcurrentOptions(obj);
            

    } else if (counter % 2 === 0) {
      if (obj.name === currentOptions.name) {
        console.log("compere here");
        console.log("obj", obj);
        console.log("cc", currentOptions);
      } else {
        console.log("gggggggggggggggggggg");
      }
     
    
    setCounter(counter + 1);
    

        setTimeout(()=>{
            const newArr = [...memoryArr]
            for(let i=0;i<newArr.length;i++){
                if( newArr[i].id===obj.id || newArr[i].id === clickOneID){
                    newArr[i].hide = false
                    setClickOne("")

                }

            }
            setmemoryAarr(newArr) 

        },700)
    }else{

        setClickOne("")

    }
    setmemoryAarr(newArr) 
  
  };

  
  return (
    <>
    <h1 className="h1">Game Memory</h1>
      <div className="memory">
        {memoryArr.map((ele, i) => {
          if (ele.hide === true){
            return (
                <div>
                  <img onClick={() => { handleCilick(ele); }}  className="cardimg" src={ele.url}  />
                </div>
              );
          }else{
            return (
                <div>
                  <img onClick={() => { handleCilick(ele); }} className="cardimg" src="https://2u.pw/KV8ri"/>
                </div>
              );
          }
        })}
      </div>
    </>
  );
}
