import Image from "next/image";
import Link from "next/link";

export default function Login() {
  return (
    <div className="min-h-100svh relative flex flex-1 flex-col overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      <div className="relative mx-auto flex w-full max-w-[25.75rem] flex-1 flex-col items-center justify-center pb-16 pt-12">
        <Image height="28" width="28" src="/mark.svg" alt="Partial Logo" />

        <hgroup className="mt-5 text-center">
          <h2 className="text-lg font-medium text-gray-900">
            Time to Get Productive!
          </h2>
          <p className="mt-3 text-sm/6 text-gray-600">
            Access your to-do lists by signing in to your account.
          </p>
        </hgroup>

        <div className="mt-10 w-full">
          <input
            type="email"
            placeholder="Email address"
            className="block w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-gray-800 placeholder:text-gray-600 sm:text-sm/6"
          />

          <div className="mt-4 flex flex-col items-end">
            <input
              type="password"
              placeholder="Password"
              className="block w-full rounded-lg border border-gray-200 bg-white px-3.5 py-2 text-gray-800 placeholder:text-gray-600 sm:text-sm/6"
            />
            <Link
              href="#"
              className="text-primary-600 hover:text-primary-500 mt-2 text-sm/6 font-semibold"
            >
              Forgot password?
            </Link>
          </div>

          <button className="mt-6 block w-full rounded-lg bg-gray-900 px-6 py-2 text-sm/6 font-semibold text-gray-50 hover:bg-gray-800 focus:outline-offset-2">
            Sign in
          </button>
        </div>

        <div className="relative mt-14 h-px w-full bg-gray-200">
          <div className="absolute inset-y-0 left-1/2 top-0 -mt-2 -translate-x-1/2">
            <div className="h-4 bg-white px-1.5 text-xs uppercase tracking-wider text-gray-500">
              or continue with
            </div>
          </div>
        </div>

        <div className="mt-14 w-full">
          <button className="flex w-full items-center justify-center gap-x-2 rounded-lg border border-gray-200 px-6 py-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 focus:outline-offset-2">
            <span>
              <svg
                className="h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 1024 1024"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 0C3.58 0 0 3.58 0 8C0 11.54 2.29 14.53 5.47 15.59C5.87 15.66 6.02 15.42 6.02 15.21C6.02 15.02 6.01 14.39 6.01 13.72C4 14.09 3.48 13.23 3.32 12.78C3.23 12.55 2.84 11.84 2.5 11.65C2.22 11.5 1.82 11.13 2.49 11.12C3.12 11.11 3.57 11.7 3.72 11.94C4.44 13.15 5.59 12.81 6.05 12.6C6.12 12.08 6.33 11.73 6.56 11.53C4.78 11.33 2.92 10.64 2.92 7.58C2.92 6.71 3.23 5.99 3.74 5.43C3.66 5.23 3.38 4.41 3.82 3.31C3.82 3.31 4.49 3.1 6.02 4.13C6.66 3.95 7.34 3.86 8.02 3.86C8.7 3.86 9.38 3.95 10.02 4.13C11.55 3.09 12.22 3.31 12.22 3.31C12.66 4.41 12.38 5.23 12.3 5.43C12.81 5.99 13.12 6.7 13.12 7.58C13.12 10.65 11.25 11.33 9.47 11.53C9.76 11.78 10.01 12.26 10.01 13.01C10.01 14.08 10 14.94 10 15.21C10 15.42 10.15 15.67 10.55 15.59C13.71 14.53 16 11.53 16 8C16 3.58 12.42 0 8 0Z"
                  transform="scale(64)"
                  fill="currentColor"
                />
              </svg>
            </span>
            Github
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <p className="text-sm/6 text-gray-600">
          Not a member?{" "}
          <Link
            href="#"
            className="text-primary-600 hover:text-primary-500 font-semibold"
          >
            Get your free account.
          </Link>
        </p>
      </div>
    </div>
  );
}
