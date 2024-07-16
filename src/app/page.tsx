'use client';

import Image from 'next/image';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

// export const dynamicParams = true;
// export const revalidate = 300;
// export const dynamic = "auto";

export default function Home() {
  const router = useRouter();
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Home</h1>
      <p className='rounded bg-blue-500 px-4 py-2 text-base text-white'>
        Count: {count}
      </p>
      <p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </p>
      <p>
        <button type='button' onClick={() => router.push('/category')}>
          Category
        </button>
      </p>
    </div>
  );
}
