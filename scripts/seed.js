const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  // Clear existing products
  await prisma.product.deleteMany();

  // Create sample products
  const products = [
    {
      name: 'Wireless Bluetooth Headphones',
      slug: 'wireless-bluetooth-headphones',
      category: 'Electronics',
      images: ['https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500'],
      brand: 'AudioTech',
      description: 'High-quality wireless headphones with noise cancellation and 30-hour battery life.',
      stock: 50,
      price: 129.99,
      rating: 4.5,
      numReviews: 128,
      isFeatured: true,
    },
    {
      name: 'Smart Fitness Watch',
      slug: 'smart-fitness-watch',
      category: 'Electronics',
      images: ['https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500'],
      brand: 'FitTech',
      description: 'Advanced fitness tracking with heart rate monitor and GPS.',
      stock: 30,
      price: 199.99,
      rating: 4.3,
      numReviews: 89,
      isFeatured: true,
    },
    {
      name: 'Organic Cotton T-Shirt',
      slug: 'organic-cotton-tshirt',
      category: 'Clothing',
      images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500'],
      brand: 'EcoWear',
      description: 'Comfortable and sustainable organic cotton t-shirt.',
      stock: 100,
      price: 29.99,
      rating: 4.7,
      numReviews: 256,
      isFeatured: false,
    },
    {
      name: 'Stainless Steel Water Bottle',
      slug: 'stainless-steel-water-bottle',
      category: 'Home & Garden',
      images: ['https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500'],
      brand: 'HydroLife',
      description: 'Insulated water bottle that keeps drinks cold for 24 hours.',
      stock: 75,
      price: 24.99,
      rating: 4.6,
      numReviews: 167,
      isFeatured: true,
    },
    {
      name: 'Wireless Charging Pad',
      slug: 'wireless-charging-pad',
      category: 'Electronics',
      images: ['https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=500'],
      brand: 'ChargeTech',
      description: 'Fast wireless charging pad compatible with all Qi-enabled devices.',
      stock: 40,
      price: 39.99,
      rating: 4.4,
      numReviews: 93,
      isFeatured: false,
    },
    {
      name: 'Yoga Mat Premium',
      slug: 'yoga-mat-premium',
      category: 'Sports',
      images: ['https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=500'],
      brand: 'ZenFit',
      description: 'Non-slip yoga mat made from eco-friendly materials.',
      stock: 60,
      price: 49.99,
      rating: 4.8,
      numReviews: 201,
      isFeatured: true,
    },
  ];

  for (const product of products) {
    await prisma.product.create({
      data: product,
    });
  }

  console.log('Database seeded successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 