import { Box, Center, Flex, Spacer, Text, IconButton } from '@chakra-ui/react';
import { createStandaloneToast } from '@chakra-ui/toast';
import theme from 'app/theme/theme';
import {
  CheckCircleIcon,
  InfoIcon,
  WarningIcon,
  SmallCloseIcon,
} from '@chakra-ui/icons';

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
    info: 'blackShade.3',
    warning: 'blackShade.3',
    error: 'blackShade.3',
    success: 'blackShade.3',
  };
  const iconType = {
    info: <InfoIcon color="#2196f3" w="20px" h="20px" />,
    warning: <WarningIcon color="#ffd863" w="20px" h="20px" />,
    error: <InfoIcon color="#f15349" w="20px" h="20px" />,
    success: <CheckCircleIcon color="#33ba7c" boxSize="3rem" />,
  };
  return (
    <>
      <Box
        display={{ base: 'none', sm: 'inline-block' }}
        maxW={{ base: '25rem', sm: '40rem' }}
        borderRadius="12px"
        px={8}
        py={4}
        bg="white"
        border="1px"
        borderColor={colorType[type]}
      >
        <Flex gap="20px" alignItems="center">
          <Center
            borderRadius="full"
            bg={`${colorType[type].split('.')[0]}.100`}
            h="3rem"
            w="3rem"
          >
            <Center
              borderRadius="full"
              h="3rem"
              w="3rem"
              bg={`${colorType[type].split('.')[0]}.200`}
            >
              {iconType[type]}
            </Center>
          </Center>
          <Flex flex={1} flexDirection="column">
            <Text
              fontSize={{ base: '1.0rem', sm: '1.4rem', md: '1.6rem' }}
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
          {isClosable && (
            <IconButton
              variant="borderless"
              p="0"
              aria-label="Search database"
              onClick={() => toast.onClose()}
              icon={<SmallCloseIcon />}
            />
          )}
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
