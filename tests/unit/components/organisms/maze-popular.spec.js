import mazePopular from "@/components/organisms/maze-popular.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazePopular component", () => {
  let popularShowsWrapper;
  beforeEach(() => {
    popularShowsWrapper = shallowMount(mazePopular, {
      stubs: ["router-link", "Carousel3d", "Slide"],
      propsData: {
        popularShows: []
      }
    });
  });

  afterEach(() => {
    popularShowsWrapper.destroy();
  });

  it("sshould check ratedBy data property", () => {
    popularShowsWrapper.setData({ ratedBy: 10 });
    expect(popularShowsWrapper.vm.ratedBy).toBe(10);
  });
  it("should render the html markup", () => {
    const expected = '<h3 class="pl-4 pt-4 text-secondary">Popular shows</h3>';
    expect(popularShowsWrapper.html()).toContain(expected);
  });
});
