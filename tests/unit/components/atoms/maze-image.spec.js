import mazeImage from "@/components/atoms/maze-image.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeImage", () => {
  let imageWrapper;
  beforeEach(() => {
    let intersect;
    global.IntersectionObserver = function(cb) {
      intersect = cb;
      return {
        observe: () => {},
        disconnect: () => {}
      };
    };
    imageWrapper = shallowMount(mazeImage, {
      propsData: {
        src:
          "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg"
      }
    });
    intersect([{ isIntersecting: true }]);
  });
  it("should check the html markup", () => {
    const expected =
      '<img src="http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg" class="img-fluid p-1 w-100">';
    expect(imageWrapper.html()).toContain(expected);
  });
});
