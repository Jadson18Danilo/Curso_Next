import Link from "next/link"


const courseList = ['HTML','CSS','JavaScript','Node.js','Express','Next.js','HTTP/HTTPS']

export default function CoursesPage(){
  return(
    <div>
      <p className="mb-5 text-center mt-3">
        Lista de cursos
      </p>
      <ul className="text-center p-2">
        {courseList.map(course =>(
          <li key={course}>
            <Link href={`/courses/${course}`}>{course}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}