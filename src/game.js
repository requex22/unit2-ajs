export default function playersHealth(array) {
    return array.sort((a, b) => b.health - a.health);
}