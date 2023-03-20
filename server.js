/** @format */

const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
	if (req.url === '/') {
		// Read the HTML file
		fs.readFile('./index.html', (err, html) => {
			if (err) {
				throw err;
			}

			// Set the content type
			res.setHeader('Content-type', 'text/html');

			// Write the HTML file to the response
			res.write(html);
			res.end();
		});
	} else if (req.url === '/style.css') {
		// Read the CSS file
		fs.readFile('./style.css', (err, css) => {
			if (err) {
				throw err;
			}

			// Set the content type
			res.setHeader('Content-type', 'text/css');

			// Write the CSS file to the response
			res.write(css);
			res.end();
		});
	} else {
		// Handle other requests
		res.statusCode = 404;
		res.end('404 Not Found');
	}
});

// Start the server
server.listen(3000, () => {
	console.log('Server started on port 3000');
});
