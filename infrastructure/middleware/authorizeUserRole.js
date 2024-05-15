
const authorizeUserRoleMiddleware = (role) => (req, res, next) => {//valid role for api route passed as argument
    const userRole = req.headers['x-user-role']; // Assuming user role is sent in headers
    if (!userRole || !role.includes(userRole)) {
        return res.status(403).json({ message: 'Forbidden Route for this role' });
    }
    next();
};

module.exports = authorizeUserRoleMiddleware;