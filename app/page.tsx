import Image from "next/image";
import Column from "@/components/Column"

import data from "@/data/data.json";

export default function Home() {
  const { columns } = data

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="grid grid-cols-4 gap-40">
        { columns.map( (column, index) => (<Column column={column} key={index}/>) ) }
      </div>
      <div>
        <h1> <strong> Goal? </strong>: Build a UI trello clone (basic) to see how fast and useful with Next.js, React, Tailwind, Flexbox and Grid</h1>
        <a className="underline" href="https://youtu.be/GjeLdNKT7M0" target="_blank"><h1> <strong>40</strong> minutes to <strong>build</strong> and <strong>describe</strong> the UI</h1></a>
        <strong> TODO : </strong>
        <h1>UI Design - ✅</h1>
        <h1>Ability to move from button - 🚧</h1>
      </div>
    </main>
  );
}
