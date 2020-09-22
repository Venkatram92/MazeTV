import mazeShowInfo from "@/components/molecules/maze-showInfo.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeShowInfo", () => {
  let showInfoWrapper;
  beforeEach(() => {
    showInfoWrapper = shallowMount(mazeShowInfo, {
      propsData: {
        showInfo: {
          image: { medium: "" },
          rating: { average: 8.5 },
          genres: ["Action", "Family"],
          runtime: 120,
          language: "English",
          premiered: "24-09-2020",
          description: ""
        }
      }
    });
  });
  it("should check the html markup", () => {
    const expected = '<span class="font-weight-bold">Rating: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
});
