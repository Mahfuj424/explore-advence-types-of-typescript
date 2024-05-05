{
  // promise

  interface GetTodo {
    userId: number ;
    id: number;
    title: string ;
    completed: boolean ;
  }

  const getTodo = async ():Promise<GetTodo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    return data
  };

  getTodo();

  type Something = { something: string };

  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something" };
      if (data) {
        resolve(data);
      } else {
        reject("no found data");
      }
    });
  };

  // calling createPromise function
  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();
    return data;
  };

  showData();
}
