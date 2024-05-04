{
    //
    //  type assertion
    let anything: any;
  
    anything = "next level web development";
  
    anything = 222;
  
    anything as number;
  
    const kgToGm = (value: string | number): string | number | undefined => {
      if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `the converted value is ${convertedValue}`;
      } else if (typeof value === "number") {
        const convertedValue = value * 1000;
        return convertedValue;
      }
    };
  
    const result1 = kgToGm(10) as number;
    const result2 = kgToGm("1000") as string;
    console.log(result1);
  
    type CustomError = {
      message: String;
    };
  
    try {
    } catch (err) {
      console.log((err as CustomError).message);
    }
    console.log('mahfuj');
  
    //
  }
  