/** @jsx jsx */
import * as React from 'react';
import { jsx, CSSObject } from '@emotion/core';
import styled from '@emotion/styled';
import rem from 'polished/lib/helpers/rem';
import math from 'polished/lib/math/math';
import { colors } from '@heathmont/sportsbet-tokens';
import { Label } from '../private/label';
import { hyphenate, inlineSVG, spacing } from '@heathmont/sportsbet-utils';
import {
  Input,
  inputFloatContent,
  inputFloatLabel,
  inputFloatLabelActive,
} from '../private/input';
import {
  IconWarning,
  IconSuccess,
  IconCircle,
} from '@heathmont/sportsbet-icons';
jsx;

/**
 * Types & Settings
 */
type TextInputTypes =
  | 'date'
  | 'email'
  | 'number'
  | 'password'
  | 'search'
  | 'tel'
  | 'text'
  | 'url';

type TextInputProps = {
  label: string;
  type?: TextInputTypes;
  placeholder?: string;
  labelBlock?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
};

const inputsWithDefaultBlockLabels = ['date'];

const iconSize = rem(20);
const iconPosition = spacing('small');
const iconInnerSize = rem(12);
const iconInnerPosition = math(
  `${iconPosition} + ((${iconSize} - ${iconInnerSize}) / 2)`
);

/**
 * Functions
 */
const hasDefaultBlockLabel = (inputType: TextInputTypes) =>
  inputsWithDefaultBlockLabels.some(type => type === inputType);

const createId = (id: string) => `TextInput-${hyphenate(id)}`;

/**
 * Styles
 */
const inputContainer: CSSObject = {
  position: 'relative',
};

const backgroundIcon: CSSObject = {
  backgroundPosition: `right ${iconInnerPosition} center, right ${iconPosition} center`,
  backgroundSize: `${iconInnerSize}, ${iconSize}`,
};

const textInputError: CSSObject = {
  ...backgroundIcon,
  borderColor: colors.error,
  backgroundImage: `
    ${inlineSVG(<IconWarning color={colors.neutral[10]} />)},
    ${inlineSVG(<IconCircle color={colors.error} />)}`,
};

const TextInputElem = styled(Input)(({ error, success }) => [
  {
    '&:focus': {
      borderColor: colors.neutral[20],
      outline: 'none',
    },
    '&:not(:focus):not(:placeholder-shown):invalid': {
      ...textInputError,
    },
  },
  error && {
    ...textInputError,
  },
  success && [
    backgroundIcon,
    {
      backgroundImage: `
        ${inlineSVG(<IconSuccess color={colors.neutral[10]} />)},
        ${inlineSVG(<IconCircle color={colors.brand} />)}`,
    },
  ],
]);

const textInputFloat: CSSObject = {
  '::placeholder': {
    color: 'transparent',
  },
  '&:not(:placeholder-shown)': {
    ...inputFloatContent,
    borderColor: 'transparent',
    '& + label': {
      ...inputFloatLabelActive,
    },
  },
};

/**
 * Component
 *
 * 1. Leaving the placeholder as an empty string by default allows us to float
 *    the label when a user starts typing, even if a placeholder isn't defined.
 */
const TextInput: React.FC<TextInputProps> = ({
  type = 'text',
  placeholder = ' ',
  label,
  labelBlock,
  ...props
}) => {
  const inputProps = {
    type,
    placeholder,
    ...props,
  };

  return hasDefaultBlockLabel(inputProps.type) || labelBlock ? (
    <Label text={label}>
      <TextInputElem withIcon {...inputProps} />
    </Label>
  ) : (
    <div css={inputContainer}>
      <TextInputElem
        withIcon
        id={createId(label)}
        css={textInputFloat}
        {...inputProps}
      />
      <label htmlFor={createId(label)} css={inputFloatLabel}>
        {label}
      </label>
    </div>
  );
};

export { TextInput, TextInputProps };
