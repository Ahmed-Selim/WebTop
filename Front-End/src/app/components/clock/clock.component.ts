import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css']
})
export class ClockComponent implements AfterViewInit {

  @ViewChild('clock') clock: ElementRef;
  context: CanvasRenderingContext2D;

  constructor() { }

  ngAfterViewInit(): void {
    this.context = (this.clock.nativeElement as HTMLCanvasElement).getContext('2d');

    this.context.strokeStyle = '#00ffff';
    this.context.lineWidth = 17;
    this.context.shadowBlur = 15;
    this.context.shadowColor = '#00ffff';

    this.renderTime();
    setInterval(() => this.renderTime(), 40);
    // this.draw();
  }

  private draw() {
    this.context.font = '30px Arial';
    this.context.textBaseline = 'middle';
    this.context.textAlign = 'center';

    const x = (this.clock.nativeElement as HTMLCanvasElement).width / 2;
    const y = (this.clock.nativeElement as HTMLCanvasElement).height / 2;
    this.context.fillText('@realappie', x, y);
  }

  degToRad(degree: number) {
    return degree * Math.PI / 180.0 ;
  }

  renderTime() {
    const now = new Date();
    const today = now.toDateString();
    const time = now.toLocaleTimeString();
    const hrs = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();
    const mil = now.getMilliseconds();
    const smoothsec = sec + (mil / 1000);
    const smoothmin = min + (smoothsec / 60);

    // Background
    const gradient = this.context.createRadialGradient(250, 250, 5, 250, 250, 300);
    gradient.addColorStop(0, '#03303a');
    gradient.addColorStop(1, 'black');
    this.context.fillStyle = gradient;
    // ctx.fillStyle = 'rgba(00 ,00 , 00, 1)';
    this.context.fillRect(0, 0, 500, 500);
    // Hours
    this.context.beginPath();
    this.context.arc(250, 250, 200, this.degToRad(270), this.degToRad((hrs * 30) - 90));
    this.context.stroke();
    // Minutes
    this.context.beginPath();
    this.context.arc(250, 250, 170, this.degToRad(270), this.degToRad((smoothmin * 6) - 90));
    this.context.stroke();
    // Seconds
    this.context.beginPath();
    this.context.arc(250, 250, 140, this.degToRad(270), this.degToRad((smoothsec * 6) - 90));
    this.context.stroke();
    // Date
    this.context.font = '25px Helvetica';
    this.context.fillStyle = 'rgba(00, 255, 255, 1)';
    this.context.fillText(today, 175, 250);
    // Time
    this.context.font = '25px Helvetica Bold';
    this.context.fillStyle = 'rgba(00, 255, 255, 1)';
    // ctx.fillText(time+":"+mil, 175, 280);
    this.context.fillText(time.substring(0, time.length - 3) + ':'
      + mil + time.substr(time.length - 3), 175, 280);
  }

}
