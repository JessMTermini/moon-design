import React from 'react';
import { TextInputProps } from '..';
import TextGroupEnd from './private/TextGroupEnd';
import TextGroupStart from './private/TextGroupStart';
import { OrientationType } from './private/types/OrientationType';
import Container from './styles/Container';

export interface TextInputGroupProps {
  orientation?: OrientationType;
  inputProps?: {
    input1?: TextInputProps;
    input2?: TextInputProps;
  };
  isRtl?: boolean;
}

const determineInputStart = (
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  isRtl?: boolean
) => {
  const groupProps = {
    inputProps,
    orientation,
    isRtl,
  };
  return <TextGroupStart {...groupProps}></TextGroupStart>;
};

const determineInputEnd = (
  inputProps?: TextInputProps,
  orientation?: OrientationType,
  isRtl?: boolean
) => {
  const groupProps = {
    inputProps,
    orientation,
    isRtl,
  };
  return <TextGroupEnd {...groupProps}></TextGroupEnd>;
};

const TextInputGroup: React.FC<TextInputGroupProps> = ({
  orientation = 'horizontal',
  inputProps,
  isRtl,
}) => {
  // TODO
  // Use select props and use check the pair prop too
  const dir = isRtl ? 'rtl' : 'ltr';
  return (
    <Container orientation={orientation} dir={dir}>
      {determineInputStart(inputProps?.input1, orientation, isRtl)}
      {determineInputEnd(inputProps?.input2, orientation, isRtl)}
    </Container>
  );
};

export default TextInputGroup;
