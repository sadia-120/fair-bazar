import Banner from "../Banner/Banner";
import DiscountBanner from "../DiscountBanner/DiscountBanner";
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts";
import Products from "../Products/Products";
import Testimonials from "../Testimonials/Testimonials";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        {/* Basic Meta */}
        <title>Home | My Awesome Website</title>
        <meta
          name="description"
          content="Welcome to My Awesome Website – your go-to platform for amazing content, tools, and tutorials. Explore our resources and join the community today!"
        />
        <meta
          name="keywords"
          content="website, tutorials, resources, blog, tools, SEO, React"
        />
        <meta name="author" content="Your Name or Company" />
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="http://localhost:5173/" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Home | My Awesome Website" />
        <meta
          property="og:description"
          content="Discover amazing content, tutorials, and tools at My Awesome Website. Join our community now!"
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="http://localhost:5173/" />
        <meta
          property="og:image"
          content="http://localhost:5173/images/og-home.jpg"
        />
        <meta property="og:image:alt" content="My Awesome Website Logo" />
        <meta property="og:site_name" content="My Awesome Website" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | My Awesome Website" />
        <meta
          name="twitter:description"
          content="Explore tutorials, resources, and tools at My Awesome Website."
        />
        <meta
          name="twitter:image"
          content="http://localhost:5173/twitter-home.jpg"
        />
        <meta name="twitter:site" content="@YourTwitterHandle" />
        <meta name="twitter:creator" content="@YourTwitterHandle" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />

        {/* Theme color for mobile browsers */}
        <meta name="theme-color" content="#0d6efd" />
      </Helmet>

      <Banner />
      <Products />
      <FeaturedProducts />
      <DiscountBanner />
      <Testimonials />
    </div>
  );
};

export default Home;
