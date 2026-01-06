// This file handles all routing fallbacks for client-side routing
export default function handler(req, res) {
  res.status(200).setHeader('Content-Type', 'text/html; charset=utf-8')
    .send(require('fs').readFileSync(require('path').join(__dirname, '../../dist/index.html'), 'utf8'));
}
