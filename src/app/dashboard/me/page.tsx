import { HeaderDesktop } from "../components/header";

export default function Me() {
  return (
    <>
      <HeaderDesktop />
      <div className="container mx-auto bg-zinc-900 p-3 rounded-md my-9">
        <p className="w-fit text-white">
          https://minha_url.com/creator/fulano-dev
        </p>
      </div>
    </>
  );
}
