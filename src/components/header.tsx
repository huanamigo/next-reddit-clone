import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/react';
import Link from 'next/link';
import SigningButtons from './signing-buttons';
import { SessionProvider } from 'next-auth/react';
import SearchInput from './search-input';

export default function Header() {
  return (
    <Navbar className="shadow mb-6">
      <NavbarBrand>
        <Link href="/" className="font-bold">
          Home
        </Link>
      </NavbarBrand>

      <NavbarContent justify="center">
        <NavbarItem>
          <SearchInput />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <SessionProvider>
          <SigningButtons />
        </SessionProvider>
      </NavbarContent>
    </Navbar>
  );
}
