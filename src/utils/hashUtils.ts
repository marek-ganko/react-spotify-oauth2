export const getHashParams = () => {
  return window.location.hash
    .substring(1)
    .split('&')
    .reduce(function (initial: { [key: string]: string }, item: string) {
      if (item) {
        const parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
      }
      return initial;
    }, {});
};

export const removeHashParamsFromUrl = () => {
  window.history.pushState(
    '',
    document.title,
    window.location.pathname + window.location.search
  );
};
