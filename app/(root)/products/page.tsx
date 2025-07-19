export default async function ProductsPage() {
  // Temporarily disabled for build testing
  // const products = await getAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <div className="text-center py-8">
        <p className="text-gray-600">Products will be loaded here</p>
      </div>
    </div>
  );
} 