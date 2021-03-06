let googleUser;

window.onload = (event) => {
  // Use this to retain user state between html pages.
  firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
      console.log('Logged in as: ' + user.displayName);
      googleUser = user;
    } else {
      window.location = 'index.html'; // If not logged in, navigate back to login page.
    }
  });
};

const handleHistorySubmit = () => {

  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}/history`).push({
    
    shopping: {
        clothing: document.querySelector('#clothing').value,
        entertainment: document.querySelector('#entertainment').value,
        furniture: document.querySelector('#furniture').value,
        office: document.querySelector('#office').value,
    },

    energy: {
        fuel: document.querySelector('#fuel').value,
        air: document.querySelector('#air').value,
        electricity: document.querySelector('#electricity').value,
    },

    food: {
        meat: document.querySelector('#meat').value,
        dairy: document.querySelector('#dairy').value,
        grains: document.querySelector('#grains').value,
        fruits: document.querySelector('#fruits').value,
        snacks: document.querySelector('#snacks').value,
    },

    meta:
    {
        date: document.querySelector('#date').value,
        shoppingTotal: document.querySelector('#shoppingTotal').innerHTML,
        energyTotal: document.querySelector('#energyTotal').innerHTML,
        foodTotal: document.querySelector('#foodTotal').innerHTML,
        total: document.querySelector('#total').innerHTML,
    }

  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    document.querySelectorAll('.allInputFields').forEach( (field) => {
        field.value = ''
    })
  });
}