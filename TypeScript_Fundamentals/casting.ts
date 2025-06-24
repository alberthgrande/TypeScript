// Casting with as
{
  let x: unknown = "hello";
  console.log((x as string).length);
}

// Casting with <>
{
  let x: unknown = "hello";
  console.log((<string>x).length);
}

// Force casting
{
  let x = "hello";
  console.log((x as unknown as number).length);
}
