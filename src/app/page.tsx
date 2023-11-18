export default function Home() {
  return (
    <main className='mt-32 flex flex-col items-center justify-center gap-5'>
      <span className='text-3xl font-semibold'>Starter pack for</span>
      <span className='text-2xl'>
        Next.js + TypeScript + TailwindCSS + DaisyUI + Eslint + Prettier
      </span>
      <span>
        Get started by editing
        <span className='kbd mx-1 underline underline-offset-4'>
          src/app/page.tsx
        </span>
      </span>
    </main>
  );
}
