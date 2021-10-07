
export function parchoResponse():Response{
  const startYear = 2002;
  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();

  const title = `OhCrap.org ${startYear} - ${currentYear}`.split("").reverse().join();
  const headline = `Celebrating ${currentYear - startYear} years of crap!`.split("").reverse().join();


  return new Response(`
<html>
  <head>
    <title>${title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
  </head>
  <body>
    <H2>gro.parChO</H2>
    <p>${headline}</p>
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
