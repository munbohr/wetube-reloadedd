# wetube 클론 강의 중 꿀팁-작성자:munbohr

npm install 할 때에는 package.json을 꼭 닫고 실행해야 한다.
안그러면 version 충돌이 일어난다.

---

.gitignore로 node_modules을 깃헙에 올리지 않음으로써 다른 사람이
파일을 다운 받을때 좀 더 용이하게 만든다.

---

--save-dev가 있는 이유가 dev에 그 정보를 내려받는다(다운로드?).

---

nodemon --exec 설정하면 추적? ctrl+c를 누르기 전까지는 무엇이 바뀌고 있는지
realTime으로 보여준다

---

nodemon --exec babel-node index.js 문장에서 nodemon --exec은 realTime으로 보여주는 것,
babel은 NodeJS가 이해하지 못하는 최신 문장을 컴파일러 해준다.

---

express function을 사용하면 express application을 생성해준다.

---

서버(?)랑 상호작용하는 그 모든 것들은 request 한다고 말한다.
ex) /login을 들어가거나 google.com을 간다거나 하는 모든 것들
내 서버는 그런 것들을 모두 listening 하고 있다.

---

app.listen은 바닐라JS에서 배웠던 variableName.addEventListener("interaction", functionName)
이랑 비슷한 것이다.

---

google.con === google.com/ <-- 이런게 root이다.

---

https는 서버가 서버끼리 서로 소통하는 방법이다.
GET은 http method이다. 의미는 무엇을 가져와 달라고 요청하는 것이다.

---

app.get("root", function) 처럼 2번째에는 function이 꼭 와야하는것 같다.

---

express 에선 route handler에는 event같은 건 없지만 req(uest), res(ponse)라는 섹시한
object 두 개가 있다. express가 무대 뒤에서 해주는 것이다(심지어 무료로!)
req엔 ㅎㄷㄷ 할 정도로 많은게 존재한다! 전부 다 req object들이다.

---

return res.end();는 server 호출하는 것은 안하겠다고 선언하는 것이다.

---

<h1>#3.4</h1>

h1, JSON도 개별적으로 res.send를 통해 사용할 수 있다

---

<h1>#3.5</h1>
middleware = 중간에 있는 소프트 웨어
모든 middleware는 handler이고, 모든 handler는 middleware이다.
nex();는 다음 함수를 호출한다, 다음 function이 없으면 작동 안함.

---

<h1>#3.5</h1>
const gossipMiddleware = (req, res, next) => {
return res.send("something");
next();
}
하면은 다음 함수가 호출 되지 않는다.

- gossipware 은 우리가 어디를 가려는지 말해준다

---

<h1>#3.6</h1>
middleware를 use하는게 먼저 오고, 그 다음에 URL의 get이 와야한다.
마지막 함수는 next();를 굳이 추가 할 필요가 없다.

---

<h1>#3.8</h1>
Recap =>
dependencies, devDependencies에 있는 버전 정보를 확인해서 npm i 할 때
모두 다운받아준다. dependencies는 프로젝트가 작동하기 위해 필요한 것,
devDependencies는 개발자들이 개발하기 위해 필요한 것.

---

<h1>#3.9</h1>
() => function을 inline function이라고 부른다

---

<h1>#3.10</h1>

- middleware를 원하는 만큼 만들수 있음

- 누군가 대답하기 전까지는 전부 middleware이다.

- 순서가 중요하다.

---

<h1>#4.0</h1>
Router는 controler와 url을 쉽게 관리해준다.
쉽게 말해 미니 어플리케이션을 만들어주는 것이다.
Router는 우리가 작업중인 주제를 기반으로 url을 구획화한다.

---

<h1>#4.2</h1>

- 코드를 작성한만큼 정리하는데에 시간을 할애해야한다.
  NodeJS는 모든 파일은 모듈이고, 거품과 같다.
  import하기 전에 export 먼저 해야한다.
  export는 무언가를 밖에 공유하는 것이다.
  default export를 했기때문에 밖에선 이름을 바꿔도 상관이 없다.

- #4.2 진행중 videoController에서 export를 해주지 않아서 찾고 있었음

- default에서 export 할 때엔 내가 원하는 아무 이름이나 가능한데
  export const 이렇게 되어있으면 그 뒤에 {변수명?} 대로 가져와야함
  파일은 하나의 default밖에 못가진다.
  import {variable1, variable2, variable3 } from "파일 위치";형식으로 가져올 수 있다.

- 자바 스크립트에서 delete는 이미 예약 되어있어서 변수명으로 사용할 수 없다,

<h1>#4.4</h1>

url 을 정리해주지 않으면 comment on video 혹은 delete video comment 같은 케이스가 발생한다.
이걸 다 타이핑 해야하는데 매우 귀찮기때문에 구획을 나눠야 한다. 즉 "분할 정복!"

---

<h1>#4.5</h1>
하나의 JS 파일을 통째로 import하려면 const 무슨무슨Router = express.Router(); 하면 된다
그리고 export는 잊지말고 해줘야한다.

- 위에서도 말했듯이 import {variable1, variable2, variable3 } from "파일 위치";를 하지 않으면
  (export한 variable이랑 똑같아야 한다 -중요!)
  Node.js는 길을 잃는다.

- 현재 파일에서 벗어나고 싶으면 ../ 를 사용하면 된다.
  ./는 현재의 장소
