import { CanActivateFn } from '@angular/router';

export const detailsGuard: CanActivateFn = (route, state) => {
  return true;
};
