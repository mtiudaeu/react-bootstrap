import * as React from 'react';

import { BsPrefixComponent } from './helpers';

interface BreadcrumbItemProps {
  active?: boolean;
  href?: string;
  target?: string;
  title?: React.ReactNode;
}

declare class BreadcrumbItem<
  As extends React.ReactType = 'li'
> extends BsPrefixComponent<As, BreadcrumbItemProps> {}

export default BreadcrumbItem;
