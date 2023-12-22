import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  ResolveFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import {
    Configuration,
  DynamicPagesConfiguration,
  DynamicRoutesPaths,
} from '../models/routes';

export const configPageResolver: ResolveFn<Configuration | null> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
): Configuration | null => {
  const router = inject(Router);
  let url = state.url;

  const urls = (
    Object.keys(DynamicPagesConfiguration) as DynamicRoutesPaths[]
  ).map((page) => {
    return DynamicPagesConfiguration[page].settings.linkHref;
  });

  if (url.includes('?')) {
    url = url.split('?')[0];
  }

  if (urls.includes(url)) {
    const page = (
      Object.keys(DynamicPagesConfiguration) as DynamicRoutesPaths[]
    ).filter(
      (page) => DynamicPagesConfiguration[page].settings.linkHref === url
    ).map((page) => DynamicPagesConfiguration[page])[0];
    console.log(page);
    return page;
  }  
  router.navigate(['not-found']);
  return null;
 
};
