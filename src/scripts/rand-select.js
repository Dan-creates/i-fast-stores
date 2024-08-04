/**
 * Randomly selects an item from an array and returns it
 * @param arr Contains an array
 * @returns A randomly selected item from the array
 */
function select(arr){
    let random=(Math.floor(Math.random()*arr.length));
    let selection=(random<=arr.length)?arr[random]:arr[0];
    return selection;
}
export default select;