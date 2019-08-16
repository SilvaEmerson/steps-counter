import { Subject, timer } from "rxjs";
import { map, takeUntil } from "rxjs/operators";


const baseCounterObs = new timer(0, 1000).pipe(map(el => el + 1));

export const totalStepsSubject = new Subject();

export const isStopedSubject = new Subject();

export const isWalkingSubject = new Subject();

export const counterObs = baseCounterObs.pipe(takeUntil(isStopedSubject));

export const stopTimeObs = baseCounterObs.pipe(
  map(i => `${Math.floor(i / 60)}m: ${i % 60}s`),
  takeUntil(isWalkingSubject)
);
