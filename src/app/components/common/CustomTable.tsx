/* eslint-disable react/no-array-index-key */
import React, { useRef, useState } from 'react';
import {
  Text,
  IconButton,
  Flex,
  Box,
  Center,
  Divider,
  Button,
  Collapse,
} from '@chakra-ui/react';
import {
  TableContainer,
  Td,
  Tr,
  Table,
  Tbody,
  Thead,
  Th,
} from '@chakra-ui/table';
import { NumberInput, NumberInputField } from '@chakra-ui/number-input';
import {
  ChevronDownIcon,
  EmptyTableIcon,
  LeftCaretIcon,
  RightCaretIcon,
} from 'app/assets/icons';
import { thousandsSeparators } from 'app/utils/helpers';
import { DropdownRadio } from './DropDownRadio';
import { TableLoadingSkeleton } from '../TableLoadingSkeleton';

export type EmptyChkTableProps = {
  icon?: React.ReactElement;
  title?: string;
  subtitle?: string;
};

interface TableProps {
  columns: Record<
    string,
    {
      key: string;
      label: React.ReactNode;
      active: boolean;
      mobile?: boolean;
      position?: 'top-left' | 'bottom-left' | 'bottom-right';
    }
  >;
  data: any[];
  paginationMeta?: {
    page: number;
    total: number;
    limit: number;
    totalPages: number;
  };
  handlePagination?: (page: number) => void;
  pageLength?: number;
  setPageLength?: (page: number) => void;
  loading: boolean;
  emptyState?: EmptyChkTableProps;
  variant?: 'regular' | 'small';
}

const requestRadioOptions = [
  { label: '10', value: '10' },
  { label: '25', value: '25' },
  { label: '50', value: '50' },
  { label: '100', value: '100' },
];

export const CustomTable: React.FC<TableProps> = ({
  columns,
  data,
  paginationMeta,
  handlePagination,
  pageLength,
  setPageLength,
  loading,
  emptyState,
  variant = 'regular',
}) => {
  const isTableEmpty = data.length < 1;

  const tableTop = useRef<HTMLDivElement>(null);

  const [currentPage, setCurrentPage] = useState(paginationMeta?.page);
  const [expandedMobileIndex, setExpandedMobileIndex] = useState<number>(-1);

  const calculateData = (paginationDAta: any): (string | number)[] => {
    const { page, limit, total } = paginationDAta || {};
    if (page != null && total != null && limit != null) {
      const k = page * limit;
      return [k + 1, Math.min(k + limit, total), total];
    }
    return ['--', '--', '--'];
  };
  const [start, end, totalData] = calculateData(paginationMeta);

  if (loading) {
    return <TableLoadingSkeleton />;
  }

  if (isTableEmpty) {
    return (
      <EmptyChkTable
        icon={emptyState?.icon}
        title={emptyState?.title}
        subtitle={emptyState?.subtitle}
      />
    );
  }

  const getMobileFieldsInView = () => {
    const fieldsInView: any = {};
    Object.keys(columns)
      .filter((col) => columns[col].active && columns[col].mobile)
      .forEach((col) => {
        if (columns[col].position) {
          fieldsInView[columns[col].position!] = col;
        }
      });

    return fieldsInView;
  };

  return (
    <Box>
      <Box
        display={{
          base:
            Object.keys(getMobileFieldsInView()).length > 0 ? 'block' : 'none',
          sm: 'none',
        }}
      >
        {data.map((item: any, i) => {
          return (
            <Box
              key={`${i}-keys`}
              bg="gray.25"
              borderBottom="1px"
              borderBottomColor="gray.100"
              padding="12px 12px"
            >
              <Box display="flex" flexDirection="column" gap={2}>
                <Flex align="center" justify="space-between">
                  <Text size="sm" color="black">
                    {item[getMobileFieldsInView()['top-left']]}
                  </Text>
                  <Button
                    borderColor="transparent"
                    backgroundColor="gray.100"
                    rightIcon={<ChevronDownIcon />}
                    fontSize="10px"
                    p="8px"
                    borderRadius="4px"
                    height="28px"
                    variant="tertiary"
                    onClick={() =>
                      expandedMobileIndex === i
                        ? setExpandedMobileIndex(-1)
                        : setExpandedMobileIndex(i)
                    }
                  >
                    VIEW MORE
                  </Button>
                </Flex>
                <Flex align="center" justify="space-between">
                  <Text size="xs">
                    {item[getMobileFieldsInView()['bottom-left']]}
                  </Text>
                  <Text size="sm" fontWeight="medium" color="black">
                    {item[getMobileFieldsInView()['bottom-right']]}
                  </Text>
                </Flex>
              </Box>
              <Collapse in={expandedMobileIndex === i} animateOpacity>
                <Box display="flex" flexDirection="column" gap={6} mt={6}>
                  {Object.keys(columns)
                    .filter(
                      (col) =>
                        columns[col].active &&
                        !columns[col].mobile &&
                        col !== 'sn',
                    )
                    .map((col, i) => {
                      if (typeof item[col] === 'object') {
                        const Component = item[col];
                        return (
                          <Box key={`${i}-keys`}>
                            {typeof columns[col].label === 'string' ? (
                              <Text
                                size="caption"
                                fontWeight="medium"
                                color="gray.500"
                                mb={1}
                              >
                                {columns[col].label?.toString().toUpperCase()}
                              </Text>
                            ) : (
                              columns[col].label
                            )}

                            {Component}
                          </Box>
                        );
                      }
                      return (
                        <Box key={`${i}-keys`}>
                          {typeof columns[col].label === 'string' ? (
                            <Text
                              size="caption"
                              fontWeight="medium"
                              color="gray.500"
                              mb={1}
                            >
                              {columns[col].label?.toString().toUpperCase()}
                            </Text>
                          ) : (
                            columns[col].label
                          )}
                          <Text size="sm" fontWeight="medium" color="black">
                            {item[col]}
                          </Text>
                        </Box>
                      );
                    })}
                </Box>
              </Collapse>
            </Box>
          );
        })}
      </Box>
      <TableContainer
        overflow="overlay"
        sx={{
          '::-webkit-scrollbar': {
            width: '2px',
            height: '2px',
          },
          '::-webkit-scrollbar-track': {
            background: 'gray.25',
          },
          '::-webkit-scrollbar-thumb': {
            background: 'gray.300',
          },
        }}
        display={{
          base:
            Object.keys(getMobileFieldsInView()).length > 0 ? 'none' : 'block',
          sm: 'block',
        }}
        ref={tableTop}
      >
        <Table variant="simple">
          <Thead h={{ regular: '56px', small: '42px' }[variant]} bg="gray.25">
            <Tr>
              {Object.keys(columns)
                .filter((col) => columns[col].active)
                .map((key) => (
                  <Th
                    _first={{
                      paddingLeft: { regular: '48px', small: '0px' }[variant],
                    }}
                    _last={{
                      paddingRight: { regular: '48px', small: '0px' }[variant],
                    }}
                    textAlign={key === 'actions' ? 'center' : undefined}
                    borderBottom="0px"
                    padding="0px 20px 0px 0px"
                    key={key}
                  >
                    {typeof columns[key].label === 'object' ? (
                      columns[key].label
                    ) : (
                      <Text
                        fontWeight="medium"
                        color="blackScheme.400"
                        size="caption"
                      >
                        {columns[key].label}
                      </Text>
                    )}
                  </Th>
                ))}
            </Tr>
          </Thead>
          <Tbody>
            {data.map((item: any, i: any) => (
              <Tr
                h={{ regular: '56px', small: '42px' }[variant]}
                key={`${i}key`}
              >
                {Object.keys(columns)
                  .filter((d) => columns[d].active)
                  .map((key, index) => {
                    const keys = index;
                    if (typeof item[key] === 'object') {
                      const Component = item[key];
                      return (
                        <Td
                          _first={{
                            paddingLeft: { regular: '48px', small: '0px' }[
                              variant
                            ],
                          }}
                          _last={{
                            paddingRight: { regular: '48px', small: '0px' }[
                              variant
                            ],
                          }}
                          borderBottomColor="gray.100"
                          padding="0px 20px 0px 0px"
                          textAlign={key === 'actions' ? 'center' : undefined}
                          key={`count-${keys}`}
                        >
                          {Component}
                        </Td>
                      );
                    }
                    return (
                      <Td
                        _first={{
                          paddingLeft: { regular: '48px', small: '0px' }[
                            variant
                          ],
                        }}
                        _last={{
                          paddingRight: { regular: '48px', small: '0px' }[
                            variant
                          ],
                        }}
                        borderBottomColor="gray.100"
                        padding="0px 20px 0px 0px"
                        textAlign={key === 'actions' ? 'center' : undefined}
                        key={`count-${keys}`}
                      >
                        {item[key]}
                      </Td>
                    );
                  })}
              </Tr>
            ))}
          </Tbody>
          {/* )} */}
        </Table>
      </TableContainer>
      {paginationMeta && handlePagination && (
        <Flex my="24px" justifyContent="space-between">
          <Flex align="center" gap={2}>
            <DropdownRadio
              options={requestRadioOptions}
              title={
                <Button
                  rightIcon={<ChevronDownIcon className="dropdown_toggle" />}
                  backgroundColor="gray.25"
                  size="sm"
                  variant="tertiary"
                >
                  Showing {pageLength}
                </Button>
              }
              onClick={(e) => {
                handlePagination(1);
                if (setPageLength) setPageLength(Number(e.value));
              }}
              value={pageLength?.toString() ?? '10'}
            />
            <Text
              display={{ base: 'none', sm: 'block' }}
              size="sm"
              fontWeight="medium"
              color="gray.400"
            >
              {/* <Text size="sm" fontWeight="medium" color="gray.400"> */}
              Results per page
            </Text>
          </Flex>
          <Flex align="center">
            <Box
              sx={{
                '@container (min-width: 400px)': {
                  display: 'none',
                },
              }}
            >
              <Text
                display={{ base: 'none', sm: 'block' }}
                size="sm"
                fontWeight="medium"
              >
                {/* <Text size="sm" fontWeight="medium"> */}
                {`${start} - ${end} of ${thousandsSeparators(totalData)} `}{' '}
              </Text>
            </Box>
            <Center height="20px" ml="20px" mr="5px">
              <Divider orientation="vertical" borderColor="#9DBCDC" />
            </Center>
            <Flex align="center">
              <IconButton
                isDisabled={paginationMeta.page === 0}
                aria-label="previous"
                size="smIcon"
                boxSize="31px"
                variant="tertiaryIcon"
                onClick={() => {
                  const page = currentPage ?? 0;
                  handlePagination(page);
                  setCurrentPage(page - 1);
                  if (tableTop.current) {
                    tableTop.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                icon={<LeftCaretIcon width="10px" />}
              />
              <Text size="sm" color="#777777" fontWeight="medium">
                Page
              </Text>
              <NumberInput
                outline="0px"
                boxShadow="none"
                color="white"
                precision={0}
                value={(currentPage ?? 0) + 1}
                onChange={(e) => setCurrentPage(+e - 1)}
                min={1}
                max={paginationMeta.totalPages}
                onBlur={(e) => handlePagination(Number(e.target.value))}
                onKeyDown={(e) => {
                  if (e.code === 'Enter' && typeof currentPage === 'number') {
                    handlePagination(currentPage + 1);
                  }
                }}
              >
                <NumberInputField
                  outline="0px"
                  boxShadow="none"
                  _focusVisible={{ outline: '0px' }}
                  borderRadius="3px"
                  bg="blackScheme.500"
                  color="white"
                  fontSize="14px"
                  height="31px"
                  padding="0px 5px"
                  textAlign="center"
                  width="42px"
                  margin="0px 7px"
                />
              </NumberInput>
              <Text size="sm" color="#777777" fontWeight="medium">
                of {paginationMeta.totalPages}
              </Text>
              <IconButton
                isDisabled={
                  paginationMeta.page + 1 === paginationMeta.totalPages
                }
                aria-label="next"
                size="smIcon"
                boxSize="31px"
                variant="tertiaryIcon"
                onClick={() => {
                  const page = currentPage ?? 0;
                  handlePagination(page + 2);
                  setCurrentPage(page + 1);
                  if (tableTop.current) {
                    tableTop.current.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                icon={<RightCaretIcon width="10px" />}
              />
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export const EmptyChkTable = ({
  icon,
  title,
  subtitle,
}: EmptyChkTableProps) => {
  return (
    <Center
      display="flex"
      flexDirection="column"
      textAlign="center"
      height="400px"
    >
      <Center
        mb={4}
        boxSize="80px"
        bg="gray.100"
        borderRadius="full"
        sx={{ path: { fill: 'gray.300' } }}
      >
        {icon ?? <EmptyTableIcon width="48px" height="48px" />}
      </Center>
      <Box width="230px">
        <Text mb={1} color="black" size="md" fontWeight="medium">
          {title ?? 'No information available'}
        </Text>
        <Text size="sm">{subtitle}</Text>
      </Box>
    </Center>
  );
};
