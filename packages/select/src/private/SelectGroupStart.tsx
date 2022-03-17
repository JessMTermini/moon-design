import React from 'react';
import styled from 'styled-components';
import Select, { SelectProps } from '../Select';
import { OrientationType } from './types/OrientationType';

const Wrapper = styled.div({
  flex: 'auto',
});

export interface SelectGroupStartProps {
  selectProps: SelectProps<any>;
  orientation?: OrientationType;
  isRtl?: boolean;
}

const SelectGroupStart: React.FC<SelectGroupStartProps> = ({
  selectProps,
  orientation,
  isRtl,
}) => {
  return (
    <Wrapper>
      <Select
        {...selectProps}
        isSharpRightSide={orientation === 'horizontal' && !isRtl}
        isSharpLeftSide={orientation === 'horizontal' && isRtl}
        isSharpBottomSide={orientation === 'vertical'}
        isNoBorderBottom={orientation === 'vertical'}
        isNoBorderEnd={orientation === 'horizontal'}
      />
    </Wrapper>
  );
};

export default SelectGroupStart;
