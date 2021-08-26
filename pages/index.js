export default function Home() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg position-absolute top-0 z-index-3 w-100">
        <div className="container">
          <div>
            <ul className="navbar-nav navbar-nav-hover mx-auto">
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Pages
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Authentication
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Applicationsdown-arrow
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Ecommercedown-arrow
                </a>
              </li>
              <li className="nav-item dropdown dropdown-hover mx-2">
                <a
                  role="button"
                  className="d-flex justifay-content-betwen cursore-pointer"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Docsdown-arrow
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section>
        <div className="container"></div>
      </section>
    </div>
  );
}
