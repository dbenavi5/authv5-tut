import { db } from "@/lib/db";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
    try {
        const twoFactorConfirmationToken = await db.twoFactorConfirmation.findUnique({
            where: {
                userId
            }
        })

        return twoFactorConfirmationToken;
    } catch (error) {
        return null;
    }
}