import { avertaStd } from '@heathmont/moon-fonts';

import { Theme } from '../types/theme';
import sharedTokens from '../sharedTokens/sharedTokens';
import supportColors from '../supportColors/supportColors';

const boxShadow =
  '0px 2.4px 7.2px rgba(0, 0, 0, 0.18), 0px 12.8px 28.8px rgba(0, 0, 0, 0.22)';

const color = {
  goku: {
    100: '#24033F',
    80: '#320854',
    60: '#3F1065',
    40: '#4C1A75',
    10: '#65348D',
  },
  gohan: {
    100: '#3E0D68',
    80: '#4B1679',
    60: '#582187',
    40: '#642E94',
    20: '#713C9F',
  },
  beerus: {
    100: '#521B81',
  },
  bulma: {
    100: '#FFFFFF',
  },
  trunks: {
    100: '#A18EB4',
    60: '#8D71A8',
    20: '#795699',
  },
};

const bitcasinoDark: Theme = {
  ...sharedTokens,
  brand: 'Bitcasino.io',
  fontFace: avertaStd.fontFace,
  fontFamily: avertaStd.fontStack,
  fontSize: {
    body: 14,
  },
  fontWeight: avertaStd.fontWeight,
  boxShadow,
  color: {
    text: color.bulma[100],
    background: color.goku[100],
    ...supportColors,
    piccolo: {
      120: '#F54100',
      100: '#FF4F0F',
      80: '#FA642E',
    },
    hit: {
      120: '#0679E5',
      100: '#1286F3',
      80: '#2F92EE',
    },
    goten: {
      100: '#FFFFFF',
    },
    ...color,
  },
  colorScheme: 'dark',
};

export default bitcasinoDark;