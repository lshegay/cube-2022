import React from 'react';
import { NextPage } from 'next';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Formik, Form, FormikHelpers } from 'formik';
import { FormInput } from '@/components/Auth';
import Button from '@/components/Button';
import Logo from '@/brands/Logo';

type LoginValues = {
  username: string;
  password: string;
};

const Page: NextPage = () => {
  const router = useRouter();

  return (
    <div className="w-full h-screen flex">
      <div className="flex flex-col w-full md:w-1/2 xl:w-1/3 2xl:w-1/4 flex-shrink-0 justify-center items-center">
        <Formik
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={async (_, { setSubmitting }: FormikHelpers<LoginValues>) => {
            setSubmitting(true);
            await router.push('/education');
            setSubmitting(false);
          }}
        >
          {({ isValidating, handleChange, errors }) => (
            <Form className="flex flex-col w-9/12">
              <div className="mb-20 flex justify-center w-full text-2xl"><Logo /></div>
              <div className="mb-10">
                <h1 className="text-3xl font-raleway mb-4">Sign In</h1>
                <p className="text-sm text-neutral-500">Enter your credentials to access your education account.</p>
              </div>
              <FormInput
                label="Username"
                name="username"
                className="mb-4 w-full"
                placeholder="username"
                onChange={handleChange}
              />
              <FormInput
                label="Password"
                name="password"
                type="password"
                className="mb-4 w-full"
                placeholder="password"
                error={errors.password}
                onChange={handleChange}
              />
              <Button className="bg-black text-white mb-8" type="submit" loading={isValidating}>Sign In</Button>
              <p className="text-sm">
                <span>Not a member? </span>
                <a className="text-blue-500 cursor-pointer">Sign up</a>
              </p>
            </Form>
          )}
        </Formik>
      </div>
      <div className="relative flex-grow">
        <Image
          layout="fill"
          objectFit="cover"
          src="/auth.jpg"
          alt="Authentication Cover"
        />
      </div>
    </div>
  );
};

export default Page;
