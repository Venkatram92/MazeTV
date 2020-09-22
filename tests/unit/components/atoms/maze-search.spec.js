import mazeSearch from "@/components/atoms/maze-search.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeSearch component", () => {
  let searchWrapper;
  beforeEach(() => {
    searchWrapper = shallowMount(mazeSearch, {
      stubs: ["router-link"]
    });
  });
  it("should exists", () => {
    expect(searchWrapper.exists()).toBe(true);
  });
  it("porper html markup should be loaded", () => {
    const expected = '<form class="form-inline mt-1">';
    expect(searchWrapper.html()).toContain(expected);
  });
  it("search text box should be visiable", () => {
    expect(searchWrapper.find("input").exists()).toBe(true);
    expect(searchWrapper.find("button").exists()).toBe(false);
  });
  it("search button should be visiable after text entered in search text box", async () => {
    expect(searchWrapper.find("button").exists()).toBe(false);
    searchWrapper.setData({ searchtext: "Test show" });
    await searchWrapper.vm.$nextTick();

    expect(searchWrapper.find("button").exists()).toBe(true);
  });
});
