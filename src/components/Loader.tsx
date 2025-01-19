const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="relative w-44 h-44 border-t-4 border-r-4 border-white border-solid rounded-full animate-spin">
        <div className="absolute top-0 left-0 w-44 h-44 border-l-4 border-b-4 border-blue-600 border-solid rounded-full animate-spin-reverse"></div>
      </div>
    </div>
  );
};

export default Loader;
