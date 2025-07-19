interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  
  // Temporarily disabled for build testing
  // const product = await getProduct(slug);
  // if (!product) {
  //   notFound();
  // }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center py-8">
        <h1 className="text-3xl font-bold mb-4">Product: {slug}</h1>
        <p className="text-gray-600">Product details will be loaded here</p>
      </div>
    </div>
  );
} 