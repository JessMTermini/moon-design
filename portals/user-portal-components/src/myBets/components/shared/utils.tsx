import { colors } from '@heathmont/sportsbet-tokens';

export const backgroundStripes = {
  backgroundImage: `linear-gradient(135deg, ${colors.palette.goku[100]} 25%, rgba(255,255,255,0.08) 25%, rgba(255,255,255,0.08) 50%, ${colors.palette.goku[100]} 50%, ${colors.palette.goku[100]} 75%, rgba(255,255,255,0.08) 75%, rgba(255,255,255,0.08) 100%)`,
  backgroundSize: '5.66px 5.66px',
};

export const scoreboardBackgroundColor = colors.palette.goku[100];
export const scoreboardScoreColor = colors.palette.hit[100];

export const betBoostHighlightColors = {
  text: colors.palette.vegeta[100],
  border: colors.palette.vegeta[100],
};
