import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

console.log(process.env);

export default function Page({
  params: { key },
}: {
  params: {
    key: string;
  };
}) {
  return (
    <div className="space-y-8 lg:space-y-14">
      {key + Date.now()}
      <SingleProduct />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
