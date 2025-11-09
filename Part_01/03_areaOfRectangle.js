// Problem Statement: Write a function which calculates and print the area of rectangle given their length & width.

function areaOfRectangle(len, wid) {
  if (len <= 0 || wid <= 0) {
    throw new RangeError("Length or Width cannot be zero or negative");
  }
  const area = len * wid;
  console.log(area);
}

areaOfRectangle(10, 20);
areaOfRectangle(350, 2000);
areaOfRectangle(-200, 2000);
