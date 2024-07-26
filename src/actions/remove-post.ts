'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';

interface RemovePostFormState {
  errors: {
    title?: string[];
    content?: string[];
    _form?: string[];
  };
}

export async function removePost(
  postId: string,
  formState: RemovePostFormState,
  formData: FormData
): Promise<RemovePostFormState> {
  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You have to be signed in to remove a Post'],
      },
    };
  }

  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (session.user.id !== post?.userId) {
    return {
      errors: {
        _form: ['You have to be signed a creator to remove a Post'],
      },
    };
  }

  try {
    const deletedPost = await db.post.delete({
      where: {
        id: postId,
      },
    });
    console.log(deletedPost);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return {
        errors: {
          _form: [error.message],
        },
      };
    } else {
      return {
        errors: {
          _form: ['Something went wrong'],
        },
      };
    }
  }

  revalidatePath(paths.home());
  redirect(paths.home());
}
