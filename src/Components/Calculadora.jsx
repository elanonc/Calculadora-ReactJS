import React, { useState } from "react";

import './Calculadora.css';
import Container from '@mui/material/Container';
import { Box } from "@mui/system";

export function Calculadora() {

    const [car, setCar] = useState(0); // Pode ser um numero ou uma virgula
    const [operador, setOperador] = useState();
    const [oldCar, setOldCar] = useState();


    function insereCaractere(e) {
        var input = e.target.value;
        if (car === 0) {
            setCar(input);
        } else {    
            setCar(car + input);
        }
    }

    function zerar() {
        setCar(0);
    }

    function porcentagem() {
        if (car != 0) {
            setCar(car / 100);    
        }
    }

    function inverteSinal() {
        if (car > 0) {
            setCar(- car);
        } else {
            setCar(Math.abs(car))
        }
    }

    function calculo (){
        if (operador === "+") {
            setCar(oldCar + car);        
        } else if (operador === "-") {
            setCar(oldCar - car);
        } else if (operador === "/") {
            setCar(oldCar / car);
        } else if (operador === "X") {
            setCar(oldCar * car);
        } 
    }

    function handleOperador(e){
        var inputOperador = e.target.value;
        setOperador(inputOperador);
        setOldCar(car);
        setCar(0); 
    }

    return (
        <div>
            <Box m={12}>
                <Container maxWidth="xs">
                <div className="wrapper">
                        <h1 className="resultado">{car}</h1>
                        <button onClick={zerar}>AC</button>
                        <button onClick={inverteSinal}>+/-</button>
                        <button onClick={porcentagem}>%</button>
                        <button className="operador" onClick={handleOperador} value={"/"}>/</button>
                        <button className="caractere" onClick={insereCaractere} value={7}>7</button>
                        <button className="caractere" onClick={insereCaractere} value={8}>8</button>
                        <button className="caractere" onClick={insereCaractere} value={9}>9</button>
                        <button className="operador" onClick={handleOperador} value={"X"}>X</button>
                        <button className="caractere" onClick={insereCaractere} value={4}>4</button>
                        <button className="caractere" onClick={insereCaractere} value={5}>5</button>
                        <button className="caractere" onClick={insereCaractere} value={6}>6</button>
                        <button className="operador" onClick={handleOperador}  value={"-"}>-</button>
                        <button className="caractere" onClick={insereCaractere} value={1}>1</button>
                        <button className="caractere" onClick={insereCaractere} value={2}>2</button>
                        <button className="caractere" onClick={insereCaractere} value={3}>3</button>
                        <button className="operador" onClick={handleOperador} value={"+"}>+</button>
                        <button className="caractere" onClick={insereCaractere} value={0}>0</button>
                        <button className="caractere" onClick={insereCaractere} value={","}>,</button>
                        <button className="operador" onClick={calculo}>=</button>
                </div>
                </Container>
            </Box>
        </div>
    )
}