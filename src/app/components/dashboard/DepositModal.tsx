import React, { useState } from 'react';
import CustomModal from 'app/components/common/CustomModal';
import {
  Flex,
  Box,
  InputGroup,
  InputRightElement,
  Input,
  Icon,
  Button,
  Text,
  InputLeftElement,
} from '@chakra-ui/react';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';
import { CustomInput } from '../common/CustomInput';
import { thousandsSeparators } from 'app/utils/helpers';
import useApiPrivate from 'app/hooks/useApiPrivate';
import { chkToaster } from 'app/components/common/Toaster';
import { setIn } from 'formik';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export default function DepositModal({ isOpen, onClose, title }: ModalProps) {
  const [amount, setAmount] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [inputError, setInputError] = useState('');

  const apiPrivate = useApiPrivate();

  const handleChange = (e: any) => {
    setInputError('');
    const numWithoutComma = e.target.value.replace(/,|\$/gi, '');
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
      .post('/user/wallet/transaction/deposit', { amount })
      .then(({ data }) => {
        console.log('success', data);
        chkToaster.success({ title: 'Deposit Successful' });
        setAmount(0);
        setLoading(false);
        onClose();
      })
      .catch(() => {
        chkToaster.success({ title: 'Something went wrong, please try again' });
        setLoading(false);
      });
  };

  return (
    <CustomModal modalTitle={title} isOpen={isOpen} onClose={onClose}>
      <Box pb="3rem">
        <Flex align="center" justify="center" gap="1.4rem">
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
            <InputGroup>
              {/* <InputLeftElement>$</InputLeftElement> */}
              <CustomInput
                placeholder="Enter Amount"
                size="lg"
                // type="number"
                maxW="26.3rem"
                value={`\$${thousandsSeparators(amount)}`}
                onChange={handleChange}
                error={inputError}
              />
              <InputRightElement pr="1.6rem" width="auto">
                <Text size="body2">Min $5</Text>
              </InputRightElement>
            </InputGroup>
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
        <Flex align="center" justify="center" mt="4rem">
          <Button
            variant="multicolor"
            maxW="39rem"
            w="100%"
            fontSize="1.6rem"
            onClick={handleSubmit}
            isLoading={loading}
          >
            Make Payment
          </Button>
        </Flex>
      </Box>
    </CustomModal>
  );
}
