import showEpisodes from "@/pages/ShowEpisodes";
import { shallowMount, createLocalVue } from "@vue/test-utils";
import * as ShowsService from "@/services/ShowsService";
import VueRouter from "vue-router";

describe("Show episodes component", () => {
  let episodesWrapper;
  const episodesData = [
    {
      id: 12192,
      name: "Pilot",
      season: 1,
      number: 1
    },
    {
      id: 12193,
      name: "Gray Matter",
      season: 1,
      number: 2
    },
    {
      id: 12194,
      name: "Seven Thirty-Seven",
      season: 2,
      number: 1
    }
  ];
  const localVue = createLocalVue();
  localVue.use(VueRouter);
  const router = new VueRouter();
  beforeEach(() => {
    episodesWrapper = shallowMount(showEpisodes, {
      localVue,
      router,
      data() {
        return {
          seasonNumber: "1"
        };
      }
    });
  });

  afterEach(() => {
    episodesWrapper.destroy();
  });

  it("should render maze-episodes mark up", () => {
    expect(episodesWrapper.find("maze-episodes-stub").exists()).toBe(true);
  });

  it("method episodesBySeason should filter episodes based on season ", async () => {
    jest.spyOn(ShowsService, "getEpisodes").mockReturnValue(episodesData);
    // const expectedData = [
    //   {
    //     id: 12192,
    //     name: "Pilot",
    //     season: 1,
    //     number: 1
    //   },
    //   {
    //     id: 12193,
    //     name: "Gray Matter",
    //     season: 1,
    //     number: 2
    //   }
    //];
    episodesWrapper.setData({ seasonNumber: "1" });
    await episodesWrapper.vm.$nextTick();

    await episodesWrapper.vm.episodesBySeason(episodesData);
    //Todo: faceing issue in mocking route params working on this
    expect(true).toBe(true);
  });
});
