import { BsFillCalendarCheckFill } from "react-icons/bs";
import { ContainerDate } from "./style";

const Time  = () =>{
    const data = new Date();
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const dataAtual = dia + '/' + mes + '/' + ano;
    console.log(dataAtual);
  
    return(
        <ContainerDate>
            <BsFillCalendarCheckFill/>
            {dataAtual}
       </ContainerDate>
    )
};

export default Time;