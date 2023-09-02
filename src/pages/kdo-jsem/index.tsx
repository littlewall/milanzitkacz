import type {HeadFC} from 'gatsby';
import {FC} from 'react';
import * as styles from './index.module.css';
import '../layout.module.css';
import NavBar from '../../components/layout/navbar/navbar';
import HeadSEO from '../../components/layout/headSEO';
import Footer from '../../components/layout/footer/footer';

const AboutMePage: FC = () => (
    <>
        <NavBar />
        <div className={styles.page}>
            <div className={styles.blob}>
                <svg
                    id="10015.io"
                    viewBox="0 0 480 480"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                    <defs>
                        <clipPath id="blob">
                            <path
                                fill="#474bff"
                                d="M413.5,302.5Q390,365,335.5,417.5Q281,470,205.5,450Q130,430,88,370.5Q46,311,35,236.5Q24,162,74.5,101.5Q125,41,203,24.5Q281,8,337,59.5Q393,111,415,175.5Q437,240,413.5,302.5Z"
                            />
                        </clipPath>
                    </defs>
                    <image
                        x="0"
                        y="0"
                        width="100%"
                        height="100%"
                        clipPath="url(#blob)"
                        xlinkHref="/images/portrait/whoami.png"
                        preserveAspectRatio="xMidYMid slice"
                    >
                    </image>
                </svg>
            </div>
            <div className={styles.content}>
                <p>
                    Můj příběh je plný šťastných náhod a&nbsp;skvělých lidí, bez kterých bych dnes nebyl tam, kde jsem.
                    Jindřich Volf ml. mě zasvětil do&nbsp;tajů <strong>jazzu a&nbsp;improvizace</strong>, díky němu jsem si již za mlada zahrál
                    a&nbsp;zazpíval v&nbsp;několika jazzových uskupeních, a&nbsp;především mě vedl a&nbsp;podporoval v&nbsp;mých
                    skladatelských pokusech. Štěpánka Steinová mi zase otevřela dveře do&nbsp;<strong>populárního zpěvu </strong>
                    a&nbsp;dovolila mi otrkat&nbsp;se ve&nbsp;vystupování na&nbsp;koncertech.
                </p>

                <p>
                    V&nbsp;těchto letech jsem se učil naslouchat ostatní muzikanty, být součástí celku.
                    Odbourával jsem trému, učil&nbsp;se improvizovat v&nbsp;nečekaných situacích, držet&nbsp;se rytmu,
                    a&nbsp;především užívat&nbsp;si tu <strong>radost z&nbsp;hudby</strong>. Také jsem začínal sbírat první
                    zkušenosti <strong>na prknech, co znamenají svět</strong>. Ať už s Karlovarským hudebním divadlem, nebo s Divadlem KaPSa.
                </p>

                <p>
                    Cestu po&nbsp;uměleckých školách zakončil můj autorský muzikál <strong>Mistr jazzu</strong>, jednoaktové dílo
                    uváděné v&nbsp;Karlovarském městském divadle, které pro&nbsp;mě znamenalo jistý odrazový můstek.
                    Díky němu jsem složil přijímačky na&nbsp;konzervatoř, obor Skladba. A&nbsp;tam jsem potkal další
                    důležitou osobu v&nbsp;podobě Milana Svobody.
                </p>

                <p>
                    Díky němu jsem se nachomýtl k&nbsp;muzikálu Les Misérables - Bídníci, který se stal mým
                    <strong> muzikálovým debutem</strong>. Také jsem zde poznal dva důležité lidi - mého budoucího švagra
                    (tehdy budoucího, aktuálně současného) a&nbsp;také dobrého kamaráda a umělce, se kterým jsme rozepsali
                    další muzikálové dílo. Po&nbsp;Bídnících následovala další <strong>světová díla</strong> jako Fantom Opery nebo RENT.
                </p>

                <p>
                    Po sedmi letech plných muzikálů jsem potřeboval změnit směr. Vrátil jsem&nbsp;se ke&nbsp;starému
                    koníčku - tvorbě <strong>webových stránek</strong>. Nastoupil jsem do&nbsp;Digital Vision, které&nbsp;se stalo mým
                    druhým domovem, a&nbsp;kde můžu svůj koníček pilovat, zdokonalovat a&nbsp;vyprávět tak příběhy zase trochu jinak, online.
                </p>

                <p>
                    Nyní jsem došel na&nbsp;své cestě do&nbsp;bodu, kdy mi hudba víc než chybí (i&nbsp;když jsem s&nbsp;ní nikdy úplně
                    nepřestal) a&nbsp;chtěl bych se jí věnovat více než dosud. Věřím, že tyto dva životy dokážu
                    skloubit a&nbsp;že z&nbsp;nich navzájem můžu <strong>čerpat inspiraci</strong>.
                </p>

                <p>
                    Mým aktuálním dlouhodobým cílem je dopsání komornějšího muzikálu. Jsem stále na&nbsp;začátku,
                    ale s&nbsp;jasnou vizí a&nbsp;několika slibnými <strong>hudebními motivy</strong>. Ústřední duet je&nbsp;dokonce již celý
                    a&nbsp;doufám, že se o&nbsp;něj budu moci co&nbsp;nejdříve podělit.
                </p>

                <p>
                    Děkuju, že mě na mé cestě podporujete a&nbsp;že s&nbsp;vámi tento <strong>příběh</strong> můžu sdílet.
                </p>
            </div>
        </div>
        <Footer/>
    </>
);

export default AboutMePage;

export const Head: HeadFC = () => (
    <HeadSEO>
        <title>Kdo jsem a jaký je můj příběh | Milan Zítka</title>
    </HeadSEO>
);
