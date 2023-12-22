import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { DynamicPagesConfiguration, DynamicRoutesPaths } from '../../models/routes';

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [
    CommonModule, RouterLink, RouterOutlet,
  ],
  template: `
    <nav class="crumbs">
  <ul>
  <li class="crumb"><a routerLink="/">Dashboard</a></li>
    @for (route of routes; track route.order) {
      <li class="crumb"><a [routerLink]="route.linkHref">{{route.linkTitle}}</a></li>
    }
  </ul>
</nav>
<main>
    <router-outlet></router-outlet>
</main>
  `,
  styleUrl: './public.component.css',
})
export class PublicComponent {
  
  routes = (Object.keys(DynamicPagesConfiguration) as DynamicRoutesPaths[]).map(
    (page) => {
      return DynamicPagesConfiguration[page].settings;
    }
  ).sort((a, b) => a.order - b.order);
 }
