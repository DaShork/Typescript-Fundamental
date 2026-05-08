const apples: number = 5;
// khi khai báo biến apples như trên thì dấu ":" và từ "number" ngay sau đó chính là annotation (chú thích kiểu)
// điều đó có nghĩa là chúng ta đang nói vs TS là ta chỉ gán duy nhất 1 kiểu số có biến apples
// nếu sau đó ta tahy đổi từ 5 sáng 1 kiểu khác ví dụ như "true" là 1 boolean thì TS sẽ ngay lập tức báo lỗi
// Cũng như thế nếu t thay đổi biến apples thành let, cho phép cập nhật giá trị, để dễ hình dung mình sẽ lấy biến khác
let oranges: number = 5;
// và cập nhật giá trị bằng cách
oranges = 10;
// nếu ta gán cho nó giá trị khác ví dụ như "áhdkashd" là 1 string thì TS cũng sẽ ngay lập tức báo lỗi

// ngoài ra với mỗi giá trị khác nhau ta có thể sử dụng kiểu chú thích với từng loại
let speed: string = "fast";
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;


// BUILD IN PROJECT
// như đã nói ở file readme chap 2: có 2 kiểu là primitive và object
// kế đến ta cũng có thể dùng loại chú thích trên cho các kiểu object
let now: Date = new Date();
//khi phân tích cấu trúc ta có thể thấy ở đây ta đang
// khai báo 1 biến là now
// có kiểu dữ liệu là Date
// và gán giá trị bằng 1 Date mới là new Date()

// ARRAY
let colors: string[] = ['red', 'green', 'blue'];
// phân tích đến cấu trúc:
// [] ở ngay sau string thật ra khong phải đang tạo ra 1 mảng
// mà nó đang nói rằng:
// chúng ta sẽ có 1 THỨ được GÁN cho colors có KIỂU là MẢNG CHỨA
// 1 số ví dụ khác
let myNumbers: number[] = [1,2,3];
let myBoolean: boolean[] = [true, true, false];

// CLASS
class Car {

}
let car: Car = new Car();

// Object Literal
// để chú thích cho 1 object chúng ta sẽ chú thích như sau
// ví dụ 1 object có x và y là 2 thuộc tính kiểu số, cũng giống như khi ta làm với 1 biến, tuy nhiên, 1 object sẽ có nhiều thuộc tính
// như vậy khi chú thích ta sẽ cần bỏ chú thích vào dấu ngoặc nhọn, phân cách nhau bới dấu ;
let point: { x: number; y:number } = {
    x: 10,
    y:20
}
// xét theo cấu trúc, ta vẫn đang tuân thủ cấu trúc mặc định bao gồm:
// let point: <kiểu dữ liệu> = <gán giá trị>
// let point: {x:number; y:number} = {x:10, y:20}
// hay hiểu theo nghĩa khác là
// cho object point có thuộc tính x là kiểu số, và thuộc tính y là kiểu số, giá trị của x là 10 và giá trị của y là 20
// sau khi chú thích, nếu nhập khác biến đã khai báo, hoặc nhập sai kiểu dữ liệu đã khai báo, TS sẽ báo lỗi để ta check dựa theo chú thích đã chuẩn bị. 