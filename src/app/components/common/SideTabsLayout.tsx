import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ChevronDownIcon } from 'app/assets/icons';
import styled from 'styled-components';

interface MenuInterface {
  components: { title: string; component: React.ReactElement }[];
  sideBarExtraContent?: React.ReactElement;
  startIndex?: number | string | null;
  useLayout2?: boolean;
}

const pathFormat = (str: string) => str.toLowerCase().split(' ').join('-');

export const SideTabsLayout: React.FC<MenuInterface> = ({
  sideBarExtraContent,
  components,
  startIndex,
  useLayout2,
}) => {
  const [state, setState] = useState<any>({ viewing: 0, sidebarShow: false });
  const [sidebarShow, setSidebarShow] = useState(false);

  const showFormOn = (e: number) => {
    // const { id } = e.target as any;
    // if (e) {
    setState({
      ...state,
      viewing: +e,
    });
    // }
    toggleSideBar();
  };

  const toggleSideBar = () => setSidebarShow(!sidebarShow);

  useEffect(() => {
    if (components.length && startIndex) {
      if (typeof startIndex === 'number') {
        setState({
          ...state,
          viewing:
            Math.abs(startIndex) > components.length
              ? components.length - 1
              : Math.abs(startIndex) - 1,
        });
      } else {
        const i = components.findIndex(
          (el) => pathFormat(el.title) === pathFormat(startIndex),
        );
        setState({
          ...state,
          viewing: i > -1 ? i : 0,
        });
      }
    } else setState({ ...state, viewing: 0 });
  }, []);

  return (
    <Styling>
      <Box minHeight="300px" display="flex">
        <Box
          minWidth={{ base: '20rem', md: useLayout2 ? '29rem' : '20rem' }}
          display={{ base: 'none', sm: 'flex' }}
          flexDirection="column"
          gap={100}
          py={10}
          paddingRight={{ base: 4, lg: 10 }}
          borderRight={useLayout2 ? '1px solid #485155' : 'none'}
        >
          <VStack
            spacing={useLayout2 ? '4rem' : '2rem'}
            alignItems="flex-start"
            mb={10}
          >
            {components.map(({ title }, i) => (
              <Text
                onClick={() => showFormOn(i)}
                cursor="pointer"
                key={title}
                data-title={title}
                size="body2"
                width="full"
                display="inline-block"
                // padding="1rem 0"
                bgGradient={
                  i === state.viewing
                    ? 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)'
                    : useLayout2
                    ? 'linear-gradient(235.92deg, #fff -14.27%, #fff 50.09%, #fff 114.81%)'
                    : 'linear-gradient(235.92deg, #99A1AA -14.27%, #99A1AA 50.09%, #99A1AA 114.81%)'
                }
                bgClip="text"
                fontWeight={i === state.viewing ? 'medium' : 'normal'}
              >
                {title}
              </Text>
            ))}
          </VStack>
          <Box>{sideBarExtraContent && sideBarExtraContent}</Box>
        </Box>
        <Box
          flex={1}
          py={{ base: 6, sm: 10 }}
          px={{ base: 2, sm: 4, lg: useLayout2 ? '3.6rem' : 10 }}
          ml={{ base: 0, md: useLayout2 ? 0 : '11rem' }}
          overflow="auto"
        >
          <Box mb={6} display={{ base: 'block', sm: 'none' }}>
            <Menu matchWidth>
              <MenuButton
                as={Button}
                fontWeight="normal"
                variant="secondary"
                size="lg"
                w="100%"
                textAlign="left"
                rightIcon={
                  <Box sx={{ path: { fill: 'gray.400' } }}>
                    <ChevronDownIcon />
                  </Box>
                }
              >
                {components[state.viewing].title}
              </MenuButton>
              <MenuList
                width="full"
                borderRadius="8px"
                padding="10px"
                border="1px"
                borderColor="gray.100"
                bg="gray.25"
              >
                {components.map(({ title }, i) => (
                  <MenuItem
                    key={title}
                    border="1px"
                    height="50px"
                    fontSize="md"
                    onClick={() => showFormOn(i)}
                    bg="white"
                    borderColor="gray.100"
                    _focus={{
                      bg: 'gray.25',
                    }}
                    _hover={{
                      bg: 'gray.25',
                    }}
                    _first={{ borderRadius: '8px 8px 0px 0px' }}
                    _last={{ borderRadius: '0px 0px 8px 8px' }}
                  >
                    {title}
                  </MenuItem>
                ))}
                {sideBarExtraContent && (
                  <Box mt="36px">{sideBarExtraContent}</Box>
                )}
              </MenuList>
            </Menu>
          </Box>
          {components[state.viewing]
            ? components[state.viewing].component
            : // <EmptyState />
              'No info to display'}
        </Box>
      </Box>
    </Styling>
  );
};

const Styling = styled.div``;
