import { Theme } from '@heathmont/sportsbet-themes';

const underlineWidth = ({ borderWidth }: Theme) => borderWidth * 2; // 'px'
const totalUnderlineOffset = 16; // 'px'
const underlineOffset = (theme: Theme) =>
  totalUnderlineOffset - underlineWidth(theme); // 'px'

export { underlineOffset, underlineWidth };
