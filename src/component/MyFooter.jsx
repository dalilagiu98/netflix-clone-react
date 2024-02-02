const MyFooter = function() {
    return (
        <div className="bg-dark" data-bs-theme="dark">
        <div className="container text-white ps-5 pe-5">
          <div className="row">
            <div className="col mt-4">
              <button className="btn text-white">
                <i className="bi bi-facebook"></i>
              </button>
              <button className="btn text-white">
                <i className="bi bi-instagram"></i>
              </button>
              <button className="btn text-white">
                <i className="bi bi-twitter"></i>
              </button>
              <button className="btn text-white">
                <i className="bi bi-youtube"></i>
              </button>
            </div>
          </div>
          <div className="row gy-1 gx-1">
            <div className="col-3">
              <p>Audio and Subtitles</p>
            </div>
            <div className="col-3">
              <p>Audio Description</p>
            </div>
            <div className="col-3">
              <p>Help Center</p>
            </div>
            <div className="col-3">
              <p>Gift Cards</p>
            </div>
            <div className="col-3">
              <p>Media Center</p>
            </div>
            <div className="col-3">
              <p>Investor Relations</p>
            </div>
            <div className="col-3">
              <p>Jobs</p>
            </div>
            <div className="col-3">
              <p>Terms of Use</p>
            </div>
            <div className="col-3">
              <p>Privacy</p>
            </div>
            <div className="col-3">
              <p>Legal Notices</p>
            </div>
            <div className="col-3">
              <p>Cookie Preferences</p>
            </div>
            <div className="col-3">
              <p>Corporate Information</p>
            </div>
            <div className="col-3">
              <p>Contact Us</p>
            </div>
          </div>
          <div className="row">
            <div className="col-1">
              <p
                id="services"
                className="border border-white text-white btn rounded-0"
                type="submit"
              >
                Service Code
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p>&copy; 1997 - 2024 Netflix, Inc.</p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default MyFooter