{
  // utility types
  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: number;
    address: string;
  };
  // pick
  type Name = Pick<Person, "name" | "age">;

  //   Omit
  type ContactInfo = Omit<Person, "name" | "age">;

  //   Required
  type personRequired = Required<Person>;

  //   partial
  type personPartial = Partial<Person>;

  //   Readonly

  type ReadonlyPerson = Readonly<Person>;

  const readonly: ReadonlyPerson = {
    name: "mahfuj",
    age: 20,
    email: "mahfujahmed424@gmail.com",
    contactNo: 305475325,
    address: "nothing",
  };

  // const result = (readonly.address = "something");

  // record
  //   type MyObj = {
  //     a: string;
  //     b: string;
  //   };

  type MyObj = Record<string, string>;

  const EmptyObj: Record<string, unknown> = {};

  const myObj: MyObj = {
    a: "aa",
    b: "bb",
    c: "",
    d: "",
  };

  //
}
