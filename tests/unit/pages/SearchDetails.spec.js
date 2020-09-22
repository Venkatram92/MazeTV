import searchDetails from "@/pages/SearchDetails.vue";
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
          shows: [{ show: { id: 1 } }, { show: { id: 2 } }]
        };
      }
    });
    const beforeRouteUpdate =
      searchDetailsWrapper.vm.$options.beforeRouteUpdate[0];
    let nextFun = jest.fn();
    const toObj = {
      params: {
        searchText: "100"
      }
    };
    beforeRouteUpdate.call(searchDetailsWrapper.vm, toObj, "fromObj", nextFun);
  });
  it("search details mark up should render", () => {
    const expected = '<h3 class="pt-4 text-secondary">Shows found "100"</h3>';
    expect(searchDetailsWrapper.html()).toContain(expected);
  });
});
