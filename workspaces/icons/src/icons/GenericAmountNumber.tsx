import React from 'react';

const GenericAmountNumber = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.414 22h7.056v-1.696h-4.24l-.016-.048 2.32-2.416c1.392-1.44 1.824-2.48 1.824-3.696 0-2.016-1.632-3.232-3.44-3.232-1.792 0-2.928.896-3.552 2.08l1.328.944c.496-.864 1.216-1.296 2.096-1.296.992 0 1.68.736 1.68 1.712 0 .944-.656 1.744-1.552 2.688l-3.536 3.728.032 1.232z"
      fill="currentColor"
    />
  </svg>
);

export default GenericAmountNumber;
