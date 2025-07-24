document.addEventListener("DOMContentLoaded", () => {
  const title = document.getElementsByClassName("video-title")[0];
  const channel = document.getElementsByClassName("channel-name")[0];
  const view = document.getElementsByClassName("view-count")[0];
  const uploadtime = document.getElementsByClassName("upload-time")[0];
  const duration = document.getElementsByClassName("duration")[0];
  const image = document.getElementById("image");

  function createCard(head, cName, views, monthsOld, durations, thumbnail) {
    title.textContent = head;
    channel.textContent = cName;
    if (views < 10000) {
      view.textContent = views;
    } else if (views < 100000) {
      let number = views.toString().slice(0, 2);
      view.textContent = `${number}k`;
    } else if (1000000 > views > 100000) {
      let number = views.toString().slice(0, 2);
      view.textContent = `${number}k`;
    } else if (10000000 > views > 1000000) {
      let number = views.toString().slice(0, 1);
      view.textContent = `${number}M`;
    } else if (100000000 > views > 10000000) {
      let number = views.toString().slice(0, 3);
      view.textContent = `${number}M`;
    } else if (views > 100000000) {
      let number = views.toString().slice(0, 3);
      view.textContent = `${number}B`;
    }

    uploadtime.textContent = `${monthsOld} months ago`;
    duration.textContent = durations;
    image.src = thumbnail;
  }
  createCard(
    "Introduction to Backend | Sigma Web Dev video #2",
    "CodeWithHarry",
    56000000,
    7,
    "31:22",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw"
  );
});
