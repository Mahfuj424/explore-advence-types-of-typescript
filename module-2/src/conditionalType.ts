{
// conditional type 
type a1 = number;
type b1 = string;

type X = a1 extends null ? true : false;
type Y = a1 extends null ? true : b1 extends undefined ? undefined : any


interface Sheikh{
    bike: string ;
    car: string ;
    ship : string ;
}

type CheckProperty<T> = T extends keyof Sheikh ? true : false

type HasBike = CheckProperty<'bike'>

}