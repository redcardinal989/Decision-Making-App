let cardist;

fetch("card_data.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    // handle ten random cards
    cardList = data;
    console.log(cardList);
    //generate random number with js math.random
    // using random number, get a random card from the list onto the screen in card div
  })
  .catch(function (error) {
    // handle what went wrong
  });
   //https://codepen.io/simeydotme/pen/abYWJdX