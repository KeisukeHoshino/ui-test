import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "storybook/test";

const meta = {
  // サイドバーに表示される名前
  title: "Button",
  // storyを設定するコンポーネント
  component: Button,
  // Controlsタブの入力値を制限
  argTypes: {
    label: {
      options: ["Primaryボタン", "Normalボタン"],
      control: { type: "select" },
    },
  },
  // アクションはコンポーネントがpropsで渡されたイベントハンドラーがどのように呼び出されたかを確認するための機能
  args: { onClick: fn() },
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof Button>;

// storyはmetaデータと異なり、名前付きexportで作成する
export const Primary: Story = {
  // Buttonコンポーネントのpropsを渡す
  args: { label: "Primaryボタン", primary: true },
};

export const Normal: Story = {
  // Buttonコンポーネントのpropsを渡す
  args: { label: "Normalボタン", primary: false },
};
