import { act, renderHook } from "@testing-library/react";
import useCounter from "./useCounter";

describe("useCounter", () => {
  it("increment", () => {
    const { result } = renderHook(() => useCounter(1));
    expect(result.current.count).toBe(1);
    // hooksのstateを更新する処理を行う場合、result.current.incrementのように実行したとしても、テスト内で変更は同期されない。
    // stateの変更を同期したい場合には、act関数を使用する
    act(() => result.current.increment());
    expect(result.current.count).toBe(2);
    act(() => result.current.decrement())
    expect(result.current.count).toBe(1);
  });
});
