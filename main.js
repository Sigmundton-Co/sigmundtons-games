function openIframe(url) {
    // Open a new window or tab
    const newWindow = window.open('about:blank', '_blank');

    // HTML content for the new page with iframe
    const iframeContent = `
        <html>
        <head>
            <style>
                body, html {
                    margin: 0;
                    padding: 0;
                    width: 100%;
                    height: 100%;
                    overflow: hidden;
                }
                iframe {
                    width: 100%;
                    height: 100%;
                    border: none;
                }
            </style>
        </head>
        <body>
            <iframe src="${url}"></iframe>
        </body>
        </html>
    `;

    // Write the content to the new window
    newWindow.document.writeln(iframeContent);
    newWindow.document.close();
}