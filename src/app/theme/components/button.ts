import { UnorderedList } from '@chakra-ui/react';

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
        bg: 'transparent',
        background: 'transparent',
        color: 'white',
        border: '2px solid',
        borderColor: 'blackShade.4',
        outline: 'none',
        boxSizing: 'border-box',
        fontWeight: '700',
        fontFamily: `'Product Sans', sans-serif`,
        transition: '0.5 ease-in-out',
        _hover: {
          opacity: '0.8',
          cursor: 'pointer',
          // transform: 'scale(1.03)',
          // _after: {},

          _disabled: {
            background: 'blackShade.4',
            color: 'blackShade.1',
            opacity: 1,
            cursor: 'not-allowed',
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
        default: {
          border: '2px solid',
          borderColor: 'blackShade.4',
          color: 'white',
          background: 'transparent',

          // color: 'white',
          // border: '2px solid',
          // borderColor: 'blackShade.4',

          _hover: {
            opacity: '0.8',
            cursor: 'pointer',
            _disabled: {},
          },
          // _disabled: {},
          // _active: {},
          // _focus: {},
        },
        vanilla: {
          border: 'none',
          // borderColor: 'blackShade.4',
          // color: 'white',
          background: 'transparent',
          padding: '0',
          _hover: {
            opacity: '0.8',
            cursor: 'pointer',
            _disabled: {},
          },
        },
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
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          color: 'blackShade.1',
          transition: '0.5 ease-in-out',
          _hover: {
            cursor: 'pointer',
            boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
            // transform: 'scale(1.03)',
          },
        },
        multiradial: {
          background: 'gradientStyle.2',
          border: 'none',
          borderColor: 'transparent',
          outline: 'none',
          color: 'white',
          _hover: {
            cursor: 'pointer',
            boxShadow: '0px 92px 40px -59px rgba(108, 76, 223, 0.15)',
            // transform: 'scale(1.03)',
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
          fontSize: { base: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '5.2rem', sm: '5.6rem', md: '6.0rem' },
          p: { base: '2.0rem 3.0rem' },
        },
        md: {
          minW: '8',
          fontSize: { base: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '4.2rem', sm: '4.6rem', md: '6.0rem' },
          p: { base: '2.0rem 2.5rem', md: '2.0rem 3.0rem' },
        },
        sm: {
          minW: '6',
          fontSize: { base: '1.4rem', sm: '1.6rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
          height: { base: '40px', sm: '44px', md: '5.0rem' },
          p: { base: '6px 12px', sm: '8px 16px', md: '1.3rem 2.0rem' },
        },
      },
    },
  },
};
