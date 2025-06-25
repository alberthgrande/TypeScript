// keyof with explicit keys
// When used on an object type with explicit keys, keyof creates a union type with those keys.
{
  interface Person {
    name: string;
    age: number;
  }

  function printPersonProperty(person: Person, property: keyof Person) {
    console.log(`Printing person property ${property}: "${person[property]}"`);
  }

  const person = {
    name: "Alberth",
    age: 26,
  };

  printPersonProperty(person, "name");
}

// keyof with index signatures
// keyof can also be used with index signatures to extract the index type.
{
  type StringMap = { [key: string]: unknown };

  function createStringPair(
    property: keyof StringMap,
    value: string
  ): StringMap {
    return { [property]: value };
  }

  const result = createStringPair("name", "Alberth");
  console.log(result);
}
