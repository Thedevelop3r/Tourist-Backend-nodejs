
const successResponse = (res, data, code = 200) => {
    return res.status(code).json({
        status: true,
        data
    })
}

const errorResponse = (res, error, message = undefined, code = 500) => {
    return res.status(code).json({
        status: false,
        message,
        error
    })
}


export {
    successResponse,
    errorResponse
}