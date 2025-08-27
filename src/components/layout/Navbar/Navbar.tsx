import styles from './Navbar.module.scss';
import React, {useState} from "react";
import Modal from "./Modal/Modal.tsx";
import {faHeart} from "@fortawesome/free-solid-svg-icons";
import {classNames} from "../../../utils/classNames.ts";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useCookies} from "react-cookie";

const Navbar = () => {
  const [cookies] = useCookies(['favorite-pokes']);
  const [openModal, setOpenModal] = useState(false);

  return (
    <nav className={styles.navbar}>
      <img className={styles.image} src={"/logo.png"} alt="logo" />

      <div className={styles.buttonGroup}>
        <button className={styles.favoriteButton}>
          <FontAwesomeIcon
            icon={faHeart}
            className={classNames([styles.icon])}
            onClick={() => setOpenModal(true)}
          />
          <span className={styles.totalPokes}>{cookies["favorite-pokes"]?.length ?? 0}</span>
        </button>
      </div>

      {openModal && <Modal closeModal={() => setOpenModal(false)}/>}
    </nav>
  );
}

export default Navbar;