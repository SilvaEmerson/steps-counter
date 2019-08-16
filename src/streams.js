import { Subject, timer } from "rxjs";
import { map, takeUntil } from "rxjs/operators";


const baseCounterObs = new timer(0, 1000).pipe(map(el => el + 1));

export const totalStepsSubject = new Subject();

export const isStoped = new Subject();

export const isWalking = new Subject();

export const counterObs = baseCounterObs.pipe(takeUntil(isStoped));

export const stopTimeObs = baseCounterObs.pipe(
  map(i => `${Math.floor(i / 60)}m: ${i % 60}s`),
  takeUntil(isWalking)
);
