// Word-truncated HTML excerpts. Truncation can cut inside tags and leave
// formatting elements (<em>, <i>...) unclosed, which HTML parsing then leaks
// into everything after the excerpt (this italicized the site footer).
// The Gatsby site avoided that by running truncated strings through
// sanitize-html, which auto-balances tags — do exactly the same at build time.
import sanitizeHtml from 'sanitize-html';

export function excerptHtml(html: string, words: number, stripLinks = false): string {
  const opts = stripLinks
    ? { exclusiveFilter: (frame: { tag: string }) => frame.tag === 'a', textFilter: undefined }
    : {};
  const truncated = html.split(' ').slice(0, words).join(' ') + '...';
  return sanitizeHtml(truncated, {
    ...opts,
    allowedTags: stripLinks
      ? sanitizeHtml.defaults.allowedTags.filter((t: string) => t !== 'a')
      : sanitizeHtml.defaults.allowedTags,
  });
}

export { sanitizeHtml };
