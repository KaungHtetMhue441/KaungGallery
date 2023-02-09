export default function sideBar(){
    return (
        <div className="sideBar">
            <div className="side-bar-header p-3">
                <h4 className="text-primary">
                    <i className="fa fa-house-chimney"></i> KaungGallery
                </h4>
            </div>
            <hr />
            <nav className="nav nav-pills flex-column p-lg-2">
                <a className="flex-sm-fill  nav-link active" aria-current="page" href="#">Active</a>
                <a className="flex-sm-fill  nav-link" href="#">Longer nav link</a>
                <a className="flex-sm-fill  nav-link" href="#">Link</a>
                <a className="flex-sm-fill  nav-link">Disabled</a>
            </nav>
        </div>
    )
}