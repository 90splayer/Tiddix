import {
  FormControl,
  FormLabel,
  Select,
  FormErrorMessage,
  SelectProps,
} from '@chakra-ui/react';
import { ChevronDownIcon } from 'app/assets/icons';
import styled from 'styled-components';

type Props = {
  options: any;
  label: string;
  name: string;
  placeholder?: string;
  error?: string;
} & SelectProps;

function CustomSelectField({
  options,
  label,
  name,
  placeholder,
  error,
  ...rest
}: Props) {
  return (
    <Styling>
      <FormControl isInvalid={!!error}>
        <FormLabel
          display={'inline-block'}
          p="1px 3px"
          borderRadius="5px"
          fontSize="12px"
          color={'gray'}
          bg="blackShade.1"
          pos="absolute"
          zIndex={5}
          top="-10px"
          left={3}
        >
          {/* {label} */}
        </FormLabel>
        <Select
          icon={<ChevronDownIcon />}
          fontSize={{ base: '10px', sm: '14px' }}
          borderRadius="2rem"
          height="5.9rem"
          _hover={{ border: '2px solid #FF8CDF' }}
          focusBorderColor="#FF8CDFF"
          border="1px solid #99A1AA"
          _focusVisible={{ border: '1px solid #99A1AA' }}
          transition="0.7 ease-in-out"
          placeholder={placeholder ? placeholder : 'Select an option'}
          _placeholder={{ color: 'blackShade.4' }}
          // color="white"
          {...rest}
        >
          {options.map((o: any) => (
            <option value={o.value} key={o.value}>
              {o.label}
            </option>
          ))}
        </Select>

        {error && (
          <FormErrorMessage mt="1.5" color="red.500" fontSize="1.4rem">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </Styling>
  );
}

const Styling = styled.div`
  .chakra-select__icon-wrapper.css-iohxn1 {
    right: 2rem;
  }
`;

export default CustomSelectField;
