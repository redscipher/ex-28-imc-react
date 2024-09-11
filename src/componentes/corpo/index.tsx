// importacoes
import { useState } from "react";
import estilos from './corpo.module.scss';

// componente
const Corpo = () => {

    const [vlrIMC, setVlrIMC] = useState(0);
    const [vlrAltura, setVlrAltura] = useState(0);
    const [vlrPeso, setVlrPeso] = useState(0);

    let calculaIMC = function() {
        try {
            // variaveis
            let vlr: number = 0, vlrTempAlt: number = 0, vlrTempPeso :number = 0;
            // tratamento valores
            vlrTempAlt = parseFloat((vlrAltura / 100) as unknown as string);
            vlrTempPeso = parseFloat(vlrPeso as unknown as string);
            // calculo imc
            vlr = vlrTempPeso / (vlrTempAlt * vlrTempAlt);
            // tratamento
            if (isNaN(vlr)) vlr= 0;
            // define valor
            setVlrIMC(vlr);
        } catch (error: any) {
            console.log(error.stack);
        }
    }

    // retorna componente
    return (
        <main className="container text-center pt-5">
            <div className="row">
                <div className="col-12">
                    <form action="" className={estilos.formulario}>
                        <div>
                            <label className="form-label" htmlFor="">Altura (cm): </label>
                            <input className="form-control" type="number" placeholder="Digite a altura" onChange={(e: any) => setVlrAltura(e.target.value)} onBlur={calculaIMC} />
                            <label className="form-label" htmlFor="">Peso (kg): </label>
                            <input className="form-control" type="number" placeholder="Digite o peso" onChange={(e: any) => setVlrPeso(e.target.value)} onBlur={calculaIMC} />
                        </div>
                        <label className="form-label" htmlFor="">IMC: {vlrIMC}</label>
                    </form>
                    {/* classificacao na tabela */}
                    <div className={estilos.classificacao}>
                        <label htmlFor="" className="form-label">Classificação IMC: </label>
                        <select title="selecao" name="" id="" className="form-select">
                            {vlrIMC < 18.5 ? (<option value="1" selected>Abaixo do peso</option>) : (<option value="1">Abaixo do peso</option>)}
                            {vlrIMC >= 18.5 && vlrIMC <= 24.9 ? (<option value="2" selected>Peso normal</option>) : (<option value="2">Peso normal</option>)}
                            {vlrIMC >= 25 && vlrIMC <= 29.9 ? (<option value="3" selected>Sobrepeso</option>) : (<option value="3">Sobrepeso</option>)}
                            {vlrIMC >= 30 && vlrIMC <= 34.9 ? (<option value="4" selected>Obesidade Grau I</option>) : (<option value="4">Obesidade Grau I</option>)}
                            {vlrIMC >= 35 && vlrIMC <= 39.9 ? (<option value="5" selected>Obesidade Grau II</option>) : (<option value="5">Obesidade Grau II</option>)}
                            {vlrIMC >= 40 ? (<option value="6" selected>Obesidade Grau III (Obesidade Mórbida)</option>) : (<option value="6">Obesidade Grau III (Obesidade Mórbida)</option>)}
                        </select>
                    </div>
                </div>
            </div>
        </main>
    )
}

// exportacao
export default Corpo;