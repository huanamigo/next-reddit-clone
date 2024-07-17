'use client';

import { search } from '@/actions';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

const SearchInput = () => {
  const searchParams = useSearchParams();

  return (
    <form action={search}>
      <Input name="query" defaultValue={searchParams.get('query') || ''} />
    </form>
  );
};

export default SearchInput;
