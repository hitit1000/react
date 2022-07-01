# study

extension
ES7+ (react) 설치 및 rfc를 통해 component 쉽게 구성

conponent import, export, defalut, etc... Good!!!

JSX

props&children

useState

img 사용법
:: import 경로정의
:: public 폴더에 위치하며, {process.env.PUBLIC_URL + 'path'} 로 접근

css/scss/sass
:: import './style.css'
:: inline style
:: inline style + 변수사용 ( object )
:: "node-sass" 설치 및 import './style.scss'로 사용

useEffect
:: DidMount()//DidUpdate()/WillUnmount()
:: useEffect(()=>{},[])/ useEffect(()=>{},[a])/ useEffect(()=>{ return () =>{a}},[])

component 생성 ( class vs function )

javascript Bubbling, Capturing, Delegation ..

useCallback vs useMemo
:: 재render 시 함수가 재생성됨 -> 원치 않게 render시 마다 함수가 실행 됨(값이 변환될때만 실행하고싶음)
:: 이를 방지하기 위해 useCallback, useMemo 사용
:: useCallback은 return 함수 반환 // useMemo는 return 값 반환

useContext
:: 중복되는 component에 props를 한번에 주는 기능
:: example code 다시보기 필요
:: React.createContext() //>>

useReducer
:: 

sliding
::
# command

npx create-react-app [project_name]
:: npx를 통해 최신 create-react-app 을 설치

npm i --save-dev node-sass
:: [node-sass] react에서 sass사용
:: [--save-dev] 개발 시에만 사용
