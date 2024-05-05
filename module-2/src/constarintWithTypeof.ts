{
// generic constraint with typeof

type Vehicle={
    bike:string ;
    car: string ;
    ship: string ;
}

// const Owner = "bike" | 'car' | 'ship';

type Owner = keyof Vehicle;


const getPropertyValue =<X, Y extends keyof X>(obj: X, key: Y )=>{
    return obj[key]
}

const user ={
    name: 'Mahfuj',
    age:20,
    address: 'sunamganj'
}


const result1 = getPropertyValue(user, "address")



}