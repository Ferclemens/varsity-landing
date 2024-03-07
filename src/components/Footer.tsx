export default function Footer() {
  return (
    <footer className="w-full h-20 p-4">
      <div className="flex flex-col-reverse justify-between py-6 gap-4 md:pb-4 md:pt-6 md:flex-row sm:px-10 items-center border-t text-xs text-slate-500">
        <p>© 2020 Your Company, Inc. All rights reserved.</p>
        <div className="flex gap-5 lg:pr-48">
          <a href="https://www.facebook.com/" className="">
            Facebook
          </a>
          <a href="https://www.instagram.com/">Instagram</a>
          <a href="https://www.whatsappcom/">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
