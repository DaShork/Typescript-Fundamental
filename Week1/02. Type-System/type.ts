const today = new Date();
// nếu ta di chuột vào biến today, ide sẽ chỉ ra rằng biến today có kiểu giá trị là Date 
// từ đó typescript có thể sử dụng thông tin đó để quyết định chính xác những gì chúng ta có thể làm với biến đó
// vì vậy nếu tiếp theo ta nhập today + "." ta sẽ thấy ide tự động đề xuất các hàm và thuộc tính khác nhau mà đối tượng này có
today.getMonth();
// nói cách khác typescript biết tất cả các thuộc tính và phương thức mà date có nên nó có thể inra và đề xuất giúp chúng ta dễ dàng gọi
// cũng chính vì thế, nếu ta cố gắng tham chiếu đến 1 phương thức mà date không có, nó sẽ báo lỗi yêu cầu ta kiểm tra

const person = {
    age: 20,
    name: "Vo Nhat Minh",
    enrolled: true
};
// đối với ví dụ ở trên vì ta chưa định nghĩa rút gọn cho đối tượng person
// nên khi ta trỏ vào biến person, typescript sẽ mặc định in ra toàn bộ thuộc tính và phương thức khác nhau mà đối tượng có

class Color {

};
// ở đây nếu ta triển khai 1 lớp tên là color
// và sau đó ta định nghĩa 1 đối tượng red
const red = new Color();
// khi trỏ đến red ta thấy ts sẽ biết rằng biến red này đang trỏ đến 1 đối tượng thuộc lớp color
// điều đó có nghĩa là biến này có quyền truy cập vào tất cả các thuộc tính và phương thức mà 1 đối tượng Color có
// trong trường hợp này sẽ là không gì cả, vì biến lớp color chưa được định nghĩa bất kỳ thứ gì bên trong nó
// kể cả khi ta cố truy vấn đến 1 biến không tồn tại ví dụ red.ahssdhakhd thì ts sẽ báo lỗi giống như 2 ví dụ today và person.