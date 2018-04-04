var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  let currentCustomer = katzDeli.shift();
  if (currentCustomer === 'undefined') {
    return 'There is nobody waiting to be served!';
  } else {
    return `Currently serving ${currentCustomer}.`;
  }
}
