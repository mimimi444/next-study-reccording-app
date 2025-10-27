'use client'

import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result"

export type StudyObj = { 
  id: string,
  content: string,
  time: string
}

export default function Home() {
  const [inputStudyContent, setInputStudyContent] = useState<string>("");
  const [inputStudyTime, setInputStudyTime] = useState<string>("");
  const [registeredObj, setRegisteredObj] = useState<StudyObj[]>([{
    id:"",
    content:"",
    time:""
  }])
  const [sum, setSum] = useState(0);

  //フォームの入力
  const onChangeContent =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputStudyContent((prev)=>e.target.value);
  }
  const onChangeTime =(e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputStudyTime((prev)=>e.target.value);
  }

  //フォームの送信
  const onSubmit =(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();

    try{
      const sendObj = {
        id:self.crypto.randomUUID(),
        content: inputStudyContent,
        time: String(inputStudyTime)
      }
      const newObj = [...registeredObj, sendObj];

      setRegisteredObj(newObj);
      setInputStudyContent("");
      setInputStudyTime("");
      setSum((prev)=>prev+Number(inputStudyTime));

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
