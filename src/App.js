import './App.css';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';
import { ProductFilter } from './components/ProductFilter';
import { useState } from 'react';

function App() {
  const[filters,setFilters] = useState(
    {
      minPrice : 0,
      maxPrice : 999,
    }
  )
  const products = [
    {
      imageSrc: "images/iphone15pro.webp",
      title: "iPhone 15Pro",
      specification: ["A19 SOC Processor", "3260 mah Battery", "6.1 inches"],
      price: 799,
      stockCount : 9,
    },
    {
      imageSrc: "images/iphone15pro.webp",
      title: "iPhone 14Pro",
      specification: ["A19 SOC Processor", "3260 mah Battery", "6.1 inches"],
      price: 899,
      stockCount : 0,

    },
    {
      imageSrc: "images/iphone15pro.webp",
      title: "iPhone 16Pro",
      specification: ["A19 SOC Processor", "3260 mah Battery", "6.1 inches"],
      price: 1029,
      stockCount : 4,
    },
    
  ];


  return (
    <div>
      <ProductList>
        {products.map((product) => (
          <ProductCard
            product={product}
            onPurchase={handlePurchase}
          />
        ))}
      </ProductList>
      <h2 className='App'>Product Filter by Price</h2>
      <ProductFilter filters={filters} onFilter={handleFilter}/>
      <hr/>
      <ul className='App'>
        {products.filter(({price}) => price >= filters.minPrice && price <= filters.maxPrice)
          .map(({title,price}) => (
            <li style={{ listStyle: "none", padding: 0 }} key={title}>{title} costs ${price}</li>
          ))
        }
      </ul>
      
    </div>
  );

  // function parts

  function handlePurchase(){
    
  }

   function handleFilter(key,value){
    setFilters((prevFilters)=>({
      ...prevFilters,[key]:value
    }))
  }
}

export default App;
