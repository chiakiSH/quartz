"use Client";

import React from "react";
import { Memo, MemoProps } from "./memo";

export function Memolist() {
  const [memoPropses, setMemoPropses] = React.useState<Set<MemoProps>>(
    new Set<MemoProps>()
  );
  const [text, setText] = React.useState<string>("");
  const [date, setDate] = React.useState<number>(0);

  const textChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };
  const dateChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDate(parseInt(e.target.value));
  };
  const addButtonClickHandler = () => {
    setText("");
    setDate(0);
    setMemoPropses((mp) => {
      mp.add({ text, date });
      return mp;
    });
  };

  const memoPropList: MemoProps[] = [];
  memoPropses.forEach((value, value2, set) => {
    memoPropList.push(value);
  });

  return (
    <div>
      {memoPropList.map((value, index, array) => (
        <Memo text={value.text} date={value.date} key={index} />
      ))}
      <input value={text} onChange={textChangeHandler}></input>
      <input value={date} onChange={dateChangeHandler}></input>
      <button onClick={addButtonClickHandler}>追加</button>
    </div>
  );
}
