class MyClass {
  static myStaticProp = 21;
  static myStaticProp1 = {};
  constructor() {

  }
}

describe('class props', () => {
  it('should work', () => {
    console.log(MyClass.myStaticProp1);
  });
});
