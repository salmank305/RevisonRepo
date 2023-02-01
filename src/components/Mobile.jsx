export function Mobile(props){
    // console.log(props);
    // const firstRam = props.ram[0]
    let value;

    if(props.instock){
        value = 'available'
    } else{
        value = 'not available'
    }

    // const structedRam = props.ram.join(',');
    // console.log(structedRam);
  
    let bg1=`rgb(${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)})`
    let bg2=`rgb(${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)},${Math.floor(Math.random()*257)})`

    const mobileStyle = {
        display:'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: '1px solid #3d3d3d',
        margin: '1rem',
        padding: '1rem',
        minWidth: '16rem',
        borderRadius: '0.25rem',

        // backgroundColor: props.theme === 'dark' ? '#3d3d3d': '#ddd',
        // color: props.theme === 'dark' ? '#ddd': '#3d3d3d',
       
        backgroundColor: props.theme === 'dark' ? `${bg1}`: `${bg2}`,
        color: props.theme === 'dark' ? `${bg2}`: `${bg1}`,
       
    }
    
    return (
        <section style={mobileStyle}>
            <h3>{props.company}</h3>
            <div>Model: {props.model}</div>
            <div>Screen Size: {props.screenSize}</div>
            <div>Price: {props.price}</div>
            <div>Color: {props.color}</div>
            <div>Rating: {props.rating}</div>
            <div>In Stock: {props.inStock ? 'available': 'Not available' } </div>
            <div>Ram: {props.ram.join(',')}</div>
            {/* <div>SellerName: {props.sellerInfo.name}</div>
            <div>Seller Address: {props.sellerInfo.address.city}</div>
            <div>Seller Address: {props.name}</div> */}
            {/* conditional rendering  */}
            {/* {props.inStock ? <button>buy</button>: null} */}
            {props.inStock ? <button>buy</button> : <><span style={{color: 'red'}}>coming soon</span> <button>Notify me</button></>}
        </section>
    )
}