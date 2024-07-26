'use client';

import { removePost } from '@/actions';
import { Button } from '@nextui-org/react';
import { useFormState } from 'react-dom';

interface PostRemoveButtonProps {
  postId: string;
}

const PostRemoveButton = ({ postId }: PostRemoveButtonProps) => {
  const [formState, action] = useFormState(removePost.bind(null, postId), {
    errors: {},
  });

  return (
    <form action={action}>
      <Button type="submit" color="danger">
        Delete
      </Button>
    </form>
  );
};

export default PostRemoveButton;
