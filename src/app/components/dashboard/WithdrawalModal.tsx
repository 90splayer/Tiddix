import React, { useState } from 'react';
import CustomModal from 'app/components/common/CustomModal';
import { Flex, Box, Input, Icon, Button, VStack } from '@chakra-ui/react';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { CustomInput } from '../common/CustomInput';
import { thousandsSeparators } from 'app/utils/helpers';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from '../common/Toaster';
import useAuth from 'app/hooks/useAuth';
import { AuthUserT } from 'app/context/AuthProvider';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  reload: boolean;
  setReload: React.Dispatch<React.SetStateAction<boolean>>;
  title?: string;
};

export default function WithdrawalModal({
  isOpen,
  onClose,
  reload,
  setReload,
  title,
}: ModalProps) {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const apiPrivate = useApiPrivate();
  const authContext = useAuth();

  const handleChange = (e: any) => {
    setInputError('');
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
      setInputError('Please input a valid amount');
      return;
    }
    setLoading(true);
    apiPrivate
      .post('/user/wallet/transaction/withdraw', { amount })
      .then(({ data }) => {
        console.log('success', data);
        chkToaster.success({ title: 'Withdraw Successful' });
        setAmount(0);

        apiPrivate
          .get('/user/summary')
          .then(({ data }) => {
            const { walletBalance } = data;
            authContext?.setAuth({
              ...(authContext.auth as AuthUserT),
              walletBalance,
            });
          })
          .catch(() => {
            chkToaster.error({ title: 'Something went wrong' });
          });

        setReload(!reload);
        setLoading(false);
        onClose();
      })
      .catch(() => {
        chkToaster.error({ title: 'Something went wrong, please try again' });
        setLoading(false);
      });
  };

  return (
    <CustomModal modalTitle={title} isOpen={isOpen} onClose={onClose}>
      <Box pb="3rem">
        <Flex align="center" mb="3rem" justify="center" gap="1.4rem">
          <Flex
            border="1px solid #99A1AA"
            align="center"
            justify="center"
            borderRadius="100%"
            p="2rem"
            cursor="pointer"
            onClick={() => {
              if (amount - 10 < 0) {
                setAmount(0);
              } else {
                setAmount(amount - 10);
              }
            }}
          >
            <Icon as={HiMinus} fontSize="1.6rem" color="#fff" />
          </Flex>
          <Box flex="1">
            <CustomInput
              size="lg"
              placeholder="Enter Amount"
              px="1.5rem"
              borderRadius="2rem"
              border="1px solid #99A1AA"
              maxW="26.3rem"
              h="6.3rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
              }}
              value={amount === 0 ? '' : `£${thousandsSeparators(amount)}`}
              onChange={handleChange}
              error={inputError}
            />
          </Box>
          <Flex
            border="1px solid #99A1AA"
            align="center"
            justify="center"
            borderRadius="100%"
            p="2rem"
            cursor="pointer"
            onClick={() => setAmount(amount + 10)}
          >
            <Icon as={HiPlus} fontSize="1.6rem" color="#fff" />
          </Flex>
        </Flex>
        {/* <VStack spacing="1.9rem">
          <Box>
            <Input
              pos="relative"
              placeholder="select bank"
              px="1.5rem"
              type="number"
              borderRadius="2rem"
              border="1px solid #99A1AA"
              w="41.1rem"
              // maxW="41.1rem"
              h="6.3rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
              }}
            />
          </Box>
          <Box>
            <Input
              pos="relative"
              placeholder="Account Number"
              px="1.5rem"
              type="number"
              borderRadius="2rem"
              border="1px solid #99A1AA"
              // maxW="41.1rem"
              w="41.1rem"
              h="6.3rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
              }}
            />
          </Box>
          <Box>
            <Input
              pos="relative"
              placeholder="Account Name"
              px="1.5rem"
              type="number"
              borderRadius="2rem"
              border="1px solid #99A1AA"
              w="41.1rem"
              // maxW="41.1rem"
              h="6.3rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
              }}
            />
          </Box>
        </VStack> */}

        <Flex align="center" justify="center" mt="4rem">
          <Button
            variant="multicolor"
            maxW="39rem"
            w="100%"
            fontSize="1.6rem"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Withdraw
          </Button>
        </Flex>
      </Box>
    </CustomModal>
  );
}
