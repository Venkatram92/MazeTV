import { shallowMount } from "@vue/test-utils";
import app from "@/App.vue";
import mazeHeader from "@/components/molecules/maze-header.vue";

describe("App Component", () => {
  let appWrapper;

  beforeEach(() => {
    appWrapper = shallowMount(app, {
      stubs: ["router-view"]
    });
  });

  afterEach(() => {
    appWrapper.destroy();
  });

  it("should render the correct markup", () => {
    expect(appWrapper.html()).toContain('<div id="app">');
  });

  it('should have a div element with id="app"', () => {
    expect(appWrapper.attributes("id")).toBe("app");
  });

  it("should load the maze-header", () => {
    expect(mazeHeader).toBeTruthy();
  });

  it("should have a <maze-header-stub></maze-header-stub>", () => {
    expect(appWrapper.html()).toContain(
      "<maze-header-stub></maze-header-stub>"
    );
  });
});
