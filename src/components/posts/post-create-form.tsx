import { createPost } from '@/actions';
import {
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  Textarea,
  Input,
} from '@nextui-org/react';

export default function PostCreateForm() {
  return (
    <Popover>
      <PopoverTrigger>
        <Button color="primary">Create a post</Button>
      </PopoverTrigger>
      <PopoverContent>
        <form action={createPost}>
          <div className="flex flex-col gap-4 p-4 w-80">
            <h3 className="text-lg">Create a post</h3>
            <Input
              name="title"
              label="Title"
              labelPlacement="outside"
              placeholder="Title"
            />
            <Textarea
              name="content"
              label="Content"
              labelPlacement="outside"
              placeholder="Name"
            />
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </PopoverContent>
    </Popover>
  );
}
