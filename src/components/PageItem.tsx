import classNames from 'classnames';
import { FC } from 'react';

interface PageItemProps {
  name: string;
  icon: string;
  className?: string;
}

export const PageItem: FC<PageItemProps> = ({ name, icon, className }) => {
  return (
    <div className={classNames('icon', className)}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
};
