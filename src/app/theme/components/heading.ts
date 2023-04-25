export const headingStyles = {
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Product Sans',
        // letterSpacing: '-0.01em',
        color: 'blackShade.4',
      },
      sizes: {
        lg: {
          fontSize: { base: '1rem', sm: '1.062rem', md: '2.4rem' },
          lineHeight: { base: '1.5rem', sm: '1.625rem', md: '2.8rem' },
        },
        md: {
          fontSize: { base: '0.875rem', sm: '0.938rem', md: '2.0rem' },
          lineHeight: { base: '1.25rem', sm: '1.375rem', md: '2.4rem' },
        },
        sm: {
          fontSize: { base: '0.875rem', sm: '0.938rem', md: '1.6rem' },
          lineHeight: { base: '1.25rem', sm: '1.375rem', md: '2.2rem' },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Product Sans',
        letterSpacing: '-0.02em',
        fontSize: '3.2rem',
        fontWeight: '700',
        color: 'white',
      },

      sizes: {
        '2xl': {
          fontSize: { base: '3rem', sm: '3.5rem', md: '6.5rem' },
          lineHeight: { base: '4rem', sm: '4.75rem', md: '7.2rem' },
        },
        xl: {
          fontSize: { base: '3rem', sm: '3.5rem', md: '4.8rem' },
          lineHeight: { base: '4rem', sm: '4.75rem', md: '5.4rem' },
        },
        lg: {
          fontSize: { base: '2rem', sm: '2.5rem', md: '3.6rem' },
          lineHeight: { base: '2.5rem', sm: '3.35rem', md: '4.0rem' },
        },
        md: {
          fontSize: { base: '1.5rem', sm: '1.75rem', md: '2.4rem' },
          lineHeight: { base: '2rem', sm: '2.25rem', md: '2.9rem' },
        },
        sm: {
          fontSize: { base: '1.5rem', sm: '1.75rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.25rem', md: '2.4rem' },
        },
        xs: {
          fontSize: { base: '1.5rem', sm: '1.75rem', md: '1.6rem' },
          lineHeight: { base: '2rem', sm: '2.25rem', md: '2.4rem' },
        },
      },
    },
  },
};

// const breakpoints = {
//   sm: '30em', // 480px
//   md: '48em',  // 768px
//   lg: '62em', // 992px
//   xl: '80em',  // 1280px
//   '2xl': '96em', // 1536px
// }
