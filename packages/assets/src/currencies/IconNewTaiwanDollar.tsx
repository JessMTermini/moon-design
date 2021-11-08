import React from 'react';
import styled from 'styled-components';
import { ColorProps } from '@heathmont/moon-themes';
import { themed } from '@heathmont/moon-utils';
import SvgProps from './private/SvgProps';

const Svg = (props: React.SVGProps<SVGSVGElement>) => <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}><path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#0AB758" /><path d="M14.5 17.8002C14.4 17.8002 14.2 17.7002 14.1 17.7002C13.8 17.5002 13.6 17.3002 13.4 16.9002C13.3 16.6002 13.3 16.4002 13.3 16.1002C13.3 14.2002 13.3 12.4002 13.3 10.5002C13.3 10.4002 13.3 10.4002 13.2 10.4002C12.6 10.4002 12 10.4002 11.3 10.4002C11.2 10.4002 11.2 10.4002 11.2 10.5002C11.2 10.9002 11.2 11.4002 11.2 11.8002C11.2 12.3002 11.1 12.8002 11 13.2002C10.9 13.7002 10.7 14.2002 10.5 14.7002C10.2 15.3002 9.70002 15.9002 9.20002 16.3002C8.80002 16.6002 8.40002 16.8002 8.00002 17.0002C7.80002 17.1002 7.60002 17.2002 7.40002 17.1002C7.10002 17.0002 6.90002 16.8002 6.90002 16.5002C6.90002 16.2002 7.10002 16.0002 7.30002 15.9002C7.90002 15.7002 8.30002 15.4002 8.70002 15.0002C9.30002 14.4002 9.60002 13.6002 9.80002 12.8002C9.90002 12.1002 10 11.3002 9.90002 10.5002C9.90002 10.4002 9.90002 10.4002 9.80002 10.4002C9.20002 10.4002 8.50002 10.4002 7.90002 10.4002C7.70002 10.4002 7.50002 10.4002 7.40002 10.2002C7.30002 10.1002 7.20002 9.8002 7.30002 9.6002C7.40002 9.4002 7.60002 9.2002 7.80002 9.2002H7.90002C10.6 9.2002 13.3 9.2002 16 9.2002C16.3 9.2002 16.5 9.3002 16.6 9.6002C16.8 10.0002 16.5 10.5002 16.1 10.5002C15.6 10.5002 15.1 10.5002 14.6 10.5002C14.5 10.5002 14.5 10.5002 14.5 10.6002C14.5 12.4002 14.5 14.3002 14.5 16.1002C14.5 16.2002 14.5 16.3002 14.5 16.5002C14.5 16.6002 14.5 16.6002 14.6 16.6002C14.8 16.5002 15 16.4002 15.2 16.3002C15.5 16.1002 15.7 15.9002 15.9 15.7002C16.2 15.4002 16.6 15.5002 16.9 15.8002C17.1 16.0002 17.1 16.4002 16.8 16.7002C16.5 17.0002 16.1 17.3002 15.7 17.5002C15.4 17.7002 15.1 17.8002 14.7 17.9002C14.7 17.9002 14.7 17.9002 14.6 17.9002C14.7 17.8002 14.6 17.8002 14.5 17.8002Z" fill="#FCFAFA" /><path d="M16.2 6.7002C16.3 6.8002 16.4 6.8002 16.5 6.9002C16.7 7.1002 16.8 7.3002 16.7 7.6002C16.7 7.8002 16.5 8.0002 16.2 8.0002C16.1 8.0002 16.1 8.0002 16 8.0002C13.3 8.0002 10.6 8.0002 7.89995 8.0002C7.69995 8.0002 7.49995 7.9002 7.29995 7.7002C7.09995 7.4002 7.19995 6.9002 7.59995 6.7002H7.69995C10.6 6.7002 13.4 6.7002 16.2 6.7002Z" fill="#FCFAFA" /></svg>;

const IconNewTaiwanDollar = styled(Svg)<SvgProps>(({
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

IconNewTaiwanDollar.defaultProps = {
    
  };
export default IconNewTaiwanDollar;