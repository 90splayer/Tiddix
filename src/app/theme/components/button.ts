export const buttonStyles = {
  // white bg - whitebg (use to be default)
  // primary - transaparent bg - transparent-bg (now default)
  // primary - "gift creatives..the one for social login will be custom" - blackbg3 (formerly secondary)

  // multicolor
  // borderless - the one without background and border
  components: {
    Button: {
      baseStyle: {
        borderRadius: '100px',
        bg: 'white',
        background: 'transparent',
        color: 'white',
        border: '2px solid',
        borderColor: 'blackShade.4',
        outline: 'none',
        boxSizing: 'border-box',
        fontWeight: '700',
        fontFamily: `'Product Sans', sans-serif`,
        _hover: {
          opacity: '0.8',
          _after: {},

          _disabled: {
            background: 'blackShade.4',
            color: 'blackShade.1',
            opacity: 1,
          },
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
        whitebg: {
          border: '1px solid',
          borderColor: 'transparent',
          color: 'blackShade.1',
          background: 'white',
          // background: 'transparent',
          // color: 'white',
          // border: '2px solid',
          // borderColor: 'blackShade.4',

          // _hover: {
          //   _disabled: {},
          // },
          // _disabled: {},
          // _active: {},
          // _focus: {},
        },
        primary: {
          backgroundColor: 'blackShade.3',
          border: '1px solid',
          borderColor: 'transparent',
          color: 'white',
        },
        secondary: {
          backgroundColor: 'blackShade.2',
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

      // height set for md. base and sm assumed till mobile is ready.
      sizes: {
        lg: {
          minW: '10',
          fontSize: { base: '1.4rem', sm: '1.8rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '3.5rem', sm: '5.4rem', md: '6.4rem' },
          p: { base: '12px 24px', sm: '13px 24px', md: '2.0rem 3.0rem' },
        },
        md: {
          minW: '8',
          fontSize: { base: '1.4rem', sm: '1.8rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '2.5rem', sm: '4.6rem', md: '6.0rem' },
          p: { base: '8px 16px', sm: '10px 20px', md: '2.0rem 3.0rem' },
        },
        sm: {
          minW: '6',
          fontSize: { base: '1.4rem', sm: '1.8rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '38px', sm: '39px', md: '5.0rem' },
          p: { base: '6px 12px', sm: '8px 16px', md: '1.3rem 2.0rem' },
        },
      },
    },
  },
};
