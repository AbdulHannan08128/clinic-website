import styles from "./page.module.css";
import TypedJS from "../../components/Typed/Type";
import Contact from "../../components/Con-Btn/Contact";
export const metadata = {
  title: "Golden Hands || About",
  description: "About Our Clinic and More",
  keywords: ["About GH", "About Golden Hands", "About Us", "about"],
};
export default function page() {
  return (
    <main>
      <div className={styles.about}>
        <div className={styles.center}>
          <h1 className={styles.h1}>
            About Our <br />
            {/* {data[0].email} */}
            <TypedJS strings={["Experience", "Doctors", "Clinic"]} />
          </h1>
        </div>
        <div className={styles.content}>
          <div className={styles.text} data-aos="fade-up" data-aos-duration="2000">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere
            molestias vero beatae ipsum obcaecati consequuntur ducimus et
            tempora ad, quibusdam magni veniam porro pariatur fuga culpa sed
            eius reprehenderit odit odio eveniet maiores eos nesciunt nemo?
            Consequatur quaerat necessitatibus non eum nesciunt cum dignissimos
            eius corporis maiores aperiam repellat delectus, dolores provident
            ipsum porro magnam quasi sint quae voluptates tenetur fugiat illo
            earum eveniet. Repellat dolorum ipsum aperiam itaque quaerat
            voluptate deleniti maiores ut expedita blanditiis ea quos id, esse
            unde, quasi assumenda nam. Earum vel sequi praesentium officia
            numquam magnam deleniti soluta consequatur delectus ipsum
            voluptatibus ad, aliquid amet non corporis aspernatur temporibus
            commodi expedita eveniet. Atque, qui explicabo optio ratione vel
            nisi eos officiis minima, quasi, error odio! Porro saepe asperiores
            similique maxime. At veritatis alias, obcaecati placeat possimus
            doloremque delectus aut eius sequi architecto velit pariatur
            molestiae rem fugiat quam beatae ipsum similique iste temporibus.
            Nesciunt optio ex suscipit. Error repellat, ipsa totam, similique ut
            eius modi laudantium reprehenderit ex beatae, quae sed explicabo
            temporibus debitis asperiores saepe possimus enim. Ipsum
            perspiciatis sapiente illum culpa pariatur iste adipisci ut enim,
            maxime voluptates placeat vitae sint nobis, quisquam beatae
            explicabo quo in facere. Nostrum adipisci corporis, ipsa at, placeat
            vitae veritatis beatae praesentium minus quasi aut earum? Fugiat rem
            facilis odit sapiente ea, nihil voluptatem dignissimos quia aliquid
            iusto atque omnis quaerat soluta quod ratione est amet, nostrum a
            non tenetur saepe ut qui dolor dolorum! Magnam repudiandae
            asperiores illum cupiditate aliquam minima non, quia reiciendis quae
            consequuntur praesentium. Vitae eius quos impedit vel,
            necessitatibus voluptate voluptas temporibus provident deserunt
            fugiat sed, voluptates, obcaecati quasi? Eaque corporis officiis,
            nemo nulla quidem ab sequi, totam autem repellat quaerat est harum
            perspiciatis nesciunt amet. A ratione autem sapiente est vero
            architecto earum dignissimos tenetur iure officia ipsa, repellendus
            mollitia odio saepe enim laboriosam, sunt molestiae harum nostrum
            perspiciatis voluptas dolorum asperiores praesentium totam. Natus
            animi nulla aut sed necessitatibus? Esse perferendis tenetur ullam
            enim amet doloribus a ea architecto laudantium explicabo.
            Voluptatibus, adipisci maiores nemo minima laborum recusandae qui!
            Hic veniam earum doloremque consequuntur quae non, eligendi rerum
            quasi ratione, recusandae dignissimos, vel vitae facere
            exercitationem. Repudiandae doloremque ut aperiam qui dolore quos
            ipsa adipisci, dignissimos architecto quasi dolorem iure fugiat ex
            cupiditate, tenetur deleniti eos fugit veniam praesentium
            accusantium molestias libero cumque error consectetur. Voluptatum
            ipsam, maiores alias ducimus harum laborum dignissimos consectetur
            nihil ex iure! Illo distinctio adipisci vero, quo maiores reiciendis
            ipsa ratione doloribus in tenetur iure dignissimos cupiditate eaque!
            Autem perferendis quibusdam nihil dolorum molestiae nemo eius
            perspiciatis, accusantium repellat atque omnis voluptate expedita
            ex. Nisi fugiat, esse aliquam quod blanditiis maxime repellendus
            accusamus deserunt ut veritatis tenetur a provident saepe doloribus
            beatae necessitatibus nobis modi exercitationem quas aut! Maiores
            culpa, qui quaerat cumque dolores molestiae iste labore libero,
            error a ipsam veniam similique deserunt omnis? Ipsum iure fugiat
            sapiente a! Assumenda at, mollitia beatae accusantium pariatur,
            atque minima voluptates ab, iste nemo recusandae impedit!
            Recusandae, minus! Non eos blanditiis optio aspernatur, possimus
            eaque. Facere, amet!
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
