import 'zone.js';
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './table-pagination.component.html',
  styleUrl: './table-pagination.component.scss',
})
export class TablePagination implements OnInit {
  //stackblitgz
  //https://stackblitz.com/edit/angular-15gviz?file=src%2Fmain.ts
  
  name = 'Angular';
  gridData: any[] = [];
  originalGridData: any[] = [];
  totalPages: number = 0;
  pageNumber = 1;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchData();
  }

  fetchData() {
    this.http.get(`https://dummyjson.com/products`).subscribe((data: any) => {
      this.originalGridData = data?.products;
      this.totalPages = this.calculateTotalPages(this.originalGridData, 10);
      this.gridData = this.originalGridData.slice(0, 10);
    });
  }

  calculateTotalPages(items: any[], records: number) {
    return Math.ceil(items.length / records);
  }

  pageChange(pagenum: number, lastFirst: boolean) {
    if (lastFirst) {
      this.pageNumber = pagenum;
    } else {
      this.pageNumber += pagenum;
    }

    const start = (this.pageNumber - 1) * 10;
    const end = this.pageNumber * 10;
    this.gridData = this.originalGridData.slice(start, end);
  }
}
