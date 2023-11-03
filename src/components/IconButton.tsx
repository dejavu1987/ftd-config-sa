import classNames from 'classnames';
import { FC } from 'react';

interface IconButtonProps {
  name: string;
  icon: string;
}

export const IconButton: FC<
  JSX.IntrinsicElements['button'] & IconButtonProps
> = ({ name, icon, className, ...rest }) => {
  return (
    <button className={classNames('icon-button', className)} {...rest}>
      <img src={icon} alt={name} />
      <span>{name}</span>
    </button>
  );
};
