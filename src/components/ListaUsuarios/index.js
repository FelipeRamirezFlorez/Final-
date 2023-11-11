import Usuario from '../Usuario/INDEX';
import './style.css'

function ListaUsuarios() {
    return (
        <div className='lista-usuarios'>
            <Usuario usuario={
                {
                    name: "Felipe",
                    lastName: "Ramirez",
                    type: "ADMIN",
                    photoUrl: "https://icon-library.com/images/2018/3965934_usuario-aws-certification-transparent-png.png"  
                }
            }/>
        </div>
    )
}

export default ListaUsuarios;