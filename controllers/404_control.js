// CONTROL - WRONG REQUEST
exports.controlRequestNotFound = (req, res, use) => {
  res.status(404).json({ error: `API not found` });
};
