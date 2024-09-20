import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'table-pagination',
	templateUrl: './table-pagination.component.html',
	styleUrl: './table-pagination.component.scss',
})
export class TablePaginationComponent implements OnInit {
	originalGridData: any = [];
	gridData: any = [];
	pageNumber: number = 1;
	totalPages: number = 3;
	ngOnInit() {
		this.fetch();
	}

	async fetch() {
		let res = await fetch(`https://dummyjson.com/products`);
		const data = await res.json();
		this.originalGridData = data?.products;
		this.gridData = this.originalGridData.slice(0, 10);
	}

	pageChange(pagenumber: number, lastFirst?: boolean) {
		if (lastFirst) {
			this.pageNumber = pagenumber;
		} else {
			this.pageNumber += pagenumber;
		}
		let data = this.originalGridData;
		let start = (this.pageNumber - 1) * 10;
		let end = this.pageNumber * 10;
		this.gridData = data.slice(start, end);
	}
}
