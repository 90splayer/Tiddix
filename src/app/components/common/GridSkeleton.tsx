import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SimpleGrid } from '@chakra-ui/react';

export const GridSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="#1a1e24" highlightColor="#485155">
      <SimpleGrid columns={{ sm: 1, md: 3 }} spacing={'2rem'}>
        <Skeleton height={390} width={295} borderRadius={'3rem'} />
        <Skeleton height={390} width={295} borderRadius={'3rem'} />
        <Skeleton height={390} width={295} borderRadius={'3rem'} />
      </SimpleGrid>
    </SkeletonTheme>
  );
};
