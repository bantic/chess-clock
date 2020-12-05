import { helper } from "@ember/component/helper";
import { assert } from "@ember/debug";

export default helper(function formatMs([ms, format] /*, hash*/) {
  assert(`Only "mm:ss" supported`, format === "mm:ss");

  let mm = Math.floor(ms / (1000 * 60));
  let ss = Math.floor((ms - mm * 1000 * 60) / 1000);

  mm = `${mm}`.padStart(2, "0");
  ss = `${ss}`.padStart(2, "0");

  return `${mm}:${ss}`;
});
