function anaToVori(ana) {
    let vori = ana / 16;

    // input error handelling 
    if (ana <= 0 || typeof ana != 'number') {
        return 'Wrong input';
    }
    return vori;
}
const myVori = anaToVori(32);
console.log(myVori);

function pandaCost(numOfShingara, numOfSamucha, numOfJilapi) {
    const shingara = 7;
    const samucha = 10;
    const jilapi = 15;

    // input error handelling
    if (numOfShingara < 0 || typeof numOfShingara != 'number') {
        return 'invalid input'
    }
    if (numOfSamucha < 0 || typeof numOfSamucha != 'number') {
        return 'invalid input'
    }
    if (numOfJilapi < 0 || typeof numOfJilapi != 'number') {
        return 'invalid input'
    }

    const priceOfShingara = shingara * numOfShingara;
    const priceOfSamucha = samucha * numOfSamucha;
    const priceOfJilapi = jilapi * numOfJilapi;
    const totalCost = priceOfShingara + priceOfSamucha + priceOfJilapi;
    return totalCost;
}
const myCost = pandaCost(2, 2, 0);
console.log(myCost);


function picnicBudget(quantity) {
    let costPerPerson = 0;

    // input error handelling
    if (quantity <= 0 || typeof quantity != 'number') {
        return 'Incorrect input';
    }
    if (quantity > 200) {
        let first100 = 100 * 5000;
        let second100 = 100 * 4000;
        let remaining = (quantity - 200) * 3000;
        costPerPerson = first100 + second100 + remaining;
    }
    else if (quantity > 100) {
        let first100People = 100 * 5000;
        let remainingPeople = (quantity - 100) * 4000;
        costPerPerson = first100People + remainingPeople;
    }
    else if (quantity <= 100) {
        costPerPerson = quantity * 5000;
    }
    return costPerPerson;
}
const totalCost = picnicBudget(110);
console.log(totalCost);


function oddFriend(friends) {
    for (const friend of friends) {

        // error handeling part
        if (typeof friend != 'string') {
            return 'error. wrong input';
        }
        if (friend.length % 2 == 1) {
            return friend;
        }
    }
}
console.log(oddFriend(['hira', 'ridoy', 'sohel', 'pial']));

