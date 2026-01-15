import Banner from "../Banner/Banner";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return <div>
        <Banner />
        <Products />
        <FeaturedProducts />
        <DiscountBanner />
        <Testimonials />
    </div>
}

export default Home;