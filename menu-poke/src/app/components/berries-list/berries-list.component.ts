import { Component, OnInit } from '@angular/core';
import { Berries } from 'src/app/models/berries-list.interface';
import { BerriesListService } from 'src/app/service/berries-list.service';

@Component({
  selector: 'app-berries-list',
  templateUrl: './berries-list.component.html',
  styleUrls: ['./berries-list.component.css']
})
export class BerriesListComponent implements OnInit{

  berriesList: Berries[]= []
  constructor(private berriesService: BerriesListService){}

  ngOnInit(): void {
    this.berriesService.getAllberries().subscribe(berries=> {
      this.berriesList= berries.results;
    });
  }


}
