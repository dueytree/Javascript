// // window : 전역객체 (Global Object)
// console.log(window);
// console.log(window.innerWidth);
// console.log(window.innerHeight);

// // DOM (Document Object Model)
// console.log(document);
// console.log(typeof document);
// console.dir(document);
// const title = document.querySelector('#title');

// // DOM 트리
// const myTag = document.querySelector('#content');
// console.log(myTag)
//
// // 형제 요소 노드
// console.log(myTag.previousElementSibling);
// console.log(myTag.nextElementSibling);
// // 부모 요소 노드
// console.log(myTag.parentElement);
// // 자식 요소 노드
// console.log(myTag.children[1]);
// console.log(myTag.firstElementChild);
// console.log(myTag.lastElementChild);


// 브라우저의 기본 동작
const link = document.querySelector('#link');
const checkbox = document.querySelector('#checkbox');
const input = document.querySelector('#input');
const text = document.querySelector('#text');
link.addEventListener('click', function(e) {
	e.preventDefault();
	alert('지금은 이동할 수 없습니다.');
});
input.addEventListener('keydown', function(e) {
	if (!checkbox.checked) {
		e.preventDefault();
		alert('체크박스를 먼저 체크해 주세요.');
	}
});
document.addEventListener('contextmenu', function(e) {
	e.preventDefault();
	alert('마우스 오른쪽 클릭은 사용할 수 없습니다.');
});