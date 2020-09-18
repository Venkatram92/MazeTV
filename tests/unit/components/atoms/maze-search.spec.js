import mazeSearch from "@/components/atoms/maze-search.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeSearch", () => {
  let searchWrapper;
  beforeEach(() => {
    searchWrapper = shallowMount(mazeSearch, {
      stubs: ["router-link"]
    });
  });
  it("button should be disable if search text is empty ", () => {
    expect(searchWrapper.find("button").attributes("disabled")).toBe(
      "disabled"
    );
  });
  it("button should be enable if search text entered", async () => {
    searchWrapper.setData({ searchtext: "Test show" });

    await searchWrapper.vm.$nextTick();
    expect(searchWrapper.find("button").attributes("disabled")).toBeUndefined();
  });
});
