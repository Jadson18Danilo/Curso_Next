

export default function CoursesLayout({children}){
  return(
  <section>
    <nav>
      <h1 className="bg-blue-950 p-3 text-amber-50">
        Meus cursos
      </h1>
      <div>
        {children}
      </div>
    </nav>
    <div className="bg-blue-900 p-10 text-amber-50 text-center">

    </div>
  </section>
  )
}