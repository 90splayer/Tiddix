import React, { useState } from 'react';
import {
  Stack,
  Flex,
  Heading,
  Button,
  Box,
  Text,
  HStack,
  Avatar,
  useDisclosure,
  Progress,
  Icon,
  Checkbox,
  SimpleGrid,
} from '@chakra-ui/react';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';
import { thousandsSeparators, capitalizeFirstLetter } from 'app/utils/helpers';
import { CustomInput } from 'app/components/common/CustomInput';
import { RiArrowLeftSLine } from 'react-icons/ri';
import CustomModal from 'app/components/common/CustomModal';
import { round } from 'app/utils/helpers';

const InvestorPovDebtProjectInfo = ({
  id,
  amount: target,
  interest,
  progress,
  investors,
  loanGiven,
  moratoriumPeriod,
  projectDuration,
  repaymentFrequency,
}: any) => {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [balanceConfirmed, setBalanceConfirmed] = useState(false);
  const [acceptAgreement, setAcceptAgreement] = useState(false);
  const [angelInvestorMode, setAngelInvestorMode] = useState(false);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const apiPrivate = useApiPrivate();

  const percentageOfTarget = (amount / target) * 100;

  const amountDue = (interest / 100) * amount + amount;

  const handleChange = (e: any) => {
    const numWithoutComma = e.target.value.replace(/,|\£/gi, '');
    if (
      Number.isNaN(+numWithoutComma) ||
      Number(numWithoutComma) > 1000000000
    ) {
      return;
    }

    setAmount(Number(numWithoutComma));
  };

  const handleSubmit = () => {
    if (!amount) {
      chkToaster.error({ title: 'Please input a valid amount' });
      return;
    }
    setLoading(true);

    let url: string;

    if (balanceConfirmed) {
      url = `/projects/${id}/invest`;
    } else {
      url = `/projects/${id}/confirm-investor-balance`;
    }

    apiPrivate
      .post(url, { amount })
      .then(({ data }) => {
        if (balanceConfirmed) {
          chkToaster.success({ title: 'Investment Successful' });
          setAmount(0);
          setBalanceConfirmed(false);
        } else {
          if (data.status) {
            setBalanceConfirmed(data.status);
          } else {
            chkToaster.error({ title: 'Wallet balance insufficient' });
          }
        }
        setLoading(false);
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong, please try again' });
        setLoading(false);
      });
  };

  const goBack = () => {
    setBalanceConfirmed(false);
    setAngelInvestorMode(false);
  };

  const parseProjectDuration: any = {
    oneMonth: '1 Month',
    threeMonths: '3 Months',
    sixMonths: '6 Months',
    nineMonths: '9 Months',
    twelveMonths: '12 Months',
    aboveTwelveMonths: 'Above 12 Months',
  };

  const parseMoratoriumPeriod: any = {
    none: 'None',
    oneWeek: '1 Week',
    twoWeeks: '2 Weeks',
    threeWeeks: '3 Weeks',
    fourWeeks: '4 Weeks',
  };

  return (
    <Box>
      <CustomModal isOpen={isOpen} onClose={onClose}>
        {angelInvestorMode ? (
          <div>
            Project terms and condition for angel investors..Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
        ) : (
          <div>
            Project terms and condition for regular investors..Lorem ipsum dolor
            sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </div>
        )}

        <Button
          variant="whitebg"
          size="sm"
          w="12rem"
          mt="4rem"
          onClick={() => {
            setAcceptAgreement(true);
            onClose();
          }}
        >
          Agree
        </Button>
      </CustomModal>
      {balanceConfirmed ? (
        <Stack
          spacing="3rem"
          p="3rem"
          bg="#232629"
          borderRadius="20px"
          mb="1.9rem"
          maxW="55rem"
        >
          <Flex align="center">
            <Icon
              as={RiArrowLeftSLine}
              fill="white"
              fontSize="2.5rem"
              color="#99A1AA"
              cursor="pointer"
              onClick={goBack}
            />
          </Flex>

          <Flex align="center" justify="space-between">
            <Box>
              <Text size="body2">Amount Due</Text>
              <Heading fontSize="3.2rem">
                £{thousandsSeparators(amountDue)}
              </Heading>
            </Box>
          </Flex>

          <SimpleGrid columns={{ sm: 2, md: 3 }} spacing={8}>
            {!angelInvestorMode && (
              <>
                <Box maxW="143px">
                  <Text size="body2">Interest</Text>
                  <Text size="body2" color="#fff">
                    {interest}%
                  </Text>
                </Box>

                <Box>
                  <Text size="body2">ROI</Text>
                  <Text size="body2" color="#fff">
                    £{thousandsSeparators(round(amountDue - amount))}
                  </Text>
                </Box>

                <Box>
                  <Text size="body2">Repayment Frequency</Text>
                  <Text size="body2" color="#fff">
                    {capitalizeFirstLetter(repaymentFrequency)}
                  </Text>
                </Box>

                <Box>
                  <Text size="body2"> Moratorium period</Text>
                  <Heading fontSize="1.6rem">
                    {parseMoratoriumPeriod[moratoriumPeriod]}
                  </Heading>
                </Box>
              </>
            )}

            <Box maxW="143px">
              <Text size="body2">Project Duration</Text>
              <Text size="body2" color="#fff">
                {parseProjectDuration[projectDuration]}
              </Text>
            </Box>

            <Box>
              <Text size="body2">No of Investors</Text>
              <Text size="body2" color="#fff">
                {investors.length}
              </Text>
            </Box>
          </SimpleGrid>

          {/* <Flex maxW="49rem" justify="space-between">
            <Box>
              <Text size="body2"> Moratorium period</Text>
              <Heading fontSize="1.6rem">
                {parseMoratoriumPeriod[moratoriumPeriod]}
              </Heading>
            </Box>

            <Box maxW="143px">
              <Text size="body2">Project Duration</Text>
              <Text size="body2" color="#fff">
                {parseProjectDuration[projectDuration]}
              </Text>
            </Box>

            <Box>
              <Text size="body2">No of Investors</Text>
              <Text size="body2" color="#fff">
                {investors.length}
              </Text>
            </Box>
          </Flex> */}

          <Box>
            <HStack spacing="1.2rem" p="1.2rem" cursor="pointer">
              <Checkbox
                isChecked={acceptAgreement}
                size="lg"
                colorScheme="pink"
                onChange={(e: any) => setAcceptAgreement(e.target.checked)}
              />
              <Text size="body2" color="#fff">
                I agree to the{' '}
                <span
                  style={{ fontWeight: 'bold', textDecoration: 'underline' }}
                  onClick={onOpen}
                >
                  project agreement
                </span>{' '}
                as set out by the project creator.
              </Text>
            </HStack>
            <Button
              variant="multiradial"
              w="100%"
              fontSize="1.6rem"
              onClick={handleSubmit}
              isLoading={loading}
              isDisabled={!acceptAgreement}
            >
              Complete Investment
            </Button>
          </Box>
        </Stack>
      ) : (
        <Stack
          spacing="3rem"
          p="3rem"
          bg="#232629"
          borderRadius="20px"
          mb="2rem"
          maxW="55rem"
        >
          <Flex align="center" justify="space-between">
            <Box>
              <Text size="body2">Loan Amount</Text>
              <Heading fontSize="3.2rem">
                £{thousandsSeparators(target)}
              </Heading>
            </Box>

            <Box>
              <Text size="body2" pb=".8rem">
                Amount Raised
              </Text>
              <Text size="body2" pb=".8rem" color="white">
                £{thousandsSeparators(loanGiven)} ({progress}%)
              </Text>
              <Progress
                value={progress}
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

          <Flex maxW="49rem" flexDir="column" gap="3rem">
            <Flex justify="space-between">
              <Stack>
                <Box maxW="143px">
                  <Text size="body2">Interest</Text>
                  <Text size="body2" color="#fff">
                    {interest}%
                  </Text>
                </Box>
              </Stack>
              {/* <Stack>
                <Box maxW="143px">
                  <Text size="body2">Period </Text>
                  <Text size="body2" color="#fff">
                    5 Months
                  </Text>
                </Box>
              </Stack> */}
              {/* <Stack>
                <Box maxW="143px">
                  <Text size="body2">Interest Payment </Text>
                  <Text size="body2" color="#fff">
                    £20007
                  </Text>
                </Box>
              </Stack> */}
            </Flex>

            <Box>
              <CustomInput
                placeholder="Enter Amount"
                size="lg"
                value={amount === 0 ? '' : `\£${thousandsSeparators(amount)}`}
                onChange={handleChange}
              />
            </Box>

            <Flex gap={16} justify="space-between">
              <Button
                variant="multiradial"
                w="100%"
                fontSize="1.6rem"
                onClick={handleSubmit}
                isLoading={loading && !angelInvestorMode}
              >
                Initiate Investment
              </Button>
              <Button
                variant="primary"
                w="100%"
                fontSize="1.6rem"
                onClick={() => {
                  setAngelInvestorMode(true);
                  handleSubmit();
                }}
                isLoading={loading && angelInvestorMode}
              >
                Invest as Angel
              </Button>
            </Flex>
          </Flex>
        </Stack>
      )}

      <Flex
        p="3rem"
        bg="#232629"
        borderRadius="20px"
        direction="column"
        gap="2rem"
      >
        {investors.map((investor: any) => (
          <>
            <HStack spacing="2rem">
              <Avatar
                src={investor.investorPicture}
                border="3px solid pink"
                boxSize="40px"
              />
              <Box>
                <Heading fontSize="1.6rem">{investor.investorName}</Heading>
                <Text size="body2">{investor.percentage}%</Text>
              </Box>
            </HStack>
          </>
        ))}
      </Flex>
    </Box>
  );
};

export default InvestorPovDebtProjectInfo;
