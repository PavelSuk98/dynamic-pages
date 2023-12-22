import { Routes } from '@angular/router';
import { DynamicPageComponent } from './pages/dynamic-page/dynamic-page.component';
import { NotFoundPageComponent } from './pages/not-found-page/not-found-page.component';
import { configPageResolver } from './resolver/config-page.resolver';
import { PublicComponent } from './layout/public/public.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DynamicPagesConfiguration, DynamicRoutesPaths } from './models/routes';

// export const dynamicRoutes = (Object.keys(DynamicPagesConfiguration) as DynamicRoutesPaths[]).map(
//     (page) => {
//       return DynamicPagesConfiguration[page].settings;
//     }
//   )

export const routes: Routes = [
    { path: 'not-found', component: NotFoundPageComponent },
    {
        path: '', component: PublicComponent, children: [
            { path: '', component: DashboardPageComponent },
            {
                path: '**',
                component: DynamicPageComponent,
                resolve: { page: configPageResolver }
            },
        ]
    },


];
