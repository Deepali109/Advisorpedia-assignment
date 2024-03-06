import express from 'express';
// import {signup, signin} from '../controllers/auth.controller.js'
import { google, signin, signup ,signOut, postsdata} from '../controllers/auth.controller.js'



const router= express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/google", google);
router.get('/signout', signOut);
router.get("/getsampledata", postsdata);

export default router;
