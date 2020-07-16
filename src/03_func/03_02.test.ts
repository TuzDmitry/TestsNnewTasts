import {AddressType, CityType} from "../02/types";
import {
    addMoneyToBudget,
    destroy,
    getListsOfTitleBuildings, getListsOfTitleHouses,
    getStaffCount,
    repairHouse,
    toFireStaff,
    toHireStaff,
    callToTheVote
} from "./functions";

let city: CityType

beforeEach(() => {
    city = {
        title: 'NY',
        houses: [
            {
                id:1,
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100, street: {title: 'Gaydara'}
                }
            },
            {
                id:2,
                buildedAt: 2008,
                repaired: false,
                address: {
                    number: 200, street: {title: 'Freedom'}
                }
            },
            {
                id:3,
                buildedAt: 2020,
                repaired: false,
                address: {
                    number: 101, street: {title: 'Hey'}
                }
            }
        ],
        governmentBuildings: [
            {
                type: 'Hospital',
                budget: 2000,
                staffCount: 200,
                address: {
                    street: {title: 'Long Beatch'}
                }
            },
            {
                type: 'Firestation',
                budget: 3000,
                staffCount: 300,
                address: {
                    street: {title: 'Gaya'}
                }
            }
            ],
        citizensNumber: 1000000
    }
})

test("budget should be changed for Hospital", ()=>{
    addMoneyToBudget(city.governmentBuildings[0], 100000);
    expect(city.governmentBuildings[0].budget).toBe(102000)

})

test('Budget should be changed for Firestation',()=>{
    addMoneyToBudget(city.governmentBuildings[1], -50000);
    expect(city.governmentBuildings[1].budget).toBe(-47000)
})

test('House should be repaired',()=>{
    repairHouse(city.houses[1])
    expect(city.houses[1].repaired).toBeTruthy()
})

test('staff should be fired',()=>{
    toFireStaff(city.governmentBuildings[0],20)

    expect(city.governmentBuildings[0].staffCount).toBe(180)
})

test('staff should be hired',()=>{
    toHireStaff(city.governmentBuildings[1],20)
    expect(city.governmentBuildings[1].staffCount).toBe(320)
})


test('Houses shoud be sestroyed',()=>{
    destroy(city, "Freedom")
    expect(city.houses.length).toBe(2)
})

test('list of Title bildings in govermets',()=>{
    let list=getListsOfTitleBuildings(city.governmentBuildings)

    expect(list.length).toBe(2)
    expect(list[0]).toBe('Long Beatch')
})

test('shoud show buildings with staff count',()=>
{
    let buildings=getStaffCount(city.governmentBuildings, 250)
    expect(buildings.length).toBe(1)
    expect(buildings[0].staffCount).toBe(300)
    expect(buildings[0].type).toBe('Firestation')

})


test('list of Title bildings among houses',()=>{
    let list=getListsOfTitleHouses(city.houses)

    expect(list.length).toBe(3)
    expect(list[0]).toBe('Gaydara')
    expect(list[2]).toBe('Hey')
})

test('Shuold greete street and try to vote for the Tsepkalo',()=>{
    let greetings=callToTheVote(city.houses, "Tsepkalo")

    expect(greetings.length).toBe(3)
    expect(greetings[0]).toBe("Hello citizens from Gaydara! We offer you" +
        " to vote fo the Tsepkalo")
})