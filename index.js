const timeToSeconds = (time = "05:00:00") => {
    let units = time.split(":")
    let totalSeconds = Number(units[2])
    totalSeconds += Number(units[1])*60
    totalSeconds += Number(units[0])*3600

    return totalSeconds
}

console.log(timeToSeconds())