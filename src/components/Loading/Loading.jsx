const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-base-100">
      {/* Spinner */}
      <span className="loading loading-spinner loading-lg text-primary"></span>

      {/* Text */}
      <h2 className="mt-4 text-lg font-semibold tracking-wide">
        Loading, please wait...
      </h2>

      {/* Subtext */}
      <p className="text-sm opacity-70 mt-1">
        Preparing something awesome for you 🚀
      </p>
    </div>
  );
};

export default Loading;
