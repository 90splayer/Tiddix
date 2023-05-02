import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  TabListProps,
  Box,
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
  fullWidth?: boolean;
} & TabListProps;

const CustomTab: FC<ChkTabProps> = ({
  tabs,
  startIndex,
  fullWidth,
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
            gap="1rem"
            borderBottom={fullWidth ? '1px' : '0px'}
            borderBottomColor="gray.50"
            marginBottom={6}
            {...rest}
          >
            {visibleTabs.map((tab) => (
              <Tab
                className="tabItem"
                fontWeight="medium"
                whiteSpace="nowrap"
                fontSize="2.0rem"
                p="1rem 4.0rem"
                color="blackShade.4"
                borderBottom="1px"
                marginBottom="-1px"
                borderBottomColor="transparent"
                gap="1rem"
                _selected={{
                  color: 'white',
                  borderImage:
                    'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%) 1',
                  borderBottom: '2px solid transparent',
                  fill: 'white',
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
