import { first, Observable } from "rxjs";

export const getFirstValue = <T>(observable$: Observable<T>): T => {
  let val: T | undefined = undefined;
  observable$
    .pipe(first())
    .subscribe((v) => {
      val = v;
    })
    .unsubscribe();
  return val as T;
};
