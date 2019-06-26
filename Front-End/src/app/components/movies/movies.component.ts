import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit, AfterViewInit {

  @ViewChild('media', {read: ElementRef}) movie: ElementRef ;
  media: HTMLAudioElement ;
  nowPlaying = 0 ;
  index = 0 ;
  movies: File[] = [];

  constructor(private sanitization: DomSanitizer) {
    // this.audio = new Audio() ;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

  play(index: number) {
    // this.nowPlaying = this.sanitization.bypassSecurityTrustResourceUrl(this.musics[index].src) ;
    this.nowPlaying = (index >= 0) ? index : this.movies.length - index - 2 ;
    console.log(this.movies[this.nowPlaying]);
    this.media.src = URL.createObjectURL(this.movies[this.nowPlaying]);
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
    this.play(Math.floor(Math.random() * this.movies.length));
  }

  next() {
    this.play((this.nowPlaying + 1) % this.movies.length);
  }

  prev() {
    this.play((this.nowPlaying - 1) % this.movies.length);
  }

  add(files: Array<File>) {
    // console.log();
    for (let index = 0 ; index < files.length ; ++index) {
      this.movies.push(files[index]);
    }
    this.play(0);
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    // this.audio = document.getElementById('media') ;
    this.media = this.movie.nativeElement ;
    fromEvent(this.media, 'ended').subscribe(() => this.next());
    console.log(this.movie.nativeElement);
  }
}
