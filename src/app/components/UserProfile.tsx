import {
  Avatar,
  Box,
  Button,
  Heading,
  Container,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  Input,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import { FC } from 'react';
import { LinkIcon } from '@chakra-ui/icons';

import { PaletteIcon, TestimonialIcon } from 'app/assets/icons';
import CustomTab from '../components/common/CustomTab';

import useAuth from 'app/hooks/useAuth';
import { Link } from 'react-router-dom';
import { thousandsSeparators } from 'app/utils/helpers';
import DashboardOverview from './dashboard/DashboardOverview';
import ProjectOverview from './dashboard/project/ProjectOverview';
import TestimonialView from './dashboard/TestimonialView';
import { FaHeart, FaStar } from 'react-icons/fa';

const UserProfile: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const bio = authContext?.auth?.bio;
  const profilePicture = authContext?.auth?.profilePicture;
  const walletBalance = authContext?.auth?.walletBalance;

  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          sm: '4rem 5rem',
          md: '5rem 5.2rem',
          lg: '5rem 10.2rem',
        }}
      >
        <Flex gap={70} mb="5rem">
          <Box>
            <Avatar
              border="2px solid pink"
              boxSize="200px"
              name={`${firstName} ${lastName}`}
              src={profilePicture ?? undefined}
            />
          </Box>

          <Stack spacing="3rem">
            <Stack spacing="10px" maxW="581px">
              <HStack spacing="15px">
                <Heading
                  as="h2"
                  size="display4"
                >{`${firstName} ${lastName}`}</Heading>
                <Box>{verify}</Box>
              </HStack>
              <Text size="body2">{bio}</Text>
              <Link
                to="https://abiodun-akintunde-3d2375.netlify.app/"
                target="_blank"
              >
                <HStack spacing="10px">
                  <LinkIcon />
                  <Text size="body2">
                    abiodun-akintunde-3d2375.netlify.app/
                  </Text>
                </HStack>
              </Link>
            </Stack>

            <Stack>
              <Text letterSpacing="1px" fontSize="1.2rem" color="#fff">
                YOUR RATINGS
              </Text>
              <HStack spacing="10px">
                <Text fontSize="1.3rem">5.0 ratings</Text>
                <HStack>
                  {[...Array(5)].map((star, index) => {
                    const ratingValue = index + 1;
                    return (
                      <label>
                        <Input
                          type="radio"
                          name="rating"
                          size="sm"
                          display="none"
                          value={ratingValue}
                          // onClick={() => setRating(ratingValue)}
                        />
                        <Box _hover={{ cursor: 'pointer', color: '#F9DF4A' }}>
                          <FaStar
                            // color={
                            //   ratingValue >= rating ? '#F9DF4A' : 'brand.main'
                            // }
                            color="#f9df4a"
                            size={14}
                          />
                        </Box>
                      </label>
                    );
                  })}
                </HStack>
              </HStack>
            </Stack>

            <Flex align="center" gap={10}>
              <Button size="xs" w="12rem" p="2rem" fontSize="1.6rem">
                <Icon as={FaHeart} fontSize="1.6rem" color="red" />
                <Text size="body2" fontWeight="600" ml={5}>
                  Like
                </Text>
                <Text size="body2" fontWeight="600" ml={2}>
                  4
                </Text>
              </Button>
              <Button
                variant="multicolor"
                size="xs"
                p="2rem"
                w="12rem"
                fontSize="1.6rem"
              >
                Report user
              </Button>
            </Flex>
          </Stack>
        </Flex>

        <CustomTab
          // largerHeading
          tabs={[
            {
              label: 'Testimonials',
              body: <TestimonialView />,
              icon: TestimonialIcon,
            },
            {
              label: 'Project',
              body: 'coming soon',
              icon: PaletteIcon,
            },
          ]}
        />

        {/* <Stack w="20%" spacing="10rem">
          <Stack spacing="3rem">
          <HStack spacing="8px">
              <Text letterSpacing="1px" fontSize="1.4rem" color="#fff">
                SKILLS
              </Text>
              <Box w="100%" border="1px solid #485155"></Box>
            </HStack>
            <Stack spacing="8px">
              <Text size="body2">UI/UX</Text>
              <Text size="body2">Web DesignX</Text>
              <Text size="body2">Packaging</Text>
              <Text size="body2">Coordinating</Text>
            </Stack>
          </Stack>
        </Stack> */}
      </Container>
    </Box>
  );
};

export default UserProfile;
