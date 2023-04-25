import "./product.css";

const Product = ({ img, link, description }) => {
  return (
    <div className="p-whole">
      <div className="p">
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="" className="p-img" />
        </a>
      </div>
      <div className="p-wrapper">
        <div className="p-desc">{description}</div>
      </div>
    </div>
  );
};

export default Product;
