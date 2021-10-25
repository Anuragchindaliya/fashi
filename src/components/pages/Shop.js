import Products from "../common/products";
import Sidebar from "../sidebar";

function Shop(){
    return(
        <>
            {/* Product Shop Section Begin */}
      <section className="product-shop spad">
        <div className="container">
          <div className="row">
              {/* Categories Shop Section Begin */}
                <Sidebar/>
            {/* Categories Shop Section End */}
            <Products/>
          </div>
        </div>
      </section>
      {/* Product Shop Section End */}
        </>
    );
} export default Shop;