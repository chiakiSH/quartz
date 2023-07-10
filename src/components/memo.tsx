"use client";

import React from "react";

export interface MemoProps extends React.ComponentProps<"div"> {
  text: string;
  date: number;
}

export function Memo({ text, date }: MemoProps) {
  const [done, setDone] = React.useState<boolean>(false);

  if (done) {
    return (
      <div>
        <p>Text: {text}</p>
        <p>Date: {date}</p>
        <button
          onClick={() => {
            setDone(false);
          }}
        >
          undo
        </button>
      </div>
    );
  } else {
    return (
      <div>
        <p>Text: {text}</p>
        <p>Date: {date}</p>
        <button
          onClick={() => {
            setDone(true);
          }}
        >
          did it!
        </button>
      </div>
    );
  }
}
