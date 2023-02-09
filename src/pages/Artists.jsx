import Card from "../components/cards/Card";
import AdminLayout from "./admin/layout"
import Form from "../components/forms/Form";
import Input from "../components/input/Input";
export default function Artists (){
    return (
        <AdminLayout>
            <Card title="KaungGallery" cardClass="col-8 mt-3">
                <Form action="#" method="get"  encType="Multi" >
                        <ArtistCreateInput/>
                </Form>
            </Card>
        </AdminLayout>
    );
}


function ArtistCreateInput()
{
    return(
        <>
            <Input type="text" name="name" label="Name" placeholder="Type something"/>
            <Input type="text" name="name" label="Name" placeholder="Type something"/>
            <Input type="text" name="name" label="Name" placeholder="Type something"/>
            <Input type="text" name="name" label="Name" placeholder="Type something"/>
        </>

    )
}
