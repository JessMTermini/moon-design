import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M21.7007 14.4192C20.3649 19.7764 14.9384 23.0367 9.58001 21.7008C4.22382 20.3652 0.963159 14.9389 2.29955 9.58206C3.63469 4.22425 9.06121 0.963624 14.418 2.29925C19.7761 3.63487 23.0364 9.06175 21.7007 14.4192Z" fill="#F7931A" /><path d="M16.4098 10.5754C16.6089 9.24478 15.5957 8.52947 14.2102 8.05228L14.6596 6.24978L13.5623 5.97634L13.1248 7.73134C12.8363 7.65947 12.54 7.59166 12.2456 7.52447L12.6863 5.7579L11.5896 5.48447L11.1399 7.28634C10.9011 7.23196 10.6667 7.17822 10.4392 7.12166L10.4404 7.11603L8.92717 6.73821L8.63526 7.91009C8.63526 7.91009 9.44941 8.09665 9.43222 8.10822C9.87664 8.21915 9.95696 8.51321 9.94352 8.74634L9.43159 10.7998C9.46222 10.8076 9.50191 10.8188 9.54567 10.8363C9.5091 10.8273 9.47004 10.8173 9.42972 10.8076L8.71214 13.6842C8.65776 13.8192 8.51994 14.0217 8.20928 13.9448C8.22022 13.9607 7.41169 13.7457 7.41169 13.7457L6.86694 15.0017L8.29491 15.3576C8.56056 15.4242 8.8209 15.4938 9.07717 15.5595L8.62307 17.3826L9.71912 17.656L10.1689 15.8523C10.4683 15.9335 10.7589 16.0085 11.0433 16.0792L10.5952 17.8745L11.6925 18.1479L12.1466 16.3282C14.0177 16.6823 15.4247 16.5395 16.017 14.8473C16.4942 13.4848 15.9932 12.6988 15.0087 12.1863C15.7257 12.021 16.2658 11.5495 16.4098 10.5754ZM13.9027 14.0907C13.5636 15.4532 11.2693 14.7167 10.5255 14.532L11.128 12.1167C11.8719 12.3023 14.2571 12.6698 13.9027 14.0907ZM14.2421 10.5557C13.9327 11.7951 12.0231 11.1654 11.4037 11.011L11.95 8.82041C12.5694 8.97478 14.5643 9.2629 14.2421 10.5557Z" fill="white" /><circle cx={12} cy={12} r={12} fill="#0AB758" /><path d="M5.36163 15.8583H7.29502V13.2009H8.01855L9.7503 15.8583H12.0751L10.0705 12.934C11.1143 12.5162 11.66 11.6575 11.66 10.4622C11.66 8.81436 10.7348 7.61909 8.6472 7.61909H5.36163V15.8583ZM7.29502 11.5066V9.32495H8.32695C9.21654 9.32495 9.60796 9.78913 9.60796 10.4158C9.60796 11.1004 9.14537 11.5066 8.29136 11.5066H7.29502Z" fill="white" /><path d="M18.6393 13.5142C18.6393 11.9708 17.6074 11.553 15.9586 11.0656C15.1758 10.8335 14.9267 10.6363 14.9267 10.3578C14.9267 10.0676 15.1639 9.89357 15.6621 9.89357C16.1484 9.89357 16.7178 10.056 17.3939 10.5202L18.4969 9.1741C17.9276 8.72152 17.121 8.33857 16.3382 8.18771V6.78357H15.0572V8.1413C13.6576 8.32697 12.851 9.25533 12.851 10.4854C12.851 11.994 14.049 12.4698 15.4012 12.8643C16.3145 13.1312 16.5398 13.3285 16.5398 13.665C16.5398 13.9668 16.267 14.1872 15.8044 14.1872C15.2351 14.1872 14.4523 13.9319 13.788 13.3169L12.6494 14.6746C13.3492 15.3593 14.1676 15.7422 15.0453 15.8815V17.216H16.3145V15.8931C17.726 15.7074 18.6393 14.8371 18.6393 13.5142Z" fill="white" /></svg>;

const IconBrazilianReal = styled(Svg)<SvgProps>(({
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

IconBrazilianReal.defaultProps = {
    
  };
export default IconBrazilianReal;