import CozaProvider from "../Components/Context/CozaProvider";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Navigation/NavBar";
import Product from "../Components/Product Overview/Product";

const Shop = () => {
  return (
    <CozaProvider>
      <NavBar />
      <Product showTitle={false} />
      <Footer />
    </CozaProvider>
  );
};
export default Shop;
