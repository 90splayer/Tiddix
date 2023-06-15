import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  Heading,
  Input,
  Progress,
  Select,
  Stack,
  Text,
} from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { InvestmentIcon, PaletteIcon } from 'app/assets/icons';
import InvestTypeCard from './InvestmentTypeCard';
import CreateProjHeader from './CreateProjHeader';

const InvestmentType: FC = () => {
  const [display, setDisplay] = useState(false);

  return (
    <Box borderTop="1px solid grey" mt="2rem">
      <Container
        maxW="144rem"
        p={{
          base: '3.5rem 2rem',
          sm: '3rem 5rem',
          md: '3rem 5.2rem 5rem',
          lg: '3rem 7.2rem 5rem',
        }}
      >
        <CreateProjHeader />
        <Flex justify="space-between" gap={6}>
          <Flex flexDir="column" w="70%">
            <Heading as="h2" mb="4.2rem">
              Investment type
            </Heading>

            <Flex w="100%" gap="2rem" mb="43px">
              <Box onClick={() => setDisplay(false)}>
                <InvestTypeCard
                  title="Debt"
                  icon={PaletteIcon}
                  desc="The funding comes with no creative strings attached and no limits or requirements on creators except that which has been agreed with the investor"
                />
              </Box>

              <Box onClick={() => setDisplay(true)}>
                <InvestTypeCard
                  title={'Equity'}
                  icon={InvestmentIcon}
                  desc={
                    'This method allows investors to support and financially benefit from investing in upcoming talent.'
                  }
                />
              </Box>
            </Flex>
            <Stack
              spacing="22px"
              w="100%"
              className="debt"
              display={display ? 'none' : 'unset'}
            >
              <Flex gap="1.8rem">
                <Input type="text" size="lg" placeholder="Enter Amount" />
                <Select
                  placeholder="Enter Duration"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
              <Flex gap="1.8rem">
                <Select
                  placeholder="Select Payment Frequency"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Select
                  placeholder="Moratorium Period"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>{' '}
            </Stack>

            <Stack
              spacing="22px"
              w="100%"
              className="equity"
              display={display ? 'unset' : 'none'}
            >
              <Flex gap="1.8rem">
                <Select
                  placeholder="Moratorium Period"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>

                <Input type="text" size="lg" placeholder="Amount" />
              </Flex>{' '}
              <Flex gap="1.8rem">
                <Select
                  placeholder="Equity amount offered"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
                <Select
                  placeholder="Repayment date"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>{' '}
              <Flex>
                <Select
                  placeholder="Repayment date"
                  h="5.6rem"
                  fontSize="1.6rem"
                  border="1px solid #99A1AA"
                  borderRadius="2rem"
                >
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                </Select>
              </Flex>
            </Stack>
          </Flex>
          <Flex flexDir="column" w="25%">
            <Flex align="center" justify="space-between" mb="2rem">
              <Text size="body2" color="white">
                Progress Status
              </Text>
              <Text size="body2" fontWeight="700">
                80%
              </Text>
            </Flex>
            <Box mb="3rem">
              <Progress
                value={80}
                size="md"
                colorScheme="transparent"
                borderRadius="20px"
                background="linear-gradient(transparent, transparent) padding-box, linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) border-box"
              />
            </Box>
            <Stack
              mb="5.4rem"
              borderRadius="20px"
              spacing="4rem"
              w="100%"
              p="2rem"
              bg="#232629"
              border="1px solid #485155"
            >
              <Checkbox variant="circular">
                <Text
                  size="body2"
                  bgGradient="linear(to-bl,#FFC227, #FF8CDF,#4EFCF9)"
                  bgClip="text"
                >
                  Project Description
                </Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Portfolio Upload</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Connect social Media</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Project Type</Text>
              </Checkbox>
              <Checkbox variant="circular">
                <Text size="body2">Finish</Text>
              </Checkbox>
            </Stack>
            <Box>
              <Button variant="multicolor" size="md" w="100%">
                Next
              </Button>
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
};

export default InvestmentType;
