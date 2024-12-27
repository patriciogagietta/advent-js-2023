function getCompleted(timeWorked, totalTime) {

    const [hoursWorked, minutesWorked, secondsWorked] = timeWorked.split(':').map(Number)
    const [hoursTotal, minutesTotal, secondsTotal] = totalTime.split(':').map(Number)

    const totalSecondsWorked = hoursWorked * 3600 + minutesWorked * 60 + secondsWorked
    const totalSecondsTotal = hoursTotal * 3600 + minutesTotal * 60 + secondsTotal

    const percentage = (totalSecondsWorked / totalSecondsTotal) * 100

    return `${Math.round(percentage)}%`
}