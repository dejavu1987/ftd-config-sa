import classNames from 'classnames';
import { FC, ReactNode, useState } from 'react';
export type AccordionProps = {
  title: string | ReactNode;
  content: string | ReactNode;
  isOpen?: boolean;
};
export const Accordion: FC<AccordionProps> = ({
  title,
  content,
  isOpen = false,
}) => {
  const [isActive, setIsActive] = useState(isOpen);

  return (
    <div className={classNames('accordion-item', isActive && 'is-open')}>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <div>{title}</div>
        <div>{isActive ? '-' : '+'}</div>
      </div>
      {isActive && <div className="accordion-content">{content}</div>}
    </div>
  );
};
