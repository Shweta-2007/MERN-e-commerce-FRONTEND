import { Link } from "react-router-dom";
import ProductCard from "../components/product-card";
import { BACKGROUND_IMAGE } from "../constants";

const Home = () => {
  const addToCartHandler = () => {};
  return (
    <div className="home">
      <section>
        <img src={BACKGROUND_IMAGE} alt="backgroundImage" />
      </section>

      <h1>
        Latest Products
        <Link to={"/search"} className="findmore">
          More
        </Link>
      </h1>
      <main>
        <ProductCard
          productId="asdfg"
          name="Macbook"
          price={4545}
          stock={10}
          handler={addToCartHandler}
          photo="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mba-digitalmat-gallery-2-202111?wid=364&hei=333&fmt=png-alpha&.v=1664581580690"
        />
      </main>
    </div>
  );
};

export default Home;
