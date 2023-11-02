import classNames from 'classnames';
import { FC } from 'react';

interface PageItemProps {
  name: string;
  icon: string;
}

export const PageItem: FC<JSX.IntrinsicElements['div'] & PageItemProps> = ({
  name,
  icon,
  className,
  ...rest
}) => {
  return (
    <div className={classNames('icon', className)} {...rest}>
      <img src={icon} alt={name} />
      <p>{name}</p>
    </div>
  );
};
