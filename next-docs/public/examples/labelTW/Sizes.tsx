import React from 'react';
import { Label } from '@heathmont/moon-core-tw';

const Example = () => (
  <>
    <Label size="2xs">Twoxsmall (2xs)</Label>
    <Label>Xsmall (sm)</Label>
    <Label size="2xs" isUppercase={false}>
      Twoxsmall (2xs)
    </Label>
    <Label isUppercase={false}>Xsmall (sm)</Label>
  </>
);

export default Example;
