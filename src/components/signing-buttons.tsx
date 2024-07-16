'use client';
import * as actions from '@/actions';
import { useSession } from 'next-auth/react';

import {
  Avatar,
  Button,
  NavbarItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@nextui-org/react';
import { FormEvent } from 'react';
import { revalidatePath } from 'next/cache';
import Router from 'next/router';

export default function SigningButtons() {
  const session = useSession();

  const handleSignIn = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    actions.signIn();
  };

  return (
    <>
      {session.status === 'loading' ? null : session.data?.user ? (
        <Popover placement="left">
          <PopoverTrigger>
            <Avatar src={session.data.user.image || ''} />
          </PopoverTrigger>
          <PopoverContent>
            <div className="p-4">
              <form action={actions.signOut}>
                <Button type="submit">Sign out</Button>
                <Button
                  onClick={() => {
                    Router.reload();
                  }}
                  type="button"
                >
                  Test
                </Button>
              </form>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <>
          <NavbarItem>
            <form onSubmit={handleSignIn}>
              <Button type="submit" color="secondary" variant="bordered">
                Sign in
              </Button>
            </form>
          </NavbarItem>

          <NavbarItem>
            <form onSubmit={handleSignIn}>
              <Button type="submit" color="primary" variant="flat">
                Sign up
              </Button>
            </form>
          </NavbarItem>
        </>
      )}
    </>
  );
}
