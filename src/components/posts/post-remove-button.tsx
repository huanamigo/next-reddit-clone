'use client';

import { removePost } from '@/actions';
import {
  Button,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { useFormState } from 'react-dom';

interface PostRemoveButtonProps {
  postId: string;
}

const PostRemoveButton = ({ postId }: PostRemoveButtonProps) => {
  const [formState, action] = useFormState(removePost.bind(null, postId), {
    errors: {},
  });

  return (
    <Popover>
      <PopoverTrigger>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#000"
        >
          <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
        </svg>
      </PopoverTrigger>
      <PopoverContent>
        <form action={action}>
          <Button type="submit" color="danger">
            Delete
          </Button>
        </form>
      </PopoverContent>
    </Popover>
  );
};

export default PostRemoveButton;
