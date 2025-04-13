import express from 'express';
import { prisma } from '../lib/db';

const router = express.Router();

router.put('/:clerkId', async (req, res) => {
  const { clerkId } = req.params;
  const { name, email, imageUrl } = req.body;

  try {
    const updatedUser = await prisma.user.update({
      where: { clerkId },
      data: { name, email, imageUrl },
    });

    res.json(updatedUser);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: 'Failed to update user profile' });
  }
});

export default router;
