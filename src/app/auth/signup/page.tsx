import React from 'react';
import { faUser, faEnvelope, faLock, faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import FormInput from '@/components/common/input/FormInput';
import GoogleIcon from '@/assets/GoogleIcon';
import { GithubIcon } from '@/assets/SocialIcon';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const SignupForm: React.FC = () => {
  return (
    <div className="w-full md:w-1/2 p-8 relative">
          <div className="absolute top-4 right-4 flex items-center gap-2  px-3 py-2 rounded-full border border-borderLight dark:border-borderDark text-xs">
        <FontAwesomeIcon icon={faArrowCircleLeft} className='h-5 w-5 '/>
     Go Back
        </div>
      <h2 className="text-2xl font-bold mb-6">Create an Account</h2>
      <form>
        <FormInput placeHolder='Full Name'
          label="Full Name"
          type="text"
          id="fullName"
          icon={faUser}
        />
        <FormInput placeHolder='Email'
          label="Email"
          type="email"
          id="email"
          icon={faEnvelope}
        />
        <FormInput placeHolder='Password'
          label="Password"
          type="password"
          id="password"
          icon={faLock}
        />
        <button
          className="w-full bg-primary text-white py-2 rounded-md hover:bg-primary/70 transition duration-200"
          type="submit"
        >
          Sign Up
        </button>
      </form>
      <p className='mt-2'>
        <Link className='text-primary mr-2' href={'/auth/signin'}>
          Already have an account?
        </Link>
        <span className='opacity-70'>
       Sign In Here
        </span>
      </p>
      <div className="mt-6">
        <button
          className="w-full  text-white py-2 rounded-md hover:text-primary hover:bg-white transition duration-200 mb-4 flex items-center gap-2 justify-center"
        >
          <GoogleIcon size={20} />
          Sign up with Google
        </button>
        <button
          className="w-full  text-white py-2 rounded-md hover:text-primary hover:bg-slate-800 transition duration-200 mb-4 flex items-center gap-2 justify-center"
        >
          <GithubIcon size={20} />
          Sign up with Github
        </button>
      </div>
    </div>
  );
};

export default SignupForm;
