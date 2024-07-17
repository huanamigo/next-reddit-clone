import { redirect } from 'next/navigation';

interface SearchPageProps {
  searchParams: {
    query: string;
  };
}

const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { query } = searchParams;

  if (!query) {
    redirect('/');
  }

  return <div>{query}</div>;
};

export default SearchPage;
