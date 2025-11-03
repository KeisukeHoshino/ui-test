import { userEvent, within } from "storybook/test";
import Form from "./Form";
import type { Meta, StoryObj } from "@storybook/react";
import { expect } from "@storybook/jest";

const meta = {
  title: "Form",
  component: Form,
} as Meta<typeof Form>;

export default meta;

type Story = StoryObj<typeof Form>;

export const Default: Story = {};

export const Testing: Story = {
  // playファンクションを使用することで初期状態だけではなく、testing-libraryとほとんど同じ書き方で、ユーザー操作のシュミレートや、テストを書くことができる
  play: async ({ canvasElement }) => {
    // canvasはtesting-libraryのscreenオブジェクトと非常によく似たもの
    const canvas = within(canvasElement);
    const input = canvas.getByRole("textbox");
    expect(input).toHaveTextContent("");
    // testing-libraryとほ異なり、setup関数でuserインスタンスを生成する必要はない
    await userEvent.type(input, "play function");
    await expect(canvas.getByDisplayValue("play function")).toBeInTheDocument();
  },
};
