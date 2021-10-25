# NodeJS HomeWork 1: move files

---

1. First solution

- I just try to do async. Because of Non-Blocking I/O. I am not sure yet.
- Many times, I fail the condition that we have video folder or not.
- I think I need to copy and paste. But "fs.rename" method is much better.

### answer!!

> Async/await 101
> async/await에 대해 한번도 들어본 적이 없는 사람들을 위해, 간단한 소개글을 준비했다.
> asnyc/await 는 비동기 코드를 작성하는 새로운 방법이다. 이전에는 비동기코드를 작성하기 위해 callback이나 promise를 사용해야 했다.
> asnyc/await 는 실제로는 최상위에 위치한 promise에 대해서 사용하게 된다. Asnyc/await는 plain callback 이나 node callback과 함께 사용할 수 없다.
> async/await는 promise처럼 non-blocking 이다.
> async/await는 비동기 코드의 겉모습과 동작을 좀 더 동기 코드와 유사하게 만들어준다. 이것이 async/await의 가장 큰 장점이다.

[constell99](https://medium.com/@constell99/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%9D%98-async-await-%EA%B0%80-promises%EB%A5%BC-%EC%82%AC%EB%9D%BC%EC%A7%80%EA%B2%8C-%EB%A7%8C%EB%93%A4-%EC%88%98-%EC%9E%88%EB%8A%94-6%EA%B0%80%EC%A7%80-%EC%9D%B4%EC%9C%A0-c5fe0add656c)

2. Second solution
   [GitHub.SBShell](https://github.com/SBShell/dream-coding/blob/main/app.js)

- Make extension Object for reuse.
- Sooooooooo hard to understand!

---

> ## Academy solution
>
> 1.  사용자가 원하는 폴더의 이름을 받아온다.
> 2.  그 폴더안에 video, captured, duplicated 폴더를 만든다.
> 3.  폴더 안에 있는 파일들을 다 돌면서 해당하는 mp4|mov, png|aae, IMG_1234 (IMG_E1234)

---

3. Third Solution

- 재 사용성 정리 및 폴더 펼치기 기능 추가
