'use client';

export default function NowPlaying() {
    const song = {
        title: 'say my name',
        artist: 'kimj',
        imageUrl: '/sample.jpeg'
    }

    return (
    <div className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center w-64 text-center">
      <h2 className="text-[25px] font-medium text-gray-700 mb-2">Currently Playing</h2>
      <img
        src={song.imageUrl}
        alt="Album cover"
        width={250}
        height={250}
        className="object-cover rounded-md border"
      />
      <p className="mt-3 text-[36px] font-semibold text-gray-900">{song.title}</p>
      <p className="text-[28] text-gray-600">{song.artist}</p>
    </div>
  );
}