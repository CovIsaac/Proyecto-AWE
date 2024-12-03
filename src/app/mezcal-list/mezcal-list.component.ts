import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MezcalService, Mezcal } from '../mezcal.service';
import { AuthService } from '../auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-mezcal-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
  templateUrl: './mezcal-list.component.html',
  styleUrls: ['./mezcal-list.component.css']
})
export class MezcalListComponent implements OnInit {
  mezcales: Mezcal[] = [];
  newMezcal: Mezcal = { id: 0, name: '', description: '', flavor: '', image: '' };
  editMode: boolean = false;

  constructor(private mezcalService: MezcalService, private authService: AuthService) { }

  ngOnInit() {
    this.loadMezcales();
  }

  loadMezcales() {
    this.mezcalService.getMezcales().subscribe(data => {
      this.mezcales = data;
    });
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  addMezcal() {
    this.editMode = true;
    this.newMezcal = { id: 0, name: '', description: '', flavor: '', image: '' };
  }

  saveMezcal() {
    // Lógica para guardar un nuevo mezcal
    this.editMode = false;
    this.loadMezcales();
  }

  editMezcal(mezcal: Mezcal) {
    this.editMode = true;
    this.newMezcal = { ...mezcal };
  }

  deleteMezcal(id: number) {
    // Lógica para eliminar un mezcal existente
    this.loadMezcales();
  }

  cancelEdit() {
    this.editMode = false;
  }
}
