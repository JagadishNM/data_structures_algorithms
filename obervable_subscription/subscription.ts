import { Observable } from './observable';

export class Subscription {
	observable: Observable;
	subscriber: any;
	constructor(observable: Observable, subscriber: any) {
		this.observable = observable;
		this.subscriber = subscriber;
	}

	unsubscribe() {
		this.observable.unSubcribe(this.subscriber);
	}
}
