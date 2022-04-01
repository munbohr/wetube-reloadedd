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
