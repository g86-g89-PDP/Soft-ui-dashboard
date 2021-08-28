import { FcUpload } from "react-icons/fc";
const ProfileBottom = () => {
  return (
    <div>
      <div className="profile-bottom">
        <h1>Projects</h1>
        <p>Architects design houses</p>
        <div className="row d-flex">
          <div className="col-md-9 row">
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
            <div className="col-md-4">
              <img src="/decor1.png" alt="decoration" />
              <p>Project #1</p>
              <h1>Modern</h1>
              <p>
                As Uber works through a huge amount of internal management
                turmoil.
              </p>
              <button>VIEW PROJECT</button>
            </div>
          </div>
          <div className="col-md-3 upload-project">
            <div className="text-center">
              <FcUpload />
              <h1>Upload a project</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileBottom;
