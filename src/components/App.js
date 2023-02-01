import './App.css';
import { Footer } from "./Footer";
import { Header } from "./Header/Header";
import { Login } from "./Header/Login";
import { List } from "./Lists/List";
import { Mobile } from "./Mobile";
import { Product } from "./Product";
import { ReactElement } from "./ReactElements/ReactElement";
import { ProductList } from "./Productist/ProductList";
import { MultipleReturn } from "./ConditionalRendering/MultipleReturn";
function App() {
  const myInfo = {
    roll: "student",
    favcolor: "red",
  };

  const MyRam = ["6gb", "12gb", "18gb"];

  return (
    <div>
      {/* <Header /> */}
      {/* <Product /> */}
      {/* props */}
      {/* <Mobile
        company="Apple"
        model="iphone"
        price={70000}
        color="pink"
        Instock={true}
        ram={["6gb", "8gb"]}
        MyRam={MyRam}//we can pass arr like this also
        SellerInfo={{name:"salman",add:{city:"nasik"}}}
        studentIfo={myInfo} //we can pass object like this aslo
        {...myInfo} // we can ascess indivial value by using spred oerator
        //function can also be pass as props
        
        /> */}
    
    {/* <Mobile
        company="Apple"
        model="iphone"
        price={70000}
        color="pink"
        ram={["6gb", "8gb"]}
        MyRam={MyRam}//we can pass arr like this also
        SellerInfo={{name:"salman",add:{city:"nasik"}}}
        studentIfo={myInfo} //we can pass object like this aslo
        {...myInfo} // we can ascess indivial value by using spred oerator
        //function can also be pass as props
        
        /> */}

      {/* <Footer batchname="java"/> */}

      {/*  props  & children we also passs component as children*/}
      {/* <Footer batchname="linux">
        <div>this is come from children props1</div>
      </Footer> */}

      {/* <Footer>
       <Login/>
        <div>this is come from children props2</div>
      </Footer> */}

      {/* <List/> */}

      {/* <ReactElement/> */}
      
      <ProductList section="main"/>
      <ProductList direction="col" section="grocery"/>

      {/* <MultipleReturn segment="grocery"/> */}

    </div>
  );
}

export default App;
