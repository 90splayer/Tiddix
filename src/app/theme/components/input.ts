export const inputStyles = {
  components: {
    Input: {
      baseStyle: {
        field: {
          boxSizing: 'border-box',
          fontWeight: 400,
          border: '1px',
          // borderRadius: '12px',
          borderColor: 'gray.200',
          transition: '0.7 ease-in-out',
        },
      },
      sizes: {
        md: {
          field: {
            height: { base: '4rem', sm: '4.2rem', md: '5.6rem' },
            padding: '1rem 1rem 1rem 2rem',
            borderRadius: '10rem',
            fontSize: { base: '1.0rem', sm: '1.4rem', md: '1.6rem' },
          },
        },
        lg: {
          field: {
            height: { base: '4rem', sm: '4.5rem', md: '5.9rem' },
            padding: '2rem 1.5rem',
            borderRadius: '2rem',
            fontSize: { base: '1.0rem', sm: '1.4rem', md: '1.6rem' },
          },
        },
      },

      variants: {
        outline: () => ({
          field: {
            boxSizing: 'border-box',
            border: '1px',
            // borderRadius: '12px',
            borderColor: 'blackShade.4',
            // padding: '12px 14px',
            _placeholder: { color: 'blackShade.4' },
            _hover: {
              border: '2px solid #FF8CDF',
            },
            _focusVisible: {
              border: '2px solid #FF8CDF',
              color: 'white',
              outline: 'none',
              _readOnly: {
                border: '0px',
                backgroundColor: 'transparent',
              },
            },
            _focus: {
              boxShadow: 'none',
              outline: 'none',
              borderColor: '#FF8CDF',
            },
            _disabled: {
              opacity: 1,
              borderColor: 'blackShade.3',
              _placeholder: {
                color: 'blackShade.3',
              },
            },
            _invalid: {
              borderColor: 'red',
              boxShadow: 'none',
            },
            _readOnly: {
              borderColor: 'blackShade.3',
              _placeholder: {
                color: 'blackShade.3',
              },
            },
          },
          addon: {
            borderColor: 'blackShade.4',
            // backgroundColor: 'white',
          },
        }),
      },
    },
    // NumberInput: {
    //   baseStyle: {
    //     field: {
    //       fontWeight: 400,
    //     },
    //   },
    // },
    // Select: {
    //   baseStyle: {
    //     field: {
    //       border: '1px',
    //       borderRadius: '12px',
    //       borderColor: 'gray.200',
    //       padding: '12px 14px',
    //       h: '100%',
    //     },
    //   },
    //   sizes: {
    //     md: {
    //       field: {
    //         border: '1px',
    //         borderRadius: '12px',
    //         borderColor: 'gray.200',
    //         h: '100%',
    //       },
    //     },
    //     lg: {
    //       field: {
    //         fontSize: 'md',
    //       },
    //     },
    //   },

    //   variants: {
    //     outline: () => ({
    //       field: {
    //         boxSizing: 'border-box',
    //         border: '1px',
    //         borderRadius: '12px',
    //         borderColor: 'gray.200',
    //         padding: '12px 14px',
    //         _placeholder: { color: 'gray.400' },
    //         _hover: {
    //           _disabled: {
    //             backgroundColor: 'gray.50',
    //             borderColor: 'gray.200',
    //             opacity: 1,
    //           },
    //         },
    //         _focusVisible: {
    //           borderColor: 'pastelBlue.300',
    //           outline: 'none',
    //         },
    //         _focus: {
    //           boxShadow: 'none',
    //           borderColor: 'pastelBlue.400',
    //         },
    //         _disabled: {
    //           backgroundColor: 'gray.50',
    //           borderColor: 'gray.200',
    //           opacity: 1,
    //         },
    //         _invalid: {
    //           borderColor: 'gray.200',
    //           boxShadow: 'none',
    //         },
    //       },
    //       icon: {
    //         color: 'gray.600',
    //       },
    //     }),
    //   },
    // },
  },
};
