import { Component } from '@angular/core';
import {Note} from '../../_models/note.model';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-list',
  imports: [
    NgForOf
  ],
  templateUrl: './list.html',
  standalone: true,
  styleUrl: './list.css'
})
export class List {
  notes: Note[] = [
    new Note(1, 'test Title', 'Desc Test'),
    new Note(2, 'test Title 2', 'Desc Test 2'),
    new Note(3, 'test Title 3', 'Desc Test 3'),
    new Note(4, 'test Title 4', 'Desc Test 4')
  ]
}
