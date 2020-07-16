import {AddressType, CityType} from "./types";

let city: CityType

beforeEach(() => {
    city = {
        title: 'NY',
        houses: [
            {
                buildedAt: 2012,
                repaired: false,
                address: {
                    number: 100, street: {title: 'Gaydara'}
                }
            },
            {
                buildedAt: 2008,
                repaired: true,
                address: {
                    number: 200, street: {title: 'Freedom'}
                }
            },
            {
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

test('test city should contain 3 houses', () => {
    expect(city.houses.length).toBe(3)
    expect(city.houses[0].buildedAt).toBe(2012)
    expect(city.houses[0].repaired).toBe(false)
    expect(city.houses[0].address.number).toBe(100)
    expect(city.houses[0].address.street.title).toBe('Gaydara')

    expect(city.houses[1].buildedAt).toBe(2008)
    expect(city.houses[1].repaired).toBe(true)
    expect(city.houses[1].address.number).toBe(200)
    expect(city.houses[1].address.street.title).toBe('Freedom')

    expect(city.houses[2].buildedAt).toBe(2020)
    expect(city.houses[2].repaired).toBe(false)
    expect(city.houses[2].address.number).toBe(101)
    expect(city.houses[2].address.street.title).toBe('Hey')
})


test('test city should contain hospital and firestation', ()=>{

    expect(city.governmentBuildings.length).toBe(2)

    expect(city.governmentBuildings[0].type).toBe('Hospital')
    expect(city.governmentBuildings[0].budget).toBe(2000)
    expect(city.governmentBuildings[0].staffCount).toBe(200)
    expect(city.governmentBuildings[0].address.street.title).toBe('Long Beatch')

    expect(city.governmentBuildings[1].type).toBe('Firestation')
    expect(city.governmentBuildings[1].budget).toBe(3000)
    expect(city.governmentBuildings[1].staffCount).toBe(300)
    expect(city.governmentBuildings[1].address.street.title).toBe('Gaya')

})