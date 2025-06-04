import generateRangeOfNums from "./generate-nums";

export default function formatArrayOfNums(a: number, b: number, config: string): string {
    const numArray = generateRangeOfNums(a, b)
    let content = "";
    if (config == "newline") {
        for (let num of numArray) {
            content += `${num}\n`
        }
    } else if (config == "comma-separated") {
        content = numArray.join(", ")
    }
    return content
}
