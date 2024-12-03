import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MezcalService, Mezcal } from '../mezcal.service';
@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mezcales: Mezcal[] = [];

  constructor(private mezcalService: MezcalService) { }

  ngOnInit() {
    this.mezcalService.getMezcales().subscribe(data => {
      this.mezcales = data;
    });
  }
}
