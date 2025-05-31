export default function CourseDeatils(){
    const {courseId} = useParams();
    return(
        <div>
            <h1>
                Curso:{courseId}
            </h1>
            <p>
                Detalhes sobre o curso {courseId}
                <Link href={`/course/${courseId}/modules`}>Ver módulos do curso</Link>
            </p>
        </div>
    )
}