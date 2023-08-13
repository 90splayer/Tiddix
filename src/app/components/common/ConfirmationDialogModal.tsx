import { ShieldWarningicon } from 'app/assets/icons';
import { Button, Center, Flex, Heading } from '@chakra-ui/react';
import { toTitleCase } from 'app/utils/helpers';
import CustomModal from './CustomModal';

type ConfirmationProp = {
  dialogContent: {
    title: string;
    text: string;
    accept?: string;
    reject: string;
  };
  modalState: boolean;
  closeModal: (state: boolean) => void;
  next: () => void;
};

const ConfirmationDialogModal = ({
  dialogContent,
  next,
  modalState,
  closeModal,
}: ConfirmationProp) => {
  const modalAction = () => {
    next();
    closeModal(!modalState);
  };

  const { text } = dialogContent;
  const newText = text.split('\n').map((str) => (
    <span style={{ marginBottom: '10px', display: 'inline-block' }} key={str}>
      {str}
    </span>
  ));

  return (
    <CustomModal
      maxWidth="37rem"
      isOpen={modalState}
      onClose={() => closeModal(!modalState)}
    >
      <CustomModal.Body
        textAlign="center"
        maxWidth="300px"
        width="90%"
        margin="0px auto"
        padding="0px"
        // bg="white"
      >
        <Center width="full" mb={6}>
          <ShieldWarningicon width="44px" height="44px" />
        </Center>
        <Heading size="h2" mb={4}>
          {dialogContent.title}
        </Heading>
        <div>{newText}</div>
      </CustomModal.Body>
      <CustomModal.Footer>
        <Flex direction="column" w="full" gap={4}>
          {dialogContent.accept && (
            <Button onClick={modalAction} w="100%" variant="whitebg" size="sm">
              {toTitleCase(dialogContent.accept)}
            </Button>
          )}
          <Button
            onClick={() => closeModal(!modalState)}
            w="100%"
            variant="secondary"
            size="sm"
          >
            {toTitleCase(dialogContent.reject)}
          </Button>
        </Flex>
      </CustomModal.Footer>
    </CustomModal>
  );
};

export default ConfirmationDialogModal;
