export default function Loading() {
  return (
    <main aria-busy="true" aria-label="Loading page" className="min-h-screen bg-[#f8f3e9]">
      <div className="h-[70vh] animate-pulse bg-[#dfe7e0]" />
      <div className="mx-auto max-w-[1280px] space-y-8 px-6 py-20 sm:px-10">
        <div className="h-4 w-32 animate-pulse rounded-full bg-[#d9e1da]" />
        <div className="h-14 max-w-xl animate-pulse rounded-[18px] bg-[#d9e1da]" />
        <div className="grid gap-5 md:grid-cols-3">
          {Array.from({ length: 3 }).map((_, index) => <div key={index} className="aspect-[4/3] animate-pulse rounded-[22px] bg-[#d9e1da]" />)}
        </div>
      </div>
    </main>
  );
}
