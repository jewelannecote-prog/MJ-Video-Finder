const videos = [
  {
    title: "Michael Jackson — Emotional Moments",
    description: "Beautiful and emotional Michael Jackson moments.",
    search: "Michael Jackson emotional moments"
  },
  {
    title: "Michael Jackson — Funny Moments",
    description: "Funny and playful Michael Jackson moments.",
    search: "Michael Jackson funny moments"
  },
  {
    title: "Michael Jackson — Live Performances",
    description: "Amazing Michael Jackson live performances.",
    search: "Michael Jackson live performance"
  },
  {
    title: "Michael Jackson — Interviews",
    description: "Interesting Michael Jackson interviews and conversations.",
    search: "Michael Jackson interview"
  }
];

function findVideos() {
  const category = document.getElementById("category").value;
  const results = document.getElementById("results");

  results.innerHTML = "";

  let filteredVideos = videos;

  if (category !== "all") {
    filteredVideos = videos.filter(video =>
      video.title.toLowerCase().includes(category)
    );
  }

  filteredVideos.forEach(video => {
    const box = document.createElement("div");
    box.className = "video";

    box.innerHTML = `
      <h2>${video.title}</h2>
      <p>${video.description}</p>
      <a href="https://www.youtube.com/results?search_query=${encodeURIComponent(video.search)}"
         target="_blank">
         Search YouTube
      </a>
    `;

    results.appendChild(box);
  });
}
