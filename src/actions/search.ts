'use server';

import { redirect } from 'next/navigation';

export async function search(formData: FormData) {
  const query = formData.get('query');

  if (typeof query !== 'string' || !query) {
    redirect('/');
  }

  redirect(`/search?query=${query}`);
}
