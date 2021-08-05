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

const handleNoteSubmit = () => {
  // 1. Capture the form data
  const shopClothing = document.querySelector('#clothing');
  const shopEntertainment = document.querySelector('#entertainment');
  const shopHousehold = document.querySelector('#household');
  const shopPersonal = document.querySelector('#personal');
  const shopHealth = document.querySelector('#health');

  // 2. Format the data and write it to our database
  firebase.database().ref(`users/${googleUser.uid}/history`).push({
    clothing: shopClothing.value,
    entertainment: shopEntertainment.value,
    household: shopHousehold.value,
    personal: shopPersonal.value,
    health: shopPersonal.value

  })
  // 3. Clear the form so that we can write a new note
  .then(() => {
    shopClothing.value = "";
    shopEntertainment.value = "";
    shopHousehold.value = "";
    shopPersonal.value ="";
    shopHealth.value =""
  });
}