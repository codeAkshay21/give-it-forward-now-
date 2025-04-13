import express from 'express';
import { prisma } from '../lib/db';

const router = express.Router();

router.post('/sync', async (req, res) => {
  const { userId, email, name, imageUrl } = req.body;

  try {
    const user = await prisma.user.upsert({
      where: { clerkId: userId },
      update: {},
      create: {
        clerkId: userId,
        email,
        name,
        imageUrl,
      },
    });

    res.status(200).json(user);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to sync user' });
  }
});

export default router;
