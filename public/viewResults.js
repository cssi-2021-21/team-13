

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
  const historyRef = firebase.database().ref(`users/${userId}/history`);
  historyRef.on('value', (snapshot) => {
    const data = snapshot.val();
    renderDataAsHtml(data);
  });
};

const renderDataAsHtml = (data) => {
  let cards = ``;
  for (const historyItem in data) {
    const note = data[historyItem];
    // For each history create an HTML card
    cards += createCard(note, historyItem)
  };
  // Inject our string of HTML into our viewtotviewTotal.html page
  document.querySelector('#app').innerHTML = cards;
};




const createCard = (history, noteId) => {
  return `
    <div class="column is-one-quarter">
      <div class="card">
        <header class="card-header">
            <p class="card-header-title">${history.title}</p>
        </header>


        <div class="mytabs card-content">
            <input type="radio" id="tabShopping${noteId}" name="mytabs${noteId}" checked="checked">
            <label for="tabShopping${noteId}">Shopping</label>
            <div class="tab">
                <div class="card-content">
                    <div class="content">${history.clothing}</div>
                    </div>
                <div class="card-content">
                    <div class="content">${history.entertainment}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${history.household}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${history.personal}</div>
                </div>
                <div class="card-content">
                    <div class="content" style="text-align:left">${history.health}</div>
                </div>
            </div>
        
            <input type="radio" id="tabTravle${noteId}" name="mytabs${noteId}">
            <label for="tabTravle${noteId}">Travle</label>
            <div class="tab">
                <h2>Travle</h2>
                <p>Travle</p>
            </div>
        
            <input type="radio" id="tabFood${noteId}" name="mytabs${noteId}">
            <label for="tabFood${noteId}">Food</label>
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
    firebase.database().ref(`users/${googleUserId}/history/${noteId}`).remove()
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