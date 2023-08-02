import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

export const TableLoadingSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="#F2F4F7" highlightColor="#F9FAFB">
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
      <br />
      <Skeleton height={56} />
      <br />
    </SkeletonTheme>
  );
};
