import { trigger, state, style, transition, animate } from '@angular/animations';
export const fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', [
      animate('1s ease-in-out', style({ opacity: 1 }))
    ])
  ]);