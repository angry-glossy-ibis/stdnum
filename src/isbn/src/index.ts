// class Sprite {
//   setPos(x: number, y: number): number {
//     return x + y;
//   };
// }

import { split } from './split.js';

// type GConstructor<T = object> = new (...rest: any[]) => T;

// type Positionable = GConstructor<{ setPos: (x: number, y: number) => number }>;

// function Jumpable<TBase extends Positionable>(Base: TBase) {
//   return class Jumpable extends Base {
//     jump() {
//       this.setPos(0, 20);
//     }
//   };
// }

// const xxx = Jumpable(Sprite);
try {
  // const x = split('978-90-70002-34-3');
  // const x = split('9789070002343');

  // 978-0-393-04002-9
  const x = split('9780393040029');
  console.log(x);
}
catch (event) {
  console.log(event);
}
