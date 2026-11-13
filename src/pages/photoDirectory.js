// src/pages/photoDirectory.js
// Lists the photos in a folder under public/images/past-events/, so a page can
// show every photo dropped into that folder without each one being typed out.
// Used by the archive pages and the mini-event page.

// Path keys only: files in /public are served from the site root, not imported.
const PAST_EVENT_PHOTO_PATHS = Object.keys(
  import.meta.glob('/public/images/past-events/**/*.{png,jpg,jpeg,webp,avif,gif,PNG,JPG,JPEG,WEBP,AVIF,GIF}')
);

const getFilename = (path) => path.split('/').pop() || '';

// "groupPhoto.JPG" -> "groupphoto"
export const getPhotoKey = (path) =>
  getFilename(path)
    .replace(/\.[^.]+$/, '')
    .toLowerCase();

// Returns the site URLs of the photos in `directory`
// (for example '/public/images/past-events/hackaturi2026').
// Files named in `order` come first, in that order; the rest follow by name.
export const getPhotosFromDirectory = (directory = '', order = []) => {
  const trimmed = directory.trim();
  if (!trimmed) return [];
  const prefix = `${trimmed.startsWith('/') ? '' : '/'}${trimmed}${trimmed.endsWith('/') ? '' : '/'}`;

  const files = PAST_EVENT_PHOTO_PATHS.filter((path) => path.startsWith(prefix)).sort((a, b) =>
    a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' })
  );

  const rank = (path) => {
    const index = order.findIndex((name) => getPhotoKey(String(name)) === getPhotoKey(path));
    return index === -1 ? order.length : index;
  };

  return files
    .map((path, index) => ({ path, index }))
    .sort((a, b) => rank(a.path) - rank(b.path) || a.index - b.index)
    .map(({ path }) => path.replace(/^\/public/, ''));
};
