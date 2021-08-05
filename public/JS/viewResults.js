

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
    <div class="column is-one-third">
      <div class="card">
        <header class="card-header">
            <p class="card-header-title">${history.meta.date}</p>
        </header>


        <div class="mytabs card-content">
            <input type="radio" id="tabShopping${noteId}" name="mytabs${noteId}">
            <label for="tabShopping${noteId}">Shopping</label>
            <div class="tab">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Clothing:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.shopping.clothing}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Furniture & Appliances: </p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.shopping.furniture}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Entertainment: </p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.shopping.entertainment}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Office, Paper, & Reading: </p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.shopping.office}</div>
                        </div>
                    </div>
                </div>
            </div>
        



            <input type="radio" id="tabTravle${noteId}" name="mytabs${noteId}">
            <label for="tabTravle${noteId}">Travle</label>
            <div class="tab">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Fuel Used:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.energy.fuel}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Air Travel: </p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.energy.air}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Electricity: </p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.energy.electricity}</div>
                        </div>
                    </div>
                </div>
            </div>
        




            <input type="radio" id="tabFood${noteId}" name="mytabs${noteId}">
            <label for="tabFood${noteId}">Food</label>
            <div class="tab">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Meat, Fish, Eggs:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.food.meat}</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Dairy:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.food.dairy}</div>
                        </div>
                    </div>
                </div>

                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Grains & Baked Goods:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.food.grains}</div>
                        </div>
                    </div>
                </div>

                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Fruits & Vegetables:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.food.fruits}</div>
                        </div>
                    </div>
                </div>

                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Snacks, Drinks, Etc...</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum">${history.food.snacks}</div>                        
                        </div>
                    </div>
                </div>
            </div>

            


            <input type="radio" id="tabTotal${noteId}" name="mytabs${noteId}" checked="checked">
            <label for="tabTotal${noteId}">Total</label>
            <div class="tab">
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Shopping:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum" id="shoppingTotal">0</div>
                        </div>
                    </div>
                </div>
                
                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Energy:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum" id="energyTotal">0</div>
                        </div>
                    </div>
                </div>

                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Food:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum" id="foodTotal">0</div>
                        </div>
                    </div>
                </div>

                <div class="level">
                    <div class="level-left">
                        <div class="level-item">
                            <p>Total:</p>
                        </div>
                    </div>
                    <div class="level-right">
                        <div class="level-item">
                            <div class="displayNum" id="total">0</div>
                        </div>
                    </div>
                </div>
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