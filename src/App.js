import './App.css';
import { ProductList } from './components/ProductList';
import { ProductCard } from './components/ProductCard';

function App() {
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

  function handlePurchase(product) {
    // const stockCount = product.stockCount - 1;  
    // product.stockCount = stockCount;
    // alert(`You clicked on ${product.title} which costs ${product.price}`);
  }

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
      <hr/>
      <h2 className='App'>Product which cost up to $1000</h2>
      <ul className='App'>
        {products.filter(({price}) => price < 1000)
          .map(({title,price}) => (
            <li style={{ listStyle: "none", padding: 0 }} key={title}>{title} costs ${price}</li>
          ))
        }
      </ul>
      
    </div>
  );
}

export default App;
