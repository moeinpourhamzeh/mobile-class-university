import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {NoteModel} from '../_models/note.model';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private notes: NoteModel[] = [
    new NoteModel(1, 'test Title', 'Desc Test'),
  ]
  private notesSubject = new BehaviorSubject<NoteModel[]>(this.notes)

  public notes$: Observable<NoteModel[]> = this.notesSubject.asObservable();

  constructor() { }

  add(note: NoteModel) {
    this.notes.push(note)
    this.notesSubject.next(this.notes)
  }

  remove(note: NoteModel) {
    const index = this.notes.indexOf(note);
    this.notes.splice(index, 1)
  }
}
