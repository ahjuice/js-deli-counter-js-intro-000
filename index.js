var katzDeli = []

function takeANumber(katzDeliLine, name) {
  katzDeliLine.push(name);
  return `Welcome, ${name}. You are number ${katzDeliLine.length} in line.`;
}

function nowServing() {
  if (katzDeli.length < 1) {
    return "There is nobody waiting to be served!";
  } else {
    let currentCustomer = katzDeli.shift();
    return `Currently serving ${currentCustomer}.`;
  }
}
