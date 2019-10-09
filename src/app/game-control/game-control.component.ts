import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {OddComponent} from './odd/odd.component';
import {EvenComponent} from './even/even.component';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  public interval;
  public number = 1;
  @Output() emitter: EventEmitter<number> = new EventEmitter<number>();

  onClickStartButton() {
    this.interval = setInterval(() => {
      this.emitter.emit(this.number);
      this.number++;
    }, 1000);
  }

  onClickStopButton() {
    clearInterval(this.interval);
  }

  constructor() {
  }

  ngOnInit() {
  }

}
