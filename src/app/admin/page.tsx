"use client";
import { useState } from "react";
import { useWriteContract } from "wagmi";
import abi from "@/ABI/abi.json";

export default function Admin() {
  const [title, setTitle] = useState<string>();
  const [endTime, setEndTime] = useState<number>();

  const { writeContract } = useWriteContract();

  const handleCreate = async () => {
    if (!title || !endTime) return;
    writeContract({
      abi,
      address: "0xef7dB5407D2F2a36e36fF28D336B136F43B8C946",
      functionName: "startPoll",
      args: [title, endTime],
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full space-y-6 flex flex-col items-center">
        <h3 className="text-lg font-medium tracking-wide text-white">
          Create Polls
        </h3>
        <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5 px-5">
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Polls Question Title
            </label>
            <input
              onChange={(e) => setTitle(e.target.value)}
              type="text"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Your Question"
              required
            />
          </div>
          <div className="mb-5">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Poll Ends In (Timestamp)
            </label>
            <input
              onChange={(e) => setEndTime(+e.target.value)}
              type="text"
              id="timestamp"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            onClick={handleCreate}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create
          </button>
        </div>
      </div>
    </main>
  );
}
