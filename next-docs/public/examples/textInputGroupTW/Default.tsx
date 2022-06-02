import React from 'react';
import { TextInputGroup } from '@heathmont/moon-core-tw';

const Example = () => {
  const inputProps1 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Country',
  };

  const inputProps2 = {
    type: 'text',
    inputSize: 'md',
    placeholder: 'Phone',
  };

  return (
    <div className="flex justify-around items-end w-full gap-2">
      <TextInputGroup
        inputProps={{
          input1: inputProps1,
          input2: inputProps2,
        }}
      />
    </div>
  );
};

export default Example;
