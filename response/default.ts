
export function defaultResponse():Response{
  const startYear = 2002;
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  return new Response(`
<html>
  <head>
    <title>OhCrap.org ${startYear} - ${currentYear}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <H2>OhCrap.org</H2>
    <p>Celebrating ${currentYear - startYear} years of crap!</p>
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
