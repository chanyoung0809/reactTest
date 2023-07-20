// import './test.css'; //css 연결방법
import './style/header.scss'; // 확장자만 잘 쓰면 변환 안해도 됨!
// 원한다면 얼마든 import 해오면 됨
import Footer from './componets/Footer'
import Header from './componets/Header'
// 해당 작명 이름 = 태그이름

function App() {
  return (
    <div className='App'> 
      <Header></Header>
      <Footer></Footer>
    </div>
  );
}

export default App;
