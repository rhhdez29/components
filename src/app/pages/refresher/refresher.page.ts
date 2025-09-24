import { Component, OnInit } from '@angular/core';

interface Item {
  name: string;
  unread: boolean;
}

@Component({
  selector: 'app-refresher',
  templateUrl: './refresher.page.html',
  styleUrls: ['./refresher.page.scss'],
  standalone: false,
})
export class RefresherPage implements OnInit {

  public names = [
    'Burt Bear',
    'Charlie Cheetah',
    'Donald Duck',
    'Eva Eagle',
    'Ellie Elephant',
    'Gino Giraffe',
    'Isabella Iguana',
    'Karl Kitten',
    'Lionel Lion',
    'Molly Mouse',
    'Paul Puppy',
    'Rachel Rabbit',
    'Ted Turtle',
  ];
  public items: Item[] = [];

  ngOnInit() {
    this.addItems(5);
  }

  chooseRandomName() {
    return this.names[Math.floor(Math.random() * this.names.length)];
  }

  addItems(count: number, unread = false) {
    for (let i = 0; i < count; i++) {
      this.items.unshift({
        name: this.chooseRandomName(),
        unread: unread,
      });
    }
  }

  handleRefresh(event: any) {
    setTimeout(() => {
      this.addItems(3, true);
      event.target.complete();
    }, 2000);
  }
}
