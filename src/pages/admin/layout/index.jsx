import SideBar from './sideBar'
export default function AdminLayout({children}){
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2 border shadow-sm">
                    <SideBar/>
                </div>
                <div className="col-10">
                    <div className="row justify-content-center">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}