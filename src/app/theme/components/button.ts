export const buttonStyles = {
  // default - white bg
  // primary - transaparent bg
  // secondary - "gift creatives..the one for social login will be custom"
  // multicolor
  // borderless - the one without background and border
  components: {
    Button: {
      baseStyle: {
        borderRadius: '100px',
        border: '1px solid',
        borderColor: 'transparent',
        bg: 'white',
        background: 'white',
        outline: 'none',
        boxSizing: 'border-box',
        color: 'blackShade.1',
        fontWeight: '700',
        fontFamily: `'Product Sans', sans-serif`,
        _hover: {
          opacity: '0.8',
          _after: {},

          // _disabled: {},
        },
        // _focus: {},
        // _active: {},
        _disabled: {
          background: 'blackShade.4',
          color: 'blackShade.1',
          opacity: 1,
        },
      },

      variants: {
        primary: {
          background: 'transparent',
          color: 'white',
          border: '2px solid',
          borderColor: 'blackShade.4',

          // _hover: {
          //   _disabled: {},
          // },
          // _disabled: {},
          // _active: {},
          // _focus: {},
        },
        secondary: {
          backgroundColor: 'blackShade.3',
          border: '1px solid',
          borderColor: 'transparent',
          color: 'white',
        },
        multicolor: {
          background: 'gradientStyle.1',
          border: '1px solid',
          borderColor: 'transparent',
          color: 'blackShade.1',
          transition: '0.5 ease-in-out',
          _hover: {
            cursor: 'pointer',
            boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
            transform: 'scale(1.03)',
          },
        },
        multiradial: {
          background: 'gradientStyle.2',
          border: '1px solid',
          borderColor: 'transparent',
          color: 'white',
          _hover: {
            cursor: 'pointer',
            boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
            transform: 'scale(1.03)',
          },
        },
        borderless: {
          backgroundColor: 'transparent',
          border: '1px solid',
          borderColor: 'transparent',
          color: 'blackShade.4',
          fontWeight: '400',
        },
        error: {
          backgroundColor: 'red.600',
          border: '1px solid',
          borderColor: 'transparent',
          color: '#fff',
          fontWeight: '400',
        },
      },

      sizes: {
        xl: {
          minW: '12',
          fontSize: '1.6rem',
          height: { base: '2rem', sm: '54px', md: '56px', lg: '59px' },
          p: { base: '14px 24px', sm: '15px 24px', md: '16px 24px' },
        },
        lg: {
          minW: '10',
          fontSize: '1.6rem',
          height: { base: '2rem', sm: '54px', md: '56px', lg: '59px' },

          p: { base: '12px 24px', sm: '13px 24px', md: '14px 24px' },
        },
        md: {
          minW: '8',
          fontSize: { base: 'sm', sm: '1.6rem' },
          height: { base: '40px', sm: '46px', md: '48px' },

          p: { base: '8px 16px', sm: '10px 20px', md: '20px 30px' },
        },
        sm: {
          minW: '6',
          fontSize: 'sm',
          height: { base: '38px', sm: '39px', md: '40px' },
          p: { base: '6px 12px', sm: '8px 16px', md: '8px 16px' },
        },
        xs: {
          minW: '6',
          fontSize: 'sm',
          height: { base: '38px', sm: '39px', md: '40px' },
          p: { base: '6px 12px', sm: '8px 16px', md: '8px 16px' },
        },
      },
    },
  },
};
