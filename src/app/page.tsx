import { Button } from '@nextui-org/react';
import * as actions from '@/actions';
import { auth } from '@/auth';
import Image from 'next/image';

export default async function Home() {
  const session = await auth();

  return (
    <div>
      <form action={actions.signIn}>
        <Button type="submit">sign in</Button>
      </form>

      <form action={actions.signOut}>
        <Button type="submit">sign out</Button>
      </form>

      <div>
        {session?.user ? (
          <div>
            <p>{JSON.stringify(session.user.name)}</p>
            <p>{JSON.stringify(session.user.email)}</p>
            <p>Expires at: {JSON.stringify(session.expires)}</p>
          </div>
        ) : (
          <div>
            <p>Signed Out!</p>
          </div>
        )}
      </div>
    </div>
  );
}
