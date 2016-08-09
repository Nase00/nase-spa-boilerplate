/* eslint new-cap:0 */
import express from 'express';

import applicationView from '../views/application';

const router = express.Router();

/* Serve client - must be last route */
router.get('*', (req, res) => res.send(applicationView));

export default router;
