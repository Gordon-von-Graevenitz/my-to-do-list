import { Injectable } from '@angular/core';
import { Firestore, addDoc, collection, collectionData, collectionGroup, deleteDoc, doc, getDocs } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  constructor(private fs: Firestore) { }

   getNotes(){
    let notesCollection = collection(this.fs, 'Notes');
    return getDocs(notesCollection);
    // let querySnapshot = await getDocs(collection(this.fs, 'Notes'))
    // return querySnapshot.docs.map(doc => doc.data())
  }
  addNote(desc: string){
    let data = {description: desc};
    let notesCollection = collection(this.fs, 'Notes');
    return addDoc(notesCollection, data);
  }
  deleteNotes(id:string){
    let docRef = doc(this.fs, 'Notes/'+id);
    return deleteDoc(docRef);
  }
}
