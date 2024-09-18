import { useEffect, useState } from 'react';
import Card from '../components/Card';
import { getProducts } from '../services/product';
import Navbar from '../components/Navbar';


const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  return(
    <>
    <Navbar />
    <section className="container mx-auto px-10">
      <h1 className="text-2xl font-semibold mb-2 text-center">Product Catalogue</h1>
      <div className="flex gap-2">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5">
          {products.map((product) => (
            <Card 
              key = {product.id}
              data = {product}
              // onClick = {() => }
            />
          ))}
        </div>
      </div>

    </section>

    </>
  );
};

export default Product
