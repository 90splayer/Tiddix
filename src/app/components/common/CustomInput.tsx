import {
  FormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/form-control';
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
  InputRightElement,
} from '@chakra-ui/input';
import { Select, SelectProps } from '@chakra-ui/select';
import { Textarea, TextareaProps } from '@chakra-ui/textarea';

import { DatePickerProps } from 'react-date-picker';
import DatePicker from 'react-date-picker/dist/entry.nostyle';
// import { ViewOffIcon, ViewIcon } from 'app/assets/icons';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import React, { useState } from 'react';
import styled, { css } from 'styled-components';

interface InputBaseProps {
  loading?: boolean;
  label?: string;
  error?: string;
  readOnly?: boolean;
  startIcon?: React.ReactElement | any;
  endIcon?: React.ReactElement | any;
  required?: boolean;
  disabled?: boolean;
}

interface SelectBaseProps extends InputBaseProps {
  id?: string;
  // value?: { label: string; value: string };
  value?: string;
  options: { label: string; value: string; isDisabled?: boolean }[];
  className?: string;
  // onChange?: (e: { target: { value: { label: string; value: string } } }) => void;
}

type TextAreaComponent = React.FC<InputBaseProps & TextareaProps>;
type PasswordComponent = React.FC<Omit<InputBaseProps, 'endIcon'> & InputProps>;
type SelectComponent = React.FC<SelectBaseProps & SelectProps>;
type DateComponent = React.FC<
  { onChange?: any; isSmallVariant?: boolean } & InputBaseProps &
    DatePickerProps &
    InputProps
>;

type InputComponent = React.FC<InputBaseProps & InputProps> & {
  TextArea: TextAreaComponent;
  Password: PasswordComponent;
  Select: SelectComponent;
  Date: DateComponent;
};

export const CustomInput: InputComponent = (props) => {
  const {
    label,
    readOnly,
    name,
    id,
    error,
    startIcon,
    endIcon,
    value,
    required,
    disabled,
    ...rest
  } = props;

  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!error}
      isReadOnly={readOnly}
    >
      {label && (
        <FormLabel
          mb="1.5"
          color="gray.500"
          fontWeight="normal"
          fontSize="sm"
          _disabled={{ color: 'gray.500' }}
          htmlFor={name ?? id}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {startIcon && (
          <InputLeftElement top="50%" transform="translateY(-50%)">
            {startIcon}
          </InputLeftElement>
        )}
        <Input
          id={id ?? name}
          name={name}
          size="lg"
          // bg="white"
          value={value}
          {...rest}
        />
        {endIcon && <InputRightElement>{endIcon}</InputRightElement>}
      </InputGroup>
      {error && (
        <FormErrorMessage mt="1.5" color="red.500" fontSize="1.2rem">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const ChkSelect: SelectComponent = (props) => {
  const {
    label,
    options,
    readOnly,
    name,
    id,
    error,
    startIcon,
    endIcon,
    value,
    required,
    disabled,
    onChange,
    ...rest
  } = props;
  // const onSelectChange = (e: any) => {
  //   const { value, options: op } = e.target;
  //   if (onChange) {
  //     onChange({
  //       target: {
  //         value: {
  //           label: options[op.selectedIndex - 1]?.label,
  //           value,
  //         },
  //       },
  //     });
  //   }
  // };
  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!error}
      isReadOnly={readOnly}
    >
      {label && (
        <FormLabel
          mb="1.5"
          color="gray.500"
          fontWeight="normal"
          fontSize="sm"
          htmlFor={id ?? name}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {startIcon && <InputLeftElement>{startIcon}</InputLeftElement>}
        <Select
          id={id ?? name}
          name={name}
          size="lg"
          bg="white"
          value={value}
          onChange={onChange}
          {...rest}
        >
          {options.map(({ value: v, label: l }, i) => (
            <option key={`${v}-${i.toString()}`} value={v}>
              {l}
            </option>
          ))}
        </Select>
        {endIcon && <InputRightElement>{endIcon}</InputRightElement>}
      </InputGroup>
      {error && (
        <FormErrorMessage mt="1.5" color="error.600" fontSize="sm">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

export const ChkPasswordInput: PasswordComponent = (props) => {
  const {
    label,
    readOnly,
    name,
    id,
    error,
    startIcon,
    value,
    required,
    disabled,
    ...rest
  } = props;
  const [show, setShow] = useState(false);
  const toggleShow = () => setShow(!show);

  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!error}
      isReadOnly={readOnly}
    >
      {label && (
        <FormLabel
          mb="1.5"
          color="gray.500"
          fontWeight="normal"
          fontSize="sm"
          htmlFor={name ?? id}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        {startIcon && <InputLeftElement>{startIcon}</InputLeftElement>}
        <Input
          id={id ?? name}
          name={name}
          size="lg"
          bg="white"
          value={value}
          type={show ? 'text' : 'password'}
          {...rest}
        />
        <InputRightElement top="50%" transform="translateY(-50%)">
          <span onClick={toggleShow} aria-hidden="true">
            {!show ? <ViewIcon /> : <ViewOffIcon />}
          </span>
        </InputRightElement>
      </InputGroup>
      {error && (
        <FormErrorMessage mt="1.5" color="error.600" fontSize="sm">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

const ChkTextarea: TextAreaComponent = (props) => {
  const {
    label,
    readOnly,
    name,
    id,
    error,
    value,
    required,
    disabled,
    ...rest
  } = props;

  return (
    <FormControl
      isRequired={required}
      isDisabled={disabled}
      isInvalid={!!error}
      isReadOnly={readOnly}
    >
      {label && (
        <FormLabel
          mb="1.5"
          color="gray.500"
          fontWeight="normal"
          fontSize="sm"
          htmlFor={name ?? id}
        >
          {label}
        </FormLabel>
      )}
      <InputGroup>
        <Textarea
          id={id ?? name}
          name={name}
          bg="white"
          size="lg"
          value={value}
          {...rest}
        />
      </InputGroup>
      {error && (
        <FormErrorMessage mt="1.5" color="error.600" fontSize="sm">
          {error}
        </FormErrorMessage>
      )}
    </FormControl>
  );
};

const ChkDate: DateComponent = (props) => {
  const {
    required,
    isSmallVariant,
    onChange,
    startIcon,
    label,
    error,
    value,
    name,
    id,
    endIcon,
    style,
    bgColor,
    ...rest
  } = props;

  const minStyles = {
    '.react-date-picker__wrapper': {
      border: 'none',
      padding: '7px 8px',
      fontSize: '12px',
      fontWeight: 'medium',
      color: 'gray.400',
      bg: bgColor ?? 'gray.25',
      borderRadius: '4px',
    },
    '.react-date-picker__button': {
      padding: '0px',
    },
  };

  const handleChange = (date: Date) => {
    if (onChange) {
      onChange({ target: { id, name, value: date } });
    }
  };

  return (
    <DateWrapper style={style}>
      <FormControl isRequired={required} isInvalid={!!error}>
        {label && (
          <FormLabel
            color="blackShade.4"
            fontWeight="600"
            fontSize="1.2rem"
            htmlFor={name ?? id}
            position="absolute"
            zIndex="5"
            bg="#15181D"
            padding="0 .3rem"
            left="1.2rem"
            top="-.9rem"
          >
            {label}
          </FormLabel>
        )}
        <InputGroup sx={isSmallVariant ? minStyles : undefined}>
          {startIcon && (
            <InputLeftElement top="50%" transform="translateY(-50%)">
              {startIcon}
            </InputLeftElement>
          )}
          <DatePicker
            name={name}
            value={value}
            onChange={handleChange}
            dayPlaceholder="DD"
            monthPlaceholder="MM"
            yearPlaceholder="YYYY"
            {...rest}
          />
          {endIcon && <InputRightElement>{endIcon}</InputRightElement>}
        </InputGroup>
        {error && (
          <FormErrorMessage mt="1.5" color="error.600" fontSize="sm">
            {error}
          </FormErrorMessage>
        )}
      </FormControl>
    </DateWrapper>
  );
};

CustomInput.TextArea = ChkTextarea;
CustomInput.Password = ChkPasswordInput;
CustomInput.Select = ChkSelect;
CustomInput.Date = ChkDate;

const DateWrapper = styled.span<InputBaseProps>`
  width: 100%;
  .react-calendar {
    width: 350px;
    max-width: 100%;
    border: 1px solid #a0a096;
    line-height: 1.125em;
  }
  .react-calendar--doubleView {
    width: 700px;
  }
  .react-calendar--doubleView .react-calendar__viewContainer {
    display: flex;
    margin: -0.5em;
  }
  .react-calendar--doubleView .react-calendar__viewContainer > * {
    width: 50%;
    margin: 0.5em;
  }
  .react-calendar,
  .react-calendar *,
  .react-calendar *:before,
  .react-calendar *:after {
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  .react-calendar button {
    margin: 0;
    border: 0;
    outline: none;
  }
  .react-calendar button:enabled:hover {
    cursor: pointer;
  }
  .react-calendar__navigation {
    display: flex;
    height: 44px;
  }
  .react-calendar__navigation button {
    min-width: 44px;
    background: none;
  }
  .react-calendar__navigation button:disabled {
    background-color: #f0f0f0;
  }
  .react-calendar__navigation button:enabled:hover,
  .react-calendar__navigation button:enabled:focus {
    background-color: #e6e6e6;
  }
  .react-calendar__month-view__weekdays {
    text-align: center;

    font-size: 0.75em;
  }
  .react-calendar__month-view__weekdays__weekday {
    padding: 0.5em;
    abbr {
      text-decoration: none;
    }
  }
  .react-calendar__month-view__weekNumbers .react-calendar__tile {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.75em;
    font-weight: bold;
  }
  .react-calendar__month-view__days__day--weekend {
    color: #d10000;
  }
  .react-calendar__month-view__days__day--neighboringMonth {
    color: #757575;
  }
  .react-calendar__year-view .react-calendar__tile,
  .react-calendar__decade-view .react-calendar__tile,
  .react-calendar__century-view .react-calendar__tile {
    /* padding: 2em 0.5em; */
  }
  .react-calendar__tile {
    max-width: 100%;
    background: none;
    text-align: center;
    line-height: 16px;
  }
  .react-calendar__tile:disabled {
    background-color: #f0f0f0;
    color: #e1e4ea;
  }
  .react-calendar__tile:enabled:hover,
  .react-calendar__tile:enabled:focus {
    background-color: #f9fafb;
  }
  /* .react-calendar__tile--now {
    background: #ffff76;
  } */
  .react-calendar__tile--now:enabled:hover,
  .react-calendar__tile--now:enabled:focus {
    background: #9cb2e2;
  }
  .react-calendar__tile--hasActive {
    background: #9cb2e2;
  }
  .react-calendar__tile--hasActive:enabled:hover,
  .react-calendar__tile--hasActive:enabled:focus {
    background: #9cb2e2;
  }
  .react-calendar__tile--active {
    color: white;
  }
  .react-calendar__tile--active:enabled:hover,
  .react-calendar__tile--active:enabled:focus {
    background: #f9fafb;
  }
  .react-calendar--selectRange .react-calendar__tile--hover {
    background-color: #f9fafb;
  }

  .react-date-picker {
    display: inline-flex;
    position: relative;
    width: 100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    * {
      -moz-box-sizing: border-box;
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      &:before {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
      &:after {
        -moz-box-sizing: border-box;
        -webkit-box-sizing: border-box;
        box-sizing: border-box;
      }
    }
  }
  .react-date-picker--disabled {
    background-color: #f0f0f0;
    color: #6d6d6d;
    border-radius: 2rem;
  }
  .react-date-picker__wrapper {
    display: flex;
    flex-grow: 1;
    flex-shrink: 0;
    /* border: 1px solid var(--chakra-colors-gray-200); */
    /* height: 40px; */
    width: 100%;
    /* padding: 12px 14px; */
    height: 5.6rem;
    border-radius: 2rem;
    font-size: 1.4rem;
    border: 1px solid #99a1aa;
    background: #15181d;
    padding: 0 1rem;
    color: #99a1aa;
    ${({ error }) =>
      error &&
      css`
        border: 1px solid #b42318;
      `};
  }
  .react-date-picker__inputGroup {
    min-width: calc((4px * 3) + 0.54em * 8 + 0.217em * 2);
    flex-grow: 1;
    /* padding: 0 2px; */
    box-sizing: content-box;
  }
  .react-date-picker__inputGroup__divider {
    /* padding: 1px 0; */
    white-space: pre;
  }
  .react-date-picker__inputGroup__input {
    /* min-width: 0.54em; */
    height: 100%;
    position: relative;
    /* padding: 0 1px; */
    border: 0;
    background: none;
    outline: none;
    font: inherit;
    box-sizing: content-box;
    -moz-appearance: textfield;
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    &:invalid {
      background: rgba(255, 0, 0, 0.1);
    }
  }
  .react-date-picker__inputGroup__input--hasLeadingZero {
    margin-left: -0.54em;
    padding-left: calc(1px + 0.54em);
  }
  .react-date-picker__button {
    border: 0;
    background: transparent;
    padding: 4px 0px 4px 5px;
    &:enabled {
      cursor: pointer;
      &:hover {
        .react-date-picker__button__icon {
          stroke: #f9fafb;
        }
      }
      &:focus {
        .react-date-picker__button__icon {
          stroke: #f9fafb;
        }
      }
    }
    &:disabled {
      .react-date-picker__button__icon {
        stroke: #6d6d6d;
      }
    }

    path {
      fill: #99a1aa;
    }

    svg {
      height: 1.4rem;
      width: 1.4rem;
    }
  }

  /* CUSTOMISATIONS */

  .react-date-picker__calendar {
    width: 300px;
    max-width: 100vw;
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    filter: drop-shadow(0px 2px 23px rgba(0, 0, 0, 0.15));

    .react-calendar {
      border-width: thin;
      border: none;
      background: white;

      &__navigation {
        padding: 10px;
        color: black;
        height: 47px;
        border-bottom: 1px solid #f9fafb;
        /* margin-bottom: 10px; */

        button {
          color: #4f555f;
          min-width: 30px;
          font-size: 14px;
          font-weight: 600;

          &:active,
          &:focus,
          &:hover {
            background-color: #f7f7f7;
          }

          &:disabled {
            background-color: #f7f7f7;
          }
        }
      }
      &__viewContainer {
        padding: 5px 10px;
        border-radius: 4px;
        background-color: white;
      }
    }

    .react-calendar__tile {
      font-family: inherit;
      width: 40px;
      height: 40px;
      font-weight: medium;
      background: transparent;
      border: none;
      outline: none;
      padding: 10px;
      border-radius: 50%;
      /* color: ${({ theme }) => theme.black}; */

      &--active {
        background: #fac394;
      }
      &--now {
        background: #9cb2e2;
        color: white;
      }
    }

    .react-calendar__year-view {
      .react-calendar__tile {
        border-radius: 0px;
      }
    }
    .react-calendar__decade-view {
      .react-calendar__tile {
        border-radius: 0px;
      }
    }
    .react-calendar__century-view {
      .react-calendar__tile {
        border-radius: 0px;
      }
    }
  }
  .react-date-picker__calendar--closed {
    display: none;
  }
`;
