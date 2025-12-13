import express from "express";

const UserRoutes = express.Router();
 

UserRoutes.route('/').post(CreateUser)