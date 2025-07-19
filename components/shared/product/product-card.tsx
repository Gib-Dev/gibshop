"use client";

import Link from "next/link";
import Image from "next/image";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProductPrice from "./product-price";
import { Product } from "@/types";
import { useCart } from "@/lib/context/cart-context";
import { ShoppingCart } from "lucide-react";

const ProductCard = ({ product }: { product: Product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
  };

  return (
    <Card className="w-full max-w-sm hover:shadow-lg transition-shadow">
      <CardHeader className="p-0 items-center">
        <Link href={`/product/${product.slug}`}>
          <Image
            src={product.images[0]}
            alt={product.name}
            width={300}
            height={300}
            priority={true}
            className="hover:opacity-90 transition-opacity"
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 grid gap-4">
        <div className="text-xs text-gray-600 dark:text-gray-400">{product.brand}</div>
        <Link href={`/product/${product.slug}`}>
          <h2 className="text-sm font-medium hover:text-blue-600 transition-colors">{product.name}</h2>
        </Link>
        <div className="flex justify-between items-center gap-4">
          <div className="flex items-center gap-1">
            <span className="text-sm">{product.rating.toFixed(1)}</span>
            <span className="text-xs text-gray-500">★</span>
          </div>
          {product.stock > 0 ? (
            <ProductPrice value={product.price} />
          ) : (
            <p className="text-destructive text-sm">Out of stock</p>
          )}
        </div>
        {product.stock > 0 && (
          <Button 
            size="sm" 
            onClick={handleAddToCart}
            className="w-full"
          >
            <ShoppingCart className="w-4 h-4 mr-2" />
            Add to Cart
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
