import PostList from '@/components/posts/post-list';
import { fetchPostsBySearchQuery } from '@/db/queries/post';
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

  return (
    <div>
      <PostList fetchData={() => fetchPostsBySearchQuery(query)} />
    </div>
  );
};

export default SearchPage;
