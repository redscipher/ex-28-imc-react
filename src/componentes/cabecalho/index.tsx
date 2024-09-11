// importacoes
import estilos from './cabecalho.module.scss';

// componente
const Cabecalho = () => {

    // retorna componente
    return (
        <header>
            <div className="container">
                <h1 className={estilos.titulo}>Calculadora de <strong>IMC</strong> <i className="bi bi-calculator-fill"></i></h1>
                <h2 className={estilos.tituloSub}><strong>I</strong>ndice de <strong>M</strong>assa <strong>C</strong>orporal</h2>
            </div>
        </header>
    )
}

// exporta componente
export default Cabecalho;