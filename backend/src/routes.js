const express = require('express');
const multer = require('multer');
const uploadConfig = require('./config/upload');

const SessionController = require('./controllers/sessionController');
const SpotController = require('./controllers/spotController');
const DashboardController = require('./controllers/dashboardController');
const BookingController = require('./controllers/bookingController');
const ApprovalController = require('./controllers/approvalController');
const RejectionController = require('./controllers/rejectionController');

const routes = express.Router();
const upload = multer(uploadConfig)

routes.post('/sessions', SessionController.store);

routes.get('/spots', SpotController.index);
routes.post('/spots', upload.single('thumbnail'),SpotController.store)

routes.get('/dashboard', DashboardController.show);

routes.post('/spots/:spot_id/bookings',BookingController.store);

routes.post('/bookings/:booking_id/approvals', ApprovalController.store);
routes.post('/bookings/:booking_id/rejections', RejectionController.store);

module.exports = routes