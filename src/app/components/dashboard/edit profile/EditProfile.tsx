import {
  Container,
  Box,
  Avatar,
  Button,
  Flex,
  HStack,
  Text,
  Icon,
  Stack,
  Input,
} from '@chakra-ui/react';
import { verify } from 'app/assets/svgs/home';
import useAuth from 'app/hooks/useAuth';
import React, { FC } from 'react';

import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';

const EditProfile: FC = () => {
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const steps = [
    'General',
    'Edit Profile',
    'Password',
    'Social media account',
    'Email Notification',
    'Delete Account',
  ];
  return (
    <Box>
      <Container maxW="144rem" p="8.4rem 18.2rem">
        <Flex gap="2rem" align="center" mb="7.2rem">
          <Box>
            <Avatar
              border="2px solid pink"
              boxSize="64px"
              name={`${firstName} ${lastName}`}
              src={undefined}
            />
          </Box>
          <Stack spacing="15px" maxW="403px">
            <HStack spacing="6px">
              <Text fontWeight="700" fontSize="2.4rem" color="#fff">
                {`${firstName} ${lastName}`}
              </Text>
              <Text fontSize="2.4rem">/</Text>
              <Text fontWeight="700" fontSize="2.4rem" color="#fff">
                Edit Profile
              </Text>
            </HStack>
            <Text size="body2">Set up your profile preference</Text>
          </Stack>
        </Flex>
        <Flex gap="13rem">
          <Stack w="20%">
            {steps.map((step, index) => (
              <Link to="" key={index}>
                <Box py="1rem">
                  <Text
                    size="body2"
                    _hover={{
                      bgGradient: 'linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)',
                      bgClip: 'text',
                    }}
                  >
                    {step}
                  </Text>
                </Box>
              </Link>
            ))}
          </Stack>
          <Stack spacing="2rem" w="70%">
            <HStack></HStack>
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="Username"
                name="username"
              />
            </Box>
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="Email Address"
                name="email address"
              />
            </Box>
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="Email Address"
                name="email address"
              />
            </Box>
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="Email Address"
                name="email address"
              />
            </Box>

            <Flex flexDir="column" align="flex-end" mt="6px">
              <Button
                type="submit"
                fontSize="1.6rem"
                variant="multicolor"
                size="md"
              >
                Save Changes
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default EditProfile;
