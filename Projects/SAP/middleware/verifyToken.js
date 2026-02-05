const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization || "";
    const parts = authHeader.split(" ");
    const token = parts.length === 2 ? parts[1] : null;

    if (!token) {
        return res.status(401).json({ message: "No token provided" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        return next();
    } catch (e) {
        return res.status(401).json({ message: "Invalid token" });
    }
};
