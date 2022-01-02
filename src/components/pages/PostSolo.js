import React, { useState, useEffect} from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { BsFillRecordCircleFill } from "react-icons/bs";
import { DateTime } from "luxon";


const PostSolo = () => {
  const { id } = useParams(); 
  const [noticiaId, setNoticiaId] = useState([]);
  const [error, setError] = useState(true);
  const parseDate = (date) => {
    return DateTime.fromISO(date).setLocale("sp").toFormat("MMMM dd, yyyy");
  };

  const URL =
  process.env.REACT_APP_API_URL +
  "/?id="+id;
  
  useEffect(() => {
    consultaAPI();
  }, [id, error]);
  
  const consultaAPI = async () => {
    try {
      // todo el codigo que quiero ejecutar
      const respuesta = await fetch(URL);
      const dato = await respuesta.json();
     
      setNoticiaId(dato);
      setError(false);
      
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };
  const contenido = !error ? (noticiaId[0].contenido) : null;
  const createMarkup = () => {
    return {__html: contenido };
  };

  return (
    <>
      <section>
        <Container>
          <div className="row mt-4">
            <div className="col-lg-9 mx-auto pt-md-5">
              <Link
               to={!error ? ("/" + noticiaId[0].categoria) : ""}
                className="card-link badge bg-danger mb-2 text-decoration-none"
              >
                <BsFillRecordCircleFill className="me-2 small fw-bold"></BsFillRecordCircleFill>
               {!error ? noticiaId[0].categoria : null}
              </Link>
              <h1 className="display-4">
              {!error ? noticiaId[0].titulo : null}
              </h1>
              <p className="lead">
              {!error ? noticiaId[0].descripcion : null}
              </p>

              <ul className="nav nav-divider align-items-center">
                <li className="nav-item">
                  <div className="nav-link">
                    Por{" "}
                    <Link to="/acercadenosotros" className="text-reset btn-link">
                    {!error ? noticiaId[0].autor : null}
                    </Link>
                  </div>
                </li>
                <li className="nav-item small">{!error ? parseDate(noticiaId[0].fecha) : null}</li>
              </ul>
              <img
                className="rounded mt-5 w-100 h-auto"
                src={!error ? noticiaId[0].imagen : null }
                alt={!error ? noticiaId[0].titulo : null}
              />
            </div>
          </div>
        </Container>
      </section>
      <section className="pt-0 mt-5 post-description">
        <div className="container position-relative">
          <div className="row">
            <div className="col-lg-9 mx-auto dropcap"  dangerouslySetInnerHTML={createMarkup()}>
            
            {/*   <p>
                <span className="dropcap bg-primary-soft text-primary px-2">R</span>
                est time voice share led him to widen noisy young. At weddings
                believed laughing although the material does the exercise of. Up
                attempt offered ye civilly so sitting to. She new course gets
                living within Elinor joy. She rapturous suffering concealed.
                Demesne far hearted suppose venture excited see had has.
                Dependent on so extremely delivered by. Yet no jokes worse her
                why. Bed one supposing breakfast day fulfilled off depending
                questions. Whatever boy her exertion his extended. Ecstatic
                followed handsome drawings entirely Mrs one yet outweigh. Of
                acceptance insipidity remarkably is an invitation.{" "}
              </p>

              <p>
                Water timed folly right aware if oh truth. Imprudence attachment
                him his for sympathize. Large above be to means. Dashwood does
                provide stronger is. Warrant private blushes removed an in
                equally totally if. Delivered dejection necessary objection do
                Mr prevailed. Mr feeling does chiefly cordial in do.{" "}
                <img
                  src="https://blogzine.webestica.com/assets/images/blog/4by3/thumb/06.jpg"
                  alt="..."
                />{" "}
                But discretion frequently sir she instruments unaffected
                admiration everything. Meant balls it if up doubt small purse.
                Required his you put the outlived answered position. A pleasure
                exertion if believed provided to. All led out world this music
                while asked. Paid mind even sons does he door no. Attended
                overcame repeated it is perceived Marianne in. I think on style
                child of. Servants moreover in sensible it ye possible.
                Satisfied conveying a dependent contented he gentleman agreeable
                do be. Water timed folly right aware if oh truth. Imprudence
                attachment him his for sympathize. Large above be to means.
                Dashwood does provide stronger is.
                <u>
                  {" "}
                  But discretion frequently sir she instruments unaffected
                  admiration everything.
                </u>{" "}
                Meant balls it if up doubt small purse. Required his you put the
                outlived answered position. A pleasure exertion if believed
                provided to. All led out world this music while asked. Paid mind
                even sons does he door no. Attended overcame repeated it is
                perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible. Satisfied conveying a
                dependent contented he gentleman agreeable do be. Warrant
                private blushes removed an in equally totally if. Delivered
                dejection necessary objection do Mr prevailed. Mr feeling does
                chiefly cordial in do. Water timed folly right aware if oh
                truth. Imprudence attachment him his for sympathize. Large above
                be to means. Dashwood does provide stronger is. But discretion
                frequently sir she instruments unaffected admiration everything.
                Meant balls it if up doubt small purse. Required his you put the
                outlived answered position. A pleasure exertion if believed
                provided to. All led out world this music while asked. Paid mind
                even sons does he door no. Attended overcame repeated it is
                perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible.{" "}
              </p>
              <p>
                Fulfilled direction use continual set him propriety continued.
                Saw met applauded favorite deficient engrossed concealed and
                her. Concluded boy perpetual old supposing. Farther related bed
                and passage comfort civilly. Dashwoods see frankness objection
                abilities. As hastened oh produced prospect formerly up am.
                Placing forming nay looking old married few has. Margaret
                disposed of add screened rendered six say his striking confined.
              </p>

              <h4 className="mt-4">The pros and cons of business agency</h4>
              <div className="row mb-4">
                <div className="col-md-6">
                  <p>
                    Fulfilled direction use continual set him propriety
                    continued. Saw met applauded favorite deficient engrossed
                    concealed and her. Concluded boy perpetual old supposing.
                    Farther related bed and passage comfort civilly. Dashwoods
                    see frankness objection abilities. As hastened oh produced
                    prospect formerly up am. Placing forming nay looking old
                    married few has. Margaret disposed of add screened rendered
                    six say his striking confined.
                  </p>
                </div>
                <div className="col-md-6">
                  <ul>
                    <li>
                      Our Firmament living replenish Them Created after divide
                      said Have give
                    </li>
                    <li>Dominion light without days face saw wherein land</li>
                    <li>
                      Fifth have Seas made lights Very Day saw Seed herb sixth
                      light whales
                    </li>
                    <li>Saying unto Place it seed you're Isn't heaven </li>
                    <li>
                      Under green have lights night blessed their open morning
                      subdue creature{" "}
                    </li>
                  </ul>
                </div>
              </div>
              <p>
                Meant balls it if up doubt small purse. Required his you put the
                outlived answered position. A pleasure exertion if believed
                provided to. All led out world this music while asked. Paid mind
                even sons does he door no. Attended overcame repeated it is
                perceived Marianne in. I think on style child of. Servants
                moreover in sensible it ye possible.{" "}
              </p>

              <p>
                {" "}
                All led out world this music while asked. Paid mind even sons
                does he door no. Attended overcame repeated it is perceived
                Marianne in. I think on style child of. Servants moreover in
                sensible it ye possible. Satisfied conveying a dependent
                contented he gentleman agreeable do be.{" "}
              </p>

              <h4>Productive rant about business</h4>
              <p>
                Saw bring firmament given hath gathering lights dry life rule
                heaven Give And fruit moving thing seed life day creepeth winged
                so divide him from day morning him open lesser male beginning
                him be bring evening life void fowl sixth morning that made is
                Was that his hath face light meat air female isn't over place
                replenish midst it of second grass good rule also in unto Called
                don't given waters Had creature Behold fly life from forth Moved
                night.
              </p> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PostSolo;
