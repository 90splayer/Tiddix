import styled, { css, keyframes } from 'styled-components';
import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import React from 'react';
import {
  RightCaretIcon,
  RadioCheckedIcon,
  RadioUncheckedIcon,
} from 'app/assets/icons';
// import { DPIconArrowDown } from 'app/assets/icons';

const slideUpAndFade = keyframes`
  0% {
    opacity: 0;
    trasform: translateY(2px);
  }
  100% {
    opacity: 1;
    trasform: translateY(0);
  }
`;
const slideDownAndFade = keyframes`
  0% {
    opacity: 0;
    trasform: translateY(-2px);
  }
  100% {
    opacity: 1;
    trasform: translateY(0);
  }
`;
const slideRightAndFade = keyframes`
  0% {
    opacity: 0;
    trasform: translateX(-2px);
  }
  100% {
    opacity: 1;
    trasform: translateX(0);
  }
`;
const slideLeftAndFade = keyframes`
  0% {
    opacity: 0;
    trasform: translateX(2px);
  }
  100% {
    opacity: 1;
    trasform: translateX(0);
  }
`;

const StyledContent = styled(DropdownMenuPrimitive.Content)`
  max-width: 340px;
  min-width: 140px;
  background-color: var(--dot-colors-white);
  border-radius: var(--dot-space-2);
  ${(props) =>
    props.theme.mode === 'dark' &&
    css`
      border: 1px solid ${({ theme }) => theme.dpBorderColor};
    `}

  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme.mode === 'default'
      ? 'rgb(101 119 134 / 20%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px'
      : 'rgb(4 4 4 / 45%) 0px 0px 15px, rgb(4 4 4 / 45%) 0px 0px 3px 1px'};
  position: relative;
  z-index: 1000;

  @media (prefers-reduced-motion: no-preference) {
    animation-duration: 400ms;
    animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
    will-change: transform, opacity;
    &[data-state="open"] {
      &[data-side="top"] { animation-name: ${slideDownAndFade} }
      &[data-side="right"] { animation-name: ${slideLeftAndFade} }
      &[data-side="bottom"] { animation-name: ${slideUpAndFade} }
      &[data-side="left"] { animation-name: ${slideRightAndFade} }
    }
  },
`;

function Content({ children, ...props }: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledContent align="end" {...props}>
        {children}
      </StyledContent>
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledSubContent = styled(DropdownMenuPrimitive.SubContent)`
  max-width: 340px;
  min-width: 140px;
  background-color: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.textLightGrey};
  border-radius: 4px;
  overflow: hidden;
  box-shadow: ${({ theme }) =>
    theme.mode === 'default'
      ? 'rgb(101 119 134 / 15%) 0px 0px 15px, rgb(101 119 134 / 15%) 0px 0px 3px 1px'
      : 'rgb(4 4 4 / 45%) 0px 0px 15px, rgb(4 4 4 / 45%) 0px 0px 3px 1px'};
`;

function SubContent(props: any) {
  return (
    <DropdownMenuPrimitive.Portal>
      <StyledSubContent {...props} />
    </DropdownMenuPrimitive.Portal>
  );
}

const StyledItem = styled(DropdownMenuPrimitive.Item)`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--dot-space-2);
  /* height: 20px; */
  padding: 12px 13px;
  border-bottom: 1px solid var(--dot-colors-gray-25);

  position: relative;
  user-select: none;

  &[data-disabled] {
    background-color: ${({ theme }) => theme.lighterGrey}4a;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: var(--dot-colors-gray-25);
  }
`;
const StyledRadio = styled(DropdownMenuPrimitive.RadioItem)`
  all: unset;
  display: flex;
  align-items: center;
  gap: var(--dot-space-2);
  padding: 12px 13px;
  border-bottom: 1px solid var(--dot-colors-gray-25);

  position: relative;
  user-select: none;

  &[data-disabled] {
    background-color: ${({ theme }) => theme.lighterGrey}4a;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: var(--dot-colors-gray-25);
  }
`;

const StyledSubTrigger = styled(DropdownMenuPrimitive.SubTrigger)`
  all: unset;
  display: flex;
  align-items: center;
  padding: 12px 13px;

  position: relative;
  user-select: none;

  &[data-disabled] {
    background-color: ${({ theme }) => theme.lighterGrey}4a;
    pointer-events: none;
  }

  &[data-highlighted] {
    background-color: var(--dot-colors-gray-50);
  }

  &[data-state='open'] {
    background-color: var(--dot-colors-gray-50);
  }
`;

const DropdownMenu = styled(DropdownMenuPrimitive.Root)`
  /* font-family: 'Galano'; */
`;
const DropdownMenuTrigger = styled(DropdownMenuPrimitive.Trigger)`
  &[data-state='open'] {
    svg.dropdown_toggle {
      transform: rotateX(180deg);
    }
  }
`;

const DropdownMenuContent = Content;
const DropdownMenuItem = StyledItem;
const DropdownMenuSub = DropdownMenuPrimitive.Sub;
const DropdownMenuSubTrigger = StyledSubTrigger;
const DropdownMenuSubContent = SubContent;

const RightSlot = styled.div`
  margin-left: auto;
  padding-left: 20px;
  color: grey;

  [data-disabled] & {
    color: grey;
  }
`;

type PartialDropdownClick = {
  target: { label: string; value: any; state?: any; color?: string };
};

type PartialDropdownOption = {
  label: string;
  value: any;
  icon?: React.ReactElement;
  onSelect?: () => void;
  isDisabled?: boolean | undefined;
  state?: any;
  color?: string;
};

type PartialDropdownType = {
  title: string | React.ReactElement;
  options?: PartialDropdownOption[];
  onClick?: (event: PartialDropdownClick) => void;
  offset?: number;
};

export const Dropdown: React.FC<PartialDropdownType> = ({
  title,
  options,
  offset,
  onClick,
}) => {
  const renderMenuItem = (option: PartialDropdownOption) => {
    if (!Array.isArray(option.value)) {
      const { value, label, isDisabled, state, icon, onSelect } = option;
      return (
        <DropdownMenuItem
          onClick={(e) => {
            if (!(e.target instanceof HTMLDivElement)) {
              return;
            }
            const { isdisabled, value, label, state } = e.target.dataset;
            if (options && label && (!isdisabled || isdisabled === 'false')) {
              if (onSelect) {
                onSelect();
              } else {
                if (onClick) onClick({ target: { label, value, state } });
              }
            }
          }}
          key={value}
          data-label={label}
          data-value={value}
          data-state={state}
          data-isdisabled={isDisabled}
          disabled={isDisabled}
        >
          {icon && icon}
          {label}
        </DropdownMenuItem>
      );
    }
    return (
      <DropdownMenuSub key={option.label}>
        <DropdownMenuSubTrigger disabled={option.isDisabled}>
          {option.label}
          <RightSlot>
            <RightCaretIcon />
          </RightSlot>
        </DropdownMenuSubTrigger>
        <DropdownMenuSubContent sideOffset={-3} alignOffset={0}>
          {option.value.map((subOption: PartialDropdownOption) =>
            renderMenuItem(subOption),
          )}
        </DropdownMenuSubContent>
      </DropdownMenuSub>
    );
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {title}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={offset ?? 5}>
        {options?.map((option) => renderMenuItem(option))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type RadioDropdownType = {
  title: string | React.ReactElement;
  options: PartialDropdownOption[];
  onClick: (value: PartialDropdownOption) => void;
  offset?: number;
  value: string;
};

export const DropdownRadio: React.FC<RadioDropdownType> = ({
  title,
  offset,
  options,
  onClick,
  value,
}) => {
  const renderDropdownMenuItem = (option: PartialDropdownOption) => {
    if (!Array.isArray(option.value)) {
      const { value: optionValue, label, isDisabled } = option;
      return (
        <StyledRadio
          key={optionValue}
          value={optionValue}
          data-label={label}
          data-value={optionValue}
          data-isdisabled={isDisabled}
          disabled={isDisabled}
        >
          {optionValue === value ? (
            <RadioCheckedIcon />
          ) : (
            <RadioUncheckedIcon />
          )}
          {label}
        </StyledRadio>
      );
    }
    return [];
  };

  const handleValueChange = (e: string) => {
    onClick(options.find((option) => option.value === e)!);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            cursor: 'pointer',
          }}
        >
          {title}
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={offset ?? 5}>
        <DropdownMenuPrimitive.RadioGroup
          value={value}
          onValueChange={handleValueChange}
        >
          {options.map((option) => renderDropdownMenuItem(option))}
        </DropdownMenuPrimitive.RadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
