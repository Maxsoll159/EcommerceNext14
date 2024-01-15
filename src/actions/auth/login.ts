"use server"
import { sleep } from '@/utils/sleep';
import { signIn } from '../../auth.config'
import { AuthError } from 'next-auth';

// ...

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
) {
    try {
        //await sleep(2)
        await signIn('credentials', {
            ...Object.fromEntries(formData),
            redirect: false,
        });
        

        return "Sucesss"



    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }
        throw error;
    }
}