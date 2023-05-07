// @descr Auth user
// @route POST /api/user/login
// @access Public

export const authUser = async (req, res) => {
    res.json({
        message: 'You are logged in!'
    })
}