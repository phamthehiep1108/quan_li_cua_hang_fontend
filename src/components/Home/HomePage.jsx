import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import {
  FaShippingFast,
  FaLock,
  FaCheckCircle,
  FaPiggyBank,
  FaTags,
} from "react-icons/fa";
import imageHome from "../../assets/banner1.jpg";
import productImage1 from "../../assets/product-thumb-1.png"; // Nhập ảnh sản phẩm 1
import productImage2 from "../../assets/product-thumb-2.png"; // Nhập ảnh sản phẩm 2
import productImage3 from "../../assets/product-thumb-6.png"; // Nhập thêm ảnh sản phẩm mới
import productImage4 from "../../assets/product-thumb-7.png"; // Nhập thêm ảnh sản phẩm mới
import productImage5 from "../../assets/product-thumb-9.png"; // Nhập thêm ảnh sản phẩm mới
import bannerad1 from "../../assets/banner-ad-1.jpg"; // Nhập thêm ảnh sản phẩm mới
import bannerad2 from "../../assets/banner-ad-2.jpg"; // Nhập thêm ảnh sản phẩm mới
import bannerad3 from "../../assets/banner-ad-3.jpg"; // Nhập thêm ảnh sản phẩm mới
import Fproducts1 from "../../assets/product-thumb-10.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts2 from "../../assets/product-thumb-11.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts3 from "../../assets/product-thumb-12.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts4 from "../../assets/product-thumb-13.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts5 from "../../assets/product-thumb-14.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts6 from "../../assets/product-thumb-15.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts7 from "../../assets/product-thumb-18.png"; // Nhập thêm ảnh sản phẩm mới
import Fproducts8 from "../../assets/product-thumb-17.png"; // Nhập thêm ảnh sản phẩm mới

const HomePage = (props) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Banner Section */}
      <section className="banner-section">
        <div className="container">
          <div className="banner-content">
            <h1 className="title">Organic</h1>
            <h2 className="sub-title">Foods at</h2>
            <h2 className="sub-title">
              your <span>Doorsteps</span>
            </h2>
            <p className="description">Dignissim massa diam elementum.</p>
            <div className="cta-buttons">
              <a href="#" className="btn btn-primary">
                Start Shopping
              </a>
              <a href="#" className="btn btn-dark">
                Join Now
              </a>
            </div>
            <div className="info-row">
              <div className="info-box">
                <p>14k+</p>
                <span>Product Varieties</span>
              </div>
              <div className="info-box">
                <p>50k+</p>
                <span>Happy Customers</span>
              </div>
              <div className="info-box">
                <p>10+</p>
                <span>Store Locations</span>
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards at Bottom */}
        <div className="bottom-info">
          <div className="info-card">
            <h5>Fresh from farm</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
          <div className="info-card">
            <h5>100% Organic</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
          <div className="info-card">
            <h5>Free delivery</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
          </div>
        </div>
      </section>
      <section className="best-selling pb-5">
  <div className="container-lg">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header d-flex flex-wrap justify-content-between my-4">
          <h2 className="section-title">Best Selling Products</h2>
          <div className="d-flex align-items-center">
            <button className="btn btn-primary rounded-1 btn-view-all">
              View All
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="product-grid row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
          {/* Product Item 1 */}
          <div className="col">
            <div className="product-item">
              <figure>
                <a href="#" title="Whole Wheat Sandwich Bread">
                  <img
                    src={productImage1}
                    alt="Whole Wheat Sandwich Bread"
                    className="product-image"
                  />
                </a>
              </figure>
              <div className="product-details">
                <h3 className="product-title">Whole Wheat Sandwich Bread</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐</span>
                  <span>(222)</span>
                </div>
                <div className="price">
                  <del>$24.00</del>
                  <span className="current-price">$18.00</span>
                  <span className="discount-tag">10% OFF</span>
                </div>
                <div className="action-area d-flex align-items-center justify-content-between">
                  <div className="quantity-area">
                    <input type="number" className="quantity-input" defaultValue="1" min="1" />
                  </div>
                  <div className="button-area">
                    <button className="btn btn-add-to-cart">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Các sản phẩm khác tương tự */}
          {/* Product Item 2 */}
          <div className="col">
            <div className="product-item">
              <figure>
                <a href="#" title="Organic Almonds">
                  <img
                    src={productImage2}
                    alt="Organic Almonds"
                    className="product-image"
                  />
                </a>
              </figure>
              <div className="product-details">
                <h3 className="product-title">Organic Almonds</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>(150)</span>
                </div>
                <div className="price">
                  <del>$15.00</del>
                  <span className="current-price">$12.00</span>
                  <span className="discount-tag">20% OFF</span>
                </div>
                <div className="action-area d-flex align-items-center justify-content-between">
                  <div className="quantity-area">
                    <input type="number" className="quantity-input" defaultValue="1" min="1" />
                  </div>
                  <div className="button-area">
                    <button className="btn btn-add-to-cart">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Thêm các sản phẩm khác tương tự */}
          {/* Product Item 3 */}
          <div className="col">
            <div className="product-item">
              <figure>
                <a href="#" title="Fresh Salmon">
                  <img
                    src={productImage3}
                    alt="Fresh Salmon"
                    className="product-image"
                  />
                </a>
              </figure>
              <div className="product-details">
                <h3 className="product-title">Fresh Salmon</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>(180)</span>
                </div>
                <div className="price">
                  <del>$28.00</del>
                  <span className="current-price">$24.00</span>
                  <span className="discount-tag">15% OFF</span>
                </div>
                <div className="action-area d-flex align-items-center justify-content-between">
                  <div className="quantity-area">
                    <input type="number" className="quantity-input" defaultValue="1" min="1" />
                  </div>
                  <div className="button-area">
                    <button className="btn btn-add-to-cart">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Item 4 */}
          <div className="col">
            <div className="product-item">
              <figure>
                <a href="#" title="Imported Italian Pasta">
                  <img
                    src={productImage4}
                    alt="Imported Italian Pasta"
                    className="product-image"
                  />
                </a>
              </figure>
              <div className="product-details">
                <h3 className="product-title">Imported Italian Pasta</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>(300)</span>
                </div>
                <div className="price">
                  <del>$20.00</del>
                  <span className="current-price">$18.00</span>
                  <span className="discount-tag">10% OFF</span>
                </div>
                <div className="action-area d-flex align-items-center justify-content-between">
                  <div className="quantity-area">
                    <input type="number" className="quantity-input" defaultValue="1" min="1" />
                  </div>
                  <div className="button-area">
                    <button className="btn btn-add-to-cart">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Product Item 5 */}
          <div className="col">
            <div className="product-item">
              <figure>
                <a href="#" title="Organic Avocados">
                  <img
                    src={productImage5}
                    alt="Organic Avocados"
                    className="product-image"
                  />
                </a>
              </figure>
              <div className="product-details">
                <h3 className="product-title">Organic Avocados</h3>
                <div className="rating">
                  <span>⭐⭐⭐⭐⭐</span>
                  <span>(250)</span>
                </div>
                <div className="price">
                  <del>$30.00</del>
                  <span className="current-price">$25.00</span>
                  <span className="discount-tag">16% OFF</span>
                </div>
                <div className="action-area d-flex align-items-center justify-content-between">
                  <div className="quantity-area">
                    <input type="number" className="quantity-input" defaultValue="1" min="1" />
                  </div>
                  <div className="button-area">
                    <button className="btn btn-add-to-cart">
                      <i className="fa fa-shopping-cart"></i> Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
      <section className="promo-section">
        <div className="promo-container">
          {/* Ảnh lớn bên trái */}
          <div className="promo-large">
            <img src={bannerad1} alt="Items on SALE" className="promo-img" />
            <div className="promo-text">
              <h3>Items on SALE</h3>
              <p>Discounts up to 30%</p>
              <a href="#" className="btn btn-dark">
                Shop Now
              </a>
            </div>
          </div>

          {/* 2 ảnh nhỏ bên phải */}
          <div className="promo-right">
            <div className="promo-small">
              <img src={bannerad2} alt="Combo Offers" className="promo-img" />
              <div className="promo-text">
                <h3>Combo Offers</h3>
                <p>Discounts up to 50%</p>
                <a href="#" className="btn btn-dark">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="promo-small">
              <img
                src={bannerad3}
                alt="Discount Coupons"
                className="promo-img"
              />
              <div className="promo-text">
                <h3>Discount Coupons</h3>
                <p>Discounts up to 40%</p>
                <a href="#" className="btn btn-dark">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Featured Products Section */}
<section className="featured-products pb-5">
  <div className="container-lg">
    <div className="row">
      <div className="col-md-12">
        <div className="section-header d-flex flex-wrap justify-content-between my-4">
          <h2 className="section-title">Featured Products</h2>
          <div className="d-flex align-items-center">
            <a href="#" className="btn btn-primary rounded-1">
              View All
            </a>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div className="product-slider">
          {/* Product Item 1 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 1">
                <img src={Fproducts1} alt="Product 1" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Greek Style Plain Yogurt</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
                <span>(120)</span>
              </div>
              <div className="price-info">
                <del>$30.00</del>
                <span className="price">$24.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 2 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 2">
                <img src={Fproducts2} alt="Product 2" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Pure Squeezed No Pulp Orange Juice</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span>(300)</span>
              </div>
              <div className="price-info">
                <del>$40.00</del>
                <span className="price">$32.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 3 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 3">
                <img src={Fproducts3} alt="Product 3" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Fresh Oranges</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
                <span>(150)</span>
              </div>
              <div className="price-info">
                <del>$25.00</del>
                <span className="price">$20.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 4 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 4">
                <img src={Fproducts4} alt="Product 4" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Gourmet Dark Chocolate Bars</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span>(200)</span>
              </div>
              <div className="price-info">
                <del>$35.00</del>
                <span className="price">$28.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 5 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 5">
                <img src={Fproducts5} alt="Product 5" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Fresh Green Celery</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
                <span>(100)</span>
              </div>
              <div className="price-info">
                <del>$45.00</del>
                <span className="price">$36.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 6 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 6">
                <img src={Fproducts6} alt="Product 6" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Mushroom</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span>(180)</span>
              </div>
              <div className="price-info">
                <del>$50.00</del>
                <span className="price">$40.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 7 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 7">
                <img src={Fproducts7} alt="Product 7" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Honeycrisp Apples</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐</span>
                <span>(220)</span>
              </div>
              <div className="price-info">
                <del>$60.00</del>
                <span className="price">$48.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
          {/* Product Item 8 */}
          <div className="product-item">
            <figure>
              <a href="#" title="Product 8">
                <img src={Fproducts8} alt="Product 8" className="product-image" />
              </a>
            </figure>
            <div className="product-details">
              <h3 className="product-title">Whole Wheat Sandwich Bread</h3>
              <div className="rating">
                <span>⭐⭐⭐⭐⭐</span>
                <span>(90)</span>
              </div>
              <div className="price-info">
                <del>$70.00</del>
                <span className="price">$56.00</span>
                <span className="badge">20% OFF</span>
              </div>
              <div className="quantity-area">
                <input type="number" min="1" defaultValue="1" className="quantity-input" />
                <button className="btn btn-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      <section className="features-section py-5">
        <div className="container">
          <div className="row justify-content-between">
            {/* Feature 1: Free Delivery */}
            <div className="col-md-2 feature-item d-flex align-items-center text-center p-3 border rounded">
              <FaShippingFast className="feature-icon" size={30} />
              <div className="ml-3">
                <h4>Free Delivery</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>

            {/* Feature 2: 100% Secure Payment */}
            <div className="col-md-2 feature-item d-flex align-items-center text-center p-3 border rounded">
              <FaLock className="feature-icon" size={30} />
              <div className="ml-3">
                <h4>100% Secure Payment</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>

            {/* Feature 3: Quality Guarantee */}
            <div className="col-md-2 feature-item d-flex align-items-center text-center p-3 border rounded">
              <FaCheckCircle className="feature-icon" size={30} />
              <div className="ml-3">
                <h4>Quality Guarantee</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>

            {/* Feature 4: Guaranteed Savings */}
            <div className="col-md-2 feature-item d-flex align-items-center text-center p-3 border rounded">
              <FaPiggyBank className="feature-icon" size={30} />
              <div className="ml-3">
                <h4>Guaranteed Savings</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>

            {/* Feature 5: Daily Offers */}
            <div className="col-md-2 feature-item d-flex align-items-center text-center p-3 border rounded">
              <FaTags className="feature-icon" size={30} />
              <div className="ml-3">
                <h4>Daily Offers</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
