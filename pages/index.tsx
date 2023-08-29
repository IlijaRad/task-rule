import { Bars2Icon, ChevronDownIcon } from "@heroicons/react/20/solid";
import {
  ChevronUpDownIcon,
  PlusSmallIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-white w-full md:bg-gray-50 min-h-screen flex flex-col justify-center">
      <header className="md:py-4 w-full md:px-9 border-b border-gray-200 md:border-transparent max-w-5xl mx-auto md:mt-5 py-2.5 pl-6 pr-4 flex items-center justify-between">
        <Link href="/">
          <Image height="28" width="102" src="/logo.svg" alt="Task Rule" />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex gap-x-9">
            <li className="text-sm/6 font-medium text-gray-800">
              <Link href="#">Overview</Link>
            </li>
            <li className="text-sm/6 font-medium text-gray-800">
              <Link href="#">Schedules</Link>
            </li>
            <li className="text-sm/6 font-medium text-gray-800">
              <Link href="#">Changes</Link>
            </li>
            <li className="text-sm/6 font-medium text-gray-800">
              <Link href="#">Help</Link>
            </li>
          </ul>
        </nav>
        <button className="gap-x-1 items-center hidden md:flex">
          <div className="rounded-full border shrink-0 border-gray-300 bg-white h-10 w-10 flex items-center justify-center">
            <UserIcon className="text-gray-400 w-5 h-5 " />
          </div>
          <ChevronUpDownIcon className="text-gray-400 w-5 h-5" />
        </button>
        <button className="md:hidden h-10 w-10 flex items-center justify-center">
          <Bars2Icon className="text-gray-500 w-6 h-6" />
        </button>
      </header>
      <main className="overflow-hidden grow w-full md:mt-9 mx-auto max-w-7xl rounded-t-3xl border border-gray-900/5 bg-white shadow-sm">
        <hgroup className="mt-8 md:mt-10 px-6 md:px-0">
          <h1 className="text-lg md:text-xl text-gray-800 font-medium md:text-center">
            Welcome back, Ilija
          </h1>
          <p className="text-gray-600 text-sm/6 md:mx-auto mt-3 md:text-center md:max-w-md">
            Stay organized and on top of your responsibilities with a
            comprehensive view of all your tasks.
          </p>
        </hgroup>

        <div className="mt-8 md:mt-16 border-y border-gray-100 flex justify-between">
          <div className="md:ml-8 flex -mb-px">
            <button className="px-7 py-4 font-semibold text-sm/6 text-gray-800 border-b border-gray-500">
              All Tasks
            </button>
            <button className="px-7 py-4 font-medium text-sm/6 text-gray-500 border-b border-transparent">
              Work
            </button>
          </div>
          <div className="hidden md:flex mr-12 gap-x-9">
            <button className="flex items-center gap-x-1.5">
              <PlusSmallIcon className="w-4 h-4 text-gray-500" />
              <span className="text-gray-900 font-medium text-sm/6">
                New category
              </span>
            </button>
            <button className="flex items-center gap-x-1.5">
              <span className="text-gray-900 font-medium text-sm/6">
                Sort by
              </span>
              <ChevronDownIcon className="w-4 h-4 text-gray-500" />
            </button>
          </div>
          <button className="mr-2.5 md:hidden p-3.5">
            <EllipsisHorizontalIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <ul className="divide-y divide-gray-100 text-sm/6 overflow-x-auto">
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="bg-red-500/[0.15] font-medium text-red-700 rounded-full py-0.5 px-3">
                High
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="bg-yellow-500/[0.15] font-medium text-yellow-600 rounded-full py-0.5 px-3">
                Medium
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="bg-gray-100 font-medium text-gray-600 rounded-full py-0.5 px-3">
                Low
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex justify-between h-14 items-center whitespace-nowrap gap-x-12 w-full">
            <div className="text-gray-800 font-medium ml-8">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex gap-x-6 items-center justify-end min-w-[220px] pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
        </ul>
        <div className="relative">
          <div className="absolute inset-y-0 flex items-center justify-center left-7">
            <PlusSmallIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Add new task to the category"
            className="w-full focus:outline-none border-y border-gray-100 block py-5 pl-[58px] placeholder:text-gray-500 placeholder:text-sm/6"
          />
          <div className="absolute top-[18px] left-[16.65rem] hidden md:block">
            <div className="border border-gray-200 rounded-md px-3 py-1 text-xs/5 font-semibold">
              Control + Space
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
