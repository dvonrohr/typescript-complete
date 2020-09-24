class Sorter {
  constructor(public collection: number[]) {}

  sort(): void {}
}
const sorter = new Sorter([4, 3, -1, 10, 8]);
sorter.sort();
console.log(sorter.collection);
