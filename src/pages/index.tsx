import { Roboto } from 'next/font/google'
 
const roboto = Roboto({
  weight: '900',
  subsets: ['latin'],
  display: 'swap',
})

export default function Home() {
  return (
    <div className={roboto.className}>
      <h1> Hello World </h1>
    </div>
  );
}
