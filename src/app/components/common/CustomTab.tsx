import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabListProps,
  Box,
  Flex,
  TypographyProps,
} from '@chakra-ui/react';
import { FC, ReactElement, useState } from 'react';
import styled from 'styled-components';

interface TabProp {
  body: ReactElement | string;
  label: string;
  icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  hide?: boolean;
}

type ChkTabProps = {
  tabs: Array<TabProp>;
  startIndex?: number;
  sideButtons?: React.ReactNode;
  largerHeading?: boolean;
} & TabListProps;

const CustomTab: FC<ChkTabProps> = ({
  tabs,
  startIndex,
  sideButtons,
  largerHeading,
  ...rest
}) => {
  const visibleTabs = tabs.filter((tab) => !tab.hide);
  const [currentIndex, setCurrentIndex] = useState(startIndex);

  const handleTabChange = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <Styling>
      <Tabs onChange={handleTabChange} isLazy index={currentIndex}>
        <Box
          sx={{
            '::-webkit-scrollbar': {
              display: 'none',
              width: '0px',
            },
            msOverflowStyle: 'none',
            scrollbarWidth: 'none',
          }}
          overflowX="auto"
        >
          <TabList
            borderBottom="2px"
            borderBottomColor="blackShade.3"
            marginBottom={6}
            {...rest}
          >
            {visibleTabs.map((tab) => (
              <Tab
                fontWeight={largerHeading ? 'bold' : 'medium'}
                whiteSpace="nowrap"
                fontSize={
                  largerHeading
                    ? { base: '1.6rem', sm: '2.0rem', md: '2.8rem' }
                    : { base: '1.2rem', sm: '1.6rem', md: '2.0rem' }
                }
                lineHeight={
                  largerHeading
                    ? { base: '2.5rem', sm: '3.35rem', md: '3.4rem' }
                    : { base: '1.5rem', sm: '1.9rem', md: '2.4rem' }
                }
                p={{ base: '1rem 2rem', md: '1rem 4.0rem' }}
                color="blackShade.4"
                borderBottom="2px"
                borderBottomColor="blackShade.3"
                gap="1rem"
                _selected={{
                  color: 'white',
                  borderImage:
                    'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) 1',
                  borderBottom: '2px solid transparent',
                }}
                _focus={{ color: 'white', boxShadow: 'none' }}
                _hover={{ color: 'white' }}
                key={tab.label}
              >
                {tab.icon && (
                  <tab.icon
                    width="20px"
                    height="20px"
                    className="paletteicon"
                  />
                )}
                {tab.label}
              </Tab>
            ))}

            {sideButtons && (
              <Flex
                borderBottom="2px solid #485155"
                marginBottom="-.2rem"
                ml="auto"
                gap=".5rem"
                paddingBottom="1.2rem"
                paddingLeft={{ base: '2rem', md: '4.0rem' }}
              >
                {sideButtons}
              </Flex>
            )}
          </TabList>
        </Box>
        <TabPanels>
          {visibleTabs.map((tab) => (
            <TabPanel padding="0px" key={tab.label}>
              {tab.body}
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Styling>
  );
};

const Styling = styled.div`
  .paletteicon path {
    fill: currentColor;
  }
`;

export default CustomTab;
