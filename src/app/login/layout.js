import '@/app/globals.css';
import { dana } from "@/utils/local_font";
 
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en" dir="rtl" data-theme="light">
      <body className={`${dana.variable} font-sans`}>
       <div className='flex justify-center'>
        {children}
       </div>
        </body>
    </html>
  );
}