let googleUserId;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUserId = user.uid;
      getData(googleUserId);
    } else {
      // If not logged in, navigate back to login page.
      window.location = 'index.html';
    };
  });
};

const getData = (userId) => {
  const notesRef = firebase.database().ref(`users/${userId}/history`);
  notesRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
  let cards = ``;
  for (const noteItem in data) {
    const note = data[noteItem];
    // For each note create an HTML card
    cards += createCard(note, noteItem)
  };
  // Inject our string of HTML into our viewNotes.html page
  document.querySelector('#app').innerHTML = cards;
};

const createCard = (note, noteId) => {
  return `
    <div class="column is-one-quarter">
      <div class="card">
        <header class="card-header">
            <p class="card-header-title">${note.title}</p>
        </header>


        <div class="mytabs card-content">
            <input type="radio" id="tabShopping" name="mytabs" checked="checked">
            <label for="tabShopping">Shopping</label>
            <div class="tab">
                <div class="card-content">
                    <div class="content">${note.clothing}</div>
                    </div>
                <div class="card-content">
                    <div class="content">${note.entertainment}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${note.household}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${note.personal}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${note.health}</div>
                </div>
            </div>
        
            <input type="radio" id="tabTravle" name="mytabs">
            <label for="tabTravle">Travle</label>
            <div class="tab">
                <h2>Travle</h2>
                <p>Travle</p>
            </div>
        
            <input type="radio" id="tabFood" name="mytabs">
            <label for="tabFood">Food</label>
            <div class="tab">
                <h2>Food</h2>
                <p>Food</p>
            </div>
        
        </div>
        <footer class="card-footer">
            <a href="#" class="card-footer-item" onclick="editNote('${noteId}')">
                Edit
            </a>
            <a href="#" class="card-footer-item" onclick="deleteNote('${noteId}')">
                Delete
            </a>
        
        </footer>
      </div>
    </div>
  `;
}

const deleteNote = (noteId) => {
    alert("are you sure!")
    firebase.database().ref(`users/${googleUserId}/${noteId}`).remove()
}

// const editNote = (noteId) => {
//     const editNoteModal = document.querySelector('#editNoteModal')
//     const notesRef = firebase.database().ref(`users/${googleUserId}`)
//     notesRef.on('value', (snapshot) => {
//         const data = snapshot.val()
//         const note = data[noteId]
//         document.querySelector('#editTitleInput').value = note.title;
//         document.querySelector('#editTextInput').value = note.text;
//         document.querySelector('#editDateInput').value = note.date;
//         document.querySelector('#editNoteId').value = noteId;
//     })
    

//     editNoteModal.classList.toggle('is-active')
// }

// const closeEditModal = () =>{
//     const editNoteModal = document.querySelector('#editNoteModal')
//     editNoteModal.classList.toggle('is-active')
// }

// const saveEditedNote = () => {
//     const noteTitle = document.querySelector("#editTitleInput").value
//     const noteText = document.querySelector("#editTextInput").value
//     const noteDate = document.querySelector("#editDateInput").value
//     const noteId = document.querySelector("#editNoteId").value
//     const noteEdits = {
//         title: noteTitle,
//         text: noteText,
//         date: noteDate
//     }
//     firebase.database().ref(`users/${googleUserId}/${noteId}`).update(noteEdits)
//     closeEditModal()
// }