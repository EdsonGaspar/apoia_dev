import { HeaderDesktop } from "../components/header";

export default function Me() {
  return (
    <>
      <HeaderDesktop />
      <div className="container mx-auto bg-black p-3 rounded-md my-9">
        <span className="text-white">
          https://minha_url.com/creator/fulano-dev
        </span>
      </div>
    </>
  );
}
