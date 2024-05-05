{
// maped type

const arrOfNumber: number[] = [2, 3,4]

const convertStringArr = arrOfNumber.map(number=> number.toString())
console.log(convertStringArr);


type AreaNumber = {
    height: number;
    width: number ;
}

type result = AreaNumber['height'] // look up type
type Area = {
    height: string ;
    width: number ;
}

type AreaString<T> ={
    [index in keyof T] : T[index] 
}

const area1: AreaString<Area> = {
    height: '100',
    width: 50
}



}