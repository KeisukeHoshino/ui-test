import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AsyncComponent from "./AsyncComponent";

const user = userEvent.setup();

describe("AsyncComponent", () => {
  it("ボタンをクリックすると非同期処理が実行される", async () => {
    render(<AsyncComponent />);
    expect(screen.getByText("Initial text")).toBeInTheDocument();

    const button = screen.getByRole("button");
    await user.click(button);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    // waitFor関数は処理を待っているというよりは、所定の時間、引数のコールバック関数をリトライし続ける関数
    // waitFor関数を使用した非同期処理のテストは、実行時間が長くなりがちのため、このテストは本当に必要かを取捨選択したり、非同期処理の部分はモック化するなど、テストの実行コストを下げるような検討をした方が良い
    await waitFor(
      () => {
        expect(screen.getByText("Updated text")).toBeInTheDocument();
      },
      { interval: 50, timeout: 3000 }
    );
  });
});
