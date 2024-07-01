import { useContext } from "react";
import style from "./index.module.scss";
import { Link } from "react-router-dom";
import { UserContext } from "../../Providers/UserContext";
import img from "../../assets/Logo.svg";
import { TechList } from "../../components/TechList";
import { CreateTechModal } from "../../components/CreateTechModal";
import { EditTechModal } from "../../components/EditTechModal";
import { TechContext } from "../../Providers/TechContext";

export const Dashboard = () => {
  const { user, userLogout } = useContext(UserContext);
  const { onCreateModal, editCardTech } = useContext(TechContext);
  return (
    <>
      <header className={style.header}>
        <div className="container">
          <figure>
            <img src={img} alt="midia" />
          </figure>
          <Link
            to="/"
            onClick={() => {
              userLogout();
            }}
          >
            sair
          </Link>
        </div>
      </header>
      <main className={style.main}>
        <section className={style.section}>
          <div className="container">
            <h1>Olá, {user?.name} ! </h1>
            <p>{user?.course_module} - ( Introdução ao Front-End )</p>
          </div>
        </section>

        <section>
          <div className="container">
            {onCreateModal ? <CreateTechModal /> :null}
            
            {editCardTech != null ? <EditTechModal/> :null }
            <TechList />
          </div>
        </section>
      </main>
    </>
  );
};
