{
  // Types
  // null and undefined are primitive types and can be used like other types, such as string.

  let value: string | undefined | null = null;
  console.log(typeof value);
  value = "hello";
  console.log(typeof value);
  value = undefined;
  console.log(typeof value);
}

{
  // Optional Chaining
  // Optional Chaining is a JavaScript feature that works well with TypeScript's null handling. It allows accessing properties on an object, that may or may not exist, with a compact syntax. It can be used with the ?. operator when accessing properties.

  interface House {
    sqft: number;
    yard?: {
      sqft: number;
    };
  }

  function printHouseYard(house: House) {
    const yardSize = house.yard?.sqft;
    if (yardSize === undefined) {
      console.log("no yard");
    } else {
      console.log(`Yard is ${yardSize} sqft`);
    }
  }

  let home: House = {
    sqft: 500,
    yard: {
      sqft: 500,
    },
  };

  printHouseYard(home);
}

{
  // Nullish Coalescence
  // Nullish Coalescence is another JavaScript feature that also works well with TypeScript's null handling. It allows writing expressions that have a fallback specifically when dealing with null or undefined. This is useful when other falsy values can occur in the expression but are still valid. It can be used with the ?? operator in an expression, similar to using the && operator.
  function printMileAge(mileage: number | null | undefined) {
    console.log(`Mileage:  ${mileage ?? "Not Available"}`);
  }

  printMileAge(null);
  printMileAge(0);
}

{
  // Null Assertion
  // TypeScript's inference system isn't perfect, there are times when it makes sense to ignore a value's possibility of being null or undefined. An easy way to do this is to use casting, but TypeScript also provides the ! operator as a convenient shortcut.

  function getValue(): string | undefined {
    return "hello";
  }

  let value = getValue();
  console.log("value length: " + value!.length);
}
