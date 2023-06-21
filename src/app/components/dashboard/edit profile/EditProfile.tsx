import React, { FC, useState, useRef } from 'react';
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
import { CustomInput } from '../../common/CustomInput';
import { Link } from 'react-router-dom';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';

const EditProfile: FC = () => {
  const apiPrivate = useApiPrivate();
  const authContext = useAuth();
  const firstName = authContext?.auth?.firstName;
  const lastName = authContext?.auth?.lastName;
  const bio = authContext?.auth?.bio;
  const profilePicture = authContext?.auth?.profilePicture;

  const imageInput = useRef<HTMLInputElement>(null);

  const [userBio, setUserBio] = useState(bio ?? '');
  const [image, setImage] = useState(profilePicture);
  const [loading, setLoading] = useState(false);

  const selectImageInput = () => {
    if (imageInput.current?.value) {
      imageInput.current.value = '';
    }
    if (imageInput.current) {
      imageInput.current.click();
    }
  };

  const updateSelectedFile = async (files: any) => {
    if (files) {
      const file = files[0];
      if (file.type === 'image/jpeg' || file.type === 'image/png') {
        setImage(file);
      } else {
        chkToaster.error({ title: 'Invalid file type.' });
      }
    }
  };

  const handleSubmit = () => {
    setLoading(true);
    const formData = new FormData();
    formData.append('bio', userBio);
    if (image) formData.append('image', image);

    apiPrivate
      .patch('/user/summary', formData, {
        headers: {
          'Content-type': 'multipart/form-data',
        },
      })
      .then(() => {
        chkToaster.success({ title: 'Profile updated successfully' });
        setLoading(false);
      })
      .catch((err) => {
        chkToaster.error({ title: err.message || 'Something went wrong' });
        setLoading(false);
      });
  };

  return (
    <Box>
      <Stack spacing="2rem">
        <HStack spacing="2.2rem" mb="1.7rem">
          <Box>
            <Avatar
              border="2px solid pink"
              boxSize="64px"
              name={`${firstName} ${lastName}`}
              src={profilePicture ?? undefined}
            />
          </Box>
          <form
            onClick={() => selectImageInput()}
            onChange={() => updateSelectedFile(imageInput.current?.files)}
          >
            <Button fontSize="1.6rem" variant="multicolor" size="md">
              Upload {profilePicture ? 'new' : ''} picture
            </Button>
            <input
              type="file"
              id="upload-file"
              ref={imageInput}
              hidden
              accept=".jpg, .jpeg, .png"
              multiple
            />
          </form>

          <Button variant="secondary" fontSize="1.6rem" size="sm">
            Delete
          </Button>
        </HStack>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Full Name"
            name="full name"
          />
        </Box>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Location"
            name="location"
          />
        </Box>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Enter Bio here"
            name="bio"
            value={userBio}
            onChange={(e) => setUserBio(e.target.value)}
          />
        </Box>
        <Box w="100%">
          <CustomInput
            type="text"
            size="lg"
            placeholder="Enter Portfolio URL"
            name="portfolio url"
          />
        </Box>

        <Flex flexDir="column" align="flex-end" mt="6px">
          <Button
            type="submit"
            fontSize="1.6rem"
            variant="multicolor"
            size="md"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Save Profile
          </Button>
        </Flex>
      </Stack>
    </Box>
  );
};

export default EditProfile;
