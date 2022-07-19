import data from '../users.json'

export function searchUser({
    query = "",
    page = 1,
    limit = 10,
    sortBy = "id"
}) {
    return new Promise((res, rej) => {
        let result = []
        let totalPage = 0
        try {
            if (query === "") {
                result = data
            } else {
                result = search(query)
            }
            totalPage = result.length / limit
            sort(result, sortBy)
            result = paginate(result, page, limit)
        } catch (error) {
            rej(error)
        }

        debugger
        res({ data: JSON.parse(JSON.stringify(result)), totalPage })
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
    const endIndex = beginIndex + limit
    const result = data.slice(beginIndex, endIndex)
    return result
}

function sort(data, sortBy) {
    data.sort((a, b) => {
        if (a[sortBy] < b[sortBy]
        ) {
            return -1;
        }

        return 0;
    })
}
