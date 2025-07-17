const { PrismaClient } = require("@prisma/client");
const data = require("./sample-data");

const prisma = new PrismaClient();

async function main() {
  console.log("🌱 Starting database seeding...");

  // Clear existing data
  await prisma.product.deleteMany();
  console.log("🗑️  Cleared existing products");

  // Insert sample products
  for (const product of data.products) {
    await prisma.product.create({
      data: {
        name: product.name,
        slug: product.slug,
        category: product.category,
        description: product.description,
        images: product.images,
        price: product.price, // number
        brand: product.brand,
        rating: product.rating, // number
        numReviews: product.numReviews,
        stock: product.stock,
        isFeatured: product.isFeatured,
        banner: product.banner,
      },
    });
  }

  console.log(`✅ Seeded ${data.products.length} products`);
  console.log("🎉 Database seeding completed!");
}

main()
  .catch((e) => {
    console.error("❌ Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
