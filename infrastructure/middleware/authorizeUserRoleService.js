const authorizeUserRoleMiddleware = (roles) => (req, res, next) => {
  // Ensure roles is an array
  if (!Array.isArray(roles)) {
    roles = [roles];
  }

  // Get user roles from headers, assuming roles are sent as a comma-separated string
  const userRoles = req.headers["x-user-role"];
  if (!userRoles) {
    return res.status(403).json({ message: "Forbidden Route for this role" });
  }

  // Convert the comma-separated string into an array
  const userRolesArray = userRoles.split(",").map((role) => role.trim());

  // Check if any of the user roles are in the allowed roles
  const hasAccess = userRolesArray.some((userRole) => roles.includes(userRole));

  if (!hasAccess) {
    return res.status(403).json({ message: "Forbidden Route for this role" });
  }

  next();
};

module.exports = authorizeUserRoleMiddleware;
