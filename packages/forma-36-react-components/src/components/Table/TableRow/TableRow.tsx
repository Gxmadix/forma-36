import React from 'react';
import cn from 'classnames';
import type { HTMLProps } from 'react';

import styles from '../TableCell/TableCell/TableCell.css';

export interface TableRowProps extends HTMLProps<HTMLTableRowElement> {
  className?: string;
  selected?: boolean;
  testId?: string;
  children: React.ReactNode;
}

export const TableRow = ({
  className,
  children,
  selected = false,
  testId = 'cf-ui-table-row',
  ...otherProps
}: TableRowProps) => {
  return (
    <tr
      className={cn(className, {
        [styles['TableRow--selected']]: selected,
      })}
      data-test-id={testId}
      {...otherProps}
    >
      {children}
    </tr>
  );
};

export default TableRow;
