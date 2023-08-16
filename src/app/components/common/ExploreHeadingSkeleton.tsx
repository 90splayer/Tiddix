import React from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { SimpleGrid } from '@chakra-ui/react';

export const ExploreHeadingSkeleton: React.FC = () => {
  return (
    <SkeletonTheme baseColor="#1a1e24" highlightColor="#485155">
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={'2rem'}>
        <Skeleton height={420} width={620} borderRadius={'3rem'} />
        <Skeleton height={420} width={620} borderRadius={'3rem'} />
      </SimpleGrid>
    </SkeletonTheme>
  );
};
