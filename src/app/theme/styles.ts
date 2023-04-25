export const globalStyles = {
  fonts: {
    heading: `'Product Sans', sans-serif`,
    body: `'Product Sans', sans-serif`,
  },

  styles: {
    global: () => ({
      body: {
        overflowX: 'hidden',
        bg: 'blackShade.1',
        fontFamily: 'Product Sans',
        // letterSpacing: '-0.5px',
        fontSize: '1.6rem',
        color: 'blackShade.4',
      },
      html: {
        fontFamily: 'Product Sans',
      },
    }),
  },

  colors: {
    transparent: 'transparent',
    black: '#000',
    white: '#fff',
    blackShade: {
      1: '#15181D',
      2: '#232629',
      3: '#485155',
      4: '#99A1AA',
    },
    gradientStyle: {
      1: 'linear-gradient(235.92deg, #FFC227 -14.27%, #FF8CDF 50.09%, #4EFCF9 114.81%)',
      2: 'radial-gradient(170.01% 203.82% at 137.98% -39.33%, #FF2727 0%, #FF8CDF 44.52%, #448FFF 100%)',
    },
  },
};
