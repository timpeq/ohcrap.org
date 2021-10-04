
export function defaultResponse(pageError = ""):Response{
  return new Response(`
<html>
<head>
<title>OhCrap.org - 2002 - 2021</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
<H2>OhCrap.org</H2>
<p>Celebrating 19 years of crap</p>
</body>
</html>
`,
  {
    status: 200,
    headers: {
      "content-type": "text/html; charset=UTF-8",
    },
    
  });
}
