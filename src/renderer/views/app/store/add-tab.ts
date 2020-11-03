import { animateTab } from '../utils/tabs';

export class AddTabStore {
  public left = 0;

  public ref: HTMLDivElement;

  public setLeft(left: number, animation: boolean) {
    console.log('addTab:setLeft', left, animation);
    animateTab('translateX', left, this.ref, animation);
    console.log('setLeft', left, animation);
    this.left = left;
  }
}
