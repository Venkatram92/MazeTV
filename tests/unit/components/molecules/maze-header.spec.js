import mazeHeader from "@/components/molecules/maze-header.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeSearch", () => {
  let headerWrapper;
  beforeEach(() => {
    headerWrapper = shallowMount(mazeHeader, {
      stubs: ["router-link"]
    });
  });
  it("should check the html markup", () => {
    const expected =
      '<nav class="navbar navbar-expand-lg navbar-dark bg-dark">';
    expect(headerWrapper.html()).toContain(expected);
  });
});
