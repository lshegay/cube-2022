import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { Loader } from '@/components/Loader';
import { useRouter } from 'next/router';

const Page: NextPage = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/login').catch((e) => console.log(e));
    }, 1000);
  }, [router]);

  return (<Loader />);
};

export default Page;
