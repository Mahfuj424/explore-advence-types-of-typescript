{
  // interface or alias

  // this is aliases type
  type UserWithRole = User1 & { role: string };
  type User1 = {
    name: string;
    roll: number;
  };

  const user1: UserWithRole = {
    name: "mahfuj",
    roll: 13,
    role: "student",
  };

  // interface

  interface UserWithRole2 extends User2 {
    role: string;
  }

  interface User2 {
    name: string;
    age: number;
  }

  const user2: UserWithRole2 = {
    name: "mahfuj",
    age: 20,
    role: "student",
  };

  //   array with aliases
  type Roll1 = number[];

  const roll1: Roll1 = [1, 2, 3];

  // array with interface
  interface Roll2 {
    [index: number]: number;
  }
  const roll2: Roll2 = [1, 2, 3];

  //   function with aliases

  type Add1 = (num1: number, num2: number) => number;

  const add1: Add1 = (num1, num2) => num1 + num2;

  //   function with interface
  interface Add2 {
    (num1: number, num2: number): number;
  }

  const add2: Add2 = (num1, num2) => num1 + num2;
}
