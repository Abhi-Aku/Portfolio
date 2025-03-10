const Home = () => {
  const style = {
    color: "transparent",
    WebkitTextStroke: "1px black",
    fontStyle: "italic",
  };

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row">
      {/* Left Section */}
      <div className="bg-amber-300 w-full md:w-1/2  p-4">
        <h1 className="text-lg font-bold">Left Section</h1>
      </div>

      {/* Right Section */}
      <div
        className="w-full md:w-1/2 min-h-screen bg-cover bg-no-repeat flex flex-col relative"
        style={{ backgroundImage: "url('/hi.png')" }}
      >
        {/* Top Text Box */}
        <div className="absolute left-10 top-10 bg-blue-200 w-40 flex items-center justify-center rounded-3xl p-2 shadow-md">
          <h1 className="font-semibold">Hello Abhishek</h1>
        </div>

        {/* Bottom Text Box */}
        <div className="absolute right-10 bottom-20 bg-blue-200 w-40 flex items-center justify-center rounded-3xl p-2 shadow-md">
          <h1 className="font-semibold">Abhishek Hello</h1>
        </div>

        {/* Centered Text */}
        <h1 className="font-bold text-4xl sm:text-5xl absolute top-1/2  left-[-200px] sm:left-[200px] md:left-[-200px]" style={style}>
          Web Development
        </h1>
      </div>
    </section>
  );
};

export default Home;
