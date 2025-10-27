'use client'

import { useState } from "react";

export default function Home() {
  const [inputStudyContent, setInputStudyContent] = useState("");
  const [inputStudyTime, setInputStudyTime] = useState(0);
  const [registeredObj, setRegisteredObj] = useState([{
    id:"",
    content:"学習内容",
    time:0
  }])

  //フォームの入力
  const onChangeContent =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputStudyContent((prev)=>e.target.value);
  }
  const onChangeTime =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputStudyTime((prev)=>Number(e.target.value));
  }

  //フォームの送信
  const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
        console.log({
      id:self.crypto.randomUUID(),
      content: inputStudyContent,
      time: inputStudyTime
    });
    setInputStudyContent("");
    setInputStudyTime(0);
    return({
      id:self.crypto.randomUUID(),
      content: inputStudyContent,
      time: inputStudyTime
    })
  }

  return (
    <>
    <h1>学習記録アプリ</h1>
    <section>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="studyContent">学習内容</label>
          <input type="text" name="studyContent" id="studyCom" value={inputStudyContent} onChange={onChangeContent} required/>
        </div>
        <div>
          <label htmlFor="studyTime">学習時間</label>
          <input type="number" name="studyTime" id="studyTime" min="0" value={inputStudyTime} onChange={onChangeTime} required/>時間
        </div>
        <div>入力されている内容:<span>{inputStudyContent}</span></div>
        <div>入力されている時間:<span>{inputStudyTime}</span></div>
        <button type="submit">登録</button>
      </form>
    </section>
    <section>
      <h3>ここに登録した内容を表示</h3>
      <ul>
        {registeredObj.map((obj)=>{
          return(
            <li key={obj.id}>
              <p>{obj.content}</p>
              <p>{obj.time}</p>
            </li>
          );
        })}
      </ul>
      <div>合計時間：10/1000(h)</div>
    </section>
    </>
  );
}
