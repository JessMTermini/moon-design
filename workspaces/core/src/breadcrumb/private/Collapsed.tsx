import React, { useState } from 'react';
import { ArrowsRight, Other3DotsHorizontal } from '@heathmont/moon-icons-tw';
import Button from '../../button/Button';
import classNames from '../../private/utils/classnames';
import useClickOutside from './hooks/useClickOutside';
import BreadcrumbProps from './types/BreadcrumbProps';

const Collapsed: React.FC<BreadcrumbProps> = ({ breadcrumbs }) => {
  const [isOpen, toggleDropdown] = useState(false);
  const [ref, hasClickedOutside] = useClickOutside();
  const restBreadcrumbs: React.ElementType[] = [];
  const collapseBreadcrumbs = breadcrumbs
    .map((crumb, index) => {
      if (index === 0) return crumb;
      if (index > breadcrumbs.length - 3) {
        return crumb;
      } else {
        restBreadcrumbs.push(crumb);
      }
    })
    .filter((crumd) => crumd);

  const clickHandle = () => {
    console.log('isOpen', isOpen);
    toggleDropdown(!isOpen);
  };

  React.useEffect(() => {
    if (hasClickedOutside) {
      toggleDropdown(false);
    }
  });

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap gap-2 items-center text-moon-12">
        <li key={'crumb' + 0} className="flex items-center gap-2 text-trunks">
          <span className="text-trunks transition-colors duration-200 hover:text-bulma">
            {collapseBreadcrumbs && collapseBreadcrumbs[0]}
          </span>
          <ArrowsRight />
        </li>
        {restBreadcrumbs?.length !== 0 && (
          <li key={'crumb' + 1} ref={ref} className="relative">
            <Button variant="ghost" iconOnly onClick={clickHandle}>
              <Other3DotsHorizontal />
            </Button>
            {isOpen && (
              <ol className="absolute left-0 top-full bg-gohan p-1 mt-2 flex flex-col gap-2 shadow-moon-xl rounded-moon-s-xs z-10000 min-w-[12rem]">
                {restBreadcrumbs.map((crumb, index) => (
                  <li
                    key={'innercrumb' + index}
                    className="flex flex-col items-stretch text-bulma text-moon-12 brcrumb-li rounded-sm cursor-pointer hover:bg-goku"
                  >
                    {crumb}
                  </li>
                ))}
              </ol>
            )}
          </li>
        )}

        {collapseBreadcrumbs?.length !== 0 &&
          collapseBreadcrumbs.map((crumb, index) => {
            if (index === 0) return null;
            return (
              <li
                key={'crumb' + index + 1}
                className="flex items-center gap-2 text-trunks"
              >
                <ArrowsRight />
                <span
                  className={classNames(
                    'text-trunks transition-colors duration-200 hover:text-bulma',
                    index === collapseBreadcrumbs.length - 1 &&
                      'text-bulma font-semibold'
                  )}
                >
                  {crumb && crumb}
                </span>
              </li>
            );
          })}
      </ol>
    </nav>
  );
};

export default Collapsed;
