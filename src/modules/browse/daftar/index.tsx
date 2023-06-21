import React from "react";
interface DaftarSayaProps {
  data: any;
}
function DaftarSayaPage({ data }: DaftarSayaProps) {
  return (
    <div className="px-4 md:px-16 h-[calc(100vh-0rem)]">
      <h1 className="pt-28 fixed text-3xl text-white">Daftar Saya</h1>
      <div className="h-screen flex justify-center items-center">
        {data?.length ? (
          <div className="grid grid-cols-6">
            {data.map((item: any, idx: number) => {
              return (
                <div key={idx}>
                  <h1>{idx}</h1>
                </div>
              );
            })}
          </div>
        ) : (
          <h1 className=" text-gray-500">
            Kamu belum menambahkan judul apa pun ke daftar
          </h1>
        )}
      </div>
    </div>
  );
}

export default DaftarSayaPage;
