import createDiv from "./listCreation.js";

const generalList = document.getElementsByTagName("ul")[0];

const getSongs = async () => {
  const response = await fetch("https://itunes.apple.com/us/rss/topalbums/limit=100/json");

  if (response.status !== 200) {
    throw new Error("Data not received");
  }

  const data = await response.json();

  return data;

}

getSongs()
.then(
  data => {
    data.feed.entry.forEach((song) => {
      const songImage = song["im:image"][2].label;
      const artist = song["im:artist"].label;
      const songTitle = song["im:name"]["label"];
      const releaseDate = song["im:releaseDate"]["attributes"].label;
      const category = song["category"]["attributes"].term;
      const newListItem = createDiv(songImage, songTitle, artist, releaseDate, category);
      generalList.appendChild(newListItem);
    });
  }
)
.catch(
  err => console.log(err)
);
