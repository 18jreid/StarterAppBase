import { Counter } from "./Counter";

export const Question1 = () => {
  return (
    <div>
      <Counter min={-5} max={5}></Counter>
      <Counter min={-15} max={-5}></Counter>
      <Counter min={5} max={15}></Counter>
    </div>
  );
};
