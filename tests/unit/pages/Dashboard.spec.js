import Dashboard from "@/pages/Dashboard";
import * as showsService from "@/services/ShowsService";
import { shallowMount } from "@vue/test-utils";

describe("Dashboard component", () => {
  let dashboardWrapper;
  const allShows = [
    {
      id: 1,
      genres: ["Action", "Family"],
      rating: { average: 6.5 }
    },
    {
      id: 2,
      genres: ["Family", "Comdey"],
      rating: { average: 9.0 }
    }
  ];
  beforeEach(() => {
    dashboardWrapper = shallowMount(Dashboard, {
      data() {
        return {
          popularShows: [{}, {}],
          showsByGenres: [{ genre: "Action", shows: [] }]
        };
      }
    });
    jest.spyOn(showsService, "getShows").mockReturnValue(allShows);
  });

  afterEach(() => {
    dashboardWrapper.destroy();
  });

  it("should render maze-popular mark up", () => {
    expect(dashboardWrapper.find("maze-popular-stub").exists()).toBe(true);
  });

  it("should render maze-genre mark up", () => {
    expect(dashboardWrapper.find("maze-genre-stub").exists()).toBe(true);
  });
  it("should not render maze-popular maze-genre if shows data is empty", async () => {
    dashboardWrapper.setData({ popularShows: [], showsByGenres: [] });
    await dashboardWrapper.vm.$nextTick();
    expect(dashboardWrapper.find("maze-popular-stub").exists()).toBe(false);
    expect(dashboardWrapper.find("maze-genre-stub").exists()).toBe(false);
  });

  describe("method getUniqueGenres", () => {
    it("should return unique genres", () => {
      const uniqueShows = dashboardWrapper.vm.getUniqueGenres(allShows);
      expect(uniqueShows).toStrictEqual(["Action", "Comdey", "Family"]);
    });
    it("should return empty array if shows data is empty", () => {
      const uniqueShows = dashboardWrapper.vm.getUniqueGenres([]);
      expect(uniqueShows).toStrictEqual([]);
    });
  });
  describe("method getPopularShows", () => {
    it("should return shows where the rating is greater than or equal to 9", () => {
      const allShows = [
        {
          id: 1,
          rating: { average: 6.5 }
        },
        {
          id: 2,
          rating: { average: 9.0 }
        },
        {
          id: 3,
          rating: { average: 9.2 }
        }
      ];
      const popularShows = dashboardWrapper.vm.getPopularShows(allShows);
      expect(popularShows.length).toBe(2);
    });
  });
  describe("method getPopularShows", () => {
    it("should return shows based on genres", async () => {
      const uniqueShows = ["Action", "Comdey", "Family"];
      jest
        .spyOn(dashboardWrapper.vm, "getUniqueGenres")
        .mockReturnValue(uniqueShows);
      const showsByGenres = await dashboardWrapper.vm.getShowsByGenres(
        allShows
      );
      const expected = [
        {
          genre: "Action",
          shows: [
            {
              id: 1,
              genres: ["Action", "Family"],
              rating: { average: 6.5 }
            }
          ]
        },
        {
          genre: "Comdey",
          shows: [
            {
              id: 2,
              genres: ["Family", "Comdey"],
              rating: { average: 9.0 }
            }
          ]
        },
        {
          genre: "Family",
          shows: [
            {
              id: 2,
              genres: ["Family", "Comdey"],
              rating: { average: 9.0 }
            },
            {
              id: 1,
              genres: ["Action", "Family"],
              rating: { average: 6.5 }
            }
          ]
        }
      ];
      expect(dashboardWrapper.vm.getUniqueGenres).toHaveBeenCalledWith(
        allShows
      );
      expect(showsByGenres).toStrictEqual(expected);
    });
  });
});
