import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-to-do-list';

  constructor(private service: SharedService){  }

  notes:any=[];

  refreshNotes(){
    this.service.getNotes().then((res)=>{
      this.notes = res.docs.map(doc => { 
        return {...doc.data(), id: doc.id};
      });
    });
  }
  
  ngOnInit(){
    this.refreshNotes();
  }

  addNotes(newNotes: string){
    this.service.addNote(newNotes).then((res)=>{
      console.log(res);
      this.refreshNotes();
    });
  }

  deleteNotes(id: string){
    this.service.deleteNotes(id).then((res)=>{
      console.log(res);
      this.refreshNotes();
    });
  }
}
