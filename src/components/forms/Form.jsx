export default function Form ({action,method,encType,children})
{
    return (
        <form action={action} method={method} encType={encType}>{children}</form>
    )
}