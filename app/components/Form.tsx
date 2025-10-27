
type Form = {
    onSubmit: (e:React.FormEvent<HTMLFormElement>)=>void,
    inputStudyContent: string,
    onChangeContent: (e:React.ChangeEvent<HTMLInputElement>)=>void,
    inputStudyTime: string,
    onChangeTime: (e:React.ChangeEvent<HTMLInputElement>)=>void,
}

export default function Form({
    onSubmit,
    inputStudyContent,
    onChangeContent,
    inputStudyTime,
    onChangeTime
}:Form){
    return(
        <section>
            <form onSubmit={onSubmit}>
                <div>
                <label htmlFor="studyContent">学習内容</label>
                <input type="text" name="studyContent" id="studyCom" value={inputStudyContent} onChange={onChangeContent} placeholder="学習した内容を入力" required/>
                </div>
                <div>
                <label htmlFor="studyTime">学習時間</label>
                <input type="number" name="studyTime" id="studyTime" min="0" value={inputStudyTime} onChange={onChangeTime} placeholder="" required/>時間
                </div>
                <div>入力されている内容:<span>{inputStudyContent}</span></div>
                <div>入力されている時間:<span>{inputStudyTime}</span></div>
                <button type="submit">登録</button>
            </form>
        </section>
    )
}