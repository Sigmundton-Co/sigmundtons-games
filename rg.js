const sonic1 = `
  <iframe src="https://www.retrogames.cc/embed/28249-sonic-the-hedgehog-usa-europe-hack-by-lost-v1-0-sonic-jam-s-easy-mode.html" width="100%" height="100%" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
`;

const sonic2 = `
<iframe src="https://www.retrogames.cc/embed/17236-sonic-the-hedgehog-2-world-rev-a.html" width="100%" height="100%" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
`;

const wario = `
<iframe src="https://www.retrogames.cc/embed/28833-wario-ware-inc-u-precision.html" width="100%" height="100%" frameborder="no" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" scrolling="no"></iframe>
`;

// Reusable function
function openBlankEmbed(embedCode) {
  const win = window.open("about:blank");
  win.document.writeln(`
    <html>
      <head><title>Embed</title></head>
      <body style="margin:0; display:flex; justify-content:center; align-items:center; height:100vh; background:#000;">
        ${embedCode}
      </body>
    </html>
  `);
}