import {
  Bars2Icon,
  CheckCircleIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";
import {
  ChevronUpDownIcon,
  PlusSmallIcon,
  EllipsisHorizontalIcon,
  CheckCircleIcon as CheckCircleOutlineIcon,
} from "@heroicons/react/24/outline";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col justify-center bg-white md:bg-gray-50">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between border-b border-gray-200 py-2.5 pl-6 pr-4 md:mt-5 md:border-transparent md:px-9 md:py-4">
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
        <button className="hidden items-center gap-x-1 md:flex">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-300 bg-white">
            <UserIcon className="h-5 w-5 text-gray-400 " />
          </div>
          <ChevronUpDownIcon className="h-5 w-5 text-gray-400" />
        </button>
        <button className="flex h-10 w-10 items-center justify-center md:hidden">
          <Bars2Icon className="h-6 w-6 text-gray-500" />
        </button>
      </header>

      <main className="relative mx-auto w-full max-w-7xl grow rounded-t-3xl border border-gray-900/5 bg-white shadow-sm md:mt-9">
        <hgroup className="mt-8 px-6 md:mx-auto md:mt-10 md:max-w-md md:px-0 md:text-center">
          <p className="text-center"></p>
          <h1 className="text-lg font-medium text-gray-800 md:text-xl">
            Welcome back, Ilija
          </h1>
          <p className="mt-3 text-sm/6 text-gray-600">
            Stay organized and on top of your responsibilities with a
            comprehensive view of all your tasks.
          </p>
        </hgroup>

        <div
          id="tabs"
          className="mt-8 flex justify-between border-y border-gray-100 md:mt-16"
        >
          <div className="-mb-px flex md:ml-12">
            <button className="border-b border-gray-500 px-7 py-4 text-sm/6 font-semibold text-gray-800">
              All Tasks
            </button>
            <button className="border-b border-transparent px-7 py-4 text-sm/6 font-medium text-gray-500">
              Work
            </button>
          </div>
          <div className="mr-12 hidden gap-x-9 md:flex">
            <button className="flex items-center gap-x-1.5">
              <PlusSmallIcon className="h-4 w-4 text-gray-500" />
              <span className="text-sm/6 font-medium text-gray-900">
                New category
              </span>
            </button>
            <button className="flex items-center gap-x-1.5">
              <span className="text-sm/6 font-medium text-gray-900">
                Sort by
              </span>
              <ChevronDownIcon className="h-4 w-4 text-gray-500" />
            </button>
          </div>
          <button className="mr-2.5 p-3.5 md:hidden">
            <EllipsisHorizontalIcon className="h-6 w-6 text-gray-600" />
          </button>
        </div>

        <ul
          id="tasks"
          className="divide-y divide-gray-100 overflow-x-auto text-sm/6"
        >
          <li className="group flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="relative ml-12 font-medium text-gray-800">
              <div className="absolute inset-y-0 -left-8 flex items-center justify-center">
                <CheckCircleIcon className="h-5 w-5 text-lime-600" />
              </div>
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="rounded-full bg-red-500/[0.15] px-3 py-0.5 font-medium text-red-700 grayscale">
                High
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="group flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="relative ml-12 font-medium text-gray-800">
              <div className="absolute inset-y-0 -left-8 hidden items-center justify-center transition group-hover:flex">
                <CheckCircleOutlineIcon className="h-5 w-5 text-gray-500" />
              </div>
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="rounded-full bg-yellow-500/[0.15] px-3 py-0.5 font-medium text-yellow-600">
                Medium
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="ml-12 font-medium text-gray-800">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="rounded-full bg-gray-100 px-3 py-0.5 font-medium text-gray-600">
                Low
              </div>
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="ml-12 font-medium text-gray-800">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="ml-12 font-medium text-gray-800">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
          <li className="flex h-14 w-full items-center justify-between gap-x-12 whitespace-nowrap">
            <div className="ml-12 font-medium text-gray-800">
              1. Update the CSS styles for the homepage banner.
            </div>
            <div className="flex min-w-[220px] items-center justify-end gap-x-6 pr-12">
              <div className="text-gray-600">28-Aug-23</div>
            </div>
          </li>
        </ul>

        <div className="relative">
          <div className="absolute inset-y-0 left-7 flex items-center justify-center">
            <PlusSmallIcon className="h-5 w-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Add new task to the category"
            className="peer block w-full border-y border-gray-100 py-5 pl-[58px] placeholder:text-gray-500 focus:outline-none sm:text-sm/6"
          />
          <div className="absolute inset-y-0 left-[16.65rem] hidden items-center justify-center transition-opacity peer-focus:opacity-0 md:flex">
            <div className="rounded-md border border-gray-200 px-3 py-1 text-xs/5 font-semibold">
              Control + Space
            </div>
          </div>
        </div>

        <div className="absolute -right-2 -top-2 h-40 w-40 overflow-hidden">
          <span className="absolute top-0 h-2 w-2 bg-lime-600"></span>
          <span className="absolute bottom-0 right-0 h-2 w-2 bg-lime-600"></span>
          <div className="absolute bottom-0 right-0 block w-[calc(100%*1.4142)] origin-bottom-right rotate-45 bg-lime-300 p-2 text-center text-sm leading-tight">
            <span className="text-xs font-semibold uppercase text-lime-700">
              Currently Beta
            </span>
            <br />
            <span className="font-bold">App Version 1.0</span>
          </div>
        </div>
      </main>
    </div>
  );
}
