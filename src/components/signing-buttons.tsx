import { auth } from '@/auth';
import * as actions from '@/actions';

import { Avatar, Button, NavbarItem } from '@nextui-org/react';

export default async function SigningButtons() {
  const session = await auth();

  return (
    <>
      {session?.user ? (
        <Avatar src={session.user.image || ''} />
      ) : (
        <>
          <NavbarItem>
            <form action={actions.signIn}>
              <Button type="submit" color="secondary" variant="bordered">
                Sign in
              </Button>
            </form>
          </NavbarItem>

          <NavbarItem>
            <form action={actions.signIn}>
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
