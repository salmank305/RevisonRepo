import React, { useState } from "react";

export default function UpdateBasedOnPrevState() {
  const [sentence, setSentence] = useState("This ");

  const Addwords = () => {
    // setSentence(sentence+'is ')
    // setSentence(sentence+'react ')
    // setSentence(sentence+'batch ')
    // setSentence(sentence+'2022')
//value ==> This
    setSentence((value)=>{
        return value + "is "
    });
    //value => THis is
    setSentence((sentence)=>sentence+'react ');
     //value => THis is react
    setSentence((sentence)=>sentence + "batch");
    //value => THis is react batch
    setSentence((sentence)=>sentence + "2022");
    //value => THis is react batch 2022

    // updating state based on previous state
  };

  

  return (
    <>
      <div>UpdateBasedOnPrevState</div>
      <div>Sentence:{sentence}</div>
      <button onClick={Addwords}>Add Words</button>
    </>
  );
}
