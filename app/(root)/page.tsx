const Homepage = async () => {
  // Temporarily disabled for build testing
  // const latestProducts = await getLatestProducts();
  // const featuredProducts = await getFeaturedProducts();

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg overflow-hidden">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Welcome to Gibshop
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              Discover amazing products at great prices
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Featured Products</h2>
        <p className="text-gray-600">Products will be loaded here</p>
      </div>
      
      {/* Latest Products */}
      <div className="text-center py-8">
        <h2 className="text-2xl font-bold mb-4">Newest Arrivals</h2>
        <p className="text-gray-600">Products will be loaded here</p>
      </div>
    </div>
  );
};

export default Homepage;
