"use client"
import { useState,useEffect } from "react"
export default function page() {

interface JokeResponse {
        setup: string;
        punchline: string;
      }

  const [jok,setJok]  = useState("")


  useEffect(() => {
    fetchJoke();
  }, []); 

  async function fetchJoke(): Promise<void> {
    try {
      // Make a GET request to the joke API
      const response = await fetch(
        "https://official-joke-api.appspot.com/random_joke"
      );
      const data: JokeResponse = await response.json();
      // Update state with the fetched joke
      setJok(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      console.error("Error fetching joke:", error); // Log any errors
      // Set an error message if the fetch fails
      setJok("Failed to fetch joke. Please try again.");
    }
  }

  return (
    <div className="flex justify-center items-center ">
        <div className="bg-white w-[300px] md:w-[400px] lg:w-[450px] h-[250px] md:h-[250px] lg:h-[280px] border-2 rounded-xl mt-[50px] lg:mt-[200px] md:mt-[100px] ">
            <h1 className="flex justify-center items-center mt-[20px] text-3xl font-bold text-black">😂 Random Joke 👈</h1>
            <p className="flex justify-center items-center mt-[40px] text-gray-600 text-center text-xl ml-[10px] mr-[10px]">{jok}</p>
            <div className="flex justify-center items-center mt-[20px]"><button onClick={fetchJoke} className=" bg-green-500 border-xl rounded-xl h-[40px] w-[160px]  mt-[50px] text-sm font-semibold ">😂 Get New Joke 😂</button></div>

        </div>
    </div>
  )
}
