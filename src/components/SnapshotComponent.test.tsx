import { render } from "@testing-library/react";
import SnapshotComponent from "./SnapshotComponent";

it("Snapshotテスト", () => {
  // 意図的に変更を加える場合にはSnapshotをアップデートする必要がある
  // Snapshotのアップデートはテスト実行時に「-- -u」を付与する
  const { container } = render(<SnapshotComponent text="Vue" />);
  expect(container).toMatchSnapshot();
});
