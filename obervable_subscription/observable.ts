export class Observable {
	observableList: any[];
	constructor() {
		this.observableList = [];
	}

	subscribe(object: any) {
		this.observableList.push(object);
	}

	unSubcribe(object: any) {
		this.observableList = this.observableList.filter(
			(observer) => observer !== object
		);
	}

	notify(data: any) {
		this.observableList.forEach((observer) => observer(data));
	}
}
