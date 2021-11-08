import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><circle cx={12} cy={12} r={12} fill="url(#paint0_linear)" /><path d="M15.6785 12.9617C15.2311 12.7065 14.7273 12.6325 14.2283 12.6153C13.8095 12.6008 13.1849 12.3358 13.1849 11.5834C13.1849 11.0228 13.6449 10.5716 14.2285 10.5515C14.7275 10.5343 15.2313 10.4602 15.6785 10.2051C16.0803 9.97596 16.4139 9.64638 16.6459 9.24949C16.8779 8.8526 17 8.40238 17 7.9441C17 7.48581 16.8779 7.03559 16.6459 6.6387C16.4139 6.24182 16.0803 5.91224 15.6785 5.6831C15.2767 5.45396 14.821 5.33333 14.357 5.33334C13.8931 5.33335 13.4374 5.454 13.0356 5.68315C12.6338 5.91231 12.3002 6.2419 12.0683 6.63879C11.8363 7.03569 11.7142 7.48591 11.7142 7.9442C11.7142 8.45003 11.8963 8.91553 12.1287 9.34726C12.3242 9.71038 12.423 10.3843 11.7527 10.7666C11.2541 11.051 10.6318 10.8709 10.3209 10.3795C10.0583 9.96444 9.74139 9.57552 9.29763 9.32239C8.89586 9.09324 8.44011 8.97261 7.97619 8.97261C7.51227 8.97261 7.05652 9.09324 6.65475 9.32238C6.25298 9.55152 5.91935 9.8811 5.68739 10.278C5.45543 10.6749 5.33331 11.1251 5.33331 11.5834C5.33331 12.0416 5.45543 12.4919 5.68739 12.8887C5.91935 13.2856 6.25298 13.6152 6.65475 13.8443C7.05652 14.0735 7.51227 14.1941 7.97619 14.1941C8.44011 14.1941 8.89586 14.0735 9.29763 13.8443C9.74126 13.5913 10.0583 13.2026 10.3207 12.7878C10.5361 12.4472 11.0743 12.013 11.7527 12.4002C12.2506 12.6844 12.4045 13.307 12.1285 13.8198C11.8961 14.2515 11.7143 14.7169 11.7143 15.2226C11.7143 15.6809 11.8364 16.1311 12.0683 16.528C12.3003 16.9249 12.6339 17.2544 13.0357 17.4836C13.4374 17.7127 13.8932 17.8333 14.3571 17.8333C14.821 17.8333 15.2768 17.7127 15.6785 17.4836C16.0803 17.2544 16.4139 16.9249 16.6459 16.528C16.8778 16.1311 16.9999 15.6809 16.9999 15.2226C16.9999 14.7643 16.8778 14.3141 16.6459 13.9173C16.4139 13.5204 16.0803 13.1908 15.6785 12.9617Z" fill="white" /><defs><linearGradient id="paint0_linear" x1={6.76848} y1={3.68301} x2={23.3478} y2={21.6651} gradientUnits="userSpaceOnUse"><stop stopColor="#0073F4" /><stop offset={1} stopColor="#13A9FF" /></linearGradient></defs></svg>;

const IconRipple = styled(Svg)<SvgProps>(({
  color,
  height,
  width,
  fontSize,
  theme
}) => ({ ...(color && {
    color: themed('color', color)(theme)
  }),
  height,
  width,
  fontSize,
  verticalAlign
}));

const CasinoBonus: React.FC<SvgProps> = props => {
  const theme = useTheme();
  const secondaryColor = theme.color.bulma[100];
  const attributes = ({ ...props,
    secondaryColor
  } as any);
  return null;
};

IconRipple.defaultProps = {
    
  };
export default IconRipple;