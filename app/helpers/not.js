import { helper } from "@ember/component/helper";

export default helper(function not([test] /*, hash*/) {
  return !test;
});
