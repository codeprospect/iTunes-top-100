const createDiv = (songImage, songTitle, artist, releaseDate, category) => {
  // creating the image
  const image = document.createElement("img");
  image.setAttribute("src", songImage);

  //creating the details div
  const details = document.createElement("div");
  details.classList.add("details");

  //creating the list inside the details div
  details.appendChild(listcreated(songTitle, artist, releaseDate, category))

  // creating the list tags containing everything
  const list = document.createElement("li");

  // appending the img and details
  list.appendChild(image);
  list.appendChild(details);
  return list;

};


// function to create the list details
const listcreated = (songTitle, artist, releaseDate, category) => {
  const values = [songTitle, artist, releaseDate, category]
  const list = document.createElement("ul");
  for (let i = 0; i < values.length; i++) {
    const listItem = document.createElement("li");

    if (i == 0) {
      listItem.classList.add("song-title");
      listItem.textContent = values[i];
    } else if (values[i] == artist) {
      listItem.textContent = `Artist: ${values[i]}`;
    } else if (values[i] == releaseDate) {
      listItem.textContent = `Release Date: ${values[i]}`;
    } else {
      listItem.classList.add("genre");
      listItem.textContent = `Genre: ${values[i]}`;
    }
    list.appendChild(listItem);
  }
  return list;
}

export default createDiv;
