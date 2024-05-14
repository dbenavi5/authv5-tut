'use server';

import { signOut } from "@/auth";

export const logout = async () => {
    // ...some server stuff before you logout a user
    await signOut({
        redirectTo: '/auth/login',
    });
}