import { Component, OnInit, AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { fromEvent } from 'rxjs';


@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent implements OnInit, AfterViewInit {

  @ViewChild('media', {read: ElementRef}) audio: ElementRef ;
  media: HTMLAudioElement ;
  nowPlaying = 0 ;
  index = 0 ;
  musics: File[] = [];

  constructor(private sanitization: DomSanitizer) {  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.musics, event.previousIndex, event.currentIndex);
  }

  play(index: number) {
    this.nowPlaying = (index >= 0) ? index : this.musics.length - index - 2 ;
    this.media.src = URL.createObjectURL(this.musics[this.nowPlaying]);
    this.media.load();
    this.media.play() ;
  }

  pause() {
    this.media.pause() ;
  }

  resume() {
    this.media.play();
  }

  shuffle() {
    this.play(Math.floor(Math.random() * this.musics.length));
  }

  next() {
    this.play((this.nowPlaying + 1) % this.musics.length);
  }

  prev() {
    this.play((this.nowPlaying - 1) % this.musics.length);
  }

  add(files: Array<File>) {
    for (let index = 0 ; index < files.length ; ++index) {
      this.musics.push(files[index]);
    }
    this.play(0);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.media = this.audio.nativeElement ;
    fromEvent(this.media, 'ended').subscribe(() => this.next());
    console.log(this.audio.nativeElement);
  }

}
