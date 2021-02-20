import ReactDOMServer from 'react-dom/server';
import $ from 'jquery';

export const openForPrint = (markUp: JSX.Element | string, favUrl?: string) => {
  const w = window.open('', 'JD-receipt');
  if (!w) throw Error("Can not open Window 'openForPrint'");
  w.document.title = 'JD-receipt';
  if (typeof markUp === 'string') w.document.body.innerHTML = markUp;
  else w.document.body.innerHTML = ReactDOMServer.renderToStaticMarkup(markUp);

  $('head', w.document).append(`<link rel="icon" href=${favUrl}>`);
};
