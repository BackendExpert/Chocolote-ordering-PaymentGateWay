const adminMiddleware = (req, res, next) => {
    try {
      // Assuming user info is attached to req.user by authentication middleware
      const { user } = req;
  
      if (!user) {
        return res.status(401).json({ message: "Unauthorized access. Please log in." });
      }
  
      if (user.role !== 'admin') {
        return res.status(403).json({ message: "Access denied. Admins only." });
      }
  
      // User is admin, proceed to the next middleware/controller
      next();
    } catch (error) {
      console.error("Error in admin middleware:", error);
      res.status(500).json({ message: "Internal server error." });
    }
  };
  
module.exports = adminMiddleware;
  