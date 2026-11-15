// Metadata Extractor — ARCVN.DEV
// This snippet parses HTML supplied by the user. Fetching remote pages requires CORS permission
// from the target server or a backend you control. Only inspect content you are authorized to access.
async function runScraper(source, selector='*') {
  const doc = new DOMParser().parseFromString(source, 'text/html');
  const nodes = [...doc.querySelectorAll(selector)];
  return nodes.map(el => ({ tag: el.tagName.toLowerCase(), text: el.textContent.trim(), html: el.outerHTML }));
}
