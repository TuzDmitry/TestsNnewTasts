export type GovernmentBuildingType = {
    type: 'Hospital' | 'Firestation'
    budget: number
    staffCount: number
    address: AddressType
}

export type StreetTitleType = {
    title: string
}

export type AddressType = {
    number?: number
    street: StreetTitleType
}

export type HouseType = {
    id: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GovernmentBuildingType>
    citizensNumber: number
}


// const student={
//     name:"Dima",
//     age: 25,
// }

export type CourseType = {
    title: string
    price: number
}

export type StudentType = {
    name: string
    age: number
}

export type DeveloperType = {
    stack: Array<string>
    firstName: string
    lastName: string
}