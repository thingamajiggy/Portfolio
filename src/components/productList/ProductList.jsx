import Product from "../product/Product";
import "./productList.css";
import { products } from "../../data";

const ProductList = () => {
  return (
    <div className="p1">
      <div className="p1-texts">
        <h1 className="p1-title">My Porfolio</h1>
        <p className="p1-desc">Successful Only😁</p>
      </div>
      <div className="p1-list">
        {products.map((item) => (
          <Product
            key={item.id}
            img={item.img}
            link={item.link}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
