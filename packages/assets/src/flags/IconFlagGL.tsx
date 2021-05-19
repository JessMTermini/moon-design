import React from 'react';
import styled from 'styled-components';

interface Props {
  fontSize: string | number;
}

const Flag = styled.span<Props>(({ fontSize }) => ({
  fontSize,
}));

// Greenland
const IconFlagGL: React.FC<Props> = ({ fontSize, ...props }) => (
  // eslint-disable-next-line
  <Flag role="img" aria-label="flag-gl" fontSize={fontSize} {...props}>
    🇬🇱
  </Flag>
);

export default IconFlagGL;
