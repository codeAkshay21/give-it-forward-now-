import express from 'express';
import { prisma } from '../lib/db';

const router = express.Router();

router.post('/', async (req, res) => {
  const { userId, title, imageUrl, category, ngoId } = req.body;

  try {
    const donation = await prisma.donation.create({
      data: {
        userId,
        title,
        imageUrl,
        category,
        ngoId,
      },
    });

    res.status(201).json(donation);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to submit donation' });
  }
});

router.get('/:userId', async (req, res) => {
  const { userId } = req.params;

  try {
    const donations = await prisma.donation.findMany({
      where: { userId },
    });

    res.json(donations);
  } catch (err) {
    res.status(400).json({ message: 'Could not get donations' });
  }
});

export default router;
