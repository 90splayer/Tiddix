import {
  FC,
  //  useLayoutEffect, useRef, useState
} from 'react';
import {
  Flex,
  Heading,
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalContentProps,
  ModalFooter,
  ModalFooterProps,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
// import FocusLock from 'react-focus-lock';
// import { DPIconToastClose } from 'app/assets/icons';
import { CloseIcon } from '@chakra-ui/icons';

type ModalProps = FC<
  {
    isOpen: boolean;
    onClose: () => void;
    modalTitle?: string;
    size?: 'string';
  } & ModalContentProps
> & {
  Body: FC<ModalBodyProps>;
  Footer: FC<ModalFooterProps>;
};

const CustomModal: ModalProps = ({
  isOpen,
  onClose,
  modalTitle,
  children,
  size,
  ...props
}) => {
  return (
    <Modal
      scrollBehavior="inside"
      allowPinchZoom
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size={size ? size : '4xl'}
    >
      <ModalOverlay />
      <ModalContent
        width="100%"
        borderRadius="2rem"
        paddingBottom="5rem"
        bg="blackShade.2"
        padding={{ base: '2.5rem 2.5rem', sm: '5rem' }}
        {...props}
      >
        <ModalCloseButton
          position="absolute"
          boxSize="2.4rem"
          bg="blackShade.2"
          fontSize="xl"
          top="1.8rem"
          right="1.8rem"
        >
          <CloseIcon />
        </ModalCloseButton>

        <ModalHeader p="0px" flex="1" display="block">
          {modalTitle && (
            <Heading size="h2" textAlign="center" mb="5rem">
              {modalTitle}
            </Heading>
          )}
        </ModalHeader>

        {children}
      </ModalContent>
    </Modal>
  );
};

const Body: FC<ModalBodyProps> = ({ children, ...props }) => {
  return (
    <ModalBody
      overflow="overlay"
      sx={{
        '::-webkit-scrollbar': {
          width: '.2rem',
          height: '.2rem',
        },
        '::-webkit-scrollbar-track': {
          background: 'gray.25',
        },
        '::-webkit-scrollbar-thumb': {
          background: 'gray.300',
        },
      }}
      padding={{ base: '1.6rem 1.6rem', sm: '1.6rem 2.4rem' }}
      bg="gray.25"
      {...props}
    >
      {children}
    </ModalBody>
  );
};
const Footer: FC<ModalFooterProps> = ({ children, ...props }) => {
  return (
    <ModalFooter
      justifyContent="normal"
      padding={{ base: 4, sm: 6 }}
      {...props}
    >
      {children}
    </ModalFooter>
  );
};

CustomModal.Body = Body;
CustomModal.Footer = Footer;

export default CustomModal;
