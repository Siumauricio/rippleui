export const titleToSlug = (title: string) => {
   return title.replace(/\s/g, '-').toLowerCase();
};
