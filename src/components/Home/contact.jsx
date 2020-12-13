import React from 'react'
import Title from "../Globals/title"
import styles from "../../styles/contact.module.scss"
const Contact = () => {
  return (
    <section className={styles.contact} id="contact">
      <Title title="Contact" subtitle="us"/>
      <div className={styles.center}>
        <form className={styles.form} action="mailto:mthang1801@gmail.com">
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" className={styles.inputGroup} placeholder="John Doe" id="name" name="name"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="text" className={styles.inputGroup} placeholder="johndoe@gmail.com" id="email" name="email"/>
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="desc">Description</label>
            <textarea type="text" className={styles.inputGroup} placeholder="Your description here..." id="desc" name="desc" rows="5"/>
          </div>
          <div className="txt-center">
          <button type="submit" className={styles.btnSubmit}>Submit</button>
          </div>
          
        </form>
      </div>
    </section>
  )
}

export default Contact
