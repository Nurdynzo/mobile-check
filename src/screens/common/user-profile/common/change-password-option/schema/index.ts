import * as z from 'zod';

export const changePasswordSchema = z
  .object({
    oldPassword: z.string().min(1, {message: 'Old Password is required'}),
    newPassword: z.string().min(1, {message: 'Set a new Password'}),
    confirmPassword: z.string().min(1, {message: 'Confirm your Password'}),
  })
  .refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
  });

export type ChangePasswordSchema = z.infer<typeof changePasswordSchema>;
