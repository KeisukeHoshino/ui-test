import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  // サイドバーに表示される名前
  title: "Button",
  // storyを設定するコンポーネント
  component: Button,
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
