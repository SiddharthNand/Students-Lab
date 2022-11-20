export default function Show({students}){
    return(
        <ul>
            {students.map(student => {return(
                <>
                <li key={student.name}>Student: {student.name}</li>
                <li key={student.name + 'bio'}>Bio: {student.bio}</li>
                <ul key={student.name + 'scores'}>{student.scores.map(testScore => {return(
                    <>
                    <li key={student.name + testScore.date}>Date: {testScore.date}</li>
                    <li key={student.name + testScore.date + testScore.score}>Score: {testScore.score}</li>
                    </>

                    )})}</ul>
                    </>
            )})}
            
        </ul>
    )
}