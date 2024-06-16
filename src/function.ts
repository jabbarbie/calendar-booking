import { CalendarProps } from "./types"

export function listDay({
    month,
    year
}: CalendarProps) {
    const targetMonth = new Date(year, (month - 1), 1)

    let result = []
    for (let i = 0; i <= 35; i++) {
        result[i] = {
            i,
            label: i
        }
    }

    return result
}