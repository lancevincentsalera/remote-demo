function App() {
  return (
    <div>
      <header className="max-w-2xl mx-auto px-6 pt-16">
        <h1 className="text-4xl font-semibold tracking-tight">Loucille Marie B. Tupaz</h1>
        <p className="mt-2 text-lg text-slate-600">
          Third year BSIT student at Cebu Institute of Technology – University.
        </p>
        <hr className="mt-8 border-slate-200"/>
      </header>

      <main className="max-w-2xl mx-auto px-6 py-10">
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="leading-relaxed text-slate-700">
            I live in Kawayan, Biliran located in Eastern Visayas. I chose to pursue BSIT because I became interested
            with technologies and how it continues to change the lifestyle of many people and the way we communicate 
            with each other. I believe that there's more in this path than just coding, it teaches us how to work with
            others to build systems that could be part of a better change for everyone.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Details</h2>
          <p className="leading-relaxed text-slate-700">
            Course: BS Information Technology
            <br/>
            Year level: Third year
            <br/>
            Hometown: Kawayan, Biliran
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Things I like</h2>
          <ul className="list-disc list-inside space-y-1 text-slate-700">
            <li>Watching movies or series</li>
            <li>Listening to music</li>
            <li>Eating desserts or sweets</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Reach me</h2>
          <p className="leading-relaxed text-slate-700">
            loucillemarie.tupaz@cit.edu
            <br/>
            @loucilletupaz
          </p>
        </section>

      </main>

      <section className="max-w-2xl mx-auto px-6 pb-16">
        <hr className="mb-6 border-slate-200"/>
        <p className="text-sm text-slate-500">Made for CSIT340.</p>
      </section>
    </div>
  )
}

export default App