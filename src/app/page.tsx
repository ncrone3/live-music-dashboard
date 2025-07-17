import NowPlaying from './components/NowPlaying';
import TopBar from './components/TopBar';

export default function Home() {
  return (
      <div className="overflow-x-hidden">
      <TopBar />
      <main className="flex min-h-screen flex-col items-center justify-center bg-neutral-100 text-gray-900">
        <NowPlaying />
      </main>
    </div>
  );
}

