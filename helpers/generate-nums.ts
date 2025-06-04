export default function generateRangeOfNums(a: number, b: number): number[] {
    let startingValue: number;
    let endingValue: number;
    if (a < b || a == b) {
        startingValue = a;
        endingValue = b;
    } else {
        startingValue = b;
        endingValue = a;
    }
    let numberArr: number[] = [startingValue];
    while (startingValue < endingValue) {
        startingValue++;
        numberArr.push(startingValue)
    }
    return numberArr
}
