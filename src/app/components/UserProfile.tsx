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
import { FC, useEffect, useState } from 'react';
import { LinkIcon } from '@chakra-ui/icons';

import { PaletteIcon, DashboardIcon, TestimonialIcon } from 'app/assets/icons';
import CustomTab from '../components/common/CustomTab';

import useAuth from 'app/hooks/useAuth';
import { Link, useParams } from 'react-router-dom';
import { thousandsSeparators } from 'app/utils/helpers';
import DashboardOverview from './dashboard/DashboardOverview';
import ProjectOverview from './dashboard/project/ProjectOverview';
import TestimonialView from './dashboard/TestimonialView';
import { FaHeart, FaStar } from 'react-icons/fa';
import UserDashboard from './UserDashboard';
import api from 'app/api/tiddix';
import { chkToaster } from './common/Toaster';

const UserProfile: FC = () => {
  const { id } = useParams();
  const [dashboardInfo, setDashboardInfo] = useState<any>();

  // const authContext = useAuth();
  // const firstName = authContext?.auth?.firstName;
  // const lastName = authContext?.auth?.lastName;
  // const bio = authContext?.auth?.bio;
  // const profilePicture = authContext?.auth?.profilePicture;
  // const walletBalance = authContext?.auth?.walletBalance;
  const [like, setLike] = useState(false);

  useEffect(() => {
    api
      .get(`/user/${id}`)
      .then(({ data }) => {
        setDashboardInfo(data);
        console.log('DATAA', data);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong' });
      });
  }, []);

  const likeHandler = () => setLike(!like);
  const likeValue = 4;

  if (!dashboardInfo) {
    return <h1>Loading...</h1>;
  }
  const { bio, firstName, lastName, profilePicture } = dashboardInfo;
  return (
    <Box>
      <Container
        maxW="144rem"
        zIndex={3}
        p={{
          base: '3.5rem 2rem',
          md: '5rem 5.2rem',
          lg: '5rem 10.2rem',
        }}
      >
        <Flex
          flexDir={{ base: 'column', sm: 'row' }}
          gap={{ base: 20, md: 70 }}
          mb="5rem"
          align={{ base: 'flex-start', md: 'center' }}
          justify={{ base: 'center', sm: 'unset' }}
        >
          <Box>
            <Avatar
              border="2px solid pink"
              boxSize={{ base: '150px', md: '200px' }}
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
              <Button size="xs" w="12rem" p="2rem" onClick={likeHandler}>
                <Icon
                  as={FaHeart}
                  fontSize="1.5rem"
                  color={like ? 'red' : 'gray'}
                />
                <Text fontSize="1.5rem" fontWeight="600" ml={5}>
                  {like ? 'Dislike' : 'Like'}
                </Text>
                <Text fontSize="1.5rem" fontWeight="600" ml={2}>
                  {like ? likeValue + 1 : likeValue}
                </Text>
              </Button>
              <Button
                variant="multicolor"
                size="xs"
                p="2rem"
                w="12rem"
                fontSize="1.5rem"
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
              label: 'Dashboard',
              body: <UserDashboard />,
              icon: DashboardIcon,
            },
            {
              label: 'Project',
              body: 'coming soon',
              icon: PaletteIcon,
            },
            {
              label: 'Testimonials',
              body: <TestimonialView />,
              icon: TestimonialIcon,
            },
          ]}
        />
      </Container>
    </Box>
  );
};

export default UserProfile;
