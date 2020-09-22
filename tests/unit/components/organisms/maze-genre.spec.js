import mazeGenre from "@/components/organisms/maze-genre.vue";
import { shallowMount } from "@vue/test-utils";

describe("mazeGenre component", () => {
  let genreWrapper;
  beforeEach(() => {
    genreWrapper = shallowMount(mazeGenre, {
      stubs: ["router-link"],
      propsData: {
        genresData: [{ genre: "Action" }]
      }
    });
  });

  afterEach(() => {
    genreWrapper.destroy();
  });

  it("should render the html markup", () => {
    const expected = '<h3 class="pl-4 py-4 ml-1 text-secondary">Action</h3>';
    expect(genreWrapper.html()).toContain(expected);
  });
});
