type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

function calculateShapeArea(shape: Shape): number | string {
  if (shape.shape === "circle") {
    const result = Math.PI * shape.radius * shape.radius;
    return result.toFixed(2);
  } else if (shape.shape === "rectangle") {
    const result = shape.width * shape.height;
    return result;
  }
  return "This shape doesn't exist in the function";
}

console.log(calculateShapeArea({ shape: "circle", radius: 5 }));
console.log(
  calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  })
);