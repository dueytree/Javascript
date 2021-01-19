// 이벤트 등록하기
// let btn = document.querySelector('#myBtn');
// btn.onclick = function () {
// 	console.log('Hi Codeit!');
// };
// function event1() {
// 	console.log('Hi Codeit!');
// }
// function event2() {
// 	console.log('Hi again!');
// }
// // elem.addEventListener(event, handler)
// btn.addEventListener('click', event1);
// btn.addEventListener('click', event2);
// // elem.removeEventListener(event, handler)
// btn.removeEventListener('click', event2);


// // 이벤트 객체 (Event Object)
// const myInput = document.querySelector('#myInput');
// const myBtn = document.querySelector('#myBtn');

// function printEvent(event) {
//   console.log(event);
// 	event.target.style.color = 'red';
// }
// myInput.addEventListener('keydown', printEvent);
// myBtn.addEventListener('click', printEvent);



// // 이벤트 버블링 (Event Bubbling)
// const content = document.querySelector('#content');
// const title = document.querySelector('#title');
// const list = document.querySelector('#list');
// const items = document.querySelectorAll('.item');
//
// content.addEventListener('click', function(e) {
//   console.log('content Event');
//   console.log(e.currentTarget);
// });
// title.addEventListener('click', function(e) {
//   console.log('title Event');
//   console.log(e.currentTarget);
// });
// list.addEventListener('click', function(e) {
//   console.log('list Event');
//   console.log(e.currentTarget);
// });
// for (let item of items) {
//   item.addEventListener('click', function(e) {
//     console.log('item Event');
//     console.log(e.currentTarget);
// 		e.stopPropagation();
//   });
// }



// // 이벤트 위임 (Event Delegation)
// const list = document.querySelector('#list');
// list.addEventListener('click', function(e) {
// 	// if (e.target.tagName === 'LI')
// 	if (e.target.classList.contains('item')) {
// 		e.target.classList.toggle('done');
// 	}
// });
//
// const li = document.createElement('li');
// li.classList.add('item');
// li.textContent = '일기 쓰기';
// list.append(li);
// li.addEventListener('click', function(e) {
//   e.stopPropagation();
// });