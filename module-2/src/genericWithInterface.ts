{
  // Generic with interface
  interface Developer<T, X> {
    name: string;
    computer: {
      brand: string;
      model: string;
      processor: string;
    };
    mouse: string;
    keyBoard: T;
    lifeChill?: X;
  }

  interface KeyBoardInfo {
    brand: string;
    model: string;
  }

  interface LifeChill {
    chill: boolean;
  }

  const poorDeveloper: Developer<string, LifeChill> = {
    name: "mahfuj",
    computer: {
      brand: "Dell",
      model: "3511",
      processor: "core i5",
    },
    mouse: "A4 tech",
    keyBoard: "",
    lifeChill: {
      chill: false,
    },
  };
  const richDeveloper: Developer<KeyBoardInfo, LifeChill> = {
    name: "mahfuj",
    computer: {
      brand: "Dell",
      model: "3511",
      processor: "core i5",
    },
    mouse: "A4 tech",
    keyBoard: {
      brand: "mechanical",
      model: "RK R75",
    },
  };

  //
}
