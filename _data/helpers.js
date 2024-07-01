module.exports = {
  getLinkActiveState(itemUrl, pageUrl) {
    let response = "";

    if (itemUrl === pageUrl) {
      response = 'class="nav-link link-secondary active fw-bold" aria-current="page"';
    } else {
      response = 'class="nav-link link-secondary"';
    }

    return response;
  },
};
