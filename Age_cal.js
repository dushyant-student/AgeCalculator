function age_cal() {
    var year = parseInt(document.getElementById("yer").value);
    var month = parseInt(document.getElementById("mont").value);
    var day = parseInt(document.getElementById("day").value);

    const days = getDays(day)
    const years = getYears(month, year)
    const months = getMonths(month)

    console.log({ years, months, days })
}``

function getDays(day) {
    const curDate = new Date().getDate()
    
    if (curM)
    if (curDate > day) return curDate - day
    if (curDate < day) return Math.abs(30 - day + (curDate+1))
    return 0
}

function getMonths(month) {
    const curMonth = new Date().getMonth() + 1

    if (curMonth > month) return curMonth - month
    if (curMonth < month) return 12 - month + curMonth
    return 0
}

function getYears(month, year) {
    const curYear = (new Date()).getFullYear()
    const curMonth = new Date().getMonth() + 1
    
    if (curYear == year) return 0;
    if (curYear - year == 1) {
        if (curMonth >= month) return 1
        return 0
    }
    return curYear - year
}