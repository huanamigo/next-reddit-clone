'use server';

import * as auth from '@/auth';
import { revalidatePath } from 'next/cache';

export async function signOut() {
  return (
    revalidatePath('/'), auth.signOut({ redirectTo: 'http://localhost:3000/' })
  );
}
