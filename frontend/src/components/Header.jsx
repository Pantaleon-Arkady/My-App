function Headers({ rightFeature, page }) {

    return (
        <div className="main_header_div bg-black px-3 py-4 text-center d-flex flex-row justify-content-start justify-content-md-between text-white">

            <div className="mobile_header_feature d-flex d-md-none">
            </div>

            <div className="header-app-name text-center text-md-start fs-2 fw-bold d-flex flex-row justify-content-between">
                <div
                    className={`
                    ${page === "post" ? "d-none d-md-block" : ""}
                    `}
                >
                    Workout Tracker
                </div>
            </div>

            <div className="w-25 flex-row justify-content-around d-none d-md-flex">
            </div>

        </div>
    )
}

export default Headers;