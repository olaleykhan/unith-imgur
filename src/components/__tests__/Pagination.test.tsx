import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import Pagination from "@/components/Pagination";
import { setCurrentPage } from "@/lib/store/images/imageSlice";
import type { RootState } from "@/lib/store";
import { beforeEach, describe, test, expect, vi } from "vitest";

const mockStore = configureStore<Partial<RootState>>([]);

describe("Pagination Component", () => {
  let store: ReturnType<typeof mockStore>;

  beforeEach(() => {
    store = mockStore({
      image: {
        currentPage: 1,
        itemsPerPage: 10,
        active: null,
      },
    });

    store.dispatch = vi.fn();
  });

  test("renders pagination controls", () => {
    render(
      <Provider store={store}>
        <Pagination totalItems={100} />
      </Provider>
    );

    // Check if Pagination component renders correctly
    expect(screen.getByRole("navigation")).toBeInTheDocument();
  });

  test("handles page change", async () => {
    const user = userEvent.setup();
    render(
      <Provider store={store}>
        <Pagination totalItems={100} />
      </Provider>
    );

    // Click on page 2
    await user.click(screen.getByText("2"));

    // Check if setCurrentPage action is dispatched
    expect(store.dispatch).toHaveBeenCalledWith(setCurrentPage(2));
  });

  test("disables previous button on first page", () => {
    render(
      <Provider store={store}>
        <Pagination totalItems={100} />
      </Provider>
    );

    // Check if previous button is disabled on the first page
    expect(screen.getByLabelText("Go to previous page")).toBeDisabled();
  });

  test("disables next button on last page", () => {
    store = mockStore({
      image: {
        currentPage: 10,
        itemsPerPage: 10,
        active: null,
      },
    });

    store.dispatch = vi.fn();

    render(
      <Provider store={store}>
        <Pagination totalItems={100} />
      </Provider>
    );

    // Check if next button is disabled on the last page
    expect(screen.getByLabelText("Go to next page")).toBeDisabled();
  });
});
