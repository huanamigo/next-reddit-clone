import { db } from '@/db';
import paths from '@/paths';
import { Chip } from '@nextui-org/react';
import Link from 'next/link';

export default async function TopicList() {
  const topics = await db.topic.findMany();

  return (
    <div className="flex flex-wrap flex-row gap-2">
      {topics.map((topic) => (
        <div key={topic.id}>
          <Link href={paths.showTopic(topic.slug)}>
            <Chip className="text-sm font-medium me-2 px-2.5 py-0.5 rounded bg-gray-700 text-gray-300">
              {topic.slug}
            </Chip>
          </Link>
        </div>
      ))}
    </div>
  );
}
