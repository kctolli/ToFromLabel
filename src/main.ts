import './style.css';

const main = () => {
  const app = document.querySelector<HTMLDivElement>('#app');

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  if (!urlParams.has('to')) {  
    return app!.innerHTML = `
      <h1>Invalid URL</h1>
      <h2>Missing "to" parameter</h2>
      <p>Please add "to" parameter to the URL by using <code>?to=[name]</code></p>
    `;
  }
  
  const message = urlParams.get('message') || "Merry Christmas!";
  const from = urlParams.get('from') || "Kyle";
  const to = urlParams.get('to');

  return app!.innerHTML = `
    <h1>${message}</h1>
    <h2>To: ${to}</h2>
    <h2>From: ${from}</h2>
    <h3>Enjoy Your Gift!</h3>
  `;
}

main();
