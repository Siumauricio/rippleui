export const URL_WEB =
  process.env.NODE_ENV === "production"
    ? process.env.SITE_URL
    : "http://localhost:3000";
