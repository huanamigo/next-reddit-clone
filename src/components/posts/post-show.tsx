import { db } from '@/db';
import { notFound } from 'next/navigation';
import PostRemoveButton from './post-remove-button';
import { auth } from '@/auth';

interface PostShowProps {
  postId: string;
}

export default async function PostShow({ postId }: PostShowProps) {
  // await new Promise((resolve) => setTimeout(resolve, 2500));
  const session = await auth();

  const post = await db.post.findFirst({
    where: {
      id: postId,
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <div className="m-4">
      <div className="container flex justify-between">
        <h1 className="text-2xl font-bold my-2">{post.title}</h1>
        {session?.user?.id === post.userId ? (
          <PostRemoveButton postId={postId} />
        ) : null}
      </div>
      <p className="p-4 border rounded">{post.content}</p>
    </div>
  );
}
