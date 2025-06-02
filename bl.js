document.addEventListener("DOMContentLoaded", function () {
  let pageUrl = window.location.href;
  let title = document.title.trim();
  if (!title) {
    let metaTitle = document.querySelector('meta[property="og:title"], meta[name="twitter:title"], meta[name="title"]');
    title = metaTitle ? metaTitle.getAttribute("content") : pageUrl;
  }

  let baseApi = window.BZONE_API_ENDPOINT || (location.origin.includes('blogspot.com') ? 'https://code.helonheels.com' : location.origin);

  fetch(baseApi + "/api/bl", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ url: pageUrl, title })
  }).then(res => res.json())
    .then(data => console.log("BL Response:", data))
    .catch(err => console.error("BL Error:", err));
});
