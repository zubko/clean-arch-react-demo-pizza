import { resetAllStores } from "@app/core/repository/repository";
import { first } from "rxjs";
import { getCategories$ } from "./categories.presenter";

describe("Categories presenter", () => {
  afterEach(() => {
    resetAllStores();
  });

  it("returns the view model with the categories", () => {
    getCategories$
      .pipe(first())
      .subscribe((props) => expect(props).toMatchSnapshot())
      .unsubscribe();
  });
});
