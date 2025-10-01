import { useState } from "react";

export function ProductCard(props) {
  // let stockCount = props.product.stockCount;
  const [stockCount,setStockCount] = useState(props.product.stockCount);
  const [showmore,setShowMore] = useState(false);

  return (
    <article>
      <h2>{props.product.title}</h2>
      <img
        src={props.product.imageSrc}
        alt={props.product.title}
        width="300px"
        height="auto"
      />
      <p>Specification:
        <button onClick={()=>setShowMore(!showmore)}>
          {showmore?"Hide":'Show'}
        </button>
      </p>
      {showmore&& <ul style={{ listStyle: "none", padding: 0 }}>
        {props.product.specification.map(spec => (
          <li key={spec}>{spec}</li>   
        ))}
        </ul>
      }
      
      
      <Status stockCount={stockCount}/>
      
      {stockCount>0 && (<button onClick={handleClick}>
        Buy (From {props.product.price})
      </button>)}
    </article>
  );

  function Status({stockCount}){

    const notAvailable = <p style={{fontSize:"14px",color:"red"}}>Not Available</p>
    const available = <p style={{fontSize:"14px",color:"green"}}>{stockCount} Item Available</p>
    
    return stockCount == 0 ? notAvailable : available;
  }

  function handleClick(){
    setStockCount(stockCount-1);    
    props.onPurchase(props.product)
  }



}
