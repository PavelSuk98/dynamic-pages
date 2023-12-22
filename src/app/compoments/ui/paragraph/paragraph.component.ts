import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Field } from '../../../models/schema';

@Component({
  selector: 'app-paragraph',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>{{field.label}}</p>`,
  styleUrl: './paragraph.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParagraphComponent { 
  @Input() field!: Field;
}
