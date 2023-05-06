import React, { FC } from 'react';
import { Button, Text, Heading, Box, Input, Flex } from '@chakra-ui/react';
import CustomTab from 'app/components/common/CustomTab';
import { PaletteIcon } from 'app/assets/icons';
import BecomeInvestor from 'app/components/landing-page/BecomeInvestor';
import { chkToaster } from 'app/components/common/Toaster';

const CustomComponent = ({ name }: any) => {
  return <p>{name} COMPONENT!</p>;
};

const Test: FC = () => {
  return (
    <>
      <Box mb="20">
        <Heading mb="10">Button Variants</Heading>
        <Button>default button</Button>
        <Button variant="primary">primary Button</Button>
        <Button variant="secondary">secondary Button</Button>
        <Button variant="whitebg">whitebg Button</Button>
        <Button variant="multicolor">multicolor Button</Button>
        <Button variant="borderless">borderless Button</Button>
        <Button variant="multiradial">multiradial Button</Button>
        <Button variant="error">error Button</Button>
      </Box>
      <Box mb="20">
        <Heading mb="10">Button Sizes</Heading>
        <Button size="sm">sm Button</Button>
        <Button size="md">md Button</Button>
        <Button size="lg">lg Button</Button>
      </Box>
      <Box mb="20">
        <Heading mb="10">Button States</Heading>
        <Button variant="primary" isDisabled>
          Disabled Primary Button
        </Button>
        <Button variant="secondary" isDisabled>
          Disabled Secondary Button
        </Button>
      </Box>
      <Text>
        We are a reliable and innovative digital platform that provides
        hassle-free, quick debt and equity funding.
      </Text>
      <Heading size="display1">display1 heading</Heading>
      <Heading size="display2">display2 heading</Heading>
      <Heading size="h1">h1 Heading</Heading>
      <Heading size="h2">h2 Heading</Heading>
      <Heading size="h3">h3 Heading</Heading>
      <Heading size="h4">h4 Heading</Heading>
      <Heading size="h5" mb="50">
        h5 Heading
      </Heading>
      <Text size="body1">body1 text</Text>
      <Text size="body2" mb="50">
        body2 text
      </Text>
      <CustomTab
        // largerHeading
        tabs={[
          {
            label: 'First tab',
            body: <CustomComponent name="FIRST" />,
            icon: PaletteIcon,
          },
          {
            label: 'Second tab',
            body: <BecomeInvestor />,
            icon: PaletteIcon,
          },
          {
            label: 'Third tab',
            body: 'lorem ipsum',
            icon: PaletteIcon,
          },
        ]}
        sideButtons={
          <>
            <Button>Siide button</Button>
            <Button variant="secondary">Siide button</Button>
          </>
        }
      />
      <Box mb="100"></Box>
      <Button
        onClick={() =>
          chkToaster.success({
            title:
              'Success Title snejnfejn  ejfejfefje  ef dkfnejfen  jfej fe  ebfejfejbeh ueb djfne jfej fehjfne',
            // description: 'This is a test description here',
            isClosable: true,
            duration: 300000,
          })
        }
      >
        Trigger Success Toast
      </Button>
      <Button
        onClick={() =>
          chkToaster.warning({
            title: 'Success Title',
            // description: 'This is a test description here',
            isClosable: true,
          })
        }
      >
        Trigger Warning Toast
      </Button>
      <Button
        onClick={() =>
          chkToaster.info({
            title: 'Success Title',
            // description: 'This is a test description here',
            isClosable: true,
          })
        }
      >
        Trigger Info Toast
      </Button>
      <Button
        onClick={() =>
          chkToaster.error({
            title: 'Success Title',
            // description: 'This is a test description here',
            isClosable: true,
          })
        }
      >
        Trigger Error Toast
      </Button>
      <Box mb="200"></Box>
      {/* 10 10 10 10 20(56), 20 15(59) */}
      <Flex w="50%" mb="200" gap="5">
        <Input type="text" size="md" placeholder="placeholder" />
        <Input type="text" size="lg" placeholder="placeholder" />
      </Flex>
    </>
  );
};

export default Test;
