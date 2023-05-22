export const headingStyles = {
  components: {
    Text: {
      baseStyle: {
        fontFamily: 'Product Sans',
        color: 'blackShade.4',
        fontSize: '2.0rem',
        lineHeight: '2.4rem',
        fontWeight: '400',
      },
      // font size and line height set for md. base and sm assumed till mobile is ready. Default text is body1
      sizes: {
        body1: {
          fontSize: { base: '1.2rem', sm: '1.6rem', md: '2.0rem' },
          lineHeight: { base: '1.5rem', sm: '1.9rem', md: '2.4rem' },
        },
        body2: {
          fontSize: { base: '1.0rem', sm: '1.4rem', md: '1.6rem' },
          lineHeight: { base: '1.25rem', sm: '1.6rem', md: '1.9rem' },
        },
        body3: {
          fontSize: { base: '1.0rem', sm: '1.3rem', md: '1.5rem' },
          lineHeight: { base: '1.25rem', sm: '1.6rem', md: '1.9rem' },
        },
      },
    },
    Heading: {
      baseStyle: {
        fontFamily: 'Product Sans',
        fontSize: '4.8rem',
        lineHeight: '5.8rem',
        fontWeight: '700',
        color: 'white',
      },

      // font size and line height set for md. base and sm assumed till mobile is ready. Default heading is display2
      sizes: {
        display1: {
          fontSize: { base: '3rem', sm: '4.8rem', md: '6.4rem' },
          lineHeight: { base: '4rem', sm: '4.75rem', md: '7.8rem' },
        },
        display2: {
          fontSize: { base: '3rem', sm: '3.2rem', md: '4.8rem' },
          lineHeight: { base: '4rem', sm: '4.75rem', md: '5.8rem' },
        },
        display3: {
          fontSize: { base: '3rem', sm: '3.2rem', md: '4rem' },
          lineHeight: { base: '4rem', sm: '4.75rem', md: '4.8rem' },
        },
        display4: {
          fontSize: { base: '2.4rem', sm: '2.8rem', md: '3.6rem' },
          lineHeight: { base: '3.6rem', sm: '4.2rem', md: '4.5rem' },
        },
        h1: {
          fontSize: { base: '1.6rem', sm: '2.0rem', md: '2.8rem' },
          lineHeight: { base: '2.5rem', sm: '3.35rem', md: '3.4rem' },
        },
        h2: {
          fontSize: { base: '1.6rem', sm: '2.0rem', md: '2.4rem' },
          lineHeight: { base: '2rem', sm: '2.25rem', md: '2.9rem' },
        },
        h3: {
          fontSize: { base: '1.4rem', sm: '1.8rem', md: '2.0rem' },
          lineHeight: { base: '2rem', sm: '2.2rem', md: '2.4rem' },
        },
        h4: {
          fontSize: { base: '1.2rem', sm: '1.6rem', md: '1.8rem' },
          lineHeight: { base: '1.8rem', sm: '2.0rem', md: '2.2rem' },
        },
        h5: {
          fontSize: { base: '1.0rem', sm: '1.4rem', md: '1.6rem' },
          lineHeight: { base: '1.4rem', sm: '1.6rem', md: '1.9rem' },
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
