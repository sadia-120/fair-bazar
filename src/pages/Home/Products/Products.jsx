import { Link } from "react-router";
import PCard from "../../../components/PCard/PCard";
import { FaCartShopping } from "react-icons/fa6";

const datas = [
  {
    id: 1,
    title: "Men Slim Fit Casual Shirt",
    category: "Men",
    price: 29.99,
    discount: 10,
    rating: 4.5,
    stock: 120,
    image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    description: "Premium cotton slim fit casual shirt for everyday comfort.",
  },
  {
    id: 2,
    title: "Men Formal Office Shirt",
    category: "Men",
    price: 34.99,
    discount: 15,
    rating: 4.6,
    stock: 90,
    image: "https://images.unsplash.com/photo-1593032465171-8b32d09f7d4d",
    description: "Elegant formal shirt perfect for office and meetings.",
  },
  {
    id: 3,
    title: "Men Denim Jacket",
    category: "Men",
    price: 59.99,
    discount: 20,
    rating: 4.7,
    stock: 60,
    image: "https://images.unsplash.com/photo-1520975916090-3105956dac38",
    description: "Stylish denim jacket with modern fit and durable fabric.",
  },
  {
    id: 4,
    title: "Men Cotton T-Shirt",
    category: "Men",
    price: 19.99,
    discount: 5,
    rating: 4.3,
    stock: 200,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    description: "Soft breathable cotton t-shirt for casual wear.",
  },
  {
    id: 5,
    title: "Men Hoodie Sweatshirt",
    category: "Men",
    price: 44.99,
    discount: 18,
    rating: 4.6,
    stock: 75,
    image: "https://images.unsplash.com/photo-1607345366928-199ea26cfe3e",
    description: "Warm and comfortable hoodie with premium stitching.",
  },
  {
    id: 6,
    title: "Women Floral Summer Dress",
    category: "Women",
    price: 39.99,
    discount: 12,
    rating: 4.7,
    stock: 110,
    image: "https://images.unsplash.com/photo-1520975682031-ae7b92d1f3ad",
    description: "Lightweight floral dress perfect for summer outings.",
  },
  {
    id: 7,
    title: "Women Party Wear Gown",
    category: "Women",
    price: 79.99,
    discount: 25,
    rating: 4.8,
    stock: 40,
    image: "https://images.unsplash.com/photo-1593032457860-3c4b8a4a8988",
    description: "Elegant party gown with premium fabric and design.",
  },
  {
    id: 8,
    title: "Women Casual Kurti",
    category: "Women",
    price: 27.99,
    discount: 10,
    rating: 4.4,
    stock: 130,
    image: "https://images.unsplash.com/photo-1618354691438-25bc04584c23",
    description: "Comfortable kurti suitable for daily wear.",
  },
  {
    id: 9,
    title: "Women Denim Jacket",
    category: "Women",
    price: 54.99,
    discount: 18,
    rating: 4.6,
    stock: 70,
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5",
    description: "Trendy denim jacket with modern cut.",
  },
  {
    id: 10,
    title: "Women Long Sleeve Top",
    category: "Women",
    price: 24.99,
    discount: 8,
    rating: 4.2,
    stock: 160,
    image: "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03",
    description: "Soft fabric long sleeve top for everyday fashion.",
  },
  {
    id: 11,
    title: "Kids Printed T-Shirt",
    category: "Kids",
    price: 14.99,
    discount: 5,
    rating: 4.4,
    stock: 180,
    image: "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c",
    description: "Colorful printed t-shirt made for kids comfort.",
  },
  {
    id: 12,
    title: "Kids Cotton Shorts",
    category: "Kids",
    price: 12.99,
    discount: 7,
    rating: 4.3,
    stock: 150,
    image: "https://images.unsplash.com/photo-1598514982846-1b7f2a6f6b7a",
    description: "Soft cotton shorts perfect for playtime.",
  },
  {
    id: 13,
    title: "Kids Hoodie Jacket",
    category: "Kids",
    price: 29.99,
    discount: 15,
    rating: 4.5,
    stock: 90,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716c",
    description: "Warm hoodie jacket for kids during winter.",
  },
  {
    id: 14,
    title: "Unisex Sports Tracksuit",
    category: "Unisex",
    price: 64.99,
    discount: 20,
    rating: 4.7,
    stock: 55,
    image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
    description: "Comfortable tracksuit suitable for workouts and travel.",
  },
  {
    id: 15,
    title: "Men Traditional Kurta",
    category: "Men",
    price: 49.99,
    discount: 15,
    rating: 4.6,
    stock: 85,
    image: "https://images.unsplash.com/photo-1620799140408-edc6dcb6d633",
    description: "Classic traditional kurta with premium fabric.",
  },
  {
    id: 16,
    title: "Women Silk Saree",
    category: "Women",
    price: 99.99,
    discount: 30,
    rating: 4.9,
    stock: 35,
    image: "https://images.unsplash.com/photo-1610030469668-8e8c1c5e0d3c",
    description: "Luxury silk saree with elegant design.",
  },
  {
    id: 17,
    title: "Men Winter Coat",
    category: "Men",
    price: 89.99,
    discount: 22,
    rating: 4.7,
    stock: 50,
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    description: "Warm winter coat with stylish fit.",
  },
  {
    id: 18,
    title: "Women Cardigan Sweater",
    category: "Women",
    price: 42.99,
    discount: 12,
    rating: 4.5,
    stock: 95,
    image: "https://images.unsplash.com/photo-1542060748-10c28b62716c",
    description: "Soft cardigan sweater for cozy days.",
  },
  {
    id: 19,
    title: "Men Polo T-Shirt",
    category: "Men",
    price: 22.99,
    discount: 10,
    rating: 4.4,
    stock: 170,
    image: "https://images.unsplash.com/photo-1523381294911-8d3cead13475",
    description: "Classic polo t-shirt with breathable fabric.",
  },
  {
    id: 20,
    title: "Women Office Blazer",
    category: "Women",
    price: 69.99,
    discount: 18,
    rating: 4.6,
    stock: 65,
    image: "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0",
    description: "Professional blazer designed for office wear.",
  },
];

const Products = () => {
  return (
    <div className="container mx-auto">
    <h3 className="text-4xl font-bold text-primary text-center my-10">Our Products</h3>
    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8 mx-4">
      {datas.map((product) => (
        <PCard
          key={product.id}
          title={product.title}
          category={product.category}
          price={product.price}
          discount={product.discount}
          image={product.image}
        ></PCard>
      ))}
    </div>

   <div className="flex justify-center">
     <Link className="btn btn-outline btn-primary my-10" to={'allProduct'}>All Product</Link>
   </div>
    </div>
  );
};

export default Products;
