// routes/profile.ts
import express from 'express';
import { prisma } from '../lib/db';

const router = express.Router();

router.put('/:userId', async (req, res) => {
  const { userId } = req.params;
  const { full_name, email, avatar_url } = req.body;

  try {
    const updatedUser = await prisma.profiles.update({
      where: { id: userId },
      data: {
        full_name,
        email,
        avatar_url,
      },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to update profile' });
  }
});

export default router;
