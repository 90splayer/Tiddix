import { extendTheme } from '@chakra-ui/react';
import { globalStyles } from './styles';
import { buttonStyles } from './components/button';
import { headingStyles } from './components/heading';
import { inputStyles } from './components/input';

export default extendTheme(
  globalStyles,
  buttonStyles,
  headingStyles,
  inputStyles,
);
