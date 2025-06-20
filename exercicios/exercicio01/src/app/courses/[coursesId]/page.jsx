'use client'

import Link from "next/link";
import { useParams } from "next/navigation"

export default function CourseDeatils(){
    const params = useParams();
    const courseId = params.coursesId;

    return(
        <div>
            <h1>
                Curso: <span className="text-yellow-300">{courseId}</span>{""}
            </h1>
            <p>
                Detalhes sobre o curso{""}
                <span className="text-yellow-300">{courseId}</span>
            </p>
            <Link href={`/courses/${courseId}/modules`}>
            <div className="mt-8">
                <Link href={`/courses/${courseId}/modules`}>
                <span className="bg-amber-50 p-3 text-blue950 w-20 rounded-full hover:bg-blue-600 hover:text-amber-50 transition-colors shadow-2xl">
                    Ver módulos do curso
                </span>
                </Link>
            </div>
            </Link>
        </div>
    )
}