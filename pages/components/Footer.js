import React from 'react';
import styles from '../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faEnvelope,
    faPhone,
    faRssSquare,
} from '@fortawesome/free-solid-svg-icons';
import {
    faTelegramPlane,
    faTwitterSquare,
    faInstagram,
    faFacebookSquare,
} from '@fortawesome/free-brands-svg-icons';

const aboutUs = {
    text:
        'لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.',
};

const Footer = () => {
    return (
        <>
            <footer className={styles.footerContainer}>
                <div className={`${styles.container} ${styles.footer}`}>
                    <div className={styles.aboutUs}>
                        <div className={styles.footerTitles}>درباره ما</div>
                        <p>{aboutUs.text}</p>
                    </div>
                    <div className={styles.footerMenu}>
                        <div className={styles.footerTitles}>بخش های سایت</div>
                        <ul>
                            <li>
                                <a href="/">صفحه اصلی</a>
                            </li>
                            <li>
                                <a href="/">اخبار</a>
                            </li>
                            <li>
                                <a href="/">وبلاگ</a>
                            </li>
                            <li>
                                <a href="/">تماس با ما</a>
                            </li>
                            <li>
                                <a href="/">ارتباط با ما</a>
                            </li>
                        </ul>
                    </div>
                    <div className={styles.contactUs}>
                        <div className={styles.footerTitles}>تماس با ما</div>
                        <div className={styles.footerContactItems}>
                            <FontAwesomeIcon icon={faEnvelope} />
                            <span> text@gmail.com</span>
                            <br />
                            <FontAwesomeIcon icon={faTelegramPlane} />
                            <span> @test-telegram</span>
                            <br />
                            <FontAwesomeIcon icon={faPhone} />
                            <span> 0218822131</span>
                        </div>
                    </div>
                </div>

                <div className={styles.footerBottom}>
                    <div className={styles.container}>
                        <span>
                            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
                            صنعت چاپ و با استفاده از طراحان گرافیک است.
                        </span>
                        <span className={styles.footerIcons}>
                            <a href="/">
                                <FontAwesomeIcon icon={faTelegramPlane} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faRssSquare} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faInstagram} />
                            </a>
                            <a href="/">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
