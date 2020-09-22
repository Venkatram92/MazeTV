import mazelazyImage from "@/components/atoms/maze-lazyImage.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeImage component", () => {
  let lazyImageWrapper;
  beforeEach(() => {
    let intersect;
    global.IntersectionObserver = function(cb) {
      intersect = cb;
      return {
        observe: () => {},
        disconnect: () => {}
      };
    };
    lazyImageWrapper = shallowMount(mazelazyImage, {
      propsData: {
        src:
          "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
      }
    });
    intersect([{ isIntersecting: true }]);
  });
  it("should check the html markup", () => {
    const expected =
      '<img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg" class="p-1 w-100">';
    expect(lazyImageWrapper.html()).toContain(expected);
  });
});
