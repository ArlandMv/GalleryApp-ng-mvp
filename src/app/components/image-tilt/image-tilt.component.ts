import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-image-tilt',
  templateUrl: './image-tilt.component.html',
  styleUrls: ['./image-tilt.component.css'],
})
export class ImageTiltComponent {
  @Input() imageUrl!: string;
  @Input() imageTitle!: string;

  tiltX: number = 0;
  tiltY: number = 0;

  onMouseMove(event: MouseEvent) {
    const { clientX, clientY } = event;
    if (event.target instanceof HTMLElement) {
      const centerX = event.target.clientWidth;
      const centerY = event.target.clientHeight;

      this.tiltY = (clientX - centerX) / 5;
      this.tiltX = (centerY - clientY) / 5;
    }
  }
}
