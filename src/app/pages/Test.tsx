import React, { FC } from 'react';
import { Button, Text } from '@chakra-ui/react';

const Test: FC = () => {
  return (
    <>
      <Button disabled>Button</Button>
      <Button>Button2</Button>
      <Button data-text="Active round button"></Button>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        delectus dolores similique ea voluptatem id commodi velit magni
        veritatis quidem, fuga obcaecati, illo, eius accusantium aliquid cumque
        in nobis! Et!
      </Text>

      <Button variant="secondary">HELLO WORLD</Button>
    </>
  );
};

export default Test;
