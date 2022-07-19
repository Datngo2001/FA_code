export function toDDMMYYYY(dateString) {
    const fullDate = new Date(dateString);
    let date = fullDate.getDate().toString()
    let month = fullDate.getMonth().toString()
    let year = fullDate.getFullYear().toString()
    if (date.length < 2) {
        date = "0" + date
    }
    if (month.length < 2) {
        month = "0" + month
    }
    return `${date}/${month}/${year}`
}