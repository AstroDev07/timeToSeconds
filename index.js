const timeToSeconds = (time = "05:30:20") => {
    let units = time.split(":")
    let totalSeconds = Number(units[2])
    totalSeconds += Number(units[1])*60
    totalSeconds += Number(units[0])*3600

    return totalSeconds
}

console.log(timeToSeconds())