'use client';

import { search } from '@/actions';
import { Input } from '@nextui-org/react';
import { useSearchParams } from 'next/navigation';

const SearchInput = () => {
  const searchParams = useSearchParams();

  return (
    <form action={search}>
      <div className="relative">
        <button
          type="submit"
          className="absolute inset-y-0 end-2 flex items-center ps-3 cursor-pointer z-10"
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-gray-400"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>

        <Input
          placeholder="Search"
          name="query"
          defaultValue={searchParams.get('query') || ''}
        ></Input>
      </div>
    </form>
  );
};

export default SearchInput;
