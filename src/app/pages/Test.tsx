import React, { FC } from 'react';
import { Button, Text, Heading } from '@chakra-ui/react';
import CustomTab from 'app/components/common/CustomTab';
import { PaletteIcon } from 'app/assets/icons';
import BecomeInvestor from 'app/components/landing-page/BecomeInvestor';

const CustomComponent = ({ name }: any) => {
  return <p>{name} COMPONENT!</p>;
};

const Test: FC = () => {
  return (
    <>
      <Button variant="default">Default Button</Button>
      <Button variant="primary">Primary Button</Button>
      <Button variant="primary" size="xl">
        Xlarge Button
      </Button>
      <Button variant="primary" isDisabled>
        Disabled Primary Button
      </Button>
      <Button variant="secondary">Secondary Button</Button>
      <Button variant="secondary" isDisabled>
        Disabled Secondary Button
      </Button>
      <Button variant="error">Error Button</Button>
      <Button variant="multicolor">Multicolor Button</Button>
      <Button variant="borderless">Borderless Button</Button>

      <Button data-text="Active round button"></Button>
      <Text>
        We are a reliable and innovative digital platform that provides
        hassle-free, quick debt and equity funding.
      </Text>

      <Button variant="secondary">HELLO WORLD</Button>

      <Heading size="xs">Extra Small heading</Heading>
      <Heading size="sm">Small heading</Heading>
      <Heading size="md">Medium heading</Heading>
      <Heading size="lg">Large heading</Heading>
      <Heading size="xl">Extra Large heading</Heading>
      <Heading size="2xl" mb="50">
        Extra Large II heading
      </Heading>

      <CustomTab
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
      />
    </>
  );
};

export default Test;
