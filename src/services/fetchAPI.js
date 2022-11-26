export const fetchAPI = (url) => {
  return fetch(`https://api.shrtco.de/v2/shorten?url=${url}.html`);
};
