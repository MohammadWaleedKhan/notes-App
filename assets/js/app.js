

let addBtn = document.getElementById("add-btn");
showNotes();
addBtn.addEventListener("click", function(e) {
    let addText = document.getElementById("addtxt");
    let notes = localStorage.getItem("notes");

    if(notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.push(addText.value);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    addText.value = "";

    console.log(notesObj);
    showNotes();
})

function showNotes() {
    let notes = localStorage.getItem("notes");
    if(notes ==  null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    let html = "";
    notesObj.forEach(function(element, index) {
        html += `
            <div class="notecard card mx-4 my-3" style="width: 16rem;">
                <div class="card-body">
                    <h5 class="card-title">Notes ${index + 1}</h5>
                    <p class="card-text">${element}</p>
                    <button id = "${index}" onclick = "deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>`;
    });

    let notesElement  = document.getElementById("notes");
    if(notesObj.length != 0){
        notesElement.innerHTML = html;
    }
    else{
        notesElement.innerHTML = `Nothing to show! Use Add Note.`;
    }
}

function deleteNotes(index) {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesObj = [];
    }
    else{
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index, 1);
    localStorage.setItem("notes", JSON.stringify(notesObj));
    showNotes();

}

let search = document.getElementById("search-text");
search.addEventListener("input", function() {
    let inputVal = search.value.toLowerCase();
    let noteCard = document.getElementsByClassName('notecard');
    Array.from(noteCard).forEach(function (element) {
        let cardText = element.getElementsByTagName("p")[0].innerHTML;
        if(cardText.includes(inputVal)) {
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })
})

























