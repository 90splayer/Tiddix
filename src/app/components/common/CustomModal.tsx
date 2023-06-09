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
import {
  FC,
  //  useLayoutEffect, useRef, useState
} from 'react';

type ModalProps = FC<
  {
    isOpen: boolean;
    onClose: () => void;
    modalTitle?: string;
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
  ...props
}) => {
  return (
    <Modal
      scrollBehavior="inside"
      allowPinchZoom
      onClose={onClose}
      isOpen={isOpen}
      isCentered
      size="xl"
    >
      <ModalOverlay />
      <ModalContent
        width="100%"
        borderRadius="2rem"
        paddingBottom="5rem"
        bg="blackShade.2"
        {...props}
      >
        <Flex
          padding={{ base: 4, sm: 6 }}
          alignItems="center"
          width="full"
          justifyContent="space-between"
          className="modal__header"
        >
          <ModalHeader p="0px" flex="1" display="block">
            {modalTitle && (
              <Heading size="title" fontWeight="medium">
                {modalTitle}
              </Heading>
            )}
          </ModalHeader>
          <ModalCloseButton
            position="static"
            boxSize="2.4rem"
            bg="blackShade.2"
          >
            {/* <DPIconToastClose /> */}X
          </ModalCloseButton>
        </Flex>
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
