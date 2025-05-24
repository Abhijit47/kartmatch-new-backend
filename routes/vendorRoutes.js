import express from 'express';
import {
  fetchVendorsData,
  fixRajasthanCoordinates,
  getFilteredVendors,
  getNearbyVendors,
  getVendorById,
  insertVendors,
} from '../controllers/vendorController.js';

const router = express.Router();

router.post('/vendors', insertVendors);
router.get('/fetchvendors', fetchVendorsData);
router.get('/nearby', getNearbyVendors);
router.get('/vendors/:vendorId', getVendorById);
router.post('/vendors/filter', getFilteredVendors);

router.patch('/vendors/rajasthan/fix-coordinates', fixRajasthanCoordinates);
export default router;
