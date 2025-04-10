import HelpRequest from "../models/HelpRequest.js";

// Create help request
export const createHelpRequest = async (req, res) => {
  try {
    const newRequest = new HelpRequest(req.body);
    const saved = await newRequest.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get help request by ID
export const getHelpRequestById = async (req, res) => {
  try {
    const help = await HelpRequest.findById(req.params.id);
    if (!help) return res.status(404).json({ error: "Not found" });
    res.json(help);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get help requests within 1km radius
export const getHelpRequestsNearby = async (req, res) => {
  const { latitude, longitude } = req.query;
  if (!latitude || !longitude)
    return res.status(400).json({ error: "Coordinates required" });

  const R = 6371; // km
  const toRad = (val) => (val * Math.PI) / 180;

  const lat1 = parseFloat(latitude);
  const lon1 = parseFloat(longitude);

  const allRequests = await HelpRequest.find({});
  const nearby = allRequests.filter((req) => {
    const lat2 = req.latitude;
    const lon2 = req.longitude;

    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a =
      Math.sin(dLat / 2) ** 2 +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;

    return distance <= 1;
  });

  res.json(nearby);
};
