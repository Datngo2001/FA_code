import data from '../users.json'

export function searchUser({
    query = "",
    page = 1,
    limit = 10,
    sortBy = "id"
}) {
    return new Promise((res, rej) => {
        let result = []
        try {
            if (query === "") {
                result = data
            } else {
                result = search(query)
            }
            result = sort(result, sortBy)
            result = paginate(result, page, limit)
        } catch (error) {
            rej(error)
        }
        res(result)
    })
}

function search(query) {
    return data.filter(user => {
        for (const [key, value] of Object.entries(user)) {
            if (value.toString().includes(query)) {
                return true
            }
        }
        return false
    })
}

function paginate(data, page, limit) {
    const beginIndex = (page - 1) * limit
    const result = data.slice(beginIndex, limit)
    return result
}

function sort(data, sortBy) {
    return data.sort((a, b) => (a[sortBy] > b[sortBy]))
}
