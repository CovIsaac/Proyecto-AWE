import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NavbarComponent } from './navbar/navbar.component';
import { MezcalService, Mezcal } from './mezcal.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule, NavbarComponent, HttpClientModule]
})
export class AppComponent implements OnInit {
  mezcales: Mezcal[] = [];

  constructor(private mezcalService: MezcalService) { }

  ngOnInit() {
    this.mezcalService.getMezcales().subscribe(data => {
      this.mezcales = data;
    });
  }
}
