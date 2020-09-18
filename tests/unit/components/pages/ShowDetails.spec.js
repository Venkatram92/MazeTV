import showDetails from "@/components/pages/ShowDetails.vue";
import { shallowMount } from "@vue/test-utils";

describe("search details component", () => {
  let showDetailsWrapper;
  beforeEach(() => {
    showDetailsWrapper = shallowMount(showDetails);
  });
  it("search details mark up should render", () => {
    expect(true).toBe(true);
  });
});
