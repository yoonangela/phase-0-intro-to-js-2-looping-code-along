const cards = [["Guadalupe", "Ollie", "Aki"], "surprise"];
function writeCards() {
  let messages = [];
  for (let i = 0; i < cards[0].length; i++) {
    messages.push(`Thank you, ${cards[0][i]}, for the wonderful ${cards[1]} gift!`);;
  }
  return messages;
  
}

console.log(writeCards());

function countDown(number) {

    while (number>0) {
        console.log(number);
        number = number - 1;
    }
    console.log(number);
  }

countDown(10);