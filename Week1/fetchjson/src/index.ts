import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/1';

//Định nghĩa biến và loại biến sẽ giúp typescript có thể kiểm tra và thống báo cho người dùng trong trường hợp data trả về từ api sai
interface Todo {
    id: number;
    title:string;
    completed: boolean;
}

axios.get(url).then(response => {
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
    const completed = todo.completed;

    logTodo(id, title, completed); //VD1: nếu chèn completed lên trước title mà không sử dụng anotation thì sẽ không báo lỗi dẫn đến in ra kq lỗi

})
// Thêm notation khi khai báo các biến nhận vào sẽ giúp cho typescript thông báo khi xảy ra các sự cố liên quan
// Ví dụ như đặt lộn thứ tự các biến nhận vào (VD1)
const logTodo = (id:number, title:string, completed:boolean) => {
    console.log(`
        The todo with id : ${id};
        Has a title of : ${title};
        Is it completed : ${completed};
    `)
}