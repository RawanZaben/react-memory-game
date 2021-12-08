import { logRoles } from "@testing-library/dom";
import React, { useState } from "react";
import "./Geme.css";
export default function Geme() {
  const [memoryArr, setmemoryAarr] = useState([
    { id: 1, name: "tiger", url: "https://2u.pw/m8gIJ", hide: true },
    { id: 2, name: "tiger", url: "https://2u.pw/m8gIJ", hide: false },
    { id: 3, name: "moncy", url: "https://2u.pw/wfDBE", hide: false },
    { id: 4, name: "moncy", url: "https://2u.pw/wfDBE", hide: false },
  ]);
  const [currentOptions, setcurrentOptions] = useState(null);
  const [counter, setCounter] = useState(1);

  const handleCilick = (obj) => {

    if (counter % 2 === 1) {
      setcurrentOptions(obj);
      

    } else if (counter % 2 === 0) {
      if (obj.name === currentOptions.name) {
        console.log("compere here");
        console.log("obj", obj.name);
        console.log("cc", currentOptions);
      } else {
        console.log("gggggggggggggggggggg");
      }
    }
    setCounter(counter + 1);
  };


  return (
    <>
      <div className="memory">
        {memoryArr.map((ele, i) => {
          if (ele.hide === true){
            return (
                <div>
                  <img
                    onClick={() => {
                      handleCilick(ele);
                    }}
                    className="cardimg"
                    src={ele.url}
                  />
                </div>
              );
          }else{
            return (
                <div> 
                  <img
                    onClick={() => {
                      handleCilick(ele);
                    }}
                    className="cardimg"
                    src="https://2u.pw/bfsls"
                  />
                </div>
              );
          }
        })}
      </div>
    </>
  );
}
