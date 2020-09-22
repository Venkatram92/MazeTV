import mazeShowInfo from "@/components/molecules/maze-showInfo.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeShowInfo component", () => {
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

  afterEach(() => {
    showInfoWrapper.destroy();
  });

  it("should render html to display Rating", () => {
    const expected = '<span class="font-weight-bold">Rating: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
  it("should rnder html to display Runtime", () => {
    const expected = '<span class="font-weight-bold">Runtime: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
  it("should render html to display Language", () => {
    const expected = '<span class="font-weight-bold">Language: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
  it("should render html to display release date", () => {
    const expected = '<span class="font-weight-bold">Release date: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
  it("should render html to display genres", () => {
    const expected = '<span class="font-weight-bold">Genres: </span>';
    expect(showInfoWrapper.html()).toContain(expected);
  });
});
