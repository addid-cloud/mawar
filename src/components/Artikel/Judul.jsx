import React from 'react'

const Judul = ({selectedNews}) => {
  return (
    <div className="text-center bg-slate-50 sm:mx-2 mx-0 p-4">
                <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
                    CNN News {selectedNews}
                </h2>
                <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                    Baca berita hari ini!
                </p>
            </div>
  )
}

export default Judul