import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { RenderComponentComponent } from '../../compoments/render-component/render-component.component';
import { Configuration } from '../../models/routes';

@Component({
  selector: 'app-dynamic-page',
  standalone: true,
  imports: [
    CommonModule, RenderComponentComponent
  ],
  template: `
  <app-render-component [fields]="page.schema"></app-render-component>
  `,
  styleUrl: './dynamic-page.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicPageComponent {
  @Input() page!: Configuration;
}
