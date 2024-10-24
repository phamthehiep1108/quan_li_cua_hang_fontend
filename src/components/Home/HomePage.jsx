import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.scss";
import imageHome from "../../assets/banner1.jpg";
import productImage1 from "../../assets/product-thumb-1.png"; // Nhập ảnh sản phẩm 1
import productImage2 from "../../assets/product-thumb-2.png"; // Nhập ảnh sản phẩm 2
import productImage3 from "../../assets/product-thumb-1.png"; // Nhập thêm ảnh sản phẩm mới
import productImage4 from "../../assets/product-thumb-1.png"; // Nhập thêm ảnh sản phẩm mới

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

      {/* Best Selling Products Section */}
      <section className="best-selling pb-5">
        <div className="container-lg">
          <div className="row">
            <div className="col-md-12">
              <div className="section-header d-flex flex-wrap justify-content-between my-4">
                <h2 className="section-title">Best Selling Products</h2>
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
                      <h3 className="product-title">
                        Whole Wheat Sandwich Bread
                      </h3>
                      <div className="rating">
                        <span>⭐⭐⭐⭐</span>
                        <span>(222)</span>
                      </div>
                      <div className="price">
                        <del>$24.00</del>
                        <span className="current-price">$18.00</span>
                        <span className="discount-tag">10% OFF</span>
                      </div>
                    </div>
                  </div>
                </div>
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
                    </div>
                  </div>
                </div>
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
                    </div>
                  </div>
                </div>
                {/* Thêm sản phẩm khác nếu cần */}
                <div className="col">
                  <div className="product-item">
                    <figure>
                      <a href="#" title="Organic Avocados">
                        <img
                          src={productImage2}
                          alt="Organic Avocados"
                          className="product-image-1"
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
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
