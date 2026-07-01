function authorize(roles) {

    return (req, res, next) => {

        if (!roles.includes(req.user.role_id)) {
            return res.status(403).json({
                success: false,
                message: "Forbidden. You don't have permission to perform this action."
            });
        }

        next();

    };

}

module.exports = {
    authorize
};