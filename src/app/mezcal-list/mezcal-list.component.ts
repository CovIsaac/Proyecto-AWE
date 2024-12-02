import { Component, OnInit } from '@angular/core';
import { MezcalService } from '../mezcal.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-mezcal-list',
  standalone: true,
  templateUrl: './mezcal-list.component.html',
  styleUrls: ['./mezcal-list.component.css'],
  imports: [NgFor]
})
export class MezcalListComponent implements OnInit {
  mezcales: any[] = [];

  constructor(private mezcalService: MezcalService) {}

  ngOnInit(): void {
    this.mezcalService.getMezcales().subscribe((data) => {
      this.mezcales = data.mezcales;
    });
  }
}
