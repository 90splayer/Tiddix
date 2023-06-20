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
import useAuth from 'app/hooks/useAuth';
import React, { FC } from 'react';

import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';

const ProfilePassword: FC = () => {
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
      <Container maxW="144rem" p="6.4rem 18.2rem">
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
                Password
              </Text>
            </HStack>
            <Text size="body2">Manage you password</Text>
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
          <Stack spacing="1.9rem" w="70%">
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="Old Password"
                name="Old Password"
              />
            </Box>
            <Box w="100%">
              <CustomInput
                type="text"
                size="lg"
                placeholder="New Password"
                name="NewPassword"
              />
            </Box>

            <Flex flexDir="column" align="flex-end" mt="6px">
              <Button
                type="submit"
                fontSize="1.6rem"
                variant="multicolor"
                size="md"
              >
                Change
              </Button>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};

export default ProfilePassword;
