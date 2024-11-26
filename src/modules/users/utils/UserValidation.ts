import { z } from 'zod';

export const userSchema = z.object({
  email: z.string().email('invalid email'),
  username: z.string().min(3).max(20),
  password: z.string().min(8).max(20),
  tasks: z
    .array(
      z.object({
        title: z.string().min(3).max(50),
        description: z.string().min(3).max(200),
      })
    )
    .optional(),
});
