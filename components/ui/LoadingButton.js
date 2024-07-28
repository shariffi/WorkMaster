// components/LoadingButton.js
"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Loader2 } from 'lucide-react';

export default function LoadingButton() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleClick = async () => {
    setLoading(true);
    await router.push('/dashboard');
  };

  return (
    <>
      {loading ? (
        <Button disabled>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </Button>
      ) : (
        <Button className="mt-10" onClick={handleClick}>
          Get Started
        </Button>
      )}
    </>
  );
}
