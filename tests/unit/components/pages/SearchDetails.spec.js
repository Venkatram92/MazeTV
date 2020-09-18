import searchDetails from "@/components/pages/SearchDetails.vue";
import { shallowMount } from "@vue/test-utils";

describe("search details component", () => {
  let searchDetailsWrapper;
  beforeEach(() => {
    searchDetailsWrapper = shallowMount(searchDetails, {
      propsData: {
        searchText: "100"
      },
      data() {
        return {
          shows: [{ show: { id: 1 } }, { show: { id: 1 } }]
        };
      }
    });
  });
  it("search details mark up should render", () => {
    const expected = '<figure class="figure mt-4">';
    expect(searchDetailsWrapper.html()).toContain(expected);
  });
});
