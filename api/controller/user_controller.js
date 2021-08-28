const {
    userSignup
} = require('../business/user_business');

exports.userSignup = async (req, res) => {
    try {
        let response = await userSignup(req);
        res.status(response.status).json({
            message: response.message,
            response: response.data
        })
    } catch (error) {
        console.log(error);
        res.status(error.status).json({
            message: error.message
        })
    }
}