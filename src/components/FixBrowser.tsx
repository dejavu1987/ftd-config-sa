import { FC } from 'react';
import { Accordion, AccordionProps } from './Accordion';
export const FixBrowser: FC = () => {
  let browser = '';
  // @ts-expect-error browser specific things to detect browsers
  browser = /*@cc_on!@*/ false || !!document.documentMode ? 'IE' : browser;
  browser =
    browser !== 'IE' && /Edg/.test(navigator.userAgent) ? 'Edge' : browser;
  // @ts-expect-error browser specific things to detect browsers
  browser = typeof InstallTrigger !== 'undefined' ? 'Firefox' : browser;
  browser =
    browser !== 'Edge' &&
    // @ts-expect-error browser specific things to detect browsers
    !!window.chrome &&
    // @ts-expect-error browser specific things to detect browsers
    (!!window.chrome.webstore ||
      navigator.vendor.toLowerCase().indexOf('google inc.') !== -1)
      ? 'Chrome'
      : browser;
  browser =
    browser !== 'Chrome' &&
    browser !== 'Edge' &&
    navigator.userAgent.toLowerCase().indexOf('safari') !== -1
      ? 'Safari'
      : browser;

  const accordionData: AccordionProps[] = [
    {
      title: 'Chrome',
      content: (
        <>
          <p>
            If you are using Google Chrome, follow the instruction in the
            following short video.
          </p>
          <div className="video relative pb-[67%]">
            <iframe
              className="absolute w-full h-full left-0 top-0"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/y5Fd0EgPx74?si=ouEnIq3lNDNzubOh"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ),
    },
    {
      title: 'Edge',
      content: (
        <>
          {' '}
          <p>
            If you are using MS Edge, follow the instruction in the following
            short video.
          </p>
          <div className="video relative pb-[67%]">
            <iframe
              className="absolute w-full h-full left-0 top-0"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/fstfSZrmo0w?si=3NbZFR8wzHb8YngD"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ),
    },
    {
      title: 'Firefox',
      content: (
        <>
          <p>
            If you are using Firefox, follow the instruction in the following
            short video.
          </p>
          <div className="video relative pb-[67%]">
            <iframe
              className="absolute w-full h-full left-0 top-0"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/LYD7EFcwpnE?si=rHc5apgTW0gO5jdJ"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ),
    },
    {
      title: 'Safari',
      content: (
        <>
          {' '}
          <p>
            If you are using Safari, follow the instruction in the following
            short video.
          </p>
          <div className="video relative pb-[67%]">
            <iframe
              className="absolute w-full h-full left-0 top-0"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hTLora7dyAM?si=FdUUketiYd1DhGsi"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </>
      ),
    },
  ].sort(({ title }) => (title === browser ? -1 : 1));

  return (
    <section className="fix-browser">
      <h2>
        Oops! looks like you haven't configured your browser for FreeTouchDeck
        yet
      </h2>
      <p>
        But not a problem. This happens because you are on a secure page (HTTPS)
        but your FreeTouchDeck hosts it's server in an insecure protocol (HTTP)
      </p>
      <p>If you do not understand that statement still not a problem.</p>
      <p>It is simple to fix and needs to be done only ONCE.</p>
      <p>It will depend on what browser you are using.</p>

      <div className="accordion">
        {accordionData.map(({ title, content }) => (
          <Accordion
            title={title}
            content={content}
            isOpen={title === browser}
          />
        ))}
      </div>
      <p>
        If you are still having issues, please contact me at{' '}
        <a target="_blank" href="https://anilmaharjan.com.np/contact/">
          https://anilmaharjan.com.np/contact/
        </a>
      </p>
    </section>
  );
};
