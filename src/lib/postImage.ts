// Resolves a post's colocated header image (frontmatter `image` names a file
// in the post's own content folder). The glob is lazy on purpose: an eager
// glob would emit every image under content/news/ into dist/_astro whether a
// page uses it or not — with full-resolution Decap uploads that was ~200MB of
// dead weight per build. Only the matched file's module is ever imported.
import type { ImageMetadata } from 'astro';

const images = import.meta.glob<{ default: ImageMetadata }>(
  '/content/news/**/*.{jpg,jpeg,png,gif}'
);

export async function postImage(
  postId: string,
  filename: string | undefined
): Promise<ImageMetadata | undefined> {
  if (!filename) return undefined;
  const loader = images[`/content/news/${postId}/${filename}`];
  return loader ? (await loader()).default : undefined;
}
