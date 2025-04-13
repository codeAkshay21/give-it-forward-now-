import express from 'express';
import { prisma } from '../lib/db';

const router = express.Router();

router.get('/', async (_req, res) => {
  try {
    const ngos = await prisma.ngo.findMany();
    res.json(ngos);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch NGOs' });
  }
});

export default router;
