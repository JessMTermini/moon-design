import AccordionSizes from './AccordionSizes';

type AccordionProps = {
  title: string;
  openByDefault?: boolean;
  children?: React.ReactNode;
  disableOpen?: boolean;
  headerContent?: React.ReactNode;
  size?: AccordionSizes;
  withButton?: boolean;
  isContentInside?: boolean;
};

export default AccordionProps;
