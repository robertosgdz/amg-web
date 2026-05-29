    export default function ContactoPage() {
  return (
    <main className="min-h-screen bg-[#FEFEFE] px-8 md:px-16 py-32 text-gray-900">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <span className="text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
          Contacto
        </span>

        <h1 className="text-4xl font-black uppercase md:text-5xl">
          Página de contacto
        </h1>

        <p className="max-w-2xl text-base font-medium text-gray-700 md:text-lg">
          Esta es una página temporal de prueba para comprobar el flujo de navegación entre la home y una ruta real.
        </p>

        <div className="mt-6 h-px w-full bg-gray-200" />

        <div className="grid gap-4 md:grid-cols-2">
          <div className="border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold uppercase">Email</h2>
            <p className="mt-2 text-gray-700">contacto@amgelitesport.com</p>
          </div>

          <div className="border border-gray-200 bg-white p-6">
            <h2 className="text-lg font-bold uppercase">Teléfono</h2>
            <p className="mt-2 text-gray-700">+34 600 000 000</p>
          </div>
        </div>
      </section>
    </main>
  )
}