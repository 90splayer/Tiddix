import { Box, Center, Flex, Spacer, Text } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
// import { CloseButton } from 'app/ui/components/atoms/ChkAtoms';
import // DPIconToastCheck,
// DPIconToastConfetti,
// DPIconToastDanger,
// DPIconToastWarning,
'app/assets/icons';
import { MoneyBagIcon } from 'app/assets/icons';
import theme from 'app/theme/theme';

type ToastType = 'info' | 'success' | 'warning' | 'error';

type GetToasterProps = {
  toast: { id: string | number; onClose: () => void };
  type: ToastType;
  title: string;
  description?: string;
  isClosable?: boolean;
};

type ToasterProps = {
  title: string;
  description?: string;
  isClosable?: boolean;
  duration?: number | null;
  position?:
    | 'top'
    | 'top-right'
    | 'top-left'
    | 'bottom'
    | 'bottom-right'
    | 'bottom-left';
};

type ToastElementProps = {
  title: string;
  description?: string;
  toast: { id: string | number; onClose: () => void };
  isClosable: boolean;
};

const Toast = ({
  title,
  description,
  toast,
  isClosable,
  type,
}: ToastElementProps & { type: ToastType }) => {
  const colorType = {
    info: 'gray.200',
    warning: 'warning.400',
    error: 'error.400',
    success: 'pastelGreen.500',
  };
  const iconType = {
    info: <MoneyBagIcon />,
    warning: <MoneyBagIcon />,
    error: <MoneyBagIcon />,
    success: <MoneyBagIcon />,
  };
  return (
    <>
      <Box
        display={{ base: 'none', sm: 'inline-block' }}
        maxW="max-content"
        borderRadius="12px"
        px={4}
        py={3}
        bg="white"
        border="1px"
        borderColor={colorType[type]}
      >
        <Flex gap="20px" alignItems="center">
          <Center
            borderRadius="full"
            bg={`${colorType[type].split('.')[0]}.100`}
            h="48px"
            w="48px"
          >
            <Center
              borderRadius="full"
              h="40px"
              w="40px"
              bg={`${colorType[type].split('.')[0]}.200`}
            >
              {iconType[type]}
            </Center>
          </Center>
          <Flex flex={1} flexDirection="column">
            <Text
              fontSize={{ base: 'sm', sm: 'md' }}
              color="black"
              fontWeight="medium"
            >
              {title}
            </Text>
            {description && (
              <>
                <Spacer />
                <Text
                  color="gray.500"
                  fontSize={{ base: 'xs', sm: 'sm' }}
                  fontWeight="normal"
                >
                  {description}
                </Text>
              </>
            )}
          </Flex>
          {/* {isClosable && <CloseButton onClick={() => toast.onClose()} />} */}
          {isClosable && 'X'}
        </Flex>
      </Box>
      <Box display={{ base: 'block', sm: 'none' }} p={6} bg={colorType[type]}>
        <Flex align="center">
          <Text fontSize="sm" color="white">
            {title}
          </Text>
          {isClosable && (
            <Text
              onClick={() => toast.onClose()}
              fontSize="sm"
              fontWeight="medium"
              color="white"
            >
              Dismiss
            </Text>
          )}
        </Flex>
      </Box>
    </>
  );
};

const getToaster = ({
  toast,
  type,
  title,
  description,
  isClosable,
}: GetToasterProps) => {
  return (
    <Toast
      toast={toast}
      title={title}
      description={description}
      isClosable={isClosable ?? false}
      type={type}
    />
  );
};
const createToast =
  (type: ToastType) =>
  ({
    title,
    description,
    isClosable,
    duration = 3000,
    position = 'top',
  }: ToasterProps) => {
    const { toast } = createStandaloneToast({ theme });

    const toastId = toast({
      position,
      render: (t: any) =>
        getToaster({ toast: t, type, title, description, isClosable }),
      duration,
    });

    return {
      removeToast: () => toast.close(toastId!),
      updateToast: ({
        title,
        description,
        isClosable,
        duration,
        type,
      }: Omit<ToasterProps, 'position'> & { type: ToastType }) =>
        toast.update(toastId!, {
          position,
          duration,
          render: (t: any) =>
            getToaster({ toast: t, type, title, description, isClosable }),
        }),
    };
  };

export const chkToaster = {
  info: createToast('info'),
  success: createToast('success'),
  warning: createToast('warning'),
  error: createToast('error'),
};
