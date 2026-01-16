import { Link } from "react-router";

const Error404 = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 text-center">
      {/* Error Code */}
      <h1 className="text-9xl font-extrabold text-gray-300">404</h1>

      {/* Message */}
      <h2 className="text-3xl md:text-4xl font-bold mt-6">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-500 mt-2">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      {/* Button */}
      <Link
        to="/"
        className="mt-6 inline-block bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 transition"
      >
        Go Back Home
      </Link>

      {/* Optional Illustration */}
      <img
        src="https://images.unsplash.com/photo-1503437313881-503a91226419?auto=format&fit=crop&w=800&q=80"
        alt="404 illustration"
        className="mt-10 w-full max-w-md mx-auto rounded-lg shadow-lg"
      />
    </div>
  );
};

export default Error404;
