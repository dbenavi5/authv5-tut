'use server';

import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { RegisterSchema } from '@/schemas';
import { db } from '@/lib/db';
import { getUserByEmail } from '@/data/user';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
    const validateFields = RegisterSchema.safeParse(values);

    if (!validateFields.success) {
        return {
            error: 'Invalid fields!',
        };
    }

    const { email, password, name } = validateFields.data;

    const hashPassword = await bcrypt.hash(password, 10);
    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: 'Email already exists!', }
    }

    await db.user.create({
        data: {
            email,
            name,
            password: hashPassword,
        }
    });

    // TODO: Send verification token email
    return { success: 'User Create!' };
}