import { Router } from "express";

// first way to initialize the router
import express from 'express';
const router = express.Router();

// second way to initialize the router
export const healthRouter = new Router();


healthRouter.get('/', (req, res) => {
    res.status(200).json({
        "status": 'ok',
    });
});

