{
  function printLabel (labelledObj : { label : string }) {
    console.log(labelledObj.label);
    /**
     * Property 'size' does not exist on type 'LabelledValue'.
     * 这里会报错，但实际上会打印出来
     */
    // if (labelledObj.size) {
    //   console.log(labelledObj.size);
    // }
  }

  let myObj = { size : 10, label : 'size 10 obj'};
  
}

{
  interface LabelledValue {
    label: string;
  }

  // function printLabel (labelledObj: LabelledValue) {
  //   console.log(labelledObj.label);
  // }

  let myObj = { size : 10, label : 'size 10 obj'};

  printLabel(myObj);
}

{
  interface SquareConfig {
    color?: string;
    width?: number; 
  }

  function createSquare(config: SquareConfig): {color: string; area: number} {
    let newSquare = {color: 'white', area: 100};
    if (config.color) {
      newSquare.color = config.color;
    }
    if (config.width) {
      newSquare.area = config.width ** 2;
    }
    return newSquare;
  }

  let mySquare = createSquare({color: 'black'});
}

{
  interface SearchFunc {
    (source: string, subString: string): boolean;
  }

  let mySearch: SearchFunc;
  //参数名可以与interface中的不同
  mySearch = function(src: string, sub: string) {
    let result = src.search(sub);
    return result > -1;
  }

  //参数可以不写类型，会根据接口判断
  mySearch = function(src, sub) {
    let result = src.search(sub);
    return result > -1;
  }
}

{
  interface StringArray {
    [index:number]: string;
  }

  let myArray: StringArray;
  myArray = ['Bob','Fred'];

  class Animal {
      name: string;
  }
  class Dog extends Animal {
      breed: string;
  }

  // Numeric index type 'Animal' is not assignable to string index type 'Dog'.
  // interface NotOkay {
  //     [x: number]: Animal;
  //     [x: string]: Dog;
  // }

  
}

