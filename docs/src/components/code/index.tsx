/* tslint:disable import-name */
/** @jsx jsx */ jsx;
import { jsx, css } from '@emotion/core';
import Highlight, { defaultProps } from 'prism-react-renderer';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';
import * as Components from '@heathmont/sportsbet-components';
import { border, colors, typography } from '@heathmont/sportsbet-tokens';
import * as Utils from '@heathmont/sportsbet-utils';
import { syntaxStyles } from './prism';

type CodeProps = {
  codeString: string;
  language: string;
  'react-live'?: boolean;
};

type HighlightProps = {
  className: string;
  tokens: [[string]];
  getLineProps: ({ line, key }: { line: [string]; key: number }) => string;
  getTokenProps: Function;
};

const codeBorder = `${border.width}px solid ${colors.neutral[40]}`;

const codeWrapper = css([
  {
    display: 'block',
    border: codeBorder,
    borderRadius: border.radius.small,
    position: 'relative',
    overflow: 'hidden',
    marginBottom: Utils.spacing(),
    '.prism-code:focus': {
      outline: 'none',
      boxShadow: `inset 0 0 3px ${colors.brand}`,
    },
  },
  syntaxStyles,
]);

const liveCodePreview = css({
  padding: Utils.spacing('large'),
  minHeight: Utils.spacing('xlarge'),
  fontFamily: typography.fontFamily,
  borderBottom: codeBorder,
  overflowY: 'scroll',
});

/* Ensures that we can use `css` props + not have to worry about wrapper divs */
const transformCode = (src: any) =>
  `/** @jsx jsx */<React.Fragment>${src}</React.Fragment>`;

export const Code = ({ codeString, language, ...props }: CodeProps) =>
  props['react-live'] ? (
    <LiveProvider
      mountStylesheet={false}
      code={codeString}
      css={codeWrapper}
      scope={{ jsx, ...Components, ...Utils, colors }}
      transformCode={transformCode}
    >
      <LivePreview css={liveCodePreview} />
      <div css={css({ overflowY: 'scroll' })}>
        <LiveEditor />
      </div>
      <LiveError />
    </LiveProvider>
  ) : (
    <div css={codeWrapper}>
      <Highlight
        {...defaultProps}
        code={codeString}
        language={language}
        theme={undefined}
      >
        {(pre: HighlightProps) => (
          <pre className={pre.className}>
            {pre.tokens.map((line, i) => (
              <div {...pre.getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...pre.getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
