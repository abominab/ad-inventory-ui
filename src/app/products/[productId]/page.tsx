'use client';

import type { Product } from '@/types/product';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getProduct } from '@/lib/api';

export default function ProductDetails() {
  const { productId } = useParams();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const fetchedProduct = await getProduct(productId as string);
      setProduct(fetchedProduct);
    };

    if (productId && product?.id !== productId) {
      fetchProduct();
    }
  }, [productId, product?.id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="product-details bg-white text-gray-900">
      <div>{product.name}</div>
    </div>
  );
}
