// // DOM 프로퍼티
// const myTag = document.querySelector('#list-1');
//
// // textContext
// console.log(myTag.textContent);
// myTag.textContent = '<li>new text!</li>'
//
// // outerHTML
// console.log(myTag.outerHTML);
// myTag.innerHTML += '<li>Exotic</li>'
//
// // innerHTML
// console.log(myTag.innerHTML);
// myTag.innerHTML += '<li>Exotic</li>'


// // 요소 노드 추가하기
// const tomorrow = document.querySelector('#tomorrow');
// // 1. 요소 노드 만들기: document.createElement('태그이름')
// const first = document.createElement('li');
// // 2. 요소 노드 꾸미기: textContent, innerHTML, ...
// first.textContent = '처음';
// // 3. 요소 노드 추가하기: NODE.prepend, append, after, before
// tomorrow.prepend(first);
//
// const last = document.createElement('li');
// last.textContent = '마지막';
// tomorrow.append(last);
//
// const prev = document.createElement('p');
// prev.textContent = '이전';
// tomorrow.before(prev);
//
// const next = document.createElement('p');
// next.textContent = '다음';
// tomorrow.after(next);


// // 요소 노드 삭제와 이동
// const today = document.querySelector('#today');
// const tomorrow = document.querySelector('#tomorrow');
//
// // 요소 노드 삭제하기: Node.remove()
// tomorrow.remove();
// today.children[2].remove();
//
// // 요 노드 이동하기: prepend, append, before, after
// today.append(tomorrow.children[1]);
// tomorrow.children[1].after(today.children[1]);
// tomorrow.children[2].before(today.children[1]);
// tomorrow.lastElementChild.before(today.children[1]);



// // HTML 속성 (HTML attribute)
// const tomorrow = document.querySelector('#tomorrow');
// const item = tomorrow.firstElementChild;
// const link = item.firstElementChild;
//
// // elem.getAttribute('속성'): 속성에 접근하기
// console.log(tomorrow.getAttribute('href'));
// console.log(item.getAttribute('class'));
//
// // elem.setAttribute('속성', '값'): 속성 추가(수정)하기
// tomorrow.setAttribute('class', 'list'); // 추가
// link.setAttribute('href', 'https://www.codeit.kr'); // 수정
//
// // elem.removeAttribute('속성'): 속성 제거하기
// tomorrow.removeAttribute('href');
// tomorrow.removeAttribute('class');
//
// // id 속성
// console.log(tomorrow);
// console.log(tomorrow.id);
//
// // class 속성
// console.log(item);
// console.log(item.className);
//
// // href 속성
// console.log(link);
// console.log(link.href);
// console.log(tomorrow.href);


// // 스타일 다루기
// const today = document.querySelector('#today');
// const tomorrow = document.querySelector('#tomorrow');
//
// // elem.classList: add, remove, toggle
// const item = tomorrow.children[1];
// item.classList.add('done');
// item.classList.remove('done');
// item.classList.toggle('done');
//
// // elem.className
// today.children[1].className = 'done';
//
// // style 프로퍼티
// today.children[0].style.textDecoration = 'line-through';
// today.children[0].style.backgroundColor = '#DDDDDD';
// today.children[2].style.textDecoration = 'line-through';
// today.children[2].style.backgroundColor = '#DDDDDD';
