import { FC } from 'react';
import { PageItem } from './PageItem';
import { mdIcoUrl, pages } from '../Data';

export const Home: FC = () => {
  return (
    <div className="grid grid--action">
      {pages.map((page, index) => (
        <PageItem
          key={index}
          name={page.name}
          icon={`${mdIcoUrl}${page.icon}.svg`}
        />
      ))}
      <PageItem name="Save" icon={`${mdIcoUrl}floppy.svg`} />
    </div>
  );
};
