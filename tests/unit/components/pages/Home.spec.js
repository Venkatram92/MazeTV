import Home from "@/components/pages/Home.vue";
//import ShowsService from "@/services/ShowsService.js";
import { createLocalVue, shallowMount } from "@vue/test-utils";

describe("Home component", () => {
  let homeWrapper;
  beforeEach(() => {
    const localVue = createLocalVue();
    homeWrapper = shallowMount(Home, {
      localVue,
      data() {
        return {
          popularShows: [{}, {}],
          showsByGenres: [{ genre: "Action" }]
        };
      }
    });
  });

  it("should render popular shows mark up", () => {
    expect(homeWrapper.find("maze-popular-stub")).toBeTruthy();
  });

  it("should render genre wise shows mark up", () => {
    expect(homeWrapper.find("maze-genre-stub")).toBeTruthy();
  });

  xit("should call getshows method", () => {
    expect(homeWrapper.vm.getShows()).toHaveBeenCalled();
  });
});
