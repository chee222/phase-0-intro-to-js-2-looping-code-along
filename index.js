function writeCards(names, occasion) {
  let messages = [];

  let message1 = `Thank you, ${names[0]}, for the wonderful ${occasion} gift!`;
  let message2 = `Thank you, ${names[1]}, for the wonderful ${occasion} gift!`;
  let message3 = `Thank you, ${names[2]}, for the wonderful ${occasion} gift!`;

  messages.push(message1);
  messages.push(message2);
  messages.push(message3);

  return messages;
}

let Messages = writeCards(["Guadalupe", "Ollie", "Aki"], "surprise");
console.log(Messages);

function countDown(num) {
  for (let i = num; i >= 0; i--) {
    console.log(i);
  }
}

countDown(10);
expect(spy.callCount).to.equal(11);
  expect(spy.getCall(0).args[0]).to.equal(10);
  expect(spy.getCall(1).args[0]).to.equal(9);
  expect(spy.getCall(2).args[0]).to.equal(8);
  expect(spy.getCall(3).args[0]).to.equal(7);
  expect(spy.getCall(4).args[0]).to.equal(6);
  expect(spy.getCall(5).args[0]).to.equal(5);
  expect(spy.getCall(6).args[0]).to.equal(4);
  expect(spy.getCall(7).args[0]).to.equal(3);
  expect(spy.getCall(8).args[0]).to.equal(2);
  expect(spy.getCall(9).args[0]).to.equal(1);
  expect(spy.getCall(10).args[0]).to.equal(0);

  spy.restore();
