import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export const TableLoadingSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="#1a1e24" highlightColor="#485155">
      <Skeleton height={56} />
      <br />
      <br />
      <Skeleton height={56} />
      <br />
      <br />
      <Skeleton height={56} />
      <br />
      <br />
      <Skeleton height={56} />
      <br />
      <br />
      <Skeleton height={56} />
      <br />
      {/* <br />
      <Skeleton height={56} />
      <br /> */}
    </SkeletonTheme>
  );
};
