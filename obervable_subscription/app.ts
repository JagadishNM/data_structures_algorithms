import { Observable } from './observable';
import { Subscription } from './subscription';

let observable: Observable = new Observable();

let subscribe1 = (data: any) => {
	console.log(`Subscribe 1 ${data}`);
};

let subscribe2 = (data: any) => {
	console.log(`Subscribe 2 ${data}`);
};

observable.subscribe(subscribe1);
observable.subscribe(subscribe2);
observable.notify('Hello GM');
observable.unSubcribe(subscribe1);
observable.notify('Hello AN');

let subscription: Subscription = new Subscription(observable, subscribe2);

subscription.unsubscribe();
observable.notify('Nothing to Print');
