import playersHealth from "../game.js";

test('sort array test', () => {
    const heroChanges = [
        {name: 'маг', health: 100},
        {name: 'лучник', health: 80},
        {name: 'мечник', health: 10},
    ]

    heroChanges.forEach((item) => {
        const itemStatus = item.health;
        const result = playersHealth(heroChanges);
        expect(result).toEqual(itemStatus);
    })
})