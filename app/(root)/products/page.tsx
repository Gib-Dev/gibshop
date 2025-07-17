import { getAllProducts } from "@/lib/actions/product.actions";
import ProductList from "@/components/shared/product/product-list";

export default async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">All Products</h1>
      <ProductList data={products} />
    </div>
  );
} 