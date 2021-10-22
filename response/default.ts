
export function defaultResponse():Response{
  const siteName = "OhCrap.org";
  const startYear = 2002;
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  const title = `${siteName}: since ${startYear}`;
  const headline = `Celebrating ${currentYear - startYear} years of crap!`;


  return new Response(`
<html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <H2>${siteName}</H2>
    <p>${headline}</p>
    <canvas id="canvas"></canvas>
    <script type="module" src="./static/crap.js"></script>
  </body>
</html>
`,
  {
    status: 200,
    headers: {
      "content-type": "text/html; charset=UTF-8",
    }
  });
}
