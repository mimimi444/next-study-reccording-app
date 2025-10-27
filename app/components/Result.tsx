import type { StudyObj } from "../page";
type Result = {
    registeredObj:StudyObj[],
    sum: number
}

export default function Result({
    registeredObj,
    sum
}:Result){
    return(
        <section>
            <h3>ここに登録した内容を表示</h3>
            <ul>
                {registeredObj.map((obj)=>{
                return(
                    <li key={obj.id}>
                    <div>
                    <p>{obj.content}</p>
                    <p>{obj.time}時間</p>
                    </div>
                    </li>
                );
                })}
            </ul>
            <div>合計時間：{sum}/1000時間</div> 
        </section>
    )
}