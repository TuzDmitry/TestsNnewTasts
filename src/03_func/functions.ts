import {CityType, DeveloperType, GovernmentBuildingType, HouseType, StudentType} from "../02/types";

export function addMoneyToBudget(building: GovernmentBuildingType, cost: number) {
    building.budget += cost
}


export function repairHouse(house: HouseType) {
    house.repaired = true
}

export function toFireStaff(building: GovernmentBuildingType, delStaffCount: number) {
    building.staffCount -= delStaffCount
}

export const toHireStaff = (building: GovernmentBuildingType, hireStaffCount: number) => {
    building.staffCount += hireStaffCount
}

export const destroy = (city: CityType, nameStreet: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== nameStreet)
}

export function getListsOfTitleBuildings(governmentBuildings: Array<GovernmentBuildingType>) {
    return governmentBuildings.map(item => item.address.street.title)
}

export function getStaffCount(governmentBuildings: Array<GovernmentBuildingType>, needCount: number) {
    return governmentBuildings.filter(item => item.staffCount > needCount)
}

export function makeDevelopers(students: Array<StudentType>) {
    return students.map((student: StudentType) => ({
        stack: ['js', 'react', 'angular'],
        firstName: student.name.split(" ")[0],
        lastName: student.name.split(" ")[1]
    })
)
}

export function getListsOfTitleHouses(houses: Array<HouseType>) {
return houses.map(house=>house.address.street.title)
}

export function callToTheVote(houses: Array<HouseType>, kandidat: string) {
return houses.map(house=>("Hello citizens from "+house.address.street.title+"! We offer you" +
    " to vote fo the "+ kandidat))
}