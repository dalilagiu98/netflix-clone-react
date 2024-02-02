const User = function () {
    return (
        <>
        <main className="d-flex justify-content-center h-100 bg-dark pb-4">
            <section className="d-flex flex-column container  mt-md-5 pt-5 p-5 p-md-0 text-white">
            <h1 className="display-4 border-bottom text-start">Edit Profile</h1>
            <div className="d-flex text-md-start container ">
                <div className="row d-flex justify-content-between gx-3 flex-grow-1">
                    <div className="col-12 col-md-4">
                    <img
                    className="img-fluid p-2" alt="avatar-logo" src="avatar.png"
                    />
                    </div>
                <div className="col-12 col-md-8 ">
                <div className="w-100">
                <div className="border-bottom p-3">
                    <h2 className="fs-5 p-1 bg-black">Strive Student</h2>
                    <h4 className="fs-6 mt-4">Language:</h4>
                    <select className="btn btn-dark border border-white rounded-0 fs-6">
                    <option value="">English</option>
                    <option value="">Italiano</option>
                    <option value="">日本語</option>
                    </select>
                </div>
                <div className="border-bottom p-3">
                    <h3 className="fs-5 mt-1 fw-normal">Maturity Settings:</h3>
                    <h5 className="fs-6 mt-4 p-2 fw-normal bg-black">ALL MATURITY RATINGS</h5>
                    <p>Show titles of all maturity ratings for this profile.</p>
                    <button className="btn btn-dark border border-white rounded-0">
                    EDIT
                    </button>
                </div>
                <div className="p-3">
                    <h3 className="fs-5 mt-1 fw-normal">Autoplay controls</h3>
                    <div>
                    <input type="checkbox" id="next" name="scales" checked />
                    <label for="next"
                        >Autoplay next episode in a series on all devices.</label
                    >
                    </div>
                    <div>
                    <input type="checkbox" id="preview" name="scales" checked />
                    <label for="preview"
                        >Autoplay previews while browsing on all devices.</label
                    >
                    </div>
                </div>
                </div>
                </div>
                </div>
            </div>
            <div className="d-flex justify-content-around border-top pt-4">
                <button className="btn btn-dark border border-white rounded-0">
                SAVE
                </button>
                <button className="btn btn-dark border border-white rounded-0">
                CANCEL
                </button>
                <button className="btn btn-dark border border-white rounded-0">
                DELETE PROFILE
                </button>
            </div>
            </section>
      </main>
      </>
    )
}

export default User 