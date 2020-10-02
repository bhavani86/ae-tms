import { Component, OnInit, ViewChild } from '@angular/core';
// import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.css'],
})
export class BatchesComponent implements OnInit {
  // @ViewChild(MatSort) sort: MatSort;
  // @ViewChild(MatPaginator) paginator: MatPaginator;
  // dataSource: any;
  constructor() {}

  ngOnInit(): void {
    // this.dataSource.sort = this.sort;
    // this.dataSource.paginator = this.paginator;
  }
}
