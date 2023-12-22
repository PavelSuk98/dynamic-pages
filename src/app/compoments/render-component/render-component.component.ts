import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { HeaderComponent } from '../ui/header/header.component';
import { Configuration } from '../../models/routes';
import { CompomentType, Field } from '../../models/schema';
import { ParagraphComponent } from '../ui/paragraph/paragraph.component';

@Component({
  selector: 'app-render-component',
  standalone: true,
  imports: [
    CommonModule, HeaderComponent, ParagraphComponent
  ],
  templateUrl: './render-component.component.html',
  styleUrl: './render-component.component.css',
})
export class RenderComponentComponent {

  @Input() fields: Field[] = new Array();

  readonly CompomentType = CompomentType;

 }
