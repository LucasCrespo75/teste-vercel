import Image from "next/image";
import Header from "./component/Header/HeaderHome";
import SobreSession from "./component/SobreSessionHome/SobreSession";
import Servico from "./component/Servico/Servico";
import Equipe from "./component/MembrosObras/Equipe";

export default function Home() {
  return (
    <>
      <Header />
      <SobreSession />
      <Servico />
      <Equipe />
    </>
  );
}
