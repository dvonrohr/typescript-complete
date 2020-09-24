class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {
    const { length } = this.collection;

    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - i; j++) {
        if (this.collection[j] > this.collection[j + 1]) {
          const leftHand = this.collection[j];

          this.collection[j] = this.collection[j + 1];
          this.collection[j + 1] = leftHand;
        }
      }
    }
  }
}
const sorter = new Sorter([4, 3, -1, 10, 8]);
sorter.sort();
console.log(sorter.collection);
