/**
 * @jest-environment jsdom
 */

import GamePlay from "./GamePlay";
test("GamePlay", () => {
  const result = new GamePlay();
  expect(result.boardSize).toEqual(4);
});
