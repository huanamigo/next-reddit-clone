'use server';

import { auth } from '@/auth';
import { db } from '@/db';
import paths from '@/paths';
import { Topic } from '@prisma/client';
import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod';

interface CreateTopicFormState {
  errors: {
    name?: string[];
    description?: string[];
    _form?: string[];
  };
}

const createTopicSchema = z.object({
  name: z
    .string()
    .min(3, { message: 'Must be longer than 3 characters' })
    .regex(/[a-z-]/, {
      message: 'Must contain only lowercase letters or dashes, without spaces',
    }),
  description: z
    .string()
    .min(10, { message: 'Must be longer than 10 characters' }),
});

export async function createTopic(
  formState: CreateTopicFormState,
  formData: FormData
): Promise<CreateTopicFormState> {
  await new Promise((res) => setTimeout(res, 1000));

  const result = createTopicSchema.safeParse({
    name: formData.get('name'),
    description: formData.get('description'),
  });

  if (!result.success) {
    console.log(result.error.flatten().fieldErrors);
    return {
      errors: result.error.flatten().fieldErrors,
    };
  } else {
    console.log(result.data);
  }

  const session = await auth();

  if (!session || !session.user) {
    return {
      errors: {
        _form: ['You have to be signed in to add a Topic'],
      },
    };
  }

  let topic: Topic;

  try {
    topic = await db.topic.create({
      data: {
        slug: result.data.name,
        description: result.data.description,
      },
    });
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

  revalidatePath('/');
  redirect(paths.showTopic(topic.slug));
}
