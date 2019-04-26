# 1. JavaScript 역사
* 참고 
    * https://wit.nts-corp.com/2014/08/13/1925
    * https://ko.wikipedia.org/wiki/%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8

# 2. 값, 식, 문
* 참고 
    * https://www.bsidesoft.com/?p=792#%25eb%25ac%25b8%25ec%2597%2590-%25eb%258c%2580%25ed%2595%25b4
    * https://webclub.tistory.com/114

# 3. Primitive Type & Reference type
## 3.1  Primitive Type
* 기본 자료형(여섯가지 데이터 타입) - stack에 저장되는 것
    * Boolean
	* Null
	* Undefined
	* Number
	* String
	* Symbol(ES6)
## 3.2  Reference type 
* heap에 저장
    * Object
****    
* 참고 
    * https://developer.mozilla.org/ko/docs/Web/JavaScript/Data_structures
    * https://gist.github.com/branneman/7fb06d8a74d7e6d4cbcf75c50fec599c
    * https://stackoverflow.com/questions/13266616/primitive-value-vs-reference-value
    * https://weicomes.tistory.com/133
    
# 4. Truthy & Falsy
## 4.1  Truthy 
참 같은 값(Truthy)인 값이란 불리언을 기대하는 문맥에서 true로 평가되는 값
 따로 거짓 같은 값으로 정의된 값이 아니면 모두 참 같은 값으로 평가됩니다.
## 4.2 Falsy
불리언 문맥에서 false로 평가되는 값입니다.
JavaScript는 조건절, 반복문 등 불리언 값이 필요한 곳에서 형 변환을 이용해 특정 값을 불리언 값으로 변환합니다.

* False
* 0
* ""
* Null
* Undefined
* NaN

****
* 참고
 * https://developer.mozilla.org/ko/docs/Glossary/Truthy