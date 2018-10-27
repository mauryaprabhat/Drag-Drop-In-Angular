import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-demo-drag-drop',
  templateUrl: './demo-drag-drop.component.html',
  styleUrls: ['./demo-drag-drop.component.css']
})
export class DemoDragDropComponent implements OnInit {

  constructor() { }
  movies = [
    'Episode I - Something starts with you!',
    'Episode II - You got all',
    'Episode III - You have to use it',
    'Episode IV - You know very well',
    'Episode V - World is yours',
    'Episode VI - Believe in you',
    'Episode VII - Be ready and put fight',
    'Episode VIII - Ultimate winner',
    'Episode IX - Winner Winner chicken dinner!!!'
  ];


  ngOnInit() {
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}
