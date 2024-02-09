import { FiPlus } from 'react-icons/fi';

export default function App() {
  return (
    <>
      {/*
// v0 by Vercel.
// https://v0.dev/t/iXPNyOtGuGd
*/}
      <div className="flex h-screen bg-gray-100">
        <aside className="w-64 bg-[#7DA870] p-4 flex flex-col justify-center items-center">
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mb-4 w-full bg-[#7DA870] bg-opacity-80 text-white">
            Menu
          </button>
          <nav>
            <ul className="space-y-2 flex flex-col items-center justify-center text-white">
              <li>
                <a className="block" href="#">
                  Inicio
                </a>
              </li>
              <li>
                <a className="block" href="#">
                  Libros
                </a>
              </li>
              <li>
                <a className="block" href="#">
                  Editores
                </a>
              </li>
              <li>
                <a className="block" href="#">
                  Lectores
                </a>
              </li>
            </ul>
          </nav>
          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 px-4 py-2 mt-4 w-full bg-[#7DA870] bg-opacity-80 text-white">
            Crear
          </button>
        </aside>

        <main className="flex-1 overflow-y-auto p-4 font-red-hat-display">
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-2">
              <input
                className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 mb-4 w-full"
                placeholder="Buscar por libros, personas o artículos"
                type="search"
              />
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4" data-v0-t="card">
                <div className="flex flex-row">
                  <div className="p-6 bg-[#E9A763] text-white w-3/4">
                    <p>Hola, Andrés! Tienes ideas sobre un nuevo libro?</p>
                    <p>Vuelve tus libros tendencia mundial!</p>
                    <p>Quieres empezar a escribir una vez más?</p>
                    <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-2" style={{ backgroundColor: "#343A3F" }}>
                      <FiPlus className="inline-block w-5 h-5 mr-2" /> {/* Estilo para el icono */}
                      Crear Borrador
                    </button>
                  </div>
                  <div className="w-1/4">
                    <img src="/public/capture2.png" alt="Descripción de la imagen" className="object-cover h-full w-full" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-4 gap-4">
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <p>Library</p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold whitespace-nowrap leading-none tracking-tight">124</h3>
                  </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <p>Like</p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold whitespace-nowrap leading-none tracking-tight">124</h3>
                  </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <p>Readers</p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold whitespace-nowrap leading-none tracking-tight">124</h3>
                  </div>
                </div>
                <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-xs" data-v0-t="card">
                  <div className="flex flex-col space-y-1.5 p-4">
                    <p>Reviews</p>
                  </div>
                  <div className="p-4">
                    <h3 className="text-xl font-semibold whitespace-nowrap leading-none tracking-tight">124</h3>
                  </div>
                </div>
              </div>

              <div className="mt-4">
                <h2>Autores</h2>
                <ul className="space-y-2 grid grid-cols-2 space-x-2">
                  <li>
                    <div
                      className="border text-card-foreground shadow-sm bg-[#f2f2f2f2] p-4 rounded-lg"
                      data-v0-t="card"
                    >
                      <div className="p-6 flex items-center space-x-2">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
                        <div>
                          <p>Axel Thompson</p>
                          <p>Diseñador</p>
                          <hr />
                          <p>hola</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div
                      className="border text-card-foreground shadow-sm bg-[#f2f2f2f2] p-4 rounded-lg"
                      data-v0-t="card"
                    >
                      <div className="p-6 flex items-center space-x-2">
                        <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
                        <div>
                          <p>Wendy Miller</p>
                          <p>Desarrolladora</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="rounded-lg border bg-card text-card-foreground shadow-sm mt-4" data-v0-t="card">
                <div className="flex">
                  <div className="w-full p-6 bg-[#343A3F] text-white flex items-center">
                    <div className="w-1/2"> {/* Cambiado a w-1/2 para ocupar la mitad del contenedor */}
                      <h2>Andrés, nos gusta tu contenido y queremos darte los siguientes tips:</h2>
                      <ol className="list-decimal pl-4">
                        <li>Lee los comentarios de los lectores.</li>
                        <li>Elige el género que quieres para tu público.</li>
                        <li>Busca siempre a un editor de confianza!</li>
                      </ol>
                    </div>
                    <div className="w-1/4 flex justify-center items-center"> {/* Cambiado a w-1/2 y añadido flex y justify-center */}
                      <img
                        src="/public/capture.png"
                        alt="Descripción de la imagen1"
                      />
                    </div>
                  </div>
                </div>
              </div>


            </div>
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2>Lo ultimo</h2>
                <a className="text-sm" href="#">
                  Ver Todo
                </a>
              </div>
              <ul className="space-y-4">
                <li>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                        La Ciudadela
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Descubre las maravillas escondidas en los bosques de Estados
                        Unidos.
                      </p>
                    </div>
                    <div className="p-6">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
                      <p>David Jones</p>
                      <p>May 6, 2020</p>
                    </div>
                  </div>
                </li>
                <li>
                  <div
                    className="rounded-lg border bg-card text-card-foreground shadow-sm mb-4"
                    data-v0-t="card"
                  >
                    <div className="flex flex-col space-y-1.5 p-6">
                      <h3 className="text-2xl font-semibold whitespace-nowrap leading-none tracking-tight">
                        Space X
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Elon Musk, un emprendedor con otra visión multimillonaria.
                      </p>
                    </div>
                    <div className="p-6">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full" />
                      <p>Lauren Murphy</p>
                      <p>May 3, 2020</p>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="flex items-center justify-between mt-4">
                <h2>Lo último</h2>
                <div dir="ltr" data-orientation="horizontal">
                  <a className="block" href="#">
                    Reciente
                  </a>
                  <a className="block" href="#">
                    Popular
                  </a>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>)
}
