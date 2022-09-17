console.log("Welcome to Notes App");
showNotes();

let addBtn = document.getElementById("addBtn");
addBtn.addEventListener("click", (e) => {
  let addText = document.getElementById("addText");
  let addTitle = document.getElementById("addTitle");
  let stgNotes = localStorage.getItem("stgNotes");
  if (stgNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(stgNotes);
  }
  notesObj.push({ title: addTitle.value, value: addText.value });
  addText.value = "";
  addTitle.value = "";
  localStorage.setItem("stgNotes", JSON.stringify(notesObj));
  showNotes();
});

function showNotes() {
  let stgNotes = localStorage.getItem("stgNotes");
  if (stgNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(stgNotes);
  }
  let html = "";
  Array.from(notesObj).forEach((element, index) => {
    html += `<div class="notes card m-2" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title"> ${element.title}</h5>
        <p class="card-text">
            ${element.value} 
        </p>
        <button onclick=deleteNote(${index}) type="button" class="btn btn-danger">Danger</button>
      </div>
    </div>`;
  });
  let notesCtn = document.getElementById("notesCtn");
  if (notesObj.length != 0) notesCtn.innerHTML = html;
  else {
    notesCtn.innerHTML = "Nothing to show";
  }
}

function deleteNote(index) {
  let stgNotes = localStorage.getItem("stgNotes");
  if (stgNotes == null) {
    notesObj = [];
  } else {
    notesObj = JSON.parse(stgNotes);
  }
  let notesCtn = document.getElementById("notesCtn");
  notesObj.splice(index, 1);
  localStorage.setItem("stgNotes", JSON.stringify(notesObj));
  showNotes();
}

let searchInput = document.getElementById("searchinput");
searchInput.addEventListener("input", () => {
  let notes = document.getElementsByClassName("notes");
  Array.from(notes).forEach((elem) => {
    let cardtext = elem.getElementsByTagName("p")[0].innerText;
    if (cardtext.includes(searchInput.value)) {
      elem.style.display = "block";
    } else {
      elem.style.display = "none";
    }
  });
});
