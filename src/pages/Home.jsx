import React, {useState} from 'react'
import {Link} from 'react-router-dom'

import styles from './../styles/Home.module.scss'

import product from './../images/image1.png'
function Home() {
  const [tabActive, setTabActive] = useState(0)


  return (
    <div className={styles.home_container}>
      <div className={styles.section}>
      <div className={styles.close}>
          <i class="fa-solid fa-xmark"></i>
          </div>
        <nav className={styles.navbar}>
          <ul>
            <li 
            className={tabActive===0? styles.tab : styles.tab.active}>PRODUCT</li>
            <li className={tabActive===0? styles.tab : styles.tab.active}>VIDEO</li>
            <li className={tabActive===0? styles.tab : styles.tab.active}>CATALOG</li>
            <li className={tabActive===0? styles.tab : styles.tab.active}>EXPLORE MORE</li>
          </ul>
        </nav>
        <div className={styles.product}>
          <div className={styles.product_bg}>
            <div className={styles.product_img}>
            <img src={product} alt=''/>
            </div>
          </div>
          <div className={styles.product_info}>
          <p className={styles.product_id}>
            產品型號12345678
            </p>
          <p className={styles.product_name}>
            產品名稱 TMA-2 STUDIO
            </p>
          <p className={styles.product_details}>
          產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.產品介紹 Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin 
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home