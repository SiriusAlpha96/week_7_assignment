// import React from "react";

// import { useState } from "react"


export default function ParagraphGen() {
  // const [setGenerate] = useState("white")

  
  return (
    <div>
        <div className=" font-medium text-gray-700">ParagraphGen
        <input type="number" className="shadow-md shadow-slate-400 px-0.5"/>
        <button
          onClick={() => generateRandomParagraph()}
          className="bg-blue-800 text-white p-3 rounded py-1 px-px">
          Generator
        </button>
        </div>
    </div>
  )

  // randomParagraphGenerator.ts

function generateRandomParagraph(sentenceCount: number = 5): string {
  const sentences = [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      "Vivamus lacinia odio vitae vestibulum.",
      "Sed nec felis pellentesque, luctus nisl sed, ullamcorper tellus.",
      "In sed odio sit amet lorem sollicitudin.",
      "Nulla consequat massa quis enim.",
      "Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.",
      "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
      "Nullam dictum felis eu pede mollis pretium.",
      "Integer tincidunt. Cras dapibus.",
      "Vivamus elementum semper nisi."
  ];

  let paragraph = "";
  for (let i = 0; i < sentenceCount; i++) {
      const randomIndex = Math.floor(Math.random() * sentences.length);
      paragraph += sentences[randomIndex] + " ";
  }

  return paragraph.trim();
}


}