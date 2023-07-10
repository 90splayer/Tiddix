import {
  Stack,
  Flex,
  Box,
  Text,
  Heading,
  Progress,
  Button,
  Input,
} from '@chakra-ui/react';
import React from 'react';

const InvestorPovEquityProjectInfo = () => {
  return (
    <Box>
      <Stack
        spacing="3rem"
        p="3rem"
        bg="#232629"
        borderRadius="20px"
        mb="1.9rem"
        maxW="55rem"
      >
        <Flex align="center" justify="space-between">
          <Box>
            <Text pb="8px" size="body2">
              Target
            </Text>
            <Heading fontSize="3.2rem">$ 2,000</Heading>
          </Box>
          <Box>
            <Text size="body2" pb="3rem">
              {' '}
              ($ 20,000) 45%
            </Text>
            <Progress
              value={45}
              borderRadius="2rem"
              background="blackShade.3"
              sx={{
                '& > div': {
                  background: 'gradientStyle.1',
                },
              }}
              flex="2"
            />
          </Box>
        </Flex>

        <Box>
          <Input
            pos="relative"
            placeholder="Enter Amount"
            px="1.5rem"
            type="number"
            borderRadius="2rem"
            border="1px solid #99A1AA"
            w="100%"
            h="6.3rem"
            _placeholder={{
              fontSize: '1.6rem',
              color: '#99A1AA',
            }}
          />
        </Box>

        <Flex gap={16} justify="space-between">
          <Button variant="multiradial" w="100%" fontSize="1.6rem">
            Make Investment
          </Button>
          <Button variant="primary" w="100%" fontSize="1.6rem">
            Gift Creatives
          </Button>
        </Flex>
      </Stack>

      <Flex p="3rem" bg="#232629" flexDir="column" borderRadius="20px">
        <Text size="body2" pb="3rem">
          Fundraising ends 6 July 2023 at 5:30pm
        </Text>
        <Flex align="center" justify="space-between">
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">6</Heading>
            <Text size="body2">Days</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">5</Heading>
            <Text size="body2">Hours</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">11</Heading>
            <Text size="body2">Minutes</Text>
          </Stack>
          <Stack maxW="100px">
            <Heading fontSize="2.4rem">25</Heading>
            <Text size="body2">Seconds</Text>
          </Stack>
        </Flex>
      </Flex>
    </Box>
  );
};

export default InvestorPovEquityProjectInfo;
