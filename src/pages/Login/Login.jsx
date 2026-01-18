import React, { use, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FaEye,
  FaEyeSlash,
  FaUserAlt,
  FaLock,
  FaEnvelope,
} from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";
import Swal from "sweetalert2";
import { Link, useLocation, useNavigate } from "react-router";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const { signInUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  //   console.log(location);

  const onSubmit = (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        reset();
        Swal.fire({
          icon: "success",
          title: "Log in has been successfully!",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state || "/kids");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
      });
    // console.log(data);
  };

  return (
    <div className="flex items-center justify-center pb-10 pt-32">
      <div className="bg-gray-300 p-10 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-primary mb-8">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* Username Input */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute top-4.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              {...register("email", { required: "Email is required" })}
              className="w-full pl-10 pr-3 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative mb-4">
            <FaLock className="absolute top-4.5 left-3 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="w-full pl-10 pr-10 py-3 border border-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span
              className="absolute top-4.5 right-3 text-gray-400 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-lg btn btn-primary transition duration-300"
          >
            Login
          </button>
        </form>

        <div className="mt-5">
          create{" "}
          <Link to={"/register"} className="text-blue-400 hover:underline">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
