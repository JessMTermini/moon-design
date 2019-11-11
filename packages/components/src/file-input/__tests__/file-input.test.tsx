import * as React from 'react';
import { create } from 'react-test-renderer';
import 'jest-styled-components';

import { FileInput } from '../file-input';

describe('File Input', () => {
  test('renders a file input with default placeholder', () => {
    const fileInput = create(<FileInput id="fileInput1" />);

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom placeholder', () => {
    const fileInput = create(
      <FileInput id="fileInput2" placeholder="Choose a photo…" />
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label', () => {
    const fileInput = create(
      <FileInput id="fileInput3" label="ID, passport, etc." />
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders a file input with custom label and placeholder', () => {
    const fileInput = create(
      <FileInput
        id="fileInput4"
        label="Upload photo"
        placeholder="ID, passport, etc."
      />
    );

    expect(fileInput).toMatchSnapshot();
  });

  test('renders as error', () => {
    const fileInput = create(<FileInput id="fileInput5" error />);

    expect(fileInput).toMatchSnapshot();
  });
});
