let body = document.querySelector("body");

let div = document.createElement("div");
div.classList.add("bimage", "d-flex", "flex-column", "justify-content-center");
div.style.backgroundImage="url('https://i.pinimg.com/originals/aa/59/d1/aa59d139b93dde70ff207187c9f1d8bd.gif')";
div.style.backgroundSize="cover";
div.style.height="700px";
div.style.width="700px"
div.style.padding="30px";
div.style.borderColor="#48ee59";
div.style.borderWidth="5px";
div.style.borderStyle="solid";
body.appendChild(div);

let heading = document.createElement("h1");
heading.classList.add("top");
heading.textContent="Code is more than some bytes";
heading.style.color="white";
heading.style.fontFamily="'Bree Serif', serif";
heading.style.backgroundColor="#00000080";
heading.style.padding="15px";
heading.style.fontSize="30px";
div.appendChild(heading);