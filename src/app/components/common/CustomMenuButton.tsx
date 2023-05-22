import {
  Menu,
  MenuButton,
  MenuButtonProps,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import React from 'react';

type DropdownOption = {
  label: string | React.ReactElement;
  value: string;
  icon?: React.ReactElement;
  onSelect: () => void;
};

type DropdownProps<T extends MenuButtonProps> = {
  options: DropdownOption[];
  title?: string | React.ReactNode;
  menuButtonAs?: React.ElementType<T>;
  menuButtonProps?: T;
};

const CustomMenuButton = <T extends MenuButtonProps>({
  options,
  menuButtonAs,
  menuButtonProps,
  title,
}: DropdownProps<T>) => {
  return (
    <Menu isLazy placement="bottom-end">
      <MenuButton as={menuButtonAs} {...menuButtonProps}>
        {title}
      </MenuButton>
      <MenuList
        zIndex={3}
        border="1px solid blackShade.3"
        overflow="hidden"
        boxShadow="base"
        padding="0px"
        minWidth="140px"
        borderRadius="2rem"
      >
        {/* MenuItems are not rendered unless Menu is open */}
        {options.map(({ label, icon, value, onSelect }) => (
          <MenuItem
            key={value}
            gap="1rem"
            padding="2rem"
            bg="blackShade.2"
            _hover={{
              bg: 'blackShade.1',
            }}
            // _active={{
            //   bg: 'blackShade.2',
            //   borderColor: 'blackShade.3',
            // }}
            sx={{ '.chakra-menu__icon-wrapper': { margin: '0px' } }}
            icon={icon}
            onClick={onSelect}
            value={value}
            fontSize={{ base: '1.0rem', sm: '1.4rem', md: '1.6rem' }}
            lineHeight={{ base: '1.4rem', sm: '1.6rem', md: '1.9rem' }}
            fontWeight="700"
            color="white"
            minW={{ base: '24.6rem', md: '24.6rem' }}
          >
            {label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default CustomMenuButton;
