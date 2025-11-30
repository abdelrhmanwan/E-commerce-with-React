import "./Homepage.css";
import { Link } from "react-router-dom";
import Timer from "./Timer";
import Changecoulor from "./Changecoulor";
import { Row, Col } from "react-bootstrap";

function Homepage() {
  return (
    <>
      <main>
        <div className="container p-5 mt-5">
          <div className="card bg-black text-white shadow-lg rounded-3">
            <div className="container px-4 p-5 g-4">
              <div className="row gx-5">
                <div className="col px-5 ms-4">
                  <div className="d-flex pt-3 pb-4 g-1 flex-wrap">
                    <div>
                      <img
                        style={{ width: "30px" }}
                        src="./image/download.png"
                        alt
                      />
                    </div>

                    <div className="fs-6">pes cart 2025</div>
                  </div>

                  <div className="lh-lg pb-2">
                    <h2>Up to 10%</h2>
                    <h2>off Voucher</h2>
                  </div>

                  <Link
                    to="/shop"
                    className="border-bottom text-decoration-none text-white border-white pb-1"
                    style={{ cursor: "pointer" }}
                  >
                    Shop Now
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="40"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="#fff"
                      d="M17.079 12.5H5.5q-.213 0-.357-.143T5 12t.143-.357t.357-.143h11.579L11.64 6.062q-.147-.146-.153-.345t.158-.363q.165-.16.354-.163q.189-.002.354.163l6.08 6.08q.131.132.184.268q.053.137.053.298t-.053.298q-.052.137-.183.268l-6.081 6.08q-.14.14-.341.15q-.202.01-.367-.15q-.165-.165-.165-.356q0-.192.165-.357z"
                    />
                  </svg>
                </div>

                <div className="col m-auto d-flex justify-content-center align-items-center">
                  <img
                    className="img-shoes"
                    src="./image/shoes.png"
                    alt="shoes"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="cards m-auto px-3 px-md-5">
        <div className="container px-3 px-md-4 py-4 py-md-5">
          <div className="mx-md-3 mx-lg-5 mx-5">
            <h3 className="text-danger fs-6 mb-3">Today’s</h3>
          </div>
          <div className="d-flex flex-wrap gap-4 pb-3">
              <h2 className="mx-md-3 mx-lg-4 px-2 mx-5">Flash Sales</h2>
            <div>
              <Timer />
            </div>
          </div>

          <div className="boxes-list">
            <div className="">
              <div className="bg-body-secondary text-center position-relative">
                <span className="cardes-discount">-40%</span>
                <Changecoulor />
                <img src="./image/g92-2-500x500 1.png" className="img-fluid p-5 " alt="..."/>
              </div>

              <div className="card-body mt-3">
                <h6>HAVIT HV-G92 Gamepad</h6>
                <p className="text-danger fw-bold">
                  $120
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $160
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                     <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>
                    
                  </div>

                  <h6 className="text-secondary">(88)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <span className="cardes-discount">-35%</span>

                <Changecoulor />

                <img
                  src="./image/keyboard.png"
                  className="img-fluid p-lg-5 p-4 mt-5 mt-lg-0 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>AK-900 Wired Keyboard</h6>
                <p className="text-danger fw-bold">
                  $960
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $1160
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                  </div>

                  <h6 className="text-secondary">(75)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <span className="cardes-discount">-40%</span>

                <Changecoulor />

                <img src="./image/screen.png" className="img-fluid p-5 " alt="..."/>
              </div>

              <div className="card-body mt-3">
                <h6>IPS LCD Gaming Monitor</h6>
                <p className="text-danger fw-bold">
                  $2400
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $2800
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                  </div>

                  <h6 className="text-secondary">(99)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <span className="cardes-discount">-40%</span>
                <Changecoulor />
                <img src="./image/football.png"className="img-fluid p-5  " alt="..."/>
              </div>

              <div className="card-body mt-3">
                <h6>HAVIT HV-G92 Gamepad</h6>
                <p className="text-danger fw-bold">
                  $150
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $200
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24">
                      <path fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5" stroke="#FFAD33"/>
                    </svg>

                  </div>

                  <h6 className="text-secondary">(99)</h6>
                </div>
              </div>
            </div>
          </div>

          <Link to="/"
            className="btn btn-danger text-white text-decoration-none d-block mx-auto text-center px-4 py-3 mt-3"
            style={{ width: "fit-content", borderRadius: "6px" }}
          >
            View All Products
          </Link>
        </div>

        <div className="border border-danger-50 w-75 h-1 m-auto"></div>
      </section>

      <section className="cards m-auto px-3 px-md-5">
        <div className="container px-3 px-md-4 py-4 py-md-5">
          <div className="mx-md-3 mx-lg-5 mx-5">
            <h3 className="text-danger fs-6 mb-3">This Month</h3>
          </div>

          <div className="d-flex flex-wrap justify-content-between pb-3">
            <h2 className="mx-md-3 mx-lg-4 px-2 mx-5">Best Selling Products</h2>

            <Link
              to="/"
              className="btn btn-danger me-md-4 me-0 ms-md-0 ms-4 ps-5 pe-5 pt-2 pb-2"
              style={{ width: "fit-content", borderRadius: "6px" }}
            >
              View All Products
            </Link>
          </div>

          <div className="boxes-list">
            <div className="">
              <div className="bg-body-secondary text-center position-relative">
                <Changecoulor />

                <img
                  src="./image/realmadrid.png"
                  className="img-fluid p-5 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>new Real Madrid tee-shirt</h6>
                <p className="text-danger fw-bold">
                  $120
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $160
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(75)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/basketball.png"
                  className="img-fluid p-lg-5 p-4 mt-5 mt-lg-0 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>Basketball</h6>
                <p className="text-danger fw-bold">
                  $85
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $100
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(65)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/cpu.png"
                  className="img-fluid p-5 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>RGB liquid CPU Cooler</h6>
                <p className="text-danger fw-bold">
                  $2000
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $2600
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(65)</h6>
                </div>
              </div>
            </div>

            <div className="">
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/mouse.png"
                  className="img-fluid p-5  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>Gaming Mouse</h6>
                <p className="text-danger fw-bold">
                  $110
                  <span className="text-secondary text-decoration-line-through mx-3">
                    $130
                  </span>
                </p>

                <div className="d-flex flex-wrap gap-3">
                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(86)</h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="panner">
        <div className="container p-5 mt-5">
          <div className="card bg-black text-white shadow-lg rounded-3">
            <div className="container px-4 p-5 g-4">
              <div className="row gx-5">
                <div className="col px-sm-5 px-2 ms-4">
                  <div className="fs-6 text-success">Categories</div>

                  <div className="lh-lg pb-2 mt-4">
                    <h1>Enhance Your </h1>
                    <h1>Music Experience</h1>
                  </div>

                  <div className="d-flex text-center flex-wrap gap-3 mt-3 mb-5">
                    <div className="circle bg-white text-black rounded-circle d-flex flex-column align-content-cente justify-content-center ">
                      <span className="lh-1 fw-bolder">5</span>
                      <span>Days</span>
                    </div>

                    <div className="circle bg-white text-black rounded-circle d-flex flex-column align-content-cente justify-content-center ">
                      <span className="lh-1 fw-bolder">23</span>
                      <span>Hours</span>
                    </div>

                    <div className="circle bg-white text-black rounded-circle d-flex flex-column align-content-cente justify-content-center ">
                      <span className="lh-1 fw-bolder">45</span>
                      <span>Minutes</span>
                    </div>

                    <div className="circle bg-white text-black rounded-circle d-flex flex-column align-content-cente justify-content-center ">
                      <span className="lh-1 fw-bolder">38</span>
                      <span>Seconds</span>
                    </div>
                  </div>

                  <Link
                    to="/"
                    className="btn btn-success bg-gradient px-5 py-2 fw-bold"
                    style={{ width: "fit-content", borderRadius: "6px" }}
                  >
                    Buy Now!
                  </Link>
                </div>

                <div className="col m-md-auto m-0 p-md-5 p-0  background-panner">
                  <img
                    className="img-shoes background-panner1 p-sm-0 p-5"
                    src="./image/musictool.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cards2 m-auto px-3 px-md-5">
        <div className="container px-3 px-md-4 py-4 py-md-5">
          <div className="cards mx-md-3 mx-lg-5 mx-5">
            <h3 className="text-danger fs-6 mb-3">Our Products</h3>
          </div>

          <div>
            <h2 className="mx-md-3 mx-lg-4 px-2 mx-5 pb-3">Explore Our Products</h2>
          </div>

          <div className="boxes-list">
            <div className>
              <div className="bg-body-secondary text-center position-relative">
                <Changecoulor />

                <img
                  src="./image/skillrun.png"
                  className="img-fluid p-5 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>Skillrun Live 7000</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$1500</p>
                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(35)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/camera.png"
                  className="img-fluid p-lg-5 p-4 mt-sm-4 mt-2 mt-lg-0 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>CANON EOS DSLR Camera</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$650</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(75)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/laptopgaming.png"
                  className="img-fluid p-5 "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>ASUS FHD Gaming Laptop</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$1200</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(83)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/gamingkeyboard.png"
                  className="img-fluid p-5  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>keypoard gaming</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$150</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(55)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <span className="cardes-discount bg-gradient">NEW</span>

                <Changecoulor />

                <img
                  src="./image/tennisroquett.png"
                  className="img-fluid p-5  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>Tennis Racket</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$80</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(45)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/starsshoes.png"
                  className="img-fluid p-5  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>Jr. Zoom Soccer Cleats</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$300</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(75)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <span className="cardes-discount bg-gradient">NEW</span>

                <Changecoulor />

                <img
                  src="./image/gpiishooter.png"
                  className="img-fluid p-5  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>GP11 Shooter USB Gamepad</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$120</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(65)</h6>
                </div>
              </div>
            </div>

            <div className>
              <div className="bg-body-secondary text-center position-relative ">
                <Changecoulor />

                <img
                  src="./image/tee-shirtbasketball.png"
                  className="img-fluid mb-2 pb-4  "
                  alt="..."
                />
              </div>

              <div className="card-body mt-3">
                <h6>basketball-uniforms trainning</h6>

                <div className="d-flex flex-wrap gap-3">
                  <p className="text-danger fw-bold">$60</p>

                  <div className="d-flex flex-wrap ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#FFAD33"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#FFAD33"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        d="m7.325 18.923l1.24-5.313l-4.123-3.572l5.431-.47L12 4.557l2.127 5.01l5.43.47l-4.123 3.572l1.241 5.313L12 16.102z"
                        stroke-width="0.5"
                        stroke="#000"
                      />
                    </svg>
                  </div>

                  <h6 className="text-secondary">(45)</h6>
                </div>
              </div>
            </div>
          </div>

          <Link
            to="/"
            className="btn btn-danger text-white text-decoration-none d-block mx-auto text-center px-4 py-2"
            style={{ width: "fit-content", borderRadius: "6px" }}
          >
            View All Products
          </Link>
        </div>
      </section>

      <section className="cards m-auto px-3 px-md-5">
        <div className="container px-0 px-md-4 py-4 py-md-5">
          <div className=" mx-lg-5 mx-md-5 mx-2">
            <h3 className="text-danger fs-6 mb-3 ">Featured</h3>
          </div>

          <div>
            <h2 className="mx-md-3 mx-lg-4 px-2 mx-5 pb-3">New Arrival</h2>
          </div>

          <div className="grid-feature">
            <div className="bg-black">
              <div className="background-img1">
                <div className="content d-flex flex-column justify-content-end text-white p-5">
                  <h4 className="fs-5 mb-3">PlayStation 5</h4>
                  <h5 className="fs-6 mb-3">
                    Black and White version of the PS5 coming out on sale.
                  </h5>

                  <Link
                    className="border-bottom text-decoration-none text-white border-white pb-1 d-inline-block"
                    style={{ cursor: "pointer", width: "80px" }}
                  >
                    Shop Now
                  </Link>
                </div>
              </div>
            </div>

            <div className="grid">
              <div className="bg-black">
                <div className="background-img2">
                  <div className="content d-flex flex-column justify-content-end text-white p-5">
                    <h4 className="fs-5 mb-3">PlayStation 5 Controller</h4>
                    <h5 className="fs-6 mb-3">
                      Black and red version of the PS5 controller coming out on
                      sale.
                    </h5>

                    <Link
                      className="border-bottom text-decoration-none text-white border-white pb-1 d-inline-block"
                      style={{ cursor: "pointer", width: "80px" }}
                    >
                      Shop Now
                    </Link>
                  </div>
                </div>
              </div>

              <div className="grid-feature1 ">
                <div className="bg-black">
                  <div className="background-img3">
                    <div className="content d-flex flex-column justify-content-end text-white p-5">
                      <h4 className="fs-5 mb-3">Speakers</h4>
                      <h5 className="fs-6 mb-3">Amazon wireless speakers</h5>

                      <Link
                        className="border-bottom text-decoration-none text-white border-white pb-1 d-inline-block"
                        style={{ cursor: "pointer", width: "80px" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="bg-black">
                  <div className="background-img4">
                    <div className="content d-flex flex-column justify-content-end text-white p-5">
                      <h4 className="fs-5 mb-3">headphone gaming</h4>
                      <h5 className="fs-6 mb-3">Amazon wireless headphone</h5>

                      <Link
                        className="border-bottom text-decoration-none text-white border-white pb-1 d-inline-block"
                        style={{ cursor: "pointer", width: "80px" }}
                      >
                        Shop Now
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default Homepage;
