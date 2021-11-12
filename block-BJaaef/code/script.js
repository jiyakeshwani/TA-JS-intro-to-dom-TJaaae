let ul = document.querySelector("ul");

got.houses.forEach((people) => {
  let li = document.createElement("li");
  let img = document.createElement("img");
  img.src = people.image;
  let h2 = document.createElement("h2");
  h2.innerText = people.name;
  let para = document.createElement("p");
  para.innerText = people.description;
  let btn = document.createElement("button");
  btn.innerText = "Learn More!";

  li.append(img, h2, para, btn);
  ul.append(li);
});
