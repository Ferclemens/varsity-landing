export default function Footer() {
  return (
    <footer className="w-full h-20 p-4">
      <div className="flex flex-col-reverse justify-between py-6 gap-4 md:pb-4 md:pt-6 md:flex-row sm:px-10 items-center border-t text-xs text-slate-500">
        <p>
          © 2024 Varsity Raptor, All rights reserved. | Developed by{" "}
          <a href="https://www.linkedin.com/in/foclemens/" target="_blank">
            Fer Clemens
          </a>
        </p>
        <div className="flex gap-5 lg:pr-48">
          <a href="https://www.facebook.com/" target="_blank">
            Facebook
          </a>
          <a href="https://www.instagram.com/varsityraptor/" target="_blank">
            Instagram
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=543624633517&text="
            target="_blank"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </footer>
  );
}
