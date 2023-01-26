import { renderHook } from "@testing-library/react-hooks";
import { useNetworkCheck } from "./useNetworkCheck";

describe("useNetworkCheck", () => {
  beforeEach(() => {
    Object.defineProperty(navigator, "onLine", { value: true, writable: true });
  });

  it("should return true when the browser is online", () => {
    const { result } = renderHook(() => useNetworkCheck());
    expect(result.current).toBe(true);
  });

  it("should return false when the browser is offline", () => {
    Object.defineProperty(navigator, "onLine", {
      value: false,
      writable: true,
    });
    const { result } = renderHook(() => useNetworkCheck());
    expect(result.current).toBe(false);
  });
});
