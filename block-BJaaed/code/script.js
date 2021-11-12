let ul = document.querySelector("ul");

bookly.books.forEach((book) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = book.image;
  let h2 = document.createElement("h2");
  h2.innerText = book.title;
  let span = document.createElement("span");
  span.innerText = `Author: ${book.author}`;
  let btn = document.createElement("button");
  btn.innerText = "Buy Now";

  li.append(img, h2, span, btn);
  ul.append(li);
});
