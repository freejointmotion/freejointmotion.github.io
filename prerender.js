const puppeteer = require("puppeteer");
const fs = require("fs-extra");
const path = require("path");
const http = require("http");

const PORT = 1234;
const HOST = "127.0.0.1";
const DOCS_DIR = path.join(__dirname, "docs");

const MIME_TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".pptx": "application/vnd.openxmlformats-officedocument.presentationml.presentation",
  ".docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
};

const routes = [
  "/",
  "/about",
  "/sectors",
  "/knowledge",
  "/publications",
  "/technologies",
  "/projects",
  "/services",
  "/news",
  "/impact",
  "/contact",
];

/** Dev-server URLs must not be written into production HTML. */
function sanitizePrerenderedHtml(html) {
  return html.replace(/https?:\/\/(?:localhost|127\.0\.0\.1):1234\//g, "/");
}

function resolveFilePath(urlPath) {
  const cleanPath = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);

  if (cleanPath === "/" || cleanPath === "") {
    return path.join(DOCS_DIR, "index.html");
  }

  const directPath = path.join(DOCS_DIR, cleanPath);
  if (fs.existsSync(directPath) && fs.statSync(directPath).isFile()) {
    return directPath;
  }

  const indexPath = path.join(directPath, "index.html");
  if (fs.existsSync(indexPath)) {
    return indexPath;
  }

  return path.join(DOCS_DIR, "index.html");
}

function startStaticServer() {
  return new Promise((resolve) => {
    const server = http.createServer((req, res) => {
      const filePath = resolveFilePath(req.url || "/");

      if (!filePath.startsWith(DOCS_DIR)) {
        res.writeHead(403);
        res.end("Forbidden");
        return;
      }

      fs.readFile(filePath, (error, data) => {
        if (error) {
          res.writeHead(404);
          res.end("Not found");
          return;
        }

        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, { "Content-Type": MIME_TYPES[ext] || "application/octet-stream" });
        res.end(data);
      });
    });

    server.listen(PORT, HOST, () => resolve(server));
  });
}

(async () => {
  const server = await startStaticServer();
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    for (const route of routes) {
      const outputPath = path.join(
        DOCS_DIR,
        route === "/" ? "index.html" : `${route}/index.html`
      );
      const hashPath = route === "/" ? "/#/" : `/#${route}`;

      await page.goto(`http://${HOST}:${PORT}${hashPath}`, {
        waitUntil: "networkidle2",
      });

      const content = sanitizePrerenderedHtml(await page.content());
      await fs.outputFile(outputPath, content);
      console.log(`Pre-rendered: ${route}`);
    }
  } finally {
    await browser.close();
    server.close();
  }
})();
