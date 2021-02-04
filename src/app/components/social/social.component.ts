
import { Component, OnInit } from '@angular/core';
import { trendList } from 'src/app/datasources';
import { Trend } from 'src/app/models';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {

  trendList: Trend[] = trendList;

  constructor() { }

  ngOnInit(): void {
  }

}
