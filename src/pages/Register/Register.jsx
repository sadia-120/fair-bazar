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
import useAxiosSquer from "../../hooks/useAxiosSquer";

const RegisterPage = () => {
  const { createUser, updateUser } = use(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const axiosSquer = useAxiosSquer();

  const onSubmit = async (data) => {
    createUser(data?.email, data?.confirmPassword)
      .then(() => {
        updateUser(data?.username, "").then(async () => {
          try {
            const newUser = { name: data?.username, email: data?.email };
            await axiosSquer.post("/user", newUser);
            Swal.fire({
              icon: "success",
              title: "Your work has been saved",
              showConfirmButton: false,
              timer: 1500,
            });
          } catch {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
              // footer: '<a href="#">Why do I have this issue?</a>',
            });
          }
        });
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
          // footer: '<a href="#">Why do I have this issue?</a>',
        });
      });

    // confirmPassword
    // email
    // password
    // username

    console.log(data);
  };

  return (
    <div className="flex items-center justify-center pb-16 pt-28">
      <div className="bg-gray-200 p-10 rounded-2xl shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center my-text mb-8">
          Register
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
          {/* Username Input */}
          <div className="relative mb-4">
            <FaUserAlt className="absolute top-4.5 left-3 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              {...register("username", { required: "Username is required" })}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.username && (
              <p className="text-red-500 text-sm mt-1">
                {errors.username.message}
              </p>
            )}
          </div>

          {/* Email Input */}
          <div className="relative mb-4">
            <FaEnvelope className="absolute top-4.5 left-3 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
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
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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

          {/* Confirm Password Input */}
          <div className="relative mb-6">
            <FaLock className="absolute top-4.5 left-3 text-gray-400" />
            <input
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              {...register("confirmPassword", {
                required: "Confirm password is required",
                validate: (value) =>
                  value === watch("password") || "Passwords do not match",
              })}
              className="w-full pl-10 pr-10 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <span
              className="absolute top-4.5 right-3 text-gray-400 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm mt-1">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full btn btn-primary rounded-lg transition duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
