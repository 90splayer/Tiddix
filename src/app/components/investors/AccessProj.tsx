import {
  Flex,
  Stack,
  Heading,
  Text,
  Box,
  Container,
  HStack,
  Image,
  Avatar,
  Progress,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import React, { useEffect, useRef } from 'react';
import project from '../../assets/images/investor/project.jpg';

const AccessProj = () => {
  const boxRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useEffect(() => {
    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Adjust this value to control when the box becomes active
    };

    let activeBox: Element | null = null; // Track the currently active box

    const handleIntersection: IntersectionObserverCallback = (
      entries: IntersectionObserverEntry[],
    ) => {
      const intersectingBoxes = entries
        .filter((entry) => entry.isIntersecting)
        .map((entry) => entry.target);

      if (intersectingBoxes.length > 0) {
        if (!activeBox || !intersectingBoxes.includes(activeBox)) {
          // Add a CSS class to the first intersecting box
          intersectingBoxes[0].classList.add('active');

          // Remove the "active" class from the other boxes
          boxRefs
            .filter(
              (boxRef) =>
                boxRef.current && boxRef.current !== intersectingBoxes[0],
            )
            .forEach((boxRef) => {
              boxRef.current?.classList.remove('active');
            });

          activeBox = intersectingBoxes[0]; // Update the currently active box
        }
      }
    };

    const observer = new IntersectionObserver(
      handleIntersection,
      observerOptions,
    );

    boxRefs.forEach((boxRef) => {
      if (boxRef.current) {
        observer.observe(boxRef.current);
      }
    });

    // Cleanup the observer
    return () => {
      observer.disconnect();
    };
  }, []);
  const projectData = [
    {
      id: 0,
      name: 'Oluwani Kolawole',
      avartar: 'https://bit.ly/kent-c-dodds',
      total_funding: '£4,000',
      img: project,
      title: 'The Plant Picazzo',
      category: 'Art',
      progress: 60,
    },
    {
      id: 1,
      name: 'Segun Abiodun',
      avartar: 'https://bit.ly/sage-adebayo',
      total_funding: '£7,000',
      img: project,
      title: 'The Plant Picazzo',
      category: 'Art',
      progress: 80,
    },
    {
      id: 2,
      name: 'Prosper ayo',
      avartar: 'https://bit.ly/prosper-baba',
      total_funding: '£2,000',
      img: project,
      title: 'The Plant Picazzo',
      category: 'Art',
      progress: 40,
    },
  ];
  return (
    <Box>
      <Container maxW="144rem" p="12.5rem 12rem 7.5rem 7.2rem">
        <Flex
          align="center"
          flexDir={{
            base: 'column',
            lg: 'row',
          }}
          justify="space-between"
          gap={17}
        >
          <Stack
            spacing="54px"
            w={{ base: '100%', md: '50%' }}
            mb={{ base: '5rem', md: 0 }}
          >
            <Heading
              as="h2"
              color="#fff"
              maxW="41.4rem"
              lineHeight="54px"
              fontWeight={700}
              fontSize={{ base: '3.6rem', md: '4.8rem' }}
            >
              Access unlimited projects
            </Heading>
            <Text size="body1" maxW="475px">
              We invite investors to the creative space where creator metrics
              (views, engagements, followers, rankings etc) can be used to
              properly determine a creator’s value and prospects for
              investments.
            </Text>
          </Stack>
          <Stack spacing="20px">
            {projectData?.map((singleData, id) => (
              <Flex
                p="1.5rem"
                key={id}
                ref={boxRefs[id]}
                transition="all .5s"
                sx={{
                  '&.active': {
                    transform: 'scale(1.2)',
                    w: '51.9rem',
                  },
                }}
                justify="space-between"
                align="center"
                w="59rem"
                borderRadius="15px"
                bg="#232629"
              >
                <HStack spacing="14px">
                  <Text>{singleData?.id + 1}</Text>
                  <Box>
                    <Image
                      borderRadius="16px"
                      w="76px"
                      h="76px"
                      src={singleData?.img}
                      alt={singleData?.name}
                    />
                  </Box>
                  <Stack spacing="8.5px">
                    <HStack>
                      <Avatar
                        boxSize="19px"
                        name={singleData?.name}
                        src={singleData?.avartar}
                      />
                      <Text size="body3" color="#fff">
                        {singleData?.name}
                      </Text>
                      <Box>{verify}</Box>
                    </HStack>
                    <Heading fontSize="1.5rem">{singleData?.title}</Heading>
                    <Text fontSize="1rem">{singleData?.category}</Text>
                  </Stack>
                </HStack>
                <HStack spacing="2.3rem">
                  <Text fontSize="12px" color="#fff">
                    {singleData?.total_funding}
                  </Text>

                  <Progress
                    borderRadius="20px"
                    background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
                    size="md"
                    w="82px"
                    value={singleData?.progress}
                  />
                </HStack>
              </Flex>
            ))}
          </Stack>{' '}
        </Flex>
      </Container>
    </Box>
  );
};

export default AccessProj;
