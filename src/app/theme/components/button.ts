export const buttonStyles = {
  // multicolor will be a custom button component
  // default - white bg
  // primary - transaparent bg
  // secondary - "gift creatives..the one for social login will be custom"
  // borderless - the one without background and border
  components: {
    Button: {
      baseStyle: {
        borderRadius: '100px',
        border: '1px solid',
        borderColor: 'transparent',
        bg: 'green',
        background: 'green',
        outline: 'none',
        boxSizing: 'border-box',
        color: 'blackShade.1',
        fontWeight: '700',
        fontFamily: `'Product Sans', sans-serif`,

        _hover: {
          _after: {},
        },
        _focus: {},
        _active: {},
        _disabled: {},
      },

      variants: {
        secondary: {
          bg: 'white',
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          color: 'black',
          _hover: {
            color: 'black',
            backgroundColor: 'gray.50',
            _disabled: {
              backgroundColor: 'white',
              color: 'gray.400',
              border: '1px solid',
              borderColor: 'gray.200',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _disabled: {
            backgroundColor: 'white',
            color: 'gray.400',
            cursor: 'not-allowed',
            opacity: 1,
          },
          _active: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
          _focus: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
        },
        tertiary: {
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'white',
          color: 'black',
          _hover: {
            color: 'black',
            backgroundColor: 'gray.50',
            _disabled: {
              backgroundColor: 'gray.100',
              color: 'gray.400',
              border: '1px solid',
              borderColor: 'gray.200',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _disabled: {
            backgroundColor: 'gray.100',
            color: 'gray.400',
            cursor: 'not-allowed',
            opacity: 1,
          },
          _active: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
          _focus: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
        },
        error: {
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          color: 'error.600',
          _hover: {
            color: 'error.600',
            backgroundColor: 'gray.50',
            _disabled: {
              backgroundColor: 'white',
              color: 'gray.400',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _disabled: {
            backgroundColor: 'white',
            color: 'gray.400',
            cursor: 'not-allowed',
            opacity: 1,
          },
          _active: {
            color: 'error.600',
            backgroundColor: 'gray.50',
          },
          _focus: {
            color: 'error.600',
            backgroundColor: 'gray.50',
          },
        },
        baseIcon: {
          borderRadius: 'full',
          border: '1px solid',
          borderColor: 'transparent',
          bg: 'black',
          backgroundColor: 'black',
          outline: 'none',
          // boxShadow: 'none',
          boxSizing: 'border-box',
          padding: '10px',

          color: 'white',
          fontWeight: 'medium',
          fontFamily: 'Inter',
          _hover: {
            color: 'gray.300',
            bg: 'black',
            backgroundColor: 'black',
            border: '1px solid',
            borderColor: 'transparent',
            _disabled: {
              bg: 'gray.400',
              backgroundColor: 'gray.400',
              color: 'white',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _focus: {
            color: 'gray.300',
            bg: 'black',
            backgroundColor: 'black',
            // boxShadow: 'none',
            border: '1px solid',
            borderColor: 'transparent',
          },
          _active: {
            color: 'gray.300',
            // boxShadow: 'none',
            bg: 'black',
            backgroundColor: 'black',
            outline: 'none',
            border: '1px solid',
            borderColor: 'transparent',
          },
          _disabled: {
            bg: 'gray.400',
            backgroundColor: 'gray.400',
            color: 'white',
            cursor: 'not-allowed',
            opacity: 1,
          },
        },
        secondaryIcon: {
          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'gray.200',
          color: 'black',
          borderRadius: 'full',
          padding: '10px',
          _hover: {
            color: 'black',
            backgroundColor: 'gray.50',
            _disabled: {
              backgroundColor: 'white',
              color: 'gray.400',
              border: '1px solid',
              borderColor: 'gray.200',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _disabled: {
            backgroundColor: 'white',
            color: 'gray.400',
            cursor: 'not-allowed',
            opacity: 1,
          },
          _active: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
          _focus: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
        },
        tertiaryIcon: {
          borderRadius: 'full',

          backgroundColor: 'white',
          border: '1px solid',
          borderColor: 'white',
          color: 'black',
          padding: '10px',
          _hover: {
            color: 'black',
            backgroundColor: 'gray.50',
            _disabled: {
              backgroundColor: 'gray.100',
              color: 'gray.400',
              border: '1px solid',
              borderColor: 'gray.200',
              cursor: 'not-allowed',
              opacity: 1,
            },
          },
          _disabled: {
            backgroundColor: 'gray.100',
            color: 'gray.400',
            cursor: 'not-allowed',
            opacity: 1,
          },
          _active: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
          _focus: {
            color: 'black',
            backgroundColor: 'gray.50',
          },
        },
      },

      sizes: {
        xl: {
          minW: '12',
          fontSize: 'md',
          height: { base: '52px', sm: '54px', md: '56px' },
          p: { base: '14px 24px', sm: '15px 24px', md: '16px 24px' },
        },
        lg: {
          minW: '10',
          fontSize: 'md',
          height: { base: '48px', sm: '50px', md: '52px' },

          p: { base: '12px 24px', sm: '13px 24px', md: '14px 24px' },
        },
        md: {
          minW: '8',
          fontSize: { base: 'sm', sm: 'md' },
          height: { base: '40px', sm: '46px', md: '48px' },

          p: { base: '8px 16px', sm: '10px 20px', md: '12px 24px' },
        },
        sm: {
          minW: '6',
          fontSize: 'sm',
          height: { base: '38px', sm: '39px', md: '40px' },
          p: { base: '6px 12px', sm: '8px 16px', md: '8px 16px' },
        },
      },
    },
  },
};
