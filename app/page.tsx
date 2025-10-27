'use client'

import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result"

export type StudyObj = { 
  id: string,
  content: string,
  time: number
}

export default function Home() {
  const [inputStudyContent, setInputStudyContent] = useState<string>("");
  const [inputStudyTime, setInputStudyTime] = useState<number>(0);
  const [registeredObj, setRegisteredObj] = useState<StudyObj[]>([{
    id:"",
    content:"学習内容",
    time:0
  }])
  const [sum, setSum] = useState(0);

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

    try{
      const sendObj = {
        id:self.crypto.randomUUID(),
        content: inputStudyContent,
        time: inputStudyTime
      }
      const newObj = [...registeredObj, sendObj];

      setRegisteredObj(newObj);
      setInputStudyContent("");
      setInputStudyTime(0);
      setSum((prev)=>prev+inputStudyTime);

      return("send:"+sendObj);
  } catch(error) {
      console.error(error);
    }
  }

  return (
    <>
    <h1>学習記録アプリ</h1>

    <Form
    onSubmit={onSubmit}
    inputStudyContent={inputStudyContent}
    onChangeContent={onChangeContent}
    inputStudyTime={inputStudyTime}
    onChangeTime={onChangeTime}
     />
    
    <Result
     registeredObj={registeredObj} 
     sum={sum}/>
    </>
  );
}
