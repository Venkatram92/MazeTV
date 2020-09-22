import Dashboard from "@/pages/Dashboard.vue";
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

  it("should render popular shows mark up", () => {
    expect(dashboardWrapper.find("maze-popular-stub")).toBeTruthy();
  });

  it("should render genre wise shows mark up", () => {
    expect(dashboardWrapper.find("maze-genre-stub")).toBeTruthy();
  });
  it("should test getUniqueGenres", () => {
    const uniqueShows = dashboardWrapper.vm.getUniqueGenres(allShows);
    expect(uniqueShows).toStrictEqual(["Action", "Comdey", "Family"]);
  });
  it("should test getPopularShows", () => {
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
  it("should test getShowsByGenres", async () => {
    const uniqueShows = ["Action", "Comdey", "Family"];
    jest
      .spyOn(dashboardWrapper.vm, "getUniqueGenres")
      .mockReturnValue(uniqueShows);
    const showsByGenres = await dashboardWrapper.vm.getShowsByGenres(allShows);
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

    expect(dashboardWrapper.vm.getUniqueGenres).toHaveBeenCalledWith(allShows);
    expect(showsByGenres).toStrictEqual(expected);
  });
});
