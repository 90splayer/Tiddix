import React from 'react';
import CustomModal from 'app/components/common/CustomModal';
import { Flex, Box, Input, Icon, Button } from '@chakra-ui/react';
import { HiMinus } from 'react-icons/hi';
import { HiPlus } from 'react-icons/hi';

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
};

export default function DepositModal({ isOpen, onClose, title }: ModalProps) {
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
          >
            <Icon as={HiMinus} fontSize="1.6rem" color="#fff" />
          </Flex>
          <Box>
            <Input
              pos="relative"
              placeholder="Enter Amount"
              px="1.5rem"
              type="number"
              borderRadius="2rem"
              border="1px solid #99A1AA"
              maxW="26.3rem"
              h="6.3rem"
              _placeholder={{
                fontSize: '1.6rem',
                color: '#99A1AA',
              }}
            />
          </Box>
          <Flex
            border="1px solid #99A1AA"
            align="center"
            justify="center"
            borderRadius="100%"
            p="2rem"
          >
            <Icon as={HiPlus} fontSize="1.6rem" color="#fff" />
          </Flex>
        </Flex>
        <Flex align="center" justify="center">
          <Button variant="multicolor" maxW="39rem" w="100%" fontSize="1.6rem">
            Make Payment
          </Button>
        </Flex>
      </Box>
    </CustomModal>
  );
}
