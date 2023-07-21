import { fetchAPI } from "./fetchData";

describe("fetchAPI", () => {
  it("returns an array of strings", () => {
    const result = fetchAPI(new Date());
    expect(Array.isArray(result)).toBe(true);
    result.forEach((item) => {
      expect(typeof item).toBe("string");
    });
  });

  it("returns an array of length between 0 and 12", () => {
    const result = fetchAPI(new Date());
    expect(result.length).toBeGreaterThanOrEqual(0);
    expect(result.length).toBeLessThanOrEqual(12);
  });

  it("returns an array of strings in the format 'HH:MM'", () => {
    const result = fetchAPI(new Date());
    result.forEach((item) => {
      expect(item).toMatch(/^\d{2}:\d{2}$/);
    });
  });
});