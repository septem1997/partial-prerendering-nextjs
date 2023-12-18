import { Suspense } from 'react';
import {
  RecommendedProducts,
  RecommendedProductsSkeleton,
} from '#/components/recommended-products';
import { Reviews, ReviewsSkeleton } from '#/components/reviews';
import { SingleProduct } from '#/components/single-product';
import { Ping } from '#/components/ping';

export default function Page({searchParams}:{
    searchParams:{
        page:number|undefined;
    }
}) {
  return (
    <div className="space-y-8 lg:space-y-14">
      <SingleProduct />

      <Ping />

      <Suspense fallback={<RecommendedProductsSkeleton />}>
        <RecommendedProducts page={searchParams.page} />
      </Suspense>

      <Ping />

      <Suspense fallback={<ReviewsSkeleton />}>
        <Reviews />
      </Suspense>
    </div>
  );
}
