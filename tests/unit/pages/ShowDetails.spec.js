import showDetails from "@/pages/ShowDetails.vue";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import * as ShowsService from "@/services/ShowsService";
import VueRouter from "vue-router";

describe("Search details component", () => {
  let showDetailsWrapper;
  const showInfo = {
    id: 169,
    name: "Breaking Bad",
    language: "English",
    genres: ["Drama", "Crime", "Thriller"],
    runtime: 60,
    premiered: "2008-01-20",
    officialSite: "http://www.amc.com/shows/breaking-bad",
    rating: {
      average: 9.3
    },
    image: {
      medium:
        "http://static.tvmaze.com/uploads/images/medium_portrait/0/2400.jpg",
      original:
        "http://static.tvmaze.com/uploads/images/original_untouched/0/2400.jpg"
    },
    summary:
      "<p><b>Breaking Bad</b> follows protagonist Walter White, a chemistry teacher who lives in New Mexico with his wife and teenage son who has cerebral palsy. White is diagnosed with Stage III cancer and given a prognosis of two years left to live. With a new sense of fearlessness based on his medical prognosis, and a desire to secure his family's financial security, White chooses to enter a dangerous world of drugs and crime and ascends to power in this world. The series explores how a fatal diagnosis such as White's releases a typical man from the daily concerns and constraints of normal society and follows his transformation from mild family man to a kingpin of the drug trade.</p>",
    _embedded: {
      seasons: [],
      cast: [],
      crew: []
    }
  };
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();
  beforeEach(() => {
    showDetailsWrapper = shallowMount(showDetails, {
      localVue,
      router,
      data() {
        return {
          showId: "169",
          showDetails: {}
        };
      }
    });
  });

  afterEach(() => {
    showDetailsWrapper.destroy();
  });

  it("method fetchShowDetails should call getshow service call", async () => {
    jest.spyOn(ShowsService, "getShow").mockReturnValue(showInfo);
    await showDetailsWrapper.vm.fetchShowDetails();
    expect(ShowsService.getShow).toHaveBeenCalled();
  });
  it("should render mark up", () => {
    const expected = 'div class="pl-4 pr-4 pt-5 text-secondary">';
    expect(showDetailsWrapper.html()).toContain(expected);
  });
  it("should render maze-showInfo mark up", () => {
    expect(showDetailsWrapper.find("maze-showInfo-stub").exists()).toBe(true);
  });
});
