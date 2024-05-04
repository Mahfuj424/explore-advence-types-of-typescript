{
  // generic type

  type GenericType<T> = Array<T>;

  // const rollNum : number[]= [1,2,3]
  const rollNum: GenericType<number> = [1, 2, 3];
  const students: GenericType<string> = ["mahfuj", "abdullah"];
  const booleanArr: GenericType<boolean> = [true, false, true];

  const user: GenericType<{ name: string; age: number }> = [
    {
      name: "mahfuj",
      age: 20,
    },
    {
      name: "abdullah",
      age: 20,
    },
  ];

  //   tuple Generic type

  type GenericTuple<X, Y> = [X, Y];
  const manush: GenericTuple<number, string> = [1, "nothing"];
}
