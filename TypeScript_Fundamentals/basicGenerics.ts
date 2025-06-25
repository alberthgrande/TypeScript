function createPair<S, T>(v1: S, v2: T): [S, T] {
  return [v1, v2];
}

console.log(createPair<string, number>("Hello", 26));

// Classes
{
  class NamedValue<T> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  const value = new NamedValue<number>("Value");
  value.setValue(26);
  console.log(value.toString());
  console.log(value.getValue());
}

// Type Aliases
{
  type Wrapped<T> = { value: T };
  const wrappedValue: Wrapped<number> = { value: 10 };
  console.log(wrappedValue);
}

// Default Value
{
  class NamedValue<T = string> {
    private _value: T | undefined;

    constructor(private name: string) {}

    public setValue(value: T) {
      this._value = value;
    }

    public getValue(): T | undefined {
      return this._value;
    }

    public toString(): string {
      return `${this.name}: ${this._value}`;
    }
  }

  const nameValue = new NamedValue("Value: ");
  nameValue.setValue("nameValue");
  console.log(nameValue.toString());
}

// Extends
{
  function createLoggedPair<
    S extends string | number,
    T extends string | number
  >(v1: S, v2: T): [S, T] {
    console.log(`creating pair: v1='${v1}', v2='${v2}'`);

    return [v1, v2];
  }

  console.log(createLoggedPair("Alberth", 26));
}
