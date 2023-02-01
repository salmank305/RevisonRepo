export function List() {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      arr.push(<div>This is product {i}</div>);
    }
    
  const arr2 = [1, 2, 3, 4, 5, 6];

  const renderList= () =>{
    let arrList=[];
    for(let i=0; i<arr2.length; i++){
      arrList.push(<div>Element No {arr2[i]}</div>)
    }
    return arrList;
  }
  
  return (
    // <ul>
    //     <li></li>
    // </ul>

    <div>
      {/* {arr} */}
      {/* we cant write for loop in jsx insted that we write map */}

      {
         arr2.map((ArrValues,index,wholeArr) => {
            // console.log(ArrValues);
            // console.log(index);
            // console.log(wholeArr);
          return <div>{ArrValues+100}</div>;
       
         })        
      }
      
      {/* {arr}; */}

      {/* {renderList()} */}



      {
        ( function(){
            let arrList=[];
            for(let i=0; i<arr2.length; i++){
              arrList.push(<div>Element No {arr2[i]}</div>)
            }
            return arrList;
          })()
      }

    </div>
    
  );
}
