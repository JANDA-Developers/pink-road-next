import sanitizeHtml from "sanitize-html";

export const clean = (dirty) => sanitizeHtml(dirty, {
    allowedTags: sanitizeHtml.defaults.allowedTags.concat([ 'img',"iframe" ])
  });
  