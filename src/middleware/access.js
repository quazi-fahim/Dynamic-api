exports.CheckAccess = ({
  roles = [],
  subscription = "normal" // normal | premium
}) => {
  return (req, res, next) => {
    try {
      const { role, subscription: userSub } = req.user;

      // ROLE CHECK
      if (roles.length && !roles.includes(role)) {
        return res.status(403).json({ message: "Role forbidden" });
      }

      // ADMIN → FULL ACCESS
      if (role === "admin") {
        req.accessLevels = ["normal", "premium"];
        return next();
      }

      // SUBSCRIPTION CHECK
      if (subscription === "premium" && userSub !== "premium") {
        return res.status(403).json({ message: "Premium required" });
      }

      // ACCESS LEVELS
      req.accessLevels =
        userSub === "premium"
          ? ["normal", "premium"]
          : ["normal"];

      next();
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };
};
