import React from 'react'

function Sidebar() {
  return (
    <nav
    id="sidebarMenu"
    className="col-md-2 col-lg-2 d-md-block bg-light sidebar collapse"
  >
    <div className="position-sticky pt-2 sidebar-sticky">
      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Menü grup 1</span>
      </h6>
      <ul className="nav flex-column">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span
              data-feather="file"
              className="align-text-bottom"
            ></span>
            Hesabım
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span
              data-feather="layers"
              className="align-text-bottom"
            ></span>
            Seçenek 2
          </a>
        </li>
      </ul>

      <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted text-uppercase">
        <span>Menü grup 2</span>
      </h6>
      <ul className="nav flex-column mb-2">
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span
              data-feather="file-text"
              className="align-text-bottom"
            ></span>
            Ayarlar
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">
            <span
              data-feather="file-text"
              className="align-text-bottom"
            ></span>
            Hakkımızda
          </a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Sidebar