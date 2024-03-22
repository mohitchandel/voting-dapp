"use client";
import { useReadContract, useAccount, useWriteContract } from "wagmi";
import abi from "@/ABI/abi.json";
import { useEffect, useState } from "react";
import { http, createConfig, readContract } from "@wagmi/core";
import { sepolia } from "@wagmi/core/chains";

export default function Home() {
  const [questions, setQuestions] = useState<any>();
  const [numberOfQuestions, setNumberOfQuestions] = useState<number>();
  const { writeContract } = useWriteContract();

  const config = createConfig({
    chains: [sepolia],
    transports: {
      [sepolia.id]: http(),
    },
  });

  const result: any = useReadContract({
    abi,
    address: "0xef7dB5407D2F2a36e36fF28D336B136F43B8C946",
    functionName: "getQuestionIds",
  });

  async function getQuestionsData() {
    let questions = [];
    if (numberOfQuestions) {
      for (let i = 1; i <= numberOfQuestions; i++) {
        const questionData = await readContract(config, {
          abi,
          address: "0xef7dB5407D2F2a36e36fF28D336B136F43B8C946",
          functionName: "getQuestionById",
          args: [i],
        });
        questions.push(questionData);
      }
    }
    console.log(questions);
    setQuestions(questions);
  }

  function convertDate(timestamp: BigInt) {
    const unixTimestamp = Number(timestamp);
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleString();
  }

  useEffect(() => {
    function getNoOfQuestions() {
      result.refetch();
      if (result.data) {
        setNumberOfQuestions(Number(result.data));
      }
    }
    getNoOfQuestions();
    getQuestionsData();
  }, [result]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="w-full space-y-6 flex flex-col items-center">
        <h3 className="text-lg font-medium tracking-wide text-white">
          Vote For The Polls
        </h3>
        {questions &&
          questions.map((items: any, index: number) => (
            <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 py-5">
              <div className="flex flex-col items-center pb-10">
                {items[0] ? (
                  <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
                    {items[0]}
                  </h5>
                ) : (
                  <h5 className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></h5>
                )}
                <div className="flex mt-4 md:mt-6">
                  <button
                    onClick={() =>
                      writeContract({
                        abi,
                        address: "0xef7dB5407D2F2a36e36fF28D336B136F43B8C946",
                        functionName: "vote",
                        args: [index + 1, 0],
                      })
                    }
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-green-600 rounded-lg "
                  >
                    Yes
                  </button>
                  <button
                    onClick={() =>
                      writeContract({
                        abi,
                        address: "0xef7dB5407D2F2a36e36fF28D336B136F43B8C946",
                        functionName: "vote",
                        args: [index + 1, 1],
                      })
                    }
                    className="py-2 px-4 ms-2 text-sm font-medium text-white bg-red-600 rounded-lg "
                  >
                    No
                  </button>
                </div>
                <p className="mt-5">Ends In : {convertDate(items[1])}</p>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
