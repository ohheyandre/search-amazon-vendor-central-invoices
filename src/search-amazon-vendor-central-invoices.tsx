import { Clipboard, closeMainWindow, LaunchProps, open } from "@raycast/api";
import formatArrayOfNums from "../helpers/format-array-of-nums"

export default async function Command(props: LaunchProps) {
    let { firstValue, secondValue, config } = props.arguments;
    if (!config) config = "comma-separated"
    await Clipboard.copy(formatArrayOfNums(firstValue, secondValue, config))
    await open("https://vendorcentral.amazon.com/invoice-management/home", "Arc")
    await closeMainWindow({ clearRootSearch: true })
}