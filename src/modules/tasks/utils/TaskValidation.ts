import { z } from 'zod';

export const taskSchema = z.object({
    title: z.string().min(3).max(20),
    description: z.string().min(3).max(200),
    dueDate: z.string(),
    status: z.string(),
    user_id: z.number(),
});
