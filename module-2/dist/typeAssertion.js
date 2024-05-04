"use strict";
{
    //
    //  type assertion
    let anything;
    anything = "next level web development";
    anything = 222;
    anything;
    const kgToGm = (value) => {
        if (typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return `the converted value is ${convertedValue}`;
        }
        else if (typeof value === "number") {
            const convertedValue = value * 1000;
            return convertedValue;
        }
    };
    const result1 = kgToGm(10);
    const result2 = kgToGm("1000");
    console.log(result1);
    try {
    }
    catch (err) {
        console.log(err.message);
    }
    console.log('mahfuj');
    //
}
