Dalbit Legacy Code Base

실행 npm run start OR yarn start

기본 코드 규칙

1. Component 네이밍 -> 파스칼케이스 ex. PascalCase
2. 변수 네이밍 -> 카멜 케이스 ex. camelCase
3. 파일 네이밀 -> 스네이크 케이스 ex. snake_ase

import 순서

1. React관련 최상위.
   import React from 'react'
   import {useHistory} from 'react-router-dom';
   import styled from 'styled-components'

2. Common, lib 등 공통함수
   import { Utility } from 'common/utility';
   import { Api } from 'common/api';

3. Constant
   import { DalbitConstant } from './constant';

4. Component
   impot { DalbitComponent } from './components/dalbit_component';

5. Context
   import {GlobalContext} from 'context/global_ctx';

6. svg, png, jpg 등 img파일
   import DalbitIcon from './static/ic_dalbit.png';

7. 마지막 css, scss
   import './index.scss';

8. 만약 Type을 선언한다면 Component 선언 전에
   type StateType = {
   formState: {
   stringState: string;
   numberState: number;
   arrayState: Array<any>;
   objState: {
   [key:string]: string | number | Array<any> | null
   }
   }
   }

Component 내부 변수 선언

1. props 구조분해
   const { firstProps, secondProps, ...anything } = props;
2. React 관련 변수
   const history = useHistory();
   const params = useParams();
3. React Hook 관련 변수
   //Context 상위레벨부터
   const { globalState, globalAction } = useContext(GlobalContext);
   const { broadcastState, broadcastAction } = useContext(BroadcastContext);

//Context State 구조분해
const { baseData, chatInfo, rtcInfo, ...anything } = globalState;
const { firstBroadcastState, secondBroadcastState, ...anything } = broadcastState;

//Context Action -- 필요하다면
const setBaseData = globalAction.setBaseData!;

//State 변수
const [ firstState, setFirstState ] = useState<Type>(IniitialValue.firstValue);
const [ secondState, setSecondState ] = useState<Type>(IniitialValue.secondValue);

//Ref 변수
const dalbitRef = useRef<Type>(null);

4. 일반 변수 -- 필요하다면
   const valuable = "Hello World!"

Component 내부 함수 순서

1. 일반 함수 -- 내부적으로 선언된 함수들의 순서는 상관없습니다.
   const firstFn = () => {
   // 일반적인 함수입니다.
   }
   function secondFn() {
   // 일반적인 함수입니다.
   }
   const third = useCallback(() => {
   // 일반적인 함수입니다.
   }, [])
2. useEffect() -- 내부적으로 선언된 함수들의 순서는 상관없습니다.
   useEffect(() => {
   // rendering 후 한번만 실행됩니다.
   }, [])
   useEffect(() => {
   // firstState가 변경될 때 마다 실행됩니다.
   }, [fitstState])
3. return 함수 -> 렌더링 될 HTML 코드
return (
  <div>
    <h1>HelloWorld1</h1>
  </div>
)

4. styledComponent
   const DalbitStyle = styled.div` display: flex;`

참고사항.

가능하다면 Component export시,
export default () => {

}
형식 지양.
->
function Component() {

}

export default Component;

무분별한 Props 사용금지. Props를 넘겨받지 않는 Component는 Props 삭제.

State 값으로 0, 1, 2와 같은 Constant사용시...
Constant 폴더 생성 후
index.[ts|js] 안에
export const STATE_TYPE = {
ALL: 0,
SOMETHING: 1
...anything
}
와 같은 Constant 사용 권장
이유는 본래의 작업자가 아닌 다른 작업자가 작업할시
0, 1, 2처럼 사용하면 다른 작업자는 이해하는데 시간이 걸리지만
Constant 를 사용하여 명확하게 0이 무엇인지, 1이 무엇인지 명시해두면 작업이 편함.
