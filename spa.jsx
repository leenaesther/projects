import { BrowserRouter, Routes, Route, Link, useNavigate } from "react-router-dom";


function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2 style={headingStyle}>Home</h2>

      <div style={heroStyle}></div>

      <p style={paraStyle}>
        Welcome to the <strong>E-Shopping Portal</strong>! Your one-stop destination
        for online shopping. Explore a wide variety of retailers, compare product
        prices, track your deliveries, and enjoy secure payment options.
      </p>

      <h3 style={subHeadingStyle}>What You Can Do Here</h3>

      <div style={featureGridStyle}>
        <div style={featureCardStyle} onClick={() => navigate("/retailers")}>
          <img
            src="https://akm-img-a-in.tosshub.com/businesstoday/images/story/202209/sale_0-sixteen_nine.jpg"
            alt="Retailers"
            style={featureImgStyle}
          />
          <h4>Browse Retailers</h4>
          <p>Explore top online stores in one place.</p>
        </div>

        <div style={featureCardStyle} onClick={() => navigate("/products")}>
          <img
            src="https://img.freepik.com/premium-photo/collection-various-products-including-one-products_950347-4024.jpg?w=2000"
            alt="Products"
            style={featureImgStyle}
          />
          <h4>Latest Products</h4>
          <p>See new arrivals, deals, and offers.</p>
        </div>

        <div style={featureCardStyle}>
          <img
            src="https://landofcoder.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/m/a/magento-2-price-comparison-main.png"
            alt="Compare"
            style={featureImgStyle}
          />
          <h4>Compare Prices</h4>
          <p>Find the best price across sellers.</p>
        </div>

        <div style={featureCardStyle}>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.VGBXy6y8CiGvmsEWfX5oZAHaDR?pid=Api&P=0&h=180"
            alt="Tracking"
            style={featureImgStyle}
          />
          <h4>Track Deliveries</h4>
          <p>Check order status instantly.</p>
        </div>
      </div>
    </div>
  );
}



function Retailers() {
  return (
    <div>
      <h2 style={headingStyle}>Retailers</h2>

      <div style={retailerGridStyle}>
        <div style={retailerCardStyle}>
          <img
            src="https://cdn.pixabay.com/photo/2021/08/10/16/02/amazon-6536326_1280.png"
            alt="Amazon"
            style={retailerImgStyle}
          />
          <h3>Amazon</h3>
        </div>

        <div style={retailerCardStyle}>
          <img
            src="https://logosmarcas.net/wp-content/uploads/2020/11/Flipkart-Emblema.png"
            alt="Flipkart"
            style={retailerImgStyle}
          />
          <h3>Flipkart</h3>
        </div>

        <div style={retailerCardStyle}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.jpgZvFzot487o_i466yAGwHaHa?pid=Api&P=0&h=180"
            alt="Myntra"
            style={retailerImgStyle}
          />
          <h3>Myntra</h3>
        </div>

        <div style={retailerCardStyle}>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.YIPH_b_gvGpFfF51T8Yt1wHaEJ?pid=Api&P=0&h=180"
            alt="Reliance Digital"
            style={retailerImgStyle}
          />
          <h3>Reliance Digital</h3>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <button style={buttonStyle}>Become a Retailer</button>
      </div>
    </div>
  );
}



function Products() {
  return (
    <div>
      <h2 style={headingStyle}>Products</h2>

      <div style={productGridStyle}>
        <div style={productCardStyle}>
          <img
            src="https://cdn.mos.cms.futurecdn.net/99B93aZbmkyWD6x52TXStd.jpg"
            alt="Smartphones"
            style={productImgStyle}
          />
          <h3>Smartphones</h3>
        </div>

        <div style={productCardStyle}>
          <img
            src="https://tse3.mm.bing.net/th/id/OIP.zcgnnK53CMk_jlTpAKWoOgHaFj?pid=Api&P=0&h=180"
            alt="Laptops"
            style={productImgStyle}
          />
          <h3>Laptops</h3>
        </div>

        <div style={productCardStyle}>
          <img
            src="https://tse1.mm.bing.net/th/id/OIP.a67TBZX_uCtxJrIJaIFEVgHaE8?pid=Api&P=0&h=180"
            alt="Fashion"
            style={productImgStyle}
          />
          <h3>Fashion & Accessories</h3>
        </div>

        <div style={productCardStyle}>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.BO74gTspdex77Vsv2OspsQHaEK?pid=Api&P=0&h=180"
            alt="Home Appliances"
            style={productImgStyle}
          />
          <h3>Home Appliances</h3>
        </div>
      </div>
    </div>
  );
}



export default function SPA() {
  return (
    <BrowserRouter>
      <nav style={navStyle}>
        <Link style={navLinkStyle} to="/">Home</Link>
        <Link style={navLinkStyle} to="/retailers">Retailers</Link>
        <Link style={navLinkStyle} to="/products">Products</Link>
      </nav>

      <div style={{ padding: "25px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/retailers" element={<Retailers />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}



const headingStyle = {
  fontFamily: "Arial",
  color: "#2c3e50",
};

const paraStyle = {
  fontSize: "17px",
  lineHeight: 1.6,
};

const subHeadingStyle = {
  marginTop: "25px",
  color: "#34495e",
};

const heroStyle = {
  width: "100%",
  height: "280px",
  backgroundImage:
    "url('https://i.pinimg.com/736x/ba/6a/7d/ba6a7d5dc3fb018e66fed43157531244.jpg')",
  backgroundSize: "cover",
  backgroundPosition: "center",
  borderRadius: "15px",
  marginBottom: "25px",
  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
};

const featureGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "20px",
  marginTop: "20px",
};

const featureCardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "12px",
  textAlign: "center",
  boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
  cursor: "pointer",
};

const featureImgStyle = {
  width: "170px",
  height: "70px",
  marginBottom: "10px",
};

const retailerGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "25px",
  marginTop: "20px",
};

const retailerCardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "20px",
  textAlign: "center",
  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
};

const retailerImgStyle = {
  width: "120px",
  height: "60px",
  objectFit: "contain",
  marginBottom: "12px",
};

const buttonStyle = {
  padding: "12px 20px",
  background: "#2ecc71",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "18px",
  cursor: "pointer",
};

const productGridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: "25px",
  marginTop: "20px",
};

const productCardStyle = {
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
  padding: "15px",
};

const productImgStyle = {
  width: "100%",
  height: "150px",
  objectFit: "cover",
  borderRadius: "10px",
};

const navStyle = {
  padding: "15px",
  background: "#4CAF50",
};

const navLinkStyle = {
  color: "white",
  marginRight: "20px",
  textDecoration: "none",
  fontWeight: "bold",
};
