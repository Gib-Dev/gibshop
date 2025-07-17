"use server";
import { prisma } from "@/db/prisma";
import { convertToPlainObject } from "../utils";
import { LATEST_PRODUCTS_LIMIT } from "../constants";

export async function getLatestProducts() {
  const data = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
}

export async function getProduct(slug: string) {
  const product = await prisma.product.findUnique({
    where: { slug },
  });
  
  if (!product) return null;
  return convertToPlainObject(product);
}

export async function getFeaturedProducts() {
  const data = await prisma.product.findMany({
    where: { isFeatured: true },
    take: 6,
  });
  return convertToPlainObject(data);
}

export async function getProductsByCategory(category: string) {
  const data = await prisma.product.findMany({
    where: { category },
  });
  return convertToPlainObject(data);
}

export async function getAllProducts() {
  const data = await prisma.product.findMany({
    orderBy: { createdAt: "desc" },
  });
  return convertToPlainObject(data);
}
